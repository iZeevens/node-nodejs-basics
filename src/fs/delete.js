import fs from "node:fs/promises";
import { join } from "node:path";
import { getDirname } from './pathHelper.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const removeFilePath = join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(removeFilePath)
    await fs.rm(removeFilePath)

  } catch(err) {
    throw new Error("FS operation failed");
  }
};

await remove();
