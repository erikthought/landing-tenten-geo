# Tenten GEO Landing Page

A modern, high-converting landing page for Tenten's Generative Engine Optimization (GEO) services. Built with Next.js 14, TypeScript, and TailwindCSS following WCAG 2.2 AA accessibility standards.

## 🚀 Features

- **Modern Design**: Clean, minimal design with soft shadows and generous whitespace
- **Fully Responsive**: Optimized for all devices with fluid typography
- **Accessibility First**: WCAG 2.2 AA compliant with proper ARIA labels and contrast ratios
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **Smooth Animations**: Framer Motion for engaging user interactions
- **AIDA Structure**: Strategically designed landing page following Attention, Interest, Desire, Action framework

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v3 with custom design system
- **Components**: shadcn/ui for consistent, accessible components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for crisp, scalable icons
- **Fonts**: Inter & Noto Sans TC from Google Fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/erikthought/landing-tenten-geo.git
   cd landing-tenten-geo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deploy to Vercel
This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   └── footer.tsx       # Site footer
│   ├── sections/
│   │   ├── hero.tsx         # Hero section (Attention)
│   │   ├── features.tsx     # Features showcase (Interest)
│   │   ├── testimonials.tsx # Social proof
│   │   ├── pricing.tsx      # Pricing tiers (Desire)
│   │   └── contact.tsx      # Contact form (Action)
│   └── ui/                  # Reusable UI components
├── data/
│   └── mock.ts              # Static data and content
├── lib/
│   └── utils.ts             # Utility functions
└── configuration files...
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #6366F1)
- **Neutral**: Gray scale (#F8F9FA to #212529)
- **Success**: Green (#10B981)
- **Background**: White with soft blue gradients

### Typography
- **Primary Font**: Inter (400-700 weights)
- **Secondary Font**: Noto Sans TC for international support
- **Fluid Scale**: Responsive typography using clamp()

### Spacing
- **Grid**: 12-column responsive grid
- **Gaps**: 4px, 8px, 16px, 24px increments
- **Baseline**: 8pt grid system

### Animations
- **Duration**: 200ms ease-in-out for interactions
- **Page Transitions**: Framer Motion with staggered effects
- **Hover States**: Subtle transforms and color changes

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Color Contrast**: Minimum 4.5:1 contrast ratio maintained
- **Touch Targets**: Minimum 44px touch targets for mobile
- **Skip Links**: Skip to main content functionality
- **High Contrast**: Works with system high contrast mode

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## �� Customization

### Updating Content
Edit the content in `data/mock.ts`:
- Pricing tiers and features
- Testimonials and case studies
- Feature descriptions
- Company statistics

### Styling Changes
Modify the design system in:
- `tailwind.config.js` for theme customization
- `app/globals.css` for CSS variables
- Individual component files for specific styling

### Adding Sections
1. Create new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/layout/header.tsx`

## 🚀 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Minimal dependencies for fast loading
- **Caching**: Static generation with ISR support

## 📊 SEO Optimization

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for rich snippets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Google Fonts**: Optimized loading with display: swap

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## �� License

This project is proprietary software belonging to Tenten.co.

---

**Built with ❤️ by Tenten.co**
