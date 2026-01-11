import { useState } from 'react';
import { migratePageContent } from '../utils/migratePages';
import './DataMigration.css';

const Icons = {
    Rocket: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    Alert: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
};

function PageMigration() {
    const [status, setStatus] = useState('ready'); // ready, migrating, success, error
    const [results, setResults] = useState(null);

    const handleMigrate = async () => {
        setStatus('migrating');
        try {
            const migrationResults = await migratePageContent();
            setResults(migrationResults);
            if (migrationResults.errors.length === 0) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            setResults({ success: [], errors: [{ page: 'general', error: error.message }] });
        }
    };

    return (
        <div className="migration-page">
            <div className="migration-container">
                <div className="migration-header">
                    <h1>📄 Page Content Migration</h1>
                    <p>Migrate Home and Journey page content to Firestore</p>
                </div>

                <div className="migration-content">
                    {status === 'ready' && (
                        <div className="migration-ready">
                            <h2>Ready to Migrate</h2>
                            <p>This will transfer all content from Home and Journey pages to Firestore database.</p>
                            <ul>
                                <li>✅ Home page: Hero, Stats, Features, About, CTA</li>
                                <li>✅ Journey page: Timeline, Testimonials, Milestones, Vision</li>
                            </ul>
                            <button onClick={handleMigrate} className="btn btn-primary btn-lg">
                                <span className="btn-icon"><Icons.Rocket /></span> Start Migration
                            </button>
                        </div>
                    )}

                    {status === 'migrating' && (
                        <div className="migration-progress">
                            <div className="spinner"></div>
                            <h2>Migrating...</h2>
                            <p>Please wait while we transfer the content to Firestore</p>
                        </div>
                    )}

                    {status === 'success' && results && (
                        <div className="migration-success">
                            <div className="success-icon"><Icons.Check /></div>
                            <h2>Migration Complete!</h2>
                            {results.success.map((msg, i) => (
                                <p key={i} className="success-message">✓ {msg}</p>
                            ))}
                            <div className="next-steps">
                                <h3>Next Steps:</h3>
                                <ol>
                                    <li>Visit the Home page to see it loading from Firestore</li>
                                    <li>Visit the Journey page to see it loading from Firestore</li>
                                    <li>Edit content via Firebase Console or wait for admin UI</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {status === 'error' && results && (
                        <div className="migration-error">
                            <div className="error-icon"><Icons.Alert /></div>
                            <h2>Migration Issues</h2>
                            {results.success.length > 0 && (
                                <div>
                                    <h3>Successful:</h3>
                                    {results.success.map((msg, i) => (
                                        <p key={i}>✓ {msg}</p>
                                    ))}
                                </div>
                            )}
                            {results.errors.length > 0 && (
                                <div>
                                    <h3>Errors:</h3>
                                    {results.errors.map((err, i) => (
                                        <p key={i} className="error-message">
                                            ✗ {err.page}: {err.error}
                                        </p>
                                    ))}
                                </div>
                            )}
                            <button onClick={handleMigrate} className="btn btn-primary">
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PageMigration;
