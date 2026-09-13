import React from 'react';
import { 
  Wrench, 
  CheckCircle2, 
  Truck, 
  Gauge, 
  HardHat, 
  Compass, 
  Layers, 
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import { MACHINERY_DATA } from '../data/officeData';

export const MachineryFleet: React.FC = () => {
  return (
    <section id="machinery" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-terracotta" />
            <span>In-House Construction Assets & Testing Rig</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight">
            Heavy Plant, Machinery & Mobile Testing Fleet
          </h2>
          <p className="text-sm sm:text-base text-stone-muted mt-2 leading-relaxed">
            100% company-owned plant and modern machinery based in Amalner yard, eliminating equipment rental bottlenecks and ensuring strict adherence to MoRTH and PWD Maharashtra quality specifications.
          </p>
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MACHINERY_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-white/95 rounded-2xl border-2 border-stone-200 hover:border-gold/50 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-md border border-terracotta/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold bg-warm-dark text-gold-light px-2.5 py-1 rounded-md border border-gold/30 shadow-2xs">
                    {item.count} Units Owned
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-warm-dark leading-snug group-hover:text-terracotta transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-stone-muted mt-1 font-medium">
                  Model: {item.model}
                </p>

                <div className="mt-4 bg-stone-50 p-3 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs">
                  <span className="text-stone-muted font-medium">Rated Capacity:</span>
                  <span className="font-bold text-warm-dark font-mono text-xs">{item.capacity}</span>
                </div>

                <p className="text-xs text-stone-dark mt-3 leading-relaxed">
                  {item.specs}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {item.status}
                </span>
                <span className="text-stone-muted text-[11px] font-mono">
                  Base: Amalner Central Yard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* In-House Mobile QC Lab Feature */}
        <div className="mt-12 bg-gradient-to-r from-alabaster via-white to-alabaster rounded-2xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-[0_6px_24px_-4px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark">
              <Compass className="w-4 h-4 text-gold" />
              <span>NABL Standard Mobile Quality Testing Lab</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-heading text-warm-dark">
              Rigorous On-Site Material Testing Across Khandesh & Jalgaon
            </h4>
            <p className="text-xs sm:text-sm text-stone-dark leading-relaxed">
              Every cubic meter of high-grade concrete and every tonne of VG-30/PMB asphalt undergoes automated density, slump, temperature, and 7/28-day compression testing. Zero substandard material tolerated on any PWD, MJP or WRD site.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="px-4 py-2.5 bg-warm-dark text-gold-light text-xs font-bold rounded-xl border border-gold/40 flex items-center gap-2 shadow-md">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>100% Quality Audit Passed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
