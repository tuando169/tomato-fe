# Migrate tomato-fe to Nuxt 3

This plan outlines the steps to migrate the current Vue 3 + Vite + Vue Router project (`tomato-fe`) to Nuxt 3. Nuxt 3 provides a robust framework around Vue 3, featuring file-based routing, auto-imports, and server-side rendering (SSR) capabilities.

## User Review Required

> [!IMPORTANT]
> - Nuxt 3 uses **file-based routing**. This means the `src/router/index.ts` file will be deleted, and all routes will be inferred from the `pages/` directory structure.
> - **Auto-imports**: Nuxt automatically imports components from the `components/` directory and composables/stores. Manual imports in Vue files will be cleaned up where applicable.
> - By default, Nuxt 3 enables SSR (Server-Side Rendering). If your app relies heavily on browser-only APIs (`window`, `document`) during the initial load, we may need to wrap those components in `<ClientOnly>` or adjust the logic. I will take care of this during the migration.
> - Would you like to use the `@nuxtjs/tailwindcss` module to simplify Tailwind configuration, or stick to the manual PostCSS setup currently in use? My plan assumes we will use the Nuxt module.

## Open Questions

> [!WARNING]
> - Should we keep all source files inside the `src/` directory (by configuring `srcDir: 'src/'` in Nuxt), or move everything to the root directory (`pages/`, `components/`, `assets/`, etc.) which is the default Nuxt convention? My plan currently assumes moving everything to the root directory to follow standard Nuxt practices.
> - Do you want to enable Server-Side Rendering (SSR) for SEO benefits, or keep it as a Single Page Application (SPA) by setting `ssr: false` in `nuxt.config.ts`?

## Proposed Changes

---

### Dependencies & Configuration

We will transition from Vite and Vue Router to Nuxt 3 and its ecosystem modules.

#### [MODIFY] `package.json`
- **Add:** `nuxt`, `@pinia/nuxt`, `@nuxtjs/tailwindcss`
- **Remove:** `vite`, `@vitejs/plugin-vue`, `vue-router`, `vue` (managed by Nuxt), `vue-tsc` (replaced by Nuxt typecheck)
- **Scripts Update:** Change `dev`, `build`, `preview` to use `nuxt` commands instead of `vite`.

#### [NEW] `nuxt.config.ts`
- Create the main Nuxt configuration file.
- Register `@pinia/nuxt` and `@nuxtjs/tailwindcss` modules.
- Configure global CSS targeting the Tailwind stylesheet.
- Configure head tags (title, meta) previously defined in `index.html`.

#### [DELETE] `vite.config.js`
- No longer needed as Nuxt uses its own builder configuration.

#### [DELETE] `index.html`
- Nuxt handles the HTML template internally.

---

### App Root & Layout

Nuxt replaces `main.ts` and `App.vue` with `app.vue` and optionally a layout system.

#### [NEW] `app.vue`
- Will contain the global layout structure: `<NavBar />`, `<NuxtPage />` (replacing `<router-view>`), and `<Footer />`.
- Global page transition CSS (currently in `App.vue`) will be moved here and configured in `nuxt.config.ts`.

#### [DELETE] `src/main.ts`
- Nuxt handles Vue app initialization, plugin registration (like Pinia), and global component registration automatically.

#### [DELETE] `src/App.vue`
- Replaced by `app.vue` at the root.

---

### Routing & Pages

Migrating from `vue-router` configuration to Nuxt's file-based routing.

#### [DELETE] `src/router/index.ts`
- Routes will be auto-generated based on the `pages/` directory.

#### [NEW] `pages/` Directory Setup
Move and rename files from `src/views/` to `pages/`:
- `src/views/HomeView.vue` -> `pages/index.vue`
- `src/views/AboutView.vue` -> `pages/about.vue`
- `src/views/GalleryView.vue` -> `pages/gallery.vue`
- `src/views/ArtworkDetailView.vue` -> `pages/artwork/[id].vue`
- `src/views/CommissionView.vue` -> `pages/commission.vue`

#### [NEW] `pages/admin/artworks.vue` (Artwork Management)
- Create a new page for managing artworks.
- Implement the UI based on the design provided in `plan/nuxt-migration/code.html`.
- This page will connect to the Supabase API to manage artwork data.

#### [DELETE] `src/views/`
- Directory will be removed after migration.

---

### Components, Assets & Stores

Nuxt auto-imports these directories when placed at the root level.

#### [MODIFY] `components/`
- Move all files from `src/components/` to `components/`.
- `BaseButton.vue` will be auto-registered globally by Nuxt, removing the need for `app.component()` in `main.ts`.

#### [MODIFY] `assets/`
- Move all files from `src/assets/` to `assets/`.
- Move `src/style.css` to `assets/css/style.css` (or `assets/style.css`) and update `nuxt.config.ts` to include it globally.

#### [MODIFY] `stores/`
- Move all Pinia store files from `src/stores/` to `stores/`.
- Nuxt will automatically allow imports from these stores.

#### [DELETE] `src/` Directory
- Once all contents are successfully moved to the root (`pages`, `components`, `assets`, `stores`, etc.), the `src/` directory will be deleted.

---

### Supabase Integration & API

We will integrate Supabase as our backend service for authentication, database, and storage.

#### [NEW] Dependencies
- Install `@nuxtjs/supabase` module: `npm install @nuxtjs/supabase --save-dev`

#### [MODIFY] `nuxt.config.ts`
- Register the `@nuxtjs/supabase` module.
- Configure Supabase environment variables (URL and Key).

#### [NEW] `.env`
- Add `SUPABASE_URL` and `SUPABASE_KEY` environment variables.

#### [NEW] `server/api/` (Optional Nuxt API routes)
- Create Nuxt API endpoints under `server/api/` if we need to hide complex Supabase logic or use the Supabase Service Key, otherwise use the Supabase client directly in composables/stores.

#### [MODIFY] `stores/` and `composables/`
- Update existing state management to fetch data from Supabase instead of local JSON/mock data.

---

## Verification Plan

### Automated Tests
- Run `npm run dev` to ensure the Nuxt development server starts without errors.
- Run `npx nuxi typecheck` to verify TypeScript types and auto-generated declarations.
- Run `npm run build` to verify the production build succeeds.

### Manual Verification
- **Routing:** Click through all navigation links (Home, About, Gallery, Commissions) to verify file-based routing works.
- **Dynamic Routes:** Test clicking on an artwork to verify `pages/artwork/[id].vue` loads correctly with the specific ID.
- **Styling:** Ensure Tailwind CSS styles and global animations are applied correctly.
- **State:** Test actions that mutate the Pinia store to ensure state management functions as expected.
