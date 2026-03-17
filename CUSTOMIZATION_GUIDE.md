# Portfolio Site - Quick Setup Guide

## 🎨 Color Palette

```
Primary Gradient:
  Start: #667eea (Indigo)
  End: #764ba2 (Purple)

Background:
  Dark: #1a202c (Dark Navy)
  Card: #2d3748 (Slate)
  Border: #4a5568 (Gray)

Text:
  Primary: #e2e8f0 (Light Gray)
  Secondary: #a0aec0 (Muted Gray)
  Accent: #667eea (Indigo)
```

## 📐 Layout System

### Spacing

- Base unit: 0.5rem (8px)
- Padding: 2rem (32px) on containers
- Gaps: 1.5rem - 2rem between cards
- Mobile padding: 1rem (16px)

### Typography

- **Font Family:** System UI stack (-apple-system, BlinkMacSystemFont, etc.)
- **H1:** 2.5rem bold (Hero titles)
- **H2:** 2rem bold (Section titles)
- **H3:** 1.5rem semi-bold (Card titles)
- **Body:** 1rem regular (Base text)
- **Small:** 0.85-0.95rem (Tags, labels)

### Border Radius

- Cards: 0.5rem (8px)
- Buttons: 0.375rem (6px)
- Profile image: 50% (circle)

## 🎭 Component Usage

### Card Component

```jsx
import Card from './Components/Card'

;<Card className='custom-class'>
  <h3>Title</h3>
  <p>Content here</p>
</Card>
```

### Tech Tags

```jsx
<div className='tech-stack'>
  <span className='tech-tag'>React</span>
  <span className='tech-tag'>CSS</span>
</div>
```

### CTA Buttons

```jsx
<a href='/projects' className='cta-button'>
  View My Work
</a>
```

## 📱 Responsive Grid Templates

### Projects Grid

```css
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
```

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

### Skills Grid

```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

- Desktop: 5-6 items per row
- Tablet: 3 items per row
- Mobile: 2 items per row

### Media Gallery

```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

- Desktop: 4 columns
- Tablet: 2-3 columns
- Mobile: 1-2 columns

## 🎬 Animations

### Hover Effects

- **Cards:** Box shadow enhancement
- **Images:** Scale 1.1
- **Buttons:** translateY(-2px)
- **Links:** Color change + underline

### Transitions

- Default: 0.2s ease
- All properties smooth
- Reduced motion respected

## 🔧 Customization Checklist

- [ ] Update profile image (`public/me.png`)
- [ ] Update logo (`public/logo3.png`)
- [ ] Replace projects with your work
- [ ] Add project images
- [ ] Update About bio text
- [ ] Update skills list
- [ ] Update contact information
- [ ] Replace email address
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Adjust color palette if desired
- [ ] Update project descriptions
- [ ] Add technology stack for projects
- [ ] Set project links/demos

## 📊 File Organization

```
src/
├── pages/
│   ├── Home.jsx          (Landing page)
│   ├── Home.css
│   ├── Projects.jsx      (Portfolio grid)
│   ├── Projects.css
│   ├── Media.jsx         (Gallery with lightbox)
│   ├── Media.css
│   ├── About.jsx         (Bio + skills)
│   ├── About.css
│   ├── Contact.jsx       (Contact methods)
│   └── Contact.css
├── Components/
│   ├── Card.jsx          (Reusable card)
│   ├── Navbar.jsx        (Navigation)
│   ├── Navbar.css
│   ├── AnimatedRoutes.jsx (Route transitions)
│   ├── ContentContainer.jsx
│   └── ContentContainer.css
├── App.jsx
├── App.css
├── index.css             (Global styles)
└── main.jsx
```

## 🌐 URLs

### Development

```
Local:   http://localhost:5173/color-converter-r/
```

### Pages

- Home: `/color-converter-r/`
- Projects: `/color-converter-r/projects`
- Media: `/color-converter-r/media`
- About: `/color-converter-r/about`
- Contact: `/color-converter-r/contact`

## 🎯 Component Props

### Card

```jsx
<Card
  className='optional-class'
  onClick={handler}
  // Pass through any DOM attributes
>
  {children}
</Card>
```

## 💡 Tips for Customization

1. **Gradients** - Edit in multiple places:
   - `src/pages/Home.css` - Hero title
   - `src/pages/About.css` - Skills tags
   - `src/Components/Navbar.css` - Navbar background
   - Update primary color in `index.css` variable definitions

2. **Images** - Placeholder approach:
   - Replace `https://picsum.photos` URLs with real images
   - Use local images in `public/` folder
   - Optimize images before deployment

3. **Links** - All in component JSX:
   - Update href attributes
   - Replace `#` with real URLs
   - Update `target='_blank'` attributes as needed

4. **Content** - Easy to swap:
   - Projects array in `Projects.jsx`
   - Skills array in `About.jsx`
   - Contact info in `Contact.jsx`
   - Bio text in `About.jsx`

## 📦 Dependencies

No new dependencies added! Uses existing:

- react@19.2.0
- react-router-dom@7.12.0
- framer-motion@12.26.2 (optional, ready for animation)
- tailwindcss@3.4.18

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Output
dist/ folder ready for deployment
```

## ✅ Quality Checklist

- [x] Mobile responsive
- [x] Dark theme optimized
- [x] Accessibility considered
- [x] Performance optimized
- [x] Modular CSS
- [x] Reusable components
- [x] Modern design patterns
- [x] No console errors
- [x] SEO-friendly structure
- [x] Fast load times

## 🎯 Next Customization Steps

1. Screenshot current portfolio pages
2. Prepare 6+ project examples with images
3. Write concise project descriptions
4. Gather required links (GitHub, LinkedIn, etc.)
5. Prepare profile photo
6. List all relevant skills
7. Write about bio (50-100 words)
8. Update contact information
9. Test all links work
10. Deploy to hosting platform

---

**Happy customizing! 🚀**
