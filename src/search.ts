import type { SearchItem } from './types';

/**
 * Escapes special regex characters in a string
 */
export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Highlights matching text by wrapping it in <mark> tags
 * @param text - The text to search in
 * @param query - The search query to highlight
 * @returns The text with matches wrapped in <mark> tags
 */
export function highlightMatch(text: string, query: string): string {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * Filters search data based on a query string
 * @param data - Array of search items to filter
 * @param query - The search query
 * @returns Filtered array of matching items
 */
export function filterSearchData(data: SearchItem[], query: string): SearchItem[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();
  return data.filter((item) => {
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.content.toLowerCase().includes(normalizedQuery) ||
      item.tag.toLowerCase().includes(normalizedQuery)
    );
  });
}

/**
 * Renders a single search result item as HTML
 * @param item - The search item to render
 * @param query - The search query for highlighting
 * @returns HTML string for the search result
 */
export function renderSearchResult(item: SearchItem, query: string): string {
  const maxExcerptLength = 100;
  const truncatedContent =
    item.content.length > maxExcerptLength
      ? item.content.substring(0, maxExcerptLength) + '...'
      : item.content;

  return `
    <div class="search-result-item" data-section="${item.section}">
      <div class="search-result-title">
        ${highlightMatch(item.title, query)}
        <span class="search-result-tag">${item.tag}</span>
      </div>
      <div class="search-result-excerpt">
        ${highlightMatch(truncatedContent, query)}
      </div>
    </div>
  `;
}

/**
 * Renders search results or a "no results" message
 * @param results - Array of search results
 * @param query - The original search query
 * @returns HTML string for all results or empty message
 */
export function renderSearchResults(results: SearchItem[], query: string): string {
  if (results.length === 0) {
    return `<div class="no-results">No results found for "${query}"</div>`;
  }
  return results.map((item) => renderSearchResult(item, query)).join('');
}
