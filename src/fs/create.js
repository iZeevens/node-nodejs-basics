import fs from "node:fs/promises";
import { join } from "node:path";
import { getDirname } from "./pathHelper.js";

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const content = "I am fresh and young";
  const filePath = join(__dirname, "files", "fresh.txt");

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, content);
    } else {
      throw err;
    }
  }
};

await create();
