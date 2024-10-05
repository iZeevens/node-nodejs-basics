import fs from "fs";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const filesPath = join(__dirname, "files");
  const copyFilesPath = join(__dirname, "files_copy");

  if (fs.existsSync(copyFilesPath) || !fs.existsSync(filesPath)) {
    throw new Error("FS operation failed");
  } else {
    fs.cp(filesPath, copyFilesPath, { recursive: true }, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await copy();
