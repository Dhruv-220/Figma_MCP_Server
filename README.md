# Figma to React Landing Page

This project is a React application generated from a Figma design, built with Vite, TypeScript, and Tailwind CSS.

## Project Structure

- `src/components`: Shared, reusable UI components (Atoms, Molecules).
- `src/features`: Feature-specific modules, each containing its own components, pages, types, etc.
  - `landing/`: Contains all components and logic for the main landing page.
- `src/App.tsx`: Main application component.
- `src/main.tsx`: Application entry point.
- `src/index.css`: Global styles and Tailwind CSS directives.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `tsconfig.json` & `tsconfig.node.json`: TypeScript configurations.
- `vite.config.ts`: Vite build tool configuration.

## Getting Started

### Prerequisites

- Node.js (version 18.x or 20.x recommended)
- npm or yarn

### Installation

1. Clone the repository (if applicable).
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Building for Production

```bash
npm run build
# or
yarn build
```

This command will type-check the project and then build the static assets into the `dist` directory.

### Linting

```bash
npm run lint
# or
yarn lint
```

This will run ESLint to check for code quality and style issues.

## Coding Rules & Guidelines

This project aims to follow these key principles (as per user request):

- **Test-First Development**: Write tests before features. (Vitest/Playwright)
- **TypeScript Strict Mode**: No `any` types, define all interfaces/types.
- **Clean Component Architecture**: Atomic Design (atoms, molecules, organisms, templates, pages). Pure, focused components.
- **Feature-Based Folder Structure**: Organize by features/domains.
- **Clean Architecture Pattern**: UI components separate from business logic.
- **Dependency Injection Pattern**: Pass dependencies explicitly.
- **Tailwind Best Practices**: Utility-first, use `@apply` for common patterns, theme consistency.
- **State Management Hierarchy**: Local state, Context API, Redux/React Query as needed.
- **Performance Optimization**: `React.memo`, `useMemo`, `useCallback`, code-splitting.
- **Error Handling Strategy**: Error boundaries, try/catch, user-friendly messages.
- **Accessibility Standards**: Semantic HTML, ARIA, keyboard navigation, WCAG 2.1 AA.
- **Code Quality Standards**: Consistent naming, small functions, meaningful comments, linting. 