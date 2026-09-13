import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  FileText, 
  IndianRupee, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { OFFICE_DATA } from '../data/officeData';

export const EstimatorAndInquiry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'estimator' | 'inquiry'>('estimator');

  // Estimator state
  const [projectType, setProjectType] = useState<'asphalt_road' | 'concrete_road' | 'esr_water_tank' | 'rcc_building'>('asphalt_road');
  const [quantity, setQuantity] = useState<number>(5);

  // Inquiry form state
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    workType: 'Government PWD Tender BOQ',
    location: 'Amalner / Jalgaon District',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Estimator calculation logic based on current Maharashtra PWD/MJP SSR norms
  const calculateEstimate = () => {
    switch (projectType) {
      case 'asphalt_road': {
        const ratePerKm = 1.45;
        const total = quantity * ratePerKm;
        return {
          total: total.toFixed(2),
          rateText: '₹ 1.45 Cr / Km (2-Lane 7.0m PWD Standard with DBM/BC)',
          unit: 'Km Highway Length',
          breakdown: [
            { item: 'Earthwork, Subgrade & Granular Sub-base (GSB)', pct: 25, amount: (total * 0.25).toFixed(2) },
            { item: 'Wet Mix Macadam (WMM) & DBM Bituminous Base', pct: 40, amount: (total * 0.40).toFixed(2) },
            { item: 'Bituminous Concrete (BC) & Thermoplastic Markings', pct: 20, amount: (total * 0.20).toFixed(2) },
            { item: 'Cross Drainage Box Culverts & IRC Signages', pct: 15, amount: (total * 0.15).toFixed(2) }
          ]
        };
      }
      case 'concrete_road': {
        const ratePerKm = 1.85;
        const total = quantity * ratePerKm;
        return {
          total: total.toFixed(2),
          rateText: '₹ 1.85 Cr / Km (M35 Grade Rigid PQC Pavement)',
          unit: 'Km Concrete Road Length',
          breakdown: [
            { item: 'Excavation, Subgrade Preparation & DLC Layer', pct: 22, amount: (total * 0.22).toFixed(2) },
            { item: 'Pavement Quality Concrete (PQC M35) with Paver', pct: 52, amount: (total * 0.52).toFixed(2) },
            { item: 'Dowels, Tie Bars, Joint Sealing & Curing', pct: 14, amount: (total * 0.14).toFixed(2) },
            { item: 'Shoulders, Covered Drains & Side Kerbs', pct: 12, amount: (total * 0.12).toFixed(2) }
          ]
        };
      }
      case 'esr_water_tank': {
        const total = quantity * 0.65;
        return {
          total: total.toFixed(2),
          rateText: '₹ 65 Lakhs per 10-Lakh Litre Capacity (20m Staging)',
          unit: 'Units of 10 Lakh Litres (1 Million Litres)',
          breakdown: [
            { item: 'Deep Raft / Pile Foundation & Excavation in Basalt', pct: 26, amount: (total * 0.26).toFixed(2) },
            { item: 'RCC Staging Columns, Braces & Mid-Galleries (M30)', pct: 36, amount: (total * 0.36).toFixed(2) },
            { item: 'Intze Tank Container, Dome & Waterproofing Screed', pct: 24, amount: (total * 0.24).toFixed(2) },
            { item: 'Inlet/Outlet Piping, Heavy Valves, Lightning Arrester', pct: 14, amount: (total * 0.14).toFixed(2) }
          ]
        };
      }
      case 'rcc_building': {
        const costInCr = (quantity * 1000 * 2450) / 10000000;
        return {
          total: costInCr.toFixed(2),
          rateText: '₹ 2,450 / Sq. Ft. (PWD G+3 Framed Civic Structure)',
          unit: 'Units of 1,000 Sq. Ft. Built-up Plinth Area',
          breakdown: [
            { item: 'RCC Framed Superstructure (Columns, Beams, Slabs M25)', pct: 42, amount: (costInCr * 0.42).toFixed(2) },
            { item: 'Brickwork Masonry, Plastering & Waterproofing', pct: 22, amount: (costInCr * 0.22).toFixed(2) },
            { item: 'Flooring, Doors, Windows, Paint & Elevators', pct: 20, amount: (costInCr * 0.20).toFixed(2) },
            { item: 'Electrical, Fire-Fighting Hydrants & Plumbing Setup', pct: 16, amount: (costInCr * 0.16).toFixed(2) }
          ]
        };
      }
    }
  };

  const estimate = calculateEstimate();

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-alabaster text-warm-dark border-b border-stone-200/80 bg-cad-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-terracotta" />
            <span>Tender Consultation & Cost Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight">
            Maharashtra SSR BOQ Estimator & Tender Inquiries
          </h2>
          <p className="text-sm sm:text-base text-stone-muted mt-2 leading-relaxed">
            Run preliminary budget calculations based on current Maharashtra Public Works Department (PWD) Schedule of Rates, or submit an official inquiry for joint ventures, tender bidding, and site inspections in Amalner.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mb-8 border-b border-stone-200 pb-4 flex-wrap">
          <button
            id="tab-select-estimator"
            onClick={() => setActiveTab('estimator')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'estimator'
                ? 'bg-warm-dark text-white shadow-md'
                : 'text-stone-dark hover:text-warm-dark hover:bg-white/80'
            }`}
          >
            <Calculator className={`w-4 h-4 ${activeTab === 'estimator' ? 'text-gold' : 'text-stone-muted'}`} />
            <span>Maharashtra SSR Civil Cost Estimator</span>
          </button>
          <button
            id="tab-select-inquiry"
            onClick={() => setActiveTab('inquiry')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'inquiry'
                ? 'bg-warm-dark text-white shadow-md'
                : 'text-stone-dark hover:text-warm-dark hover:bg-white/80'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'inquiry' ? 'text-gold' : 'text-stone-muted'}`} />
            <span>Tender & Work Inquiry Form</span>
          </button>
        </div>

        {/* Tab 1: BOQ Estimator */}
        {activeTab === 'estimator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
            
            {/* Left: Estimator Inputs (5 cols) */}
            <div className="lg:col-span-5 bg-white/95 p-6 sm:p-7 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-muted mb-2">
                  Select Project Engineering Category
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'asphalt_road', label: 'PWD Asphalt Highway (2-Lane Bituminous)' },
                    { id: 'concrete_road', label: 'Rigid Concrete Pavement (M35 PQC)' },
                    { id: 'esr_water_tank', label: 'RCC Elevated Water Reservoir (ESR - JJM)' },
                    { id: 'rcc_building', label: 'Administrative / Public Building (G+3)' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setProjectType(cat.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                        projectType === cat.id
                          ? 'bg-stone-100 border-gold/60 text-warm-dark font-bold shadow-2xs'
                          : 'bg-white border-stone-200 text-stone-dark hover:bg-stone-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-warm-dark">
                    Project Magnitude / Quantity
                  </label>
                  <span className="font-mono text-xs font-bold text-warm-dark bg-stone-100 px-3 py-1 rounded-lg border border-stone-200">
                    {quantity} {estimate.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-terracotta h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-muted mt-1 font-mono">
                  <span>1 unit</span>
                  <span>15 units</span>
                  <span>30 units</span>
                </div>
              </div>

              {/* Benchmark notes */}
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1 text-stone-dark">
                <p className="font-bold text-warm-dark">Engineering Benchmark Rate:</p>
                <p className="text-terracotta font-mono font-semibold">{estimate.rateText}</p>
                <p className="text-[11px] text-stone-muted pt-1">
                  *Calibrated with Maharashtra PWD Circle Jalgaon / Nashik Standard Schedule of Rates (SSR). Actual tender values vary by lead distance, quarry proximity, and soil strata.
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab('inquiry');
                  setInquiryData(prev => ({
                    ...prev,
                    message: `Requesting formal BOQ and technical feasibility for ${projectType.replace('_', ' ')} of approx ${quantity} ${estimate.unit}. Estimated budget: ₹ ${estimate.total} Cr.`
                  }));
                }}
                className="w-full py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Request Detailed BOQ for this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Breakdown & Estimated Cost (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-muted">
                    Preliminary Rough Cost Estimate
                  </span>
                  <span className="text-[11px] bg-gold-badge text-gold-dark border border-gold/30 px-3 py-0.5 rounded-full font-semibold">
                    Maharashtra PWD SSR Compliant
                  </span>
                </div>

                <div className="bg-gradient-to-br from-charcoal to-obsidian text-stone-light p-6 rounded-2xl border border-gold/30 shadow-xl flex items-baseline justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs text-stone-muted uppercase tracking-wider">Estimated Sanction Value</p>
                    <p className="text-3xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-sand to-white mt-1">
                      ₹ {estimate.total} <span className="text-lg sm:text-2xl text-stone-muted font-normal">Crores</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-muted">Contractor Capacity</p>
                    <p className="text-xs font-bold text-gold-light mt-1 font-mono">Class 1-A (Unlimited Bidding)</p>
                  </div>
                </div>

                {/* Breakdown table */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-terracotta" />
                    <span>Component-wise Civil Cost Distribution</span>
                  </h4>
                  <div className="space-y-2">
                    {estimate.breakdown.map((row, i) => (
                      <div key={i} className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex items-center justify-between text-xs gap-3">
                        <div className="flex-1">
                          <p className="text-warm-dark font-medium">{row.item}</p>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-terracotta to-coral h-full rounded-full" 
                              style={{ width: `${row.pct}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-mono font-bold text-terracotta text-xs">₹ {row.amount} Cr</p>
                          <p className="text-[10px] text-stone-muted font-mono">{row.pct}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct consult CTA */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3 text-xs">
                <span className="text-stone-muted">
                  Discuss tender specifications at our Amalner office with Er. Nilesh R. Patil (NK Construction)
                </span>
                <a
                  href={`https://wa.me/918847706600?text=Inquiring%20about%20rough%20BOQ%20estimate%20of%20₹%20${estimate.total}%20Cr%20for%20${encodeURIComponent(projectType)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp this Estimate</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Tender & Project Inquiry Form */}
        {activeTab === 'inquiry' && (
          <div className="bg-white/95 p-6 sm:p-10 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-w-3xl mx-auto animate-in fade-in duration-200">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold font-heading text-warm-dark">
                  Tender Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-stone-dark max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-warm-dark">{inquiryData.fullName}</strong>. Our Amalner administrative desk and Er. Nilesh R. Patil (NK Construction) will examine your tender specifications and reply via phone or email shortly.
                </p>
                <div className="pt-4 flex items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${OFFICE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=Namaskar%20Er.%20Nilesh%20Patil,%20I%20have%20submitted%20a%20tender%20inquiry%20from%20${encodeURIComponent(inquiryData.organization || inquiryData.fullName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 bg-white hover:bg-stone-100 text-warm-dark text-xs font-semibold rounded-xl border border-stone-200 cursor-pointer shadow-2xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Full Name / Officer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.fullName}
                      onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                      placeholder="e.g. Er. Rajesh Patil"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Department / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.organization}
                      onChange={(e) => setInquiryData({ ...inquiryData, organization: e.target.value })}
                      placeholder="e.g. PWD Jalgaon / Municipal Council / Private"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="officer@domain.gov.in"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Inquiry Nature
                    </label>
                    <select
                      value={inquiryData.workType}
                      onChange={(e) => setInquiryData({ ...inquiryData, workType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    >
                      <option>Government PWD Tender BOQ</option>
                      <option>Jal Jeevan Mission (MJP) Water Scheme</option>
                      <option>RCC Bridge / Culvert Construction</option>
                      <option>Joint Venture (JV) Partnership Proposal</option>
                      <option>Machinery & Plant Rental / Subcontract</option>
                      <option>Structural Vetting & Chartered Stability</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-warm-dark mb-1">
                      Work Site Location
                    </label>
                    <input
                      type="text"
                      value={inquiryData.location}
                      onChange={(e) => setInquiryData({ ...inquiryData, location: e.target.value })}
                      placeholder="Amalner, Jalgaon, Dhule, Chopda..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warm-dark mb-1">
                    Project Scope / Tender Details & Notes
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Describe the estimated tender value, technical specifications, or timeline for inspection..."
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-[11px] text-stone-muted">
                    *Directly forwarded to Amalner Head Office desk.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Official Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
