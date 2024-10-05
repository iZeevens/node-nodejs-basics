import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const filesPath = join(__dirname, "files");

  if (!fs.existsSync(filesPath)) {
    throw new Error("FS operation failed");
  } else {
    fs.readdir(filesPath, (err, files) => {
      if (err) {
        throw new Error(err);
      }

      console.log(files);
    });
  }
};

await list();
