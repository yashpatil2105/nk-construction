import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectGallery } from './components/ProjectGallery';
import { CertificationsSection } from './components/CertificationsSection';
import { MachineryFleet } from './components/MachineryFleet';
import { OfficeLocationSection } from './components/OfficeLocationSection';
import { EstimatorAndInquiry } from './components/EstimatorAndInquiry';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CertificateModal } from './components/CertificateModal';
import { Project, Certification } from './types';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import { OFFICE_DATA } from './data/officeData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'certifications', 'machinery', 'location', 'inquiry'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-warm-dark flex flex-col selection:bg-terracotta selection:text-white font-sans antialiased">
      {/* Top Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => handleNavigate('projects')}
          onExploreCerts={() => handleNavigate('certifications')}
          onExploreLocation={() => handleNavigate('location')}
          onExploreInquiry={() => handleNavigate('inquiry')}
        />

        {/* Past Project Galleries */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Government Registrations & Certifications */}
        <CertificationsSection
          onSelectCert={(cert) => setSelectedCert(cert)}
        />

        {/* Owned Heavy Machinery Fleet & Mobile QC Testing Lab */}
        <MachineryFleet />

        {/* Office Location & Khandesh Regional Presence */}
        <OfficeLocationSection />

        {/* Maharashtra SSR Estimator & Tender Inquiry Form */}
        <EstimatorAndInquiry />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button for WhatsApp / Call */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Directions to Amalner Office */}
        <a
          href={OFFICE_DATA.googleMapDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white hover:bg-sand/20 text-warm-dark border border-sand shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer"
          title="Directions to Amalner Office"
          aria-label="Directions to Amalner Office"
        >
          <MapPin className="w-5 h-5 text-terracotta shrink-0" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm">
            Amalner Office
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark" />
          </span>
        </a>

        {/* Direct Phone Call */}
        <a
          href={`tel:${OFFICE_DATA.mobiles[0]}`}
          className="w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-white shadow-lg hover:shadow-terracotta/30 hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer"
          title={`Call Er. Nilesh Patil: ${OFFICE_DATA.mobiles[0]}`}
          aria-label={`Call Er. Nilesh Patil: ${OFFICE_DATA.mobiles[0]}`}
        >
          <Phone className="w-5 h-5 shrink-0" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm">
            Call: {OFFICE_DATA.mobiles[0]}
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark" />
          </span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href={`https://wa.me/${OFFICE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=Namaskar%20Er.%20Nilesh%20Patil%20Sir%20(NK%20Construction),%20contacting%20you%20via%20website`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer"
          title="Direct WhatsApp with Er. Nilesh R. Patil (NK Construction)"
          aria-label="Direct WhatsApp with Er. Nilesh R. Patil"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm">
            WhatsApp Er. Nilesh Patil
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark" />
          </span>
        </a>
      </div>

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
