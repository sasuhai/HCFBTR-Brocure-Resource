#!/bin/bash

# Restore Secure Firestore Rules After Migration
# Run this script after completing the data migration

echo "🔒 Restoring Secure Firestore Rules..."
echo ""

# Backup current rules
cp firestore.rules firestore.rules.backup
echo "✅ Backed up current rules to firestore.rules.backup"

# Restore secure rules
cp firestore.rules.secure firestore.rules
echo "✅ Restored secure rules from firestore.rules.secure"

# Deploy to Firebase
echo ""
echo "📤 Deploying secure rules to Firebase..."
firebase deploy --only firestore:rules

echo ""
echo "✅ Security restored! Your database is now protected."
echo "   - Anyone can READ blog posts and classes"
echo "   - Only authenticated users can WRITE"
echo ""
echo "🎉 Done! Your data is secured."
