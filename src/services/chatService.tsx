export type WSOutEventType = "MSG" | "JOIN" | "LEFT";
export interface WSOutEvent {
  event: WSOutEventType;
  content: string;
  sent_at: string;
  tag: string;
}

export type WSInEventType = "MSG" | "READ" | "CHATS" | "CONN";
export interface WSInEvent {
  event: WSInEventType;
  tag: string;
  payload: any;
}

export interface ChatMessage {
  message_id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  read_at: string;
  sent_at: string;
}

export interface Chat {
  user_id: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  unread_messages: number;
  content: string;
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
  private messageLimit: number = 10;
  private chats: {
    [key: string]: {
      chat: Chat;
      offset: number;
      messages: ChatMessage[];
    };
  } = {};

  private onConnection?: () => void;

  private sendingLists: {
    [key: string]: (msg: ChatMessage) => void;
  } = {};

  private registeredCallback: {
    [key: string]: (payload: ChatMessage) => void;
  } = {};

  public connect(onCallback?: () => void) {
    if (!this.conn) {
      this.conn = new WebSocket(
        `${process.env.NEXT_PUBLIC_WS_BACKEND_HOST!}/ws/chats`
      );

      this.conn.onmessage = (e: MessageEvent<string>) => this.onMessage(e);
      this.conn.onopen = (e: Event) => {
        console.log("Connected");
        this.onConnection = onCallback;
      };

      this.conn.onclose = (e: CloseEvent) => {
        console.log("Disconnected", e.reason);
        this.conn?.close();
      };
    }
  }

  public isConnected(): boolean {
    return this.conn !== undefined;
  }

  public async openChat(userId: string) {
    if (!this.isConnected()) return [];

    let sent_at = new Date(Date.now());
    this.sendWSEvent("JOIN", userId, sent_at);
  }

  public sendMessage(msg: string, onCallback?: (msg: ChatMessage) => void) {
    if (!this.isConnected()) return;

    let sentAt = new Date(Date.now());
    let tag = this.sendWSEvent("MSG", msg, sentAt);

    if (onCallback) this.sendingLists[tag] = onCallback;
  }

  public async getAllChats(query?: string): Promise<Chat[]> {
    if (!this.isConnected()) return [];

    try {
      const url = `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST!}/api/v1/chats?query=${query || ""}`;
      let response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      let chats = await response.json();

      chats.forEach((chat: Chat) => {
        this.chats[chat.user_id] = {
          chat,
          messages: [],
          offset: 0,
        };
      });

      return Promise.resolve(chats);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async getNextMessages(): Promise<ChatMessage[]> {
    let msg = await this.getMessages(this.chats[this.currentChatUserId].offset);
    this.chats[this.currentChatUserId].offset += this.messageLimit;
    return msg;
  }

  public getCurrentChat(): Chat {
    return this.chats[this.currentChatUserId].chat;
  }

  public async getMessages(offset: number): Promise<ChatMessage[]> {
    if (!this.isConnected()) return [];

    try {
      const url = `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST!}/api/v1/chats/${this.currentChatUserId}?offset=${offset}&limit=${this.messageLimit}`;
      let response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      let messages = await response.json();

      return Promise.resolve(messages);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private sendWSEvent(
    event: WSOutEventType,
    content: string,
    sentAt: Date
  ): string {
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
          sendingCallback(payload);
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
