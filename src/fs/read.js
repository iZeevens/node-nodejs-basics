import fs from "node:fs/promises";
import { join } from "node:path";
import { getDirname } from "./pathHelper.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const readFilePath = join(__dirname, "files", "fileToRead.txt");

  try {
    const data = await fs.readFile(readFilePath, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await read();
