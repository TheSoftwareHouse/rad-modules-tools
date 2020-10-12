export type GetJobsColumns = "id" | "name" | "type" | "status" | "createdAt" | "updatedAt";

export type GetJobsFilterOperators =
  | "eq"
  | "eqOr"
  | "neq"
  | "neqOr"
  | "lt"
  | "ltOr"
  | "lte"
  | "lteOr"
  | "gt"
  | "gtOr"
  | "gte"
  | "gteOr"
  | "include"
  | "includeOr"
  | "in"
  | "inOr";

export interface JobsQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetJobsColumns]?: {
      [operator in GetJobsFilterOperators]?: string;
    };
  };
  order?: {
    by: "id" | "name" | "service" | "action" | "status" | "createdAt" | "updatedAt";
    type: "asc" | "desc";
  };
}

type jsonB = { [key: string]: any };

export enum JobType {
  HTTP = "http",
}

export interface JobOptions {
  priority?: number;
  delay?: number;
  attempts?: number;
  cron?: string;
  cronStartDate?: string;
  cronEndDate?: string;
  cronTimeZone?: string;
  cronLimit?: number;
  backoff?: number;
  lifo?: boolean;
  timeout?: number;
  removeOnComplete?: boolean;
  removeOnFail?: boolean;
  stackTraceLimit?: number;
}

export enum JobStatus {
  New = "new",
  Active = "active",
  Completed = "completed",
  Failed = "failed",
  Paused = "paused",
  Deleted = "deleted",
}

export interface Job {
  id: string;
  name: string;
  type: JobType;
  cron?: string;
  status: JobStatus;
  jobOptions?: JobOptions;
  payload?: jsonB;
  createdAt: Date;
  updatedAt: Date;
}

export type GetJobsRequest = JobsQueryFilter;

export interface GetJobsResponse {
  jobs: Job[];
  page: number;
  limit: number;
  total: number;
}

export type ObjectType = { [key: string]: string };

export enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

export type HttpPayload = {
  method?: HttpMethod;
  url: string;
  headers?: string[][] | ObjectType;
  body?: string | ObjectType | ObjectType[];
  options?: {
    compress?: boolean;
    follow?: number;
    size?: number;
    timeout?: number;
  };
};

export interface AddJobRequest {
  name: string;
  type: JobType;
  payload?: HttpPayload;
  jobOptions?: JobOptions;
  startImmediately?: boolean;
}

export interface AddJobResponse {
  id: string;
}

export interface CancelJobRequest {
  jobId: string;
}

export type CancelJobResponse = void;

export interface Jobs {
  getJobs(queryFilter?: GetJobsRequest): Promise<GetJobsResponse>;
  addJob(request: AddJobRequest): Promise<AddJobResponse>;
  cancelJob(request: CancelJobRequest): Promise<CancelJobResponse>;
}
