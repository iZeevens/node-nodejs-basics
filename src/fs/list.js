import fs from "node:fs/promises";
import { join } from "node:path";
import { getDirname } from "./pathHelper.js";

const __dirname = getDirname(import.meta.url);
const list = async () => {
  const filesPath = join(__dirname, "files");

  try {
    await fs.access(filesPath);
    const files = await fs.readdir(filesPath);
    console.log(files);

  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }

};

await list();
