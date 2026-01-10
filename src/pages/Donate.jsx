import './Donate.css';

function Donate() {
    const impactAreas = [
        {
            icon: '📚',
            title: 'Bahan Pembelajaran',
            subtitle: 'Learning Materials',
            description: 'Al-Quran, buku teks, alat tulis, dan bahan rujukan untuk semua pelajar',
            amount: 'RM 50 - RM 500'
        },
        {
            icon: '👨‍🏫',
            title: 'Yuran Guru',
            subtitle: 'Teacher Fees',
            description: 'Elaun untuk guru-guru yang berdedikasi dan berkualiti',
            amount: 'RM 200 - RM 1000'
        },
        {
            icon: '🏫',
            title: 'Sewa Premis',
            subtitle: 'Premises Rental',
            description: 'Kos bulanan untuk ruang pembelajaran yang selesa',
            amount: 'RM 1000+'
        },
        {
            icon: '🎓',
            title: 'Biasiswa Pelajar',
            subtitle: 'Student Scholarships',
            description: 'Bantuan kewangan untuk pelajar yang memerlukan',
            amount: 'RM 100 - RM 500'
        }
    ];

    const donationTiers = [
        {
            name: 'Sahabat',
            subtitle: 'Friend',
            amount: 'RM 30',
            period: 'sebulan | /month',
            benefits: [
                'Membantu 1 pelajar dengan bahan pembelajaran',
                'Laporan impak tahunan',
                'Jemputan ke majlis tahunan'
            ],
            color: 'primary'
        },
        {
            name: 'Penyokong',
            subtitle: 'Supporter',
            amount: 'RM 100',
            period: 'sebulan | /month',
            benefits: [
                'Membantu 3-4 pelajar dengan komprehensif',
                'Laporan impak berkala',
                'Jemputan ke majlis tahunan',
                'Sijil penghargaan'
            ],
            color: 'accent',
            featured: true
        },
        {
            name: 'Juara',
            subtitle: 'Champion',
            amount: 'RM 300',
            period: 'sebulan | /month',
            benefits: [
                'Membantu 10+ pelajar',
                'Laporan impak bulanan',
                'Program sponsorship khusus',
                'Jemputan VIP ke semua acara',
                'Plak penghargaan'
            ],
            color: 'secondary'
        }
    ];

    return (
        <div className="donate-page">
            {/* Header */}
            <section className="donate-header">
                <div className="container">
                    <div className="donate-header-content text-center">
                        <h1 className="page-title">Donate</h1>
                        <p className="page-subtitle">Sumbangan Anda Membawa Perubahan</p>
                        <p className="donate-intro">
                            Setiap ringgit yang anda sumbangkan membantu kami menyediakan pendidikan berkualiti
                            kepada anak-anak yang memerlukan. Bersama-sama, kita membina masa depan yang lebih cerah.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Areas */}
            <section className="impact-areas-section section">
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">
                        Ke Mana Perginya Sumbangan Anda?
                        <span className="section-subtitle" style={{ display: 'block', marginTop: 'var(--space-sm)' }}>
                            Where Does Your Donation Go?
                        </span>
                    </h2>
                    <div className="impact-areas-grid">
                        {impactAreas.map((area, index) => (
                            <div key={index} className="impact-area-card card">
                                <div className="impact-area-icon">{area.icon}</div>
                                <h3 className="impact-area-title">{area.title}</h3>
                                <p className="impact-area-subtitle">{area.subtitle}</p>
                                <p className="impact-area-description">{area.description}</p>
                                <div className="impact-area-amount">{area.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Tiers */}
            <section className="donation-tiers-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">
                        Pilihan Sumbangan Bulanan
                        <span className="section-subtitle" style={{ display: 'block', marginTop: 'var(--space-sm)' }}>
                            Monthly Donation Options
                        </span>
                    </h2>
                    <div className="donation-tiers-grid">
                        {donationTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`donation-tier-card card tier-${tier.color} ${tier.featured ? 'featured' : ''}`}
                            >
                                {tier.featured && <div className="tier-badge">Popular</div>}
                                <div className="tier-header">
                                    <h3 className="tier-name">{tier.name}</h3>
                                    <p className="tier-subtitle">{tier.subtitle}</p>
                                    <div className="tier-amount">{tier.amount}</div>
                                    <div className="tier-period">{tier.period}</div>
                                </div>
                                <ul className="tier-benefits">
                                    {tier.benefits.map((benefit, idx) => (
                                        <li key={idx}>✓ {benefit}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary btn-lg tier-button">
                                    Pilih Pelan Ini | Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* One-Time Donation */}
            <section className="onetime-section section">
                <div className="container">
                    <div className="onetime-card card">
                        <h2 className="onetime-title">Sumbangan Sekali Sahaja</h2>
                        <p className="onetime-subtitle">One-Time Donation</p>
                        <p className="onetime-description">
                            Tidak mahu komitmen bulanan? Anda boleh membuat sumbangan sekali sahaja
                            dengan jumlah mengikut kemampuan anda.
                        </p>
                        <div className="onetime-amounts">
                            <button className="amount-btn">RM 50</button>
                            <button className="amount-btn">RM 100</button>
                            <button className="amount-btn">RM 200</button>
                            <button className="amount-btn">RM 500</button>
                            <button className="amount-btn">Lain-lain | Custom</button>
                        </div>
                        <button className="btn btn-primary btn-lg mt-xl">
                            Derma Sekarang | Donate Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="trust-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">Komitmen Kami</h2>
                    <div className="trust-grid">
                        <div className="trust-item">
                            <div className="trust-icon">🔒</div>
                            <h3>100% Selamat</h3>
                            <p>Secure Payment</p>
                            <p className="trust-description">Transaksi anda dilindungi dengan enkripsi terkini</p>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon">📊</div>
                            <h3>Telus & Akauntabel</h3>
                            <p>Transparent & Accountable</p>
                            <p className="trust-description">Laporan penggunaan dana secara terperinci</p>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon">🎯</div>
                            <h3>Impak Nyata</h3>
                            <p>Real Impact</p>
                            <p className="trust-description">Setiap ringgit terus kepada program kami</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="contact-donate-section section">
                <div className="container">
                    <div className="contact-donate-card">
                        <h2>Ada Soalan?</h2>
                        <p className="contact-subtitle">Have Questions?</p>
                        <p>Kami sedia membantu. Hubungi kami untuk maklumat lanjut mengenai cara menyumbang atau impak sumbangan anda.</p>
                        <div className="contact-info">
                            <p>📧 donations@hcfbtr.org</p>
                            <p>📱 +60 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donate;
