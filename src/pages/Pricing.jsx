import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const Pricing = () => {
    const { t } = useLanguage();

    const tiers = [
        {
            name: 'Starter',
            price: '$49',
            period: 'one-time',
            description: 'Perfect for small shops just starting out.',
            features: [
                '1 Basic Workflow (Order Intake)',
                'Google Sheets Integration',
                'Basic WhatsApp Setup Guide',
                'Email Support'
            ],
            cta: 'Get Starter',
            popular: false
        },
        {
            name: 'Growth',
            price: '$149',
            period: 'one-time',
            description: 'For growing businesses needing more automation.',
            features: [
                '3 Premium Workflows',
                'Abandoned Cart Recovery',
                'Courier Assignment Logic',
                '1 Hour Setup Call',
                'Priority WhatsApp Support'
            ],
            cta: 'Get Growth',
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$499',
            period: 'one-time',
            description: 'Full custom automation for large operations.',
            features: [
                'Unlimited Workflows',
                'Custom API Integrations',
                'Dedicated Account Manager',
                'Agent Training Session',
                '24/7 Priority Support'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="pricing-page" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{t('pricing.title')}</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Choose the right package for your business needs.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    {tiers.map((tier, index) => (
                        <div key={index} style={{
                            background: 'white',
                            borderRadius: '1.5rem',
                            padding: '2rem',
                            border: tier.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
                            boxShadow: tier.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                            position: 'relative'
                        }}>
                            {tier.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.875rem',
                                    fontWeight: 600
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{tier.name}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>{tier.description}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 800 }}>{tier.price}</span>
                                <span style={{ color: 'var(--text-muted)' }}>/{tier.period}</span>
                            </div>

                            <a
                                href={`https://wa.me/923145958709?text=I%20want%20to%20buy%20${tier.name}%20package`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn w-full ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
                                style={{ marginBottom: '2rem' }}
                            >
                                {tier.cta}
                            </a>

                            <div className="flex flex-col gap-4">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
