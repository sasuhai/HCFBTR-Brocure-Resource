/**
 * QUICK START: Add Sample Data to Firestore
 * 
 * Copy and paste these code blocks into your browser console
 * when visiting: https://hcfbtr-brocure-resource.web.app
 * 
 * Make sure to open DevTools Console (Press F12, then go to Console tab)
 */

// ============================================
// STEP 1: Import the helper function
// ============================================
// (This is already available in your app)

// ============================================
// STEP 2: Add a Sample Blog Post
// ============================================

// Copy and paste this entire block:
(async function addSampleBlogPost() {
    try {
        const { createDocument } = await import('./firebase/firestoreService.js');

        const post = await createDocument('blog-posts', {
            slug: 'welcome-to-hcfbtr',
            title: 'Selamat Datang ke HCFBTR',
            subtitle: 'Welcome to HCFBTR',
            excerpt: 'Kami berbangga memperkenalkan laman web baharu kami yang direka untuk berkongsi cerita, maklumat kelas, dan peluang sukarelawan.',
            content: `
<p>Assalamualaikum dan selamat datang ke laman web HCFBTR yang baharu!</p>

<h2>Tentang Kami</h2>
<p>HCFBTR telah berkhidmat dalam bidang pendidikan Islam selama lebih sedekad. Kami komited untuk menyediakan pendidikan berkualiti yang boleh diakses oleh semua.</p>

<h2>Apa Yang Baharu?</h2>
<p>Laman web baharu ini membolehkan kami berkongsi:</p>
<ul>
  <li>Cerita inspiratif pelajar kami</li>
  <li>Maklumat terkini tentang kelas</li>
  <li>Peluang untuk menjadi sukarelawan</li>
  <li>Cara untuk menyokong misi kami</li>
</ul>

<h2>Sertai Kami</h2>
<p>Sama ada sebagai pelajar, sukarelawan, atau penyok ong, kami mengalu-alukan anda untuk menjadi sebahagian daripada keluarga HCFBTR.</p>

<blockquote>
"Pendidikan adalah kunci kejayaan. Mari kita bina masa depan bersama-sama."
</blockquote>
            `,
            date: new Date().toISOString().split('T')[0], // Today's date
            author: 'Admin HCFBTR',
            tags: ['welcome', 'announcement', 'pendidikan'],
            image: '🎉',
            featured: true,
            published: true
        });

        console.log('✅ Blog post created successfully!', post);
        alert('✅ Sample blog post added! Refresh the page to see it.');
    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ Error adding post. Check console for details.');
    }
})();

// ============================================
// STEP 3: Add Sample Classes
// ============================================

// Copy and paste this entire block:
(async function addSampleClasses() {
    try {
        const { createDocument } = await import('./firebase/firestoreService.js');

        const classes = [
            {
                title: 'Kelas Al-Quran',
                subtitle: 'Quran Classes',
                objective: 'Mengajar bacaan dan tafsir Al-Quran dengan betul untuk semua peringkat',
                audience: 'Kanak-kanak & Dewasa',
                schedule: 'Setiap hari | Daily (9:00 AM - 11:00 AM)',
                icon: '📖',
                color: 'primary',
                published: true
            },
            {
                title: 'Kelas Bahasa Arab',
                subtitle: 'Arabic Language',
                objective: 'Pembelajaran asas bahasa Arab untuk komunikasi dan kefahaman teks agama',
                audience: 'Remaja & Dewasa',
                schedule: 'Selasa & Khamis | Tue & Thu (7:00 PM - 9:00 PM)',
                icon: '🔤',
                color: 'secondary',
                published: true
            },
            {
                title: 'Kelas Tahfiz',
                subtitle: 'Quran Memorization',
                objective: 'Program hafazan Al-Quran yang sistematik dengan bimbingan khusus',
                audience: 'Kanak-kanak 7-15 tahun',
                schedule: 'Isnin - Jumaat | Mon - Fri (2:00 PM - 4:00 PM)',
                icon: '📚',
                color: 'accent',
                published: true
            }
        ];

        for (const classData of classes) {
            await createDocument('classes', classData);
            console.log(`✅ Created class: ${classData.title}`);
        }

        alert('✅ Sample classes added! Refresh the page to see them.');
    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ Error adding classes. Check console for details.');
    }
})();

// ============================================
// STEP 4: Add More Blog Posts (Optional)
// ============================================

// Copy and paste this to add 2 more sample posts:
(async function addMoreBlogPosts() {
    try {
        const { createDocument } = await import('./firebase/firestoreService.js');

        const posts = [
            {
                slug: 'tips-belajar-alquran',
                title: '5 Tips Mudah Belajar Al-Quran',
                subtitle: '5 Easy Tips to Learn Quran',
                excerpt: 'Panduan praktikal untuk memulakan atau meningkatkan pembelajaran Al-Quran anda.',
                content: `
<p>Belajar Al-Quran adalah satu perjalanan yang membawa keberkatan. Berikut adalah 5 tips mudah untuk membantu anda.</p>

<h2>1. Mulakan dengan Niat yang Ikhlas</h2>
<p>Pastikan niat anda adalah untuk mendekatkan diri kepada Allah SWT.</p>

<h2>2. Tetapkan Masa Harian</h2>
<p>Konsisten adalah kunci. Walaupun 15 minit sehari sudah memadai untuk permulaan.</p>

<h2>3. Cari Guru yang Baik</h2>
<p>Guru yang berpengalaman dapat membimbing anda dengan betul dan mengelakkan kesilapan.</p>

<h2>4. Gunakan Aplikasi dan Sumber Online</h2>
<p>Terdapat banyak aplikasi dan video tutorial yang dapat membantu pembelajaran anda.</p>

<h2>5. Ulang Kaji Secara Berkala</h2>
<p>Pengulangan adalah penting untuk mengekalkan hafazan dan kefahaman.</p>
                `,
                date: '2024-12-10',
                author: 'Ustaz Ahmad',
                tags: ['tips', 'pendidikan', 'al-quran'],
                image: '📖',
                featured: false,
                published: true
            },
            {
                slug: 'jom-jadi-sukarelawan',
                title: 'Jom Jadi Sukarelawan HCFBTR!',
                subtitle: 'Become a HCFBTR Volunteer!',
                excerpt: 'Peluang untuk memberi sumbangan kepada komuniti sambil mengembangkan diri.',
                content: `
<p>Adakah anda mencari cara untuk memberi kembali kepada komuniti? Program sukarelawan HCFBTR mungkin sesuai untuk anda!</p>

<h2>Mengapa Menjadi Sukarelawan?</h2>
<p>Menjadi sukarelawan bukan sahaja memberi manfaat kepada orang lain, tetapi juga kepada diri sendiri:</p>
<ul>
  <li>Mendapat pahala</li>
  <li>Mengembangkan kemahiran baru</li>
  <li>Bertemu rakan baharu</li>
  <li>Memberi impak positif</li>
</ul>

<h2>Peluang Tersedia</h2>
<p>Kami memerlukan sukarelawan untuk:</p>
<ul>
  <li>Mengajar kelas Al-Quran</li>
  <li>Membantu aktiviti komuniti</li>
  <li>Pengurusan acara</li>
  <li>Media sosial dan kandungan</li>
</ul>

<blockquote>
"Sebaik-baik manusia adalah yang paling bermanfaat kepada manusia lain."
</blockquote>

<p>Hubungi kami hari ini untuk mengetahui lebih lanjut!</p>
                `,
                date: '2024-12-05',
                author: 'Admin HCFBTR',
                tags: ['sukarelawan', 'aktiviti', 'komuniti'],
                image: '🤝',
                featured: false,
                published: true
            }
        ];

        for (const post of posts) {
            await createDocument('blog-posts', post);
            console.log(`✅ Created post: ${post.title}`);
        }

        alert('✅ More blog posts added! Refresh the page to see them.');
    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ Error adding posts. Check console for details.');
    }
})();

/*
 * ============================================
 * ALTERNATIVE: Add Data via Firebase Console
 * ============================================
 * 
 * 1. Go to: https://console.firebase.google.com/project/hcfbtr-brocure-resource/firestore
 * 2. Click "Start collection"
 * 3. Collection ID: blog-posts
 * 4. Add document with auto-generated ID
 * 5. Add all fields as shown in the examples above
 * 6. Click "Save"
 * 
 * Repeat for 'classes' collection
 */
