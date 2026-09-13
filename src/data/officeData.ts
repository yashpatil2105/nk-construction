import { OfficeContact, MachineryItem } from '../types';

export const OFFICE_DATA: OfficeContact = {
  firmName: 'NK Construction',
  proprietor: 'Er. Nilesh R. Patil',
  qualification: 'B.E. (Civil), M.I.E., Chartered Engineer (India)',
  classGrade: 'Class 1-A Government Registered Contractor (PWD Maharashtra)',
  regNumber: 'PWD/MH/JAL/CLASS-1A/042',
  addressLine1: 'Patil Chambers, 1st & 2nd Floor, Station Road',
  addressLine2: 'Opposite PWD Sub-Divisional Office & Guest House, Near Court Chowk',
  landmark: '5 Minutes walk from Amalner Railway Station & Near Pratap College Chowk',
  city: 'Amalner',
  taluka: 'Amalner Taluka',
  district: 'Jalgaon District (खान्देश / Khandesh Region)',
  state: 'Maharashtra',
  pincode: '425401',
  phones: ['+91 88477 06600', '+91 (02587) 222344'],
  mobiles: ['+91 88477 06600', '+91 8847706600'],
  whatsapp: '+918847706600',
  emails: ['contact@nkconstruction-amalner.com', 'er.nileshpatil@gmail.com'],
  timing: '09:30 AM to 08:30 PM (IST)',
  days: 'Monday through Saturday (Sunday by Prior Appointment for Tender Scrutiny)',
  coordinates: {
    lat: 21.0454,
    lng: 75.0594
  },
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.32688320496!2d75.0485984478148!3d21.045391295240974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd92a9cb256b823%3A0xe543faee3bb3d752!2sAmalner%2C%20Maharashtra%20425401!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  googleMapDirectUrl: 'https://maps.google.com/?q=Amalner,+Jalgaon,+Maharashtra+425401'
};

export const REGIONAL_DISTANCES = [
  { destination: 'Dhule City / NH-52 Hub', distance: '35 km', travelTime: '45 mins', route: 'Amalner-Dhule Road' },
  { destination: 'Jalgaon District Headquarters', distance: '58 km', travelTime: '1 hr 10 mins', route: 'Via Dharangaon State Highway' },
  { destination: 'Chopda & Tapi River Belt', distance: '34 km', travelTime: '40 mins', route: 'Via Amalner-Chopda SH-19' },
  { destination: 'Parola (Mumbai-Nagpur NH-53)', distance: '24 km', travelTime: '30 mins', route: 'Amalner-Parola MDR' },
  { destination: 'Chalisgaon Junction', distance: '62 km', travelTime: '1 hr 15 mins', route: 'Via Nagardeola' },
  { destination: 'Nashik PWD Regional Circle', distance: '175 km', travelTime: '3 hrs 30 mins', route: 'Via Dhule - NH 60' }
];

export const MACHINERY_DATA: MachineryItem[] = [
  {
    id: 'batch-mix-plant',
    name: 'Asphalt Batch Mix Plant (Hot Mix Plant)',
    model: 'Apollo Counterflow Eco-Mix 120 TPH',
    count: 2,
    capacity: '120 Tonnes / Hour with SCADA',
    category: 'Road & Paving',
    status: 'Owned & Operational',
    specs: 'Microprocessor controlled 4-bin cold aggregate feeder with pollution control bag-house filter for VG-30 & PMB asphalt.'
  },
  {
    id: 'sensor-paver',
    name: 'Electronic Sensor Hydrostatic Paver Finisher',
    model: 'Vögele Super 1800-3 / Apollo AP 550',
    count: 2,
    capacity: 'Up to 9.0 Meter Paving Width',
    category: 'Road & Paving',
    status: 'Owned & Operational',
    specs: 'Dual-grade automatic electronic sensor leveling for precision asphalt finish compliant with MoRTH 5th revision standards.'
  },
  {
    id: 'vibratory-rollers',
    name: 'Tandem & Soil Vibratory Compactor Rollers',
    model: 'Hamm 311D & CASE 1107 EX-D (11 Tonnes)',
    count: 5,
    capacity: '11 to 12 Tonnes Operating Weight',
    category: 'Road & Paving',
    status: 'Owned & Operational',
    specs: 'High dynamic compaction amplitude for GSB, WMM sub-base and pneumatic tire rollers for bituminous finishing.'
  },
  {
    id: 'excavator-fleet',
    name: 'Heavy Hydraulic Excavators & Backhoe Loaders',
    model: 'Tata Hitachi EX 200 LC & JCB 3DX Super 4WD',
    count: 6,
    capacity: '0.9 m³ to 1.2 m³ Bucket Capacity',
    category: 'Earthmoving',
    status: 'Owned & Operational',
    specs: 'Equipped with heavy rock-breaker attachments for hard Khandesh basalt trenching, canal cuts, and foundation excavation.'
  },
  {
    id: 'concrete-batching',
    name: 'Computerized Concrete Batching Plant & RMC Fleet',
    model: 'Schwing Stetter CP 30 & Ajax Fiori Transit Mixers',
    count: 4,
    capacity: '30 m³ / Hour Output + 6m³ Mixers',
    category: 'Concreting',
    status: 'Owned & Operational',
    specs: 'Automated digital weighing for M25, M30, M35, and M45 bridge and ESR high-grade concrete with chilled water setup.'
  },
  {
    id: 'survey-testing-lab',
    name: 'DGPS, Leica Total Station & NABL Field QC Lab',
    model: 'Leica TS07 Total Station + Cube Testing Rig (2000 kN)',
    count: 3,
    capacity: 'Sub-centimeter Topo Survey + ASTM/IS Test',
    category: 'Testing & Survey',
    status: 'Owned & Operational',
    specs: 'In-house mobile laboratory equipped for core cutting, aggregate impact test, bitumen extraction, and 28-day concrete cube testing.'
  }
];

export const CONTRACTOR_STATS = [
  { value: '22+', label: 'Years of Engineering Practice', subtext: 'Established 2002 in Amalner' },
  { value: '₹ 185+ Cr', label: 'Government Works Executed', subtext: 'Across Jalgaon, Dhule & Nashik' },
  { value: '74+', label: 'Completed Infrastructure Works', subtext: 'PWD, MJP, ZP & Irrigation' },
  { value: 'Class 1-A', label: 'Government Contractor Grade', subtext: 'Unlimited Bidding Capacity' },
  { value: '100%', label: 'Quality Audit Clearances', subtext: 'Third-party & Vigilance Passed' },
  { value: '45+ Units', label: 'Heavy Machinery & Plant Fleet', subtext: '100% In-house Owned Assets' }
];
