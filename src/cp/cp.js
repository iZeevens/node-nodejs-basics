import { join } from "node:path";
import { getDirname } from "../fs/pathHelper.js";

import { spawn } from "node:child_process";
import { stdin, stdout } from "node:process";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const scriptFilePath = join(__dirname, "files", "script.js");

  const child = spawn("node", [scriptFilePath, ...args]);

  stdin.pipe(child.stdin);

  child.stdout.pipe(stdout);

  child.on("error", (err) => {
    console.error(`Failed to start child process: ${err}`);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);