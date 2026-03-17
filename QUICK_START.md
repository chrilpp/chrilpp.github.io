# 🚀 Quick Start Checklist - Portfolio Customization

Complete this checklist to transform the portfolio template into your personal portfolio!

---

## ⏱️ Estimated Time: 30-45 minutes

---

## Phase 1: Content Updates (15 minutes)

### Step 1: Update Your Bio (5 min)

- [ ] Open `src/pages/About.jsx`
- [ ] Replace the bio text (find "Full-stack developer with a passion...")
- [ ] Use the templates from `CONTENT_TEMPLATE.md` for inspiration
- [ ] Keep it professional but personable

**File:** `src/pages/About.jsx`
**Find:** `<p className='about-bio'>`
**Replace:** Your bio text

### Step 2: Update Skills (3 min)

- [ ] Still in `src/pages/About.jsx`
- [ ] Find the `skills` array
- [ ] Add/remove skills relevant to you
- [ ] Aim for 15-30 skills total

**Example:**

```jsx
const skills = ['React', 'TypeScript', 'Node.js', 'SQL', 'MongoDB', 'REST APIs', 'AWS', 'Docker', 'Git']
```

### Step 3: Update Technologies (2 min)

- [ ] Find `technologies` array in `src/pages/About.jsx`
- [ ] Update Frontend, Backend, Tools categories
- [ ] Match your actual tech stack

**Example:**

```jsx
const technologies = [
  { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { name: 'Tools', items: ['Git', 'VS Code', 'Docker'] },
]
```

### Step 4: Update Contact Info (5 min)

- [ ] Open `src/pages/Contact.jsx`
- [ ] Update email address (change `yourname@gmail.com`)
- [ ] Update LinkedIn URL (change `https://linkedin.com/in/...`)
- [ ] Update GitHub URL (change `https://github.com/...`)
- [ ] Update location (change `Stockholm, Sweden`)

**Fields to Update:**

- Email address
- LinkedIn profile URL
- GitHub profile URL
- Location info

---

## Phase 2: Projects (15 minutes)

### Step 5: Add Your Projects (10 min)

- [ ] Open `src/pages/Projects.jsx`
- [ ] Find the `projects` array
- [ ] Replace example projects with your work
- [ ] Add at least 3-6 projects
- [ ] Fill in: title, description, tech stack, link, image

**Template for each project:**

```jsx
{
  title: 'Your Project Name',
  description: 'What does it do? Key features?',
  tech: ['React', 'Node.js', 'MongoDB'],
  link: 'https://github.com/yourname/project',
  image: 'https://your-image-url.jpg'
}
```

**Tips:**

- Use real project URLs (GitHub repos, live demos)
- Write 1-2 sentence descriptions
- List 3-5 technologies per project
- For now, use placeholder images (we'll update later)

### Step 6: Update Gallery Images (3 min)

- [ ] Open `src/pages/Media.jsx`
- [ ] Find the `images` array
- [ ] Note: Currently uses placeholder service
- [ ] Plan to replace with your project screenshots
- [ ] Can keep placeholders for now and update later

**Keep as-is for now:**

```jsx
const images = [
  { src: 'https://picsum.photos/400/300?random=1', alt: '...' },
  // ...
]
```

---

## Phase 3: Images (10 minutes)

### Step 7: Update Profile Photo

- [ ] Find your best professional photo
- [ ] Resize to 300x300px or similar
- [ ] Save as PNG or JPG (optimize file size)
- [ ] Copy to `public/me.png`
- [ ] Replaces the old profile image

**How:**

1. Take/find a professional headshot
2. Crop to square format
3. Optimize with https://tinypng.com/
4. Save to `public/` folder as `me.png`

### Step 8: Update Logo

- [ ] Find or create a logo/avatar
- [ ] Resize to 100x100px or similar
- [ ] Save as PNG with transparency
- [ ] Copy to `public/logo3.png`
- [ ] Appears in navbar

**How:**

1. Create a simple logo or use avatar
2. Keep it simple and recognizable
3. Optimize file size
4. Save to `public/` folder as `logo3.png`

### Step 9: Add Project Screenshots (Optional)

- [ ] Take screenshots of your projects
- [ ] Optimize for web (~100-200KB each)
- [ ] Save to `public/` folder with descriptive names
- [ ] Update image URLs in `Projects.jsx`

**Filename Convention:**

- `project-1.jpg`
- `project-2.jpg`
- etc.

---

## Phase 4: Colors & Styling (5 minutes)

### Step 10: (Optional) Customize Colors

- [ ] Open `src/index.css`
- [ ] Find color definitions at the top
- [ ] Optional: Change primary colors
- [ ] Keep consistent throughout site

**Colors to potentially change:**

- `#667eea` (Primary start)
- `#764ba2` (Primary end)
- Backgrounds, text colors (optional)

**Default palette (keep if happy):**

- Primary: Purple-Blue gradient
- Dark background with slate cards
- Professional and modern

### Step 11: (Optional) Home Page Hero

- [ ] Open `src/pages/Home.jsx`
- [ ] Update name in `<h1>` tag
- [ ] Update tagline in `<p className='hero-subtitle'>`
- [ ] Update description text
- [ ] Keep professional tone

---

## Phase 5: Testing & Verification (5 minutes)

### Step 12: Test All Pages

- [ ] Navigate to Home page → Check hero section
- [ ] Navigate to Projects → Verify your projects display
- [ ] Navigate to Media → Check gallery (images may be placeholders)
- [ ] Navigate to About → Verify your bio and skills
- [ ] Navigate to Contact → Verify all contact links

**Check:**

- [ ] All text displays correctly
- [ ] Links work properly
- [ ] Images look good (or use placeholders)
- [ ] Mobile view works (resize browser)

### Step 13: Test Responsiveness

- [ ] Open DevTools (F12 or Cmd+Option+I)
- [ ] Toggle device toolbar
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)

**Verify:**

- [ ] Text is readable
- [ ] Cards stack properly
- [ ] Navigation works on mobile
- [ ] No horizontal scroll

### Step 14: Test Links

- [ ] Click email link → Should open email client
- [ ] Click LinkedIn link → Should open profile
- [ ] Click GitHub link → Should open profile
- [ ] Click project links → Should open projects
- [ ] Click navigation items → Should navigate smoothly

### Step 15: Final Check

- [ ] Open browser console (F12)
- [ ] No red errors shown
- [ ] No broken images (404s)
- [ ] All animations smooth
- [ ] Page loads quickly

---

## 📋 Content Checklist

Before considering "done", verify:

### Bio & Profile

- [x] Profile photo updated
- [x] Bio text matches your experience
- [x] Skills list comprehensive (20-30 items)
- [x] Technologies accurate
- [x] Logo/avatar displayed

### Projects

- [x] At least 3 projects added
- [x] Project titles clear and descriptive
- [x] Descriptions highlight key features
- [x] Technology tags accurate
- [x] Links work (GitHub repos or live demos)
- [x] Project images/placeholders in place

### Contact

- [x] Email address correct
- [x] LinkedIn URL correct and public
- [x] GitHub URL correct and public
- [x] Location info accurate

### Visual

- [x] Professional appearance
- [x] No broken images
- [x] Consistent spacing
- [x] Mobile responsive
- [x] Colors match your brand (optional)

---

## 🎯 Quick Customization Templates

### Project Card Template (Copy this!)

```jsx
{
  title: 'Project Title',
  description: 'Brief description of what this project does and why it matters.',
  tech: ['React', 'Node.js', 'MongoDB'],
  link: 'https://github.com/yourname/project-name',
  image: '/project-thumbnail.jpg'
}
```

### Skill Examples to Use

```
Frontend: React, Vue, Angular, HTML5, CSS3, JavaScript, TypeScript, Tailwind, Bootstrap
Backend: Node.js, Python, Java, Express, Django, Spring
Database: MongoDB, PostgreSQL, MySQL, Firebase
Tools: Git, GitHub, Docker, AWS, Vercel, VS Code, Figma
Concepts: REST APIs, GraphQL, Microservices, Testing, CI/CD, SEO
```

---

## 🚀 Deployment Readiness

Before deploying to production:

- [ ] All content is customized
- [ ] No placeholder text remaining
- [ ] All links verified working
- [ ] Images optimized
- [ ] Mobile responsive tested
- [ ] No console errors
- [ ] Ready to share with employers!

---

## 📚 Helpful Reference Files

While customizing, reference these:

- **CONTENT_TEMPLATE.md** - Content ideas and examples
- **CUSTOMIZATION_GUIDE.md** - Design system details
- **IMPLEMENTATION_EXAMPLES.md** - Code examples for features
- **VISUAL_STRUCTURE.md** - Layout diagrams

---

## 💾 Saving & Version Control

After completing each section:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update portfolio: added projects and bio"

# Push to repository
git push origin main
```

---

## ⏱️ Time Breakdown

- Phase 1 (Content): 15 min
- Phase 2 (Projects): 15 min
- Phase 3 (Images): 10 min
- Phase 4 (Styling): 5 min
- Phase 5 (Testing): 5 min
- **Total: ~45 minutes**

---

## 🎉 Success Indicators

You're done when:
✅ Your name appears on home page
✅ Your projects are displayed
✅ Your contact info is visible
✅ Your profile photo appears
✅ All links work
✅ Mobile version looks good
✅ No errors in console

---

## 🆘 Stuck? Reference These

**Text won't change?**

- Make sure you're editing the right .jsx file
- Restart development server: `npm run dev`
- Clear browser cache (Cmd+Shift+R)

**Images not showing?**

- Check file path in image src
- Verify image exists in `public/` folder
- Use correct image filename

**Style looks wrong?**

- Check for typos in className
- Verify CSS file is imported
- Check CSS specificity conflicts

**Links not working?**

- Verify full URL (https://...)
- Check for typos in URL
- Test link in new tab first

---

## 📞 Next Steps After Customization

1. **Build for production:** `npm run build`
2. **Deploy to hosting:** Vercel, Netlify, GitHub Pages, etc.
3. **Share with employers:** Send portfolio link
4. **Keep updating:** Add projects as you complete them
5. **Get feedback:** Ask for thoughts on design/content

---

## 🎯 Success Metrics

Your portfolio should:

- ✅ Load in under 3 seconds
- ✅ Display on all devices (mobile → desktop)
- ✅ Showcase your best work
- ✅ Be easy to navigate
- ✅ Display contact info prominently
- ✅ Look professional
- ✅ Encourage hiring interest

---

**You've got this! 🚀 Start with Step 1 and work your way through. It's easier than you think!**

_Estimated total time to complete: 30-45 minutes_
