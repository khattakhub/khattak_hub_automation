import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t, language } = useLanguage();
    const isRtl = language === 'ur';

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--bg-light) 0%, #E0F2FE 100%)',
                padding: '6rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            color: 'var(--text-main)'
                        }}>
                            {t('hero.title')}
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '500px'
                        }}>
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/923145958709?text=I%20want%20to%20buy%20automation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
                            >
                                <MessageCircle size={20} />
                                {t('hero.ctaPrimary')}
                            </a>
                            <Link to="/workflows" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>

                        <div className="flex gap-4" style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} color="var(--success)" />
                                {t('hero.trust1')}
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} color="var(--success)" />
                                {t('hero.trust2')}
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} color="var(--success)" />
                                {t('hero.trust3')}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Abstract visual representation of workflow */}
                        <div style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '1.5rem',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--border)'
                        }}>
                            <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                                <div style={{ width: 48, height: 48, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <MessageCircle />
                                </div>
                                <div style={{ flex: 1, height: 2, background: 'var(--border)' }}></div>
                                <div style={{ width: 48, height: 48, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Zap />
                                </div>
                                <div style={{ flex: 1, height: 2, background: 'var(--border)' }}></div>
                                <div style={{ width: 48, height: 48, background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <ArrowRight />
                                </div>
                            </div>
                            <div style={{ background: '#F1F5F9', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#334155' }}>
                                <div>Order received: #1023</div>
                                <div style={{ color: 'var(--success)' }}>✓ Added to Google Sheets</div>
                                <div style={{ color: 'var(--success)' }}>✓ Courier Assigned: Rider_Ali</div>
                                <div style={{ color: 'var(--success)' }}>✓ Confirmation sent to Customer</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof */}
            <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container text-center">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 600 }}>TRUSTED BY LOCAL BUSINESSES</p>
                    <div className="flex justify-center gap-8" style={{ flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(100%)' }}>
                        {/* Placeholders for logos */}
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>LahoreEats</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>KarachiMart</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>PeshawarLogistics</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>QuettaStyles</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
