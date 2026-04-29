# Design System Strategy: The Breathing Canvas

This design system is a high-end editorial framework specifically engineered for artist portfolios and digital galleries. It moves away from the rigid, box-heavy structures of traditional web design toward an experience that feels like a physical monograph: airy, tactile, and deeply intentional.

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Gallery"**
The objective is to create a digital environment that feels as quiet and immersive as a sun-drenched studio. We achieve this by rejecting "standard" UI patterns in favor of **Organic Editorialism**. 

Key characteristics include:
- **Intentional Asymmetry:** Breaking the vertical grid to allow artwork to "breathe" across different planes.
- **Tonal Depth:** Replacing harsh lines with soft shifts in pastel greens and off-whites.
- **Typographic Gravity:** Using extreme scale—pairing massive, elegant serifs with tiny, precise labels—to create a sense of prestige.

## 2. Colors & Tonal Architecture
The palette is rooted in a natural, botanical spectrum of mint, sage, and seafoam. It is designed to recede, ensuring the artist's work remains the focal point.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. 
- To separate a section, transition from `surface` (#f9f9f8) to `surface-container-low` (#f2f4f3). 
- For nested content, use `surface-container-high` (#e5e9e8) to create a soft, natural "inset" look.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine watercolor paper.
1. **Base Layer:** `surface` (#f9f9f8).
2. **Structural Content:** `surface-container` (#ebefed).
3. **Floating/Elevated Elements:** `surface-container-lowest` (#ffffff) for pure white highlights.

### Glassmorphism & Texture
To prevent the design from feeling "flat," use the **Glass Rule**:
- Use `surface-variant` (#dee4e2) at 40% opacity with a `20px` backdrop-blur for navigation bars or floating image captions.
- Apply subtle gradients for CTAs transitioning from `primary` (#4f6458) to `primary-container` (#d1e8d9) to add a "silky" visual soul.

## 3. Typography
The typography is a dialogue between the classicism of the arts and the precision of modern curation.

- **Display & Headlines (Noto Serif):** These are your "Art Titles." Use `display-lg` (3.5rem) for landing pages. The high-contrast serif evokes a sense of history and craftsmanship.
- **Body & Labels (Manrope):** This is your "Gallery Description." Manrope provides a clean, neutral balance to the serif. 
- **The Scale Principle:** Create high contrast. Pair a `display-md` headline with a `label-md` (uppercase, letter-spaced) secondary tag to achieve an editorial magazine aesthetic.

## 4. Elevation & Depth
In this system, depth is a whisper, not a shout. 

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. For example, place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift without the need for heavy shadows.

### Ambient Shadows
When an element must "float" (e.g., a lightbox or modal):
- **Shadow Color:** Must be a tinted version of the surface, using `on-surface` (#2e3433) at only **4%–8% opacity**.
- **Blur:** Use extra-diffused values (e.g., `32px` or `64px`) to mimic natural, ambient gallery lighting.

### The "Ghost Border" Fallback
If a border is absolutely required for accessibility:
- Use the `outline-variant` (#adb3b2) at **15% opacity**. 
- **Strictly forbid** 100% opaque, high-contrast borders.

## 5. Components

### Buttons
- **Primary:** Use `primary` (#4f6458) with `on-primary` (#e7fff0) text. Roundedness should be `md` (0.375rem) for a sophisticated, slightly softened corner.
- **Secondary:** Use `primary-container` (#d1e8d9) with `on-primary-container` (#42564b).
- **States:** On hover, shift the background to `primary-dim` (#43584d) rather than adding an outline.

### Input Fields
- **Styling:** No bottom lines or heavy boxes. Use `surface-container-highest` (#dee4e2) as a soft background fill with `none` or `sm` roundedness.
- **Focus:** Transition the background to `surface-container-lowest` (#ffffff) and apply a subtle `primary` glow.

### Cards & Lists
- **The Divider Ban:** Do not use horizontal rules (`<hr>`). 
- **Separation:** Use vertical white space from the spacing scale (e.g., `12` or `16` tokens) to separate list items. 
- **Editorial Cards:** Images should have `lg` (0.5rem) roundedness and sit flush against a `surface-container-low` background.

### Custom Component: The "Curator Label"
- Use `label-md` in uppercase with `0.1rem` letter spacing, placed in a `tertiary-container` (#f0fdf3) chip with `full` roundedness. Use this for artist tags or medium categories (e.g., "OIL ON CANVAS").

## 6. Do's and Don'ts

### Do:
- **Embrace White Space:** Use the `20` (7rem) and `24` (8.5rem) spacing tokens liberally between sections to evoke a feeling of "room to breathe."
- **Overlap Elements:** Let images overlap into different `surface` containers to break the "web-template" feel.
- **Tonal Transitions:** Use background colors to guide the eye from one project to the next.

### Don't:
- **Don't use pure black:** Always use `on-surface` (#2e3433) for text to maintain the "ethereal" softness.
- **Don't use 1px borders:** Rely on the tonal layering principle defined in section 4.
- **Don't crowd the content:** If it feels full, add more space. The goal is a premium, unhurried experience.