import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Policies = () => {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--primary-dark)' }}>
                Policies
            </h1>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
                    Privacy Policy
                </h2>
                <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    At KhattakHub Automation, we value your privacy. This policy outlines how we collect, use, and protect your personal information.
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>We collect information necessary to provide our automation services.</li>
                    <li style={{ marginBottom: '0.5rem' }}>We do not sell your personal data to third parties.</li>
                    <li style={{ marginBottom: '0.5rem' }}>We use industry-standard security measures to protect your data.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
                    Terms of Service
                </h2>
                <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    By using our services, you agree to the following terms:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>You agree to use our automation tools responsibly and legally.</li>
                    <li style={{ marginBottom: '0.5rem' }}>We reserve the right to terminate services for violations of these terms.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Our services are provided "as is" without any warranties.</li>
                </ul>
            </section>

            <section>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
                    Refund Policy
                </h2>
                <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    We offer a satisfaction guarantee. If you are not satisfied with our services, please contact us within 14 days for a refund.
                </p>
            </section>
        </div>
    );
};

export default Policies;
