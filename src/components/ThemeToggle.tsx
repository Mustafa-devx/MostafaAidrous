import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => {
    return (
        <motion.button
            onClick={toggleTheme}
            className={`relative z-50 flex items-center justify-center rounded-full shadow-2xl backdrop-blur-xl border-2 transition-colors duration-300 will-change-transform
        w-14 h-14 md:w-16 md:h-16
        ${isDarkMode
                    ? 'bg-luxury-card border-royal-purple/40 hover:bg-luxury-dark'
                    : 'bg-app-surface border-app-accent/40 hover:bg-[#e8e4d8]'
                }
      `}
            style={{
                background: isDarkMode
                    ? 'linear-gradient(135deg, var(--color-luxury-card), var(--color-luxury-dark))'
                    : 'linear-gradient(135deg, var(--app-surface), var(--color-cream))'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: "backOut"
                }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                {isDarkMode ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Moon
                            className="w-7 h-7 text-amber-300 fill-amber-300"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun
                            className="w-7 h-7 text-amber-600"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button >
    );
};

export default ThemeToggle;
