import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, DollarSign, HelpCircle, Info, Minus, Plus, Share2, Lock } from 'lucide-react';
import SocialLinks from './SocialLinks';
import NavigationIcons from './NavigationIcons';
import Certificates from './Certificates';

interface BrowserWindowProps {
}

const BrowserWindow = ({ }: BrowserWindowProps) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (activeSection) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeSection]);

    // ========================================
    // 💰 YOUR PAYPAL LINK - EDIT THIS
    // ========================================
    const paypalLink = "https://www.paypal.com/paypalme/ask1n2k?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

    const renderModalContent = () => {
        switch (activeSection) {
            case 'about':
                return (
                    <div className="space-y-6">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <p className="text-lg text-app-text/80 leading-relaxed mb-4">
                                👋 Hey there! I'm Mostafa Aidrous, a creative professional who loves bringing ideas to life through Civil Engineering, vibe coding, and Designing.
                            </p>
                            <p className="text-lg text-app-text/80 leading-relaxed">
                                I work across engineering, design, and web technologies to deliver practical, well-structured solutions. My experience includes AutoDesk and CSI applications, UI/UX design, web development, and professional use of Microsoft tools.
                            </p>
                        </motion.div>

                        <motion.div
                            className="p-6 rounded-xl border border-app-border bg-app-bg/50"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="font-bold text-app-text mb-4 flex items-center gap-2">
                                <Info className="w-5 h-5 text-app-accent" /> Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['AutoCAD', 'ETABS', 'Revit', 'UI/UX Design', 'Microsoft programs', 'Web Development', 'Prompt Engineering'].map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1 rounded-full text-sm font-medium bg-app-surface text-app-text/70 shadow-sm border border-app-border"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3 + i * 0.04 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                );

            case 'certificates':
                return <Certificates />;

            case 'works':
                return (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 rounded-full bg-app-surface border border-app-border shadow-inner"
                        >
                            <Lock className="w-12 h-12 text-app-accent opacity-50" />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-app-text mb-2">Work in Progress</h3>
                            <p className="text-app-text/60 max-w-md mx-auto">
                                I'm currently curating my best projects to showcase here.
                                <br />
                                <span className="italic text-app-accent">Will share it as soon as possible!</span>
                            </p>
                        </motion.div>
                    </div>
                );

            case 'faq':
                return (
                    <div className="space-y-4">
                        {[
                            { q: "Are you available for freelance work?", a: "Yes! I'm currently open to new projects and collaborations." },
                            { q: "What software do you use?", a: "I primarily use AntiGravity by Google for development and AutoCAD, ETABS, Revit for Civil Engineering." },
                            { q: "How do you use prompt engineering?", a: "I use prompt engineering to optimize workflows, generate structured content, improve designs, and automate repetitive tasks, making projects faster and smarter without sacrificing quality." },
                            { q: "What is your typical turnaround time?", a: "It depends on the project scope, but usually 2-4 weeks for standard projects." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-4 rounded-lg border border-app-border bg-app-surface shadow-sm"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ x: 3, scale: 1.01 }}
                            >
                                <h3 className="font-bold text-app-text mb-2 flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4 text-app-accent" /> {item.q}
                                </h3>
                                <p className="text-app-text/70 text-sm leading-relaxed ml-6">
                                    {item.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                );

            case 'paypal':
                return (
                    <div className="flex flex-col items-center text-center space-y-8 py-4">
                        <motion.div
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <DollarSign className="w-10 h-10 text-blue-500" />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-app-text mb-2">Buying me a tea ☕</h2>
                            <p className="text-app-text/70 max-w-md mx-auto">
                                If you enjoy my content, consider buying me a tea! Your support helps me to not be a vagabond.
                            </p>
                        </motion.div>

                        <motion.a
                            href={paypalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <DollarSign className="w-5 h-5" /> Donate via PayPal.
                        </motion.a>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {[
                                { title: "Support Creativity", desc: "Help fund new art projects." },
                                { title: "Better Gear", desc: "Upgrade equipment for quality." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl bg-app-bg border border-app-border">
                                    <h3 className="font-bold text-app-accent text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-app-text/50">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                );

            default:
                return null;
        }
    };

    // Header Button Handlers
    const handleClose = () => {
        if (window.confirm("Do you want to close this tab?")) {
            window.close();
            // Fallback for browsers that block window.close()
            alert("To close this tab, please use your browser's close button.");
        }
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: 'Mostafa Aidrous Portfolio',
            text: 'Check out Mostafa Aidrous\'s creative portfolio!',
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('Portfolio link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-2 md:px-4 z-10 h-[85vh] flex items-center justify-center">
            <div className="relative w-full h-full flex gap-4">
                {/* Main Browser Window */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        width: activeSection ? '55%' : '100%',
                        x: activeSection ? 0 : 0 // Keep it anchored left, just shrink width
                    }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1] // Custom ease for smooth "modern" feel
                    }}
                    className="glass-panel rounded-3xl overflow-hidden flex flex-col will-change-transform relative z-20"
                    style={{ transform: 'translateZ(0)' }}
                >
                    {/* Browser Header Bar */}
                    <div className="relative z-20 flex items-center gap-2 md:gap-4 px-3 md:px-4 py-2 md:py-3 border-b bg-app-bg/50 border-app-border">
                        <div className="flex gap-1.5 md:gap-2 group/traffic">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClose}
                                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56] flex items-center justify-center cursor-pointer relative"
                            >
                                <X className="w-2 h-2 text-black/40 opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleRefresh}
                                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-pointer relative"
                            >
                                <Minus className="w-2 h-2 text-black/40 opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleFullscreen}
                                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f] flex items-center justify-center cursor-pointer relative"
                            >
                                <Plus className="w-2 h-2 text-black/40 opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
                            </motion.div>
                        </div>
                        <div className="flex-1 rounded-lg px-2 md:px-3 py-1 text-center bg-app-surface/50 text-app-text/60 shadow-sm border border-app-border/30 flex items-center justify-center gap-2 max-w-[200px] md:max-w-xs mx-auto">
                            <Lock className="w-3 h-3 text-app-accent" />
                            <span className="text-[10px] md:text-xs font-mono truncate">
                                mostafaaidrous.com
                            </span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-app-text/40">
                            <Share2
                                onClick={handleShare}
                                className="w-3.5 h-3.5 md:w-4 md:h-4 cursor-pointer hover:text-app-accent transition-colors"
                            />
                            <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 cursor-pointer hover:text-app-accent transition-colors opacity-50" />
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="relative z-10 px-6 py-12 md:px-16 md:py-20 flex flex-col items-center text-center flex-1 overflow-y-auto custom-scrollbar">

                        {/* Heading Section */}
                        <motion.div
                            initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{ transform: 'translateZ(0)' }}
                            className="mb-6 will-change-[transform,opacity,filter]"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-app-text drop-shadow-sm tracking-tight">
                                Hi, it's <span className="text-royal-purple dark:text-gold">Mostafa</span>
                            </h1>
                            <p className="text-lg md:text-xl text-app-text/70 font-medium tracking-wide">
                                Civil Engineer, vibe coder and Designer
                            </p>
                            <p className="text-sm md:text-base text-app-text/40 mt-1 font-medium italic">
                                Owner of XenoCluster Store [soon]
                            </p>
                        </motion.div>

                        {/* Decorative Separator */}
                        <motion.div
                            className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-app-accent to-transparent mb-10"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />

                        {/* Navigation Icons */}
                        <NavigationIcons onOpenModal={setActiveSection} />

                        {/* Social Links */}
                        <SocialLinks />

                        {/* Footer */}
                        <motion.footer
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs md:text-sm text-app-text/50 mt-auto pt-8"
                        >
                            © 2025 Mostafa Aidrous
                        </motion.footer>
                    </div>

                    {/* Background Orb */}
                    <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none bg-gradient-to-br from-royal-purple to-gold" />
                </motion.div>

                {/* Side Panel (Replaces Modal) */}
                <AnimatePresence mode="wait">
                    {activeSection && (
                        <motion.div
                            key="side-panel"
                            initial={{ x: 50, opacity: 0, width: '0%' }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                width: '45%'
                            }}
                            exit={{
                                x: 50,
                                opacity: 0,
                                width: '0%',
                                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="glass-panel rounded-3xl overflow-hidden flex flex-col relative z-10 h-full"
                        >
                            {/* Panel Header */}
                            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-royal-purple via-deep-purple to-royal-purple-dark shadow-md z-10 shrink-0">
                                <motion.h2
                                    className="text-xl font-bold text-white capitalize"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {activeSection}
                                </motion.h2>
                                <motion.button
                                    onClick={() => setActiveSection(null)}
                                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Panel Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar text-app-text">
                                {renderModalContent()}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BrowserWindow;
