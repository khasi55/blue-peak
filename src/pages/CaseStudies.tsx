import { useState } from 'react';
import Modal from '../components/Modal';

const CaseStudies = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Proven <span className="gradient-text">Results</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Real businesses, real growth. See how we help our clients succeed.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '15px', fontWeight: 700 }}>300%</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>ROI Increase for FinTech Startup</h3>
                            <p style={{ marginBottom: '15px', color: 'var(--text-muted)' }}>We restructured their entire Google Ads account and implemented server-side tracking.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Cost Per Lead reduced by 40%', 'Lead Quality improved by 60%', 'Scaled spend 5x in 3 months'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '10px', color: 'var(--text-muted)', position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ color: 'var(--primary)', position: 'absolute', left: 0 }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '15px', fontWeight: 700 }}>₹50L</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Extra Revenue in Q4</h3>
                            <p style={{ marginBottom: '15px', color: 'var(--text-muted)' }}>For a fashion e-commerce brand, our Black Friday strategy broke all records.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['ROAS maintained at 4.5x', 'CTR increased to 3.2%', 'New customer acquisition up 200%'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '10px', color: 'var(--text-muted)', position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ color: 'var(--primary)', position: 'absolute', left: 0 }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Start Your Success Story</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default CaseStudies;
