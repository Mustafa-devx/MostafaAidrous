import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import IntroSplash from './components/IntroSplash';
import BrowserWindow from './components/BrowserWindow';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  // Handle intro completion
  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Handle dark mode class with smooth transition
  useEffect(() => {
    // Use requestAnimationFrame for smooth class toggle
    requestAnimationFrame(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen w-full overflow-hidden transition-all duration-500 ease-out bg-app-bg text-app-text`}>
      <AnimatePresence>
        {showIntro && <IntroSplash onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <motion.main
        className="relative z-10 flex flex-col min-h-screen p-2 sm:p-4 md:p-8 will-change-[opacity,transform]"
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{
          opacity: showIntro ? 0 : 1,
          scale: showIntro ? 0.99 : 1
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1 // Reduced delay for better sync
        }}
      >
        {/* Top Navigation Area */}
        <div className="w-full flex justify-between items-start mb-4 md:mb-0">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>

        {/* Central Content Area */}
        <div className="flex-1 flex items-center justify-center w-full">
          <BrowserWindow />
        </div>
      </motion.main>

      {/* Background Effects - Optimized CSS Starfield */}
      <div className="starfield-container">
        <div className="stars-layer" />
        <div className="stars-layer stars-layer-slow" />
        <div className="stars-layer stars-layer-fast" />

        {/* Subtle Theme-Specific Overlays - Optimized */}
        <motion.div
          style={{ transform: 'translateZ(0)' }}
          animate={{
            opacity: isDarkMode ? [0.03, 0.06, 0.03] : [0.01, 0.03, 0.01],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute inset-0 blur-[120px] ${isDarkMode ? 'bg-royal-purple/10' : 'bg-blue-200/5'}`}
        />
      </div>
    </div>
  );
}

export default App;
