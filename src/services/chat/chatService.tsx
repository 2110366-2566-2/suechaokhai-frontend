import {
  Chat,
  ChatMessage,
  WSInEvent,
  WSInEventType,
  WSOutEvent,
  WSOutEventType,
} from "@/models/chat";
import getAllChats from "./getAllChats";
import getMessages from "./getMessages";

export interface ChatServiceEvents {
  onOpen?: (e: Event) => void;
  onClose?: (e: CloseEvent) => void;
  onMessage?: (e: MessageEvent<string>) => void;
}

export class ChatService {
  private ChatService() {}
  private static instance: ChatService;
  public static getInstance(): ChatService {
    if (!ChatService.instance) ChatService.instance = new ChatService();
    return ChatService.instance;
  }

  private conn?: WebSocket = undefined;

  private currentChatUserId: string = "";
  private chats: {
    [key: string]: {
      chat: Chat;
      messages: ChatMessage[];
    };
  } = {};

  private onConnection?: () => void;

  private sendingLists: {
    [key: string]: (tag: string, msg: ChatMessage) => void;
  } = {};

  private registeredCallback: {
    [key: string]: (payload: ChatMessage) => void;
  } = {};

  public connect(events: ChatServiceEvents) {
    if (!this.conn) {
      this.conn = new WebSocket(
        `${process.env.NEXT_PUBLIC_WS_BACKEND_HOST!}/ws/chats`
      );

      this.conn.onopen = (e: Event) => {
        console.log("Connected");
        events.onOpen?.(e);
      };

      this.conn.onmessage = (e: MessageEvent<string>) => {
        events.onMessage?.(e);
      };

      this.conn.onclose = (e: CloseEvent) => {
        console.log("Disconnected", e.reason);
        events.onClose?.(e);
      };
    }
  }

  public isConnected(): boolean {
    return this.conn !== undefined;
  }

  public async openChat(userId: string) {
    if (!this.isConnected()) return [];

    let sent_at = new Date(Date.now());
    this.send("JOIN", userId, sent_at);

    this.currentChatUserId = userId;

    await this.getNextMessages();

    console.log(this.chats);
  }

  public async getAllChats(query?: string): Promise<Chat[]> {
    try {
      let chats = await getAllChats(query);

      chats.forEach((chat: Chat) => {
        this.chats[chat.user_id] = {
          chat,
          messages: [],
        };
      });

      return Promise.resolve(chats);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public getCurrentChat(): Chat {
    return this.chats[this.currentChatUserId].chat;
  }

  public async getNextMessages(): Promise<ChatMessage[]> {
    let msgs = await getMessages(
      this.currentChatUserId,
      this.chats[this.currentChatUserId].messages.length
    );
    this.chats[this.currentChatUserId].messages = msgs;
    return msgs;
  }

  public getAllMessages(): ChatMessage[] {
    return this.chats[this.currentChatUserId].messages;
  }

  public sendMessage(
    msg: string,
    onCallback?: (tag: string, msg: ChatMessage) => void
  ): string {
    if (!this.isConnected()) return "";

    let sentAt = new Date(Date.now());
    let tag = this.send("MSG", msg, sentAt);

    if (onCallback) this.sendingLists[tag] = onCallback;

    this.chats[this.currentChatUserId].messages.push();

    return tag;
  }

  private send(event: WSOutEventType, content: string, sentAt: Date): string {
    if (!this.conn) return "";

    let tag: string = Math.random().toString(16).substring(2);
    let msg: WSOutEvent = {
      event,
      content,
      sent_at: sentAt.toISOString(),
      tag,
    };

    this.conn.send(JSON.stringify(msg));

    return tag;
  }

  public on(event: WSInEventType, callback: (payload: ChatMessage) => void) {
    this.registeredCallback[event] = callback;
  }

  private onMessage(e: MessageEvent<string>) {
    let msg = JSON.parse(e.data) as WSInEvent;

    console.log(msg);

    switch (msg.event) {
      case "CONN":
        if (!!this.onConnection) this.onConnection();
        break;

      case "MSG":
        let payload = msg.payload as ChatMessage;
        let sendingCallback = this.sendingLists[msg.tag];
        if (sendingCallback !== undefined) {
          sendingCallback(msg.tag, payload);
          delete this.sendingLists[msg.tag];
        }

        if (this.registeredCallback[msg.event] !== undefined)
          this.registeredCallback[msg.event](msg.payload);

        break;

      case "READ":
        break;

      case "CHATS":
        break;
    }
  }
}
