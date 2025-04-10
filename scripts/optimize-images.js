import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const settings = {
  quality: 80,
  width: 1200,
  height: 800,
  fit: 'inside',
  withoutEnlargement: true
};

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(settings.width, settings.height, {
        fit: settings.fit,
        withoutEnlargement: settings.withoutEnlargement
      })
      .jpeg({ quality: settings.quality })
      .toFile(outputPath);
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error);
  }
}

async function processDirectory() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, path.basename(file, path.extname(file)) + '.jpg');
      await optimizeImage(inputPath, outputPath);
    }
  }
}

console.log('Starting image optimization...');
processDirectory().then(() => {
  console.log('Image optimization complete!');
}); 