import { getHttpError } from "../errors/http-errors";
import { ServiceClient } from "perron";
import { Mailer, SendRequest } from "../defs/mailer";

export const mailer = (serviceClient: ServiceClient) =>
  ({
    send(request: SendRequest): Promise<void> {
      return serviceClient
        .request({
          pathname: "/api/mailer/send",
          method: "POST",
          body: JSON.stringify(request),
        })
        .then(() => {})
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Mailer);
