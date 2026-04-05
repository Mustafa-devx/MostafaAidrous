import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ShoppingBag, User } from 'lucide-react';

interface SocialLinksProps {
}

const SocialLinks = ({ }: SocialLinksProps) => {
    const [showInstaMenu, setShowInstaMenu] = useState(false);
    // ========================================
    // 🔗 YOUR SOCIAL LINKS - EDIT THIS SECTION
    // ========================================
    const socialLinks = {
        youtube: "https://youtube.com/@YourChannel",
        twitter: "https://twitter.com/YourHandle",
        instagram: "https://instagram.com/As.k1n",
        instagramStore: "https://instagram.com/xenocluster",
        github: "https://github.com/Mustafa-devx",
        linkedin: "https://linkedin.com/in/YourProfile",
        email: "mailto:mostafaaidrous.contact@gmail.com"
    };

    const topRowDelay = 0.8;
    const bottomRowDelay = 1.0;

    const iconClasses = "w-4 h-4 sm:w-5 sm:h-5 text-icon-color group-hover:text-white transition-colors duration-300";
    const buttonClasses = "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-icon-bg border border-icon-border shadow-lg hover:bg-app-accent hover:border-app-accent/50 transition-all duration-300 group relative overflow-hidden will-change-[transform,background-color,border-color]";

    const renderButton = (href: string, icon: React.ReactNode, delay: number, label: string, isActive: boolean = true) => {
        const commonProps = {
            className: `${buttonClasses} ${!isActive ? 'opacity-40 cursor-default grayscale' : ''}`,
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: isActive ? 1 : 0.4 },
            transition: {
                delay: delay,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            },
            style: { transform: 'translateZ(0)' },
            "aria-label": label
        };

        if (!isActive) {
            return (
                <motion.div {...commonProps}>
                    <div className="relative z-10">
                        {icon}
                    </div>
                </motion.div>
            );
        }

        return (
            <motion.a
                {...commonProps}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative z-10">
                    {icon}
                </div>
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
            </motion.a>
        );
    };

    return (
        <div className="flex flex-col items-center gap-3 mb-10">
            {/* Top Row */}
            <div className="flex items-center gap-3 md:gap-4">
                {/* YouTube */}
                {renderButton(socialLinks.youtube, (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                    </svg>
                ), topRowDelay, "YouTube", false)}

                {/* X (Twitter) */}
                {renderButton(socialLinks.twitter, (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClasses}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                    </svg>
                ), topRowDelay + 0.08, "X (Twitter)", false)}

                {/* Instagram Dropdown */}
                <div className="relative z-50">
                    <motion.button
                        className={buttonClasses}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: topRowDelay + 0.16,
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
                        }}
                        whileHover={{
                            y: -5,
                            scale: 1.05,
                            transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ transform: 'translateZ(0)' }}
                        onClick={() => setShowInstaMenu(!showInstaMenu)}
                        onBlur={() => setTimeout(() => setShowInstaMenu(false), 200)}
                        aria-label="Instagram Accounts"
                    >
                        <div className="relative z-10">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </div>
                        {/* Animated Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    <AnimatePresence>
                        {showInstaMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-app-surface/90 backdrop-blur-xl border border-app-border rounded-xl shadow-xl overflow-hidden flex flex-col p-1 z-50"
                            >
                                {/* Personal Account */}
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                                >
                                    <div className="w-8 h-8 rounded-full bg-app-bg flex items-center justify-center border border-app-border group-hover/item:border-app-accent/50 transition-colors">
                                        <User className="w-4 h-4 text-app-text/70 group-hover/item:text-app-text transition-colors" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-app-text">@As.k1n</span>
                                        <span className="text-[10px] text-app-text/50">Personal Account</span>
                                    </div>
                                </a>

                                {/* Store Account */}
                                <a
                                    href={socialLinks.instagramStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                                >
                                    <div className="w-8 h-8 rounded-full bg-app-bg flex items-center justify-center border border-app-border group-hover/item:border-app-accent/50 transition-colors">
                                        <ShoppingBag className="w-4 h-4 text-app-text/70 group-hover/item:text-app-text transition-colors" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-app-text">@xenocluster</span>
                                        <span className="text-[10px] text-app-text/50">Store Account</span>
                                    </div>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* GitHub */}
                {renderButton(socialLinks.github, <Github className={iconClasses} />, topRowDelay + 0.24, "GitHub")}
            </div>

            {/* Bottom Row */}
            <div className="flex items-center gap-3 md:gap-4">
                {/* LinkedIn */}
                {renderButton(socialLinks.linkedin, <Linkedin className={iconClasses} />, bottomRowDelay, "LinkedIn", false)}

                {/* Email */}
                {renderButton(socialLinks.email, <Mail className={iconClasses} />, bottomRowDelay + 0.08, "Email")}
            </div>
        </div>
    );
};

export default SocialLinks;
