import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocument } from '../firebase/firestoreService';
import './Home.css';

// Simple Icons
const Icons = {
    Heart: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    ),
    Hand: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></svg>
    ),
    Book: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
    ),
    Users: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    Star: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    ),
    Leaf: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
    )
};

function Home() {
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPageContent();
    }, []);

    const loadPageContent = async () => {
        try {
            const content = await getDocument('pages', 'home');
            if (content) {
                setPageContent(content);
            } else {
                // Fallback to default content if not in Firestore
                setPageContent(getDefaultContent());
            }
        } catch (err) {
            console.error('Error loading home page content:', err);
            setError(err.message);
            setPageContent(getDefaultContent());
        } finally {
            setLoading(false);
        }
    };

    const getDefaultContent = () => ({
        hero: {
            title: "",
            subtitle: "",
            description: ""
        },
        impactStats: [],
        about: {
            title: "",
            subtitle: "",
            paragraph1: "",
            paragraph2: ""
        },
        features: [],
        whyChooseUs: {
            title: "",
            subtitle: "",
            description: ""
        },
        cta: {
            title: "",
            subtitle: "",
            description: ""
        }
    });

    // Loading check
    if (loading) return <div className="loading-spinner">Loading...</div>;

    if (error && !pageContent) {
        return (
            <div className="home-page">
                <div className="error-state">
                    <p>Error loading content: {error}</p>
                    <p>Using default content...</p>
                </div>
            </div>
        );
    }

    // Use content from Firestore or fall back to default
    const defaultContent = getDefaultContent(); // Get default content once
    const hero = pageContent?.hero || defaultContent.hero;
    const impactStats = pageContent?.impactStats || defaultContent.impactStats;
    const about = pageContent?.about || defaultContent.about;
    const features = pageContent?.features || defaultContent.features;
    const whyChooseUs = pageContent?.whyChooseUs || defaultContent.whyChooseUs; // Added this line
    const cta = pageContent?.cta || defaultContent.cta;

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">
                        <span>{hero.title.split(' ').slice(0, -2).join(' ')}</span>
                        <span className="text-gradient">{hero.title.split(' ').slice(-2).join(' ')}</span>
                    </h1>
                    <p className="hero-subtitle">{hero.subtitle}</p>
                    <p className="hero-description">{hero.description}</p>
                    <div className="hero-cta">
                        <Link to="/donate" className="btn btn-primary btn-lg shine-effect">
                            {/* Assuming hero.ctaPrimary and hero.ctaSecondary are part of the default content now */}
                            <span className="btn-icon"><Icons.Heart /></span> Donate Now
                        </Link>
                        <Link to="/volunteer" className="btn btn-outline btn-lg hero-btn-outline">
                            <span className="btn-icon"><Icons.Hand /></span> Volunteer With Us
                        </Link>
                    </div>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="impact-section section">
                <div className="container">
                    <div className="impact-grid">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="impact-card">
                                <div className="impact-number">{stat.number}</div>
                                <div className="impact-label">{stat.label}</div>
                                <div className="impact-sublabel">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">{about.title}</h2>
                            <p className="section-subtitle">{about.subtitle}</p>
                            <p>{about.paragraph1}</p>
                            <p>{about.paragraph2}</p>
                            <Link to="/journey" className="btn btn-secondary mt-lg">
                                Baca Perjalanan Kami <span>→</span>
                            </Link>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder" style={{ backgroundImage: 'url(/images/about-students.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Feed Section (Facebook) */}
            <section className="social-section section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="section-header text-center mb-2xl">
                        <span className="badge-pill mb-sm">Sosial Media</span>
                        <h2 className="section-title">Ikuti Perkembangan Kami</h2>
                        <p className="section-subtitle">Latest Updates @ HCF.btr</p>
                    </div>

                    <div className="social-feed-wrapper">
                        {/* Facebook Page Plugin Iframe (Reliable Method) */}
                        <div className="fb-feed-container card" style={{ padding: '0', overflow: 'hidden', minHeight: '500px', height: '800px', position: 'relative' }}>
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHCF.btr&tabs=timeline%2Cevents&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="100%"
                                height="100%"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="HCF BTR Facebook Feed"
                            ></iframe>
                        </div>

                        {/* Side Panel: Connect & info */}
                        <div className="social-side-panel">
                            {/* Connect Card */}
                            <div className="social-connect-card">
                                <div className="connect-content">
                                    <div className="fb-logo-large">f</div>
                                    <h3>HCF BTR</h3>
                                    <p>Komuniti Sokongan Mualaf & Asnaf</p>
                                    <div className="fb-stats">
                                        <div><strong>Official</strong> Page</div>
                                        <div><strong>Live</strong> Updates</div>
                                    </div>
                                    <a href="https://www.facebook.com/HCF.btr" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                        Visit Page
                                    </a>
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="info-card mt-lg" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>📢 Stay Updated</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                    Follow our page to get notifications about upcoming events, donation drives, and community stories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">{whyChooseUs.title}</h2>
                        <p className="section-subtitle">{whyChooseUs.subtitle}</p>
                        <p className="section-description">
                            {whyChooseUs.description}
                        </p>
                    </div>
                    <div className="features-grid grid grid-2">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-subtitle">{feature.subtitle}</p>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 className="cta-title">{cta.title}</h2>
                            <p className="cta-subtitle">{cta.subtitle}</p>
                            <p className="cta-description">
                                {cta.description}
                            </p>
                            <div className="cta-buttons">
                                <Link to="/donate" className="btn btn-primary btn-lg">
                                    Support Our Mission
                                </Link>
                                <Link to="/classes" className="btn btn-outline btn-lg">
                                    Explore Classes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
