// Searchable content database
const searchData = [
  // Ultrathink
  {
    id: 'ultrathink',
    title: 'Ultrathink',
    tag: 'Feature',
    content: 'A magic word that activates the maximum thinking budget extended thinking. Unlocks up to 31,999 tokens of internal reasoning for complex problems.',
    section: '#ultrathink'
  },
  {
    id: 'think',
    title: 'think command',
    tag: 'Command',
    content: 'Basic thinking mode with approximately 4,000 tokens of reasoning capacity.',
    section: '#ultrathink'
  },
  {
    id: 'megathink',
    title: 'think hard / megathink',
    tag: 'Command',
    content: 'Medium thinking mode with approximately 10,000 tokens of reasoning.',
    section: '#ultrathink'
  },
  {
    id: 'thinking-tokens',
    title: 'Thinking Tokens',
    tag: 'Concept',
    content: 'The amount of internal reasoning Claude uses. think: 4000, megathink: 10000, ultrathink: 31999 tokens.',
    section: '#ultrathink'
  },

  // CLAUDE.md
  {
    id: 'claudemd',
    title: 'CLAUDE.md',
    tag: 'Config',
    content: 'Special markdown file for custom instructions. Claude reads it automatically for project context, coding standards, and preferences.',
    section: '#claudemd'
  },
  {
    id: 'claudemd-global',
    title: 'Global CLAUDE.md',
    tag: 'Config',
    content: 'Located at ~/.claude/CLAUDE.md. Applies to all projects. Lower priority than project-specific files.',
    section: '#claudemd'
  },
  {
    id: 'claudemd-project',
    title: 'Project CLAUDE.md',
    tag: 'Config',
    content: 'Located at .claude/CLAUDE.md or project root. Highest priority for project-specific instructions.',
    section: '#claudemd'
  },

  // Slash Commands
  {
    id: 'compact',
    title: '/compact',
    tag: 'Command',
    content: 'Compress conversation context to save tokens. Summarizes while preserving important context.',
    section: '#slash-commands'
  },
  {
    id: 'cost',
    title: '/cost',
    tag: 'Command',
    content: 'Show token usage and estimated cost for the current session.',
    section: '#slash-commands'
  },
  {
    id: 'clear',
    title: '/clear',
    tag: 'Command',
    content: 'Clear conversation history and start fresh.',
    section: '#slash-commands'
  },
  {
    id: 'init',
    title: '/init',
    tag: 'Command',
    content: 'Generate a CLAUDE.md file for your project with suggested content.',
    section: '#slash-commands'
  },
  {
    id: 'doctor',
    title: '/doctor',
    tag: 'Command',
    content: 'Diagnose configuration issues. Checks API key, model access, MCP servers.',
    section: '#slash-commands'
  },
  {
    id: 'config',
    title: '/config',
    tag: 'Command',
    content: 'Open configuration settings.',
    section: '#slash-commands'
  },
  {
    id: 'help',
    title: '/help',
    tag: 'Command',
    content: 'Show help and available commands.',
    section: '#slash-commands'
  },
  {
    id: 'review',
    title: '/review',
    tag: 'Command',
    content: 'Review code changes or pull request.',
    section: '#slash-commands'
  },

  // Keyboard Shortcuts
  {
    id: 'esc',
    title: 'Esc key',
    tag: 'Shortcut',
    content: 'Interrupt current generation. Stop Claude mid-response.',
    section: '#keyboard-shortcuts'
  },
  {
    id: 'ctrl-c',
    title: 'Ctrl + C',
    tag: 'Shortcut',
    content: 'Cancel current operation or exit.',
    section: '#keyboard-shortcuts'
  },
  {
    id: 'ctrl-d',
    title: 'Ctrl + D',
    tag: 'Shortcut',
    content: 'Exit Claude Code.',
    section: '#keyboard-shortcuts'
  },
  {
    id: 'shift-enter',
    title: 'Shift + Enter',
    tag: 'Shortcut',
    content: 'Multi-line input. Enter a new line without sending.',
    section: '#keyboard-shortcuts'
  },

  // Model Switching
  {
    id: 'haiku',
    title: 'Haiku model',
    tag: 'Model',
    content: 'Fastest and cheapest model. Best for quick tasks and simple edits.',
    section: '#model-switching'
  },
  {
    id: 'sonnet',
    title: 'Sonnet model',
    tag: 'Model',
    content: 'Default balanced model. Good for most coding tasks.',
    section: '#model-switching'
  },
  {
    id: 'opus',
    title: 'Opus model',
    tag: 'Model',
    content: 'Most capable model. Best for complex reasoning and architecture.',
    section: '#model-switching'
  },
  {
    id: 'model-flag',
    title: '--model flag',
    tag: 'CLI',
    content: 'Start Claude with a specific model: claude --model opus',
    section: '#model-switching'
  },

  // Hooks
  {
    id: 'hooks',
    title: 'Hooks',
    tag: 'Feature',
    content: 'Run custom scripts automatically when Claude performs actions. PreToolUse, PostToolUse, Notification, Stop.',
    section: '#hooks'
  },
  {
    id: 'pretooluse',
    title: 'PreToolUse hook',
    tag: 'Hook',
    content: 'Runs before a tool executes. Validate or modify operations.',
    section: '#hooks'
  },
  {
    id: 'posttooluse',
    title: 'PostToolUse hook',
    tag: 'Hook',
    content: 'Runs after a tool completes. Auto-format, lint, or test.',
    section: '#hooks'
  },

  // MCP Servers
  {
    id: 'mcp',
    title: 'MCP Servers',
    tag: 'Feature',
    content: 'Model Context Protocol servers extend Claude with external tools, databases, and APIs.',
    section: '#mcp-servers'
  },
  {
    id: 'mcp-github',
    title: 'GitHub MCP',
    tag: 'MCP',
    content: 'Connect to GitHub for issues, PRs, repos, and actions.',
    section: '#mcp-servers'
  },
  {
    id: 'mcp-postgres',
    title: 'PostgreSQL MCP',
    tag: 'MCP',
    content: 'Query databases directly from Claude.',
    section: '#mcp-servers'
  },

  // Headless Mode
  {
    id: 'headless',
    title: 'Headless Mode',
    tag: 'Feature',
    content: 'Non-interactive scripting with -p flag. Perfect for CI/CD and automation.',
    section: '#headless-mode'
  },
  {
    id: 'p-flag',
    title: '-p flag (prompt)',
    tag: 'CLI',
    content: 'Run Claude with a single prompt: claude -p "Your prompt here"',
    section: '#headless-mode'
  },
  {
    id: 'ci-cd',
    title: 'CI/CD Integration',
    tag: 'Use Case',
    content: 'Use headless mode in GitHub Actions or other CI pipelines for automated code review.',
    section: '#headless-mode'
  },

  // Git Integration
  {
    id: 'git',
    title: 'Git Integration',
    tag: 'Feature',
    content: 'Smart commits, PR reviews, diff analysis, and conflict resolution.',
    section: '#git-integration'
  },
  {
    id: 'smart-commit',
    title: 'Smart Commits',
    tag: 'Git',
    content: 'Ask Claude to commit with meaningful messages based on changes.',
    section: '#git-integration'
  },
  {
    id: 'pr-review',
    title: 'PR Review',
    tag: 'Git',
    content: 'Use /review to get code review on changes or pull requests.',
    section: '#git-integration'
  },

  // Costs & Performance
  {
    id: 'costs',
    title: 'Token Costs',
    tag: 'Info',
    content: 'Haiku ~$0.25/1M, Sonnet ~$3/1M, Opus ~$15/1M input tokens.',
    section: '#costs-performance'
  },
  {
    id: 'performance',
    title: 'Performance Tips',
    tag: 'Info',
    content: 'Use /compact regularly, choose Haiku for simple tasks, be specific in prompts.',
    section: '#costs-performance'
  },

  // IDE Integrations
  {
    id: 'vscode',
    title: 'VS Code',
    tag: 'IDE',
    content: 'Run Claude in VS Code terminal panel. Ctrl+` to open terminal.',
    section: '#ide-integrations'
  },
  {
    id: 'jetbrains',
    title: 'JetBrains IDEs',
    tag: 'IDE',
    content: 'Works in IntelliJ, WebStorm, PyCharm terminal.',
    section: '#ide-integrations'
  },
  {
    id: 'vim',
    title: 'Vim / Neovim',
    tag: 'IDE',
    content: 'Use :term claude to open Claude in a split.',
    section: '#ide-integrations'
  },

  // Configuration
  {
    id: 'settings',
    title: 'Settings',
    tag: 'Config',
    content: 'Global settings at ~/.claude/settings.json. Project settings at .claude/settings.json.',
    section: '#configuration'
  },
  {
    id: 'api-key',
    title: 'ANTHROPIC_API_KEY',
    tag: 'Env',
    content: 'Environment variable for your Anthropic API key.',
    section: '#configuration'
  },
  {
    id: 'max-thinking',
    title: 'MAX_THINKING_TOKENS',
    tag: 'Env',
    content: 'Override the thinking token budget. Takes precedence over magic words.',
    section: '#configuration'
  },

  // @ Mentions
  {
    id: 'mentions',
    title: '@ Mentions',
    tag: 'Feature',
    content: 'Reference files, URLs, and folders directly in your prompt using @ syntax.',
    section: '#mentions'
  },
  {
    id: 'mention-file',
    title: '@file mention',
    tag: 'Syntax',
    content: 'Reference a specific file: @src/index.ts - Claude will read and understand the file.',
    section: '#mentions'
  },
  {
    id: 'mention-folder',
    title: '@folder mention',
    tag: 'Syntax',
    content: 'Reference entire directories: @src/components/ - Claude will explore the folder structure.',
    section: '#mentions'
  },
  {
    id: 'mention-url',
    title: '@url mention',
    tag: 'Syntax',
    content: 'Reference web URLs: @https://docs.example.com - Claude will fetch and read the content.',
    section: '#mentions'
  },

  // Permissions & Safety
  {
    id: 'permissions',
    title: 'Permissions',
    tag: 'Safety',
    content: 'Claude asks for permission before file operations, bash commands, and web requests.',
    section: '#permissions'
  },
  {
    id: 'yolo-mode',
    title: 'YOLO Mode',
    tag: 'Mode',
    content: 'Skip all permission prompts with --dangerously-skip-permissions. Use with caution!',
    section: '#permissions'
  },
  {
    id: 'allowed-tools',
    title: 'Allowed Tools',
    tag: 'Config',
    content: 'Configure which tools are pre-approved in settings.json.',
    section: '#permissions'
  },
  {
    id: 'sandbox',
    title: 'Sandbox Mode',
    tag: 'Safety',
    content: 'Restrict Claude to read-only operations for safer exploration.',
    section: '#permissions'
  },

  // Session Resume
  {
    id: 'session-resume',
    title: 'Session Resume',
    tag: 'Feature',
    content: 'Continue previous conversations with --continue or --resume flags.',
    section: '#session-resume'
  },
  {
    id: 'continue-flag',
    title: '--continue flag',
    tag: 'CLI',
    content: 'Resume your most recent conversation: claude --continue',
    section: '#session-resume'
  },
  {
    id: 'resume-flag',
    title: '--resume flag',
    tag: 'CLI',
    content: 'Pick a specific session to resume from the session picker.',
    section: '#session-resume'
  },
  {
    id: 'session-history',
    title: 'Session History',
    tag: 'Feature',
    content: 'All conversations are stored locally in ~/.claude/sessions/',
    section: '#session-resume'
  },

  // Image Support
  {
    id: 'image-support',
    title: 'Image Support',
    tag: 'Feature',
    content: 'Claude can analyze images, screenshots, and diagrams for visual understanding.',
    section: '#image-support'
  },
  {
    id: 'image-paste',
    title: 'Paste Images',
    tag: 'Usage',
    content: 'Paste images directly from clipboard into Claude Code.',
    section: '#image-support'
  },
  {
    id: 'image-file',
    title: 'Image Files',
    tag: 'Usage',
    content: 'Reference image files with @ mentions: @screenshot.png',
    section: '#image-support'
  },
  {
    id: 'image-use-cases',
    title: 'Image Use Cases',
    tag: 'Info',
    content: 'Debug UI issues, implement designs from mockups, understand diagrams and architecture.',
    section: '#image-support'
  },

  // Vim Mode
  {
    id: 'vim-mode',
    title: 'Vim Mode',
    tag: 'Feature',
    content: 'Enable vim-style keybindings in the input area for power users.',
    section: '#vim-mode'
  },
  {
    id: 'vim-enable',
    title: 'Enable Vim Mode',
    tag: 'Config',
    content: 'Set vim_mode: true in settings.json or toggle via /config.',
    section: '#vim-mode'
  },
  {
    id: 'vim-keys',
    title: 'Vim Keybindings',
    tag: 'Shortcut',
    content: 'Use hjkl navigation, i for insert mode, Esc for normal mode, dd to delete line.',
    section: '#vim-mode'
  },

  // Custom Slash Commands
  {
    id: 'custom-commands',
    title: 'Custom Slash Commands',
    tag: 'Feature',
    content: 'Create reusable project-specific commands in .claude/commands/ directory.',
    section: '#custom-commands'
  },
  {
    id: 'command-file',
    title: 'Command Files',
    tag: 'Config',
    content: 'Create .md files in .claude/commands/ with prompts. File name becomes command name.',
    section: '#custom-commands'
  },
  {
    id: 'command-variables',
    title: 'Command Variables',
    tag: 'Feature',
    content: 'Use $ARGUMENTS for user input in custom commands.',
    section: '#custom-commands'
  },

  // Best Practices
  {
    id: 'best-practices',
    title: 'Best Practices',
    tag: 'Guide',
    content: 'Tips for getting the best results from Claude Code.',
    section: '#best-practices'
  },
  {
    id: 'be-specific',
    title: 'Be Specific',
    tag: 'Tip',
    content: 'Specific prompts get better results than vague requests.',
    section: '#best-practices'
  },
  {
    id: 'context-first',
    title: 'Context First',
    tag: 'Tip',
    content: 'Use @ mentions to provide context before asking questions.',
    section: '#best-practices'
  },
  {
    id: 'iterative',
    title: 'Iterate',
    tag: 'Tip',
    content: 'Break complex tasks into smaller steps for better control.',
    section: '#best-practices'
  },
  {
    id: 'review-changes',
    title: 'Review Changes',
    tag: 'Tip',
    content: 'Always review changes before committing. Use git diff to verify.',
    section: '#best-practices'
  },

  // Troubleshooting
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    tag: 'Help',
    content: 'Common errors and how to fix them.',
    section: '#common-errors'
  },
  {
    id: 'api-error',
    title: 'API Key Error',
    tag: 'Error',
    content: 'Check ANTHROPIC_API_KEY is set correctly. Run /doctor to diagnose.',
    section: '#common-errors'
  },
  {
    id: 'rate-limit',
    title: 'Rate Limit',
    tag: 'Error',
    content: 'Too many requests. Wait a moment or upgrade your API plan.',
    section: '#common-errors'
  },
  {
    id: 'context-limit',
    title: 'Context Limit',
    tag: 'Error',
    content: 'Conversation too long. Use /compact to compress or /clear to start fresh.',
    section: '#common-errors'
  },
  {
    id: 'permission-denied',
    title: 'Permission Denied',
    tag: 'Error',
    content: 'Claude needs permission. Approve the action or configure allowed tools.',
    section: '#common-errors'
  },

  // Background Tasks
  {
    id: 'background-tasks',
    title: 'Background Tasks',
    tag: 'Feature',
    content: 'Run long-running tasks without blocking Claude interaction.',
    section: '#background-tasks'
  },
  {
    id: 'background-agent',
    title: 'Background Agents',
    tag: 'Feature',
    content: 'Spawn sub-agents to handle complex tasks asynchronously.',
    section: '#background-tasks'
  },
  {
    id: 'parallel-tasks',
    title: 'Parallel Execution',
    tag: 'Feature',
    content: 'Multiple operations can run in parallel for faster completion.',
    section: '#background-tasks'
  }
];

// DOM Elements
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Toggle search
function toggleSearch() {
  searchContainer.classList.toggle('visible');
  if (searchContainer.classList.contains('visible')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
    searchResults.classList.remove('active');
  }
}

searchToggle.addEventListener('click', toggleSearch);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Cmd/Ctrl + K to toggle search
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }
  // Escape to close search
  if (e.key === 'Escape' && searchContainer.classList.contains('visible')) {
    toggleSearch();
  }
});

// Search functionality
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function performSearch(query) {
  if (!query.trim()) {
    searchResults.classList.remove('active');
    return;
  }

  const normalizedQuery = query.toLowerCase();
  const results = searchData.filter(item => {
    return item.title.toLowerCase().includes(normalizedQuery) ||
           item.content.toLowerCase().includes(normalizedQuery) ||
           item.tag.toLowerCase().includes(normalizedQuery);
  });

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="no-results">No results found for "' + query + '"</div>';
  } else {
    searchResults.innerHTML = results.map(item => `
      <div class="search-result-item" data-section="${item.section}">
        <div class="search-result-title">
          ${highlightMatch(item.title, query)}
          <span class="search-result-tag">${item.tag}</span>
        </div>
        <div class="search-result-excerpt">
          ${highlightMatch(item.content.substring(0, 100), query)}${item.content.length > 100 ? '...' : ''}
        </div>
      </div>
    `).join('');
  }

  searchResults.classList.add('active');
}

searchInput.addEventListener('input', (e) => {
  performSearch(e.target.value);
});

// Click on result to navigate and open accordion
searchResults.addEventListener('click', (e) => {
  const item = e.target.closest('.search-result-item');
  if (item) {
    const sectionId = item.dataset.section;
    const accordion = document.querySelector(sectionId);

    toggleSearch();

    if (accordion) {
      // Open the accordion
      accordion.classList.add('active');

      // Scroll to it
      setTimeout(() => {
        accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
  if (searchContainer.classList.contains('visible') &&
      !searchContainer.contains(e.target) &&
      !searchToggle.contains(e.target)) {
    toggleSearch();
  }
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('active');
  });
});

// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Navigation Menu
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const navClose = document.getElementById('navClose');
const navLinks = document.querySelectorAll('.nav-link');

// Create overlay element
const navOverlay = document.createElement('div');
navOverlay.classList.add('nav-overlay');
document.body.appendChild(navOverlay);

function openMenu() {
  navMenu.classList.add('open');
  navOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

// Close menu and navigate when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const accordion = document.querySelector(targetId);

    closeMenu();

    if (accordion) {
      // Open the accordion
      accordion.classList.add('active');

      // Scroll to it with offset for fixed elements
      setTimeout(() => {
        accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  });
});

// Highlight active section on scroll
const accordions = document.querySelectorAll('.accordion');

function updateActiveLink() {
  let current = '';

  accordions.forEach(accordion => {
    const rect = accordion.getBoundingClientRect();
    if (rect.top <= 150) {
      current = '#' + accordion.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Keyboard shortcut for menu
document.addEventListener('keydown', (e) => {
  // Escape to close menu
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    closeMenu();
  }
});
