import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const removeFilePath = join(__dirname, "files", "fileToRemove.txt");

  if (!fs.existsSync(removeFilePath)) {
    throw new Error("FS operation failed");
  } else {
    fs.rm(removeFilePath, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await remove();
