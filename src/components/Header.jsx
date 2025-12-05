import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

import Logo from './Logo';

const Header = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'nav.home' },
        { path: '/how-it-works', label: 'nav.howItWorks' },
        { path: '/workflows', label: 'nav.workflows' },
        { path: '/academy', label: 'nav.academy' },
        { path: '/demo', label: 'nav.demo' },
        { path: '/pricing', label: 'nav.pricing' },
    ];

    return (
        <header className="header" style={{
            backgroundColor: 'var(--bg-white)',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            <div className="container flex items-center justify-between" style={{ height: '4rem' }}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-en-only">
                    <Logo className="brand-logo" style={{ width: '40px', height: '40px' }} />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-dark)' }}>
                        KhattakHub
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="nav-link"
                            style={{ fontWeight: 500, color: 'var(--text-muted)' }}
                        >
                            {t(link.label)}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 btn-outline"
                        style={{ padding: '0.5rem 1rem', borderRadius: '2rem' }}
                    >
                        <Globe size={16} />
                        <span className="font-en-only">{language === 'en' ? 'اردو' : 'English'}</span>
                    </button>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ display: 'block' }} // Hidden on desktop via CSS media query later
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--bg-white)',
                    borderBottom: '1px solid var(--border)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ padding: '0.5rem', fontWeight: 500 }}
                        >
                            {t(link.label)}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .nav-link:hover { color: var(--primary) !important; }
      `}</style>
        </header>
    );
};

export default Header;
