import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Search, 
  MapPin, 
  IndianRupee, 
  Calendar, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Filter, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Completed' | 'Ongoing'>('all');

  const categories = [
    { id: 'all', label: 'All Executed Works' },
    { id: 'roads', label: 'Highways & Paving' },
    { id: 'bridges', label: 'RCC River Bridges' },
    { id: 'water', label: 'Water Networks & ESR' },
    { id: 'buildings', label: 'Public Infra Buildings' },
    { id: 'irrigation', label: 'Canals & Weirs' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.marathiTitle && project.marathiTitle.includes(searchQuery));

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, statusFilter, searchQuery]);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-white via-alabaster to-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <FolderGit2 className="w-3.5 h-3.5 text-terracotta" />
              <span>Government Infrastructure Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight">
              Past Project Galleries & Executed Works
            </h2>
            <p className="text-sm sm:text-base text-stone-muted mt-2 leading-relaxed">
              High-specification infrastructure executed for PWD Maharashtra, Maharashtra Jeevan Pradhikaran (MJP), Water Resources Department, and Municipal Councils across Amalner, Jalgaon, and North Maharashtra.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-stone-muted bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Showing {filteredProjects.length} Verified Works</span>
          </div>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-warm-dark text-white shadow-sm'
                      : 'text-stone-dark hover:bg-stone-100 hover:text-warm-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Status toggle */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl shrink-0 self-start md:self-auto border border-stone-200">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  statusFilter === 'all' ? 'bg-white text-warm-dark shadow-2xs' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setStatusFilter('Completed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  statusFilter === 'Completed' ? 'bg-terracotta text-white shadow-2xs' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setStatusFilter('Ongoing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  statusFilter === 'Ongoing' ? 'bg-warm-dark text-white shadow-2xs' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ongoing
              </button>
            </div>

          </div>

          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project title, department (PWD, MJP), bridge, road or Amalner location..."
              className="w-full pl-10 pr-4 py-2.5 bg-alabaster/60 border border-stone-200/90 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-xs">
            <FolderGit2 className="w-12 h-12 text-stone-muted mx-auto mb-3" />
            <p className="text-base font-bold text-warm-dark">No projects match the current filter</p>
            <p className="text-xs text-stone-muted mt-1">Try resetting your search query or switching categories.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-terracotta text-white rounded-xl text-xs font-semibold hover:bg-terracotta-hover cursor-pointer transition-colors shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group bg-white/95 rounded-2xl border border-stone-200/90 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] hover:border-gold/50 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Project Image with Gradient & Overlays */}
                <div className="relative h-52 sm:h-56 bg-warm-dark overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-black/30" />
                  
                  {/* Top tags */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="bg-obsidian/85 backdrop-blur-md text-stone-light text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs ${
                      project.status === 'Completed'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-600 text-white'
                    }`}>
                      {project.status === 'Ongoing' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Golden Cost badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 font-mono border border-gold/40">
                      <IndianRupee className="w-3 h-3 text-gold" />
                      {project.tenderCost}
                    </span>
                  </div>

                  {/* Location & Year footer strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between">
                    <span className="flex items-center gap-1 truncate text-stone-light font-medium">
                      <MapPin className="w-3.5 h-3.5 text-coral shrink-0" />
                      {project.location}
                    </span>
                    <span className="text-gold-light font-mono text-[11px] shrink-0 ml-2 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10">
                      {project.completionYear}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-terracotta uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      <span>{project.department}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-warm-dark leading-snug group-hover:text-terracotta transition-colors">
                      {project.title}
                    </h3>
                    {project.marathiTitle && (
                      <p className="text-xs text-stone-muted mt-1 line-clamp-1 font-medium">
                        {project.marathiTitle}
                      </p>
                    )}
                    <p className="text-xs text-stone-dark mt-2.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key specs pills */}
                  <div className="pt-3 border-t border-stone-200/80">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      {project.keySpecs.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="bg-stone-50 p-2 rounded-xl border border-stone-200/80">
                          <span className="text-stone-muted block truncate font-medium">{spec.label}</span>
                          <span className="font-bold text-warm-dark truncate block mt-0.5">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-terracotta group-hover:text-terracotta-hover transition-colors">
                      <span className="flex items-center gap-1.5">
                        Inspect Project Dossier
                        {project.beforeAfter && (
                          <span className="text-[10px] bg-sand/30 text-warm-dark px-1.5 py-0.5 rounded-md font-semibold border border-sand">
                            Site Proof
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
