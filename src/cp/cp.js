import { join } from "path";
import { getDirname } from "../fs/pathHelper.js";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const scriptFilePath = join(__dirname, "files", "script.js"); 
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
