"use client";

import { useEffect, useState } from 'react';

const styles = {
    footer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '50',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        borderTop: '1px solid rgba(99, 179, 237, 0.12)',
        padding: '18px 24px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.35)',
    },
    madeWith: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#cbd5e1',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        letterSpacing: '-0.01em',
    },
    heart: {
        display: 'inline-block',
        color: '#f87171',
        fontSize: '16px',
        animation: 'heartbeat 1.6s ease-in-out infinite',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,179,237,0.15))',
        color: '#93c5fd',
        fontSize: '13px',
        fontWeight: '700',
        padding: '5px 14px',
        borderRadius: '999px',
        border: '1px solid rgba(99, 179, 237, 0.25)',
        boxShadow: '0 0 12px rgba(59, 130, 246, 0.2)',
        letterSpacing: '-0.01em',
    },
    dot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#60a5fa',
        animation: 'pulse 2s ease-in-out infinite',
    },
    skeleton: {
        width: '80px',
        height: '28px',
        borderRadius: '999px',
        background: 'linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.4s infinite',
    },
};

export default function Footer() {
    const [visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const res = await fetch('/api/visit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (res.ok) {
                    const data = await res.json();
                    setVisitorCount(data.count);
                }
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
            }
        };
        fetchVisitorCount();
    }, []);

    return (
        <>
            <style>{`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    14% { transform: scale(1.2); }
                    28% { transform: scale(1); }
                    42% { transform: scale(1.15); }
                    56% { transform: scale(1); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.85); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
            <footer style={styles.footer}>
                <span style={styles.madeWith}>
                    Made with <span style={styles.heart}>❤</span> Batch of 2027
                </span>
                {visitorCount !== null ? (
                    <span style={styles.badge}>
                        <span style={styles.dot} />
                        {visitorCount.toLocaleString()} visits
                    </span>
                ) : (
                    <span style={styles.skeleton} />
                )}
            </footer>
        </>
    );
}
