import { useState } from 'react';
import Modal from '../components/Modal';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | undefined>(undefined);

    const openModal = (plan: string, price: string) => {
        setSelectedPlan({ name: plan, price });
        setIsModalOpen(true);
    };

    const services = [
        {
            title: 'Audit & Analysis',
            desc: 'We perform a deep-dive 50-point audit of your ad accounts to identify wasted spend and missed opportunities.',
            price: '4,000',
            img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Conversion Tracking',
            desc: 'Server-side tracking (CAPI) setup to ensure you measure every single conversion accurately.',
            price: '10,000',
            img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Full Ad Management',
            desc: 'Complete hands-off management of your campaigns. We handle strategy, creative, and optimization.',
            price: '22,000',
            img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'High-Volume Scaling',
            desc: 'Advanced strategies for accounts spending over ₹10L/month. Automation, rules, and bid strategies.',
            price: '37,000',
            img: 'https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    return (
        <div className="pt-20">
            <header className="section-padding text-center">
                <div className="container-custom">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="gradient-text">Expertise</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>End-to-end digital marketing solutions tailored for growth.</p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                        {services.map((service, idx) => (
                            <div key={idx} style={{ background: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                <img src={service.img} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '25px' }}>
                                    <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{service.desc}</p>
                                    <button
                                        className="btn btn-outline btn-block"
                                        onClick={() => openModal(service.title, service.price)}
                                    >
                                        Book - ₹{service.price}
                                    </button>
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

export default Services;
