import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
