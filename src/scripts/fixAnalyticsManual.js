
import { db } from './configForScript.js';
import { doc, setDoc } from 'firebase/firestore';

async function fix() {
    try {
        const today = new Date().toISOString().split('T')[0];
        // Force active users to 1 explicitly for today
        await setDoc(doc(db, 'analytics_daily', today), {
            dailyActiveUsers: 1
        }, { merge: true });
        console.log(`Successfully forced dailyActiveUsers to 1 for ${today}`);
        process.exit(0);
    } catch (error) {
        console.error('Error fixing analytics:', error);
        process.exit(1);
    }
}

fix();
