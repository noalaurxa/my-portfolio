import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    const urls = [
      { url: 'http://localhost:3000', name: 'home.png' },
      { url: 'http://localhost:3000/projects', name: 'projects.png' },
      { url: 'http://localhost:3000/projects/ecommerce-platform', name: 'ecommerce-platform.png' },
      { url: 'http://localhost:3000/about', name: 'about.png' },
    ];
    
    const outDir = 'C:/Users/HP/.gemini/antigravity/brain/47503a7a-37fe-47da-8263-7e0dfe5d27ee';

    for (const item of urls) {
      console.log(`Capturing ${item.url}...`);
      await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.screenshot({ path: `${outDir}/${item.name}`, fullPage: true });
      console.log(`Saved ${item.name}`);
    }

    await browser.close();
    console.log('All screenshots captured successfully.');
  } catch (err) {
    console.error('Error during capture:', err);
    process.exit(1);
  }
})();
