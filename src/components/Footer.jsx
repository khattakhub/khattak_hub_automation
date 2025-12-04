import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{ backgroundColor: 'var(--bg-white)', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <div className="flex items-center gap-2 font-en-only" style={{ marginBottom: '1rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>K</div>
                            <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>KhattakHub</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Automating Pakistan's local commerce with n8n & WhatsApp.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Product</h4>
                        <div className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
                            <a href="/workflows">{t('nav.workflows')}</a>
                            <a href="/pricing">{t('nav.pricing')}</a>
                            <a href="/demo">{t('nav.demo')}</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Support</h4>
                        <div className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
                            <a href="/academy">{t('nav.academy')}</a>
                            <a href="#">FAQ</a>
                            <a href="#">{t('footer.contact')}</a>
                        </div>
                    </div>
                </div>

                <div className="text-center" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} KhattakHub Automation. {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
