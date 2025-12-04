import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Users, Headphones, ShieldCheck, FileText } from 'lucide-react';

const Academy = () => {
    const { t } = useLanguage();

    const modules = [
        {
            title: "Module 1: WhatsApp Business Basics",
            duration: "2 Hours",
            description: "Understanding WhatsApp Business API, labels, and quick replies.",
            icon: MessageCircle => <MessageCircle />
        },
        {
            title: "Module 2: n8n Workflow Monitoring",
            duration: "3 Hours",
            description: "How to read execution logs and handle failed workflows.",
            icon: Zap => <Zap />
        },
        {
            title: "Module 3: Customer Service Soft Skills",
            duration: "4 Hours",
            description: "Tone of voice, empathy, and de-escalation techniques for angry customers.",
            icon: Users => <Users />
        },
        {
            title: "Module 4: Crisis Management",
            duration: "2 Hours",
            description: "What to do when the bot fails or a courier is lost.",
            icon: ShieldCheck => <ShieldCheck />
        }
    ];

    return (
        <div className="academy-page" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Agent Academy</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Train your human agents to work seamlessly alongside your AI automation.
                        Our certification program ensures your team knows exactly when to step in.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                        <div style={{ width: 48, height: 48, background: '#E0F2FE', color: '#0284C7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Headphones size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Human + AI Hybrid Model</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Automation handles 80% of queries. Your agents handle the complex 20%. We teach them how to identify the difference.
                        </p>
                    </div>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                        <div style={{ width: 48, height: 48, background: '#DCFCE7', color: '#16A34A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <BookOpen size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Standard Operating Procedures</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Get access to our library of scripts and SOPs for common e-commerce scenarios in Pakistan (late delivery, wrong item, refund).
                        </p>
                    </div>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                        <div style={{ width: 48, height: 48, background: '#FEF3C7', color: '#D97706', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Users size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Role-Playing Scenarios</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Practical exercises where agents practice handling difficult customers and technical glitches.
                        </p>
                    </div>
                </div>

                <div style={{ background: 'var(--bg-white)', borderRadius: '1.5rem', padding: '3rem', border: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Training Modules</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {modules.map((mod, i) => (
                            <div key={i} style={{ padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '1rem' }}>
                                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{mod.title}</h4>
                                <div style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>{mod.duration}</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{mod.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <a
                            href="/docs/agent_training_manual.txt"
                            download
                            className="btn btn-primary"
                            style={{ padding: '1rem 2rem' }}
                        >
                            <FileText size={20} />
                            Download Sample Training Guide
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;
