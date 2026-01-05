import React, { useState } from 'react';
import { X } from 'lucide-react';
import qrCode from '../assets/qr-code.png';

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
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    const handleClose = () => {
        onClose();
        setIsSuccess(false); // Reset success state when closing
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

    return (
        <div style={overlayStyle} onClick={(e) => e.target === e.currentTarget && handleClose()}>
            <div className="modal-content">
                <button
                    onClick={handleClose}
                    style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                {isSuccess ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            fontSize: '2rem',
                            color: 'white'
                        }}>
                            ✓
                        </div>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Success!</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                            Thank you! We have received your request.
                        </p>
                        <button
                            onClick={handleClose}
                            className="btn btn-primary"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.5rem' }}>Get Started</h2>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {plan ? `Selected Plan: ${plan} (${amount})` : 'Please fill the form to proceed.'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="form-input"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-input"
                                    style={{ height: '100px', resize: 'vertical' }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary btn-block"
                                style={{ opacity: isSubmitting ? 0.7 : 1, marginBottom: '20px' }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit & Proceed'}
                            </button>
                        </form>
                    </>
                )}

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--white)', marginBottom: '15px', fontSize: '1.1rem' }}>Or Scan to Pay Instantly</h3>
                    <div style={{ background: 'white', padding: '10px', borderRadius: '8px', display: 'inline-block' }}>
                        <img
                            src={qrCode}
                            alt="Scan & Pay"
                            style={{ display: 'block', maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
                        />
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>
                        Scan using any UPI app
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
