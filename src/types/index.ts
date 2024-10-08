export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  requirements: string[];
  type: JobType;
  postedDate: string;
  applicationUrl: string;
  companyLogo: string;
  companyDescription: string;
  benefits: string[];
  culture: string;
}

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';

export interface JobFilterOptions {
  search: string;
  location: string;
  type: JobType | '';
  minSalary: number;
  maxSalary: number;
  sortBy: 'date' | 'salary';
  sortOrder: 'asc' | 'desc';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  profile?: UserProfile;
}

export interface UserProfile {
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  experience: WorkExperience[];
  education: Education[];
  resume?: {
    url: string;
    name: string;
  };
}

export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}