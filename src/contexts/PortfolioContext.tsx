import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PortfolioData, AdminState } from '../types';

interface PortfolioContextType {
  data: PortfolioData;
  admin: AdminState;
  updatePersonalInfo: (info: Partial<PortfolioData['personalInfo']>) => void;
  addProject: (project: Omit<PortfolioData['projects'][0], 'id'>) => void;
  updateProject: (id: string, project: Partial<PortfolioData['projects'][0]>) => void;
  deleteProject: (id: string) => void;
  addSkill: (skill: Omit<PortfolioData['skills'][0], 'id'>) => void;
  updateSkill: (id: string, skill: Partial<PortfolioData['skills'][0]>) => void;
  deleteSkill: (id: string) => void;
  addExperience: (experience: Omit<PortfolioData['experience'][0], 'id'>) => void;
  updateExperience: (id: string, experience: Partial<PortfolioData['experience'][0]>) => void;
  deleteExperience: (id: string) => void;
  toggleEditMode: () => void;
  login: () => void;
  logout: () => void;
  exportToJSON: () => void;
  importFromJSON: (data: PortfolioData) => void;
}

const defaultData: PortfolioData = {
  personalInfo: {
    name: "Humayun Ahmed",
    title: "VoIP & WebRTC Engineer",
    email: "humayun.ahmed917280@gmail.com",
    phone: "+880 1789 896378",
    location: "Adabor, Dhaka 1207, Bangladesh",
    company: "Telcobright Limited",
    bio: "I'm a VoIP and telecom engineer with 3+ years building and debugging the systems that carry real phone calls. At Telcobright I work on carrier-grade softswitch software: FreeSWITCH with ESL control planes in Java and Spring Boot, WebRTC calling through Janus and SIP.js, SIP trunking, and TURN over TLS for networks that block VoIP media. I diagnose faults from SIP traces and packet captures rather than guesswork - one-way audio, dropped calls, registration failures. Alongside the telecom work I build the full stack around it in ReactJS, Node.js and MySQL/PostgreSQL, and deploy with Docker, Nginx and GitHub Actions. ICPC participant, and happiest in R&D - prototyping fast and turning ideas into working systems."
    profileImage: "",
    linkedinUrl: "https://linkedin.com/in/humayun-ahmed775",
    githubUrl: "https://github.com/humayun2000444"
  },
  skills: [
    { id: "12", name: "FreeSWITCH", category: "VoIP", level: 95 },
    { id: "13", name: "WebRTC", category: "VoIP", level: 85 },
    { id: "14", name: "Janus", category: "VoIP", level: 80 },
    { id: "19", name: "SIP", category: "VoIP", level: 88 },
    { id: "20", name: "Asterisk / FusionPBX", category: "VoIP", level: 80 },
    { id: "6", name: "Java", category: "Backend", level: 88 },
    { id: "7", name: "Spring Boot", category: "Backend", level: 85 },
    { id: "5", name: "Node.js", category: "Backend", level: 85 },
    { id: "9", name: "C/C++", category: "Backend", level: 82 },
    { id: "8", name: "Python", category: "Backend", level: 75 },
    { id: "10", name: "MySQL", category: "Database", level: 95 },
    { id: "11", name: "PostgreSQL", category: "Database", level: 75 },
    { id: "1", name: "ReactJS", category: "Frontend", level: 90 },
    { id: "3", name: "TypeScript", category: "Frontend", level: 82 },
    { id: "2", name: "Next.js", category: "Frontend", level: 80 },
    { id: "4", name: "HTML/CSS", category: "Frontend", level: 90 },
    { id: "15", name: "Docker", category: "DevOps", level: 75 },
    { id: "18", name: "Nginx", category: "DevOps", level: 78 },
    { id: "17", name: "GitHub Actions", category: "DevOps", level: 75 },
    { id: "16", name: "LXD", category: "DevOps", level: 70 }
  ],
  projects: [
    {
      id: "1",
      title: "WebRTC Call Center",
      description: "Browser-based call centre built on FreeSWITCH: WebRTC softphone for agents, queue and agent-state management over ESL, and real-time call events pushed to the dashboard. No desk phones required.",
      technologies: ["WebRTC", "FreeSWITCH", "ESL", "ReactJS", "Socket.io"],
      githubUrl: "",
      image: "",
      featured: true
    },
    {
      id: "2",
      title: "FreeSWITCH & FusionPBX Deployment",
      description: "FreeSWITCH and FusionPBX installed and hardened on customer servers: SIP trunks connected and test-called, extensions, IVR and call queues configured, recording enabled, plus Fail2Ban and TLS/SRTP. Handover notes explain every setting.",
      technologies: ["FreeSWITCH", "FusionPBX", "SIP", "Linux", "Fail2Ban"],
      githubUrl: "https://github.com/humayun2000444/fusionpbx",
      image: "",
      featured: true
    },
    {
      id: "3",
      title: "Online Exam Proctoring",
      description: "Advanced online exam proctoring system with real-time monitoring, AI-powered cheating detection, and secure examination environment.",
      technologies: ["ReactJS", "WebRTC", "AI/ML", "Node.js"],
      githubUrl: "",
      image: "",
      featured: false
    },
    {
      id: "4",
      title: "Health - Open Source",
      description: "Open-source contribution to a health-related application with modern full-stack architecture.",
      technologies: ["Node.js", "TypeORM", "PostgreSQL", "React.js"],
      githubUrl: "https://github.com/humayun2000444",
      image: "",
      featured: false
    }
  ],
  experience: [
    {
      id: "1",
      company: "Telcobright Limited",
      position: "Software Engineer",
      startDate: "Jul 2023",
      description: "Working on VoIP solutions, WebRTC applications, FreeSWITCH softswitch systems, and enterprise software development. Technologies: Java, FreeSWITCH, WebRTC, Spring Boot, PostgreSQL, MySQL.",
      isCurrentRole: true
    },
    {
      id: "2",
      company: "Netron Solutions",
      position: "Software Engineer",
      startDate: "Oct 2024",
      endDate: "Jan 2025",
      description: "Developed engineering solutions and worked on Janus WebRTC Gateway integration for real-time communication systems. Remote position based in United Arab Emirates.",
      isCurrentRole: false
    },
    {
      id: "3",
      company: "City IT",
      position: "Web Designer & Front End Developer",
      startDate: "Feb 2021",
      endDate: "Jul 2023",
      description: "Specialized in web design and front-end development using HTML, CSS, JavaScript, ReactJS, and responsive design principles. Remote position in Dhaka, Bangladesh.",
      isCurrentRole: false
    }
  ],
  education: [
    {
      id: "1",
      institution: "Daffodil Institute of IT (National University)",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      startDate: "2019",
      endDate: "2023",
      cgpa: 3.20
    },
    {
      id: "2",
      institution: "Dr. Abdur Razzak Municipal College, Jashore",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      startDate: "2016",
      endDate: "2018",
      cgpa: 3.5
    },
    {
      id: "3",
      institution: "Jashore Zilla School, Jashore",
      degree: "Secondary School Certificate (SSC)",
      field: "Science",
      startDate: "2014",
      endDate: "2016",
      cgpa: 5.0
    }
  ],
  achievements: [
    {
      id: "1",
      title: "ICPC Asia Dhaka Regional 2021",
      description: "623rd position at ICPC Asia Dhaka Regional 2021 Online Preliminary Contest",
      year: "2021"
    },
    {
      id: "2",
      title: "DIIT Annual Excursion Programming Contest",
      description: "3rd position at DIIT Annual Excursion Programming Contest (Beginner) 2021",
      year: "2021"
    },
    {
      id: "3",
      title: "DIIT IT Fest 4.0",
      description: "6th position at DIIT IT Fest 4.0 Programming Contest 2021",
      year: "2021"
    },
    {
      id: "4",
      title: "ICPC Dhaka Regional 2020",
      description: "672nd position at ICPC Dhaka Regional 2020 Online Preliminary Contest",
      year: "2020"
    },
    {
      id: "5",
      title: "DIIT CODEJEM 2020",
      description: "3rd position at DIIT CODEJEM 2020",
      year: "2020"
    }
  ],
  problemSolvingProfiles: [
    {
      platform: "Codeforces",
      username: "humayun200044",
      url: "https://codeforces.com/profile/humayun200044"
    },
    {
      platform: "HackerRank",
      username: "humayun2005005",
      url: "https://www.hackerrank.com/humayun2005005"
    },
    {
      platform: "Beecrowd",
      username: "humayun200044",
      url: "https://www.beecrowd.com.br/judge/en/profile/humayun200044"
    }
  ],
  certifications: [
    {
      id: "1",
      title: "Trainer - Signal Transport (SIGTRAN) over secure IPSec Network and Operations & Maintenance of SMSC, VHLR, VMSC and Bulk SMS Platform (10 Days)",
      institution: "Telcobright Limited",
      location: "Dhaka, Bangladesh",
      startDate: "Jan 2026",
      endDate: "Jan 2026",
      image: "/assets/certifications/sigtran.jpg"
    },
    {
      id: "2",
      title: "Trainer - Hardware Equipment & Software Platform of SBC and Digital Service Platform for BTCL (5 Days)",
      institution: "Telcobright Limited",
      location: "Dhaka, Bangladesh",
      startDate: "Feb 2026",
      endDate: "Feb 2026",
      image: "/assets/certifications/sbc.jpg"
    },
    {
      id: "3",
      title: "Explore Robotics with Embedded Systems",
      institution: "Daffodil Institute of IT (DIIT) - RCDC",
      location: "Dhaka, Bangladesh",
      startDate: "Sep 2024",
      endDate: "Sep 2024",
      image: "/assets/certifications/robotics.jpg"
    },
    {
      id: "4",
      title: "Responsive and Interactive Web Development from Scratch",
      institution: "Daffodil Institute of IT (DIIT) - RCDC",
      location: "Dhaka, Bangladesh",
      startDate: "Jul 2024",
      endDate: "Sep 2024",
      image: "/assets/certifications/web-development.jpg"
    },
    {
      id: "5",
      title: "Unlock your Computer Networking Career with CCNA Basics",
      institution: "Daffodil Institute of IT (DIIT) - RCDC",
      location: "Dhaka, Bangladesh",
      startDate: "Jul 2024",
      endDate: "Sep 2024",
      image: "/assets/certifications/ccna.jpg"
    },
    {
      id: "6",
      title: "Hackathon Participation - CSE Fest 2K24",
      institution: "Tejgaon College",
      location: "Dhaka, Bangladesh",
      startDate: "Dec 2024",
      endDate: "Dec 2024",
      image: "/assets/certifications/hackathon.jpg"
    },
    {
      id: "7",
      title: "Professional Outsourcing Training - Graphic Design",
      institution: "Learning and Earning Development Project (LEDP) - ICT Division",
      location: "Dhaka, Bangladesh",
      startDate: "2020",
      endDate: "2020",
      image: "/assets/certifications/graphic-design-ledp.jpg"
    }
  ]
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [admin, setAdmin] = useState<AdminState>({
    isAuthenticated: false,
    isEditMode: false
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updatePersonalInfo = (info: Partial<PortfolioData['personalInfo']>) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info }
    }));
  };

  const addProject = (project: Omit<PortfolioData['projects'][0], 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id: string, project: Partial<PortfolioData['projects'][0]>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...project } : p)
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addSkill = (skill: Omit<PortfolioData['skills'][0], 'id'>) => {
    const newSkill = { ...skill, id: Date.now().toString() };
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const updateSkill = (id: string, skill: Partial<PortfolioData['skills'][0]>) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, ...skill } : s)
    }));
  };

  const deleteSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  const addExperience = (experience: Omit<PortfolioData['experience'][0], 'id'>) => {
    const newExperience = { ...experience, id: Date.now().toString() };
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  const updateExperience = (id: string, experience: Partial<PortfolioData['experience'][0]>) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(e => e.id === id ? { ...e, ...experience } : e)
    }));
  };

  const deleteExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(e => e.id !== id)
    }));
  };

  const toggleEditMode = () => {
    setAdmin(prev => ({ ...prev, isEditMode: !prev.isEditMode }));
  };

  const login = () => {
    setAdmin({ isAuthenticated: true, isEditMode: false });
  };

  const logout = () => {
    setAdmin({ isAuthenticated: false, isEditMode: false });
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importFromJSON = (newData: PortfolioData) => {
    setData(newData);
  };

  return (
    <PortfolioContext.Provider value={{
      data,
      admin,
      updatePersonalInfo,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      updateSkill,
      deleteSkill,
      addExperience,
      updateExperience,
      deleteExperience,
      toggleEditMode,
      login,
      logout,
      exportToJSON,
      importFromJSON
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};