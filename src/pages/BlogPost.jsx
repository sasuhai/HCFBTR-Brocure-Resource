import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

// In production, this would fetch from CMS/API
const blogPostsData = {
    'kisah-aminah-hafal-quran': {
        title: 'Kisah Aminah: Dari Tidak Tahu Membaca kepada Hafal 5 Juzuk',
        subtitle: "Aminah's Journey: From Unable to Read to Memorizing 5 Juz",
        date: '2024-12-15',
        author: 'Admin HCFBTR',
        tags: ['kisah pelajar', 'tahfiz', 'inspirasi'],
        image: '📚',
        content: `
<p>Aminah, seorang gadis berusia 12 tahun, datang ke HCFBTR pada tahun 2020 dengan satu impian yang besar tetapi penuh cabaran. Dia tidak tahu membaca Al-Quran dengan betul, tetapi hatinya penuh dengan keinginan untuk menghafal kalimah Allah.</p>

<h2>Permulaan Yang Sukar</h2>
<p>"Pada mulanya, saya rasa macam mustahil. Kawan-kawan semua dah pandai baca, saya sorang je yang lambat," kenang Aminah. Tetapi dengan sokongan ustazah dan kesabaran yang luar biasa, dia tidak pernah putus asa.</p>

<h2>Usaha Yang Berterusan</h2>
<p>Setiap hari, Aminah datang ke kelas dengan semangat yang tinggi. Dia menggunakan setiap masa lapang untuk mengulang bacaan. Ustazah Fatimah, guru tahfiznya, berkongsi: "Aminah adalah contoh terbaik kesungguhan. Walaupun bermula dari sifar, dia tidak pernah lewat atau ponteng kelas."</p>

<p>Dalam masa 6 bulan pertama, Aminah berjaya membaca Al-Quran dengan lancar. Ini adalah pencapaian besar yang membuatkan semua orang bangga. Tetapi dia tidak berhenti di situ.</p>

<h2>Impian Tercapai</h2>
<p>Selepas 3 tahun berusaha, pada tahun 2023, Aminah berjaya menghafal 5 juzuk Al-Quran. Pencapaian ini disambut dengan penuh kegembiraan oleh seluruh komuniti HCFBTR.</p>

<blockquote>
"Allah mudahkan jalan untuk mereka yang berusaha. Saya tidak pernah sangka saya boleh sampai sini. Terima kasih kepada semua ustaz dan ustazah yang tidak pernah putus asa dengan saya." - Aminah
</blockquote>

<h2>Inspirasi Untuk Semua</h2>
<p>Kisah Aminah mengajar kita tentang pentingnya ketekunan, kesabaran, dan kepercayaan kepada diri sendiri. Tiada matlamat yang terlalu tinggi jika kita berusaha dengan ikhlas dan tidak putus asa.</p>

<p>Hari ini, Aminah bukan sahaja seorang pelajar yang cemerlang, tetapi juga membantu rakan-rakannya yang baru belajar membaca Al-Quran. Dia telah menjadi inspirasi kepada ramai pelajar lain di HCFBTR.</p>
    `
    },
    'program-sukarelawan-2024': {
        title: 'Program Sukarelawan 2024: Pengalaman Yang Mengubah Hidup',
        subtitle: '2024 Volunteer Program: A Life-Changing Experience',
        date: '2024-12-01',
        author: 'Ustaz Ahmad',
        tags: ['sukarelawan', 'aktiviti', 'refleksi'],
        image: '🤝',
        content: `
<p>Tahun 2024 menandakan tahun yang paling berimpak dalam program sukarelawan HCFBTR. Dengan lebih 50 sukarelawan aktif, kami telah mencapai banyak kejayaan dan memberi impak yang besar kepada komuniti.</p>

<h2>Memberi Sambil Menerima</h2>
<p>Ramai yang menyertai program sukarelawan dengan niat untuk memberi, tetapi akhirnya mendapati mereka menerima lebih banyak daripada yang mereka beri. Ini adalah pengalaman yang dikongsi oleh hampir semua sukarelawan kami.</p>

<p>"Saya datang untuk mengajar, tetapi saya belajar lebih banyak tentang kesabaran, kasih sayang, dan erti sebenar kebahagiaan," kongsi Siti, salah seorang sukarelawan kami.</p>

<h2>Aktiviti Sepanjang Tahun</h2>
<p>Sepanjang 2024, kami telah menganjurkan pelbagai aktiviti:
- Program mengajar mingguan untuk 6 kelas berbeza
- Kem motivasi untuk pelajar sekolah menengah
- Program bimbingan peperiksaan
- Lawatan sambil belajar ke muzium dan perpustakaan
- Majlis berbuka puasa bersama</p>

<h2>Testimoni Sukarelawan</h2>

<blockquote>
"Mengajar di HCFBTR bukan sekadar tanggungjawab, ia satu keberkatan. Setiap senyuman pelajar adalah hadiah yang tidak ternilai." - Ahmad, Guru Sukarelawan
</blockquote>

<blockquote>
"Saya tidak pernah menyangka bahawa menggunakan weekend untuk sukarelawan boleh memberi kepuasan hidup yang begini besar." - Nurul, Sukarelawan Baharu
</blockquote>

<h2>Jom Sertai Kami!</h2>
<p>Kami sentiasa mencari individu yang bersemangat untuk menyertai pasukan sukarelawan kami. Tidak kira sama ada anda mempunyai 2 jam seminggu atau lebih, sumbangan anda sangat bermakna.</p>

<p>Hubungi kami hari ini untuk mengetahui lebih lanjut tentang bagaimana anda boleh menjadi sebahagian daripada keluarga HCFBTR!</p>
    `
    }
};

function BlogPost() {
    const { slug } = useParams();
    const post = blogPostsData[slug];

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container section">
                    <div className="not-found text-center">
                        <h1>404</h1>
                        <p>Artikel tidak dijumpai | Article not found</p>
                        <Link to="/blog" className="btn btn-primary">
                            Kembali ke Blog | Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <article className="blog-post">
                {/* Header */}
                <header className="post-header">
                    <div className="container">
                        <Link to="/blog" className="back-link">
                            ← Kembali ke Blog
                        </Link>
                        <div className="post-header-content">
                            <div className="post-icon">{post.image}</div>
                            <h1 className="post-header-title">{post.title}</h1>
                            <p className="post-header-subtitle">{post.subtitle}</p>
                            <div className="post-header-meta">
                                <span className="post-date">
                                    {new Date(post.date).toLocaleDateString('ms-MY', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="post-author">oleh {post.author}</span>
                            </div>
                            <div className="post-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="badge">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="post-body">
                    <div className="container">
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>

                {/* Share & Back */}
                <footer className="post-footer">
                    <div className="container">
                        <div className="post-footer-content">
                            <Link to="/blog" className="btn btn-outline">
                                ← Baca Artikel Lain
                            </Link>
                            <div className="share-section">
                                <span>Kongsikan | Share:</span>
                                <button className="share-btn">Facebook</button>
                                <button className="share-btn">Twitter</button>
                                <button className="share-btn">WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default BlogPost;
