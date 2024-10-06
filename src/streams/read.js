import fs from "node:fs";
import { getDirname } from "../fs/pathHelper.js";
import { join } from "node:path";
import { stdout } from "node:process";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const pathFileToRead = join(__dirname, "files", "fileToRead.txt");

  const input = fs.createReadStream(pathFileToRead, { encoding: "utf-8" });

  return new Promise((resolve, reject) => {
    input.pipe(stdout);

    input.on('end', resolve);
    input.on('error', reject);
  })
};

await read();
