import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = "C:\\Users\\TUF\\.gemini\\antigravity-ide\\brain\\094089b0-393a-489b-9592-cbc37891b9b4\\media__1782888018204.jpg";
const dest = path.join(__dirname, "public", "farmnex.png");

try {
  fs.copyFileSync(src, dest);
  console.log("Image copied successfully to " + dest);
} catch (err) {
  console.error("Error copying file:", err);
  process.exit(1);
}
