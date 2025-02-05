import {createReadStream, createWriteStream, readFileSync} from "node:fs";
import {rm} from "node:fs/promises";
import JSZip from "jszip";
import {join} from "node:path";
import {pipeline} from "node:stream/promises";
import {globby} from "globby"

const assets = ["main.js", "styles.css", "manifest.json"];

await globby("dist/*.zip").then(files => Promise.all(files.map(f => rm(f))))

const zip = new JSZip();
for (const filename of assets) {
	zip.file(filename, createReadStream(join("dist", filename)));
}
const version = JSON.parse(readFileSync(join("package.json"), "utf-8")).version;
const out = join("dist", `obsidian-templify-${version}.zip`)
await pipeline(
	zip.generateNodeStream({type: "nodebuffer", streamFiles: true, compression: "DEFLATE"}),
	createWriteStream(out),
);
console.log(`${out} written.`);
