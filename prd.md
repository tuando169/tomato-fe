# Product Requirement Document (PRD)

## 1. Project Overview
**Project Name**: The Ethereal Gallery (`tomato-fe`)
**Objective**: Build a modern, highly aesthetic, and interactive art portfolio web application for a contemporary artist (e.g., bochoinuoc / Elena Vance). The platform serves as a digital gallery to showcase artworks, provide an immersive gallery experience, narrate the artist's philosophy, and allow clients to inquire about commissions.

## 2. Target Audience
- Art collectors and enthusiasts seeking to explore and purchase high-quality artwork.
- Potential clients interested in requesting custom commissions.
- Gallery curators and art communities.

## 3. Tech Stack
The project is built on a modern Vue ecosystem, currently migrated/migrating to Nuxt 3 for robust file-based routing and auto-imports.

- **Framework**: Nuxt 3 (Vue 3 + Composition API)
- **Styling**: Tailwind CSS (custom configurations for editorial design, typography, colors) + Vanilla CSS (for complex interactive animations and glassmorphism)
- **State Management**: Pinia
- **Backend & Database**: Supabase (PostgreSQL Database, Authentication, and Storage)
- **Icons**: Material Symbols Outlined (Google Fonts)
- **Typography**: Noto Serif (Headings) & Manrope (Body/Labels)

## 4. Design System & UI/UX Philosophy
The design follows an **"Editorial Design"** aesthetic aimed at providing a premium and immersive experience:
- **Tonal Architecture**: Minimal use of borders. Separation of elements is achieved through subtle tonal shifts in background colors.
- **Asymmetric Layouts**: Breaking the traditional grid to give artworks "breathing room".
- **Glassmorphism**: Use of `backdrop-blur` for navigation bars and overlay tags.
- **Interactive Animations**: Extensive use of CSS transitions (`duration-700`, `hover:scale-105`, `grayscale` to color shifts) to make the interface feel alive and premium.

## 5. Key Features & Page Structure (File-Based Routing)

### 5.1 Public Pages
- **Home Page (`/`)**: Landing page featuring a hero section with the artist's philosophy, a dynamic showcase of highlighted/featured artworks, and a prominent call-to-action (CTA) for commissions.
- **About the Artist (`/about`)**: Detailed biography, experience stats (years, completed works, exhibitions), interactive exhibition list, and studio information.
- **Gallery (`/gallery`)**: Full portfolio display in a dynamic grid layout with interactive image hover effects (`scale`, `translate-y`).
- **Artwork Detail (`/artwork/[id]`)**: Deep dive into a single artwork. Features interactive thumbnails, full description, tags, and a "Contact to Buy" button (e.g., redirecting to Instagram or contact method).
- **Commission (`/commission`)**: Information about the custom artwork request process, with a CTA directing clients to contact the artist.

### 5.2 Admin Dashboard (`/admin/*`)
A secure, authenticated area to manage the platform's content.
- **Inventory Management (`/admin/index.vue`)**: A comprehensive grid/list view displaying all artworks with search, filter, and sorting capabilities. Displays statistics (Total Artworks, Highlighted, Unique Tags).
- **CRUD Operations**: The admin can Create, Read, Update, and Delete artworks. Includes managing image URLs, tags, descriptions, titles, and toggling the `highlight` status.
- **Modals**: Custom popups for editing (`AdminEditModal`) and deleting (`AdminDeleteModal`) artworks.
- **Direct Supabase Integration**: The dashboard directly interacts with Supabase to persist state and manage images.

## 6. Data Model (Supabase Schema)

The application relies on a streamlined PostgreSQL database hosted on Supabase.

### 6.1 `artworks` Table
- `id` (uuid): Primary key, default `gen_random_uuid()`
- `title` (text): The title of the artwork.
- `description` (text): Detailed description of the piece.
- `images` (text array or jsonb): Array of URLs pointing to the uploaded images (hosted on Supabase Storage or external).
- `tags` (text array or jsonb): Array of classification tags (e.g., `['Oil', 'Botanical']`).
- `highlight` (boolean): Flag to mark featured artworks for display on the homepage (default: `false`).
- `created_at` (timestamp): Timestamp of creation.

### 6.2 Application State (Pinia - `stores/gallery.ts`)
- Manages the local state of `artworks`, `artist` profile data, loading states, and computed properties like `highlightedArtworks` and `allTags`.
- Exposes actions to fetch, update, delete, and toggle highlights directly communicating with the Supabase client.

## 7. Performance & SEO Requirements
- **Image Optimization**: High-quality artwork images must be optimized (e.g., WebP format) and use lazy loading (`loading="lazy"`) to maintain fast page load speeds.
- **Responsive Design**: Asymmetric layouts must gracefully adapt across different breakpoints (`sm`, `md`, `lg`) to prevent layout breaking on mobile and tablet devices.
- **SSR & SEO**: Leveraging Nuxt 3's capabilities, ensure appropriate meta tags and Server-Side Rendering (SSR) are configured if optimal for search engine discoverability.

## 8. Future Milestones
- Completion of Nuxt 3 migration (moving away from Vue Router, setting up Nuxt config, migrating to `pages/` structure).
- Finalizing Supabase Auth for the Admin Dashboard to ensure secure access.
- Integrating Supabase Storage for direct image uploads from the Admin Edit Modal.
