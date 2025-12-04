import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const StickyChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100 }}>
            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    bottom: '80px',
                    right: 0,
                    width: '300px',
                    background: 'white',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ background: '#075E54', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 600 }}>KhattakHub Support</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Typically replies in 5 mins</div>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}><X size={18} /></button>
                    </div>

                    <div style={{ padding: '1rem', height: '250px', background: '#E5DDD5', overflowY: 'auto' }}>
                        <div style={{ background: 'white', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', maxWidth: '85%', fontSize: '0.9rem', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
                            Assalam-o-Alaikum! How can we help you automate your business today?
                        </div>
                    </div>

                    <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
                        <a
                            href="https://wa.me/923145958709"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-full"
                            style={{ padding: '0.5rem', fontSize: '0.9rem', gap: '0.5rem' }}
                        >
                            <MessageCircle size={16} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: '#25D366',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default StickyChat;
