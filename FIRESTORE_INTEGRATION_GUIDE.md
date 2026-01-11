# Firestore Database Integration Guide

## 📝 Overview

Your Blog and Classes pages are now integrated with Firebase Firestore! This means all blog posts and classes are loaded dynamically from the database instead of being hardcoded.

## ✅ What Was Integrated

### 1. **Blog Page** (`src/pages/Blog.jsx`)
- Fetches all blog posts from the `blog-posts` Firestore collection
- Displays loading state while fetching data
- Shows error message with retry button if fetch fails
- Supports tag filtering
- Featured posts

### 2. **Classes Page** (`src/pages/Classes.jsx`)
- Fetches all classes from the `classes` Firestore collection
- Displays loading state while fetching data
- Shows error message with retry button if fetch fails
- Shows all class details dynamically

### 3. **BlogPost Page** (`src/pages/BlogPost.jsx`)
- Fetches individual blog posts by slug from Firestore
- Displays loading state
- Shows 404 page if post not found

## 🗄️ Database Collections

### Collection: `blog-posts`

**Required Fields:**
```javascript
{
  slug: string,           // URL-friendly identifier (e.g., 'my-first-post')
  title: string,          // Post title
  subtitle: string,       // English subtitle
  excerpt: string,        // Short description for cards
  content: string,        // Full HTML content
  date: string,           // ISO date (e.g., '2024-12-15')
  author: string,         // Author name
  tags: [string],         // Array of tags
  image: string,          // Emoji or image URL
  featured: boolean,      // true for featured post (optional)
  published: boolean,     // true to show, false to hide
  createdAt: string,      // Auto-generated
  updatedAt: string       // Auto-generated
}
```

### Collection: `classes`

**Required Fields:**
```javascript
{
  title: string,          // Class title (e.g., 'Kelas Al-Quran')
  subtitle: string,       // English subtitle
  objective: string,      // Class objective/description
  audience: string,       // Target audience
  schedule: string,       // Class schedule
  icon: string,           // Emoji icon
  color: string,          // 'primary', 'secondary', or 'accent'
  published: boolean,     // true to show, false to hide
  createdAt: string,      // Auto-generated
  updatedAt: string       // Auto-generated
}
```

## 🌱 Adding Initial Data

You have two options to populate your database with initial data:

### Option 1: Use the Seed Data Utility (Recommended for Development)

1. **Open your browser console** on your live site
2. **Copy and paste this code**:

```javascript
// Import the seed functions
import { seedAllData } from './utils/seedData.js';

// Run the seeding
seedAllData();
```

This will create sample blog posts and classes in your Firestore database.

### Option 2: Add Data Manually in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/project/hcfbtr-brocure-resource/firestore)
2. Click on **Firestore Database**
3. Click **+ Start collection**
4. Enter collection name: `blog-posts`
5. Add your first document with all required fields
6. Repeat for `classes` collection

### Option 3: Use Firestore Service in Code

Create a temporary admin page or component:

```javascript
import { createDocument } from './firebase/firestoreService';

const addSamplePost = async () => {
  await createDocument('blog-posts', {
    slug: 'welcome-post',
    title: 'Welcome to HCFBTR Blog',
    subtitle: 'Welcome Post',
    excerpt: 'This is our first blog post...',
    content: '<p>Welcome to our blog!</p>',
    date: '2024-12-15',
    author: 'Admin',
    tags: ['welcome', 'announcement'],
    image: '🎉',
    featured: true,
    published: true
  });
};
```

## 📊 Managing Data

### View Data


Go to Firebase Console → Firestore Database → Browse collections

### Add New Blog Post

```javascript
import { createDocument } from './firebase/firestoreService';

const newPost = await createDocument('blog-posts', {
  slug: 'unique-post-slug',
  title: 'Post Title',
  subtitle: 'English Subtitle',
  excerpt: 'Short description...',
  content: '<p>Full HTML content here...</p>',
  date: '2024-12-15',
  author: 'Author Name',
  tags: ['tag1', 'tag2'],
  image: '📚',
  featured: false,
  published: true
});
```

### Add New Class

```javascript
import { createDocument } from './firebase/firestoreService';

const newClass = await createDocument('classes', {
  title: 'Kelas Baru',
  subtitle: 'New Class',
  objective: 'Class objective...',
  audience: 'Target audience...',
  schedule: 'Class schedule...',
  icon: '📖',
  color: 'primary', // or 'secondary', 'accent'
  published: true
});
```

### Update Existing Document

```javascript
import { updateDocument } from './firebase/firestoreService';

await updateDocument('blog-posts', 'document-id', {
  title: 'Updated Title',
  published: false
});
```

### Delete Document

```javascript
import { deleteDocument } from './firebase/firestoreService';

await deleteDocument('blog-posts', 'document-id');
```

## 🔒 Security Rules

Current security rules (in `firestore.rules`):

- ✅ **Anyone can READ** blog posts and classes
- 🔐 **Only authenticated users can WRITE** (create, update, delete)

To allow public writes (not recommended):
```javascript
allow read, write: if true;
```

To require authentication for writes:
```javascript
allow read: if true;
allow write: if request.auth != null;
```

## 🎯 Testing the Integration

### 1. **Check if Data Loads**

Visit your live site:
- **Blog**: https://hcfbtr-brocure-resource.web.app/#/blog
- **Classes**: https://hcfbtr-brocure-resource.web.app/#/kelas

### 2. **Expected Behavior**

**If database is empty:**
- You'll see: "📝 Belum ada artikel yang diterbitkan" (Blog)
- You'll see: "📝 Belum ada kelas yang tersedia" (Classes)

**If database has data:**
- Blog posts will display in a grid
- Classes will display in cards

**If there's an error:**
- Error message will appear with "Cuba Lagi" button

### 3. **Test Loading States**

Open browser DevTools → Network tab → Throttle to "Slow 3G" to see loading states.

## 🛠️ Troubleshooting

### "Failed to load" error

**Possible causes:**
1. Firestore database not enabled
2. Security rules too restrictive
3. Collection name mismatch
4. Network issues

**Solutions:**
1. Check Firebase Console → Firestore Database is enabled
2. Review security rules in `firestore.rules`
3. Ensure collection names are exactly: `blog-posts` and `classes`
4. Check browser console for detailed errors

### Posts/Classes not showing

1. **Check if data exists**: Firebase Console → Firestore → Browse collections
2. **Check `published` field**: Must be `true`
3. **Check console**: Look for JavaScript errors
4. **Verify field names**: Must match exactly (case-sensitive)

### "Post not found" on BlogPost page

1. **Check slug**: URL slug must match the `slug` field in database
2. **Example**: `/blog/my-post` requires a document with `slug: 'my-post'`

## 📝 Content Guidelines

### Writing Blog Post Content

Use HTML for rich formatting:

```html
<p>Paragraph text here...</p>

<h2>Section Heading</h2>
<p>More content...</p>

<blockquote>
"Quote text here"
</blockquote>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

### Choosing Slugs

- Use lowercase letters
- Use hyphens for spaces
- Keep it short and descriptive
- Examples: `welcome-post`, `annual-event-2024`, `tips-for-beginners`

### Selecting Tags

Use existing tags for consistency:
- `kisah pelajar`
- `aktiviti`
- `sukarelawan`
- `pencapaian`
- `pendidikan`
- `inspirasi`
- `tips`

## 🚀 Next Steps

1. **Add Initial Data**: Use seed function or add manually
2. **Test the Pages**: Visit Blog and Classes pages
3. **Create New Content**: Use createDocument helper
4. **Set up Admin Panel** (Optional): Create a protected admin page for content management
5. **Enable Authentication** (Optional): Protect write operations

## 📚 Related Files

- `src/firebase/config.js` - Firebase initialization
- `src/firebase/firestoreService.js` - Database helper functions
- `src/utils/seedData.js` - Sample data for seeding
- `src/pages/Blog.jsx` - Blog listing page
- `src/pages/BlogPost.jsx` - Individual blog post page
- `src/pages/Classes.jsx` - Classes page
- `firestore.rules` - Security rules

## ✨ Summary

Your HCFBTR app now has a fully functional Firestore database integration! You can:

✅ Load blog posts dynamically from Firebase
✅ Load classes dynamically from Firebase  
✅ Add, update, and delete content using helper functions
✅ Manage content through Firebase Console
✅ Scale to thousands of posts without code changes

Happy content managing! 🎉
