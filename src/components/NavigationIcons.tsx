import { motion } from 'motion/react';
import { Info, Award, FolderOpen, HelpCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface NavigationIconsProps {
    onOpenModal: (section: string) => void;
}

const NavigationIcons = ({ onOpenModal }: Omit<NavigationIconsProps, 'showIntro'>) => {
    const [clickedButton, setClickedButton] = useState<string | null>(null);

    const icons = [
        { id: 'about', icon: Info, label: 'About' },
        { id: 'certificates', icon: Award, label: 'Certificates' },
        { id: 'works', icon: FolderOpen, label: 'Works' },
        { id: 'faq', icon: HelpCircle, label: 'FAQ' },
        { id: 'paypal', icon: DollarSign, label: 'PayPal' },
    ];

    const handleButtonClick = (id: string) => {
        setClickedButton(id);
        setTimeout(() => setClickedButton(null), 400); // Reset after animation
        onOpenModal(id);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            {icons.map((item, index) => {
                const Icon = item.icon;
                const isClicked = clickedButton === item.id;
                const baseDelay = 0.7;

                return (
                    <div key={item.id} className="relative group">
                        <motion.button
                            onClick={() => handleButtonClick(item.id)}
                            className={`
                relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl border-2 transition-all duration-300 will-change-[transform,background-color,border-color]
                bg-icon-bg border-icon-border
                hover:border-app-accent/50 hover:shadow-app-accent/20
                active:scale-95
              `}
                            style={{ transform: 'translateZ(0)' }}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: baseDelay + index * 0.08,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            <Icon
                                className={`
                    w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 transition-all duration-300
                    text-icon-color
                    group-hover:text-app-accent group-hover:scale-110
                  `}
                                stroke="currentColor"
                            />

                            {/* Inner Glow on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-app-accent/0 group-hover:bg-app-accent/5 transition-colors duration-200" />
                        </motion.button>

                        {/* Click Ripple Effect - Simplified */}
                        {isClicked && (
                            <motion.div
                                className="absolute inset-0 rounded-full z-0"
                                style={{
                                    background: 'var(--app-accent)',
                                    opacity: 0.2
                                }}
                                initial={{ scale: 0.8, opacity: 0.2 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}

                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-app-text text-app-bg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-app-border shadow-lg">
                            {item.label}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NavigationIcons;
