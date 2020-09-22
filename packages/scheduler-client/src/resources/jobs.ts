import { getHttpError } from "../errors/http-errors";
import { ServiceClient } from "perron";

import {
  AddJobRequest,
  AddJobResponse,
  CancelJobRequest,
  CancelJobResponse,
  GetJobsRequest,
  GetJobsResponse,
  Jobs,
} from "../defs/jobs";

export const jobs = (serviceClient: ServiceClient) =>
  ({
    getJobs(queryFilter: GetJobsRequest = {}): Promise<GetJobsResponse> {
      return serviceClient
        .request({
          pathname: "/api/scheduling/get-jobs",
          method: "GET",
          query: queryFilter,
        })
        .then((response) => response.body as GetJobsResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
    addJob(request: AddJobRequest): Promise<AddJobResponse> {
      return serviceClient
        .request({
          pathname: "/api/scheduling/schedule-job",
          method: "POST",
          body: JSON.stringify({ ...request }),
        })
        .then((response) => response.body as AddJobResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
    cancelJob(request: CancelJobRequest): Promise<CancelJobResponse> {
      return serviceClient
        .request({
          pathname: "/api/scheduling/cancel-job",
          method: "DELETE",
          query: request,
        })
        .then(() => {})
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Jobs);
