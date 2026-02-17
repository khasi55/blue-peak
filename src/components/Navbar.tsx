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
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const navbarStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '20px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    };

    const linkStyle = (active: boolean): React.CSSProperties => ({
        color: active ? 'var(--primary)' : 'var(--text-muted)',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    });

    return (
        <>
            <nav style={navbarStyle}>
                <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        fontFamily: 'Outfit, sans-serif',
                        textDecoration: 'none'
                    }}>
                        <img src="/logo.jpg" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                        <span style={{
                            background: 'var(--gradient-main)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Blue Peak Impex
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div style={{ display: 'flex', gap: '30px' }} className="hidden md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={linkStyle(isActive(link.path))}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button className="btn btn-primary hidden md:inline-flex" onClick={() => setIsModalOpen(true)}>
                            Get Started
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
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
                        padding: '20px',
                        borderBottom: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
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
                            Get Started
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
