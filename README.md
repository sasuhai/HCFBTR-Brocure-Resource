# HCFBTR - Digital Brochure & Resource Hub

A professional, premium-looking website for HCFBTR that serves as a digital brochure and resource hub. Built with modern web technologies focusing on low maintenance, security, and ease of content management.

## 🎯 Features

- **Modern & Premium Design**: Professional aesthetics with earth-tone color palette
- **Mobile-First & Responsive**: Optimized for all devices
- **Bilingual Content**: Natural mix of Bahasa Melayu and English
- **SEO-Optimized**: Complete meta tags and semantic HTML
- **Low Maintenance**: Static site with easy content updates
- **Fast & Secure**: No backend dependencies, minimal attack surface

## 📁 Project Structure

```
HCFBTR-Brocure-Resource/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx   # Responsive navigation
│   │   ├── Footer.jsx       # Site footer
│   │   └── ScrollToTop.jsx  # Auto scroll on route change
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Classes.jsx      # Classes & programs
│   │   ├── Journey.jsx      # Timeline & testimonials
│   │   ├── Blog.jsx         # Blog listing
│   │   ├── BlogPost.jsx     # Individual blog post
│   │   ├── Donate.jsx       # Donation page
│   │   └── Volunteer.jsx    # Volunteer application
│   ├── App.jsx              # Main app with routing
│   ├── index.css            # Design system & global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML with SEO meta tags
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd HCFBTR-Brocure-Resource
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Design System

### Color Palette
- **Primary**: Deep Forest Green (#2C5F4E) - Trust & growth
- **Secondary**: Warm Sand (#D4A574) - Warmth & approachability
- **Accent**: Coral (#E07A5F) - Call-to-action
- **Neutral**: Off-white & grays for text and backgrounds

### Typography
- **Headings**: Merriweather (Serif) - Professional & trustworthy
- **Body**: Inter (Sans-serif) - Modern & readable

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📄 Pages Overview

### 1. Home (`/`)
- Hero section with mission statement
- Impact statistics
- About section
- Features/benefits
- Strong CTAs for Donate & Volunteer

### 2. Classes (`/classes`)
- List of available programs
- Class details (objective, audience, schedule)
- Registration information
- Operating hours

### 3. Journey (`/journey`)
- Timeline of 10-year history
- Milestones & achievements
- Testimonials
- Future vision

### 4. Blog (`/blog`)
- Tag-based filtering
- Featured post highlight
- Article cards with excerpts
- Easy to add new posts

### 5. Blog Post (`/blog/:slug`)
- Clean article layout
- Readable typography
- Share functionality
- Back to blog navigation

### 6. Donate (`/donate`)
- Impact areas breakdown
- Monthly donation tiers
- One-time donation option
- Trust indicators
- Secure payment CTA

### 7. Volunteer (`/volunteer`)
- Volunteer opportunities
- Benefits of volunteering
- Application form
- Inspiring testimonial

## 🔧 Content Management

### Adding Blog Posts

Edit `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`:

1. Add new post data to the `blogPosts` array in `Blog.jsx`:
```javascript
{
  id: 7,
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief summary...',
  date: '2024-01-15',
  author: 'Author Name',
  tags: ['tag1', 'tag2'],
  image: '📚',
  featured: false
}
```

2. Add full content to `blogPostsData` in `BlogPost.jsx`:
```javascript
'your-post-slug': {
  title: 'Your Post Title',
  subtitle: 'English Subtitle',
  date: '2024-01-15',
  author: 'Author Name',
  tags: ['tag1', 'tag2'],
  image: '📚',
  content: `<p>Your HTML content here...</p>`
}
```

### Updating Classes

Edit `src/pages/Classes.jsx` - modify the `classes` array with your program details.

### Changing Contact Information

Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Donate.jsx`
- `src/pages/Volunteer.jsx`

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy!

### Option 2: Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Framework preset: Vite
4. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default {
  base: '/HCFBTR-Brocure-Resource/'
}
```

4. Deploy:
```bash
npm run deploy
```

## 🔐 Security Best Practices

- ✅ No backend or database required
- ✅ Static site = minimal attack surface
- ✅ External payment processing (no sensitive data stored)
- ✅ Form validation & spam protection recommended for production
- ✅ HTTPS enforced (handled by hosting platform)

## 📧 Form Handling

The volunteer application form currently shows an alert on submit. For production:

### Option 1: Use Form Service (Recommended)
- [Formspree](https://formspree.io/) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - Included with Netlify
- [Google Forms](https://www.google.com/forms/) - Free

### Option 2: Add Backend
- Firebase Functions
- Serverless functions (Netlify/Vercel)
- Simple PHP/Node.js backend

## 🎯 Future Enhancements

- [ ] CMS integration (Strapi, Contentful, or Sanity)
- [ ] Search functionality
- [ ] Multi-language full support
- [ ] Newsletter subscription
- [ ] Event calendar
- [ ] Photo gallery
- [ ] Analytics integration (Google Analytics, Plausible)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

© 2024 HCFBTR. All rights reserved.

## 🤝 Contributing

This is a private project for HCFBTR. Contact the organization for contribution guidelines.

## 📞 Support

For technical issues or questions:
- Email: info@hcfbtr.org
- Phone: +60 123 456 7890

---

**Built with ❤️ for the HCFBTR community**
