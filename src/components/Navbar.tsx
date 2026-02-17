import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Modal from './Modal';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const navbarStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(2, 6, 23, 0.8)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        padding: '16px 0',
        borderBottom: '1px solid var(--border)',
    };

    const linkStyle = (active: boolean): React.CSSProperties => ({
        color: active ? 'var(--white)' : 'var(--text-muted)',
        fontWeight: active ? 600 : 500,
        fontSize: '0.9rem',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        position: 'relative',
        padding: '4px 0'
    });

    return (
        <>
            <nav style={navbarStyle}>
                <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        fontFamily: 'Outfit, sans-serif',
                        textDecoration: 'none'
                    }}>
                        <img src="/logo.jpg" alt="Logo" style={{ height: '32px', width: 'auto', borderRadius: '4px' }} />
                        <span style={{
                            background: 'var(--gradient-main)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Blue Peak
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={linkStyle(isActive(link.path))}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--gradient-main)',
                                        borderRadius: '2px'
                                    }}></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }} onClick={() => setIsModalOpen(true)}>
                            Join Now
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        backgroundColor: 'var(--bg-dark)',
                        padding: '24px',
                        borderBottom: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={linkStyle(isActive(link.path))}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn btn-primary btn-block" onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}>
                            Join Now
                        </button>
                    </div>
                )}
            </nav>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Spacer for fixed navbar */}
            <div style={{ height: '80px' }}></div>
        </>
    );
};

export default Navbar;
