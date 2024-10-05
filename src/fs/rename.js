import fs from "fs";
import { join } from "path";
import { getDirname } from './pathHelper.js';

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const wrongFilePath = join(__dirname, "files", "wrongFilename.txt");
  const propertyFilePath = join(__dirname, "files", "properFilename.txt");

  if (!fs.existsSync(wrongFilePath) || fs.existsSync(propertyFilePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.rename(wrongFilePath, propertyFilePath, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await rename();
