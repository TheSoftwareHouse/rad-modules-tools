export type Sender = {
  name: string;
  email: string;
};

export type Recipient = {
  to: string[];
  cc?: string[];
  bcc?: string[];
};

export type Template = {
  id: string;
  parameters: {
    [key: string]: any;
  };
};

export type Attachment = {
  fileName: string;
  content: string;
};

export interface MailMessage {
  sender: Sender;
  recipient: Recipient;
  template: Template;
  attachments?: Attachment[];
}

export enum EmailQueuePriority {
  URGENT = "urgent",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export interface SendRequest {
  emails: MailMessage[];
  priority?: EmailQueuePriority;
}

export interface Mailer {
  send(request: SendRequest): Promise<void>;
}
