import { useState } from 'react';
import Modal from '../components/Modal';

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
            <header className="section-padding" style={{ paddingTop: '100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '-1px' }}>
                        Scale Your Business With <span className="gradient-text">Precision Ads</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 40px' }}>
                        Strategies built for business scaling. Track every lead and transaction with our premium ad management services.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '50px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)' }}>500+</span>
                            <span style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Clients Served</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)' }}>₹1Cr+</span>
                            <span style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ad Spend Managed</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)' }}>300%</span>
                            <span style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Avg ROI</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => openModal()}>Start Your Growth</button>
                        <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => openModal()}>View Case Studies</button>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}></div>
            </header>

            {/* Features Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Why Choose Jaspro?</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We combine data, creativity, and technology to deliver unmatched results.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { icon: '📊', title: 'Data-Driven Audits', desc: 'Deep dive analysis into your current ad performance to identify leaks.' },
                            { icon: '🎯', title: 'Precision Targeting', desc: 'Reach the right audience at the right time with advanced segmentation.' },
                            { icon: '⚡', title: 'High-Speed Execution', desc: 'Rapid campaign launches and real-time optimizations.' },
                            { icon: '🛡️', title: 'Brand Safety', desc: 'Ensure your ads appear in safe, relevant environments.' },
                            { icon: '💡', title: 'Creative Strategy', desc: 'Compelling visuals and copy that convert browsers into buyers.' },
                            { icon: '📈', title: 'Scalable Growth', desc: 'Systems designed to handle increased spend while maintaining ROI.' },
                        ].map((feature, idx) => (
                            <div key={idx} style={{
                                background: 'var(--bg-card)',
                                padding: '30px',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                transition: 'all 0.3s ease'
                            }} className="hover:translate-y-[-5px]">
                                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{feature.icon}</div>
                                <h3 style={{ marginBottom: '10px', fontSize: '1.25rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                            </div>
                        ))}
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
                        {/* Audit */}
                        <PricingCard
                            title="Audit & Analysis"
                            slogan="Just see where your ad money goes."
                            price="4,000"
                            features={['Comprehensive Ad Account Audit', 'Competitor Analysis', 'Gap Identification', 'Actionable Report']}
                            btnText="CHOOSE VIEW"
                            btnType="outline"
                            onSelect={() => openModal('Audit & Analysis', '4000')}
                        />
                        {/* Tracking */}
                        <PricingCard
                            title="Conversion Tracking"
                            slogan="Track every lead & transaction."
                            price="10,000"
                            features={['Pixel & API Setup', 'Event Tracking', 'Dashboard Configuration', 'Data Integrity Check']}
                            btnText="CHOOSE TRACK"
                            btnType="primary"
                            isPopular
                            onSelect={() => openModal('Conversion Tracking Setup', '10000')}
                        />
                        {/* Management */}
                        <PricingCard
                            title="Full Ad Management"
                            slogan="Control your campaigns like a pro."
                            price="22,000"
                            features={['Campaign Strategy', 'A/B Testing', 'Weekly Optimization', 'Monthly Reporting']}
                            btnText="CHOOSE CONTROL"
                            btnType="outline"
                            onSelect={() => openModal('Full Ad Management', '22000')}
                        />
                        {/* Scale */}
                        <PricingCard
                            title="High-Volume Ad Ops"
                            slogan="Strategies built for business scaling."
                            price="37,000"
                            features={['Multi-Channel Strategy', 'Advanced Automation', 'Dedicated Account Manager', 'Priority Support']}
                            btnText="CHOOSE SCALE"
                            btnType="outline"
                            onSelect={() => openModal('High-Volume Ad Ops', '37000')}
                        />
                    </div>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} plan={selectedPlan?.name} amount={selectedPlan?.price ? `₹${selectedPlan.price}` : undefined} />
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
                className={`btn btn-${btnType} btn-block`}
                onClick={onSelect}
                style={{ marginTop: 'auto' }}
            >
                {btnText}
            </button>
        </div>
    );
};

export default Home;
