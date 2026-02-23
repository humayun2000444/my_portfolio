export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  bio: string;
  profileImage: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  isCurrentRole: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  cgpa?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements?: Achievement[];
  certifications?: Certification[];
  problemSolvingProfiles?: { platform: string; username: string; url: string }[];
}

export interface AdminState {
  isAuthenticated: boolean;
  isEditMode: boolean;
}