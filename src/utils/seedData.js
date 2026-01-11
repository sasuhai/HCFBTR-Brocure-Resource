/**
 * Seed Data Utility
 * Use this to populate your Firestore database with sample blog posts and classes
 * Run this once from your browser console or create a temporary admin page to call these functions
 */

import { createDocument } from '../firebase/firestoreService';

// Sample Blog Posts
export const seedBlogPosts = async () => {
    const blogPosts = [
        {
            slug: 'kisah-aminah-hafal-quran',
            title: 'Kisah Aminah: Dari Tidak Tahu Membaca kepada Hafal 5 Juzuk',
            subtitle: "Aminah's Journey: From Unable to Read to Memorizing 5 Juz",
            excerpt: 'Perjalanan inspiratif seorang pelajar yang gigih mengejar cita-cita untuk menghafal Al-Quran...',
            content: `
<p>Aminah, seorang gadis berusia 12 tahun, datang ke HCFBTR pada tahun 2020 dengan satu impian yang besar tetapi penuh cabaran. Dia tidak tahu membaca Al-Quran dengan betul, tetapi hatinya penuh dengan keinginan untuk menghafal kalimah Allah.</p>

<h2>Permulaan Yang Sukar</h2>
<p>"Pada mulanya, saya rasa macam mustahil. Kawan-kawan semua dah pandai baca, saya sorang je yang lambat," kenang Aminah. Tetapi dengan sokongan ustazah dan kesabaran yang luar biasa, dia tidak pernah putus asa.</p>

<h2>Usaha Yang Berterusan</h2>
<p>Setiap hari, Aminah datang ke kelas dengan semangat yang tinggi. Dia menggunakan setiap masa lapang untuk mengulang bacaan. Ustazah Fatimah, guru tahfiznya, berkongsi: "Aminah adalah contoh terbaik kesungguhan. Walaupun bermula dari sifar, dia tidak pernah lewat atau ponteng kelas."</p>

<h2>Impian Tercapai</h2>
<p>Selepas 3 tahun berusaha, pada tahun 2023, Aminah berjaya menghafal 5 juzuk Al-Quran. Pencapaian ini disambut dengan penuh kegembiraan oleh seluruh komuniti HCFBTR.</p>

<blockquote>
"Allah mudahkan jalan untuk mereka yang berusaha. Saya tidak pernah sangka saya boleh sampai sini. Terima kasih kepada semua ustaz dan ustazah yang tidak pernah putus asa dengan saya." - Aminah
</blockquote>`,
            date: '2024-12-15',
            author: 'Admin HCFBTR',
            tags: ['kisah pelajar', 'tahfiz', 'inspirasi'],
            image: '📚',
            featured: true,
            published: true
        },
        {
            slug: 'program-sukarelawan-2024',
            title: 'Program Sukarelawan 2024: Pengalaman Yang Mengubah Hidup',
            subtitle: '2024 Volunteer Program: A Life-Changing Experience',
            excerpt: 'Refleksi dari sukarelawan kami tentang pengalaman memberi dan menerima sepanjang tahun...',
            content: `
<p>Tahun 2024 menandakan tahun yang paling berimpak dalam program sukarelawan HCFBTR. Dengan lebih 50 sukarelawan aktif, kami telah mencapai banyak kejayaan dan memberi impak yang besar kepada komuniti.</p>

<h2>Memberi Sambil Menerima</h2>
<p>Ramai yang menyertai program sukarelawan dengan niat untuk memberi, tetapi akhirnya mendapati mereka menerima lebih banyak daripada yang mereka beri.</p>`,
            date: '2024-12-01',
            author: 'Ustaz Ahmad',
            tags: ['sukarelawan', 'aktiviti', 'refleksi'],
            image: '🤝',
            published: true
        },
        {
            slug: 'tips-belajar-bahasa-arab',
            title: '5 Tips Mudah Belajar Bahasa Arab untuk Pemula',
            subtitle: '5 Easy Tips to Learn Arabic for Beginners',
            excerpt: 'Panduan praktikal untuk mereka yang ingin mulakan pembelajaran Bahasa Arab dengan berkesan...',
            content: `
<p>Belajar Bahasa Arab boleh menjadi mudah jika anda menggunakan pendekatan yang betul. Berikut adalah 5 tips yang akan membantu anda.</p>

<h2>1. Mulakan dengan Asas</h2>
<p>Kuasai huruf-huruf hijaiyah dan cara menyebutnya dengan betul.</p>`,
            date: '2024-11-20',
            author: 'Ustazah Fatimah',
            tags: ['pendidikan', 'bahasa arab', 'tips'],
            image: '🔤',
            published: true
        }
    ];

    try {
        for (const post of blogPosts) {
            await createDocument('blog-posts', post);
            console.log(`✅ Created blog post: ${post.title}`);
        }
        console.log('🎉 All blog posts created successfully!');
    } catch (error) {
        console.error('❌ Error creating blog posts:', error);
    }
};

// Sample Classes
export const seedClasses = async () => {
    const classes = [
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

    try {
        for (const classItem of classes) {
            await createDocument('classes', classItem);
            console.log(`✅ Created class: ${classItem.title}`);
        }
        console.log('🎉 All classes created successfully!');
    } catch (error) {
        console.error('❌ Error creating classes:', error);
    }
};

// Seed all data
export const seedAllData = async () => {
    console.log('🌱 Starting to seed database...');
    await seedBlogPosts();
    await seedClasses();
    console.log('✨ Database seeding complete!');
};
