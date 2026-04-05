import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface IntroSplashProps {
    onComplete?: () => void;
}

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState<'loading' | 'complete'>('loading');

    // Smooth progress with easing curve
    useEffect(() => {
        const duration = 2800;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);

            // Ease-out-cubic for natural deceleration
            const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
            setProgress(easedProgress * 100);

            if (rawProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                setStage('complete');
            }
        };

        requestAnimationFrame(animate);
    }, []);

    // Trigger completion
    useEffect(() => {
        if (stage === 'complete' && onComplete) {
            const timeout = setTimeout(onComplete, 600);
            return () => clearTimeout(timeout);
        }
    }, [stage, onComplete]);


    // Circle progress calculations
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden will-change-[background-color,opacity]"
            initial={{ backgroundColor: "#000000", opacity: 1 }}
            exit={{
                opacity: 0,
                backgroundColor: "#0f0a1e",
                scale: 1.05,
                transition: {
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
            style={{ transform: 'translateZ(0)' }}
        >
            {/* Main content - CENTERED */}
            <div className="relative z-30 flex items-center justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative flex flex-col items-center justify-center will-change-[transform,opacity]"
                >
                    {/* Progress circle container */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* SVG Progress Ring */}
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90 will-change-transform"
                            viewBox="0 0 200 200"
                            style={{ transform: 'translateZ(0)' }}
                        >

                            {/* Progress ring - Modern thin line with gradient */}
                            <motion.circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="url(#intro-gradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: circumference,
                                    strokeDashoffset,
                                    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.2))', // Further reduced shadow complexity
                                }}
                            />

                            <defs>
                                <linearGradient id="intro-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Center content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    className="text-8xl font-thin tracking-tighter tabular-nums text-white leading-none"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    {Math.round(progress)}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default IntroSplash;
