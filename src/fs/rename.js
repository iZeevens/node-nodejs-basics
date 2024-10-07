import fs from "node:fs/promises";
import { join } from "node:path";
import { getDirname } from "./pathHelper.js";

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const wrongFilePath = join(__dirname, "files", "wrongFilename.txt");
  const propertyFilePath = join(__dirname, "files", "properFilename.txt");

  try {
    await fs.access(wrongFilePath);

    try {
      await fs.access(propertyFilePath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.rename(wrongFilePath, propertyFilePath);
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

await rename();
