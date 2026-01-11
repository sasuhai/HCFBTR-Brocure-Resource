import { useState, useEffect } from 'react';
import { getAllDocuments, createDocument } from '../firebase/firestoreService';

/**
 * Example React Component using Firestore
 * This demonstrates how to integrate Firestore into your existing pages
 */

const FirestoreExample = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load posts from Firestore on component mount
    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const fetchedPosts = await getAllDocuments('blog-posts');
            setPosts(fetchedPosts);
            setError(null);
        } catch (err) {
            console.error('Error loading posts:', err);
            setError('Failed to load posts. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePost = async () => {
        try {
            const newPost = await createDocument('blog-posts', {
                title: 'Sample Blog Post',
                content: 'This is a sample blog post created from the app.',
                author: 'HCFBTR Team',
                published: true,
                category: 'Community',
                tags: ['sample', 'test']
            });

            // Add the new post to the local state
            setPosts([...posts, newPost]);
            alert('Post created successfully!');
        } catch (err) {
            console.error('Error creating post:', err);
            alert('Failed to create post. Please try again.');
        }
    };

    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Loading posts from Firestore...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
                <p>{error}</p>
                <button onClick={loadPosts}>Retry</button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Firestore Integration Example</h2>

            <button
                onClick={handleCreatePost}
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    marginBottom: '2rem'
                }}
            >
                Create Sample Post
            </button>

            <h3>Posts from Firestore ({posts.length})</h3>

            {posts.length === 0 ? (
                <p>No posts found. Click the button above to create one!</p>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            style={{
                                padding: '1.5rem',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                backgroundColor: 'white'
                            }}
                        >
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>{post.title}</h4>
                            <p style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>
                                {post.content}
                            </p>
                            <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                                <span>By {post.author || 'Unknown'}</span>
                                {post.createdAt && (
                                    <span> • {new Date(post.createdAt).toLocaleDateString()}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FirestoreExample;
