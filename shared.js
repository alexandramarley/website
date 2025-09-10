// Shared header and navigation components

// Function to get the correct path based on current location
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/photography/') || path.includes('/ux/') || path.includes('/contact/')) {
    return '../';
  }
  return '';
}

// Function to get current page for active state
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('/photography/')) return 'photography';
  if (path.includes('/ux/')) return 'ux';
  if (path.includes('/contact/')) return 'contact';
  return 'home';
}

// Create header component
function createHeader() {
  const basePath = getBasePath();
  const currentPage = getCurrentPage();
  
  return `
    <header class="site-header">
      <div class="header-content">
        <a class="brand" href="${basePath}index.html">Alexandra Marley</a>
        <nav class="header-nav">
          <a class="nav-link ${currentPage === 'photography' ? 'active' : ''}" href="${basePath}photography/index.html">PHOTOGRAPHY</a>
          <a class="nav-link ${currentPage === 'ux' ? 'active' : ''}" href="${basePath}ux/index.html">UX / UI DESIGN</a>
          <a class="nav-link ${currentPage === 'contact' ? 'active' : ''}" href="${basePath}contact/index.html">CONTACT</a>
        </nav>
      </div>
    </header>
  `;
}

// Create navigation component
function createNavigation() {
  const basePath = getBasePath();
  const currentPage = getCurrentPage();

  return `
    <nav class="bottom-nav">
      <div class="nav-inner">
        <a class="nav-link ${currentPage === 'photography' ? 'active' : ''}" href="${basePath}photography/index.html">PHOTOGRAPHY</a>
        <a class="nav-link ${currentPage === 'ux' ? 'active' : ''}" href="${basePath}ux/index.html">UX / UI DESIGN</a>
        <a class="nav-link ${currentPage === 'contact' ? 'active' : ''}" href="${basePath}contact/index.html">CONTACT</a>
      </div>
    </nav>
  `;
}

// Initialize shared components when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = createHeader();
  }

  // Insert navigation
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = createNavigation();
  }
});
