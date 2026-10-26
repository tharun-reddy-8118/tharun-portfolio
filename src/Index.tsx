import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { SelectedWorks } from './components/SelectedWorks';
import { About } from './components/About';
import { DesignProcess } from './components/DesignProcess';
import { ToolKit } from './components/ToolKit';
import { Experience } from './components/Experience';
import { Explorations } from './components/Explorations';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white font-body">
      {/* Section 1: Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Fixed Navbar */}
      <Navbar
        onResumeClick={() => setIsResumeOpen(true)}
        onContactClick={handleContactClick}
      />

      {/* Main Content Sections */}
      <main className="w-full overflow-hidden">
        {/* Section 2: Hero */}
        <Hero
          isLoadingComplete={!isLoading}
          onContactClick={handleContactClick}
        />

        {/* Section: Metrics & Impact */}
        <Stats />

        {/* Section 3: Selected Works (Routes to dedicated project pages) */}
        <SelectedWorks />

        {/* Section 4: About */}
        <About />

        {/* Section 5: Engineering Lifecycle */}
        <DesignProcess />

        {/* Section 6: Technical Stack */}
        <ToolKit />

        {/* Section 7: Experience & Career Hub */}
        <Experience />

        {/* Section 8: Systems & Architecture Console */}
        <Explorations />
      </main>

      {/* Section 9: Contact / Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default Index;
