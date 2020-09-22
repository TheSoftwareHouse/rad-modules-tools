export type GetJobsColumns = "id" | "name" | "service" | "action" | "status" | "createdAt" | "updatedAt";

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
    by: "user.username" | "name";
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
  attributes: Job[];
  total: number;
}

export interface Jobs {
  getJobs(queryFilter?: GetJobsRequest): Promise<GetJobsResponse>;
}
