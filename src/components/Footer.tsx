import React from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  ExternalLink,
  ArrowUp,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { OFFICE_DATA } from '../data/officeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-stone-light border-t border-charcoal-border pt-16 pb-12 bg-cad-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-border">

          {/* Col 1: Firm Bio & Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-warm-dark border border-gold/40 flex items-center justify-center text-gold shadow-md">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg text-white tracking-tight">
                    {OFFICE_DATA.firmName}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold-light border border-gold/30 px-2 py-0.5 rounded">
                    PWD Class 1-A
                  </span>
                </div>
                <p className="text-xs text-gold-light font-medium mt-0.5">
                  {OFFICE_DATA.proprietor} • {OFFICE_DATA.qualification}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-light leading-relaxed pr-4 font-normal">
              Registered Class 1-A Government Contractor with Public Works Department (PWD) Maharashtra, MJP Water Works, and WRD Irrigation. Delivering premier highway, bridge, and water supply infrastructure across Amalner, Jalgaon, and Khandesh region since 2002.
            </p>

            <div className="p-3.5 bg-charcoal-card rounded-xl border border-charcoal-border text-xs space-y-1.5 shadow-inner">
              <div className="flex items-center gap-1.5 text-gold-light font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Statutory Registrations & Licenses</span>
              </div>
              <p className="text-stone-light text-[11px]">
                PWD License: <strong className="text-white font-mono">{OFFICE_DATA.regNumber}</strong> (Class 1-A Unlimited)
              </p>
              <p className="text-stone-muted text-[11px] font-mono">
                GSTIN: <strong className="text-stone-light">27AABCP8921K1Z5</strong> | MSME: <strong className="text-stone-light">UDYAM-MH-15-0048291</strong>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-light">
              Engineering Portfolio
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-gold-light transition-colors text-stone-muted cursor-pointer"
                >
                  Past Project Galleries & Executed Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('certifications')}
                  className="hover:text-gold-light transition-colors text-stone-muted cursor-pointer"
                >
                  Class 1-A Licenses & IEI Accreditation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('machinery')}
                  className="hover:text-gold-light transition-colors text-stone-muted cursor-pointer"
                >
                  Machinery Fleet & NABL Mobile Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-gold-light transition-colors text-stone-muted cursor-pointer"
                >
                  Amalner Office & Regional Routes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inquiry')}
                  className="hover:text-gold-light transition-colors text-stone-muted cursor-pointer"
                >
                  Maharashtra SSR BOQ Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Amalner Office (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-coral" />
              <span>Amalner Central HQ (Dist. Jalgaon)</span>
            </p>

            <div className="text-xs text-stone-light space-y-1 leading-relaxed bg-charcoal-card p-3.5 rounded-xl border border-charcoal-border">
              <p className="font-semibold text-white">{OFFICE_DATA.addressLine1}</p>
              <p className="text-stone-muted">{OFFICE_DATA.addressLine2}</p>
              <p>{OFFICE_DATA.city}, Taluka {OFFICE_DATA.taluka}, Dist. {OFFICE_DATA.district}, {OFFICE_DATA.state} – <span className="font-mono text-gold">{OFFICE_DATA.pincode}</span></p>
              <p className="text-gold-light pt-1 text-[11px] font-medium">Landmark: {OFFICE_DATA.landmark}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <a
                href={`tel:${OFFICE_DATA.mobiles[0]}`}
                className="flex items-center gap-2 p-2 rounded-xl bg-charcoal border border-charcoal-border hover:border-gold text-stone-light hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="truncate font-mono">{OFFICE_DATA.mobiles[0]}</span>
              </a>

              <a
                href={`https://wa.me/${OFFICE_DATA.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-white transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-muted">
          <div>
            <p>
              © {new Date().getFullYear()} {OFFICE_DATA.firmName}. All Rights Reserved.
            </p>
            <p className="text-[11px] text-stone-muted mt-0.5">
              अमळनेर, खान्देश व संपूर्ण महाराष्ट्रात पायाभूत सुविधांच्या बांधकामात २२ वर्षांची अविरत सेवा.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={OFFICE_DATA.googleMapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Google Maps GPS Navigation</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-gold-light border border-charcoal-border hover:border-gold/40 transition-colors cursor-pointer shadow-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
