import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Building2, 
  Calendar, 
  IndianRupee, 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  if (!project) return null;

  const allImages = [project.imageUrl, ...(project.galleryImages || [])];
  const currentImage = allImages[activeImageIndex] || project.imageUrl;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-stone-200 overflow-hidden my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar in Executive Obsidian */}
        <div className="bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-white p-5 sm:p-6 flex items-start justify-between border-b border-charcoal-border">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-terracotta text-white px-2.5 py-0.5 rounded-md">
                {project.category.toUpperCase()} INFRASTRUCTURE
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-md font-semibold ${
                project.status === 'Completed'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/50'
                  : 'bg-amber-950 text-amber-300 border border-amber-700/50'
              }`}>
                {project.status === 'Completed' ? '✓ Commissioned & Handed Over' : '⚙ In Active Execution'}
              </span>
              <span className="text-xs text-stone-muted font-mono">
                Completion: {project.completionYear}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-heading text-white">
              {project.title}
            </h3>
            {project.marathiTitle && (
              <p className="text-sm text-gold-light mt-0.5 font-medium">
                {project.marathiTitle}
              </p>
            )}
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-stone-light hover:text-white transition-colors shrink-0 ml-2 border border-charcoal-border cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-alabaster">
          {/* Main Visual Presentation */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-warm-dark border-2 border-stone-200 shadow-md">
              {project.beforeAfter && showBeforeAfter ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                  <div className="relative h-full border-r border-stone-300">
                    <img 
                      src={project.beforeAfter.before} 
                      alt="Before Work"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-terracotta/95 text-white text-xs px-2.5 py-1 rounded-md font-semibold backdrop-blur-xs">
                      Before Commencement
                    </div>
                  </div>
                  <div className="relative h-full">
                    <img 
                      src={project.beforeAfter.after} 
                      alt="After Completion"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-obsidian/95 text-gold-light text-xs px-2.5 py-1 rounded-md font-semibold backdrop-blur-xs border border-white/10">
                      After PWD Handover
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={currentImage} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Badges on image */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-obsidian/95 backdrop-blur-md text-gold-light text-xs font-bold px-3 py-1 rounded-lg border border-gold/40 flex items-center gap-1 shadow-lg font-mono">
                  <IndianRupee className="w-3.5 h-3.5 text-gold" />
                  Sanction: {project.tenderCost}
                </span>
              </div>

              {project.beforeAfter && (
                <button
                  id="toggle-before-after-btn"
                  onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-warm-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all flex items-center gap-1.5 cursor-pointer border border-stone-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>{showBeforeAfter ? 'Show Primary View' : 'Compare Before / After'}</span>
                </button>
              )}
            </div>

            {/* Gallery Thumbnail Strip */}
            {allImages.length > 1 && !showBeforeAfter && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-terracotta scale-105 shadow-md' : 'border-stone-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
            <div>
              <p className="text-[11px] uppercase font-bold text-stone-muted">Client Authority</p>
              <p className="text-xs sm:text-sm font-bold text-warm-dark mt-0.5">{project.department}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-stone-muted">Site Location</p>
              <p className="text-xs sm:text-sm font-bold text-warm-dark mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                {project.location}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-stone-muted">Sanction Value</p>
              <p className="text-xs sm:text-sm font-bold text-terracotta mt-0.5 font-mono">{project.tenderCost}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-stone-muted">Completion Cert Ref</p>
              <p className="text-xs sm:text-sm font-bold text-warm-dark mt-0.5 font-mono truncate" title={project.completionCertNumber}>
                {project.completionCertNumber}
              </p>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-terracotta" />
              <span>Technical Engineering Specifications</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.keySpecs.map((spec, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                  <p className="text-[11px] font-semibold text-stone-muted">{spec.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-warm-dark mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-warm-dark mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Scope of Civil Works Executed</span>
            </h4>
            <ul className="space-y-2">
              {project.scopeOfWork.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-dark flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Narrative */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-muted mb-1">
              Project Engineering Overview
            </h5>
            <p className="text-xs sm:text-sm text-stone-dark leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white px-6 py-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-stone-muted">
            Executing Agency: <strong className="text-warm-dark">Er. Nilesh R. Patil • NK Construction (Amalner)</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-dark hover:text-warm-dark hover:bg-stone-100 rounded-xl transition-colors cursor-pointer border border-stone-200"
            >
              Close
            </button>
            <a
              href={`https://wa.me/918847706600?text=Inquiring%20about%20similar%20project%20like%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Consult On Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
