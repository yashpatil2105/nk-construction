export type ProjectCategory = 'all' | 'roads' | 'bridges' | 'water' | 'buildings' | 'irrigation';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  marathiTitle?: string;
  category: 'roads' | 'bridges' | 'water' | 'buildings' | 'irrigation';
  department: string; // e.g. PWD Maharashtra, MJP, Amalner Municipal Council, ZP Jalgaon
  client: string;
  location: string;
  tenderCost: string; // e.g. "₹ 14.85 Cr"
  costNumeric: number; // for sorting / filtering
  completionYear: string;
  status: 'Completed' | 'Ongoing';
  description: string;
  scopeOfWork: string[];
  keySpecs: ProjectSpec[];
  imageUrl: string;
  galleryImages: string[];
  beforeAfter?: {
    before: string;
    after: string;
    label: string;
  };
  completionCertNumber: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  marathiTitle?: string;
  issuingAuthority: string;
  shortAuthority: string;
  registrationNumber: string;
  validTill: string;
  category: 'Government Registration' | 'Professional License' | 'Quality & Safety' | 'Statutory Compliance';
  description: string;
  status: 'Active & Verified' | 'Permanent Registered';
  sealBadge: string;
  highlights: string[];
  verificationDetails: {
    portalName: string;
    workLimit: string;
    classGrade: string;
    dateOfIssue: string;
  };
}

export interface MachineryItem {
  id: string;
  name: string;
  model: string;
  count: number;
  capacity: string;
  category: 'Earthmoving' | 'Road & Paving' | 'Concreting' | 'Testing & Survey';
  status: 'Owned & Operational';
  specs: string;
}

export interface OfficeContact {
  firmName: string;
  proprietor: string;
  qualification: string;
  classGrade: string;
  regNumber: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  taluka: string;
  district: string;
  state: string;
  pincode: string;
  phones: string[];
  mobiles: string[];
  whatsapp: string;
  emails: string[];
  timing: string;
  days: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapEmbedUrl: string;
  googleMapDirectUrl: string;
}

export interface TenderInquiry {
  fullName: string;
  organization: string;
  inquiryType: 'Government Tender BOQ' | 'Joint Venture / Subcontract' | 'Site Inspection' | 'Civil Consultancy';
  phone: string;
  email: string;
  location: string;
  message: string;
  estimatedBudget?: string;
}
