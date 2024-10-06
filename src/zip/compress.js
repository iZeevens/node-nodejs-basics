import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

import { getDirname } from "../fs/pathHelper.js";
import { join } from "node:path";

const __dirname = getDirname(import.meta.url);

const compress = async () => {
  const pathFileToCompress = join(__dirname, "files", "fileToCompress.txt");
  const pathFileToCompressed = join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(pathFileToCompress);
  const destnation = createWriteStream(pathFileToCompressed);
  pipeline(source, gzip, destnation, (err) => {
    if (err) {
      throw new Error(err);
    }
    process.exitCode = 1;
  });
};

await compress();
