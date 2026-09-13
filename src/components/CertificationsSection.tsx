import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  ExternalLink, 
  Building, 
  Calendar, 
  Layers, 
  FileText,
  BadgeCheck,
  Building2,
  Lock,
  Sparkles
} from 'lucide-react';
import { Certification } from '../types';
import { CERTIFICATIONS_DATA } from '../data/certificationsData';
import { OFFICE_DATA } from '../data/officeData';

interface CertificationsSectionProps {
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCert }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Statutory Accreditations (6)' },
    { id: 'Government Registration', label: 'Govt. Class 1-A' },
    { id: 'Professional License', label: 'Chartered Engineer IEI' },
    { id: 'Quality & Safety', label: 'ISO & Material Quality' },
    { id: 'Statutory Compliance', label: 'GSTIN & Statutory Tax' },
  ];

  const filteredCerts = activeCategory === 'all' 
    ? CERTIFICATIONS_DATA 
    : CERTIFICATIONS_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-16 sm:py-24 bg-alabaster border-b border-stone-200/80 bg-cad-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold/40 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <BadgeCheck className="w-4 h-4 text-gold" />
            <span>Government Statutory Accreditations & Licenses</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight">
            Class 1-A Registrations & Chartered Engineer Credentials
          </h2>
          <p className="text-sm sm:text-base text-stone-muted mt-2 leading-relaxed">
            Registered Class 1-A contractor with Government of Maharashtra Public Works Department (PWD), empanelled with Maharashtra Jeevan Pradhikaran, and certified Chartered Civil Engineer (India) with unrestricted statutory bidding limits.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-warm-dark text-white shadow-sm'
                  : 'bg-white/80 text-stone-dark hover:bg-white border border-stone-200/90'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-stone-200 hover:border-gold/60 p-6 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              {/* Seal Badge in Top Corner */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-charcoal to-obsidian border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="inline-block bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-gold/40 shadow-2xs">
                    {cert.sealBadge}
                  </span>
                  <div className="text-[11px] font-semibold text-emerald-700 flex items-center justify-end gap-1 mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{cert.status}</span>
                  </div>
                </div>
              </div>

              {/* Title & Authority */}
              <div className="space-y-1.5 mb-4">
                <p className="text-[11px] font-bold text-terracotta uppercase tracking-wider">
                  {cert.shortAuthority}
                </p>
                <h3 className="text-base sm:text-lg font-bold font-heading text-warm-dark leading-snug group-hover:text-terracotta transition-colors">
                  {cert.title}
                </h3>
                {cert.marathiTitle && (
                  <p className="text-xs text-stone-muted leading-normal font-medium">
                    {cert.marathiTitle}
                  </p>
                )}
              </div>

              {/* Registration Dossier Mini-Box */}
              <div className="bg-stone-50/80 p-3.5 rounded-xl border border-stone-200 text-xs space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-muted">Reg No:</span>
                  <span className="font-mono font-bold text-warm-dark truncate max-w-[190px]">{cert.registrationNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-muted">Validity:</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[11px]">{cert.validTill}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-muted">Bidding Limit:</span>
                  <span className="font-bold text-warm-dark text-gold-dark">{cert.verificationDetails.workLimit}</span>
                </div>
              </div>

              {/* Description preview */}
              <p className="text-xs text-stone-dark line-clamp-2 mb-5 leading-relaxed">
                {cert.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-6 text-xs text-warm-dark">
                {cert.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                    <span className="line-clamp-1 text-stone-dark">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                id={`inspect-cert-${cert.id}-btn`}
                onClick={() => onSelectCert(cert)}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-stone-300 hover:border-gold hover:bg-warm-dark hover:text-white text-warm-dark text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <FileCheck className="w-4 h-4 text-gold" />
                <span>Inspect Certification Dossier</span>
              </button>
            </div>
          ))}
        </div>

        {/* Verification & Solvency Executive Banner */}
        <div className="mt-12 bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-stone-light rounded-2xl p-6 sm:p-8 border border-gold/30 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4 text-gold" />
              <span>Tender Scrutiny & Statutory Solvency Clearance</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
              Official Solvency of ₹ 10.00 Cr & Full Technical Credentials
            </h3>
            <p className="text-xs sm:text-sm text-stone-light leading-relaxed">
              Complete original registration booklets, State Bank of India solvency certificate, GST tax returns, and EPF/ESIC clearances are available for inspection by Government Tender Committees at our Amalner administrative chambers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/918847706600?text=Requesting%20official%20PWD%20Contractor%20Registration%20Dossier%20for%20Tender%20Scrutiny`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Request Tender Dossier</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
