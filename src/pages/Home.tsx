import { useState } from 'react';
import Modal from '../components/Modal';
import { Eye, Target, Zap, Shield, TrendingUp } from 'lucide-react';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | undefined>(undefined);

    const openModal = (plan?: string, price?: string) => {
        if (plan && price) {
            setSelectedPlan({ name: plan, price });
        } else {
            setSelectedPlan(undefined);
        }
        setIsModalOpen(true);
    };

    return (
        <>
            {/* Hero Section */}
            <header style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px'
            }}>
                <div className="hero-glow-sphere" style={{ top: '20%', left: '30%' }}></div>
                <div className="hero-glow-sphere" style={{ bottom: '10%', right: '10%', animationDelay: '-5s', width: '600px', height: '600px' }}></div>

                <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '850px' }}>
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
                            Digital Excellence Reimagined
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '24px', lineHeight: 1 }}>
                            Master Your Future with <span className="gradient-text">Premium Digital Assets</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '650px' }}>
                            Blue Peak Impex provides high-impact Ebooks and Software tools designed for ambitious entrepreneurs and creators.
                        </p>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ minWidth: '200px' }} onClick={() => openModal()}>
                                Explore Library
                            </button>
                            <button className="btn btn-outline" style={{ minWidth: '200px' }} onClick={() => openModal()}>
                                Top Software
                            </button>
                        </div>

                        <div style={{ display: 'flex', gap: '48px', marginTop: '64px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>10,000+</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Digital Assets</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>4.8/5</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>User Rating</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>24/7</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Direct Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features (Bento Grid) Section */}
            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container-custom">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '32px', flexWrap: 'wrap' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>Curated for <span className="gradient-text">Success</span></h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Our platform bridges the gap between deep-tech automation and world-class knowledge.</p>
                        </div>
                        <button className="btn btn-outline" onClick={() => openModal()}>View All Products</button>
                    </div>

                    <div className="bento-grid">
                        <div className="bento-item bento-item-large glass-card" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 0,
                            minHeight: '400px',
                            background: 'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1), transparent)'
                        }}>
                            <div style={{ flex: 1.2, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    marginBottom: '32px'
                                }}>
                                    <Eye size={32} />
                                </div>
                                <h3 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 800 }}>Knowledge <span className="gradient-text">Hub</span></h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '450px', lineHeight: 1.6, marginBottom: '32px' }}>
                                    Deep dive into our curated collection of ebooks covering everything from AI integration to high-ticket sales strategies.
                                </p>
                                <button className="btn btn-outline" style={{ alignSelf: 'flex-start' }} onClick={() => openModal()}>Explore Books</button>
                            </div>
                            <div style={{
                                flex: 0.8,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                background: 'rgba(255,255,255,0.02)'
                            }}>
                                <div className="shimmer-bg" style={{ position: 'absolute', inset: 0 }}></div>
                                <div className="float-animation" style={{
                                    zIndex: 2,
                                    padding: '20px',
                                }}>
                                    {/* Mockup Book Visual */}
                                    <div style={{
                                        width: '240px',
                                        height: '320px',
                                        background: 'var(--gradient-main)',
                                        borderRadius: '8px 24px 24px 8px',
                                        boxShadow: '-20px 20px 60px rgba(0,0,0,0.6), inset 5px 0 10px rgba(255,255,255,0.2)',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '30px',
                                        transform: 'perspective(1000px) rotateY(-15deg)'
                                    }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.8, marginBottom: '10px' }}>BLUE PEAK IMPEX</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 'auto' }}>THE GROWTH GUIDE</div>
                                        <div style={{ height: '2px', background: 'white', width: '40px', opacity: 0.3, marginBottom: '20px' }}></div>
                                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>A MASTERCLASS IN DIGITAL SCALING</div>
                                    </div>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                                    zIndex: 1
                                }}></div>
                            </div>
                        </div>

                        <div className="bento-item bento-item-medium glass-card" style={{ padding: '40px', background: 'var(--gradient-main)' }}>
                            <div style={{ color: 'var(--white)', marginBottom: '24px' }}><Zap size={40} /></div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--white)' }}>Instant Delivery</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>No waiting. No delays. Access your software and ebooks immediately after checkout.</p>
                        </div>

                        <div className="bento-item bento-item-small glass-card" style={{ padding: '32px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '16px' }}><Target size={32} /></div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Built for ROI</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Every product is vetted for actionable value.</p>
                        </div>

                        <div className="bento-item bento-item-small glass-card" style={{ padding: '32px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '16px' }}><Shield size={32} /></div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Global Trust</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Secured by industry-standard encryption.</p>
                        </div>

                        <div className="bento-item bento-item-small glass-card" style={{ padding: '32px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '16px' }}><TrendingUp size={32} /></div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Lifetime Updates</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Free future versions for all software.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding" style={{ background: 'var(--bg-darker)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Simple, Transparent Pricing</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {/* Ebook */}
                        <PricingCard
                            title="The Growth Guide"
                            slogan="Master the art of business scaling."
                            price="499"
                            features={['100+ Strategic Insights', 'Case Studies Included', 'Lifetime Access', 'Free Future Updates']}
                            btnText="GET EBOOK"
                            btnType="outline"
                            onSelect={() => openModal('The Growth Guide (Ebook)', '499')}
                        />
                        {/* Software */}
                        <PricingCard
                            title="Automation Suite v1"
                            slogan="Save 20+ hours every week."
                            price="2,499"
                            features={['Workflow Automation', 'Lead Scraper Pro', 'Email Sync Utility', 'Priority Support']}
                            btnText="GET SOFTWARE"
                            btnType="primary"
                            isPopular
                            onSelect={() => openModal('Automation Suite v1 (Software)', '2499')}
                        />
                        {/* Ebook */}
                        <PricingCard
                            title="Digital Sales Master"
                            slogan="Close more deals with less effort."
                            price="799"
                            features={['Script Templates', 'Psychology of Selling', 'Objection Handling', 'Bonus Training Video']}
                            btnText="GET EBOOK"
                            btnType="outline"
                            onSelect={() => openModal('Digital Sales Master (Ebook)', '799')}
                        />
                        {/* Software */}
                        <PricingCard
                            title="Lead Gen Analytics"
                            slogan="The ultimate tracking software."
                            price="4,999"
                            features={['Cross-Platform Tracking', 'ROI Calculator', 'Custom Dashboards', 'API Integration']}
                            btnText="GET SOFTWARE"
                            btnType="outline"
                            onSelect={() => openModal('Lead Gen Analytics (Software)', '4999')}
                        />
                    </div>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} plan={selectedPlan?.name} amount={selectedPlan?.price ? `₹${selectedPlan.price} ` : undefined} />
        </>
    );
};

const PricingCard = ({ title, slogan, price, features, btnText, btnType, isPopular, onSelect }: any) => {
    return (
        <div style={{
            background: 'var(--bg-card)',
            padding: '40px 30px',
            borderRadius: '12px',
            border: isPopular ? '2px solid var(--primary)' : '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            transform: isPopular ? 'scale(1.05)' : 'none',
            zIndex: isPopular ? 10 : 1
        }}>
            {isPopular && (
                <div style={{
                    position: 'absolute', top: '-15px', background: 'var(--gradient-main)',
                    color: 'white', padding: '5px 15px', borderRadius: '20px',
                    fontSize: '0.8rem', fontWeight: 700
                }}>Most Popular</div>
            )}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem', height: '40px' }}>"{slogan}"</p>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '30px' }}>
                <span style={{ fontSize: '1.5rem', verticalAlign: 'top', marginRight: '5px' }}>₹</span>{price}
            </div>
            <ul style={{ marginBottom: '30px', textAlign: 'left', width: '100%', listStyle: 'none', padding: 0 }}>
                {features.map((feat: string, i: number) => (
                    <li key={i} style={{ marginBottom: '10px', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                        <span style={{ color: 'var(--primary)', position: 'absolute', left: 0 }}>✓</span> {feat}
                    </li>
                ))}
            </ul>
            <button
                className={`btn btn - ${btnType} btn - block`}
                onClick={onSelect}
                style={{ marginTop: 'auto' }}
            >
                {btnText}
            </button>
        </div>
    );
};

export default Home;
