import fs from "fs";
import { join } from "path";
import { getDirname } from './pathHelper.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const readFilePath = join(__dirname, "files", "fileToRead.txt");

  if (!fs.existsSync(readFilePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.readFile(readFilePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        throw new Error(err);
      }

      console.log(data);
    });
  }
};

await read();
