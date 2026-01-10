# HCFBTR Website - Content Management Guide

## Quick Start for Non-Technical Users

This guide will help you update content on the HCFBTR website without needing deep technical knowledge.

## 📝 Common Content Updates

### 1. Adding a New Blog Post

**File to Edit:** `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`

#### Step 1: Add to Blog List (Blog.jsx)

Find the `blogPosts` array (around line 8) and add your new post:

```javascript
{
  id: 7,  // Increment from last ID
  slug: 'your-slug-here',  // URL-friendly name (e.g., 'my-new-post')
  title: 'Tajuk Artikel Anda',
  excerpt: 'Ringkasan pendek artikel...',
  date: '2024-01-15',  // Format: YYYY-MM-DD
  author: 'Nama Penulis',
  tags: ['tag1', 'tag2'],
  image: '📚',  // Choose an emoji icon
  featured: false  // Set to true to feature this post
}
```

#### Step 2: Add Full Content (BlogPost.jsx)

Find the `blogPostsData` object (around line 6) and add:

```javascript
'your-slug-here': {
  title: 'Tajuk Artikel Anda',
  subtitle: 'English Subtitle',
  date: '2024-01-15',
  author: 'Nama Penulis',
  tags: ['tag1', 'tag2'],
  image: '📚',
  content: `
    <p>Perenggan pertama...</p>
    
    <h2>Subjudul</h2>
    <p>Kandungan lanjut...</p>
    
    <blockquote>
    "Petikan penting atau testimonial"
    </blockquote>
  `
}
```

**HTML Tags You Can Use:**
- `<p>...</p>` - Paragraph
- `<h2>...</h2>` - Heading 2
- `<h3>...</h3>` - Heading 3
- `<strong>...</strong>` - Bold text
- `<blockquote>...</blockquote>` - Quote block
- `<ul><li>...</li></ul>` - Bullet list

---

### 2. Updating Classes Information

**File to Edit:** `src/pages/Classes.jsx`

Find the `classes` array (around line 4) and modify or add:

```javascript
{
  title: 'Nama Kelas',
  subtitle: 'English Name',
  objective: 'Tujuan kelas ini',
  audience: 'Siapa yang sesuai',
  schedule: 'Waktu dan hari',
  icon: '📖',  // Choose an emoji
  color: 'primary'  // Options: primary, secondary, accent
}
```

---

### 3. Changing Contact Information

**Files to Edit:**
1. `src/components/Footer.jsx` (lines 26-35)
2. `src/pages/Donate.jsx` (lines 149-152)
3. `src/pages/Volunteer.jsx` (similar section near bottom)

Search for:
- `info@hcfbtr.org` - Replace with your email
- `+60 123 456 7890` - Replace with your phone

---

### 4. Updating Impact Statistics (Homepage)

**File to Edit:** `src/pages/Home.jsx`

Find the `impactStats` array (around line 6):

```javascript
{ 
  number: '10+', 
  label: 'Tahun Perkhidmatan', 
  sublabel: 'Years of Service' 
}
```

Change the numbers and labels as needed.

---

### 5. Updating Timeline (Journey Page)

**File to Edit:** `src/pages/Journey.jsx`

Find the `timeline` array (around line 6):

```javascript
{
  year: '2024',
  title: 'Tajuk Milestone',
  subtitle: 'English Title',
  description: 'Penerangan lengkap tentang pencapaian ini...',
  icon: '🎉'
}
```

Add new entries or modify existing ones.

---

### 6. Updating Testimonials

**File to Edit:** `src/pages/Journey.jsx`

Find the `testimonials` array (around line 45):

```javascript
{
  name: 'Nama Penuh',
  role: 'Peranan | Role',
  quote: 'Kata-kata testimonial di sini...',
  image: '👨'
}
```

---

## 🎨 Choosing Icons (Emojis)

Here are recommended emojis for different content:

**Education:**
- 📚 Books/Learning
- 📖 Quran/Reading
- ✏️ Writing/Study
- 🎓 Graduation/Achievement
- 📝 Notes/Documentation

**People:**
- 👨‍🏫 Teacher
- 👩‍🎓 Student
- 🤝 Partnership
- 👥 Community
- 👨‍👩‍👧‍👦 Family

**Activities:**
- 🎨 Arts/Creativity
- ⚽ Sports
- 🎪 Events
- 🎉 Celebration
- 🌟 Excellence

**Values:**
- 💚 Love/Care
- 🌱 Growth
- 💡 Ideas/Innovation
- 🏆 Achievement
- ⭐ Quality

---

## 📊 Updating Donation Tiers

**File to Edit:** `src/pages/Donate.jsx`

Find the `donationTiers` array (around line 29):

```javascript
{
  name: 'Nama Tier',
  subtitle: 'English Name',
  amount: 'RM 100',
  period: 'sebulan | /month',
  benefits: [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3'
  ],
  color: 'primary',  // primary, secondary, or accent
  featured: true  // Only one should be featured
}
```

---

## 🔧 How to Apply Changes

After editing any files:

1. **Save your changes** in the code editor
2. **The website will automatically refresh** in your browser (if dev server is running)
3. **Check the website** to ensure changes look correct

---

## 🚨 Important Tips

### ✅ DO:
- Keep backups before making changes
- Test changes locally before deploying
- Use bilingual content (BM & English)
- Keep text concise and clear
- Use consistent formatting

### ❌ DON'T:
- Delete the commas between items in arrays
- Remove the opening/closing brackets `{` `}`
- Change the file names
- Modify the `className` attributes unless you know CSS

---

## 🐛 Common Issues & Fixes

### Issue: Website shows blank page
**Fix:** Check the browser console for errors. Likely a syntax error (missing comma, bracket, or quote).

### Issue: Changes not appearing
**Fix:** 
1. Make sure you saved the file
2. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check if dev server is still running

### Issue: Layout looks broken
**Fix:** You may have accidentally deleted some HTML tags. Use "Undo" and try again carefully.

---

## 📞 Need Help?

If you encounter issues beyond these basic updates, consider:
1. Reverting to the last working version (use Git)
2. Contacting the original developer
3. Hiring a developer for more complex changes

---

## 🎯 Best Practices

1. **Update Regularly:** Keep blog posts and testimonials fresh
2. **Accuracy:** Ensure all contact info and stats are current
3. **Balance:** Mix Bahasa Melayu and English naturally
4. **Consistency:** Use the same tone and style across all content
5. **Backup:** Always keep a copy of working code before major changes

---

**Remember:** This website is designed to be low-maintenance. Most updates can be done by editing text in the JavaScript files. For anything more complex (design changes, new features), consult a developer.
