import { useState, useEffect } from 'react';
import { getAllDocuments, getDocument } from '../firebase/firestoreService';
import { useOrganization } from '../context/OrganizationContext';
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

const Classes = () => {
    // State
    const { orgData } = useOrganization();
    const [pageContent, setPageContent] = useState(null);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // 1. Fetch Classes List
                const classesData = await getAllDocuments('classes');
                setClasses(classesData);

                // 2. Fetch Page Content
                const doc = await getDocument('pages', 'classes');
                if (doc) {
                    setPageContent(doc);
                }
            } catch (err) {
                console.error('Error loading data:', err);
                setError('Gagal memuatkan maklumat. Sila cuba sebentar lagi.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Default content generator
    const getDefaultContent = () => ({
        header: {
            title: "Kelas bimbingan Mualaf",
            subtitle: "Mualaf Guidance Classes",
            description: "Kami menawarkan pelbagai program pembelajaran yang direka untuk memenuhi keperluan pelajar dari semua peringkat umur. Setiap kelas dijalankan oleh pengajar yang berpengalaman dan berdedikasi."
        },
        infoSection: {
            registration: {
                title: "Maklumat Pendaftaran",
                subtitle: "Registration Information",
                description: "Untuk mendaftar atau mendapatkan maklumat lanjut mengenai mana-mana kelas, sila hubungi kami melalui email atau telefon. Kami akan dengan senang hati membantu anda.",
                emailLabel: "Email",
                phoneLabel: "Telefon"
            },
            fees: {
                title: "Yuran & Bayaran",
                subtitle: "Fees & Payment",
                description: "Semua kelas kami ditawarkan secara percuma atau dengan yuran yang sangat minimum. Kami percaya pendidikan berkualiti harus boleh diakses oleh semua.",
                highlight: "Tiada seorang pun akan ditolak kerana ketidakmampuan membayar."
            },
            hours: {
                title: "Waktu Operasi",
                subtitle: "Operating Hours",
                description: "Kelas dijalankan sepanjang minggu dengan jadual yang fleksibel untuk memudahkan pelajar.",
                morning: "Pagi: 9:00 AM - 12:00 PM",
                afternoon: "Petang: 2:00 PM - 5:00 PM",
                night: "Malam: 7:00 PM - 9:00 PM"
            }
        }
    });

    // Content Merging Logic
    const defaultContent = getDefaultContent();
    const c = {
        header: {
            title: pageContent?.header?.title || defaultContent.header.title,
            subtitle: pageContent?.header?.subtitle || defaultContent.header.subtitle,
            description: pageContent?.header?.description || defaultContent.header.description
        },
        infoSection: {
            registration: { ...defaultContent.infoSection.registration, ...(pageContent?.infoSection?.registration || {}) },
            fees: { ...defaultContent.infoSection.fees, ...(pageContent?.infoSection?.fees || {}) },
            hours: { ...defaultContent.infoSection.hours, ...(pageContent?.infoSection?.hours || {}) }
        }
    };

    console.log('Classes Page State:', { loading, error, classesCount: classes.length, pageContent });

    // HTML Safety
    const safeHtml = (html) => ({ __html: html || '' });

    if (error) {
        return (
            <div className="text-center" style={{ padding: '3rem' }}>
                <p style={{ color: 'var(--color-error)' }}>{error}</p>
                <button onClick={() => window.location.reload()} className="btn btn-primary">Try Again</button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="text-center" style={{ padding: '3rem' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>📚 Memuatkan kelas...</p>
            </div>
        );
    }

    return (
        <div className="classes-page">
            {/* Header */}
            <section className="classes-header section-sm">
                <div className="container">
                    <div className="page-header text-center">
                        <h1 className="page-title">{c.header.title}</h1>
                        <p className="page-subtitle">{c.header.subtitle}</p>
                        <p className="page-description" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(c.header.description)}></p>
                    </div>
                </div>
            </section>

            {/* Classes List */}
            <section className="classes-section section">
                <div className="container">
                    {classes.length === 0 ? (
                        <div className="text-center" style={{ padding: '3rem' }}>
                            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📝 Belum ada kelas yang tersedia.</p>
                            <p style={{ color: 'var(--color-text-secondary)' }}>No classes are available at the moment.</p>
                        </div>
                    ) : (
                        <div className="classes-grid">
                            {classes.map((classItem, index) => (
                                <div key={index} className="class-card card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className={`class-icon class-icon-${classItem.color || 'primary'}`}>
                                        {getClassIcon(classItem.icon)}
                                    </div>
                                    <h3 className="class-title">{classItem.title}</h3>
                                    <p className="class-subtitle">{classItem.subtitle}</p>

                                    <div className="class-details">
                                        <div className="class-detail">
                                            <span className="detail-label">Objektif:</span>
                                            <p className="detail-value" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(classItem.objective)}></p>
                                        </div>
                                        {classItem.audience && (
                                            <div className="class-detail">
                                                <span className="detail-label">Sasaran:</span>
                                                <p className="detail-value">{classItem.audience}</p>
                                            </div>
                                        )}
                                        {classItem.schedule && (
                                            <div className="class-detail">
                                                <span className="detail-label">Jadual:</span>
                                                <p className="detail-value">{classItem.schedule}</p>
                                            </div>
                                        )}
                                    </div>
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
                        {/* Registration Card */}
                        <div className="info-card card">
                            <div className="info-icon"><Icons.Info /></div>
                            <h3>{c.infoSection.registration.title}</h3>
                            <p className="info-subtitle">{c.infoSection.registration.subtitle}</p>
                            <p style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(c.infoSection.registration.description)}></p>
                            <div className="info-contact">
                                <p><strong>{c.infoSection.registration.emailLabel}:</strong> {orgData?.email || 'info@hcfbtr.org'}</p>
                                <p><strong>{c.infoSection.registration.phoneLabel}:</strong> {Array.isArray(orgData?.phone) ? orgData.phone.join(', ') : (orgData?.phone || '+60 123 456 7890')}</p>
                            </div>
                        </div>

                        {/* Fees Card */}
                        <div className="info-card card">
                            <div className="info-icon"><Icons.DollarSign /></div>
                            <h3>{c.infoSection.fees.title}</h3>
                            <p className="info-subtitle">{c.infoSection.fees.subtitle}</p>
                            <p style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(c.infoSection.fees.description)}></p>
                            <p className="info-highlight" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(`<strong>${c.infoSection.fees.highlight}</strong>`)}></p>
                        </div>

                        {/* Hours Card */}
                        <div className="info-card card">
                            <div className="info-icon"><Icons.Clock /></div>
                            <h3>{c.infoSection.hours.title}</h3>
                            <p className="info-subtitle">{c.infoSection.hours.subtitle}</p>
                            <p style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={safeHtml(c.infoSection.hours.description)}></p>
                            <p>{c.infoSection.hours.morning}</p>
                            <p>{c.infoSection.hours.afternoon}</p>
                            <p>{c.infoSection.hours.night}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Classes;
