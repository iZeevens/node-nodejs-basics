import fs from "node:fs";
import { stdin } from "node:process";
import { getDirname } from "../fs/pathHelper.js";
import { join } from "node:path";

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const pathFileToRead = join(__dirname, "files", "fileToWrite.txt");

  const output = fs.createWriteStream(pathFileToRead, { encoding: "utf-8" });

  console.log(
    "Please enter any text.\nTo terminate the program, press Ctrl + C:\n"
  );

  return new Promise((resolve, reject) => {
    stdin.pipe(output);
    output.on('finish', resolve);
    output.on('error', reject);
  })
};

await write();
