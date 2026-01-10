import './Journey.css';

function Journey() {
    const timeline = [
        {
            year: '2014',
            title: 'Permulaan Yang Sederhana',
            subtitle: 'Humble Beginnings',
            description: 'HCFBTR bermula dengan sebuah kelas kecil Al-Quran di rumah, hanya 8 pelajar. Dengan satu misi: memberikan pendidikan agama yang berkualiti kepada komuniti.',
            icon: '🌱'
        },
        {
            year: '2016',
            title: 'Perluasan Program',
            subtitle: 'Program Expansion',
            description: 'Menambah kelas Bahasa Arab dan Fardhu Ain. Bilangan pelajar berkembang menjadi 50+ dengan bantuan 5 guru sukarelawan yang berdedikasi.',
            icon: '📚'
        },
        {
            year: '2018',
            title: 'Ruang Sendiri',
            subtitle: 'Own Space',
            description: 'Menyewa premis khas untuk kelas. Impian untuk memiliki tempat pembelajaran yang selesa akhirnya tercapai. Pelajar meningkat kepada 150+.',
            icon: '🏫'
        },
        {
            year: '2020',
            title: 'Menghadapi Cabaran',
            subtitle: 'Facing Challenges',
            description: 'Pandemik COVID-19 menguji ketahanan kami. Beralih kepada pembelajaran dalam talian, memastikan tiada pelajar ketinggalan.',
            icon: '💪'
        },
        {
            year: '2022',
            title: 'Bangkit Semula',
            subtitle: 'Rising Again',
            description: 'Kembali dengan lebih kuat. Memperkenalkan program Tahfiz dan bimbingan akademik. Lebih 300 pelajar aktif dan 30+ sukarelawan.',
            icon: '🚀'
        },
        {
            year: '2024',
            title: 'Sedekad Perkhidmatan',
            subtitle: 'A Decade of Service',
            description: 'Meraikan 10 tahun perkhidmatan. Lebih 500 pelajar telah didik. Komitmen kami lebih kuat untuk terus melangkah ke hadapan.',
            icon: '🎉'
        }
    ];

    const testimonials = [
        {
            name: 'Aminah binti Abdullah',
            role: 'Ibu bapa pelajar | Parent',
            quote: 'Alhamdulillah, anak saya belajar banyak di sini. Bukan sahaja ilmu agama, malah akhlak dan adab yang mulia. Terima kasih HCFBTR!',
            image: '👩'
        },
        {
            name: 'Ahmad bin Hassan',
            role: 'Bekas pelajar | Alumni',
            quote: 'Saya belajar di HCFBTR sejak 2015. Pengalaman yang tidak ternilai. Guru-guru yang prihatin dan suasana pembelajaran yang menyeronokkan.',
            image: '👨'
        },
        {
            name: 'Sukarelawan | Volunteer',
            role: 'Guru sukarelawan sejak 2017',
            quote: 'Mengajar di sini bukan sekadar mengajar, tetapi memberi dan menerima. Setiap hari adalah pembelajaran baru dan penuh keberkatan.',
            image: '👨‍🏫'
        }
    ];

    const milestones = [
        { icon: '👨‍🎓', number: '500+', label: 'Pelajar Didik | Students Taught' },
        { icon: '👥', number: '50+', label: 'Sukarelawan | Volunteers' },
        { icon: '📖', number: '15+', label: 'Program Aktif | Active Programs' },
        { icon: '🏆', number: '10', label: 'Tahun Perkhidmatan | Years Serving' }
    ];

    return (
        <div className="journey-page">
            {/* Header */}
            <section className="journey-header">
                <div className="container">
                    <div className="journey-header-content text-center">
                        <h1 className="page-title animate-fade-in">Sedekad & Terus Melangkah</h1>
                        <p className="page-subtitle">A Decade & Moving Forward</p>
                        <p className="journey-intro">
                            Perjalanan kami bukanlah mudah, tetapi setiap langkah penuh dengan pelajaran,
                            keberkatan, dan keazaman untuk terus memberi. Ini adalah kisah kami.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section section">
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">Perjalanan Kami | Our Journey</h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                            >
                                <div className="timeline-content card">
                                    <div className="timeline-icon">{item.icon}</div>
                                    <div className="timeline-year">{item.year}</div>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-subtitle">{item.subtitle}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="milestones-section section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">Pencapaian Kami | Our Achievements</h2>
                    <div className="milestones-grid">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="milestone-card">
                                <div className="milestone-icon">{milestone.icon}</div>
                                <div className="milestone-number">{milestone.number}</div>
                                <div className="milestone-label">{milestone.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section">
                <div className="container">
                    <h2 className="section-title text-center mb-2xl">Suara Mereka | Their Voices</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card card">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <div className="testimonial-author">
                                    <div className="author-image">{testimonial.image}</div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Forward Looking */}
            <section className="forward-section section" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container">
                    <div className="forward-content text-center">
                        <h2 className="forward-title">Terus Melangkah</h2>
                        <p className="forward-subtitle">Moving Forward</p>
                        <p className="forward-description">
                            10 tahun adalah permulaan. Kami berkomitmen untuk terus berkembang, meningkatkan
                            kualiti pengajaran, dan memberi impak yang lebih besar kepada komuniti. Dengan
                            sokongan anda, kami yakin masa depan akan lebih cerah.
                        </p>
                        <div className="forward-vision">
                            <div className="vision-item">
                                <span className="vision-icon">🎯</span>
                                <h4>Visi 2030</h4>
                                <p>1000+ pelajar, 20+ program, premis sendiri</p>
                            </div>
                            <div className="vision-item">
                                <span className="vision-icon">🌍</span>
                                <h4>Impak Komuniti</h4>
                                <p>Menjadi pusat pembelajaran terkemuka</p>
                            </div>
                            <div className="vision-item">
                                <span className="vision-icon">💚</span>
                                <h4>Kerjasama</h4>
                                <p>Jalin hubungan dengan lebih banyak NGO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Journey;
