import { getHttpError } from "../errors/http-errors";
import { ServiceClient } from "perron";
import { CreatePdfRequest, CreatePdfResponse, DownloadPdfRequest, Pdf } from "../defs/pdf";

export const pdf = (serviceClient: ServiceClient) =>
  ({
    create(request: CreatePdfRequest): Promise<CreatePdfResponse> {
      return serviceClient
        .request({
          pathname: "/api/pdf/create-pdf",
          method: "POST",
          body: JSON.stringify(request),
        })
        .then((response) => ({ fileId: (response.body as any).url.split("/").pop(), ...(response.body as any) } as CreatePdfResponse))
        .catch((error) => {
          throw getHttpError(error);
        });
    },
    download(request: DownloadPdfRequest): Promise<string> {
      return serviceClient
        .request({
          pathname: `/api/download-pdf/${request.fileId}`,
          method: "GET",
        })
        .then((response) => response.body as string)
        .catch((error) => {
          throw getHttpError(error);
        });
    }
  } as Pdf);
