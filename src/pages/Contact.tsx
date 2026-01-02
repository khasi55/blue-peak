import React, { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert('Message sent successfully!');
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Get In <span className="gradient-text">Touch</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Ready to scale? Let's discuss your growth strategy.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Information</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Fill out the form or reach us directly.</p>

                            <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Email</h4>
                                <p style={{ color: 'var(--text-muted)' }}>info@jasprosolutions.com</p>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Phone</h4>
                                <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Address</h4>
                                <p style={{ color: 'var(--text-muted)' }}>123 Business Park, Tech City<br />Bangalore, Karnataka, India</p>
                            </div>
                        </div>

                        <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--white)' }}>Full Name</label>
                                    <input type="text" required style={{ width: '100%', padding: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--white)' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--white)' }}>Email Address</label>
                                    <input type="email" required style={{ width: '100%', padding: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--white)' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--white)' }}>Subject</label>
                                    <input type="text" required style={{ width: '100%', padding: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--white)' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--white)' }}>Message</label>
                                    <textarea style={{ width: '100%', padding: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--white)', height: '100px', resize: 'vertical' }}></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
