import { useState, useEffect } from 'react';
import { getAllDocuments } from '../firebase/firestoreService';
import './Classes.css';

const Icons = {
    Info: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
    DollarSign: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    Clock: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    Book: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
};

const getClassIcon = (icon) => {
    // If icon is likely an emoji or missing, return standard icon
    if (!icon || icon.length < 10) return <Icons.Book />;
    return icon;
};

function Classes() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch classes from Firestore
    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        try {
            setLoading(true);
            const classesData = await getAllDocuments('classes');
            setClasses(classesData);
            setError(null);
        } catch (err) {
            console.error('Error loading classes:', err);
            setError('Gagal memuatkan maklumat kelas. Sila cuba sebentar lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="classes-page">
            {/* Header */}
            <section className="classes-header section-sm">
                <div className="container">
                    <div className="page-header text-center">
                        <h1 className="page-title">Kelas bimbingan Mualaf</h1>
                        <p className="page-subtitle">Mualaf Guidance Classes</p>
                        <p className="page-description">
                            Kami menawarkan pelbagai program pembelajaran yang direka untuk memenuhi
                            keperluan pelajar dari semua peringkat umur. Setiap kelas dijalankan oleh
                            pengajar yang berpengalaman dan berdedikasi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="classes-section section">
                <div className="container">
                    {/* Loading State */}
                    {loading && (
                        <div className="text-center" style={{ padding: '3rem' }}>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                                📚 Memuatkan maklumat kelas... | Loading classes...
                            </p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="text-center" style={{ padding: '3rem' }}>
                            <p style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>
                                {error}
                            </p>
                            <button onClick={loadClasses} className="btn btn-primary">
                                Cuba Lagi | Try Again
                            </button>
                        </div>
                    )}

                    {/* No Classes */}
                    {!loading && !error && classes.length === 0 && (
                        <div className="text-center" style={{ padding: '3rem' }}>
                            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                                📝 Belum ada kelas yang tersedia.
                            </p>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                No classes are available at the moment.
                            </p>
                        </div>
                    )}

                    {/* Classes Grid */}
                    {!loading && !error && classes.length > 0 && (
                        <div className="classes-grid">{classes.map((classItem, index) => (
                            <div
                                key={index}
                                className={`class-card card animate-fade-in`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`class-icon class-icon-${classItem.color || 'primary'}`}>
                                    {getClassIcon(classItem.icon)}
                                </div>
                                <h3 className="class-title">{classItem.title}</h3>
                                <p className="class-subtitle">{classItem.subtitle}</p>

                                <div className="class-details">
                                    <div className="class-detail">
                                        <span className="detail-label">Objektif | Objective:</span>
                                        <p className="detail-value">{classItem.objective}</p>
                                    </div>

                                    <div className="class-detail">
                                        <span className="detail-label">Sasaran | Audience:</span>
                                        <p className="detail-value">{classItem.audience}</p>
                                    </div>

                                    <div className="class-detail">
                                        <span className="detail-label">Jadual | Schedule:</span>
                                        <p className="detail-value">{classItem.schedule}</p>
                                    </div>
                                </div>

                                <button className="btn btn-outline btn-sm class-btn">
                                    Daftar Minat | Register Interest
                                </button>
                            </div>
                        ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="info-content">
                        <div className="info-card card">
                            <div className="info-icon"><Icons.Info /></div>
                            <h3>Maklumat Pendaftaran</h3>
                            <p className="info-subtitle">Registration Information</p>
                            <p>
                                Untuk mendaftar atau mendapatkan maklumat lanjut mengenai mana-mana kelas,
                                sila hubungi kami melalui email atau telefon. Kami akan dengan senang hati
                                membantu anda.
                            </p>
                            <div className="info-contact">
                                <p><strong>Email:</strong> info@hcfbtr.org</p>
                                <p><strong>Telefon:</strong> +60 123 456 7890</p>
                            </div>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon"><Icons.DollarSign /></div>
                            <h3>Yuran & Bayaran</h3>
                            <p className="info-subtitle">Fees & Payment</p>
                            <p>
                                Semua kelas kami ditawarkan secara percuma atau dengan yuran yang sangat
                                minimum. Kami percaya pendidikan berkualiti harus boleh diakses oleh semua.
                            </p>
                            <p className="info-highlight">
                                <strong>Tiada seorang pun akan ditolak kerana ketidakmampuan membayar.</strong>
                            </p>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon"><Icons.Clock /></div>
                            <h3>Waktu Operasi</h3>
                            <p className="info-subtitle">Operating Hours</p>
                            <p>
                                Kelas dijalankan sepanjang minggu dengan jadual yang fleksibel untuk
                                memudahkan pelajar.
                            </p>
                            <p><strong>Pagi:</strong> 9:00 AM - 12:00 PM</p>
                            <p><strong>Petang:</strong> 2:00 PM - 5:00 PM</p>
                            <p><strong>Malam:</strong> 7:00 PM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Classes;
