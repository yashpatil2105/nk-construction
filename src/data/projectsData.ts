import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'amalner-chopda-sh19',
    title: 'Amalner – Chopda State Highway (SH-19) 4-Lane Widening & Bituminous Concrete',
    marathiTitle: 'अमळनेर – चोपडा राज्य महामार्ग रुंदीकरण व डांबरीकरण',
    category: 'roads',
    department: 'Public Works Department (PWD), Gov. of Maharashtra',
    client: 'Executive Engineer, PWD Jalgaon Division',
    location: 'Amalner to Galwade Sector (Km 12/00 to 28/400), Jalgaon',
    tenderCost: '₹ 28.45 Cr',
    costNumeric: 28.45,
    completionYear: '2024',
    status: 'Completed',
    description: 'Complete widening from 2-lane to 4-lane divided carriageway with 50mm Bituminous Concrete (BC) over 75mm Dense Bituminous Macadam (DBM), paved shoulders, crash barriers, and IRC-standard signage.',
    scopeOfWork: [
      '16.4 km 4-Lane highway expansion with granular sub-base (GSB) & Wet Mix Macadam (WMM)',
      '12 Box culverts reconstruction & 4 pipe culvert extensions with IRC load-testing approval',
      'Solar-powered LED highway illumination at 4 major rural junctions in Amalner Taluka',
      'Advanced thermoplastic road markings and crash barrier installations along Bori curve'
    ],
    keySpecs: [
      { label: 'Length', value: '16.40 Km' },
      { label: 'Carriageway', value: 'Dual 7.5m (4-Lane)' },
      { label: 'Asphalt Grade', value: 'VG-30 Bitumen with Polymer Additive' },
      { label: 'Quality Rating', value: 'A+ (Quality Control Jalgaon)' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1000&q=80'
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80',
      label: 'Single-lane broken gravel transformed into 4-lane engineered asphalt'
    },
    completionCertNumber: 'EE/PWD/JAL/TC-2024/098',
    featured: true
  },
  {
    id: 'bori-river-highlevel-bridge',
    title: 'High-Level Submersible RCC Bridge over Bori River at Amalner Bypass',
    marathiTitle: 'बोरी नदीवरील उच्चस्तरीय आरसीसी पूल, अमळनेर बायपास',
    category: 'bridges',
    department: 'PWD World Bank & National Highway Division, Maharashtra',
    client: 'Superintending Engineer, PWD Circle Nashik / Jalgaon',
    location: 'Bori River Crossing, Amalner Outer Bypass, Jalgaon District',
    tenderCost: '₹ 19.80 Cr',
    costNumeric: 19.80,
    completionYear: '2023',
    status: 'Completed',
    description: 'Construction of a 320-meter long reinforced cement concrete (RCC) girder bridge with 8 spans of 40 meters each, deep cast-in-situ bored pile foundations anchored in hard basalt rock, designed for 100-year flood levels.',
    scopeOfWork: [
      '8 Spans of 40m pre-stressed concrete (PSC) I-girders with RCC deck slab',
      '1200mm diameter bored cast-in-situ piles resting on sound basalt bed',
      'RCC crash barriers, expansion joints, and 1.5m pedestrian footpaths on both sides',
      '850m approach embankment with reinforced earth (RE) wall technology'
    ],
    keySpecs: [
      { label: 'Total Length', value: '320 Meters (8 Spans)' },
      { label: 'Foundation', value: 'Cast-in-situ Pile (M35 Grade)' },
      { label: 'Superstructure', value: 'Prestressed Concrete (M45 Grade)' },
      { label: 'Design Load', value: 'IRC Class 70R & Class A' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'SE/NH-PWD/NSK/CR-441/23',
    featured: true
  },
  {
    id: 'jal-jeevan-esr-wtp-amalner',
    title: '25 Lakh Litre Elevated Storage Reservoir (ESR) & Jackwell WTP Scheme',
    marathiTitle: '२५ लाख लिटर क्षमतेची पाण्याची टाकी व जलशुद्धीकरण प्रकल्प (जलजीवन मिशन)',
    category: 'water',
    department: 'Maharashtra Jeevan Pradhikaran (MJP) & Jal Jeevan Mission',
    client: 'Member Secretary, MJP Jalgaon Division / ZP Rural Water Supply',
    location: 'Rural Cluster Scheme Covering 14 Villages around Amalner',
    tenderCost: '₹ 16.20 Cr',
    costNumeric: 16.20,
    completionYear: '2024',
    status: 'Completed',
    description: 'Comprehensive rural drinking water project comprising a 25 Lakh Litre RCC staging water reservoir, intake well along Tapi-Bori confluence, rapid sand filtration WTP (8 MLD), and 42 km ductile iron distribution feeder lines.',
    scopeOfWork: [
      '24m staging RCC Elevated Storage Reservoir with staging column structural design',
      '8 MLD Water Treatment Plant with automatic chlorination and SCADA telemetry',
      '42.8 km ductile iron (DI K-7 & K-9) transmission mains laying with hydrostatic testing',
      'Over 4,800 functional household tap connections (FHTC) installed with brass meters'
    ],
    keySpecs: [
      { label: 'Storage Capacity', value: '25,00,000 Litres (25 LL)' },
      { label: 'Staging Height', value: '24.0 Meters RCC' },
      { label: 'WTP Capacity', value: '8.0 MLD Rapid Gravity' },
      { label: 'Beneficiary Population', value: '38,500+ Rural Citizens' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'MJP/JAL/JJM/WR-891/2024',
    featured: true
  },
  {
    id: 'amalner-tahsil-administrative-complex',
    title: 'Amalner Sub-Divisional Tahsil & Judicial Administrative Complex',
    marathiTitle: 'अमळनेर उपविभागीय महसूल व प्रशासकीय इमारत संकुल',
    category: 'buildings',
    department: 'Public Works Department (Building Division), Maharashtra',
    client: 'Executive Engineer, PWD Buildings Division, Jalgaon',
    location: 'Court Road, Opp. Nagar Palika, Amalner, Maharashtra',
    tenderCost: '₹ 22.10 Cr',
    costNumeric: 22.10,
    completionYear: '2022',
    status: 'Completed',
    description: 'Modern G+3 framed RCC government administrative headquarters housing the Sub-Divisional Magistrate (SDM) office, Tahsil courtrooms, record digital rooms, biometric civic counters, and green building rainwater harvesting systems.',
    scopeOfWork: [
      '68,000 sq.ft built-up RCC framed structure with seismic Zone-III earthquake design',
      'Granite and vitrified tile flooring with central VRF air-conditioned conference hall',
      'Fire-fighting hydrant network, 50kVA solar rooftop panel system, and disabled-friendly ramps',
      'Extensive perimeter compound wall with paver block parking for 200+ vehicles'
    ],
    keySpecs: [
      { label: 'Built-up Area', value: '68,000 Sq. Ft. (G+3)' },
      { label: 'Structural Concrete', value: 'M25 & M30 Ready-Mix' },
      { label: 'Solar Capacity', value: '50 kW Grid-Tied' },
      { label: 'Eco-Rating', value: 'GRIHA 3-Star Compliant' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'EE/BLDG/PWD/JAL/COMP-12/2022',
    featured: true
  },
  {
    id: 'bori-canal-irrigation-lining',
    title: 'Bori River Minor Irrigation Canal Concrete Lining & KT Weir Structures',
    marathiTitle: 'बोरी नदी उजवा कालवा काँक्रिटीकरण व कोल्हापूर पद्धतीचे बंधारे (केटी वेअर)',
    category: 'irrigation',
    department: 'Water Resources Department (WRD), Gov. of Maharashtra',
    client: 'Executive Engineer, Tapi Irrigation Development Corporation (TIDC), Jalgaon',
    location: 'Amalner & Parola Border Irrigated Basin, Maharashtra',
    tenderCost: '₹ 14.50 Cr',
    costNumeric: 14.50,
    completionYear: '2023',
    status: 'Completed',
    description: 'Cement concrete canal lining over 21.5 km of canal distributaries to eliminate seepage losses, along with construction of 3 Kolhapur Type (KT) Weirs on seasonal rivulets to elevate groundwater tables across 1,800 hectares of farm land.',
    scopeOfWork: [
      '21.5 km trapezoidal CC lining with 100mm M15 concrete & geotextile filter fabric',
      '3 Heavy-duty KT Weirs with steel drop gates and scour protection aprons',
      '18 Farmer outlet head-regulators and cross-drainage siphons',
      'Seepage prevention saving an estimated 32 million cubic feet of water annually'
    ],
    keySpecs: [
      { label: 'Canal Length', value: '21.50 Km' },
      { label: 'Irrigated Area', value: '1,850+ Hectares' },
      { label: 'Weir Structures', value: '3 Units with Needles' },
      { label: 'Seepage Reduction', value: '78% Efficiency Gain' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'TIDC/WRD/JAL/IRR-082/23',
    featured: false
  },
  {
    id: 'apmc-amalner-market-sheds',
    title: 'Amalner APMC Mega Agricultural Warehouse & Concrete Auction Platform',
    marathiTitle: 'कृषी उत्पन्न बाजार समिती अमळनेर – भव्य धान्य व कापूस शेड व सिमेंट काँक्रीट यार्ड',
    category: 'buildings',
    department: 'Maharashtra State Agricultural Marketing Board (MSAMB)',
    client: 'Secretary, Agriculture Produce Market Committee (APMC), Amalner',
    location: 'Dhule Road APMC Market Yard, Amalner, Maharashtra',
    tenderCost: '₹ 11.75 Cr',
    costNumeric: 11.75,
    completionYear: '2023',
    status: 'Completed',
    description: 'Construction of a 45,000 sq.ft clear-span pre-engineered structural steel storage warehouse with 150mm thick M30 grade tremix vacuum dewatered concrete flooring engineered for 40-tonne cotton and grain carrier trucks.',
    scopeOfWork: [
      'Pre-Engineered Building (PEB) structural shed with 36m clear span without center columns',
      '14,000 sq.m heavy-duty VDF (Vacuum Dewatered Concrete) tremix pavement yard',
      '60-Tonne digital weighbridge pit and RCC administrative weighing office',
      'Underground stormwater collection drain network with silt traps'
    ],
    keySpecs: [
      { label: 'Storage Area', value: '45,000 Sq. Ft.' },
      { label: 'Concrete Yard', value: '14,000 Sq. Meters Tremix' },
      { label: 'Clear Span', value: '36.0 Meters PEB' },
      { label: 'Weighbridge', value: '60 Ton Pitless Electronic' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'MSAMB/APMC/AMAL/2023/184',
    featured: false
  },
  {
    id: 'amalner-city-underground-stormwater',
    title: 'Amalner Municipal City Stormwater Drainage & RCC Box Culverts Network',
    marathiTitle: 'अमळनेर शहर भूमिगत पावसाळी गटार योजना व आरसीसी बॉक्स कल्व्हर्ट',
    category: 'water',
    department: 'Amalner Municipal Council (अमळनेर नगर परिषद) / Mah Urban Dept',
    client: 'Chief Officer, Amalner Municipal Council, Dist. Jalgaon',
    location: 'Station Road to Court Chowk & Subhash Road, Amalner, Maharashtra',
    tenderCost: '₹ 8.90 Cr',
    costNumeric: 8.90,
    completionYear: '2024',
    status: 'Completed',
    description: 'Comprehensive flood mitigation scheme constructing 7.2 km of RCC precast and cast-in-situ covered box drains along major arterial roads of Amalner town, preventing monsoon waterlogging at key market squares.',
    scopeOfWork: [
      '7.2 km RCC box drains (1.2m x 1.5m) with heavy-duty ductile iron grating covers',
      'Replacement of 6 distressed masonry culverts with high-strength RCC single-cell box culverts',
      'Reinstatement of asphalt road surfaces with 40mm semi-dense bituminous concrete (SDBC)',
      'Constructed during off-peak night shifts to minimize traffic disruption in busy Amalner bazaars'
    ],
    keySpecs: [
      { label: 'Drainage Length', value: '7.20 Km' },
      { label: 'Box Culverts', value: '6 Upgraded Units' },
      { label: 'Concrete Grade', value: 'M30 Sulphate Resistant' },
      { label: 'Manhole Covers', value: 'Heavy Duty Class D400' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'AMC/ENGG/SAN/2024/76',
    featured: false
  },
  {
    id: 'pmgsy-rural-roads-amalner-taluka',
    title: 'PMGSY Rural Road Connectivity Package: 5 Agri-Corridor Roads in Amalner',
    marathiTitle: 'पंतप्रधान ग्रामसडक योजना (PMGSY) – अमळनेर तालुक्यातील ५ ग्रामीण रस्ते',
    category: 'roads',
    department: 'Maharashtra Rural Road Development Association (MRRDA / PMGSY)',
    client: 'Executive Engineer, PMGSY PIU Jalgaon',
    location: 'Dharangaon-Amalner Border Villages (Shirud, Jalkhed, Piloda Links)',
    tenderCost: '₹ 13.60 Cr',
    costNumeric: 13.60,
    completionYear: '2025',
    status: 'Ongoing',
    description: 'All-weather blacktopped road network bringing year-round connectivity to interior agricultural villages in Amalner taluka, complete with 5-year post-construction maintenance guarantee.',
    scopeOfWork: [
      '18.6 km of rural road formation, GSB, WMM, and 20mm Premix Carpet with seal coat',
      'Construction of 18 Hume pipe culverts and 2 RCC slab culverts over seasonal nullahs',
      'Comprehensive slope stabilization and tree plantation of 1,200 native trees',
      'Currently at 82% physical progress, ahead of scheduled contractual milestones'
    ],
    keySpecs: [
      { label: 'Total Package', value: '18.60 Km Across 5 Links' },
      { label: 'Design Speed', value: '40–50 Km/h IRC:SP:20' },
      { label: 'Physical Progress', value: '82% Completed' },
      { label: 'Target Handover', value: 'November 2025' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80'
    ],
    completionCertNumber: 'MRRDA/PMGSY/JAL/PKG-09/ONGOING',
    featured: false
  }
];
