import { join } from "path";
import { getDirname } from "../fs/pathHelper.js";

const __dirname = getDirname(import.meta.url);

import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const promisesWorkers = [];
  const workerPath = join(__dirname, "worker.js");
  const cpuCount = cpus().length;

  for (let i = 0; i <= cpuCount; i++) {
    const data = 10 + i;

    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: data });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
    promisesWorkers.push(promise);
  }

  const result = await Promise.allSettled(promisesWorkers);
  console.log(result);
};

await performCalculations();
