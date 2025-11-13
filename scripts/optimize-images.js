const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imagesDir = path.join(__dirname, "..", "public", "images");

async function optimizeFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const input = path.join(imagesDir, file);
  const output = path.join(imagesDir, `${base}.webp`);

  try {
    const img = sharp(input);
    // remove metadata by not copying it
    await img.webp({ quality: 80 }).toFile(output);
    console.log(`Optimized: ${file} -> ${base}.webp`);
  } catch (err) {
    console.error(`Failed to optimize ${file}:`, err.message);
  }
}

async function run() {
  if (!fs.existsSync(imagesDir)) {
    console.error("images directory not found:", imagesDir);
    process.exit(1);
  }

  const files = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f));

  for (const f of files) {
    await optimizeFile(f);
  }

  console.log("Image optimization complete.");
}

run();
