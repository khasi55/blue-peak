import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan?: string;
    amount?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, plan, amount }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert(`Thank you ${formData.name}! We have received your request for ${plan || 'inquiry'}.`);
            setIsSubmitting(false);
            onClose();
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    // Inline styles for modal specific overlay since it wasn't fully in index.css
    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(5px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const modalStyle: React.CSSProperties = {
        backgroundColor: 'var(--bg-card)',
        padding: '40px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        border: '1px solid var(--border)',
        position: 'relative',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px',
        background: 'var(--bg-dark)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        color: 'var(--white)',
        marginTop: '5px',
        marginBottom: '15px'
    };

    return (
        <div style={overlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div style={modalStyle}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Get Started</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {plan ? `Selected Plan: ${plan} (${amount})` : 'Please fill the form to proceed.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={{ color: 'var(--white)', fontWeight: 500 }}>Full Name</label>
                        <input
                            type="text"
                            required
                            style={inputStyle}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ color: 'var(--white)', fontWeight: 500 }}>Email Address</label>
                        <input
                            type="email"
                            required
                            style={inputStyle}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ color: 'var(--white)', fontWeight: 500 }}>Phone Number</label>
                        <input
                            type="tel"
                            required
                            style={inputStyle}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ color: 'var(--white)', fontWeight: 500 }}>Message</label>
                        <textarea
                            style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-block"
                        style={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit & Proceed'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
