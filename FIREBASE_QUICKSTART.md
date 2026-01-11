# Firebase Quick Start Checklist

Follow these steps to get your app running on Firebase:

## ✅ Phase 1: Firebase Console Setup

- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Create a new Firebase project or select existing one
- [ ] Add a Web App to your Firebase project
- [ ] Copy the Firebase configuration object
- [ ] Enable Firestore Database (choose a region close to your users)

## ✅ Phase 2: Local Configuration

- [ ] Install Firebase CLI globally: `npm install -g firebase-tools`
- [ ] Update `src/firebase/config.js` with your Firebase config
- [ ] Update `.firebaserc` with your Firebase project ID
- [ ] Login to Firebase: `firebase login`

## ✅ Phase 3: Deploy

- [ ] Build and deploy: `npm run firebase:deploy`
- [ ] Visit your deployed site at: `https://YOUR_PROJECT_ID.web.app`

## ✅ Phase 4: Test Firestore

- [ ] Add the `FirestoreExample` component to test database operations
- [ ] Create a test document in Firestore
- [ ] Verify data appears in Firebase Console → Firestore Database

## 🔥 Firebase Commands Reference

```bash
# Deploy everything
npm run firebase:deploy

# Deploy only hosting
npm run firebase:hosting

# Deploy only Firestore rules
npm run firebase:firestore

# Local development
npm run dev

# View current Firebase project
firebase use
```

## 📝 Important Files

| File | Purpose |
|------|---------|
| `src/firebase/config.js` | Firebase configuration and initialization |
| `src/firebase/firestoreService.js` | Firestore database helpers (CRUD operations) |
| `firebase.json` | Firebase hosting and Firestore config |
| `.firebaserc` | Firebase project aliases |
| `firestore.rules` | Firestore security rules |
| `firestore.indexes.json` | Firestore database indexes |

## 🎯 Next Steps After Deployment

1. **Set up custom domain** (optional)
   - Go to Firebase Console → Hosting → Add custom domain
   
2. **Monitor your app**
   - Firebase Console → Analytics
   - Firebase Console → Performance

3. **Add authentication** (if needed)
   - Enable Firebase Authentication
   - Choose sign-in methods (Email/Password, Google, etc.)

4. **Secure your database**
   - Review and update `firestore.rules`
   - Test rules in Firebase Console → Firestore → Rules Playground

## 🚨 Common Issues

**"Permission denied" errors:**
- Check `firestore.rules` - default allows public read, authenticated write
- For testing, you can temporarily use test mode (not recommended for production)

**Build fails:**
- Run `npm run build` to check for errors
- Fix any linting or compilation errors

**Deployment fails:**
- Verify you're logged in: `firebase login`
- Check project ID in `.firebaserc` matches your Firebase project

## 📚 Documentation

- [Complete Firebase Setup Guide](./FIREBASE_SETUP.md)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
