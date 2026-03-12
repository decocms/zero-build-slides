// ============================================================
// COLOR MAPS — exact values from the original tailwind.config.ts
// ============================================================

export const BG_HEX = {
  'primary-light': '#D0EC1A',
  'primary-dark':  '#07401A',
  'purple-light':  '#A595FF',
  'purple-dark':   '#151042',
  'yellow-light':  '#FFC116',
  'yellow-dark':   '#392B02',
  'dc-950': '#121110',
  'dc-900': '#1C1917',
  'dc-50':  '#FAFAF9',
  'white':  '#FFFFFF',
};

export const TEXT_COLOR = {
  dark:  '#1C1917',  // dc-900
  light: '#FAFAF9',  // dc-50
};

export const ACCENT_HEX = {
  green:  '#D0EC1A',
  purple: '#A595FF',
  yellow: '#FFC116',
};

export const BG_TO_ACCENT = {
  'primary-light': 'green',
  'primary-dark':  'green',
  'purple-light':  'purple',
  'purple-dark':   'purple',
  'yellow-light':  'yellow',
  'yellow-dark':   'yellow',
  'dc-950': 'green',
  'dc-900': 'green',
  'dc-50':  'green',
  'white':  'green',
};

// ============================================================
// DEMO — Template Showcase & Project Explainer
// ============================================================

export const demo = {
  title: 'Zero-Build Slides',
  subtitle: 'A presentation engine for AI agents',
  logo: 'https://assets.decocache.com/decocms/69810c11-8a4b-4163-80c7-942ea7f6dcdd/deco-logo.svg',
  theme: 'deco',
  slides: [
    // --- INTRO ---
    {
      title: 'Zero-Build Slides',
      subtitle: 'Edit with AI. Serve from S3. No build step.',
      layout: 'title',
      backgroundColor: 'primary-light',
      textColor: 'dark',
      tag: 'OPEN SOURCE PRESENTATION ENGINE',
    },

    // --- WHAT IS THIS ---
    {
      title: 'A presentation framework designed for LLMs to read, write, and deploy — with zero dev environment',
      layout: 'dinner-thesis',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'THE CONCEPT',
      items: [{
        bullets: [
          { text: '4 plain JS files — no npm, no node_modules, no bundler, no transpilation' },
          { text: 'Preact + htm tagged templates: JSX-like syntax that runs natively in the browser' },
          { text: 'Tailwind CDN with custom config — design tokens without a build pipeline' },
          { text: 'Hash-based routing, viewport scaling, keyboard navigation — all in ~800 lines' },
        ],
      }],
    },

    // --- HOW IT WORKS ---
    {
      title: 'Architecture',
      layout: 'title',
      backgroundColor: 'purple-light',
      textColor: 'dark',
      tag: 'SECTION 1',
      subtitle: 'How the 4 files fit together',
      slideNumber: '01',
      items: [{ title: 'Architecture' }, { title: 'Agents' }, { title: 'Templates' }, { title: 'Theming' }],
    },

    {
      title: 'Four files. That\u2019s the entire app.',
      layout: 'dinner-features',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'FILE STRUCTURE',
      items: [
        { title: 'index.html \u2014 The bootstrap. Import maps, fonts, Tailwind CDN, base CSS. The only HTML file.', subtitle: 'ENTRY POINT', value: 'html' },
        { title: 'app.js \u2014 Router, viewport scaling, keyboard nav, presentation shell. The runtime.', subtitle: 'APP SHELL', value: 'terminal' },
        { title: 'layouts.js \u2014 Every slide template as a Preact component. The visual library.', subtitle: 'TEMPLATES', value: 'dashboard_customize' },
        { title: 'data.js \u2014 All presentations as plain JS objects. Colors, slides, content. The data layer.', subtitle: 'DATA', value: 'database' },
      ],
    },

    // --- AGENT WORKFLOW ---
    {
      title: 'Working with AI Agents',
      layout: 'title',
      backgroundColor: 'yellow-light',
      textColor: 'dark',
      tag: 'SECTION 2',
      subtitle: 'The LLM editing workflow',
      slideNumber: '02',
      items: [{ title: 'Architecture' }, { title: 'Agents' }, { title: 'Templates' }, { title: 'Theming' }],
    },

    {
      title: 'How an agent creates or edits a presentation',
      layout: 'dinner-roadmap',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'AGENT WORKFLOW',
      items: [
        { title: 'Read the data file, understand the slide schema', subtitle: 'STEP 1', value: 'visibility', bullets: [{ text: 'Each slide is a JS object with: ||title, layout, backgroundColor, textColor, tag, items||' }, { text: 'Items have: title, subtitle, value (icon), label (media), bullets' }, { text: 'Bullets have: text (with ||italic|| markers), highlight flag' }] },
        { title: 'Add or edit slides in data.js', subtitle: 'STEP 2', value: 'edit_note', bullets: [{ text: 'Pick a layout from the template library (title, thesis, features, demo, etc.)' }, { text: 'Set backgroundColor and textColor from the theme palette' }, { text: 'Write content as structured data, not raw HTML' }] },
        { title: 'Upload files to S3, refresh the browser', subtitle: 'STEP 3', value: 'cloud_upload', bullets: [{ text: 'No build step — files are served as-is from any static host' }, { text: 'Preview instantly by reloading the URL' }, { text: 'URL includes slide number: ||?slide=5|| for deep linking' }] },
      ],
    },

    // --- TEMPLATE SHOWCASE ---
    {
      title: 'Template Showcase',
      layout: 'title',
      backgroundColor: 'primary-light',
      textColor: 'dark',
      tag: 'SECTION 3',
      subtitle: 'Every available slide layout demonstrated',
      slideNumber: '03',
      items: [{ title: 'Architecture' }, { title: 'Agents' }, { title: 'Templates' }, { title: 'Theming' }],
    },

    // Title slide - centered (already shown as cover)
    // Title slide - section (already shown above)

    // Thesis
    {
      title: 'Template: Thesis Slide',
      layout: 'dinner-thesis',
      backgroundColor: 'primary-dark',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-THESIS',
      items: [{
        bullets: [
          { text: 'Best for: opening statements, bold claims, or key arguments' },
          { text: 'Left border accent on each bullet creates visual rhythm' },
          { text: 'Large title (44px) with proof points below' },
          { text: 'Use for slides that need to convince, not just inform' },
        ],
      }],
    },

    // Features (without video)
    {
      title: 'Template: Features Slide — icon cards with bullets',
      layout: 'dinner-features',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-FEATURES',
      items: [
        { title: 'Hover interactions with accent border and background tint', subtitle: 'INTERACTIVE', value: 'touch_app', bullets: [{ text: 'Cards respond to hover with ||color transitions||' }, { text: 'Accent color from theme palette' }] },
        { title: 'Supports 1-3 cards per row, auto-sized', subtitle: 'FLEXIBLE', value: 'view_column', bullets: [{ text: 'Each card: icon + [TAG] + title + ✳︎ bullets' }, { text: 'With or without video/image media' }] },
        { title: 'Video cards use grayscale-to-color on hover', subtitle: 'MEDIA', value: 'movie', bullets: [{ text: 'Pass an .mp4 URL in the label field' }, { text: '1:1 aspect ratio with gradient overlay' }] },
      ],
    },

    // Demo (split)
    {
      title: 'Template: Demo Slide',
      subtitle: '40/60 split — text left, media right',
      layout: 'dinner-demo',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-DEMO',
      items: [
        { title: 'Pain point', bullets: [{ text: 'First card uses skull icon for the problem statement' }, { text: 'Muted accent color differentiates pain from solution' }, { text: 'Great for before/after or problem/solution narratives' }] },
        { title: 'Solution', bullets: [{ text: 'Second card uses smart_toy icon for the agent/solution' }, { text: 'Bright accent color draws the eye to the resolution' }, { text: 'Fullscreen toggle button lets you expand the video' }] },
      ],
    },

    // Admin Cases (two-column)
    {
      title: 'Template: Admin Cases — two-column evidence slide',
      layout: 'dinner-admin-cases',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-ADMIN-CASES',
      slideNumber: 'Product updates ship weekly|Real user testimonials',
      items: [
        { title: 'Blog post cards with OG images', label: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='315' fill='%231a1a1a'%3E%3Crect width='600' height='315'/%3E%3Ctext x='300' y='160' fill='%23555' font-family='sans-serif' font-size='18' text-anchor='middle'%3EPost 1%3C/text%3E%3C/svg%3E", value: '#', subtitle: 'blog', bullets: [{ text: 'Left column: 2x2 grid of linked blog post cards' }] },
        { title: 'Second post with hover accent', label: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='315' fill='%231a1a1a'%3E%3Crect width='600' height='315'/%3E%3Ctext x='300' y='160' fill='%23555' font-family='sans-serif' font-size='18' text-anchor='middle'%3EPost 2%3C/text%3E%3C/svg%3E", value: '#', subtitle: 'blog', bullets: [{ text: 'Each card shows image, title, description, and Read more link' }] },
        { title: 'Third card in the grid', label: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='315' fill='%231a1a1a'%3E%3Crect width='600' height='315'/%3E%3Ctext x='300' y='160' fill='%23555' font-family='sans-serif' font-size='18' text-anchor='middle'%3EPost 3%3C/text%3E%3C/svg%3E", value: '#', subtitle: 'blog', bullets: [{ text: 'Hover state: accent border + tinted background' }] },
        { title: 'Fourth card completes the 2x2', label: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='315' fill='%231a1a1a'%3E%3Crect width='600' height='315'/%3E%3Ctext x='300' y='160' fill='%23555' font-family='sans-serif' font-size='18' text-anchor='middle'%3EPost 4%3C/text%3E%3C/svg%3E", value: '#', subtitle: 'blog', bullets: [{ text: 'OG image aspect ratio: 1200×630' }] },
        { title: 'User Name | Role, Company', bullets: [{ text: 'Right column: quote cards with ||italic highlights|| on hover' }] },
        { title: 'Another User | Their Role', bullets: [{ text: 'Quotes transition from muted to ||bright on hover||, creating discovery' }] },
        { title: 'Third User | Company', bullets: [{ text: 'Perfect for ||social proof|| and customer testimonials' }] },
      ],
    },

    // Funnel
    {
      title: 'Template: Funnel Slide — 4-stage pipeline with evidence cards',
      layout: 'market-signals-funnel',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: MARKET-SIGNALS-FUNNEL',
      items: [
        { title: 'Aquisição', bullets: [{ text: 'Each stage gets a unique color — green, purple, yellow, green', highlight: true }, { text: 'Chevron shapes with CSS clipPath create the funnel visual' }] },
        { title: 'Conversão', bullets: [{ text: 'Highlighted bullets (larger, colored) for key insights', highlight: true }, { text: 'Regular bullets in muted color for supporting context' }] },
        { title: 'Operação', bullets: [{ text: 'Article cards below with left accent border and icon badges', highlight: true }, { text: 'Each card links to an external URL' }] },
        { title: 'Suporte', bullets: [{ text: 'Stage icons from Material Symbols library', highlight: true }, { text: 'Hover states with per-stage coloring' }] },
        { title: 'Example', subtitle: 'Aquisição', value: '#', label: 'ads_click', bullets: [{ text: 'Article cards show source badge + icon + description' }] },
        { title: 'Source', subtitle: 'Conversão', value: '#', label: 'search', bullets: [{ text: 'Linked cards for evidence and external references' }] },
        { title: 'Report', subtitle: 'Operação', value: '#', label: 'inventory_2', bullets: [{ text: 'Each column can have 1-3 article cards' }] },
        { title: 'Research', subtitle: 'Suporte', value: '#', label: 'headset_mic', bullets: [{ text: 'Cards inherit the stage color for visual grouping' }] },
      ],
    },

    // Roadmap
    {
      title: 'Template: Roadmap Slide — 3-column strategic directions',
      layout: 'dinner-roadmap',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-ROADMAP',
      items: [
        { title: 'Column one: icon + tag + title + bulleted content', subtitle: 'COLUMN A', value: 'rocket_launch', bullets: [{ text: 'Large icon at top sets the visual tone' }, { text: '[TAGS] in bracket format, monospace uppercase' }, { text: '||Italic highlights|| using double-pipe markers' }] },
        { title: 'Column two: different icon and content', subtitle: 'COLUMN B', value: 'hub', bullets: [{ text: 'Each column is an independent card with border' }, { text: 'Equal-width grid, 24px gap' }, { text: 'Flexible height based on content' }] },
        { title: 'Column three: a third strategic direction', subtitle: 'COLUMN C', value: 'savings', bullets: [{ text: '✳︎ accent markers on each bullet point' }, { text: 'Card padding: 40px' }, { text: 'Good for roadmaps, feature comparisons, or pillars' }] },
      ],
    },

    // CTA
    {
      title: 'Template: CTA Slide\nwith multi-line title support',
      slideNumber: 'The slideNumber field becomes body text.\nUseful for calls to action or closing statements.',
      layout: 'dinner-cta',
      backgroundColor: 'primary-dark',
      textColor: 'light',
      tag: 'LAYOUT: DINNER-CTA',
      items: [
        { title: 'Card with icon and description', subtitle: 'ACTION 1', value: 'edit_note', bullets: [{ text: 'CTA cards are compact: icon + [TAG] + title + one bullet' }] },
        { title: 'Second action card', subtitle: 'ACTION 2', value: 'hub', bullets: [{ text: 'Great for next steps, contact info, or closing offers' }] },
        { title: 'Third action card', subtitle: 'ACTION 3', value: 'stadium', bullets: [{ text: 'Uses primary-dark background for visual distinction' }] },
      ],
    },

    // Timeline
    {
      title: 'Timeline Slide',
      layout: 'timeline',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'LAYOUT: TIMELINE',
      items: [
        { title: 'Q1', bullets: [{ text: 'Alternating above/below' }, { text: 'Highlight flag', highlight: true }] },
        { title: 'Q2', bullets: [{ text: 'Connected by line' }, { text: 'Dot markers at each point' }] },
        { title: 'Q3', bullets: [{ text: 'Large quarter labels' }, { text: 'Accent color dots' }] },
        { title: 'Q4', bullets: [{ text: 'Flexible bullet count' }, { text: 'MCP Mesh launch', highlight: true }] },
      ],
    },

    // Retrospective Intro
    {
      title: 'Template: Retrospective Intro — numbered section index',
      layout: 'retrospective-intro',
      backgroundColor: 'dc-950',
      textColor: 'light',
    },

    // Stats with CountUp
    {
      title: 'Template: Stats Slide with animated counters',
      layout: 'retrospective-stats',
      backgroundColor: 'dc-950',
      textColor: 'light',
    },

    // --- THEMING ---
    {
      title: 'Theming',
      layout: 'title',
      backgroundColor: 'primary-light',
      textColor: 'dark',
      tag: 'SECTION 4',
      subtitle: 'Switch color palettes instantly',
      slideNumber: '04',
      items: [{ title: 'Architecture' }, { title: 'Agents' }, { title: 'Templates' }, { title: 'Theming' }],
    },

    {
      title: 'Add ?theme=name to any URL to instantly switch the entire color palette',
      layout: 'dinner-thesis',
      backgroundColor: 'dc-950',
      textColor: 'light',
      tag: 'THEME SYSTEM',
      items: [{
        bullets: [
          { text: '6 built-in themes: deco (green), ocean (blue), ember (orange), midnight (purple), forest (green), mono (B&W)' },
          { text: 'Each theme defines: accent, heading, body, muted, border, and background map colors' },
          { text: 'Add your own theme in themes.js — just copy a block and change the hex values' },
          { text: 'URL example: #/demo?theme=ocean&slide=3' },
        ],
      }],
    },

    // --- CLOSING ---
    {
      title: 'Fork it. Theme it.\nLet your AI build the deck.',
      layout: 'title',
      backgroundColor: 'primary-light',
      textColor: 'dark',
    },
  ],
};
