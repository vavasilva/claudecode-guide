/**
 * Represents a searchable item in the search database
 */
export interface SearchItem {
  id: string;
  title: string;
  tag: string;
  content: string;
  section: string;
}

/**
 * DOM element references used throughout the app
 */
export interface DOMElements {
  searchToggle: HTMLElement;
  searchContainer: HTMLElement;
  searchInput: HTMLInputElement;
  searchResults: HTMLElement;
  navMenu: HTMLElement;
  menuToggle: HTMLElement;
  navClose: HTMLElement;
  navLinks: NodeListOf<HTMLAnchorElement>;
  navOverlay: HTMLElement;
  accordions: NodeListOf<HTMLElement>;
}
