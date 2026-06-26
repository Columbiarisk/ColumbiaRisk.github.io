# RBC Stress Test Project Website - Setup Guide

Welcome! This guide will help you get the RBC Stress Test Project website up and running.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Prerequisites

- Git
- A modern web browser
- Python 3.x (for local development server)
- Text editor or IDE (VS Code recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/ColumbiaRiskRBC/ColumbiaRiskRBC.github.io.git
cd ColumbiaRiskRBC.github.io
```

### 2. Start Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js (if installed)
npx http-server
```

### 3. Open in Browser

Visit `http://localhost:8000` in your web browser

## 📦 Installation

### File Structure

```
ColumbiaRiskRBC.github.io/
├── index.html                 # Home page
├── docs.html                  # Documentation
├── weekly-reports.html        # Weekly reports
├── assets/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   └── docs.css          # Documentation styles
│   └── js/
│       └── main.js           # JavaScript utilities
├── docs/                      # Documentation source files
├── weekly-reports/            # Weekly report files
├── deploy.sh                  # Deployment script
├── SETUP.md                   # This file
├── README.md                  # Project information
├── LICENSE                    # License
└── .nojekyll                  # Jekyll disable file
```

### Required Files

All essential files are already created:
- ✅ `index.html` - Home page with hero section and features
- ✅ `docs.html` - Bookdown-style documentation page
- ✅ `weekly-reports.html` - Weekly reports hub
- ✅ `assets/css/style.css` - Base styles
- ✅ `assets/css/docs.css` - Documentation-specific styles
- ✅ `assets/js/main.js` - JavaScript utilities

## 🛠️ Development

### Making Changes

1. **Edit HTML Files**
   ```bash
   # Edit documentation
   nano docs.html
   
   # Edit weekly reports
   nano weekly-reports.html
   
   # Edit home page
   nano index.html
   ```

2. **Update Styles**
   ```bash
   # Main styles
   nano assets/css/style.css
   
   # Documentation styles
   nano assets/css/docs.css
   ```

3. **Add JavaScript**
   ```bash
   # Utilities and functionality
   nano assets/js/main.js
   ```

### Adding New Documentation Sections

1. Open `docs.html`
2. Add a new `<h2>` or `<h3>` section with an ID:
   ```html
   <h2 id="my-new-section">My New Section</h2>
   <p>Content here...</p>
   ```

3. Add navigation link in the sidebar:
   ```html
   <li><a href="#my-new-section">My New Section</a></li>
   ```

4. Save and reload in browser

### Adding Weekly Reports

1. Create a new HTML file in the `weekly-reports/` directory:
   ```bash
   touch weekly-reports/week-26.html
   ```

2. Update `weekly-reports.html` with the new report:
   ```javascript
   const sampleReports = [
     {
       week: 'Week 26',
       date: 'June 25 - July 1, 2026',
       title: 'Your Report Title',
       description: 'Your report description',
       author: 'RBC Stress Test Team',
       link: 'weekly-reports/week-26.html'
     },
     // ... other reports
   ];
   ```

3. Save and test in browser

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Make sure all files are saved**
   ```bash
   git status
   ```

2. **Stage changes**
   ```bash
   git add .
   ```

3. **Commit changes**
   ```bash
   git commit -m "Update documentation and reports - Week 26"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

5. **Visit the live site**
   - Navigate to: `https://columbiariskrbc.github.io`
   - Site updates typically within 1-5 minutes

### Using the Deployment Script

```bash
# Make script executable
chmod +x deploy.sh

# Run with default message
./deploy.sh

# Run with custom message
./deploy.sh "Add new scenario documentation"
```

## 📝 Content Management

### Documentation Best Practices

1. **Use Semantic HTML**
   ```html
   <h2 id="section-name">Section Name</h2>
   <p>Content...</p>
   <h3 id="subsection">Subsection</h3>
   <ul>
     <li>Item 1</li>
     <li>Item 2</li>
   </ul>
   ```

2. **Code Blocks with Syntax Highlighting**
   ```html
   <pre><code class="language-python">
   import numpy as np
   
   def calculate_var(returns, confidence=0.95):
       return np.percentile(returns, (1 - confidence) * 100)
   </code></pre>
   ```

3. **Use Callout Boxes**
   ```html
   <div class="callout info">
     <div class="callout-title">ℹ️ Information</div>
     <p>Important information here...</p>
   </div>
   ```

4. **Create Tables**
   ```html
   <table class="docs-table">
     <thead>
       <tr>
         <th>Header 1</th>
         <th>Header 2</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>Data 1</td>
         <td>Data 2</td>
       </tr>
     </tbody>
   </table>
   ```

### Weekly Report Template

Create a file `weekly-reports/template.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Week [N] Report</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
  <header class="site-header">
    <!-- Include header here -->
  </header>
  
  <main class="container" style="max-width: 900px; margin: 48px auto; padding: 0 24px;">
    <h1>Week [N] Report</h1>
    
    <h2>Executive Summary</h2>
    <p>Summary here...</p>
    
    <h2>Key Metrics</h2>
    <table class="docs-table">
      <!-- Metrics table -->
    </table>
    
    <!-- Additional sections -->
  </main>
</body>
</html>
```

## 🔧 Customization

### Changing Colors

Edit `assets/css/style.css` - Update CSS variables:

```css
:root {
  --accent: #d4371f;           /* Main color (RBC Red) */
  --text: #1a1a1a;             /* Text color */
  --text-light: #6b6b6b;       /* Light text */
  --bg: #ffffff;               /* Background */
  --bg-soft: #f9f7f5;          /* Soft background */
  --border: #e5e1dd;           /* Border color */
}
```

### Changing Fonts

Update font imports in HTML files:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700"
  rel="stylesheet"
/>
```

Then update CSS:

```css
--font-sans: 'YourFont', sans-serif;
```

### Adding Sections to Navigation

Edit the navigation in header:

```html
<ul class="nav-links">
  <li><a href="index.html">Home</a></li>
  <li><a href="docs.html">Documentation</a></li>
  <li><a href="weekly-reports.html">Weekly Reports</a></li>
  <li><a href="your-new-page.html">New Page</a></li>
</ul>
```

## 🐛 Troubleshooting

### Site Not Loading

1. Check if web server is running
2. Verify port 8000 is not in use
3. Try a different port: `python -m http.server 8001`

### Changes Not Appearing

1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Close and reopen browser

### GitHub Pages Not Updating

1. Verify you pushed to the `main` branch
2. Check GitHub Pages settings in repository
3. Wait 1-5 minutes for site to rebuild
4. Check repository Actions tab for build errors

### Styling Issues

1. Check browser console for CSS errors (F12)
2. Verify CSS files are linked correctly
3. Clear browser cache
4. Check for conflicting CSS rules

### Links Not Working

1. Verify relative paths are correct
2. Check file extensions (.html not .htm)
3. Use lowercase for file and folder names
4. Test locally before pushing to GitHub

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML5 Guide](https://html.spec.whatwg.org/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 👥 Support

For questions or issues:

1. Check GitHub Issues
2. Review documentation
3. Contact the RBC Stress Test Team

## 📄 Version Info

- **Site Version**: 1.0
- **Created**: June 25, 2026
- **Last Updated**: June 25, 2026

---

**Happy documenting! 🎉**
