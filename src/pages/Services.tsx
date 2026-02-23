import { useState } from 'react';
import { Tag, ShoppingCart } from 'lucide-react';
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
        { title: 'Automatic call distribution software', tag: 'Software', price: '2,700', logo: 'ACD' },
        { title: 'Call accounting software', tag: 'Software', price: '3,300', logo: 'CAS' },
        { title: 'Call center scripting software', tag: 'Software', price: '4,600', logo: 'CCS' },
        { title: 'Call queue management software', tag: 'Software', price: '3,300', logo: 'CQM' },
        { title: 'Call scoring software', tag: 'Software', price: '1,700', logo: 'CSS' },
        { title: 'Dial tone multi-frequency software', tag: 'Software', price: '2,700', logo: 'DTMF' },
        { title: 'IVR software', tag: 'Software', price: '3,200', logo: 'IVR' },
        { title: 'Speech analytics software', tag: 'Software', price: '1,100', logo: 'SAS' },
        { title: 'Broken link analysis and reporting 2CHANNEL', tag: 'Software', price: '2,000', logo: 'BLA' },
        { title: 'Call center tracking software', tag: 'Software', price: '5,300', logo: 'CCT' },
        { title: 'Call recording software 4/8 CHANNEL', tag: 'Software', price: '7,900', logo: 'CRS' },
        { title: 'Call routing software (ACD) 4 CHANNEL', tag: 'Software', price: '2,900', logo: 'CRS' },
        { title: 'Cloud-based calling software (2/4/8 CHANNEL)', tag: 'Software', price: '8,600', logo: 'CBC' },
        { title: 'Computer telephony integration (CTI) software', tag: 'Software', price: '7,300', logo: 'CTI' },
        { title: 'CRM integration software solutions 8 CHANNEL', tag: 'Software', price: '11,900', logo: 'CRM' },
        { title: 'Help desk solutions', tag: 'Software', price: '2,100', logo: 'HDS' },
        { title: 'Interactive Voice Response (IVR) (2/4/8 CHANNEL)', tag: 'Software', price: '2,800', logo: 'IVR' },
        { title: 'PBX Phone systems', tag: 'Software', price: '8,300', logo: 'PBX' },
        { title: 'Predictive dialers', tag: 'Software', price: '12,500', logo: 'PD' },
        { title: 'Reporting tools', tag: 'Software', price: '7,500', logo: 'RT' },
        { title: 'Unified Communications software', tag: 'Software', price: '11,900', logo: 'UCS' },
        { title: 'Video conferencing software 4/8 CHANNEL', tag: 'Software', price: '13,600', logo: 'VCS' }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.tag === activeCategory);

    return (
        <div className="pt-20" style={{ minHeight: '100vh', background: '#050505' }}>
            <header className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
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
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', fontWeight: 800 }}>
                        Scale Faster with <span className="gradient-text">Top-Tier Tools</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                        Our curated collection of high-performance software and expert ebooks are designed to give your business an unfair advantage.
                    </p>

                    {/* Category Filter */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px', overflowX: 'auto', paddingBottom: '10px' }}>
                        {['All', 'Ebooks', 'Software', 'Gaming'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    border: '1px solid',
                                    borderColor: activeCategory === cat ? 'none' : 'rgba(255,255,255,0.0)',
                                    background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                                    color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <section className="section-padding" style={{ position: 'relative', zIndex: 2, paddingTop: '40px' }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        {filteredProducts.map((product, idx) => (
                            <div key={idx} style={{
                                background: '#111111',
                                border: '1px solid rgba(255, 204, 0, 0.5)',
                                borderRadius: '16px',
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                marginBottom: '20px',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                            }}>
                                <div style={{
                                    background: '#0a0a0a',
                                    height: '240px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px'
                                }}>
                                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', letterSpacing: '2px' }}>
                                        {product.logo}
                                    </h2>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'white', marginBottom: '8px', lineHeight: 1.3 }}>
                                        {product.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                                        Category : {product.tag}
                                    </p>

                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '24px' }}>
                                        ₹ {product.price}
                                    </div>

                                    <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                                        <button
                                            style={{
                                                flex: 1,
                                                background: '#facc15',
                                                color: '#000',
                                                border: 'none',
                                                padding: '12px 16px',
                                                borderRadius: '30px',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => openModal(product.title, product.price)}
                                        >
                                            <Tag size={18} /> Buy Now
                                        </button>
                                        <button
                                            style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'white',
                                                border: 'none',
                                                padding: '12px 16px',
                                                borderRadius: '30px',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => openModal(product.title, product.price)}
                                        >
                                            <ShoppingCart size={18} /> Add to card
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
