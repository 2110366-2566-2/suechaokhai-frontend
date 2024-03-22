import {
  ChatMessage,
  WSInEvent,
  WSInEventType,
  WSOutEvent,
  WSOutEventType,
} from "@/models/chat";

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

  public send(event: WSOutEventType, content: string, sentAt: Date): string {
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
}
