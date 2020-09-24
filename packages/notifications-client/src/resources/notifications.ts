import { ServiceClient } from "perron";
import * as qs from "qs";
import {
  GetNotificationsRequest,
  GetNotificationsResponse,
  Notifications,
  SendNotificationRequest,
  SendNotificationResponse,
} from "../defs/notifications";
import { getHttpError } from "../errors/http-errors";

export const notifications = (serviceClient: ServiceClient) =>
  ({
    send(request: SendNotificationRequest): Promise<SendNotificationResponse> {
      return serviceClient
        .request({
          pathname: "/api/notifications/send",
          method: "POST",
          body: JSON.stringify(request),
        })
        .then((response) => response.body as SendNotificationResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
    get(queryFilter?: GetNotificationsRequest): Promise<GetNotificationsResponse> {
      return serviceClient
        .request({
          pathname: `/api/notifications/get-notifications?${qs.stringify(queryFilter)}`,
          method: "GET",
        })
        .then((response) => response.body as GetNotificationsResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Notifications);
