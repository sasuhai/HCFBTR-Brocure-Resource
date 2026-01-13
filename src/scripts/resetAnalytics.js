
import { db } from './configForScript.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

async function resetAnalytics() {
    try {
        const querySnapshot = await getDocs(collection(db, 'analytics_daily'));
        const deletePromises = querySnapshot.docs.map(document =>
            deleteDoc(doc(db, 'analytics_daily', document.id))
        );
        await Promise.all(deletePromises);
        console.log('Successfully deleted all daily analytics documents.');
        process.exit(0);
    } catch (error) {
        console.error('Error resetting analytics:', error);
        process.exit(1);
    }
}

resetAnalytics();
