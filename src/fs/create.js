import fs from "fs";
import { join } from "path";
import { getDirname } from './pathHelper.js';

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const content = "I am fresh and young";
  const filePath = join(__dirname, "files", "fresh.txt");

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await create();
