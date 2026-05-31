# Hotflame Biogas - Project Guidelines

Welcome to the Hotflame Biogas codebase. This project is a modern web application for a clean energy initiative based in Narok Town, Kenya, specializing in biogas solutions.

## Project Overview

- **Purpose:** Provide information about biogas solutions, installations, and environmental conservation.
- **Frontend Stack:**
  - **Framework:** [React 19](https://react.dev/)
  - **Meta-framework:** [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (Beta)
  - **Routing:** [TanStack Router](https://tanstack.com/router/latest) (File-based)
  - **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
  - **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
  - **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
  - **Icons:** [Lucide React](https://lucide.dev/)
  - **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
  - **Build Tool:** [Vite 7](https://vitejs.dev/)

## Architecture

The project follows a standard TanStack Start structure:

- `frontend/`: Contains the main web application.
  - `src/routes/`: File-based routing.
    - `__root.jsx`: Global layout, providers, and shell.
    - `index.jsx`: Home page.
    - `about.jsx`, `services.jsx`, `projects.jsx`: Feature pages.
  - `src/components/`: Reusable UI components.
    - `site/`: Site-wide components like Header and Footer.
  - `src/lib/`: Utilities, API functions, and configurations.
  - `src/styles.css` / `tailwind.css`: Global styles and Tailwind configuration.
  - `server.js` / `start.js`: Entry points for TanStack Start / Nitro.

## Building and Running

Commands should be executed within the `frontend/` directory.

### Setup
```bash
cd frontend
npm install
```

### Development
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
```
Builds the application for production using Nitro.

### Linting & Formatting
```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

## Development Conventions

- **Routing:** This project uses **TanStack Router's file-based routing**. To add a new page, create a new file in `frontend/src/routes/`.
- **Components:** Favor composition and Radix UI primitives. Use the `@/` alias for imports from the `src` directory.
- **Styling:** Use Tailwind CSS utility classes. Custom styles should be kept to a minimum in `frontend/src/styles.css`.
- **Types:** The project uses JSDoc and `jsconfig.json` for type checking and IntelliSense in JavaScript files.
- **Backend:** Integration with Supabase is planned as a future enhancement.

## Important Files

- `frontend/package.json`: Dependencies and scripts.
- `frontend/vite.config.js`: Vite and TanStack configuration.
- `frontend/src/routes/__root.jsx`: Root layout and QueryClient setup.
- `README.md`: High-level project information and mission.
- `DEV_SETUP.md`: Local development environment instructions.
