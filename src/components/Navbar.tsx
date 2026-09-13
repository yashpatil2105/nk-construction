import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Award, 
  FolderGit2, 
  Wrench, 
  FileText, 
  Menu, 
  X, 
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { OFFICE_DATA } from '../data/officeData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'projects', label: 'Past Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Govt. Licenses', icon: Award },
    { id: 'machinery', label: 'Machinery Fleet', icon: Wrench },
    { id: 'location', label: 'Amalner Office', icon: MapPin },
    { id: 'inquiry', label: 'Tender & BOQ Estimator', icon: FileText },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Top Executive Government Utility Ribbon */}
      <div className="bg-obsidian text-stone-light text-[11px] border-b border-charcoal-border/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-gold-light font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>महाराष्ट्र शासन नोंदणीकृत वर्ग १-अ कंत्राटदार (PWD Class 1-A Unlimited)</span>
            </span>
            <span className="text-charcoal-border">•</span>
            <span className="font-mono text-stone-muted">Reg: {OFFICE_DATA.regNumber}</span>
          </div>
          
          <div className="flex items-center gap-4 text-stone-light">
            <span className="flex items-center gap-1 text-stone-muted">
              <MapPin className="w-3 h-3 text-terracotta" />
              Amalner HQ: Station Road, Opp. PWD Sub-Division
            </span>
            <span className="text-charcoal-border">•</span>
            <a 
              href={`tel:${OFFICE_DATA.mobiles[0]}`}
              className="flex items-center gap-1 hover:text-white transition-colors font-medium font-mono text-stone-light"
            >
              <Phone className="w-3 h-3 text-gold" />
              Direct Tender Desk: {OFFICE_DATA.mobiles[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Identity */}
            <div 
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-3.5 cursor-pointer group select-none"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-obsidian border border-gold/30 flex items-center justify-center text-gold shadow-md group-hover:border-gold/60 group-hover:scale-[1.02] transition-all">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-xl text-warm-dark tracking-tight group-hover:text-terracotta transition-colors">
                    Er. Nilesh R. Patil
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-2 py-0.5 rounded-md border border-gold/30 shadow-2xs">
                    Class 1-A
                  </span>
                </div>
                <p className="text-xs text-stone-muted font-medium tracking-wide flex items-center gap-1.5">
                  <span>NK Construction</span>
                  <span className="text-sand-dark">•</span>
                  <span>Amalner, Khandesh (Est. 2002)</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-warm-dark text-white shadow-sm'
                        : 'text-stone-dark hover:text-warm-dark hover:bg-stone-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-stone-muted'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                id="nav-quick-cert-btn"
                onClick={() => handleNavClick('certifications')}
                className="px-3.5 py-2 text-xs font-semibold text-warm-dark bg-alabaster hover:bg-stone-100 rounded-xl border border-stone-300/80 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Award className="w-3.5 h-3.5 text-gold-dark" />
                <span>Verify License</span>
              </button>
              <button
                id="nav-office-visit-btn"
                onClick={() => handleNavClick('inquiry')}
                className="px-4 py-2 text-xs font-bold text-white bg-terracotta hover:bg-terracotta-hover rounded-xl shadow-md hover:shadow-terracotta/25 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-cream" />
                <span>BOQ Estimator</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-warm-dark hover:text-terracotta hover:bg-stone-100 focus:outline-hidden transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="p-3.5 bg-gradient-to-r from-sand/20 to-alabaster rounded-xl border border-sand/70 mb-3">
            <div className="flex items-center gap-1.5 text-gold-dark font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>शासकीय नोंदणीकृत वर्ग १-अ कंत्राटदार</span>
            </div>
            <p className="text-[11px] text-stone-muted mt-1 leading-snug">
              Patil Chambers, Station Road, Opp. PWD Guest House, Amalner (Dist. Jalgaon)
            </p>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-warm-dark text-white'
                    : 'text-stone-dark hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-gold' : 'text-stone-muted'}`} />
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${OFFICE_DATA.mobiles[0]}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-warm-dark text-white rounded-xl text-xs font-bold hover:bg-warm-surface transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call Office: {OFFICE_DATA.mobiles[0]}
            </a>
            <a
              href={`https://wa.me/${OFFICE_DATA.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Amalner Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
