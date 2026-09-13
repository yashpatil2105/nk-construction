import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Compass, 
  Navigation, 
  ExternalLink, 
  Car, 
  Building2, 
  Train, 
  CheckCircle2, 
  MessageSquare,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import { OFFICE_DATA, REGIONAL_DISTANCES } from '../data/officeData';

export const OfficeLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullAddr = `${OFFICE_DATA.firmName}, ${OFFICE_DATA.addressLine1}, ${OFFICE_DATA.addressLine2}, ${OFFICE_DATA.city}, Tal. ${OFFICE_DATA.taluka}, Dist. ${OFFICE_DATA.district}, ${OFFICE_DATA.state} - ${OFFICE_DATA.pincode}`;
    navigator.clipboard.writeText(fullAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-gradient-to-b from-white via-alabaster to-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-coral" />
            <span>Administrative Headquarters & Geo-Presence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight">
            Amalner Central Office & Khandesh Regional Presence
          </h2>
          <p className="text-sm sm:text-base text-stone-muted mt-2 leading-relaxed">
            Centrally situated in <strong className="text-warm-dark font-semibold">Amalner, Jalgaon District (Maharashtra)</strong> on Station Road, directly opposite the PWD Sub-Divisional Office. Conveniently accessible within 45 to 70 minutes from Dhule, Jalgaon, Chopda, and Parola.
          </p>
        </div>

        {/* Main Location Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detailed Address, Contacts & Regional Connectivity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-white/95 rounded-2xl border-2 border-stone-200 hover:border-gold/40 p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-3 py-1 rounded-md border border-gold/30 shadow-2xs">
                  Head Office • मुख्य कार्यालय
                </span>
                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="text-xs text-stone-dark hover:text-warm-dark flex items-center gap-1 font-semibold bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg border border-stone-200 transition-colors cursor-pointer shadow-2xs"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-muted" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold font-heading text-warm-dark">
                {OFFICE_DATA.firmName}
              </h3>
              <p className="text-xs text-terracotta font-semibold mt-0.5">
                {OFFICE_DATA.proprietor} • {OFFICE_DATA.qualification}
              </p>

              {/* Address details */}
              <div className="mt-4 text-sm text-stone-dark space-y-1.5 leading-relaxed border-t border-stone-200 pt-4">
                <p className="font-semibold text-warm-dark flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <span>{OFFICE_DATA.addressLine1}</span>
                </p>
                <p className="pl-6 text-stone-muted">{OFFICE_DATA.addressLine2}</p>
                <p className="pl-6 text-warm-dark font-medium">
                  {OFFICE_DATA.city}, Taluka {OFFICE_DATA.taluka},
                </p>
                <p className="pl-6 text-warm-dark font-medium">
                  {OFFICE_DATA.district}, {OFFICE_DATA.state} – <span className="font-mono font-bold text-terracotta">{OFFICE_DATA.pincode}</span>
                </p>
              </div>

              {/* Landmark notes */}
              <div className="mt-5 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                <p className="font-bold text-warm-dark flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-gold-dark" />
                  Key Amalner Town Landmarks:
                </p>
                <ul className="text-stone-dark space-y-1 pl-5 list-disc text-[11px] leading-relaxed">
                  <li>Directly opposite PWD Sub-Divisional Rest House & Office</li>
                  <li>600 meters from Amalner Railway Station (Western Railway)</li>
                  <li>300 meters from Court Chowk & Pratap College Road</li>
                  <li>400 meters from Bori River High-Level Bridge</li>
                </ul>
              </div>

              {/* Office hours */}
              <div className="mt-5 flex items-start gap-2.5 text-xs text-stone-muted border-t border-stone-200 pt-4">
                <Clock className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-warm-dark">{OFFICE_DATA.timing}</p>
                  <p className="text-stone-muted mt-0.5">{OFFICE_DATA.days}</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Bar in Obsidian/Gold */}
            <div className="bg-gradient-to-br from-charcoal to-obsidian text-stone-light rounded-2xl p-6 shadow-xl space-y-4 border border-gold/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Direct Tender Liaison & Office Inquiries</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-stone-muted">Direct Mobile / WhatsApp</p>
                  <a href={`tel:${OFFICE_DATA.mobiles[0]}`} className="font-mono font-bold text-sm text-white hover:text-gold-light transition-colors">
                    {OFFICE_DATA.mobiles[0]}
                  </a>
                </div>
                <div>
                  <p className="text-stone-muted">Amalner Office Landline</p>
                  <a href={`tel:${OFFICE_DATA.mobiles[0]}`} className="font-mono font-bold text-sm text-white hover:text-gold-light transition-colors">
                    {OFFICE_DATA.mobiles[0]}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-stone-muted">Official Tender Email</p>
                  <a href={`mailto:${OFFICE_DATA.emails[0]}`} className="font-semibold text-stone-light hover:text-white transition-colors">
                    {OFFICE_DATA.emails[0]}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${OFFICE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=Namaskar%20Er.%20Nilesh%20Patil%20Sir%20(NK%20Construction),%20contacting%20regarding%20Amalner%20office%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Message</span>
                </a>
                <a
                  href={`tel:${OFFICE_DATA.mobiles[0]}`}
                  className="flex-1 py-2.5 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Embedded Interactive Map & Road Connectivity Matrix (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Interactive Map Card */}
            <div className="bg-white/95 rounded-2xl border-2 border-stone-200 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-1 flex flex-col">
              {/* Map Title Bar */}
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-warm-dark">
                    Amalner Map Location (Lat: {OFFICE_DATA.coordinates.lat}° N, Lng: {OFFICE_DATA.coordinates.lng}° E)
                  </span>
                </div>
                <a
                  href={OFFICE_DATA.googleMapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-terracotta hover:text-terracotta-hover flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Frame */}
              <div className="relative w-full h-80 sm:h-96 bg-stone-100">
                <iframe
                  title="Office Location in Amalner, Jalgaon"
                  src={OFFICE_DATA.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Overlay Pin Information */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-obsidian/95 backdrop-blur-md text-stone-light p-4 rounded-2xl border border-gold/30 shadow-2xl text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white leading-tight">
                        Patil Chambers (NK Construction)
                      </p>
                      <p className="text-stone-muted text-[11px] mt-0.5">
                        Station Road, Opp. PWD Sub-Division, Amalner 425401
                      </p>
                      <a
                        href={OFFICE_DATA.googleMapDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold-light hover:text-white font-semibold mt-2 text-[11px] transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Navigate via Google GPS</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Distances & Road Connectivity Matrix */}
            <div className="bg-white/95 p-5 sm:p-6 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-terracotta" />
                  <span>Road Connectivity from Major Khandesh Centers</span>
                </h4>
                <span className="text-[11px] font-mono text-stone-muted">
                  Amalner Central Hub
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {REGIONAL_DISTANCES.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200/90 text-xs hover:border-gold/40 transition-colors">
                    <p className="font-bold text-warm-dark truncate">{item.destination}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono font-bold text-terracotta text-xs">{item.distance}</span>
                      <span className="text-[11px] text-stone-muted">~{item.travelTime}</span>
                    </div>
                    <p className="text-[10px] text-stone-muted mt-1 truncate">{item.route}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
