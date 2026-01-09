# Claude Code Guide

> Master the Claude Code CLI with expert tips, hidden features, and productivity hacks.

**[View the Guide](https://vavasilva.github.io/claudecode-guide/)**

## Features

- **Ultrathink** - Unlock maximum thinking power with magic words
- **CLAUDE.md** - Custom instructions for your projects
- **@ Mentions** - Reference files, URLs, and folders directly
- **Slash Commands** - Quick actions like `/compact`, `/cost`, `/review`
- **Model Switching** - Choose between Haiku, Sonnet, and Opus
- **MCP Servers** - Extend Claude with external tools and APIs
- **Hooks** - Run custom scripts on Claude actions
- **Git Integration** - Smart commits and PR reviews
- **Headless Mode** - CI/CD automation with `-p` flag
- **And much more...**

## Quick Start

```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Start Claude
claude

# Use ultrathink for complex problems
ultrathink - How should I architect this system?
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Or use development mode with watch
npm run dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Watch mode - recompiles on changes |
| `npm run build` | Production build (minified) |
| `npm run build:dev` | Development build with sourcemaps |
| `npm run build:check` | Type-check without emitting |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run check` | Run all checks (types, lint, format, tests) |

### Project Structure

```
claudecode-guide/
├── src/
│   ├── app.ts           # Main application entry point
│   ├── search.ts        # Search functionality (pure functions)
│   ├── search-data.ts   # Searchable content database
│   └── types.ts         # TypeScript type definitions
├── tests/
│   └── search.test.ts   # Unit tests for search functions
├── dist/
│   └── app.js           # Compiled JavaScript (generated)
├── index.html           # Main HTML page
├── styles.css           # Styles
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
├── prettier.config.js   # Prettier configuration
└── vitest.config.ts     # Vitest test configuration
```

### Tech Stack

- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting with flat config
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing
- **esbuild** - Fast bundling and minification

## License

MIT
