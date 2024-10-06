import { createHash } from "node:crypto";
import { getDirname } from "../fs/pathHelper.js";
import { join } from "node:path";
import fs from "node:fs";

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
  const hash = createHash("sha256");
  const pathFileToCalc = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const input = fs.createReadStream(pathFileToCalc);
  input.on("readable", () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
