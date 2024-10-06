import { Transform } from "node:stream";
import { stdout, stdin } from "node:process";

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const reveseChunk = chunk.toString().split("").reverse().join("");
    callback(null, reveseChunk + "\n");
  },
});

const transform = async () => {
  console.log(
    "Please enter any text.\nTo terminate the program, press Ctrl + C:\n"
  );
  stdin.pipe(reverse).pipe(stdout);
};

await transform();
