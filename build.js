const fs = require("fs");
const path = require("path");

const files = [
  "index.html",
  "search.html",
  "translations.json",
  "products.json",
  "app.js",
  "styles.css",
  "about.html",
  "how-it-works.html",
  "affiliate-disclosure.html",
  "privacy.html",
  "terms.html",
  "contact.html",
  "admin.html",
  "site-config.json",
  "version.txt",
  "robots.txt",
  "sitemap.xml",
  "manifest.json",
  "products.example.json",
  "icon-192.png",
  "icon-512.png",
  "og-image.png",
  "404.html",
  "_headers",
  "vercel.json",
  "V69_REVIEW_NOTES.txt"
];

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist", { recursive: true });

for (const file of files) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join("dist", file));
    console.log(`Copied ${file}`);
  } else {
    console.warn(`Missing optional file: ${file}`);
  }
}

console.log("ChinaSearch static build completed successfully.");
