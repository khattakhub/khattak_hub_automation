import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { workflows } from '../data/workflows';
import { MessageCircle, ShoppingCart, MapPin, RefreshCcw, Star, ArrowRight, Download } from 'lucide-react';

const iconMap = {
    MessageCircle,
    ShoppingCart,
    MapPin,
    RefreshCcw,
    Star
};

const Workflows = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(workflows.map(w => w.category))];
    const filteredWorkflows = filter === 'All'
        ? workflows
        : workflows.filter(w => w.category === filter);

    return (
        <div className="workflows-page" style={{ padding: '4rem 0', minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{t('workflows.title')}</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Browse our library of pre-built n8n workflows designed for Pakistani businesses.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4" style={{ marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                            style={{ borderRadius: '2rem', padding: '0.5rem 1.5rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredWorkflows.map(workflow => {
                        const Icon = iconMap[workflow.icon] || MessageCircle;
                        return (
                            <div key={workflow.id} style={{
                                background: 'white',
                                borderRadius: '1rem',
                                padding: '2rem',
                                border: '1px solid var(--border)',
                                transition: 'transform 0.2s',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    background: 'var(--bg-light)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    marginBottom: '1.5rem'
                                }}>
                                    <Icon size={24} />
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{workflow.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{workflow.description}</p>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    {workflow.features.map((feat, i) => (
                                        <div key={i} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }}></div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between" style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>${workflow.price}</span>
                                    <a
                                        href={`https://wa.me/923145958709?text=I%20want%20to%20buy%20workflow:%20${workflow.title}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                                    >
                                        {t('workflows.deployBtn')} <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Workflows;
