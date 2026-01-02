import { useState } from 'react';
import Modal from '../components/Modal';

const Blog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Latest <span className="gradient-text">Insights</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Trends, strategies, and news from the world of digital advertising.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                tag: 'Strategy',
                                title: 'The End of Third-Party Cookies: What Next?',
                                desc: 'How to prepare your tracking infrastructure for a cookieless future.',
                                img: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800'
                            },
                            {
                                tag: 'Case Study',
                                title: 'Scaling to ₹1Cr/Month in Ad Spend',
                                desc: 'Lessons learned managing high-volume campaigns for E-commerce giants.',
                                img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
                            },
                            {
                                tag: 'Tips',
                                title: '5 Creatives That Convert in 2024',
                                desc: 'A breakdown of top-performing ad formats and why they work.',
                                img: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=800'
                            }
                        ].map((post, idx) => (
                            <div key={idx} style={{ background: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                <img src={post.img} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '25px' }}>
                                    <span style={{ color: 'var(--primary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{post.tag}</span>
                                    <h3 style={{ marginTop: '10px', marginBottom: '10px', fontSize: '1.2rem' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>{post.desc}</p>
                                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Read More &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Blog;
