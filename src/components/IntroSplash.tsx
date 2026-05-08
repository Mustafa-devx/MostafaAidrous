import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface IntroSplashProps {
    onComplete?: () => void;
}

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState<'loading' | 'complete'>('loading');

    useEffect(() => {
        const duration = 3500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - rawProgress, 4);
            setProgress(easedProgress * 100);

            if (rawProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                setStage('complete');
            }
        };

        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        if (stage === 'complete' && onComplete) {
            const timeout = setTimeout(onComplete, 1000);
            return () => clearTimeout(timeout);
        }
    }, [stage, onComplete]);

    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            initial={{ backgroundColor: "#000000", opacity: 1 }}
            exit={{
                opacity: 0,
                backgroundColor: "#030308",
                scale: 1.02,
                filter: "blur(30px)",
                transition: {
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
        >
            {/* Enhanced Ambient Background with Nebula */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        opacity: [0.08, 0.15, 0.08],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/3 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-purple-900/20 via-violet-800/10 to-transparent rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ 
                        opacity: [0.06, 0.12, 0.06],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/3 -right-1/4 w-[140%] h-[140%] bg-gradient-to-tl from-amber-900/15 via-yellow-800/8 to-transparent rounded-full blur-[90px]"
                />
                <motion.div 
                    animate={{ 
                        opacity: [0.04, 0.08, 0.04],
                        x: [-20, 20, -20]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-full from-purple-500/5 to-amber-500/5 rounded-full blur-[120px]"
                />
            </div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/30"
                    initial={{ 
                        x: Math.random() * window.innerWidth, 
                        y: Math.random() * window.innerHeight,
                        opacity: 0 
                    }}
                    animate={{ 
                        y: [null, -100],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                        duration: 3 + Math.random() * 4, 
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    style={{
                        left: `${(i * 7) + 5}%`,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-30 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center justify-center"
                >
                    {/* Progress Circle Container */}
                    <div className="relative w-72 h-72 flex items-center justify-center">
                        {/* Outer glow ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{ 
                                boxShadow: [
                                    '0 0 30px rgba(139, 92, 246, 0.2)',
                                    '0 0 60px rgba(139, 92, 246, 0.4)',
                                    '0 0 30px rgba(139, 92, 246, 0.2)'
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* SVG Progress Ring */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                            {/* Track with subtle glow */}
                            <circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="rgba(255,255,255,0.03)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            
                            {/* Glowing ring effect */}
                            <motion.circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="rgba(139, 92, 246, 0.3)"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                style={{ filter: 'blur(4px)' }}
                            />
                            
                            {/* Progress ring */}
                            <motion.circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="url(#intro-gradient-premium)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: circumference,
                                    strokeDashoffset,
                                    filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))',
                                }}
                            />

                            <defs>
                                <linearGradient id="intro-gradient-premium" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <motion.stop 
                                        offset="0%" 
                                        stopColor="#c4b5fd"
                                        stopOpacity="0.6"
                                        animate={{ stopOpacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    <stop offset="50%" stopColor="#ffffff" />
                                    <motion.stop 
                                        offset="100%" 
                                        stopColor="#fbbf24"
                                        stopOpacity="0.6"
                                        animate={{ stopOpacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>

                        {/* Center Text with pulsing glow */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.span
                                className="text-6xl font-thin tracking-tight tabular-nums text-white"
                                animate={{ 
                                    textShadow: [
                                        '0 0 20px rgba(255,255,255,0.3)',
                                        '0 0 40px rgba(255,255,255,0.5)',
                                        '0 0 20px rgba(255,255,255,0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {Math.round(progress)}
                            </motion.span>
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                                className="text-[9px] uppercase tracking-[0.4em] text-white/70 mt-2"
                            >
                                Loading
                            </motion.div>
                        </div>
                    </div>

                    {/* Signature Text with enhanced styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-16 text-center"
                    >
                        <motion.h2 
                            className="text-xl font-extralight tracking-[0.4em] text-white/80 uppercase"
                            animate={{ 
                                textShadow: [
                                    '0 0 10px rgba(255,255,255,0.2)',
                                    '0 0 25px rgba(255,255,255,0.4)',
                                    '0 0 10px rgba(255,255,255,0.2)'
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            Mostafa Aidrous
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                            className="h-px w-16 mx-auto mt-5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default IntroSplash;