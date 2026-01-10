import './Classes.css';

function Classes() {
    const classes = [
        {
            title: 'Kelas Al-Quran',
            subtitle: 'Quran Classes',
            objective: 'Mengajar bacaan dan tafsir Al-Quran dengan betul',
            audience: 'Kanak-kanak & Dewasa',
            schedule: 'Setiap hari | Daily',
            icon: '📖',
            color: 'primary'
        },
        {
            title: 'Kelas Bahasa Arab',
            subtitle: 'Arabic Language',
            objective: 'Pembelajaran asas bahasa Arab untuk komunikasi dan kefahaman',
            audience: 'Remaja & Dewasa',
            schedule: 'Selasa & Khamis | Tue & Thu',
            icon: '🔤',
            color: 'secondary'
        },
        {
            title: 'Kelas Fardhu Ain',
            subtitle: 'Islamic Essential Studies',
            objective: 'Mempelajari ilmu fardhu ain yang wajib diketahui setiap Muslim',
            audience: 'Semua peringkat umur',
            schedule: 'Ahad | Sunday',
            icon: '🕌',
            color: 'primary'
        },
        {
            title: 'Kelas Tahfiz',
            subtitle: 'Quran Memorization',
            objective: 'Program hafazan Al-Quran yang sistematik dan berkesan',
            audience: 'Kanak-kanak 7-15 tahun',
            schedule: 'Isnin - Jumaat | Mon - Fri',
            icon: '📚',
            color: 'accent'
        },
        {
            title: 'Kelas Adab & Akhlak',
            subtitle: 'Manners & Character',
            objective: 'Membina sahsiah mulia melalui pembelajaran adab dan akhlak',
            audience: 'Kanak-kanak & Remaja',
            schedule: 'Sabtu | Saturday',
            icon: '🌟',
            color: 'secondary'
        },
        {
            title: 'Bimbingan Akademik',
            subtitle: 'Academic Tutoring',
            objective: 'Sokongan pembelajaran untuk subjek sekolah',
            audience: 'Pelajar sekolah rendah & menengah',
            schedule: 'Setiap hari | Daily (petang)',
            icon: '✏️',
            color: 'accent'
        }
    ];

    return (
        <div className="classes-page">
            {/* Header */}
            <section className="classes-header section-sm">
                <div className="container">
                    <div className="page-header text-center">
                        <h1 className="page-title">Kelas & Program Kami</h1>
                        <p className="page-subtitle">Our Classes & Programs</p>
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
                    <div className="classes-grid">
                        {classes.map((classItem, index) => (
                            <div
                                key={index}
                                className={`class-card card animate-fade-in`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`class-icon class-icon-${classItem.color}`}>
                                    {classItem.icon}
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
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="info-content">
                        <div className="info-card card">
                            <div className="info-icon">ℹ️</div>
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
                            <div className="info-icon">💰</div>
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
                            <div className="info-icon">⏰</div>
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
