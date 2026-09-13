import React from 'react';
import { 
  Award, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  ArrowRight, 
  FileCheck, 
  ChevronRight, 
  CheckCircle2, 
  Compass,
  PhoneCall,
  Download,
  Sparkles,
  Layers
} from 'lucide-react';
import { CONTRACTOR_STATS, OFFICE_DATA } from '../data/officeData';
import { CivilThreeBackground } from './CivilThreeBackground';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onExploreCerts: () => void;
  onExploreLocation: () => void;
  onExploreInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onExploreCerts,
  onExploreLocation,
  onExploreInquiry
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster text-warm-dark pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/80 bg-cad-grid">
      {/* 3D Three.js Civil Engineering Background Animation */}
      <CivilThreeBackground className="absolute inset-0 z-0 opacity-80" />

      {/* Ambient architectural lighting glows */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gold/10 to-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-coral/10 to-sand/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Copy & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Authority Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-gold/40 text-xs font-semibold text-warm-dark shadow-[0_2px_10px_rgba(197,155,39,0.12)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-warm-dark">PWD Maharashtra Class 1-A Contractor</span>
              <span className="text-stone-300">•</span>
              <span className="text-gold-dark font-mono text-[11px] font-semibold">Unlimited Bidding Authority</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold font-heading tracking-tight text-warm-dark leading-[1.12]">
                Engineering Landmark Infrastructure for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-coral to-gold-dark">
                  Maharashtra
                </span>
              </h1>
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-stone-dark">
                <span className="w-6 h-[2px] bg-gold rounded-full" />
                <p className="text-terracotta tracking-wide">
                  शासकीय नोंदणीकृत वर्ग १-अ कंत्राटदार • अमळनेर, जि. जळगाव (खानदेश)
                </p>
              </div>
            </div>

            {/* Lead Narrative */}
            <p className="text-stone-dark text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Official civil engineering portfolio of <strong className="text-warm-dark font-semibold">{OFFICE_DATA.proprietor}</strong> ({OFFICE_DATA.qualification}) and <strong className="text-warm-dark font-semibold">{OFFICE_DATA.firmName}</strong>. Delivering premier PWD state highways, high-level RCC bridges, Jal Jeevan Mission drinking water networks, and government civil works with a 100% company-owned heavy machinery fleet and mobile NABL testing lab based in Amalner.
            </p>

            {/* Regional & Technical Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                Amalner HQ, Jalgaon Dist. 425401
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-gold-dark" />
                Khandesh & North Maharashtra Region
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs">
                <HardHat className="w-3.5 h-3.5 text-coral" />
                Chartered Civil Engineer (IEI)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="px-6 py-3.5 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white font-bold text-sm rounded-xl shadow-[0_4px_16px_rgba(232,90,79,0.3)] hover:shadow-[0_6px_20px_rgba(232,90,79,0.4)] transition-all flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore Project Galleries</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-verify-certs-btn"
                onClick={onExploreCerts}
                className="px-5 py-3.5 bg-white hover:bg-stone-50 text-warm-dark font-semibold text-sm rounded-xl border border-stone-300 hover:border-gold/60 transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4 text-gold-dark" />
                <span>Verify Class 1-A License</span>
              </button>

              <button
                id="hero-location-btn"
                onClick={onExploreLocation}
                className="px-4 py-3.5 bg-white/80 hover:bg-white text-stone-dark hover:text-warm-dark font-medium text-sm rounded-xl border border-stone-200 transition-all flex items-center gap-2 cursor-pointer shadow-2xs hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-coral" />
                <span>Amalner Office</span>
              </button>
            </div>
          </div>

          {/* Engineer Profile & Government Credentials Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-stone-200 hover:border-gold/40 p-6 sm:p-8 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300">
              
              {/* Official Gold Government Seal Tag */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark border border-gold/40 text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>GOVT. REGISTERED</span>
              </div>

              {/* Profile Bio Header */}
              <div className="flex items-center gap-4 mt-5 mb-6 sm:pr-28 ">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-charcoal to-obsidian border-2 border-gold/40 flex items-center justify-center text-gold shadow-md shrink-0">
                  <Building2 className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-warm-dark">
                    {OFFICE_DATA.proprietor}
                  </h2>
                  <p className="text-xs text-terracotta font-semibold">
                    {OFFICE_DATA.qualification}
                  </p>
                  <p className="text-xs text-stone-muted mt-0.5 font-medium">
                    Proprietor: {OFFICE_DATA.firmName} (Amalner)
                  </p>
                </div>
              </div>

              {/* Verified Authorizations List */}
              <div className="space-y-3 border-t border-stone-200/80 pt-4 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-stone-dark">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-warm-dark">PWD Maharashtra Class 1-A:</span> Unlimited financial tender execution capacity across Maharashtra state.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-stone-dark">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-warm-dark">MJP Jal Jeevan Mission:</span> Certified for turnkey rural drinking water, ESRs & WTP plants.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-stone-dark">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-warm-dark">Amalner Head Office:</span> Physical administrative chambers on Station Road, opposite PWD Sub-Divisional Office.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-stone-dark">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-warm-dark">In-house Plant & Lab:</span> Hot mix plant, electronic paver, transit mixers & NABL standard testing rig.
                  </div>
                </div>
              </div>

              {/* Fast Direct Action Bar */}
              <div className="bg-gradient-to-r from-alabaster to-stone-100 p-3.5 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-stone-muted font-medium">Tender Scrutiny Desk</p>
                  <p className="text-xs sm:text-sm font-bold text-warm-dark font-mono">{OFFICE_DATA.mobiles[0]}</p>
                </div>
                <button
                  onClick={onExploreInquiry}
                  className="px-3.5 py-2 bg-warm-dark hover:bg-charcoal text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>BOQ Estimate</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Executive Stats Strip */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {CONTRACTOR_STATS.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-warm-dark to-terracotta font-mono tracking-tight">
                {stat.value}
              </p>
              <div>
                <p className="text-xs font-bold text-warm-dark mt-2 leading-tight">
                  {stat.label}
                </p>
                <p className="text-[11px] text-stone-muted mt-1 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
