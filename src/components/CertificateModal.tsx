import React from 'react';
import { 
  X, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  FileCheck, 
  Download, 
  Building, 
  Calendar, 
  Layers, 
  Printer,
  Sparkles
} from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 sm:items-center">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border-2 border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header in Executive Obsidian */}
        <div className="bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden border-b border-charcoal-border">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-charcoal border border-gold/40 flex items-center justify-center text-gold shrink-0 shadow-md">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-2.5 py-0.5 rounded-md border border-gold/40">
                  {cert.sealBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.status}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {cert.title}
              </h3>
              {cert.marathiTitle && (
                <p className="text-sm text-gold-light mt-0.5 font-medium">
                  {cert.marathiTitle}
                </p>
              )}
            </div>
          </div>

          <button
            id="close-cert-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-stone-light hover:text-white transition-colors border border-charcoal-border cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-alabaster">
          {/* Certificate Dossier Box */}
          <div className="p-5 rounded-2xl bg-white border-2 border-stone-200 shadow-sm relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-muted">
                  Issuing Government Authority
                </p>
                <p className="font-bold text-warm-dark mt-1 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{cert.issuingAuthority}</span>
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-muted">
                  Official Registration / License No.
                </p>
                <p className="font-mono font-bold text-warm-dark bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-lg mt-1 inline-block text-xs">
                  {cert.registrationNumber}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-muted">
                  Current Validity & Status
                </p>
                <p className="font-semibold text-emerald-700 mt-1 flex items-center gap-1.5 text-xs">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cert.validTill}</span>
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-muted">
                  Statutory Bidding Limit
                </p>
                <p className="font-bold text-gold-dark mt-1 flex items-center gap-1.5 text-xs">
                  <Layers className="w-4 h-4 text-gold shrink-0" />
                  <span>{cert.verificationDetails.workLimit}</span>
                </p>
              </div>
            </div>

            {/* Official Stamp Simulation */}
            <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs text-stone-muted">
                <FileCheck className="w-4 h-4 text-terracotta" />
                <span>Verification Source: <strong className="text-warm-dark">{cert.verificationDetails.portalName}</strong></span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono bg-gold-badge text-gold-dark px-3 py-1 rounded-full border border-gold/40 font-bold shadow-2xs">
                  GOV SEAL VERIFIED • STATUTORY COMPLIANT
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark mb-2">
              Scope of Statutory Authorization & Competency
            </h4>
            <p className="text-stone-dark text-xs sm:text-sm leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* Key Qualifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark mb-3">
              Verified Technical Standards & Privileges
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cert.highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 text-xs sm:text-sm text-stone-dark bg-white p-3 rounded-xl border border-stone-200 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Contractor Verification Notice */}
          <div className="p-4 bg-white rounded-2xl border-2 border-stone-200 text-xs text-stone-dark flex items-start gap-3 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-warm-dark">Official Verification Assurance for Government Tender Committees</p>
              <p className="mt-0.5 text-stone-muted leading-relaxed">
                Original license booklet, bank solvency papers, and attested copies are maintained at our Amalner Head Office (Station Road, Opp. PWD Rest House). Scrutinized and accepted in Mahatenders e-Procurement System.
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-white px-6 py-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3">
          <button
            id="print-cert-btn"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-dark hover:text-warm-dark px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer shadow-2xs"
          >
            <Printer className="w-4 h-4 text-stone-muted" />
            <span>Print Dossier Summary</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              id="close-cert-btn"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-dark hover:text-warm-dark hover:bg-stone-100 rounded-xl transition-colors cursor-pointer border border-stone-200"
            >
              Close
            </button>
            <a
              href={`https://wa.me/918847706600?text=Inquiring%20about%20license%20and%20tender%20verification%20for%20${encodeURIComponent(cert.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Request Verified Copy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
