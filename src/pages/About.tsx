import { useState } from 'react';
import Modal from '../components/Modal';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>About <span className="gradient-text">Third eye creation</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>We are a team of data scientists, creatives, and strategists dedicated to scaling businesses.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-muted)' }}>To demystify digital advertising and provide transparent, high-ROI solutions for businesses of all sizes.</p>
                        </div>
                        <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Vision</h3>
                            <p style={{ color: 'var(--text-muted)' }}>To be the world's most trusted partner for data-driven growth strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-darker" style={{ background: 'var(--bg-darker)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Our Story</h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', textAlign: 'center' }}>
                        <p style={{ marginBottom: '20px' }}>Founded in 2020, Third eye creation was born from a desire to blend visionary creativity with deep-tech data. We believe that true business scaling happens when you see what others miss—the hidden patterns in consumer behavior and the untapped potential of soulful brand narratives.</p>
                        <p>We built the Visionary Framework, our proprietary methodology, to bridge the gap between creative intuition and bottom-line results. Today, we empower brands across the globe to manifest their full digital potential.</p>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Work With Us</button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default About;
