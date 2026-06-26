# Design System Specification: The Architectural Service Ethos

## 1. Overview & Creative North Star
### Creative North Star: "The Master Artisan"
This design system rejects the "cookie-cutter" marketplace aesthetic. Instead of a generic grid of boxes, we are building a digital environment that feels like an architect’s studio: precise, airy, and grounded in structural integrity. 

We achieve a premium, editorial feel by embracing **Intentional Asymmetry**. Hero sections should not be perfectly centered; instead, use a 60/40 split to create a sense of forward motion. We move beyond "Modern" into "Sophisticated Reliability" by layering high-contrast typography against soft, tonal backgrounds. The goal is to make the user feel they are hiring a professional, not just clicking a button.

---

## 2. Colors & Surface Architecture
Our palette transitions from the utilitarian to the premium. We use a "Material-Editorial" approach where color defines function without the need for decorative lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. 
*   **The Technique:** Transitions must be handled via background shifts. Use `surface-container-low` (#f3f4f5) for the main body and `surface-container-lowest` (#ffffff) for card elements. This creates "ghost" boundaries that feel more organic and high-end.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
1.  **Base:** `background` (#f8f9fa)
2.  **Sectioning:** `surface-container-low` (#f3f4f5) - use for grouping large service categories.
3.  **Active Elements:** `surface-container-lowest` (#ffffff) - reserved for the highest level of interaction (e.g., a specific quote or service provider card).

### The "Glass & Gradient" Rule
To elevate the "Construction Amber" (`secondary`), avoid flat fills on large areas. 
*   **Signature CTA:** Use a subtle linear gradient from `primary` (#004ac6) to `primary_container` (#2563eb) at a 135° angle. 
*   **Navigation:** Use Glassmorphism for sticky headers. Apply `surface` with 80% opacity and a `24px` backdrop-blur. This ensures the service marketplace feels deep and immersive.

---

## 3. Typography
We utilize a dual-font strategy to balance authority with utility.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. Manrope’s geometric curves provide a modern, architectural feel. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headers to command attention.
*   **Body & Labels (Inter):** Inter is our "Utility" voice. It provides maximum legibility for service descriptions and pricing. 
*   **The Hierarchy of Trust:** Use `title-lg` (Inter, 1.375rem) for service provider names. It feels approachable yet sturdy. Always pair a `headline-md` with a `body-lg` at 60% opacity (`on_surface_variant`) to create a sophisticated tonal hierarchy.

---

## 4. Elevation & Depth
We define space through light and weight, not outlines.

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "soft lift" that feels natural to the eye.

### Ambient Shadows
Shadows are used sparingly and must be "Atmospheric."
*   **Token:** `Shadow-Premium`
*   **Values:** `0px 20px 40px rgba(25, 28, 29, 0.06)`
*   **Note:** The shadow color is a tinted version of `on_surface`. Never use pure black (#000) for shadows; it kills the "Airy" feel of the system.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., input fields), use the `outline_variant` (#c3c6d7) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The Signature Action
*   **Primary:** A gradient fill (`primary` to `primary_container`) with `xl` (1.5rem) roundedness. 
*   **Secondary:** No fill. Use a `title-sm` weight with a `primary` text color.
*   **Hover State:** Increase the `surface_tint` intensity. Avoid "glow" effects; prefer a subtle scale-up (1.02x).

### Cards & Service Lists
*   **The Rule:** No dividers. Separate items using the `6` (1.5rem) spacing scale.
*   **Service Cards:** Use `md` (0.75rem) rounded corners. The image should have a subtle `surface_variant` overlay to ensure `on_surface` text is readable if placed over it.

### Input Fields: The Reliability Anchor
*   **Style:** `surface_container_highest` (#e1e3e4) background with no border.
*   **Focus State:** A 2px "Ghost Border" using `primary` at 40% opacity.
*   **Corner Radius:** `DEFAULT` (0.5rem) to maintain a professional, slightly sharper aesthetic than buttons.

### Additional Marketplace Components
*   **Trust Badges:** Small chips using `tertiary_container` (#bc4800) with `on_tertiary_container` text. These should use `full` (9999px) rounding to contrast against the structural cards.
*   **Price Tags:** Use `title-lg` in `primary` (#004ac6). Never use Amber for prices; Amber is for "Action/Alerts," Blue is for "Finality/Trust."

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a structural element. If a section feels crowded, increase padding using the `10` (2.5rem) or `12` (3rem) tokens.
*   **DO** use asymmetric layouts for the hero section (e.g., text on the left, overlapping floating service cards on the right).
*   **DO** ensure all touch targets are at least 48px high, adhering to the responsive-first mandate.

### Don't
*   **DON'T** use 100% opaque black text. Always use `on_surface` (#191c1d) to maintain a softer, high-end visual frequency.
*   **DON'T** use 1px divider lines between list items. Use a 12px gap instead.
*   **DON'T** use the `secondary` (Amber) color for primary navigation. It is a "spice" color, intended for high-attention callouts like "Urgent Booking" or "Verified."

### Accessibility Note
Ensure that all `primary` on `surface` combinations maintain a 4.5:1 contrast ratio. When using `secondary_container` (Amber) for chips, ensure the text is `on_secondary_container` (#684000) for maximum legibility.