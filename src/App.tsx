import { LanguageProvider } from './context/LanguageContext';
import { GridBackground } from './components/layout/GridBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FeaturedProject } from './components/sections/FeaturedProject';
import { SkillsSection } from './components/sections/SkillsSection';
import { OliverTechSection } from './components/sections/OliverTechSection';
import { ContactSection } from './components/sections/ContactSection';

function PortfolioApp() {
  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white font-sans overflow-x-hidden">
      {/* Background ambient technical grid & coordinates */}
      <GridBackground />

      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProject />
        <SkillsSection />
        <OliverTechSection />
        <ContactSection />
      </main>

      {/* System Footer & Telemetry */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
