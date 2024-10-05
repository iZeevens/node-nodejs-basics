import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
