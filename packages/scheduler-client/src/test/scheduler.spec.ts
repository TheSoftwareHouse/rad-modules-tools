import "mocha";
import * as assert from "assert";
import { AddJobRequest, JobsQueryFilter, JobType } from "../defs/jobs";
import { SchedulerClient } from "../index";
import { v4 } from "uuid";

describe("Resource Jobs", () => {
  const schedulerClient = new SchedulerClient({
    host: "localhost",
    port: 50070,
  });

  let jobId;

  it("Should get jobs", async () => {
    const jobsQueryFilter: JobsQueryFilter = {};

    const result = await schedulerClient.jobs.getJobs(jobsQueryFilter);
    assert.deepStrictEqual(Object.keys(result ?? {}), ["jobs", "total", "page", "limit"]);
  });

  it("Should add job", async () => {
    const job: AddJobRequest = {
      name: v4(),
      type: JobType.HTTP,
      payload: {
        url: "example.com",
      },
    };

    const result = await schedulerClient.jobs.addJob(job).catch();
    assert.deepStrictEqual(Object.keys(result ?? {}), ["id"]);
    jobId = result.id;
  });

  it("Should cancel job", async () => {
    await schedulerClient.jobs.cancelJob({ jobId });
  });
});
