# Deployment Guide - HCFBTR Website

## 🎯 Quick Deployment Options

This website can be deployed for **FREE** using any of these platforms:

---

## Option 1: Netlify (Recommended ⭐)

**Why Netlify?**
- ✅ Free tier is generous
- ✅ Automatic deployments from Git
- ✅ Built-in form handling
- ✅ Free SSL certificate
- ✅ CDN included

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Netlify](https://www.netlify.com)**
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository
   
3. **Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   
4. **Deploy!**
   - Click "Deploy site"
   - Your site will be live in 2-3 minutes
   - Free subdomain: `your-site-name.netlify.app`

5. **Custom Domain (Optional):**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions

6. **Enable Forms (for Volunteer form):**
   - Add `netlify` attribute to form in `Volunteer.jsx`:
   ```jsx
   <form onSubmit={handleSubmit} className="volunteer-form" netlify>
   ```

---

## Option 2: Vercel

**Why Vercel?**
- ✅ Excellent performance
- ✅ Free SSL
- ✅ Automatic deployments
- ✅ Great for React apps

### Steps:

1. **Push code to GitHub** (same as above)

2. **Go to [Vercel](https://vercel.com)**
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

3. **Deploy:**
   - Vercel auto-detects Vite
   - Just click "Deploy"
   - Live in 2-3 minutes
   - Free subdomain: `your-site.vercel.app`

---

## Option 3: GitHub Pages

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Good for open-source projects
- ✅ Integrated with GitHub

### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     base: '/HCFBTR-Brocure-Resource/',  // Your repo name
     plugins: [react({ jsxRuntime: 'automatic' })]
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable in GitHub:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://yourusername.github.io/HCFBTR-Brocure-Resource`

---

## 🔧 Post-Deployment Setup

### 1. Form Handling

Your volunteer form currently shows an alert. Choose one:

**A. Netlify Forms (If using Netlify):**
```jsx
// In Volunteer.jsx
<form netlify name="volunteer" onSubmit={handleSubmit}>
  <input type="hidden" name="form-name" value="volunteer" />
  {/* rest of form */}
</form>
```

**B. Formspree (Works everywhere):**
1. Sign up at [Formspree](https://formspree.io)
2. Create a form and get your endpoint
3. Update form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**C. Google Forms:**
1. Create a Google Form
2. Link to it from your volunteer page
3. Update the button:
```jsx
<a href="YOUR_GOOGLE_FORM_URL" className="btn btn-primary btn-lg">
  Submit Application
</a>
```

### 2. Analytics (Optional)

**Google Analytics:**
1. Create account at [Google Analytics](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

**Plausible (Privacy-friendly):**
1. Sign up at [Plausible](https://plausible.io) (paid, but privacy-focused)
2. Add script to `index.html`

### 3. Custom Domain

**To use your own domain (e.g., hcfbtr.org):**

1. **Buy a domain** (if you don't have one):
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS:**
   
   **For Netlify:**
   - Go to Netlify → Domain Settings
   - Add custom domain
   - Follow DNS instructions (add A record or CNAME)
   
   **For Vercel:**
   - Go to Project Settings → Domains
   - Add domain
   - Update DNS records

3. **SSL Certificate:**
   - Automatically provided by Netlify/Vercel (free!)
   - Wait 24-48 hours for DNS to propagate

---

## 🔄 Continuous Deployment

Once set up, any code push to GitHub will automatically:
1. Build your website
2. Deploy to production
3. Update live site in 2-3 minutes

**Workflow:**
```bash
# Make changes locally
# Test with: npm run dev

# When ready to deploy:
git add .
git commit -m "Updated blog posts"
git push origin main

# Wait 2-3 minutes - your site is updated!
```

---

## 📊 Monitoring & Maintenance

### Check Website Health:
- ✅ Test all pages load correctly
- ✅ Forms working
- ✅ Links not broken
- ✅ Mobile responsive
- ✅ Fast load times

### Tools:
- **Google PageSpeed Insights** - Performance check
- **GTmetrix** - Load time analysis
- **Mobile-Friendly Test** - Google's mobile test
- **Broken Link Checker** - Find broken links

---

## 🚨 Rollback (If Something Goes Wrong)

### Netlify/Vercel:
1. Go to Deploys
2. Find last working deploy
3. Click "Publish deploy"

### GitHub Pages:
1. Revert Git commit:
   ```bash
   git revert HEAD
   git push origin main
   npm run deploy
   ```

---

## 💰 Cost Breakdown

### Free Forever:
- ✅ Hosting (Netlify/Vercel/GitHub Pages)
- ✅ SSL Certificate
- ✅ CDN
- ✅ Automatic deployments
- ✅ Form submissions (100/month on Netlify free tier)

### Optional Paid:
- Custom domain: $10-15/year
- Premium analytics: $9-19/month (optional)
- More form submissions: $19/month (only if needed)

**Total: Can be $0/month or ~$1/month (domain only)**

---

## 🎯 Recommended Setup for HCFBTR:

1. **Hosting:** Netlify (free tier)
2. **Forms:** Netlify Forms (free, 100 submissions/month)
3. **Domain:** Buy `hcfbtr.org` ($12/year)
4. **Analytics:** Google Analytics (free) or Plausible (paid but private)

**Total Cost: ~$12/year ($1/month)**

---

## 📞 Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev
- **React Router:** https://reactrouter.com

---

## ✅ Pre-Deployment Checklist

- [ ] All content reviewed and accurate
- [ ] Contact information updated
- [ ] Tested on desktop and mobile
- [ ] Forms tested
- [ ] Links checked
- [ ] Images optimized
- [ ] SEO meta tags added (already done ✓)
- [ ] Analytics set up
- [ ] Domain purchased (if using custom domain)

---

**Your website is production-ready and can be deployed in under 10 minutes!**
