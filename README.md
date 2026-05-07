# The Ethereal Gallery (tomato-fe)

Welcome to **The Ethereal Gallery** repository (`tomato-fe`). This project is a modern, high-aesthetic art portfolio web application designed to showcase the artworks of an artist (e.g., Elena Vance), provide a gallery experience, and allow clients to request commissions or inquire about specific pieces.

## 🚀 Tech Stack

The project is currently undergoing a migration from a standard Vue 3 SPA to **Nuxt 3**.

- **Framework:** Nuxt 3 (Vue 3 + Composition API)
- **Styling:** Tailwind CSS (Custom configurations for editorial design, typography, and colors) + Vanilla CSS (for complex interactive animations and glassmorphism)
- **State Management:** Pinia
- **Backend & Database:** Supabase (Authentication, PostgreSQL Database, and Storage)
- **Icons:** Material Symbols Outlined (Google Fonts)
- **Typography:** Noto Serif (Headings) & Manrope (Body/Labels)

## 📁 Project Structure & Pages

With the migration to Nuxt 3, the project utilizes **file-based routing** within the `pages/` directory:

1. **`pages/index.vue` (Home):** Landing page with a hero section, artist philosophy, featured artworks, and a commission CTA.
2. **`pages/about.vue` (About the Artist):** Biography, interactive exhibition list, and studio information.
3. **`pages/gallery.vue` (Gallery):** Full portfolio display with interactive image hover effects (`scale`, `translate-y`).
4. **`pages/artwork/[id].vue` (Artwork Detail):** Detailed view of a single artwork. Features interactive thumbnails and a "Contact to Buy" button that redirects to the artist's Instagram.
5. **`pages/commission.vue` (Commission):** Information about custom artwork requests. The CTA redirects clients to Instagram instead of a complex on-site form.
6. **`pages/admin/artworks.vue` (Admin Dashboard):** A secure area to manage (CRUD) the artwork portfolio directly connected to Supabase.

## 🗄️ Database Schema (Supabase)

The application relies on a streamlined PostgreSQL database hosted on Supabase. Currently, the primary table is `artworks`:

**`artworks` Table:**
- `id` (uuid, primary key, default: `gen_random_uuid()`)
- `title` (text)
- `description` (text)
- `images` (text array or jsonb) - Stores URLs of the uploaded images.
- `tags` (text array or jsonb) - Stores an array of tags associated with the artwork.
- `highlight` (boolean, default false) - Flag to mark featured artworks for the homepage.

## 🎨 Design System & UI/UX

The design philosophy focuses on an **"Editorial Design"** aesthetic:
- **Tonal Architecture:** Minimal use of borders. Separation of elements is achieved through subtle tonal shifts in background colors.
- **Asymmetric Layouts:** Breaking the traditional grid to give artworks "breathing room".
- **Glassmorphism:** Use of `backdrop-blur` for navigation bars and overlay tags.
- **Interactive Animations:** Extensive use of CSS transitions (`duration-700`, `hover:scale-105`, `grayscale` to color shifts) to make the interface feel alive and premium.

## ⚙️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and configure your Supabase credentials:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

### 3. Development Server
Start the Nuxt 3 development server:
```bash
npm run dev
```

### 4. Build for Production
To build the application for production:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## 📝 Implementation Notes
- **Image Optimization:** Ensure high-quality artworks are optimized (e.g., WebP format) and use lazy loading to maintain performance.
- **Responsiveness:** Asymmetric layouts require careful handling across breakpoints (`sm`, `md`, `lg`) to prevent layout breaking on mobile devices.
- **Nuxt Auto-imports:** Components (`components/`), Composables (`composables/`), and Stores (`stores/`) are auto-imported by Nuxt and do not require manual import statements in `.vue` files.
