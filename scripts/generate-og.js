const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Create clean Awais-style architectural SVG background
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Modern Architectural Grid -->
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#94a3b8" stroke-width="0.6" stroke-opacity="0.12" />
      </pattern>

      <!-- Soft Radial Background Glow -->
      <radialGradient id="bg-glow" cx="25%" cy="45%" r="65%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="60%" stop-color="#f8fafc" />
        <stop offset="100%" stop-color="#f1f5f9" />
      </radialGradient>

      <!-- Faint Blue Accent Glow behind Portrait -->
      <radialGradient id="portrait-glow" cx="75%" cy="50%" r="45%">
        <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.45" />
        <stop offset="60%" stop-color="#f0f9ff" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#f8fafc" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Clean Neutral Background -->
    <rect width="${width}" height="${height}" fill="url(#bg-glow)" />
    <rect width="${width}" height="${height}" fill="url(#portrait-glow)" />

    <!-- Subtle Architectural Blueprint Grid -->
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Faint Radar Arc Lines (Exact Awais Style) -->
    <circle cx="720" cy="340" r="220" fill="none" stroke="#0284c7" stroke-width="0.8" stroke-opacity="0.12" stroke-dasharray="4 6" />
    <circle cx="720" cy="340" r="340" fill="none" stroke="#0284c7" stroke-width="0.8" stroke-opacity="0.10" />
    <circle cx="720" cy="340" r="480" fill="none" stroke="#0284c7" stroke-width="0.6" stroke-opacity="0.07" />

    <!-- Top Navigation Bar (Minimalist Awais Style) -->
    <g transform="translate(68, 52)">
      <!-- Circle Logo Icon -->
      <circle cx="15" cy="15" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="1.2" />
      <text x="15" y="20" text-anchor="middle" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="13" font-weight="600" fill="#0f172a">H</text>

      <!-- Brand Name -->
      <text x="40" y="19" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="12" font-weight="600" letter-spacing="2.2" fill="#0f172a">
        HASEEB AHMAD
      </text>

      <!-- Navigation Links -->
      <g transform="translate(230, 0)">
        <text x="0" y="19" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="10.5" font-weight="500" letter-spacing="2" fill="#0284c7">ABOUT</text>
        <text x="80" y="19" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="10.5" font-weight="400" letter-spacing="2" fill="#64748b">EXPERIENCE</text>
        <text x="185" y="19" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="10.5" font-weight="400" letter-spacing="2" fill="#64748b">WORK</text>
        <text x="255" y="19" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="10.5" font-weight="400" letter-spacing="2" fill="#64748b">EDUCATION</text>
      </g>
    </g>

    <!-- Left Main Content Block (Awais Hierarchy) -->
    <g transform="translate(68, 175)">
      
      <!-- Main Name -->
      <text x="0" y="72" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="66" font-weight="300" letter-spacing="-1.2" fill="#0f172a">
        Haseeb Ahmad
      </text>

      <!-- Title / Specialization (Clean Semi-Bold) -->
      <text x="0" y="124" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="30" font-weight="600" letter-spacing="-0.4" fill="#0f172a">
        DevOps &amp; Cloud Engineer
      </text>

      <!-- Value Proposition (Clean Gray Regular) -->
      <text x="0" y="165" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="20" font-weight="400" fill="#475569">
        Building Production-Ready Cloud Platforms
      </text>

      <!-- Subtle Supporting Description -->
      <text x="0" y="235" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="14.5" font-weight="400" fill="#94a3b8" letter-spacing="0.2">
        Automating multi-cloud CI/CD pipelines &amp; Kubernetes clusters.
      </text>

      <!-- Minimalist Clean CTA Pill -->
      <g transform="translate(0, 275)">
        <rect x="0" y="0" width="168" height="34" rx="17" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.1" />
        <text x="84" y="21.5" text-anchor="middle" font-family="'Segoe UI', 'Albert Sans', -apple-system, sans-serif" font-size="10" font-weight="600" letter-spacing="1.8" fill="#0f172a">
          EXPLORE MY WORK
        </text>
      </g>
    </g>
  </svg>
  `;

  // 2. Prepare Profile Cutout
  // Scale profile cutout to height 590px
  const profileBuffer = await sharp('public/profile_cutout.png')
    .resize({ height: 590, fit: 'contain' })
    .toBuffer();

  const profileMeta = await sharp(profileBuffer).metadata();

  // Position: centered-right side, aligned with bottom
  const profileLeft = width - profileMeta.width - 50;
  const profileTop = height - profileMeta.height;

  // 3. Composite everything
  const svgBuffer = Buffer.from(svgOverlay);

  const finalPng = await sharp(svgBuffer)
    .composite([
      {
        input: profileBuffer,
        top: profileTop,
        left: profileLeft,
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  // Save PNG
  await sharp(finalPng).toFile('public/og-image.png');
  await sharp(finalPng).toFile('src/app/opengraph-image.png');
  await sharp(finalPng).toFile('src/app/twitter-image.png');

  // Save JPEG optimized for WhatsApp (<150KB)
  await sharp(finalPng)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile('public/og-image.jpg');
  await sharp(finalPng)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile('src/app/opengraph-image.jpg');
  await sharp(finalPng)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile('src/app/twitter-image.jpg');

  console.log('Successfully generated clean Awais-style OG banners in PNG and JPEG!');
}

generateOgImage().catch(console.error);
