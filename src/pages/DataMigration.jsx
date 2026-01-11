import { useState } from 'react';
import { createDocument } from '../firebase/firestoreService';
import './DataMigration.css';

const Icons = {
    Rocket: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    Fire: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.243-2.188.7-3.128a10.027 10.027 0 0 1 2.8 2.628z" /></svg>,
    Clipboard: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>,
    Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    Alert: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
};

// Original hardcoded data
const originalBlogPosts = [
    {
        slug: 'kisah-aminah-hafal-quran',
        title: 'Kisah Aminah: Dari Tidak Tahu Membaca kepada Hafal 5 Juzuk',
        subtitle: "Aminah's Journey: From Unable to Read to Memorizing 5 Juz",
        excerpt: 'Perjalanan inspiratif seorang pelajar yang gigih mengejar cita-cita untuk menghafal Al-Quran...',
        date: '2024-12-15',
        author: 'Admin HCFBTR',
        tags: ['kisah pelajar', 'tahfiz', 'inspirasi'],

        image: '/images/about-students.png',
        featured: true,
        published: true,
        content: `<p>Aminah, seorang gadis berusia 12 tahun, datang ke HCFBTR pada tahun 2020 dengan satu impian yang besar tetapi penuh cabaran. Dia tidak tahu membaca Al-Quran dengan betul, tetapi hatinya penuh dengan keinginan untuk menghafal kalimah Allah.</p>

<h2>Permulaan Yang Sukar</h2>
<p>"Pada mulanya, saya rasa macam mustahil. Kawan-kawan semua dah pandai baca, saya sorang je yang lambat," kenang Aminah. Tetapi dengan sokongan ustazah dan kesabaran yang luar biasa, dia tidak pernah putus asa.</p>

<h2>Usaha Yang Berterusan</h2>
<p>Setiap hari, Aminah datang ke kelas dengan semangat yang tinggi. Dia menggunakan setiap masa lapang untuk mengulang bacaan. Ustazah Fatimah, guru tahfiznya, berkongsi: "Aminah adalah contoh terbaik kesungguhan. Walaupun bermula dari sifar, dia tidak pernah lewat atau ponteng kelas."</p>

<p>Dalam masa 6 bulan pertama, Aminah berjaya membaca Al-Quran dengan lancar. Ini adalah pencapaian besar yang membuatkan semua orang bangga. Tetapi dia tidak berhenti di situ.</p>

<h2>Impian Tercapai</h2>
<p>Selepas 3 tahun berusaha, pada tahun 2023, Aminah berjaya menghafal 5 juzuk Al-Quran. Pencapaian ini disambut dengan penuh kegembiraan oleh seluruh komuniti HCFBTR.</p>

<blockquote>"Allah mudahkan jalan untuk mereka yang berusaha. Saya tidak pernah sangka saya boleh sampai sini. Terima kasih kepada semua ustaz dan ustazah yang tidak pernah putus asa dengan saya." - Aminah</blockquote>

<h2>Inspirasi Untuk Semua</h2>
<p>Kisah Aminah mengajar kita tentang pentingnya ketekunan, kesabaran, dan kepercayaan kepada diri sendiri. Tiada matlamat yang terlalu tinggi jika kita berusaha dengan ikhlas dan tidak putus asa.</p>

<p>Hari ini, Aminah bukan sahaja seorang pelajar yang cemerlang, tetapi juga membantu rakan-rakannya yang baru belajar membaca Al-Quran. Dia telah menjadi inspirasi kepada ramai pelajar lain di HCFBTR.</p>`
    },
    {
        slug: 'program-sukarelawan-2024',
        title: 'Program Sukarelawan 2024: Pengalaman Yang Mengubah Hidup',
        subtitle: '2024 Volunteer Program: A Life-Changing Experience',
        excerpt: 'Refleksi dari sukarelawan kami tentang pengalaman memberi dan menerima sepanjang tahun...',
        date: '2024-12-01',
        author: 'Ustaz Ahmad',
        tags: ['sukarelawan', 'aktiviti', 'refleksi'],

        image: '/images/community_gathering.png',
        published: true,
        content: `<p>Tahun 2024 menandakan tahun yang paling berimpak dalam program sukarelawan HCFBTR. Dengan lebih 50 sukarelawan aktif, kami telah mencapai banyak kejayaan dan memberi impak yang besar kepada komuniti.</p>

<h2>Memberi Sambil Menerima</h2>
<p>Ramai yang menyertai program sukarelawan dengan niat untuk memberi, tetapi akhirnya mendapati mereka menerima lebih banyak daripada yang mereka beri.</p>

<h2>Jom Sertai Kami!</h2>
<p>Kami sentiasa mencari individu yang bersemangat untuk menyertai pasukan sukarelawan kami.</p>`
    },
    {
        slug: 'tips-belajar-bahasa-arab',
        title: '5 Tips Mudah Belajar Bahasa Arab untuk Pemula',
        subtitle: '5 Easy Tips to Learn Arabic for Beginners',
        excerpt: 'Panduan praktikal untuk mereka yang ingin mulakan pembelajaran Bahasa Arab dengan berkesan...',
        date: '2024-11-20',
        author: 'Ustazah Fatimah',
        tags: ['pendidikan', 'bahasa arab', 'tips'],

        image: '/images/students_classroom_learning.png',
        published: true,
        content: `<p>Belajar Bahasa Arab mungkin kelihatan mencabar, tetapi dengan pendekatan yang betul, ia boleh menjadi pengalaman yang menyeronokkan.</p>

<h2>1. Mulakan dengan Asas - Huruf Hijaiyah</h2>
<p>Langkah pertama adalah menguasai huruf-huruf hijaiyah.</p>`
    },
    {
        slug: 'majlis-tahunan-2024',
        title: 'Majlis Tahunan HCFBTR 2024: Meraikan 10 Tahun Bersama',
        subtitle: 'HCFBTR Annual Gathering 2024',
        excerpt: 'Kenangan indah dari majlis tahunan kami yang meraikan sedekad perkhidmatan...',
        date: '2024-11-05',
        author: 'Admin HCFBTR',
        tags: ['aktiviti', 'pencapaian', 'perayaan'],

        image: '/images/community_gathering.png',
        published: true,
        content: `<p>Pada 20 Oktober 2024, HCFBTR meraikan Ulang Tahun ke-10!</p>

<h2>Sedekad Perkhidmatan</h2>
<p>Sejak 2014, HCFBTR telah berkhidmat dalam menyediakan pendidikan Islam berkualiti.</p>`
    },
    {
        slug: 'pentingnya-adab-dalam-menuntut-ilmu',
        title: 'Pentingnya Adab Dalam Menuntut Ilmu',
        subtitle: 'The Importance of Manners in Seeking Knowledge',
        excerpt: 'Mengapa adab dan akhlak adalah asas penting dalam pembelajaran agama...',
        date: '2024-10-15',
        author: 'Ustaz Yusof',
        tags: ['pendidikan', 'adab', 'akhlak'],

        image: '/images/students_classroom_learning.png',
        published: true,
        content: `<p>Dalam Islam, menuntut ilmu bukan sekadar mengumpul maklumat. Ia adalah satu ibadah.</p>

<h2>Adab Terhadap Guru</h2>
<p>Menghormati guru adalah asas dalam menuntut ilmu.</p>`
    },
    {
        slug: 'pencapaian-pelajar-2024',
        title: 'Pencapaian Cemerlang Pelajar Tahun 2024',
        subtitle: 'Students\' Excellent Achievements 2024',
        excerpt: 'Tahniah kepada pelajar-pelajar kami yang mencatatkan pencapaian gemilang...',
        date: '2024-10-01',
        author: 'Admin HCFBTR',
        tags: ['pencapaian', 'kisah pelajar'],

        image: '/images/about-students.png',
        published: true,
        content: `<p>Tahun 2024 telah menjadi tahun yang membanggakan dengan pelbagai pencapaian cemerlang.</p>

<h2>Pencapaian Akademik</h2>
<p>3 orang pelajar kami telah mendapat keputusan cemerlang.</p>`
    }
];

const originalClasses = [
    {
        title: 'Kelas Al-Quran',
        subtitle: 'Quran Classes',
        objective: 'Mengajar bacaan dan tafsir Al-Quran dengan betul',
        audience: 'Kanak-kanak & Dewasa',
        schedule: 'Setiap hari | Daily',
        icon: '📖',
        color: 'primary',
        published: true
    },
    {
        title: 'Kelas Bahasa Arab',
        subtitle: 'Arabic Language',
        objective: 'Pembelajaran asas bahasa Arab untuk komunikasi dan kefahaman',
        audience: 'Remaja & Dewasa',
        schedule: 'Selasa & Khamis | Tue & Thu',
        icon: '🔤',
        color: 'secondary',
        published: true
    },
    {
        title: 'Kelas Fardhu Ain',
        subtitle: 'Islamic Essential Studies',
        objective: 'Mempelajari ilmu fardhu ain yang wajib diketahui setiap Muslim',
        audience: 'Semua peringkat umur',
        schedule: 'Ahad | Sunday',
        icon: '🕌',
        color: 'primary',
        published: true
    },
    {
        title: 'Kelas Tahfiz',
        subtitle: 'Quran Memorization',
        objective: 'Program hafazan Al-Quran yang sistematik dan berkesan',
        audience: 'Kanak-kanak 7-15 tahun',
        schedule: 'Isnin - Jumaat | Mon - Fri',
        icon: '📚',
        color: 'accent',
        published: true
    },
    {
        title: 'Kelas Adab & Akhlak',
        subtitle: 'Manners & Character',
        objective: 'Membina sahsiah mulia melalui pembelajaran adab dan akhlak',
        audience: 'Kanak-kanak & Remaja',
        schedule: 'Sabtu | Saturday',
        icon: '🌟',
        color: 'secondary',
        published: true
    },
    {
        title: 'Bimbingan Akademik',
        subtitle: 'Academic Tutoring',
        objective: 'Sokongan pembelajaran untuk subjek sekolah',
        audience: 'Pelajar sekolah rendah & menengah',
        schedule: 'Setiap hari | Daily (petang)',
        icon: '✏️',
        color: 'accent',
        published: true
    }
];

function DataMigration() {
    const [status, setStatus] = useState('ready'); // ready, migrating, success, error
    const [logs, setLogs] = useState([]);
    const [progress, setProgress] = useState({ current: 0, total: 0 });

    const addLog = (message, type = 'info') => {
        setLogs(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }]);
    };

    const migrateBlogPosts = async () => {
        addLog('🔄 Starting blog posts migration...', 'info');
        let successCount = 0;
        const total = originalBlogPosts.length;

        for (let i = 0; i < originalBlogPosts.length; i++) {
            const post = originalBlogPosts[i];
            try {
                await createDocument('blog-posts', post);
                addLog(`✅ Migrated: ${post.title}`, 'success');
                successCount++;
                setProgress({ current: i + 1, total: total + originalClasses.length });
            } catch (error) {
                addLog(`❌ Error migrating ${post.title}: ${error.message}`, 'error');
            }
        }

        addLog(`\n📊 Blog Posts: ${successCount}/${total} migrated`, 'info');
        return successCount;
    };

    const migrateClasses = async () => {
        addLog('\n🔄 Starting classes migration...', 'info');
        let successCount = 0;
        const total = originalClasses.length;
        const offset = originalBlogPosts.length;

        for (let i = 0; i < originalClasses.length; i++) {
            const classItem = originalClasses[i];
            try {
                await createDocument('classes', classItem);
                addLog(`✅ Migrated: ${classItem.title}`, 'success');
                successCount++;
                setProgress({ current: offset + i + 1, total: offset + total });
            } catch (error) {
                addLog(`❌ Error migrating ${classItem.title}: ${error.message}`, 'error');
            }
        }

        addLog(`\n📊 Classes: ${successCount}/${total} migrated`, 'info');
        return successCount;
    };

    const runMigration = async () => {
        setStatus('migrating');
        setLogs([]);
        setProgress({ current: 0, total: originalBlogPosts.length + originalClasses.length });

        try {
            addLog('🚀 Starting data migration...', 'info');
            addLog(`Total items: ${originalBlogPosts.length} posts + ${originalClasses.length} classes`, 'info');

            await migrateBlogPosts();
            await migrateClasses();

            addLog('\n✨ Migration complete!', 'success');
            setStatus('success');

            setTimeout(() => {
                if (window.confirm('Migration successful! Would you like to view the Blog page?')) {
                    window.location.href = '/#/blog';
                }
            }, 1000);
        } catch (error) {
            addLog(`\n❌ Migration failed: ${error.message}`, 'error');
            setStatus('error');
        }
    };

    return (
        <div className="migration-page">
            <div className="migration-container">
                <h1><span className="icon-inline"><Icons.Fire /></span> Data Migration Tool</h1>
                <p className="subtitle">Transfer hardcoded data to Firestore</p>

                <div className="info-box">
                    <h3><span className="icon-inline"><Icons.Clipboard /></span> What will be migrated?</h3>
                    <p>This tool will transfer all original blog posts and classes to Firestore.</p>
                </div>

                <div className="stats">
                    <div className="stat-card">
                        <div className="stat-number">{originalBlogPosts.length}</div>
                        <div className="stat-label">Blog Posts</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{originalClasses.length}</div>
                        <div className="stat-label">Classes</div>
                    </div>
                </div>

                {status === 'ready' && (
                    <button onClick={runMigration} className="btn btn-primary">
                        <span className="icon-inline"><Icons.Rocket /></span> Start Migration
                    </button>
                )}

                {status === 'migrating' && (
                    <div className="progress-section">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${(progress.current / progress.total) * 100}%` }}
                            />
                        </div>
                        <p className="progress-text">
                            {progress.current} / {progress.total} items migrated
                        </p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="success-message">
                        <h2><span className="icon-inline"><Icons.Check /></span> Migration Complete!</h2>
                        <p>All data has been successfully transferred to Firestore.</p>
                        <button onClick={() => window.location.href = '/#/blog'} className="btn btn-primary">
                            View Blog Posts
                        </button>
                    </div>
                )}

                {status === 'error' && (
                    <div className="error-message">
                        <h2><span className="icon-inline"><Icons.Alert /></span> Migration Failed</h2>
                        <p>An error occurred during migration. Check the logs below.</p>
                        <button onClick={() => setStatus('ready')} className="btn btn-secondary">
                            Try Again
                        </button>
                    </div>
                )}

                {logs.length > 0 && (
                    <div className="logs">
                        <h3>Migration Logs:</h3>
                        <div className="log-content">
                            {logs.map((log, index) => (
                                <div key={index} className={`log-line ${log.type}`}>
                                    <span className="log-time">[{log.time}]</span> {log.message}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DataMigration;
