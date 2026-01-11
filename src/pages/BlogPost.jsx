import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { queryDocuments } from '../firebase/firestoreService';
import './BlogPost.css';

const Icons = {
    ArrowLeft: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>,
    Loader: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
};

const PostImage = ({ image }) => {
    if (!image) return null;
    if (image.startsWith('/') || image.startsWith('http')) {
        return <img src={image} alt="Post" />;
    }
    return <span>{image}</span>;
};

function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog post from Firestore
    useEffect(() => {
        loadBlogPost();
    }, [slug]);

    const loadBlogPost = async () => {
        try {
            setLoading(true);
            // Query for post with matching slug
            const posts = await queryDocuments('blog-posts', [
                { field: 'slug', operator: '==', value: slug }
            ]);

            if (posts.length > 0) {
                setPost(posts[0]);
                setError(null);
            } else {
                setPost(null);
                setError('Post not found');
            }
        } catch (err) {
            console.error('Error loading blog post:', err);
            setError('Failed to load post');
        } finally {
            setLoading(false);
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="blog-post-page">
                <div className="container section">
                    <div className="text-center" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--color-text-secondary)' }}><Icons.Loader /></div>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                            Memuatkan artikel... | Loading post...
                        </p>
                    </div>
                </div>
            </div>);
    }

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
                            <Icons.ArrowLeft /> Kembali ke Blog
                        </Link>
                        <div className="post-header-content">
                            <div className="post-icon">
                                <PostImage image={post.image} />
                            </div>
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
                            <Link to="/blog" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <Icons.ArrowLeft /> Baca Artikel Lain
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
