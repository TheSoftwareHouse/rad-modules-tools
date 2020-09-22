import "mocha";
import * as assert from "assert";
import { JobsQueryFilter } from "../defs/jobs";
import { SchedulerClient } from "../index";

describe("Resource Jobs", () => {
  const schedulerClient = new SchedulerClient({
    host: "localhost",
    port: 50053,
  });

  it("Should get jobs", async () => {
    const jobsQueryFilter: JobsQueryFilter = {};

    const result = await schedulerClient.jobs.getJobs(jobsQueryFilter);
    assert.deepStrictEqual(Object.keys(result ?? {}), ["jobs", "total", "page", "limit"]);
  });
});
