import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public/images');
const outputDir = path.join(__dirname, 'public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// Process each image
for (const file of imageFiles) {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    await sharp(inputPath)
      .resize(1200, 800, { // Max dimensions while maintaining aspect ratio
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
      .toFile(outputPath);
    console.log(`Optimized: ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
} 