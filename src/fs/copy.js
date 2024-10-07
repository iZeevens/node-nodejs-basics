import fs from "node:fs/promises";
import { join } from "path";
import { getDirname } from "./pathHelper.js";

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const filesPath = join(__dirname, "files");
  const copyFilesPath = join(__dirname, "files_copy");

  try {
    await fs.access(filesPath);
    try {
      await fs.access(copyFilesPath);

      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.cp(filesPath, copyFilesPath, { recursive: true });
      } else {
        throw err;
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await copy();
