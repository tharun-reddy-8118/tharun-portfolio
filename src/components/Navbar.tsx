import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick?: () => void;
  onContactClick?: () => void;
}

type TabType = 'Home' | 'Work' | 'About' | 'Experience' | 'Contact';

interface NavItem {
  name: TabType;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', label: 'Home', href: '#hero' },
  { name: 'Work', label: 'Work', href: '#works' },
  { name: 'About', label: 'About', href: '#about' },
  { name: 'Experience', label: 'Experience', href: '#experience' },
  { name: 'Contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick, onContactClick }) => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const contactSection = document.getElementById('contact');
      const experienceSection = document.getElementById('experience');
      const aboutSection = document.getElementById('about');
      const workSection = document.getElementById('works');
      const heroSection = document.getElementById('hero');

      const scrollPos = currentScrollY + 220;

      let currentTab: TabType = 'Home';
      if (contactSection && scrollPos >= contactSection.offsetTop) {
        currentTab = 'Contact';
      } else if (experienceSection && scrollPos >= experienceSection.offsetTop) {
        currentTab = 'Experience';
      } else if (aboutSection && scrollPos >= aboutSection.offsetTop) {
        currentTab = 'About';
      } else if (workSection && scrollPos >= workSection.offsetTop) {
        currentTab = 'Work';
      } else if (heroSection) {
        currentTab = 'Home';
      }

      setActiveTab(currentTab);

      // Home (first section / hero) -> default floating capsule pill (Image 2)
      // When moving to any other section (Work, About, Experience, Contact, etc.) -> full screen width (Image 1)
      const homeThreshold = workSection ? Math.max(workSection.offsetTop - 200, 100) : 250;
      if (currentScrollY < homeThreshold) {
        setIsFullWidth(false);
      } else {
        setIsFullWidth(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to initialize based on scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (tab: TabType, href?: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    setIsFullWidth(tab !== 'Home');

    if (href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300 ease-out ${
        isFullWidth
          ? 'pt-0 px-0'
          : 'pt-2.5 sm:pt-4 px-3 sm:px-6'
      }`}
    >
      {/* Floating Capsule Bar (expands full width on scroll up/top, shrinks to capsule on scroll down) */}
      <nav
        className={`pointer-events-auto relative flex items-center justify-between transition-all duration-300 ease-out ${
          isFullWidth
            ? 'w-full max-w-none rounded-none border-t-0 border-x-0 border-b border-white/10 bg-[#070709]/90 backdrop-blur-2xl px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-3.5 shadow-lg shadow-black/40'
            : 'w-full max-w-5xl rounded-full border border-white/15 bg-[#0a0a0c]/95 backdrop-blur-2xl px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-2xl shadow-black/90'
        }`}
      >
        {/* 1. Left Section: Stylized Monogram Logo + Name + Role Badge */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home', '#hero');
          }}
          aria-label="Home — Tharun Reddy"
          className="group flex items-center gap-2.5 sm:gap-3 shrink-0 select-none cursor-pointer"
        >
          {/* Stylized Architectural Monogram T with Metallic Gradient Sheen */}
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 group-hover:border-[#89AACC]/50 transition-all duration-300 shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none">
              <defs>
                <linearGradient id="t-sheen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#89AACC" />
                  <stop offset="45%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#4E85BF" />
                </linearGradient>
              </defs>
              <path
                d="M4 6H20M12 6V20"
                stroke="url(#t-sheen-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 10H18.5C19.9 10 21 11.1 21 12.5C21 13.9 19.9 15 18.5 15H15M18 15L21 20"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Name & Role Text */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-text-primary tracking-tight group-hover:text-white transition-colors">
              {USER_INFO.shortName}
            </span>
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.18em] text-muted/60">
              — SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* 2. Center Section: Navigation Links (Desktop - centered) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.href)}
                className={`relative text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-text-primary font-semibold'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#89AACC] to-[#4E85BF] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Right Section: Resume Button + Moon/Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Resume Pill Button (Clean, crisp without glow or grow scaling) */}
          <button
            type="button"
            onClick={() => {
              if (onResumeClick) {
                onResumeClick();
              } else if (USER_INFO.resumeUrl && USER_INFO.resumeUrl !== '#') {
                window.open(USER_INFO.resumeUrl, '_blank');
              }
            }}
            aria-label="Download / View Resume"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] hover:brightness-110 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all duration-200 shadow-sm cursor-pointer"
          >
            <ArrowDownToLine
              size={14}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Hamburger Toggle (Visible on Mobile) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="md:hidden relative flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/15 border border-white/10 text-text-primary transition-all duration-200"
          >
            {isMenuOpen ? (
              <X size={16} className="text-text-primary" />
            ) : (
              <Menu size={16} className="text-text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* 4. Mobile Floating Dropdown Menu Card */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop for tapping outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pointer-events-auto md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-50 pointer-events-auto mt-2 w-[calc(100vw-28px)] max-w-sm rounded-3xl bg-surface/95 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl shadow-black/90 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.name, item.href)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${isActive
                          ? 'text-text-primary bg-white/10 font-semibold'
                          : 'text-muted hover:text-text-primary hover:bg-white/5'
                        }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] shadow-[0_0_8px_#89AACC]" />
                      ) : (
                        <span className="text-muted/40 text-xs">→</span>
                      )}
                    </button>
                  );
                })}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
