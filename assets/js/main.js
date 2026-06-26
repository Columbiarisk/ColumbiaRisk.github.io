/**
 * Stress Test Project - Documentation Site Utilities
 * Version: 1.0
 */

// ===== Navigation Utilities =====
class NavigationManager {
  constructor() {
    this.navToggle = document.querySelector('.nav-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.init();
  }

  init() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
    }

    if (this.navLinks) {
      this.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }
  }

  toggleMenu() {
    this.navLinks?.classList.toggle('active');
  }

  closeMenu() {
    this.navLinks?.classList.remove('active');
  }
}

// ===== Documentation Utilities =====
class DocsManager {
  constructor() {
    this.sidebar = document.getElementById('docs-sidebar');
    this.menuToggle = document.querySelector('.docs-menu-toggle');
    this.searchInput = document.getElementById('docs-search-input');
    this.contentContainer = document.querySelector('.docs-content');
    this.init();
  }

  init() {
    this.setupMenuToggle();
    this.setupSearch();
    this.setupScrollSpy();
  }

  setupMenuToggle() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        this.sidebar?.classList.toggle('active');
      });
    }
  }

  setupSearch() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }

  handleSearch(query) {
    if (query.length < 2) return;

    const text = this.contentContainer?.innerText || '';
    const lowerQuery = query.toLowerCase();
    const lowerText = text.toLowerCase();

    if (lowerText.includes(lowerQuery)) {
      console.log(`Found "${query}" in documentation`);
      this.highlightSearchResults(query);
    }
  }

  highlightSearchResults(query) {
    // Implementation for highlighting search results
    const elements = this.contentContainer?.querySelectorAll('*') || [];
    elements.forEach(element => {
      if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
        // Add highlight class or styling
      }
    });
  }

  setupScrollSpy() {
    window.addEventListener('scroll', () => this.updateActiveLink());
  }

  updateActiveLink() {
    const sections = this.contentContainer?.querySelectorAll('h2, h3') || [];
    const navLinks = document.querySelectorAll('.docs-nav a');

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// ===== Reports Manager =====
class ReportsManager {
  constructor() {
    this.latestContainer = document.getElementById('latest-reports');
    this.archiveContainer = document.getElementById('archive-reports');
    this.init();
  }

  init() {
    this.loadReports();
  }

  loadReports() {
    // This would connect to an API or file system to load reports
    // Placeholder for future implementation
  }

  addReport(report) {
    // Add a new report to the display
  }

  removeReport(id) {
    // Remove a report from display
  }

  formatReportCard(report) {
    return `
      <div class="report-card">
        <div class="report-date">${report.week}</div>
        <div class="report-title">${report.title}</div>
        <div class="report-description">${report.description}</div>
        <div class="report-meta">
          <span>📅 ${report.date}</span>
        </div>
        <a href="${report.link}" class="report-link">Read More →</a>
      </div>
    `;
  }
}

// ===== Code Highlighting =====
class CodeHighlighter {
  static highlight() {
    if (typeof hljs !== 'undefined') {
      document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
      });
    }
  }
}

// ===== Utility Functions =====
function toggleSidebar() {
  const sidebar = document.getElementById('docs-sidebar');
  sidebar?.classList.toggle('active');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard');
  });
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize managers
  new NavigationManager();
  
  // Initialize docs manager if on docs page
  if (document.querySelector('.docs-page')) {
    new DocsManager();
  }

  // Initialize reports manager if on reports page
  if (document.getElementById('latest-reports')) {
    new ReportsManager();
  }

  // Highlight code blocks
  CodeHighlighter.highlight();

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// ===== Export for use in other modules =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NavigationManager,
    DocsManager,
    ReportsManager,
    CodeHighlighter,
    toggleSidebar,
    scrollToTop,
    copyToClipboard
  };
}
