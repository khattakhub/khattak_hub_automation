import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Settings, Play, Users, Package } from 'lucide-react';

const HowItWorks = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            title: t('howItWorks.step1'),
            desc: "Select a workflow package that fits your business needs (Starter, Growth, or Enterprise).",
            icon: Package,
            color: "var(--primary)"
        },
        {
            id: 2,
            title: t('howItWorks.step2'),
            desc: "We configure the n8n workflows to match your specific products, pricing, and delivery zones.",
            icon: Settings,
            color: "var(--secondary)"
        },
        {
            id: 3,
            title: t('howItWorks.step3'),
            desc: "We connect your WhatsApp Business API and run live tests to ensure everything works perfectly.",
            icon: Play,
            color: "#8B5CF6" // Violet
        },
        {
            id: 4,
            title: t('howItWorks.step4'),
            desc: "Your team gets trained on how to monitor the system, and you go live to accept automated orders.",
            icon: Users,
            color: "#10B981" // Emerald
        }
    ];

    return (
        <div className="how-it-works-page" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{t('howItWorks.title')}</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        From zero to fully automated in 4 simple steps. We handle the technical heavy lifting.
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Connecting Line (Desktop) */}
                    <div className="desktop-line" style={{
                        position: 'absolute',
                        top: '24px',
                        left: '10%',
                        right: '10%',
                        height: '4px',
                        background: 'var(--border)',
                        zIndex: 0
                    }}></div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center"
                                >
                                    <div style={{
                                        width: 56,
                                        height: 56,
                                        background: step.color,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        margin: '0 auto 1.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        border: '4px solid var(--bg-light)'
                                    }}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ marginTop: '6rem', background: 'white', padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>See the Flow in Action</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                This is a real example of an n8n workflow we deploy. It listens for WhatsApp messages, checks Google Sheets for customer data, and decides whether to reply automatically or alert a human agent.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }}></div>
                                    <span>Visual Drag & Drop Builder</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }}></div>
                                    <span>Connects to 200+ Apps</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }}></div>
                                    <span>Self-hosted for Data Privacy</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{
                            background: '#F8FAFC',
                            borderRadius: '1rem',
                            padding: '1rem',
                            border: '1px solid var(--border)',
                            overflow: 'hidden'
                        }}>
                            {/* Simplified visual representation of n8n UI */}
                            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                                <div className="n8n-node" style={{ minWidth: 120, height: 80, background: 'white', border: '1px solid #ddd', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ fontSize: 10, color: '#666' }}>Trigger</div>
                                    <div style={{ fontWeight: 600 }}>WhatsApp</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>→</div>
                                <div className="n8n-node" style={{ minWidth: 120, height: 80, background: 'white', border: '1px solid #ddd', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ fontSize: 10, color: '#666' }}>Action</div>
                                    <div style={{ fontWeight: 600 }}>Google Sheets</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>→</div>
                                <div className="n8n-node" style={{ minWidth: 120, height: 80, background: 'white', border: '1px solid #ddd', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ fontSize: 10, color: '#666' }}>Logic</div>
                                    <div style={{ fontWeight: 600 }}>IF / ELSE</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>→</div>
                                <div className="n8n-node" style={{ minWidth: 120, height: 80, background: 'white', border: '1px solid #ddd', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ fontSize: 10, color: '#666' }}>Response</div>
                                    <div style={{ fontWeight: 600 }}>Send Message</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-line { display: none; }
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
};

export default HowItWorks;
