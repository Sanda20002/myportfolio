## Plan: Portfolio overhaul — Header, Hero, Skills, Projects, Experience, Contact, Footer

Rework `src/routes/index.tsx` and `src/routes/__root.tsx` to deliver the requested sections. All work stays in frontend code, preserves existing dark-mode toggle, and uses the established `#00d4ff` accent.

### 1. Header (`__root.tsx`)
- Nav order: Logo/Name | Home | About | Projects | Skills | Experience | Contact | **Download CV** | Theme toggle
- "Download CV" = outlined accent button, `href="/cv.pdf"` with `download` attr, accent border/text, fills on hover
- Mobile sheet menu: include CV button too

### 2. Hero / Home (replace current hero)
- Two-column layout (photo left, text right; stacked + centered on mobile)
- Circular profile photo (~190px desktop, 150px mobile) from `https://i.postimg.cc/CKz8rB02/Chat-GPT-Image-Jun-24-2026-02-02-49-PM.png`, gradient/glow ring using accent
- Greeting: "Hi, I'm Hasini Sandamini"
- Role: "SLIIT — IT Undergraduate | 3rd Year"
- Bio as specified
- Buttons: "View My Work" (solid accent → scrolls to #projects), "Contact Me" (outlined accent → scrolls to #contact)
- Social icon row: GitHub, LinkedIn, Email with hover accent

### 3. Skills section
- Title: "Technical Skills", subtitle "Technologies I work with"
- Four category cards (compact pill badges with lucide icons):
  - Frontend: React, JavaScript, HTML5, CSS3, Tailwind CSS, UI/UX Design
  - Backend: Node.js, Express, Java, Spring Boot, REST APIs
  - Database: MongoDB, MySQL, PostgreSQL
  - Tools: Git, GitHub, VS Code, Figma, Postman
- Responsive grid: 1 / 2 / 4 cols

### 4. Projects section
- Title "Projects Showcase", subtitle "A curated selection of projects demonstrating architecture, UI/UX, and engineering craft."
- Filter buttons: ALL, REACT / NODE.JS, SPRING BOOT, MERN STACK, JAVA, PHP / DATABASES (active = accent fill)
- 6 project cards (UniHub, Library, Smart Campus, FarmNex, Property Sales, Question Bank) using existing card style
- Each card: Title, category tag chip, Featured badge (UniHub + Smart Campus), description, tech badges, GitHub btn (links to provided URLs), Live Demo btn ("Coming Soon", disabled)
- Local `useState` filter; "ALL" shows everything

### 5. Experience section
- Title: "EXPERIENCE & PROJECTS"
- Two grouped category headers:
  - 💻 FULL-STACK DEVELOPMENT — UniHub, Smart Campus, FarmNex, Library, Property Sales
  - ☕ JAVA APPLICATION DEVELOPMENT — Online Exam Management System
- Each entry as a card (`bg-card/60`, subtle border): role (accent), project + year (bold), Focus line, summary, "KEY CONTRIBUTIONS" bullets, tech badges row

### 6. Contact section
- Keep current two-column structure; ensure CSS-variable colors so light/dark both work
- Form fields, submit button styled with accent
- Right card: Contact Information with User/Mail/Phone/MapPin icons
- Download CV button + social row (GitHub, LinkedIn, Email) under the info card
- Replace any hardcoded `#12123a` etc. with theme tokens (`bg-card`, `border-border`, `text-foreground`) plus accent

### 7. Footer
- New compact footer in `__root.tsx` (or index): social icons (GitHub → Sanda20002, LinkedIn, Email mailto), hover → accent
- Copyright: "© 2026 Hasini Sandamini. All rights reserved."

### Technical notes
- All work in `src/routes/index.tsx` and `src/routes/__root.tsx`
- Continue using lucide-react icons; add `Linkedin`, `Github`, `Database`, `Server`, `Code2` as needed
- Use semantic tokens (`bg-background`, `text-foreground`, `border-border`, `bg-card`) so existing light/dark toggle keeps working; accent stays `text-primary` (already mapped to #00d4ff)
- Section IDs: `#home`, `#about`, `#skills`, `#projects`, `#experience`, `#contact` for nav anchors and hero buttons
- CV download points to `/cv.pdf` placeholder (user will drop the file into `public/` later)
- No backend changes
