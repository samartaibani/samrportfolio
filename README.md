# Samar Taibani — Professional Animated Portfolio Website

A modern, high-performance, fully responsive personal portfolio and online resume created for **Samar Taibani**, Aspiring Full Stack Web Developer and Bachelor of Computer Applications (BCA) student based in Surat, Gujarat, India.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** with a tailored **White-and-Blue** palette, elegant micro-animations, interactive project filters, quick-view modals, and optional Google Sheets contact form integration.

---

## 🎨 Visual Design & Color Palette

- **Primary Blue:** `#1765F5`
- **Dark Navy:** `#10203E`
- **Background:** `#FFFFFF` (Light Mode) / `#0A1124` (Dark Mode)
- **Light Blue Accent:** `#F2F7FF`
- **Text Color:** `#596987`
- **Borders:** `#E3EBF7`

Features glassmorphic navigation blur, soft blue gradient glows, interactive cards, smooth dark/light mode toggle, and responsive typography powered by Google Fonts (*Plus Jakarta Sans* and *Fira Code*).

---

## 📂 Project Structure

```text
samar-portfolio/ (pot/)
│
├── index.html                   # Semantic HTML5 structure & content
├── style.css                    # Design system, responsive styles & animations
├── script.js                    # Vanilla JavaScript interactivity & form logic
├── README.md                    # Documentation, setup & customization guide
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg          # Custom SVG monogram favicon ("ST")
│   └── images/
│       ├── profile.jpg          # Professional profile portrait
│       ├── blackberry-pet-shop.jpg  # Project preview 1
│       ├── tour-and-travel.jpg      # Project preview 2
│       ├── event-booking-system.jpg # Project preview 3
│       └── student-management.jpg   # Project preview 4
│
└── resume/
    └── resume.pdf               # Valid downloadable PDF resume template
```

---

## 🚀 Key Features

1. **Sticky Glassmorphism Header:** Elevates on scroll, includes active link highlighting (Scrollspy), theme switch, and resume download.
2. **Mobile Navigation Drawer:** Slide-in drawer with animated hamburger-to-X icon, backdrop overlay, and keyboard accessibility.
3. **Hero Section with Typewriter Effect:** Seamlessly cycles through:
   - *Full Stack Web Developer*
   - *Frontend Developer*
   - *PHP Developer*
4. **Hero Visual:** Circular profile frame with dual rotating dashed rings, pulsating status indicator ("Available for Opportunities"), and 3 floating info cards (*Surat, India*, *BCA Student*, *PHP & Modern JS*).
5. **Interactive Skill Bars:** Progress bars animate smoothly into view when scrolled, with editable data percentages.
6. **Career & Education Timelines:** Clean vertical timeline for internships and structured cards for BCA, HSC (12th), and SSC (10th).
7. **Filterable Projects Gallery:** Instant client-side filtering by category (*All*, *PHP/MySQL*, *JavaScript*, *HTML/CSS*).
8. **Interactive Quick View Modals:** In-depth preview with feature lists, tech stack chips, and repository links.
9. **Accessible Contact Form:** Real-time field validation (name, email, subject, message), feedback toasts, and optional Google Sheets connectivity.
10. **Dark / Light Theme Toggle:** Persists preferences in browser `localStorage` and respects system dark mode defaults.
11. **Reduced-Motion Compliant:** Strictly respects `prefers-reduced-motion` accessibility preferences.

---

## 💻 How to Run Locally

### Option 1: Using VS Code & Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**:
   ```bash
   code .
   ```
2. Install the **Live Server** extension by *Ritwick Dey* (Extension ID: `ritwickdey.LiveServer`) if you haven't already.
3. Right-click on `index.html` in the VS Code file explorer.
4. Select **"Open with Live Server"**.
5. Your browser will automatically open at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Launch
- Since the project uses pure vanilla HTML, CSS, and JavaScript, simply double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Brave, Safari).

---

## ⚙️ Customization Guide

All sections have been structured with clear HTML comments (`<!-- EDITABLE: ... -->`):

### 1. Replace Profile Picture
- Place your photo inside `assets/images/` named `profile.jpg` (or change the `src` attribute in `index.html` to point to your new filename).

### 2. Replace Resume
- Replace `resume/resume.pdf` with your real updated resume file.

### 3. Update Education & Work Experience
- In `index.html`, locate `<!-- SECTION E: WORK EXPERIENCE -->` and `<!-- SECTION F: EDUCATION -->`.
- Replace `[Your Internship Company / Tech Agency Name]`, dates, and responsibilities with your actual achievements.

### 4. Adjust Skill Proficiency Bars
- In `index.html`, locate the skill cards under `<!-- SECTION D: SKILLS -->`.
- Update the `data-percent="85"` attribute on `<div class="progress-bar">` and the percentage text label.

### 5. Update Social Links & Contact Details
- Search for `samartaibani.dev@example.com`, `https://github.com/samartaibani`, and `https://linkedin.com/in/samartaibani` in `index.html` and replace them with your live URLs.

---

## 📊 Google Sheets Contact Form Integration

To record contact messages directly into a Google Sheet without any paid backend:

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet named **"Portfolio Inquiries"**.
2. In the first row (Row 1), add these column headers:
   - **A1:** `Timestamp`
   - **B1:** `Name`
   - **C1:** `Email`
   - **D1:** `Subject`
   - **E1:** `Message`

### Step 2: Open Google Apps Script
1. Click **Extensions** > **Apps Script** in the Google Sheets top menu.
2. Delete any existing code in the editor, and paste this script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as a Web App
1. In Apps Script, click **Deploy** > **New deployment**.
2. Select type: **Web app** (click the gear icon).
3. Fill in:
   - **Description:** Portfolio Contact Endpoint
   - **Execute as:** `Me` (your Google account)
   - **Who has access:** `Anyone` *(Crucial so visitors can send messages without logging into Google)*
4. Click **Deploy**, authorize permissions when prompted, and copy the **Web App URL** (ends in `/exec`).

### Step 4: Configure in `script.js`
Open `script.js` and paste your URL at line 17:
```javascript
const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
```
*(If left empty, the website runs in interactive Demo Mode with friendly feedback toast).*

---

## 🌐 Free Hosting & Deployment

This project requires zero build steps and is 100% static, making it deployable on any free hosting service:

### 1. GitHub Pages (100% Free & Ideal for Developers)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Samar Taibani portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/samar-portfolio.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/samar-portfolio/`.

### 2. Netlify (Instant Drag & Drop)
1. Visit [Netlify](https://www.netlify.com/) and log in.
2. Go to the **Sites** tab.
3. Drag and drop the `pot/` project folder directly into the browser.
4. Netlify will deploy your site in seconds and provide a free SSL HTTPS link.

### 3. Vercel
1. Install Vercel CLI: `npm i -g vercel` or link your GitHub repository on [Vercel](https://vercel.com).
2. Run `vercel` in your project folder and accept default settings.

---

## 🛡️ SEO & Performance Best Practices

- **Semantic HTML5:** Structured `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Complete Meta Tags:** Open Graph (OG) tags for Facebook & LinkedIn previews, Twitter Cards, canonical tags, and descriptive meta descriptions.
- **Optimized Assets:** Crisp, high-resolution JPEG thumbnails, SVG icons, and preconnected Google Font links.
- **Keyboard Navigation:** `:focus-visible` styles on buttons, inputs, links, and modal dismiss elements.

---

## 📄 License
This portfolio template is custom built for **Samar Taibani**. You are free to modify, expand, and personalize all content.
