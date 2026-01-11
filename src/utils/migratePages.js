import { createDocument } from '../firebase/firestoreService';

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

/**
 * Function to migrate page content to Firestore
 */
export const migratePageContent = async () => {
    const results = {
        success: [],
        errors: []
    };

    try {
        // Migrate Home page
        console.log('📄 Migrating Home page content...');
        await createDocument('pages', homePageContent, 'home');
        results.success.push('Home page migrated');
        console.log('✅ Home page migrated successfully');
    } catch (error) {
        results.errors.push({ page: 'home', error: error.message });
        console.error('❌ Error migrating Home page:', error);
    }

    try {
        // Migrate Journey page
        console.log('📄 Migrating Journey page content...');
        await createDocument('pages', journeyPageContent, 'journey');
        results.success.push('Journey page migrated');
        console.log('✅ Journey page migrated successfully');
    } catch (error) {
        results.errors.push({ page: 'journey', error: error.message });
        console.error('❌ Error migrating Journey page:', error);
    }

    return results;
};

export { homePageContent, journeyPageContent };
