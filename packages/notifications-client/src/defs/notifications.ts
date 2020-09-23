export interface SendNotificationRequest {
  channels: string[];
  message: string;
}

export interface SendNotificationResponse {
  notificationsIds: string[];
}

export type GetNotificationsColumns = "id" | "channel" | "message" | "createdAt";

export type GetNotificationsFilterOperators = "eq" | "neq" | "lt" | "gt" | "include";

export interface GetNotificationsRequest {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetNotificationsColumns]?: {
      [operator in GetNotificationsFilterOperators]?: string;
    };
  };
  order?: {
    by: "resource" | "attribute";
    type: "asc" | "desc";
  };
}

export interface Notification {
  id: string;
  channel: string;
  message: string;
  createdAt: Date;
}

export interface GetNotificationsResponse {
  notifications: Notification[];
  total: number;
  page: number;
  limit: number;
}

export interface Notifications {
  send(request: SendNotificationRequest): Promise<SendNotificationResponse>;
  get(queryFilter?: GetNotificationsRequest): Promise<GetNotificationsResponse>;
}
