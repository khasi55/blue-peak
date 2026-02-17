import { useState } from 'react';
import Modal from '../components/Modal';

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | undefined>(undefined);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const openModal = (plan: string, price: string) => {
        setSelectedPlan({ name: plan, price });
        setIsModalOpen(true);
    };

    const products = [
        {
            title: 'Neural Lead Bot',
            tag: 'SOFTWARE',
            desc: 'Advanced AI lead extraction and automated outreach system. Scale your prospecting with zero manual effort.',
            price: '8,499',
            img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['AI Pattern Matching', 'Multi-channel Outreach', 'Real-time Analytics'],
            popular: true
        },
        {
            title: 'The Modern Tycoon',
            tag: 'EBOOK',
            desc: 'The definitive blueprint for building a high-revenue digital company in 2026. Zero fluff, pure strategy.',
            price: '1,499',
            img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['Revenue Scaling Framework', 'Hiring Systems', 'Tax Optimization']
        },
        {
            title: 'SaaS Foundry Suite',
            tag: 'SOFTWARE',
            desc: 'Launch your own software products in days, not months. The ultimate production-ready boilerplate.',
            price: '12,999',
            img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['Payment Integration', 'Auth & User Mgmt', 'Cloud Deployment Ready']
        },
        {
            title: 'Psychology of Closing',
            tag: 'EBOOK',
            desc: 'Master the cognitive triggers that drive high-ticket sales. A masterclass in verbal and written persuasion.',
            price: '2,999',
            img: 'https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['50+ Cognitive Triggers', 'Objection Handling', 'Dark Patterns Defense']
        },
        {
            title: 'LinkedIn Growth Auto',
            tag: 'SOFTWARE',
            desc: 'Automate your thought leadership. Schedule, interact, and grow your network while you sleep.',
            price: '3,999',
            img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['AI Ghostwriter', 'Engagement Pod Analysis', 'CRM Sync']
        },
        {
            title: 'Ad Arbitrage Secrets',
            tag: 'EBOOK',
            desc: 'Learn how to buy low-cost traffic and flip it for massive profits using data-driven arbitrage techniques.',
            price: '1,999',
            img: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
            features: ['Platform Arbitrage', 'Creative Testing Ops', 'ROI Calculator']
        }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.tag === activeCategory.toUpperCase());

    return (
        <div className="pt-20" style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <header className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="hero-glow-sphere" style={{ top: '-10%', left: '50%', width: '1000px', height: '1000px' }}></div>
                <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-flex',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '24px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        PREMIUM DIGITAL ASSETS
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '20px', fontWeight: 800 }}>
                        Scale Faster with <span className="gradient-text">Top-Tier Tools</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                        Our curated collection of high-performance software and expert ebooks are designed to give your business an unfair advantage.
                    </p>

                    {/* Category Filter */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px' }}>
                        {['All', 'Ebooks', 'Software'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    border: '1px solid',
                                    borderColor: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                    background: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                                    color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <section className="section-padding" style={{ position: 'relative', zIndex: 2, paddingTop: 0 }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
                        {filteredProducts.map((product, idx) => (
                            <div key={idx} className="glass-card bento-item" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                            }}>
                                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                                    <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-image-hover" />
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        padding: '6px 14px',
                                        background: 'rgba(2, 6, 23, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: 800,
                                        color: 'var(--primary)',
                                        border: '1px solid rgba(59, 130, 246, 0.4)',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {product.tag}
                                    </div>
                                    {product.popular && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                            padding: '6px 14px',
                                            background: 'var(--gradient-main)',
                                            borderRadius: '100px',
                                            fontSize: '0.8rem',
                                            fontWeight: 800,
                                            color: 'white',
                                            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
                                        }}>
                                            MOST POPULAR
                                        </div>
                                    )}
                                </div>
                                <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ marginBottom: '16px', fontSize: '1.85rem', fontWeight: 700 }}>{product.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '1.1rem', lineHeight: 1.6 }}>{product.desc}</p>

                                    <div style={{ marginBottom: '40px' }}>
                                        {product.features.map((f, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>₹{product.price}</div>
                                        <button
                                            className="btn btn-primary"
                                            style={{ padding: '12px 32px', borderRadius: '12px', fontWeight: 700 }}
                                            onClick={() => openModal(product.title, product.price)}
                                        >
                                            Get Access
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} plan={selectedPlan?.name} amount={selectedPlan?.price ? `₹${selectedPlan.price}` : undefined} />
        </div>
    );
};

export default Products;
