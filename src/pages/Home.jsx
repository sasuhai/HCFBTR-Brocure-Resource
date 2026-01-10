import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const impactStats = [
        { number: '10+', label: 'Tahun Perkhidmatan', sublabel: 'Years of Service' },
        { number: '500+', label: 'Pelajar Dibimbing', sublabel: 'Students Guided' },
        { number: '50+', label: 'Sukarelawan Aktif', sublabel: 'Active Volunteers' },
        { number: '15+', label: 'Program & Kelas', sublabel: 'Programs & Classes' }
    ];

    const features = [
        {
            icon: '📚',
            title: 'Pendidikan Berkualiti',
            subtitle: 'Quality Education',
            description: 'Kami menyediakan program pembelajaran yang komprehensif dan berkesan untuk semua peringkat.'
        },
        {
            icon: '🤝',
            title: 'Komuniti Penyayang',
            subtitle: 'Caring Community',
            description: 'Suasana pembelajaran yang mesra, menyokong, dan menggalakkan pertumbuhan bersama.'
        },
        {
            icon: '💡',
            title: 'Bimbingan Berpengalaman',
            subtitle: 'Experienced Mentorship',
            description: 'Guru-guru berdedikasi yang komited untuk melihat setiap pelajar berjaya.'
        },
        {
            icon: '🌱',
            title: 'Pembangunan Holistik',
            subtitle: 'Holistic Development',
            description: 'Fokus pada pengembangan akademik, rohani, dan sahsiah para pelajar.'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content animate-fade-in-up">
                        <h1 className="hero-title">
                            Membina Generasi Masa Depan
                            <span className="hero-subtitle">Building Tomorrow's Generation</span>
                        </h1>
                        <p className="hero-description">
                            HCFBTR telah membimbing ratusan pelajar selama lebih sedekad,
                            menyediakan pendidikan berkualiti dan nilai-nilai murni untuk
                            membina pemimpin masa depan yang berintegriti.
                        </p>
                        <div className="hero-cta">
                            <Link to="/donate" className="btn btn-primary btn-lg">
                                <span>💝</span> Donate Now
                            </Link>
                            <Link to="/volunteer" className="btn btn-outline btn-lg hero-btn-outline">
                                <span>🙋</span> Volunteer With Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="impact-section section-sm">
                <div className="container">
                    <div className="impact-grid">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="impact-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                            <h2 className="section-title">Tentang HCFBTR</h2>
                            <p className="section-subtitle">About Us</p>
                            <p>
                                HCFBTR adalah sebuah organisasi pendidikan yang berdedikasi untuk
                                membina dan membimbing generasi muda. Sejak sedekad yang lalu, kami
                                telah menyediakan pelbagai program pembelajaran yang berkualiti dan
                                berkesan.
                            </p>
                            <p>
                                Dengan pasukan guru yang berpengalaman dan sukarelawan yang komited,
                                kami terus berusaha untuk memberikan impak positif kepada komuniti
                                melalui pendidikan yang holistik dan berintegriti.
                            </p>
                            <Link to="/journey" className="btn btn-secondary mt-lg">
                                Baca Perjalanan Kami <span>→</span>
                            </Link>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder">
                                <span className="placeholder-icon">📖</span>
                                <p>Image: Students in classroom learning together</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Mengapa Pilih Kami</h2>
                        <p className="section-subtitle">Why Choose Us</p>
                        <p className="section-description">
                            Kami komited untuk menyediakan pengalaman pembelajaran terbaik
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
                            <h2 className="cta-title">Sertai Kami Dalam Membina Masa Depan</h2>
                            <p className="cta-subtitle">Join Us in Building the Future</p>
                            <p className="cta-description">
                                Setiap sumbangan dan sumbangan masa anda membawa perubahan besar
                                dalam kehidupan para pelajar kami.
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
