# Christian Thulin Pfeifer - Professional Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Showcasing projects, skills, and experience with a professional, hiring-appeal focused design.

## 🎯 Features

✨ **Modern Design**

- Clean dark theme with purple-blue gradient accents
- Card-based layout system
- Smooth animations and transitions
- Professional typography

📱 **Fully Responsive**

- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly navigation

🎨 **Component-Based**

- Reusable Card component
- Modular CSS organization
- Easy to customize and extend

⚡ **Performance**

- Fast page loads with Vite
- Optimized images and assets
- Smooth animations with Framer Motion

🔗 **Easy Navigation**

- Sticky navbar with active link highlighting
- Smooth page transitions
- Clear navigation structure

---

## 📖 Documentation

This project includes comprehensive guides for customization:

1. **[PORTFOLIO_REDESIGN.md](./PORTFOLIO_REDESIGN.md)** - Complete overview of the redesign
2. **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Colors, layout, components
3. **[CONTENT_TEMPLATE.md](./CONTENT_TEMPLATE.md)** - Content examples and templates
4. **[IMPLEMENTATION_EXAMPLES.md](./IMPLEMENTATION_EXAMPLES.md)** - Code examples for features

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

```
Local:   http://localhost:5173/color-converter-r/
```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing page with hero section
│   ├── Home.css
│   ├── Projects.jsx          # Portfolio projects grid
│   ├── Projects.css
│   ├── Media.jsx             # Image gallery with lightbox
│   ├── Media.css
│   ├── About.jsx             # Profile, skills, technologies
│   ├── About.css
│   ├── Contact.jsx           # Contact information & methods
│   └── Contact.css
├── Components/
│   ├── Card.jsx              # Reusable card component
│   ├── Navbar.jsx            # Navigation bar
│   ├── Navbar.css
│   ├── AnimatedRoutes.jsx    # Route transitions
│   ├── ContentContainer.jsx  # Layout wrapper
│   └── ContentContainer.css
├── App.jsx
├── App.css
├── index.css                 # Global styles & design system
└── main.jsx
```

---

## 🎨 Customization Quick Start

### 1. Update Your Profile (5 min)

Edit `src/pages/About.jsx`:

- Replace bio text
- Update skills list
- Modify technologies

### 2. Add Your Projects (10 min)

Edit `src/pages/Projects.jsx`:

- Add 6+ project examples
- Include descriptions and tech stacks
- Add project images

### 3. Update Contact Info (2 min)

Edit `src/pages/Contact.jsx`:

- Update email address
- Add LinkedIn URL
- Add GitHub URL

### 4. Replace Images

- Profile photo: `public/me.png`
- Logo: `public/logo3.png`
- Project images: Add to `public/` folder

See [CONTENT_TEMPLATE.md](./CONTENT_TEMPLATE.md) for detailed examples.

---

## 🎨 Design System

### Colors

```
Primary Gradient: #667eea → #764ba2 (Purple-Blue)
Background: #1a202c (Dark Navy)
Cards: #2d3748 (Slate)
Text Primary: #e2e8f0 (Light)
Text Secondary: #a0aec0 (Muted)
```

### Typography

- **Font:** System UI stack (-apple-system, BlinkMacSystemFont, etc.)
- **H1:** 2.5rem bold
- **H2:** 2rem bold
- **Body:** 1rem regular

### Spacing

- Base unit: 0.5rem (8px)
- Container padding: 2rem (32px)
- Card gap: 1.5-2rem
- Mobile padding: 1rem (16px)

---

## 📱 Pages Overview

### 🏠 Home

- Hero section with name and tagline
- Call-to-action button
- Featured projects preview
- Professional introduction

### 💼 Projects

- Grid of project cards
- Project images
- Technology stack display
- Project descriptions
- Links to live demos/GitHub

### 🖼️ Media

- Image gallery grid
- Lightbox modal for full-size viewing
- Responsive gallery layout
- Hover zoom effects

### 👤 About

- Profile photo and bio
- Skills section with tags
- Technologies by category
- Professional background

### 📞 Contact

- Email contact
- LinkedIn profile link
- GitHub profile link
- Location information

---

## 🛠️ Tech Stack

**Frontend Framework**

- React 19.2.0
- React Router 7.12.0

**Styling**

- Tailwind CSS 3.4.18
- CSS Modules
- Custom CSS

**Animations**

- Framer Motion 12.26.2 (optional, available for enhancement)

**Build Tool**

- Vite 7.2.4

**Development**

- ESLint 9.39.1
- Prettier 3.6.2

---

## 🎯 Features

### Component Features

- ✅ Reusable Card component
- ✅ Responsive navigation bar
- ✅ Page transition animations
- ✅ Image lightbox modal
- ✅ Skill tags with styling
- ✅ Project cards with images
- ✅ Contact methods display

### Design Features

- ✅ Gradient accents
- ✅ Hover animations
- ✅ Smooth transitions
- ✅ Mobile responsive
- ✅ Dark theme optimized
- ✅ Accessible color contrast
- ✅ Professional typography

### Experience Features

- ✅ Fast page loads
- ✅ Smooth navigation
- ✅ Clean visual hierarchy
- ✅ Clear call-to-action
- ✅ Professional aesthetic

---

## 📊 Layout Breakdown

### Mobile (< 768px)

- Single column layouts
- Full-width cards
- Simplified navigation
- Optimized spacing

### Tablet (768px - 1024px)

- 2-column grids
- Balanced spacing
- Standard navigation
- Medium padding

### Desktop (> 1024px)

- 3-4 column grids
- Full navigation
- Wider spacing
- Generous padding

---

## 🔧 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

---

## 📋 Customization Checklist

Before deploying, make sure to:

- [ ] Update profile information (About page)
- [ ] Add real projects (Projects page)
- [ ] Update contact details (Contact page)
- [ ] Replace profile image
- [ ] Update skills and technologies
- [ ] Add project images to gallery
- [ ] Test all links work
- [ ] Verify mobile responsiveness
- [ ] Optimize images for web
- [ ] Test on different browsers

---

## 🚀 Deployment

### Build Production Bundle

```bash
npm run build
```

Output goes to `dist/` folder.

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `vite.config.js` base path
2. Run `npm run build`
3. Push `dist/` folder to `gh-pages` branch

### Deploy to Other Platforms

- Netlify
- AWS Amplify
- Azure Static Web Apps
- Any static host (Cloudflare Pages, etc.)

---

## 📚 Documentation Files

- **[PORTFOLIO_REDESIGN.md](./PORTFOLIO_REDESIGN.md)** - Complete redesign overview
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Design system & customization
- **[CONTENT_TEMPLATE.md](./CONTENT_TEMPLATE.md)** - Content examples & templates
- **[IMPLEMENTATION_EXAMPLES.md](./IMPLEMENTATION_EXAMPLES.md)** - Code examples & advanced features

---

## 🎨 Inspiration & Trends

This portfolio uses modern design trends:

- **Dark theme** - Professional and easy on the eyes
- **Card-based layout** - Clear content organization
- **Gradient accents** - Visual interest
- **Smooth animations** - Polished user experience
- **Responsive design** - Works on all devices
- **Minimalist typography** - Clean and readable

---

## 🔐 Privacy & Analytics

Currently, no tracking or analytics are included. Add your preferred solution:

- Google Analytics
- Plausible Analytics
- Fathom Analytics
- Umami

---

## 📝 License

This project is open source and available under the MIT License.

---

## 💬 Support

For questions or issues with customization, see:

1. [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
2. [IMPLEMENTATION_EXAMPLES.md](./IMPLEMENTATION_EXAMPLES.md)
3. [CONTENT_TEMPLATE.md](./CONTENT_TEMPLATE.md)

---

## ✨ Next Steps

1. **Customize Content** - Add your projects and information
2. **Update Images** - Replace placeholders with your work
3. **Adjust Colors** - Match your brand identity
4. **Test Thoroughly** - Verify on all devices
5. **Deploy** - Go live with your portfolio!

---

**Happy coding! 🚀 Build something amazing!**

---

_Built with React + Tailwind CSS | Modern, Responsive, Professional_
