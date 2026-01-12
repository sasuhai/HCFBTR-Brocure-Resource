import { createDocument, getDocument } from '../firebase/firestoreService';

/**
 * Migration script to move Home and Journey page content to Firestore
 * Run this once through the admin dashboard or browser console
 */

// Home Page Content
const homePageContent = {
    hero: {
        title: "Membina Generasi Masa Depan",
        subtitle: "Building Tomorrow's Generation",
        description: "HCFBTR telah membimbing ratusan pelajar selama lebih sedekad, menyediakan pendidikan berkualiti dan nilai-nilai murni untuk membina pemimpin masa depan yang berintegriti."
    },
    impactStats: [
        { number: '10+', label: 'Tahun Perkhidmatan', sublabel: 'Years of Service' },
        { number: '500+', label: 'Pelajar Dibimbing', sublabel: 'Students Guided' },
        { number: '50+', label: 'Sukarelawan Aktif', sublabel: 'Active Volunteers' },
        { number: '15+', label: 'Program & Kelas', sublabel: 'Programs & Classes' }
    ],
    about: {
        title: "Tentang HCFBTR",
        subtitle: "About Us",
        paragraph1: "HCFBTR adalah sebuah organisasi pendidikan yang berdedikasi untuk membina dan membimbing generasi muda. Sejak sedekad yang lalu, kami telah menyediakan pelbagai program pembelajaran yang berkualiti dan berkesan.",
        paragraph2: "Dengan pasukan guru yang berpengalaman dan sukarelawan yang komited, kami terus berusaha untuk memberikan impak positif kepada komuniti melalui pendidikan yang holistik dan berintegriti."
    },
    features: [
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
    ],
    whyChooseUs: {
        title: "Mengapa Pilih Kami",
        subtitle: "Why Choose Us",
        description: "Kami komited untuk menyediakan pengalaman pembelajaran terbaik"
    },
    cta: {
        title: "Sertai Kami Dalam Membina Masa Depan",
        subtitle: "Join Us in Building the Future",
        description: "Setiap sumbangan dan sumbangan masa anda membawa perubahan besar dalam kehidupan para pelajar kami."
    }
};

// Journey Page Content
const journeyPageContent = {
    header: {
        title: "Sedekad & Terus Melangkah",
        subtitle: "A Decade & Moving Forward",
        intro: "Perjalanan kami bukanlah mudah, tetapi setiap langkah penuh dengan pelajaran, keberkatan, dan keazaman untuk terus memberi. Ini adalah kisah kami."
    },
    timeline: [
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
    ],
    testimonials: [
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
    ],
    milestones: [
        { icon: '👨‍🎓', number: '500+', label: 'Pelajar Didik | Students Taught' },
        { icon: '👥', number: '50+', label: 'Sukarelawan | Volunteers' },
        { icon: '📖', number: '15+', label: 'Program Aktif | Active Programs' },
        { icon: '🏆', number: '10', label: 'Tahun Perkhidmatan | Years Serving' }
    ],
    forward: {
        title: "Terus Melangkah",
        subtitle: "Moving Forward",
        description: "10 tahun adalah permulaan. Kami berkomitmen untuk terus berkembang, meningkatkan kualiti pengajaran, dan memberi impak yang lebih besar kepada komuniti. Dengan sokongan anda, kami yakin masa depan akan lebih cerah.",
        vision: [
            {
                icon: '🎯',
                title: 'Visi 2030',
                description: '1000+ pelajar, 20+ program, premis sendiri'
            },
            {
                icon: '🌍',
                title: 'Impak Komuniti',
                description: 'Menjadi pusat pembelajaran terkemuka'
            },
            {
                icon: '💚',
                title: 'Kerjasama',
                description: 'Jalin hubungan dengan lebih banyak NGO'
            }
        ]
    }
};

// Donate Page Content
const donatePageContent = {
    header: {
        title: "Donate",
        subtitle: "Sumbangan Anda Membawa Perubahan",
        intro: "Setiap ringgit yang anda sumbangkan adalah pelaburan untuk menyampaikan Islam dan memperkasakan mualaf. Bersama-sama, kita membina masa depan yang lebih cerah."
    },
    premiumSection: {
        title: "Cara Menderma | How to Donate",
        subtitle: "Scan QR Code atau gunakan butiran bank di bawah",
        qrPlaceholder: {
            title: "QR Code",
            subtitle: "Scan untuk derma"
        },
        qrLabel: "Scan dengan banking app anda",
        dividerText: "ATAU",
        bankTitle: "Butiran Bank | Bank Details",
        bankLabels: {
            accountName: "Nama Akaun | Account Name",
            bankName: "Nama Bank | Bank Name",
            accountNumber: "Nombor Akaun | Account Number",
            copy: "Copy"
        }
    },
    instructions: {
        title: "Selepas Menderma | After Donating",
        subtitle: "Sila hantar resit untuk pengesahan dan tax receipt",
        steps: [
            { number: 1, title: "Screenshot Resit Pembayaran", desc: "Take a screenshot of your transaction receipt" },
            { number: 2, title: "Hantar Melalui | Send Via:", desc: "" },
            { number: 3, title: "Terima Pengesahan", desc: "You'll receive confirmation and tax receipt within 2-3 business days" }
        ]
    },
    thankYou: {
        title: "Terima Kasih Atas Sokongan Anda!",
        subtitle: "Thank You For Your Support!",
        message: "Sumbangan anda membantu kami meneruskan misi untuk menyediakan pendidikan berkualiti kepada komuniti. Setiap ringgit membawa perubahan yang bermakna dalam kehidupan pelajar kami.",
        stats: [
            { value: "100%", label: "Untuk Program" },
            { value: "500+", label: "Pelajar Dibantu" },
            { value: "10+", label: "Tahun Berkhidmat" }
        ]
    }
};

// Volunteer Page Content
const volunteerPageContent = {
    header: {
        title: "Volunteer",
        subtitle: "Jadilah Sebahagian Daripada Perubahan",
        intro: "Sertai kami dalam memberi impak positif kepada generasi masa depan. Masa dan kepakaran anda boleh mengubah hidup ratusan pelajar."
    },
    opportunities: [
        {
            icon: 'Teacher',
            title: 'Guru Kelas',
            subtitle: 'Class Teacher',
            description: 'Mengajar kelas Al-Quran, Bahasa Arab, atau subjek akademik',
            commitment: '4-6 jam seminggu',
            requirements: ['Pengetahuan dalam bidang berkaitan', 'Kesabaran & dedikasi', 'Komitmen minimum 3 bulan']
        },
        {
            icon: 'Palette',
            title: 'Fasilitator Aktiviti',
            subtitle: 'Activity Facilitator',
            description: 'Mengendalikan aktiviti kokurikulum, sukan, dan program khas',
            commitment: '2-4 jam seminggu',
            requirements: ['Kreatif & energetik', 'Suka bekerja dengan kanak-kanak', 'Kemahiran dalam bidang tertentu (seni, sukan, dll)']
        },
        {
            icon: 'Laptop',
            title: 'Sokongan Pentadbiran',
            subtitle: 'Administrative Support',
            description: 'Membantu dalam pengurusan, dokumentasi, dan komunikasi',
            commitment: '3-5 jam seminggu',
            requirements: ['Kemahiran komputer asas', 'Teratur & teliti', 'Boleh bekerja dari rumah']
        },
        {
            icon: 'Phone',
            title: 'Media & Komunikasi',
            subtitle: 'Media & Communications',
            description: 'Menguruskan media sosial, membuat konten, dan dokumentasi',
            commitment: '3-4 jam seminggu',
            requirements: ['Kemahiran fotografi/videografi', 'Kreatif dalam konten', 'Familiar dengan media sosial']
        },
        {
            icon: 'HeartHandshake',
            title: 'Mentor Pelajar',
            subtitle: 'Student Mentor',
            description: 'Membimbing pelajar secara peribadi, motivasi dan sokongan emosi',
            commitment: '2-3 jam seminggu',
            requirements: ['Empati & kemahiran komunikasi', 'Matang & bertanggungjawab', 'Komitmen jangka panjang']
        },
        {
            icon: 'Calendar',
            title: 'Penganjur Acara',
            subtitle: 'Event Organizer',
            description: 'Merancang dan melaksanakan program khas dan acara tahunan',
            commitment: 'Fleksibel mengikut acara',
            requirements: ['Kemahiran pengurusan projek', 'Kreatif & proaktif', 'Boleh bekerja dalam pasukan']
        }
    ],
    benefits: [
        'Pengalaman berharga dalam pendidikan dan pembangunan komuniti',
        'Berjumpa dan berjejaring dengan individu yang bersemangat',
        'Sijil penghargaan dan surat rujukan',
        'Peluang pembelajaran dan pembangunan kemahiran',
        'Kepuasan dalaman memberi impak positif',
        'Jemputan ke acara dan majlis khas'
    ],
    form: {
        title: "Daftar Minat Anda",
        subtitle: "Register Your Interest",
        description: "Sila isi borang di bawah dan kami akan menghubungi anda untuk perbincangan lanjut."
    },
    testimonial: {
        quote: "Menjadi sukarelawan di HCFBTR adalah antara keputusan terbaik dalam hidup saya. Saya datang untuk mengajar, tetapi saya belajar lebih banyak tentang kesabaran, kasih sayang, dan erti sebenar memberi. Setiap senyuman pelajar adalah hadiah yang tidak ternilai.",
        author: "Ahmad bin Hassan",
        role: "Guru Sukarelawan sejak 2019 | Volunteer Teacher since 2019"
    }
};

// Classes Page Content
const classesPageContent = {
    header: {
        title: "Kelas bimbingan Mualaf",
        subtitle: "Mualaf Guidance Classes",
        description: "Kami menawarkan pelbagai program pembelajaran yang direka untuk memenuhi keperluan pelajar dari semua peringkat umur. Setiap kelas dijalankan oleh pengajar yang berpengalaman dan berdedikasi."
    },
    infoSection: {
        registration: {
            title: "Maklumat Pendaftaran",
            subtitle: "Registration Information",
            description: "Untuk mendaftar atau mendapatkan maklumat lanjut mengenai mana-mana kelas, sila hubungi kami melalui email atau telefon. Kami akan dengan senang hati membantu anda.",
            emailLabel: "Email",
            phoneLabel: "Telefon"
        },
        fees: {
            title: "Yuran & Bayaran",
            subtitle: "Fees & Payment",
            description: "Semua kelas kami ditawarkan secara percuma atau dengan yuran yang sangat minimum. Kami percaya pendidikan berkualiti harus boleh diakses oleh semua.",
            highlight: "Tiada seorang pun akan ditolak kerana ketidakmampuan membayar."
        },
        hours: {
            title: "Waktu Operasi",
            subtitle: "Operating Hours",
            description: "Kelas dijalankan sepanjang minggu dengan jadual yang fleksibel untuk memudahkan pelajar.",
            morning: "Pagi: 9:00 AM - 12:00 PM",
            afternoon: "Petang: 2:00 PM - 5:00 PM",
            night: "Malam: 7:00 PM - 9:00 PM"
        }
    }
};

/**
 * Function to migrate page content to Firestore
 * UPDATED: Checks if document exists before creating to prevent overwriting
 */
export const migratePageContent = async () => {
    const results = {
        success: [],
        errors: []
    };

    try {
        // Migrate Home page
        const homeExists = await getDocument('pages', 'home');
        if (!homeExists) {
            console.log('📄 Migrating Home page content...');
            await createDocument('pages', homePageContent, 'home');
            results.success.push('Home page migrated');
            console.log('✅ Home page migrated successfully');
        } else {
            console.log('⏭️ Home page already exists. Skipping...');
            results.success.push('Home page skipped (already exists)');
        }
    } catch (error) {
        results.errors.push({ page: 'home', error: error.message });
        console.error('❌ Error migrating Home page:', error);
    }

    try {
        // Migrate Journey page
        const journeyExists = await getDocument('pages', 'journey');
        if (!journeyExists) {
            console.log('📄 Migrating Journey page content...');
            await createDocument('pages', journeyPageContent, 'journey');
            results.success.push('Journey page migrated');
            console.log('✅ Journey page migrated successfully');
        } else {
            console.log('⏭️ Journey page already exists. Skipping...');
            results.success.push('Journey page skipped (already exists)');
        }
    } catch (error) {
        results.errors.push({ page: 'journey', error: error.message });
        console.error('❌ Error migrating Journey page:', error);
    }

    try {
        // Migrate Donate page
        const donateExists = await getDocument('pages', 'donate');
        if (!donateExists) {
            console.log('📄 Migrating Donate page content...');
            await createDocument('pages', donatePageContent, 'donate');
            results.success.push('Donate page migrated');
            console.log('✅ Donate page migrated successfully');
        } else {
            console.log('⏭️ Donate page already exists. Skipping...');
            results.success.push('Donate page skipped (already exists)');
        }
    } catch (error) {
        results.errors.push({ page: 'donate', error: error.message });
        console.error('❌ Error migrating Donate page:', error);
    }

    try {
        // Migrate Volunteer page
        const volunteerExists = await getDocument('pages', 'volunteer');
        if (!volunteerExists) {
            console.log('📄 Migrating Volunteer page content...');
            await createDocument('pages', volunteerPageContent, 'volunteer');
            results.success.push('Volunteer page migrated');
            console.log('✅ Volunteer page migrated successfully');
        } else {
            console.log('⏭️ Volunteer page already exists. Skipping...');
            results.success.push('Volunteer page skipped (already exists)');
        }
    } catch (error) {
        results.errors.push({ page: 'volunteer', error: error.message });
        console.error('❌ Error migrating Volunteer page:', error);
    }

    try {
        // Migrate Classes page
        const classesExists = await getDocument('pages', 'classes');
        if (!classesExists) {
            console.log('📄 Migrating Classes page content...');
            await createDocument('pages', classesPageContent, 'classes');
            results.success.push('Classes page migrated');
            console.log('✅ Classes page migrated successfully');
        } else {
            console.log('⏭️ Classes page already exists. Skipping...');
            results.success.push('Classes page skipped (already exists)');
        }
    } catch (error) {
        results.errors.push({ page: 'classes', error: error.message });
        console.error('❌ Error migrating Classes page:', error);
    }

    return results;
};

export { homePageContent, journeyPageContent, donatePageContent, volunteerPageContent, classesPageContent };
