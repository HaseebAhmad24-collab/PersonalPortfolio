const sharp = require('sharp');
const fs = require('fs');

// High-resolution SVG based on exact brand favicon
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="192" height="192">
  <rect width="48" height="48" rx="10" fill="#0f172a" />
  <path d="M13 11h5.5v10h11V11H35v26h-5.5V26h-11v11H13V11z" fill="#ffffff" />
</svg>`;

async function run() {
  const buf = Buffer.from(svg);
  await sharp(buf).resize(192, 192).png().toFile('public/icon-192.png');
  await sharp(buf).resize(192, 192).png().toFile('src/app/icon.png');
  await sharp(buf).resize(48, 48).png().toFile('public/icon-48.png');
  await sharp(buf).resize(180, 180).png().toFile('src/app/apple-icon.png');
  await sharp(buf).resize(48, 48).png().toFile('public/favicon.ico');
  console.log('Successfully generated Google-compliant favicon files (48px, 180px, 192px, and ico)!');
}

run().catch(console.error);
