import { useState } from 'react';
import './Volunteer.css';

function Volunteer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        availability: '',
        experience: '',
        message: ''
    });

    const opportunities = [
        {
            icon: '👨‍🏫',
            title: 'Guru Kelas',
            subtitle: 'Class Teacher',
            description: 'Mengajar kelas Al-Quran, Bahasa Arab, atau subjek akademik',
            commitment: '4-6 jam seminggu',
            requirements: ['Pengetahuan dalam bidang berkaitan', 'Kesabaran & dedikasi', 'Komitmen minimum 3 bulan']
        },
        {
            icon: '🎨',
            title: 'Fasilitator Aktiviti',
            subtitle: 'Activity Facilitator',
            description: 'Mengendalikan aktiviti kokurikulum, sukan, dan program khas',
            commitment: '2-4 jam seminggu',
            requirements: ['Kreatif & energetik', 'Suka bekerja dengan kanak-kanak', 'Kemahiran dalam bidang tertentu (seni, sukan, dll)']
        },
        {
            icon: '💻',
            title: 'Sokongan Pentadbiran',
            subtitle: 'Administrative Support',
            description: 'Membantu dalam pengurusan, dokumentasi, dan komunikasi',
            commitment: '3-5 jam seminggu',
            requirements: ['Kemahiran komputer asas', 'Teratur & teliti', 'Boleh bekerja dari rumah']
        },
        {
            icon: '📱',
            title: 'Media & Komunikasi',
            subtitle: 'Media & Communications',
            description: 'Menguruskan media sosial, membuat konten, dan dokumentasi',
            commitment: '3-4 jam seminggu',
            requirements: ['Kemahiran fotografi/videografi', 'Kreatif dalam konten', 'Familiar dengan media sosial']
        },
        {
            icon: '🤝',
            title: 'Mentor Pelajar',
            subtitle: 'Student Mentor',
            description: 'Membimbing pelajar secara peribadi, motivasi dan sokongan emosi',
            commitment: '2-3 jam seminggu',
            requirements: ['Empati & kemahiran komunikasi', 'Matang & bertanggungjawab', 'Komitmen jangka panjang']
        },
        {
            icon: '🎪',
            title: 'Penganjur Acara',
            subtitle: 'Event Organizer',
            description: 'Merancang dan melaksanakan program khas dan acara tahunan',
            commitment: 'Fleksibel mengikut acara',
            requirements: ['Kemahiran pengurusan projek', 'Kreatif & proaktif', 'Boleh bekerja dalam pasukan']
        }
    ];

    const benefits = [
        '✨ Pengalaman berharga dalam pendidikan dan pembangunan komuniti',
        '🤝 Berjumpa dan berjejaring dengan individu yang bersemangat',
        '📜 Sijil penghargaan dan surat rujukan',
        '🎓 Peluang pembelajaran dan pembangunan kemahiran',
        '💚 Kepuasan dalaman memberi impak positif',
        '🎉 Jemputan ke acara dan majlis khas'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send data to backend/API
        alert('Terima kasih! Kami akan menghubungi anda tidak lama lagi.\nThank you! We will contact you soon.');
        console.log('Form data:', formData);
    };

    return (
        <div className="volunteer-page">
            {/* Header */}
            <section className="volunteer-header">
                <div className="container">
                    <div className="volunteer-header-content text-center">
                        <h1 className="page-title">Volunteer</h1>
                        <p className="page-subtitle">Jadilah Sebahagian Daripada Perubahan</p>
                        <p className="volunteer-intro">
                            Sertai kami dalam memberi impak positif kepada generasi masa depan.
                            Masa dan kepakaran anda boleh mengubah hidup ratusan pelajar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Opportunities */}
            <section className="opportunities-section section">
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">
                        Peluang Sukarelawan
                        <span className="section-subtitle" style={{ display: 'block', marginTop: 'var(--space-sm)' }}>
                            Volunteer Opportunities
                        </span>
                    </h2>
                    <div className="opportunities-grid">
                        {opportunities.map((opp, index) => (
                            <div key={index} className="opportunity-card card">
                                <div className="opportunity-icon">{opp.icon}</div>
                                <h3 className="opportunity-title">{opp.title}</h3>
                                <p className="opportunity-subtitle">{opp.subtitle}</p>
                                <p className="opportunity-description">{opp.description}</p>
                                <div className="opportunity-commitment">
                                    <strong>Komitmen:</strong> {opp.commitment}
                                </div>
                                <div className="opportunity-requirements">
                                    <strong>Keperluan:</strong>
                                    <ul>
                                        {opp.requirements.map((req, idx) => (
                                            <li key={idx}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="benefits-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">
                        Manfaat Menjadi Sukarelawan
                        <span className="section-subtitle" style={{ display: 'block', marginTop: 'var(--space-sm)' }}>
                            Benefits of Volunteering
                        </span>
                    </h2>
                    <div className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <span className="benefit-text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="form-section section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header text-center">
                            <h2 className="form-title">Daftar Minat Anda</h2>
                            <p className="form-subtitle">Register Your Interest</p>
                            <p className="form-description">
                                Sila isi borang di bawah dan kami akan menghubungi anda untuk perbincangan lanjut.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="volunteer-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nama Penuh | Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nama anda"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">No. Telefon | Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+60123456789"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">Bidang Minat | Area of Interest *</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Pilih bidang | Select area</option>
                                        <option value="teaching">Guru Kelas | Teaching</option>
                                        <option value="activity">Fasilitator Aktiviti | Activities</option>
                                        <option value="admin">Pentadbiran | Admin</option>
                                        <option value="media">Media & Komunikasi | Media</option>
                                        <option value="mentor">Mentor Pelajar | Mentoring</option>
                                        <option value="events">Penganjur Acara | Events</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="availability">Ketersediaan | Availability *</label>
                                <input
                                    type="text"
                                    id="availability"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contoh: Setiap Sabtu pagi, Selasa petang"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="experience">Pengalaman Berkaitan | Relevant Experience</label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Kongsi pengalaman atau kemahiran yang berkaitan..."
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesej Tambahan | Additional Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Apa yang memotivasi anda untuk menjadi sukarelawan?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg form-submit">
                                Hantar Permohonan | Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="volunteer-testimonial-section section" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container">
                    <div className="volunteer-testimonial text-center">
                        <div className="testimonial-quote-large">"</div>
                        <blockquote className="testimonial-text">
                            Menjadi sukarelawan di HCFBTR adalah antara keputusan terbaik dalam hidup saya.
                            Saya datang untuk mengajar, tetapi saya belajar lebih banyak tentang kesabaran,
                            kasih sayang, dan erti sebenar memberi. Setiap senyuman pelajar adalah hadiah yang tidak ternilai.
                        </blockquote>
                        <div className="testimonial-author-large">
                            <div className="author-name-large">Ahmad bin Hassan</div>
                            <div className="author-role-large">Guru Sukarelawan sejak 2019 | Volunteer Teacher since 2019</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Volunteer;
