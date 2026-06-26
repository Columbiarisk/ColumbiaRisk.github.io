# Columbia Stress Test Project

**Complete Documentation & Weekly Reports Hub**

This is the official website for the Columbia Stress Test Project, featuring a comprehensive Bookdown-style documentation portal and automated weekly reports system.

## 🎯 Project Overview

The Columbia Stress Test Project is a sophisticated quantitative research framework designed for:

- **Multi-Asset Scenario Generation**: Conditional Gaussian scenarios across equities, fixed income, FX, and commodities
- **Risk Analysis**: Comprehensive risk metrics computation (VaR, CVaR, Greeks)
- **Stress Testing**: Historical and hypothetical stress scenarios with flexible configuration
- **Data Management**: Robust data pipeline with validation and transformation
- **Regulatory Reporting**: Automated report generation with audit trails
- **Weekly Monitoring**: Automated weekly reports tracking progress and metrics

## 📚 Website Structure

### Pages

1. **Home Page** (`index.html`)
   - Project overview and introduction
   - Key features and capabilities
   - Call-to-action buttons to documentation and reports

2. **Documentation** (`docs.html`)
   - Complete technical documentation in Bookdown style
   - Left sidebar navigation with two main sections:
     - Latest Full Documentation
     - Weekly Reports Archive
   - Comprehensive coverage of:
     - Architecture and design
     - Data pipeline and risk factors
     - Scenario generation engine
     - Risk analysis framework
     - API reference
     - Implementation guides

3. **Weekly Reports** (`weekly-reports.html`)
   - Latest weekly reports
   - Reports archive
   - Report upload functionality (template)
   - Information about report contents and structure

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ColumbiaRiskColumbia/ColumbiaRiskColumbia.github.io.git
cd ColumbiaRiskColumbia.github.io
```

2. Open in a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Deployment

The site is automatically deployed to GitHub Pages. Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update documentation or reports"
git push origin main
```

## 📁 Project Structure

```
ColumbiaRiskColumbia.github.io/
├── index.html                 # Main landing page
├── docs.html                  # Complete documentation
├── weekly-reports.html        # Weekly reports hub
├── assets/
│   ├── css/
│   │   ├── style.css         # Main styles
│   │   └── docs.css          # Documentation-specific styles
│   └── js/
│       └── main.js           # JavaScript utilities
├── docs/                      # Documentation source files (optional)
├── weekly-reports/            # Weekly report files
└── README.md                  # This file
```

## 🎨 Design & Styling

### Color Scheme

- **Accent Color**: #d4371f (Columbia Red)
- **Text**: #1a1a1a (Dark)
- **Text Light**: #6b6b6b (Gray)
- **Background**: #ffffff (White)
- **Background Soft**: #f9f7f5 (Off-white)
- **Border**: #e5e1dd (Light Gray)

### Typography

- **Sans-serif**: Inter (variable), -apple-system, BlinkMacSystemFont, Segoe UI
- **Monospace**: JetBrains Mono, Menlo, Courier New

### Responsive Design

The site is fully responsive with breakpoints at:
- 900px (Sidebar collapses to mobile menu)
- 768px (Navigation becomes mobile hamburger)
- 600px (Typography and spacing adjustments)

## 🔧 Features

### Documentation Features

- **Sidebar Navigation**: Fixed left sidebar with hierarchical navigation
- **Search Functionality**: Search across documentation (template ready)
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Scroll Spy**: Active link highlighting based on scroll position
- **Table of Contents**: Automatic generation from headings
- **Responsive Layout**: Mobile-friendly design with hamburger menu

### Weekly Reports Features

- **Report Cards**: Grid layout for latest and archived reports
- **Report Upload**: Template for uploading new reports
- **Report Templates**: Standardized structure for consistency
- **Chronological Organization**: Most recent reports first
- **Metadata Display**: Date, author, and description for each report

## 📝 Content Guidelines

### Adding New Documentation

1. Edit `docs.html`
2. Add new sections with appropriate heading IDs
3. Update the sidebar navigation in the `docs-nav` list
4. Maintain consistent formatting and structure

### Adding Weekly Reports

1. Create a report following the template structure
2. Add to the `weekly-reports/` directory
3. Update `weekly-reports.html` with the new report entry
4. Include title, date, description, and link

## 🔗 Integration Points

### With Main Project

The website integrates with the main Columbia Stress Test project through:

1. **Documentation Source**: Markdown/HTML files from project repository
2. **Automated Report Generation**: Python scripts generate weekly reports
3. **Data Integration**: Real-time metrics displayed on the site
4. **Version Management**: Documentation versioning tied to project releases

### Future Integrations

- API endpoint for fetching latest reports
- Automated report generation from Jupyter notebooks
- Real-time metrics dashboard
- Interactive scenario visualization
- User authentication for restricted content

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS variables
- **Syntax Highlighting**: Highlight.js
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 📊 Bookdown Style Features

This site mimics the popular Bookdown documentation style with:

- **Left Sidebar Navigation**: Two-level hierarchical menu
- **Responsive Layout**: Collapses to mobile-friendly on smaller screens
- **Search Integration**: Full-text search (template ready)
- **Syntax Highlighting**: Automatic code block formatting
- **Clean Typography**: Professional, readable fonts
- **Semantic HTML**: Proper structure for accessibility

## 📖 Weekly Report Templates

### Report Structure

Each weekly report should include:

```markdown
# Week [N] Report

## Executive Summary
Brief overview of the week's highlights and key metrics

## Key Metrics
- Metric 1: Value
- Metric 2: Value

## Market Analysis
Analysis of market conditions and risk factors

## Scenario Generation Results
Summary of scenario generation runs

## Stress Test Outcomes
Results and insights from stress testing

## Data Quality Assessment
Data quality metrics and issues

## Next Week's Focus
Planned activities and priorities
```

## 🔐 Maintenance

### Regular Tasks

1. **Weekly Report Generation**: Automate using Python scripts
2. **Documentation Updates**: Keep in sync with project changes
3. **Dependency Updates**: Review and update libraries periodically
4. **Performance Monitoring**: Check site load times and SEO
5. **Link Verification**: Ensure all internal and external links work

### Monitoring

- Check for broken links regularly
- Monitor for 404 errors in analytics
- Verify code examples still work
- Test on multiple browsers and devices

## 📧 Support & Contact

For questions or issues regarding:

- **Documentation**: Open an issue on GitHub
- **Weekly Reports**: Contact the Columbia Stress Test Team
- **Technical Issues**: Submit a pull request with proposed fixes

## 📄 License

See LICENSE file for details.

## 👥 Contributors

- Mo Minoneshan - Project Lead
- Columbia Stress Test Team

## 🔄 Version History

- **v1.0** (June 2026) - Initial launch
  - Main landing page
  - Bookdown-style documentation
  - Weekly reports hub
  - Responsive design

## 📚 Resources

### External Links

- [Bookdown Documentation](https://bookdown.org/)
- [Highlight.js](https://highlightjs.org/)
- [GitHub Pages](https://pages.github.com/)

### Project Links

- [Personal Website](https://minoneshan.github.io/)
- [Stress Scenario Engine](https://minoneshan.github.io/projects/stress-scenario-engine/)
- [GitHub Repository](https://github.com/ColumbiaRiskColumbia/ColumbiaRiskColumbia.github.io)

---

**Last Updated**: June 25, 2026

For the latest information and updates, visit: https://columbiariskcolumbia.github.io/