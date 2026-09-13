const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Create the SVG background with blueprint grid and typography
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Blueprint Grid Pattern -->
      <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2563eb" stroke-width="0.75" stroke-opacity="0.16" />
      </pattern>

      <!-- Ambient Glow Gradient -->
      <radialGradient id="ambient-glow" cx="30%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.5" />
        <stop offset="60%" stop-color="#e0f2fe" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#edf5ff" stop-opacity="0" />
      </radialGradient>

      <!-- Portrait Shadow Gradient -->
      <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#edf5ff" stop-opacity="1" />
        <stop offset="100%" stop-color="#edf5ff" stop-opacity="0" />
      </linearGradient>
    </defs>

    <!-- Background Base -->
    <rect width="${width}" height="${height}" fill="#edf5ff" />

    <!-- Ambient Radial Glow -->
    <rect width="${width}" height="${height}" fill="url(#ambient-glow)" />

    <!-- Blueprint Grid -->
    <rect width="${width}" height="${height}" fill="url(#blueprint-grid)" />

    <!-- Outer Architectural Border -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="16" fill="none" stroke="#2563eb" stroke-width="1.2" stroke-opacity="0.25" />
    <rect x="28" y="28" width="${width - 56}" height="${height - 56}" rx="12" fill="none" stroke="#2563eb" stroke-width="0.6" stroke-opacity="0.12" stroke-dasharray="6 4" />

    <!-- Top Navigation Bar Mockup -->
    <g transform="translate(60, 60)">
      <!-- Logo Circle -->
      <circle cx="16" cy="16" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
      <text x="16" y="21.5" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="14" font-weight="700" fill="#0f172a">H</text>

      <text x="44" y="21" font-family="'Courier New', Courier, monospace" font-size="12" font-weight="700" letter-spacing="2.5" fill="#0f172a">
        HASEEB AHMAD
      </text>

      <!-- Nav Links -->
      <g transform="translate(230, 0)">
        <text x="0" y="21" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="600" letter-spacing="2" fill="#2563eb">ABOUT</text>
        <text x="80" y="21" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="500" letter-spacing="2" fill="#64748b">EXPERIENCE</text>
        <text x="190" y="21" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="500" letter-spacing="2" fill="#64748b">WORK</text>
        <text x="260" y="21" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="500" letter-spacing="2" fill="#64748b">EDUCATION</text>
      </g>

      <!-- Right CTA Pill -->
      <rect x="940" y="0" width="140" height="32" rx="16" fill="#ffffff" stroke="#0f172a" stroke-width="1.2" stroke-opacity="0.4" />
      <text x="1010" y="20.5" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" letter-spacing="2" fill="#0f172a">
        LET&#39;S TALK
      </text>
    </g>

    <!-- Top Dividing Line -->
    <line x1="60" y1="108" x2="1140" y2="108" stroke="#2563eb" stroke-width="1" stroke-opacity="0.18" />

    <!-- Main Content Left Column -->
    <g transform="translate(64, 160)">
      
      <!-- Category Spec Tag -->
      <g transform="translate(0, 20)">
        <circle cx="5" cy="5" r="4.5" fill="#2563eb" />
        <text x="18" y="9" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="700" letter-spacing="2.5" fill="#2563eb">
          PLATFORM &amp; DEVOPS ARCHITECTURE
        </text>
      </g>

      <!-- Main Headline Name -->
      <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="64" font-weight="400" letter-spacing="-1.5" fill="#0f172a">
        Haseeb Ahmad
      </text>

      <!-- Role Designation -->
      <text x="0" y="136" font-family="'Courier New', Courier, monospace" font-size="21" font-weight="700" letter-spacing="2" fill="#2563eb">
        DEVOPS ENGINEER &#183; LUMINAH TECH
      </text>

      <!-- Value Proposition / Subheading -->
      <text x="0" y="184" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="300" fill="#334155" letter-spacing="-0.2">
        Building Production-Ready Cloud Platforms
      </text>
      <text x="0" y="214" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#64748b">
        Specializing in multi-environment CI/CD release automation,
      </text>
      <text x="0" y="238" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#64748b">
        Kubernetes orchestrations, and cloud security in Lahore, Pakistan.
      </text>

      <!-- Tech Stack Badges -->
      <g transform="translate(0, 280)">
        <!-- Badge 1: AWS -->
        <rect x="0" y="0" width="70" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="35" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">AWS</text>

        <!-- Badge 2: KUBERNETES -->
        <rect x="80" y="0" width="118" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="139" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">KUBERNETES</text>

        <!-- Badge 3: TERRAFORM -->
        <rect x="208" y="0" width="108" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="262" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">TERRAFORM</text>

        <!-- Badge 4: CI/CD -->
        <rect x="326" y="0" width="80" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="366" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">CI/CD</text>

        <!-- Badge 5: DOCKER -->
        <rect x="416" y="0" width="84" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="458" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">DOCKER</text>

        <!-- Badge 6: LINUX -->
        <rect x="510" y="0" width="76" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
        <text x="548" y="18" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="700" fill="#0f172a">LINUX</text>
      </g>

      <!-- Bottom Domain Pill -->
      <g transform="translate(0, 340)">
        <text x="0" y="18" font-family="'Courier New', Courier, monospace" font-size="13" font-weight="600" letter-spacing="1.5" fill="#64748b">
          https://haseebxdev.online
        </text>
      </g>
    </g>

    <!-- Bottom Metric Bar -->
    <g transform="translate(64, 574)">
      <circle cx="4" cy="4" r="3.5" fill="#10b981" />
      <text x="16" y="7.5" font-family="'Courier New', Courier, monospace" font-size="10" font-weight="600" letter-spacing="1.5" fill="#059669">
        AVAILABLE FOR CLOUD &amp; DEVOPS OPPORTUNITIES
      </text>
    </g>
  </svg>
  `;

  // 2. Prepare Profile Cutout with Sharp
  // Resize profile image to height ~ 540px, keeping aspect ratio
  const profileImage = await sharp('public/profile_cutout.png')
    .resize({ height: 530, fit: 'contain' })
    .toBuffer();

  const profileMeta = await sharp(profileImage).metadata();

  // 3. Composite everything together
  // Position the profile picture on the right side
  // SVG background + profile picture
  const svgBuffer = Buffer.from(svgOverlay);

  // Profile position: right side, sitting on the bottom border
  const profileLeft = width - profileMeta.width - 40;
  const profileTop = height - profileMeta.height - 24;

  await sharp(svgBuffer)
    .composite([
      {
        input: profileImage,
        top: profileTop,
        left: profileLeft,
      },
    ])
    .png({ quality: 95 })
    .toFile('public/og-image.png');

  console.log('Successfully generated public/og-image.png');
}

generateOgImage().catch(console.error);
