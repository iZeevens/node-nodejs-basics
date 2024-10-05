import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
