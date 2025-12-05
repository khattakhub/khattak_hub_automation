import React from 'react';

const Logo = ({ className, style }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <defs>
                <linearGradient id="logoTealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#0E7490" />
                </linearGradient>

                <linearGradient id="logoMetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="50%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="logoRingHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
                </linearGradient>

                <filter id="logoDropShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                    <feOffset in="blur" dx="2" dy="4" result="offsetBlur" />
                    <feFlood floodColor="#000000" floodOpacity="0.5" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer Ring (C Shape) */}
            <path
                d="M 85 30 A 42 42 0 1 0 85 70"
                stroke="url(#logoMetalGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#logoDropShadow)"
            />

            {/* Inner Cyan Highlight on Ring */}
            <path
                d="M 85 30 A 42 42 0 1 0 85 70"
                stroke="url(#logoRingHighlight)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                transform="scale(0.92) translate(4, 4)"
                opacity="0.9"
            />

            {/* The K Shape */}
            <g transform="translate(25, 20) scale(0.6)" filter="url(#logoDropShadow)">
                {/* Vertical Stem with Gear Teeth */}
                <path
                    d="M 20 0 L 40 0 L 40 100 L 20 100 L 20 85 L 5 85 L 5 70 L 20 70 L 20 55 L 5 55 L 5 40 L 20 40 L 20 25 L 5 25 L 5 10 L 20 10 Z"
                    fill="url(#logoTealGradient)"
                />

                {/* Upper Arm */}
                <path
                    d="M 40 55 L 80 15 L 100 15 L 55 60 Z"
                    fill="url(#logoTealGradient)"
                />

                {/* Lower Arm */}
                <path
                    d="M 55 40 L 100 85 L 80 85 L 40 45 Z"
                    fill="url(#logoTealGradient)"
                />

                {/* Connection Detail */}
                <circle cx="40" cy="50" r="5" fill="#06B6D4" />
            </g>
        </svg>
    );
};

export default Logo;
