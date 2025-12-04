import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, RefreshCw } from 'lucide-react';

const Demo = () => {
    const { t } = useLanguage();
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: 'Welcome to KhattakHub Pizza! 🍕 How can I help you today?', options: ['Order Pizza', 'Check Status'] }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        processBotResponse(text);
    };

    const processBotResponse = (userText) => {
        setIsTyping(true);

        // Simple simulation logic
        setTimeout(() => {
            let botMsg = { id: Date.now() + 1, sender: 'bot', text: '' };
            const lowerText = userText.toLowerCase();

            if (lowerText.includes('order') || lowerText.includes('pizza')) {
                botMsg.text = "Great! What flavor would you like?";
                botMsg.options = ['Chicken Tikka', 'Fajita', 'Cheese Lover'];
            } else if (lowerText.includes('tikka') || lowerText.includes('fajita') || lowerText.includes('cheese')) {
                botMsg.text = `Excellent choice! That will be $10. Please reply with your address to confirm.`;
            } else if (lowerText.length > 10 && !lowerText.includes('status')) { // Assume address
                botMsg.text = "Thanks! Your order #1234 has been placed. A rider will be assigned shortly.";
                botMsg.options = ['Track Order', 'Main Menu'];
            } else if (lowerText.includes('status') || lowerText.includes('track')) {
                botMsg.text = "Your order #1234 is currently: On the way 🚴‍♂️";
                botMsg.options = ['Main Menu'];
            } else {
                botMsg.text = "I didn't quite catch that. Please choose an option below.";
                botMsg.options = ['Order Pizza', 'Check Status'];
            }

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const resetDemo = () => {
        setMessages([{ id: 1, sender: 'bot', text: 'Welcome to KhattakHub Pizza! 🍕 How can I help you today?', options: ['Order Pizza', 'Check Status'] }]);
    };

    return (
        <div className="demo-page" style={{ padding: '4rem 0', background: '#F0F2F5', minHeight: 'calc(100vh - 64px)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Side: Explainer */}
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Experience Automation Live</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Try our interactive sandbox. This simulates how your customers will interact with your WhatsApp bot.
                            Everything you see here happens automatically via n8n workflows.
                        </p>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>What's happening behind the scenes?</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 24, height: 24, background: '#E0F2FE', color: '#0284C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>1</div>
                                    <span>Message received via WhatsApp API</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 24, height: 24, background: '#DCFCE7', color: '#16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>2</div>
                                    <span>n8n processes intent (Order vs Status)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 24, height: 24, background: '#FEF3C7', color: '#D97706', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>3</div>
                                    <span>Database updated (Google Sheets)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div style={{ width: 24, height: 24, background: '#F3E8FF', color: '#9333EA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>4</div>
                                    <span>Response sent back to user</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Phone Simulator */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '360px',
                            height: '700px',
                            background: 'white',
                            borderRadius: '2rem',
                            border: '8px solid #1F2937',
                            boxShadow: 'var(--shadow-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Phone Header */}
                            <div style={{ background: '#075E54', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: 32, height: 32, background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#075E54' }}>
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Pizza Bot</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Online</div>
                                </div>
                                <button onClick={resetDemo} style={{ marginLeft: 'auto', color: 'white' }} title="Reset Demo">
                                    <RefreshCw size={18} />
                                </button>
                            </div>

                            {/* Chat Area */}
                            <div style={{
                                flex: 1,
                                background: '#E5DDD5',
                                padding: '1rem',
                                overflowY: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <AnimatePresence>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{
                                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                maxWidth: '80%'
                                            }}
                                        >
                                            <div style={{
                                                background: msg.sender === 'user' ? '#DCF8C6' : 'white',
                                                padding: '0.75rem',
                                                borderRadius: '0.5rem',
                                                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                                                fontSize: '0.9rem',
                                                position: 'relative'
                                            }}>
                                                {msg.text}
                                                <div style={{ fontSize: '0.65rem', color: '#999', textAlign: 'right', marginTop: '0.25rem' }}>
                                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </div>
                                            </div>

                                            {/* Options Chips */}
                                            {msg.options && (
                                                <div className="flex gap-2" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                                    {msg.options.map((opt, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => handleSend(opt)}
                                                            style={{
                                                                background: 'white',
                                                                border: '1px solid var(--primary)',
                                                                color: 'var(--primary)',
                                                                padding: '0.4rem 0.8rem',
                                                                borderRadius: '1rem',
                                                                fontSize: '0.8rem',
                                                                fontWeight: 500
                                                            }}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{ alignSelf: 'flex-start', background: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}
                                        >
                                            <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div style={{ padding: '0.75rem', background: '#F0F0F0', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                                    placeholder="Type a message"
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        borderRadius: '1.5rem',
                                        border: 'none',
                                        outline: 'none'
                                    }}
                                />
                                <button
                                    onClick={() => handleSend(input)}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        background: '#075E54',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; font-size: 1.5rem; line-height: 10px; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      `}</style>
        </div>
    );
};

export default Demo;
