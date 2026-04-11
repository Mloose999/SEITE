import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = '/vercel/share/v0-project/public/images/logo-original.png';
const outputPath = '/vercel/share/v0-project/public/images/favicon-wine-logo.png';

// Wine red color: #722F37 -> RGB: 114, 47, 55
async function recolorLogo() {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Get raw pixel data
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const pixels = new Uint8Array(data);
    
    // Recolor: change teal/turquoise to wine red
    // Original teal is approximately RGB: 64, 164, 159
    // Wine red target: RGB: 114, 47, 55
    for (let i = 0; i < pixels.length; i += info.channels) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = info.channels === 4 ? pixels[i + 3] : 255;
      
      // Check if pixel is teal-ish (high green/blue, lower red)
      if (g > r && b > r * 0.8 && (g > 100 || b > 100)) {
        // Calculate intensity based on original color
        const intensity = (g + b) / 2 / 255;
        
        // Apply wine red with same intensity
        pixels[i] = Math.round(114 * intensity + (255 - 114) * (1 - intensity) * (r / 255));
        pixels[i + 1] = Math.round(47 * intensity + (255 - 47) * (1 - intensity) * (r / 255));
        pixels[i + 2] = Math.round(55 * intensity + (255 - 55) * (1 - intensity) * (r / 255));
      }
    }
    
    // Save the recolored image
    await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
      .png()
      .toFile(outputPath);
    
    console.log('Logo recolored to wine red successfully!');
    console.log('Output:', outputPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

recolorLogo();
