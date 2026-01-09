import { searchData } from './search-data';
import { filterSearchData, renderSearchResults } from './search';

// Constants
const SCROLL_OFFSET = 150;
const MENU_CLOSE_DELAY = 300;
const SCROLL_DELAY = 100;
const INTERSECTION_THRESHOLD = 0.1;

// DOM Elements - with null checks for safety
function getRequiredElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Required element #${id} not found`);
  }
  return element as T;
}

// Initialize DOM elements
const searchToggle = getRequiredElement<HTMLElement>('searchToggle');
const searchContainer = getRequiredElement<HTMLElement>('searchContainer');
const searchInput = getRequiredElement<HTMLInputElement>('searchInput');
const searchResults = getRequiredElement<HTMLElement>('searchResults');
const navMenu = getRequiredElement<HTMLElement>('navMenu');
const menuToggle = getRequiredElement<HTMLElement>('menuToggle');
const navClose = getRequiredElement<HTMLElement>('navClose');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
const accordions = document.querySelectorAll<HTMLElement>('.accordion');

// Create overlay element for navigation menu
const navOverlay = document.createElement('div');
navOverlay.classList.add('nav-overlay');
document.body.appendChild(navOverlay);

/**
 * Toggle search container visibility
 */
function toggleSearch(): void {
  searchContainer.classList.toggle('visible');
  if (searchContainer.classList.contains('visible')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
    searchResults.classList.remove('active');
  }
}

/**
 * Perform search and render results
 */
function performSearch(query: string): void {
  if (!query.trim()) {
    searchResults.classList.remove('active');
    return;
  }

  const results = filterSearchData(searchData, query);
  searchResults.innerHTML = renderSearchResults(results, query);
  searchResults.classList.add('active');
}

/**
 * Open navigation menu
 */
function openMenu(): void {
  navMenu.classList.add('open');
  navOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

/**
 * Close navigation menu
 */
function closeMenu(): void {
  navMenu.classList.remove('open');
  navOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

/**
 * Navigate to and open an accordion section
 */
function navigateToSection(sectionId: string, delay: number = SCROLL_DELAY): void {
  const accordion = document.querySelector<HTMLElement>(sectionId);
  if (accordion) {
    accordion.classList.add('active');
    setTimeout(() => {
      accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, delay);
  }
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveLink(): void {
  let current = '';

  accordions.forEach((accordion) => {
    const rect = accordion.getBoundingClientRect();
    if (rect.top <= SCROLL_OFFSET) {
      current = '#' + accordion.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
}

// Event Listeners

// Search toggle button
searchToggle.addEventListener('click', toggleSearch);

// Keyboard shortcuts (Cmd/Ctrl + K for search, Escape to close)
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }
  if (e.key === 'Escape') {
    if (searchContainer.classList.contains('visible')) {
      toggleSearch();
    }
    if (navMenu.classList.contains('open')) {
      closeMenu();
    }
  }
});

// Search input handler
searchInput.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  performSearch(target.value);
});

// Click on search result to navigate
searchResults.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const item = target.closest<HTMLElement>('.search-result-item');
  if (item) {
    const sectionId = item.dataset.section;
    toggleSearch();
    if (sectionId) {
      navigateToSection(sectionId);
    }
  }
});

// Close search when clicking outside
document.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (
    searchContainer.classList.contains('visible') &&
    !searchContainer.contains(target) &&
    !searchToggle.contains(target)
  ) {
    toggleSearch();
  }
});

// Accordion functionality
document.querySelectorAll<HTMLElement>('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    if (accordion) {
      accordion.classList.toggle('active');
    }
  });
});

// Scroll animation observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: INTERSECTION_THRESHOLD }
);

document.querySelectorAll<HTMLElement>('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// Navigation menu controls
menuToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

// Navigation link click handlers
navLinks.forEach((link) => {
  link.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    closeMenu();
    if (targetId) {
      navigateToSection(targetId, MENU_CLOSE_DELAY);
    }
  });
});

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Initialize active link on page load
updateActiveLink();
