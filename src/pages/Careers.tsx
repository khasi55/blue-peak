import { useState } from 'react';
import Modal from '../components/Modal';

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Join Our <span className="gradient-text">Squad</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>We are always looking for talented individuals to help us redefine digital marketing.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2rem' }}>Open Positions</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Senior PPC Specialist', type: 'Remote • Full Time', desc: 'Expert in Google Ads and Facebook Ads scaling strategies.' },
                            { title: 'Data Analyst', type: 'Bangalore • Hybrid', desc: 'Turn complex datasets into actionable marketing insights.' },
                            { title: 'Content Strategist', type: 'Remote • Contract', desc: 'Craft compelling narratives for our diverse client base.' }
                        ].map((job, idx) => (
                            <div key={idx} style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{job.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{job.type}</p>
                                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{job.desc}</p>
                                <button className="btn btn-outline" style={{ marginTop: '20px' }} onClick={() => setIsModalOpen(true)}>Apply Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} plan="Job Application" />
        </div>
    );
};

export default Careers;
