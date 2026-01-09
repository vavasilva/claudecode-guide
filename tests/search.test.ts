import { describe, it, expect } from 'vitest';
import {
  escapeRegex,
  highlightMatch,
  filterSearchData,
  renderSearchResult,
  renderSearchResults,
} from '../src/search';
import type { SearchItem } from '../src/types';

describe('escapeRegex', () => {
  it('escapes special regex characters', () => {
    expect(escapeRegex('$100')).toBe('\\$100');
    expect(escapeRegex('file.ts')).toBe('file\\.ts');
    expect(escapeRegex('(test)')).toBe('\\(test\\)');
    expect(escapeRegex('[array]')).toBe('\\[array\\]');
    expect(escapeRegex('a*b+c?')).toBe('a\\*b\\+c\\?');
  });

  it('returns plain text unchanged', () => {
    expect(escapeRegex('hello world')).toBe('hello world');
    expect(escapeRegex('TypeScript')).toBe('TypeScript');
  });
});

describe('highlightMatch', () => {
  it('returns original text when query is empty', () => {
    expect(highlightMatch('Hello World', '')).toBe('Hello World');
  });

  it('wraps matching text in mark tags', () => {
    expect(highlightMatch('Hello World', 'World')).toBe('Hello <mark>World</mark>');
  });

  it('handles case insensitive matching', () => {
    expect(highlightMatch('Hello World', 'world')).toBe('Hello <mark>World</mark>');
    expect(highlightMatch('HELLO', 'hello')).toBe('<mark>HELLO</mark>');
  });

  it('escapes regex special characters in query', () => {
    expect(highlightMatch('Cost is $100', '$100')).toBe('Cost is <mark>$100</mark>');
    expect(highlightMatch('file.ts', '.ts')).toBe('file<mark>.ts</mark>');
  });

  it('handles multiple matches', () => {
    expect(highlightMatch('cat and cat', 'cat')).toBe(
      '<mark>cat</mark> and <mark>cat</mark>'
    );
  });

  it('handles partial word matches', () => {
    expect(highlightMatch('TypeScript', 'Script')).toBe('Type<mark>Script</mark>');
  });
});

describe('filterSearchData', () => {
  const mockData: SearchItem[] = [
    {
      id: '1',
      title: 'TypeScript',
      tag: 'Language',
      content: 'Typed JavaScript for better development',
      section: '#ts',
    },
    {
      id: '2',
      title: 'ESLint',
      tag: 'Tool',
      content: 'Linting utility for JavaScript',
      section: '#lint',
    },
    {
      id: '3',
      title: 'Prettier',
      tag: 'Tool',
      content: 'Code formatter',
      section: '#format',
    },
  ];

  it('filters by title', () => {
    const results = filterSearchData(mockData, 'type');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('filters by content', () => {
    const results = filterSearchData(mockData, 'utility');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('2');
  });

  it('filters by tag', () => {
    const results = filterSearchData(mockData, 'Tool');
    expect(results).toHaveLength(2);
    expect(results.map((r) => r.id)).toEqual(['2', '3']);
  });

  it('is case insensitive', () => {
    const results = filterSearchData(mockData, 'TYPESCRIPT');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('returns empty array for no matches', () => {
    expect(filterSearchData(mockData, 'xyz')).toHaveLength(0);
  });

  it('returns empty array for empty query', () => {
    expect(filterSearchData(mockData, '')).toHaveLength(0);
    expect(filterSearchData(mockData, '   ')).toHaveLength(0);
  });

  it('returns multiple matches', () => {
    const results = filterSearchData(mockData, 'JavaScript');
    expect(results).toHaveLength(2);
  });
});

describe('renderSearchResult', () => {
  const mockItem: SearchItem = {
    id: 'test',
    title: 'Test Item',
    tag: 'Test',
    content: 'This is test content',
    section: '#test-section',
  };

  it('renders with correct data attributes', () => {
    const html = renderSearchResult(mockItem, 'test');
    expect(html).toContain('data-section="#test-section"');
  });

  it('highlights query in title', () => {
    const html = renderSearchResult(mockItem, 'Test');
    expect(html).toContain('<mark>Test</mark> Item');
  });

  it('includes tag', () => {
    const html = renderSearchResult(mockItem, '');
    expect(html).toContain('class="search-result-tag"');
    expect(html).toContain('Test');
  });

  it('truncates long content', () => {
    const longItem: SearchItem = {
      ...mockItem,
      content: 'A'.repeat(150),
    };
    const html = renderSearchResult(longItem, '');
    expect(html).toContain('...');
    expect(html).not.toContain('A'.repeat(150));
  });
});

describe('renderSearchResults', () => {
  const mockData: SearchItem[] = [
    {
      id: '1',
      title: 'Item 1',
      tag: 'Tag',
      content: 'Content 1',
      section: '#s1',
    },
    {
      id: '2',
      title: 'Item 2',
      tag: 'Tag',
      content: 'Content 2',
      section: '#s2',
    },
  ];

  it('renders all results', () => {
    const html = renderSearchResults(mockData, 'Item');
    // Note: "Item" is highlighted with <mark> tags
    expect(html).toContain('<mark>Item</mark> 1');
    expect(html).toContain('<mark>Item</mark> 2');
    expect(html).toContain('data-section="#s1"');
    expect(html).toContain('data-section="#s2"');
  });

  it('renders no results message when empty', () => {
    const html = renderSearchResults([], 'xyz');
    expect(html).toContain('No results found');
    expect(html).toContain('xyz');
  });
});
