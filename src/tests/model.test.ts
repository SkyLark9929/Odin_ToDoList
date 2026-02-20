import { Model } from "../model.js";
import {
  task,
  job,
  project,
  taskId,
  projectId,
} from "../interfaces/interfaces.js";
import { createTask } from "../factories/task.js";
import { faker } from "@faker-js/faker/locale/en";
import { createJob } from "../factories/jobs.js";
import { createProject } from "../factories/projects.js";
import { describe, test, expect } from "vitest";

describe("store_task", () => {
  test("stores all tasks", () => {
    testAdd("add_task");
  });

  test("stores all projects", () => {
    testAdd("add_project");
  });
});

function testAdd(jobName: string): void {
  const AMOUNT_OF_JOBS = 10;
  const test_model: Model = new Model();
  const jobArray: Array<job> = createFakeJobs(jobName, AMOUNT_OF_JOBS);

  for (const job of jobArray) {
    test_model.dispatchJob(job);
  }

  let storedElements: object = test_model.taskDict;
  if (Object.keys(storedElements).length == 0) {
    storedElements = test_model.projectDict;
  }

  for (const job of jobArray) {
    const element: any = job.payload;
    const elementId: any = element.id;
    expect(storedElements[elementId]).toBeDefined();
    expect(storedElements[elementId]).toEqual(element);
  }
}

function createFakeJobs(name: string, amount: number): Array<job> {
  let jobsArray: Array<job> = [];
  const addTaskCallsign = "add_task";
  const addProjectCallsign = "add_project";

  switch (name) {
    case addTaskCallsign:
      const tasks: Array<task> = generateFakeTasks(amount);
      jobsArray = wrapPayloadsIntoJobs(name, tasks);
      break;

    case addProjectCallsign:
      const projects: Array<project> = generateFakeProjects(amount);
      jobsArray = wrapPayloadsIntoJobs(name, projects);
      break;
  }

  return jobsArray;
}

function generateFakeTasks(amount: number): Array<task> {
  const generatedTasks: Array<task> = [];
  for (let i: number = 0; i < amount; i++) {
    const name: string = "test_task_" + i;
    const description: string = faker.lorem.lines();
    const taskId: taskId = faker.string.uuid();
    const projectId: projectId = faker.string.uuid();
    const newTask: task = createTask(name, description, taskId, projectId);
    generatedTasks.push(newTask);
  }

  return generatedTasks;
}

function generateFakeProjects(amount: number): Array<project> {
  const generatedProjects: Array<project> = [];
  for (let i: number = 0; i < amount; i++) {
    const name: string = "test_project_" + i;
    const id: string = faker.string.uuid();
    const newProject: project = createProject(name, id);
    generatedProjects.push(newProject);
  }

  return generatedProjects;
}

function wrapPayloadsIntoJobs(job_name: string, payload: any): Array<job> {
  const jobArray: Array<job> = [];
  for (let element of payload) {
    const job: job = createJob(job_name, element);
    jobArray.push(job);
  }
  return jobArray;
}
