# JD Construction - Design System & Specs

This document defines the core visual, structural, and page blueprint for the JD Construction website. All components and pages must follow these rules strictly.

---

## 🎨 1. Premium Light Theme & Color Swapping

Instead of a dark theme, we use a sophisticated **light blueprint architectural theme**. 

### The Section Color-Swapping System:
To create visual rhythm, sections will alternate backgrounds:
* **Color A (Slate White)**: `#f8fafc` (Extremely soft, light blue-grey slate)
* **Color B (Blueprint Grey)**: `#f1f5f9` (Subtle, clean structural light grey)

### The Alternating Flow:
* **Header**: Color A
* **Hero Banner**: Color B
* **Section 1**: Color A (matches Header)
* **Section 2**: Color B (matches Hero)
* **Section 3**: Color A
* **Section 4**: Color B
* **Footer**: Color A

### Premium Accents (No cheap copper/brown/amber):
* **Accent Primary**: `#0f3057` / `#1e3a8a` (Premium Prussian Blue / Structural Cobalt)
* **Accent Secondary**: `#334155` (Polished Steel Slate for subheaders and body text)
* **High Contrast Text**: `#0f172a` (Solid Obsidian Grey for high-readability headings)

---

## 🧱 2. Industrial Textures (Matte & Structural)

* **Matte Texture**: Zero shiny gradients. We will use smooth, flat matte cards with sharp, ultra-thin borders (`border-slate-200/60`) and subtle, soft drop shadows (`shadow-sm`).
* **Steel Hairlines**: Crisp, 1px slate borders acting as architectural dividers.
* **Grid Blueprint**: Very subtle, low-opacity grid lines in section backdrops representing structural drafting paper.

---

## ✍️ 3. Strict Typography & Font Sizes

To maintain perfect consistency across every section and page, we follow a strict typographic hierarchy:

| Element | Font | Size (Mobile) | Size (Desktop) | Weight | Styling |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Space Grotesk | `text-4xl` | `text-6xl` | `font-extrabold` (800) | `tracking-tight text-slate-900` |
| **Section H2** | Space Grotesk | `text-2xl` | `text-4xl` | `font-bold` (700) | `tracking-tight text-slate-900` |
| **Section Label** | Space Grotesk | `text-xs` | `text-xs` | `font-semibold` (600) | `uppercase tracking-widest text-blue-900/70 mb-2 block` |
| **Card H3** | Space Grotesk | `text-xl` | `text-xl` | `font-bold` (700) | `text-slate-900` |
| **Body Text** | Inter | `text-sm` | `text-base` | `font-normal` (400) | `leading-relaxed text-slate-600` |

---

## 🏗️ 4. Strict Full-Screen Section & Hero Layout Rules

### Full-Screen Height Rule:
* **All Sections & Heroes** must span the **full viewport height** (`min-h-screen flex flex-col justify-center`) to establish a premium, clean storytelling experience as the user scrolls.

### Side Spacing & Width Rules:
* To prevent empty margins and optimize wide screens, content containers use:
  * **Max Width**: `max-w-screen-2xl mx-auto`
  * **Horizontal Padding**: `px-12 md:px-20` (Reduced lateral gap, using screen space fully)

### Hero Banner Rules:
* Every page starts with a Full-Screen Hero Banner.
* **Background**: Always **Color B** (`#f1f5f9`).
* **No Label Tags**: Do not include top badge tags/labels like `JD Construction` or `Get in touch`.

---

## 📱 5. Responsive Header Blueprint

To balance desktop aesthetics and mobile accessibility:

### Desktop Layout (md and up):
* **Structure**: Single row, 5-column symmetrical grid on `max-w-screen-2xl` for balanced, uniform spacing.
* **Column 1**: Navigation item `[Projects]`
* **Column 2**: Navigation item `[Contact]`
* **Column 3**: Centered Brand logo link `[JD CONSTRUCTION]` (links to Home / page start)
* **Column 4**: Navigation item `[About]`
* **Column 5**: Navigation item `[Services]`

### Mobile Layout (< md):
* **Structure**: Double-Header stacked layout. No hidden burger menu.
* **Row 1 (Top)**: Centered Brand Logo `[JD CONSTRUCTION]`
* **Row 2 (Bottom)**: 4 clean, evenly spaced buttons: `[Projects] [Contact] [About] [Services]` for instant, tactile navigation.

---

## 🚪 5.5. Balanced Grounding Footer Blueprint

To maintain visual weight, spacing, and symmetric content density, the footer utilizes a **4-column layout on wide desktop screens**:

* **Column 1**: Brand profile (Logo, description, copyright notices)
* **Column 2 (Sitemap - Exactly 5 Lines)**: `Home`, `About`, `Services`, `Projects`, `Contact`
* **Column 3 (Our Divisions - Exactly 5 Lines)**: `Structural Steel Framing`, `Concrete Foundations`, `Seismic Retrofitting`, `Industrial Erection`, `Code Compliance Audits`
* **Column 4 (Head Office - Exactly 5 Lines)**: Address, Phone, Email, Operating Hours, State License Number

This creates a perfectly uniform grid density with no vertical line imbalances.

---

## 🗺️ 6. Five-Page Layout Blueprint

Every page starts with a **Hero Banner** (using **Color B**) and follows the alternating section system.

### Page 1: Home Page
* **Hero**: Brand Name + Core Value Statement
* **Section 1 (What we do)** - *Color A*
* **Section 2 (Projects Showcase)** - *Color B*
* **Section 3 (Testimonials)** - *Color A*
* **Section 4 (Call to Action)** - *Color B*

### Page 2: About Page
* **Hero**: Banner
* **Section 1 (Company Story)** - *Color A*
* **Section 2 (Faces Behind the Company / Team)** - *Color B*
* **Section 3 (What We Stand For / Values)** - *Color A*
* **Section 4 (Call to Action)** - *Color B*

### Page 3: Services Page
* **Hero**: Banner
* **Section 1 (All the Services)** - *Color A*
* **Section 2 (Detailed Service Showcase)** - *Color B*
* **Section 3 (Call to Action)** - *Color A*

### Page 4: Projects Page
* **Hero**: Banner
* **Section 1 (Gallery of Work)** - *Color A*
* **Section 2 (Our Process)** - *Color B*
* **Section 3 (Standards & Certification)** - *Color A*
* **Section 4 (Call to Action)** - *Color B*

### Page 5: Contact Page
* **Hero**: Banner
* **Section 1 (Dial up / Phone Details + Interactive Contact Form)** - *Color A*

---

## 🛠️ 7. Tech Stack

* **Framework**: Next.js (App Router, hosted on Vercel)
* **Styling**: Tailwind CSS
