import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Sample blog posts - in production, this would come from a CMS or API
const blogPosts = [
    {
        id: 1,
        slug: 'kisah-aminah-hafal-quran',
        title: 'Kisah Aminah: Dari Tidak Tahu Membaca kepada Hafal 5 Juzuk',
        excerpt: 'Perjalanan inspiratif seorang pelajar yang gigih mengejar cita-cita untuk menghafal Al-Quran...',
        date: '2024-12-15',
        author: 'Admin HCFBTR',
        tags: ['kisah pelajar', 'tahfiz', 'inspirasi'],
        image: '📚',
        featured: true
    },
    {
        id: 2,
        slug: 'program-sukarelawan-2024',
        title: 'Program Sukarelawan 2024: Pengalaman Yang Mengubah Hidup',
        excerpt: 'Refleksi dari sukarelawan kami tentang pengalaman memberi dan menerima sepanjang tahun...',
        date: '2024-12-01',
        author: 'Ustaz Ahmad',
        tags: ['sukarelawan', 'aktiviti', 'refleksi'],
        image: '🤝'
    },
    {
        id: 3,
        slug: 'tips-belajar-bahasa-arab',
        title: '5 Tips Mudah Belajar Bahasa Arab untuk Pemula',
        excerpt: 'Panduan praktikal untuk mereka yang ingin mulakan pembelajaran Bahasa Arab dengan berkesan...',
        date: '2024-11-20',
        author: 'Ustazah Fatimah',
        tags: ['pendidikan', 'bahasa arab', 'tips'],
        image: '🔤'
    },
    {
        id: 4,
        slug: 'majlis-tahunan-2024',
        title: 'Majlis Tahunan HCFBTR 2024: Meraikan 10 Tahun Bersama',
        excerpt: 'Kenangan indah dari majlis tahunan kami yang meraikan sedekad perkhidmatan...',
        date: '2024-11-05',
        author: 'Admin HCFBTR',
        tags: ['aktiviti', 'pencapaian', 'perayaan'],
        image: '🎉'
    },
    {
        id: 5,
        slug: 'pentingnya-adab-dalam-menuntut-ilmu',
        title: 'Pentingnya Adab Dalam Menuntut Ilmu',
        excerpt: 'Mengapa adab dan akhlak adalah asas penting dalam pembelajaran agama...',
        date: '2024-10-15',
        author: 'Ustaz Yusof',
        tags: ['pendidikan', 'adab', 'akhlak'],
        image: '🌟'
    },
    {
        id: 6,
        slug: 'pencapaian-pelajar-2024',
        title: 'Pencapaian Cemerlang Pelajar Tahun 2024',
        excerpt: 'Tahniah kepada pelajar-pelajar kami yang mencatatkan pencapaian gemilang dalam pelbagai bidang...',
        date: '2024-10-01',
        author: 'Admin HCFBTR',
        tags: ['pencapaian', 'kisah pelajar'],
        image: '🏆'
    }
];

const allTags = ['semua', 'kisah pelajar', 'aktiviti', 'sukarelawan', 'pencapaian', 'pendidikan', 'inspirasi', 'tips'];

function Blog() {
    const [selectedTag, setSelectedTag] = useState('semua');

    const filteredPosts = selectedTag === 'semua'
        ? blogPosts
        : blogPosts.filter(post => post.tags.includes(selectedTag));

    const featuredPost = blogPosts.find(post => post.featured);

    return (
        <div className="blog-page">
            {/* Header */}
            <section className="blog-header section-sm">
                <div className="container">
                    <div className="page-header text-center">
                        <h1 className="page-title">Stories & Updates</h1>
                        <p className="page-subtitle">Cerita & Berita</p>
                        <p className="page-description">
                            Ikuti perjalanan kami, baca kisah inspiratif, dan kekal terkini dengan
                            aktiviti dan pencapaian terbaru HCFBTR
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="featured-section section-sm">
                    <div className="container">
                        <Link to={`/blog/${featuredPost.slug}`} className="featured-post card">
                            <div className="featured-badge">Featured</div>
                            <div className="featured-content">
                                <div className="featured-image">
                                    <span className="featured-emoji">{featuredPost.image}</span>
                                </div>
                                <div className="featured-text">
                                    <div className="post-meta">
                                        <span className="post-date">{new Date(featuredPost.date).toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span className="post-author">oleh {featuredPost.author}</span>
                                    </div>
                                    <h2 className="featured-title">{featuredPost.title}</h2>
                                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                                    <div className="post-tags">
                                        {featuredPost.tags.map((tag, index) => (
                                            <span key={index} className="badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Tag Filter */}
            <section className="filter-section">
                <div className="container">
                    <div className="tag-filter">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="posts-section section">
                <div className="container">
                    <div className="posts-grid">
                        {filteredPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.slug}`} className="post-card card">
                                <div className="post-image">
                                    <span className="post-emoji">{post.image}</span>
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span className="post-date">{new Date(post.date).toLocaleDateString('ms-MY', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <div className="post-tags">
                                        {post.tags.slice(0, 2).map((tag, index) => (
                                            <span key={index} className="badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-posts text-center">
                            <p>Tiada artikel untuk tag ini buat masa sekarang.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Blog;
