import { getHttpError } from "../errors/http-errors";
import { ServiceClient } from "perron";
import { CreatePdfRequest, CreatePdfResponse, Pdf } from "../defs/pdf";

export const pdf = (serviceClient: ServiceClient) =>
  ({
    create(request: CreatePdfRequest): Promise<CreatePdfResponse> {
      return serviceClient
        .request({
          pathname: "/api/pdf/create-pdf",
          method: "GET",
          body: JSON.stringify(request),
        })
        .then((response) => response.body as CreatePdfResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Pdf);
