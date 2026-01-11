/**
 * DATA MIGRATION SCRIPT
 * This script migrates the original hardcoded blog posts and classes to Firestore
 * Run this once to populate your database with the original data
 */

import { createDocument } from '../firebase/firestoreService';

// Original Blog Posts Data
const originalBlogPosts = [
    {
        slug: 'kisah-aminah-hafal-quran',
        title: 'Kisah Aminah: Dari Tidak Tahu Membaca kepada Hafal 5 Juzuk',
        subtitle: "Aminah's Journey: From Unable to Read to Memorizing 5 Juz",
        excerpt: 'Perjalanan inspiratif seorang pelajar yang gigih mengejar cita-cita untuk menghafal Al-Quran...',
        date: '2024-12-15',
        author: 'Admin HCFBTR',
        tags: ['kisah pelajar', 'tahfiz', 'inspirasi'],
        image: '📚',
        featured: true,
        published: true,
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
    {
        slug: 'program-sukarelawan-2024',
        title: 'Program Sukarelawan 2024: Pengalaman Yang Mengubah Hidup',
        subtitle: '2024 Volunteer Program: A Life-Changing Experience',
        excerpt: 'Refleksi dari sukarelawan kami tentang pengalaman memberi dan menerima sepanjang tahun...',
        date: '2024-12-01',
        author: 'Ustaz Ahmad',
        tags: ['sukarelawan', 'aktiviti', 'refleksi'],
        image: '🤝',
        published: true,
        content: `
<p>Tahun 2024 menandakan tahun yang paling berimpak dalam program sukarelawan HCFBTR. Dengan lebih 50 sukarelawan aktif, kami telah mencapai banyak kejayaan dan memberi impak yang besar kepada komuniti.</p>

<h2>Memberi Sambil Menerima</h2>
<p>Ramai yang menyertai program sukarelawan dengan niat untuk memberi, tetapi akhirnya mendapati mereka menerima lebih banyak daripada yang mereka beri. Ini adalah pengalaman yang dikongsi oleh hampir semua sukarelawan kami.</p>

<p>"Saya datang untuk mengajar, tetapi saya belajar lebih banyak tentang kesabaran, kasih sayang, dan erti sebenar kebahagiaan," kongsi Siti, salah seorang sukarelawan kami.</p>

<h2>Aktiviti Sepanjang Tahun</h2>
<p>Sepanjang 2024, kami telah menganjurkan pelbagai aktiviti:</p>
<ul>
<li>Program mengajar mingguan untuk 6 kelas berbeza</li>
<li>Kem motivasi untuk pelajar sekolah menengah</li>
<li>Program bimbingan peperiksaan</li>
<li>Lawatan sambil belajar ke muzium dan perpustakaan</li>
<li>Majlis berbuka puasa bersama</li>
</ul>

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
    },
    {
        slug: 'tips-belajar-bahasa-arab',
        title: '5 Tips Mudah Belajar Bahasa Arab untuk Pemula',
        subtitle: '5 Easy Tips to Learn Arabic for Beginners',
        excerpt: 'Panduan praktikal untuk mereka yang ingin mulakan pembelajaran Bahasa Arab dengan berkesan...',
        date: '2024-11-20',
        author: 'Ustazah Fatimah',
        tags: ['pendidikan', 'bahasa arab', 'tips'],
        image: '🔤',
        published: true,
        content: `
<p>Belajar Bahasa Arab mungkin kelihatan mencabar pada mulanya, tetapi dengan pendekatan yang betul, ia boleh menjadi pengalaman yang menyeronokkan dan bermanfaat. Berikut adalah 5 tips mudah untuk membantu anda memulakan perjalanan pembelajaran Bahasa Arab.</p>

<h2>1. Mulakan dengan Asas - Huruf Hijaiyah</h2>
<p>Langkah pertama dalam pembelajaran Bahasa Arab adalah menguasai huruf-huruf hijaiyah. Terdapat 28 huruf dalam abjad Arab, dan setiap satunya mempunyai bunyi dan bentuk yang unik. Luangkan masa untuk menghafal dan berlatih menulis setiap huruf.</p>

<h2>2. Dengar dan Ulang</h2>
<p>Pembelajaran bahasa yang berkesan memerlukan pendedahan kepada bahasa yang dituturkan. Dengar audio Bahasa Arab, sama ada melalui lagu, podcast, atau bacaan Al-Quran. Cuba ulang apa yang anda dengar untuk melatih sebutan anda.</p>

<h2>3. Belajar Perkataan Asas Harian</h2>
<p>Mulakan dengan perkataan-perkataan yang kerap digunakan dalam kehidupan seharian seperti salam, terima kasih, dan nombor. Ini akan membina keyakinan anda dan membolehkan anda mula berkomunikasi dalam situasi mudah.</p>

<h2>4. Cari Rakan Belajar</h2>
<p>Belajar bersama rakan memudahkan proses pembelajaran. Anda boleh berlatih bercakap, membetulkan satu sama lain, dan memberi motivasi. Sertai kumpulan pembelajaran atau kelas Bahasa Arab di komuniti anda.</p>

<h2>5. Konsisten dan Sabar</h2>
<p>Pembelajaran bahasa memerlukan masa dan kesabaran. Tetapkan matlamat yang realistik dan konsisten dalam pembelajaran anda. Walaupun 15-20 minit sehari sudah cukup untuk melihat kemajuan jika dilakukan secara konsisten.</p>

<blockquote>
"Bahasa Arab adalah bahasa Al-Quran. Belajarnya bukan sahaja membuka pintu ilmu, tetapi juga mendekatkan kita kepada Allah." - Ustazah Fatimah
</blockquote>

<p>Jangan putus asa jika menghadapi kesukaran. Setiap pakar pernah menjadi pemula. Yang penting adalah terus berusaha dan tidak berhenti belajar!</p>
        `
    },
    {
        slug: 'majlis-tahunan-2024',
        title: 'Majlis Tahunan HCFBTR 2024: Meraikan 10 Tahun Bersama',
        subtitle: 'HCFBTR Annual Gathering 2024: Celebrating 10 Years Together',
        excerpt: 'Kenangan indah dari majlis tahunan kami yang meraikan sedekad perkhidmatan...',
        date: '2024-11-05',
        author: 'Admin HCFBTR',
        tags: ['aktiviti', 'pencapaian', 'perayaan'],
        image: '🎉',
        published: true,
        content: `
<p>Pada 20 Oktober 2024, HCFBTR meraikan majlis tahunan yang istimewa - Ulang Tahun ke-10 penubuhan kami! Lebih 200 pelajar, sukarelawan, alumni, dan ahli komuniti berkumpul untuk meraikan pencapaian dan kenangan yang telah kita kongsi bersama selama sedekad.</p>

<h2>Sedekad Perkhidmatan</h2>
<p>Sejak 2014, HCFBTR telah berkhidmat dalam menyediakan pendidikan Islam berkualiti kepada komuniti. Sepanjang 10 tahun ini:</p>
<ul>
<li>Lebih 500 pelajar telah melalui program kami</li>
<li>50 sukarelawan aktif setiap tahun</li>
<li>15+ kelas ditawarkan setiap minggu</li>
<li>Beribu jam bimbingan percuma</li>
</ul>

<h2>Saat-saat Berharga</h2>
<p>Majlis tahunan kali ini penuh dengan saat-saat yang mengharukan. Kami mendengar testimoni daripada pelajar-pelajar yang telah berjaya dalam pelbagai bidang, melihat persembahan daripada kelas-kelas tahfiz, dan menyaksikan pengiktirafan kepada sukarelawan yang berdedikasi.</p>

<h2>Terima Kasih</h2>
<p>Kami ingin mengucapkan terima kasih kepada semua yang telah menyokong HCFBTR sepanjang 10 tahun ini:</p>
<ul>
<li>Para ustaz dan ustazah yang tidak jemu mendidik</li>
<li>Sukarelawan yang sentiasa bersedia membantu</li>
<li>Pelajar dan keluarga yang mempercayai kami</li>
<li>Penderma yang support misi kami</li>
<li>Komuniti yang menyokong setiap langkah kami</li>
</ul>

<blockquote>
"10 tahun bukanlah destinasi, tetapi permulaan baharu untuk impak yang lebih besar. Terima kasih kepada semua yang menjadikan HCFBTR seperti hari ini."
</blockquote>

<h2>Masa Depan yang Cerah</h2>
<p>Dengan sokongan berterusan daripada komuniti, kami bercita-cita untuk terus mengembangkan program kami, menjangkau lebih ramai pelajar, dan terus memberi impak positif kepada masyarakat.</p>

<p>Terima kasih kerana bersama kami dalam perjalanan ini. Here's to many more years of learning, growing, and serving together! 🎉</p>
        `
    },
    {
        slug: 'pentingnya-adab-dalam-menuntut-ilmu',
        title: 'Pentingnya Adab Dalam Menuntut Ilmu',
        subtitle: 'The Importance of Manners in Seeking Knowledge',
        excerpt: 'Mengapa adab dan akhlak adalah asas penting dalam pembelajaran agama...',
        date: '2024-10-15',
        author: 'Ustaz Yusof',
        tags: ['pendidikan', 'adab', 'akhlak'],
        image: '🌟',
        published: true,
        content: `
<p>Dalam Islam, menuntut ilmu bukan sekadar mengumpul maklumat dan fakta. Ia adalah satu ibadah yang memerlukan adab dan akhlak yang baik. Rasulullah SAW bersabda: "Sesungguhnya aku diutuskan untuk menyempurnakan akhlak yang mulia."</p>

<h2>Adab Terhadap Guru</h2>
<p>Menghormati guru adalah asas dalam menuntut ilmu. Ini termasuk:</p>
<ul>
<li>Bersikap sopan dan mendengar dengan penuh perhatian</li>
<li>Tidak memotong perkataan guru semasa mengajar</li>
<li>Bertanya dengan cara yang sopan</li>
<li>Mengamalkan ilmu yang dipelajari</li>
</ul>

<h2>Adab Terhadap Ilmu</h2>
<p>Ilmu yang kita pelajari perlu dihormati dengan:</p>
<ul>
<li>Niat yang ikhlas untuk mendekatkan diri kepada Allah</li>
<li>Istiqamah dalam belajar</li>
<li>Mengamalkan apa yang dipelajari</li>
<li>Menyebarkan ilmu kepada orang lain</li>
</ul>

<h2>Adab Terhadap Rakan Sepelajaran</h2>
<p>Dalam menuntut ilmu, kita juga perlu beradab dengan rakan-rakan:</p>
<ul>
<li>Saling membantu dan berkongsi ilmu</li>
<li>Tidak sombong walaupun lebih  memahami sesuatu</li>
<li>Sabar dengan rakan yang lambat memahami</li>
<li>Bersaing dalam kebaikan, bukan dalam kesombongan</li>
</ul>

<blockquote>
"Barangsiapa merendah diri kerana Allah, nescaya Allah akan meninggikan darjatnya." - Hadis Riwayat Muslim
</blockquote>

<h2>Keberkatan Ilmu</h2>
<p>Ilmu yang dipelajari dengan adab yang baik akan membawa keberkatan. Ia akan bermanfaat dunia dan akhirat, dan menjadi sebab kita terus dibimbing oleh Allah SWT.</p>

<p>Mari kita pastikan bahawa dalam menuntut ilmu, kita tidak melupakan kepentingan adab dan akhlak. Kerana ilmu tanpa adab adalah seperti pokok tanpa buah - kelihatan cantik tetapi tidak memberi manfaat.</p>
        `
    },
    {
        slug: 'pencapaian-pelajar-2024',
        title: 'Pencapaian Cemerlang Pelajar Tahun 2024',
        subtitle: 'Students\' Excellent Achievements 2024',
        excerpt: 'Tahniah kepada pelajar-pelajar kami yang mencatatkan pencapaian gemilang dalam pelbagai bidang...',
        date: '2024-10-01',
        author: 'Admin HCFBTR',
        tags: ['pencapaian', 'kisah pelajar'],
        image: '🏆',
        published: true,
        content: `
<p>Tahun 2024 telah menjadi tahun yang membanggakan buat HCFBTR dengan pelbagai pencapaian cemerlang daripada pelajar-pelajar kami. Kami ingin berkongsi beberapa kisah kejayaan yang menginspirasi.</p>

<h2>Pencapaian Akademik</h2>
<p>3 orang pelajar kami telah mendapat keputusan cemerlang dalam peperiksaan UPSR dan PT3:</p>
<ul>
<li>Ahmad bin Abdullah - 5A UPSR</li>
<li>Fatimah binti Hassan - 8A PT3</li>
<li>Zainab binti Ibrahim - Anugerah Pelajar Terbaik Sekolah</li>
</ul>

<h2>Kejohanan Hafazan Al-Quran</h2>
<p>Pelajar tahfiz kami telah menyertai Pertandingan Hafazan Al-Quran Peringkat Negeri dan mencatat kejayaan:</p>
<ul>
<li>Tempat ke-2: Muhammad Aiman - Kategori 5 Juzuk</li>
<li>Tempat ke-3: Nur Aisyah - Kategori 3 Juzuk</li>
<li>Anugerah Khas Qiraah Terbaik: Luqman Hakim</li>
</ul>

<h2>Khidmat Komuniti</h2>
<p>Beberapa pelajar senior kami telah menjadi sukarelawan aktif, membantu mengajar pelajar-pelajar baharu dan menganjurkan program-program komuniti.</p>

<h2>Kata-kata daripada Pelajar</h2>

<blockquote>
"HCFBTR bukan sekadar tempat belajar, tetapi satu keluarga yang menyokong kami dalam setiap langkah. Terima kasih kepada semua ustaz dan ustazah!" - Fatimah
</blockquote>

<blockquote>
"Saya tidak pernah menyangka saya boleh hafal 5 juzuk. Program tahfiz di HCFBTR sangat sistematik dan ustaz-ustaz sangat sabar." - Muhammad Aiman
</blockquote>

<h2>Penghargaan</h2>
<p>Kami amat berbangga dengan semua pelajar kami - bukan sahaja mereka yang memenangi anugerah, tetapi setiap pelajar yang datang dengan ikhlas untuk belajar dan memperbaiki diri.</p>

<p>Tahniah kepada semua! Teruskan usaha dan jangan pernah berhenti belajar. Kejayaan anda adalah kejayaan kami semua! 🎉</p>
        `
    }
];

// Original Classes Data
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

// Migration Functions
export const migrateBlogPosts = async () => {
    console.log('🔄 Starting blog posts migration...');
    let successCount = 0;
    let errorCount = 0;

    for (const post of originalBlogPosts) {
        try {
            await createDocument('blog-posts', post);
            console.log(`✅ Migrated: ${post.title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error migrating ${post.title}:`, error);
            errorCount++;
        }
    }

    console.log(`\n📊 Blog Posts Migration Complete:`);
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📝 Total: ${originalBlogPosts.length}`);
};

export const migrateClasses = async () => {
    console.log('\n🔄 Starting classes migration...');
    let successCount = 0;
    let errorCount = 0;

    for (const classItem of originalClasses) {
        try {
            await createDocument('classes', classItem);
            console.log(`✅ Migrated: ${classItem.title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error migrating ${classItem.title}:`, error);
            errorCount++;
        }
    }

    console.log(`\n📊 Classes Migration Complete:`);
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📝 Total: ${originalClasses.length}`);
};

// Migrate all data
export const migrateAllData = async () => {
    console.log('🚀 Starting complete data migration...\n');
    console.log('='.repeat(50));

    await migrateBlogPosts();
    await migrateClasses();

    console.log('='.repeat(50));
    console.log('\n✨ Migration complete! Refresh your pages to see the data.');
};

// Export data for reference
export { originalBlogPosts, originalClasses };
