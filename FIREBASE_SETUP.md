# Firebase Setup and Deployment Guide

This guide will help you integrate Firebase Firestore (NoSQL Database) and deploy your application to Firebase Hosting.

## Prerequisites

- Node.js and npm installed
- A Google account
- Firebase CLI installed globally

## Step 1: Install Firebase CLI Globally

```bash
npm install -g firebase-tools
```

## Step 2: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., `hcfbtr-brochure`)
4. Follow the setup wizard:
   - Enable/disable Google Analytics (optional)
   - Choose Analytics account if enabled
5. Click **"Create project"**

## Step 3: Configure Firebase in Your Project

### 3.1 Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon) → **General**
2. Scroll down to **"Your apps"** section
3. Click the **Web icon** (`</>`) to add a web app
4. Register your app with a nickname (e.g., `hcfbtr-web`)
5. Copy the `firebaseConfig` object

### 3.2 Update Firebase Configuration

Open `src/firebase/config.js` and replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};
```

### 3.3 Update Firebase Project ID

Open `.firebaserc` and replace `YOUR_PROJECT_ID` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## Step 4: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database** in the left sidebar
2. Click **"Create database"**
3. Choose **Production mode** or **Test mode**:
   - **Production mode**: Uses the security rules in `firestore.rules`
   - **Test mode**: Allows all reads/writes for 30 days (not recommended for production)
4. Select a Firestore location (choose closest to your users)
5. Click **"Enable"**

## Step 5: Login to Firebase CLI

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 6: Initialize Firebase (Already Done)

The project is already initialized with the following files:
- `firebase.json` - Firebase configuration
- `.firebaserc` - Project aliases
- `firestore.rules` - Firestore security rules
- `firestore.indexes.json` - Firestore indexes

## Step 7: Deploy to Firebase

### Deploy Everything (Hosting + Firestore Rules)

```bash
npm run firebase:deploy
```

### Deploy Only Hosting

```bash
npm run firebase:hosting
```

### Deploy Only Firestore Rules

```bash
npm run firebase:firestore
```

## Step 8: Using Firestore in Your Application

### Import Firestore Service

```javascript
import { 
  createDocument, 
  getDocument, 
  getAllDocuments,
  updateDocument,
  deleteDocument,
  queryDocuments
} from './firebase/firestoreService';
```

### Example Usage in Components

#### Create a Document (e.g., Blog Post)

```javascript
const handleCreatePost = async () => {
  try {
    const newPost = await createDocument('blog-posts', {
      title: 'Welcome to HCFBTR',
      content: 'This is our first blog post...',
      author: 'Admin',
      published: true
    });
    console.log('Post created:', newPost);
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
```

#### Read All Documents

```javascript
const loadPosts = async () => {
  try {
    const posts = await getAllDocuments('blog-posts');
    console.log('All posts:', posts);
  } catch (error) {
    console.error('Error loading posts:', error);
  }
};
```

#### Query Documents with Filters

```javascript
const loadPublishedPosts = async () => {
  try {
    const posts = await queryDocuments(
      'blog-posts', 
      [{ field: 'published', operator: '==', value: true }],
      'createdAt', // orderBy field
      10 // limit to 10 results
    );
    console.log('Published posts:', posts);
  } catch (error) {
    console.error('Error querying posts:', error);
  }
};
```

#### Update a Document

```javascript
const handleUpdatePost = async (postId) => {
  try {
    await updateDocument('blog-posts', postId, {
      title: 'Updated Title',
      content: 'Updated content...'
    });
    console.log('Post updated successfully');
  } catch (error) {
    console.error('Error updating post:', error);
  }
};
```

#### Delete a Document

```javascript
const handleDeletePost = async (postId) => {
  try {
    await deleteDocument('blog-posts', postId);
    console.log('Post deleted successfully');
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
```

## Step 9: Firestore Security Rules

The default security rules in `firestore.rules` allow:
- **Public read** access to blog posts, volunteers, and events
- **Authenticated write** access (you'll need to add authentication)
- **Anyone can create** contact messages

### To Update Security Rules:

1. Edit `firestore.rules`
2. Deploy the changes:
   ```bash
   npm run firebase:firestore
   ```

### Common Security Rule Patterns:

```javascript
// Allow anyone to read and write
allow read, write: if true;

// Allow only authenticated users
allow read, write: if request.auth != null;

// Allow only specific user
allow read, write: if request.auth.uid == userId;

// Allow read to all, write to authenticated
allow read: if true;
allow write: if request.auth != null;
```

## Step 10: View Your Deployed Site

After deployment, your site will be available at:
```
https://your-project-id.web.app
```
or
```
https://your-project-id.firebaseapp.com
```

## Firestore Collections Structure (Suggested)

### Blog Posts Collection: `blog-posts`
```javascript
{
  id: 'auto-generated',
  title: 'string',
  content: 'string',
  excerpt: 'string',
  author: 'string',
  category: 'string',
  tags: ['string'],
  published: boolean,
  featuredImage: 'string (URL)',
  createdAt: 'ISO timestamp',
  updatedAt: 'ISO timestamp'
}
```

### Volunteers Collection: `volunteers`
```javascript
{
  id: 'auto-generated',
  name: 'string',
  email: 'string',
  phone: 'string',
  interests: ['string'],
  availability: 'string',
  status: 'pending' | 'approved' | 'rejected',
  createdAt: 'ISO timestamp',
  updatedAt: 'ISO timestamp'
}
```

### Events Collection: `events`
```javascript
{
  id: 'auto-generated',
  title: 'string',
  description: 'string',
  date: 'ISO timestamp',
  location: 'string',
  capacity: number,
  registered: number,
  image: 'string (URL)',
  createdAt: 'ISO timestamp',
  updatedAt: 'ISO timestamp'
}
```

### Contact Messages Collection: `contact-messages`
```javascript
{
  id: 'auto-generated',
  name: 'string',
  email: 'string',
  subject: 'string',
  message: 'string',
  status: 'new' | 'read' | 'replied',
  createdAt: 'ISO timestamp',
  updatedAt: 'ISO timestamp'
}
```

## Useful Firebase Commands

```bash
# View current project
firebase use

# Switch to a different project
firebase use <project-id>

# List all projects
firebase projects:list

# Open Firebase console for current project
firebase open

# View hosting URL
firebase hosting:sites:list

# View deployment history
firebase hosting:clone source:version

# Serve locally with Firebase emulators
firebase emulators:start
```

## Troubleshooting

### Error: "Permission denied"
- Check your Firestore security rules
- Make sure you're authenticated if rules require it
- Verify the collection name matches your rules

### Error: "Project not found"
- Verify `.firebaserc` has the correct project ID
- Run `firebase use <project-id>` to set the active project

### Error: "Failed to deploy"
- Make sure you're logged in: `firebase login`
- Check that the build succeeded: `npm run build`
- Verify `firebase.json` configuration is correct

### Site shows 404 or blank page
- Ensure `dist` folder was created by build
- Check `firebase.json` public directory is set to `dist`
- Verify rewrites are configured for SPA routing

## Next Steps

1. **Add Authentication**: Implement Firebase Authentication for user management
2. **Add Storage**: Use Firebase Storage for file uploads (images, documents)
3. **Add Functions**: Create Firebase Cloud Functions for backend logic
4. **Add Analytics**: Monitor user behavior with Firebase Analytics
5. **Performance Monitoring**: Track app performance with Firebase Performance

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
