import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = "C:\\Users\\TUF\\.gemini\\antigravity-ide\\brain\\094089b0-393a-489b-9592-cbc37891b9b4";

const copies = [
  { src: "media__1782888585580.jpg", dest: "question_bank.png" },
  { src: "media__1782888623576.jpg", dest: "online_property_sales.png" },
  { src: "media__1782888678215.jpg", dest: "smartspace.png" },
  { src: "media__1782888708970.jpg", dest: "unihub.png" },
  { src: "media__1782888741642.jpg", dest: "library_book_tracking.png" },
];

for (const item of copies) {
  const srcPath = path.join(baseDir, item.src);
  const destPath = path.join(__dirname, "public", item.dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${item.src} to ${destPath}`);
  } catch (err) {
    console.error(`Failed to copy ${item.src}:`, err);
  }
}
