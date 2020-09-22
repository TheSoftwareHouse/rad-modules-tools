import { getHttpError } from "../errors/http-errors";
import { ServiceClient } from "perron";
import * as qs from "qs";
import { GetJobsRequest, GetJobsResponse, Jobs } from "../defs/jobs";

export const jobs = (serviceClient: ServiceClient) =>
  ({
    getJobs(queryFilter: GetJobsRequest = {}): Promise<GetJobsResponse> {
      return serviceClient
        .request({
          pathname: `/api/scheduling/get-jobs?${qs.stringify(queryFilter)}`,
          method: "GET",
          query: queryFilter,
        })
        .then((response) => response.body as GetJobsResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Jobs);
