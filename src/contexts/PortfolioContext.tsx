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
    title: "Software Engineer",
    email: "humayun@example.com",
    phone: "+880-XXX-XXXX",
    location: "Dhaka, Bangladesh",
    company: "Telcobright Limited",
    bio: "I'm a Software Engineer with 3+ years of hands-on experience building full-stack applications using Java, Spring Boot, and ReactJS. I specialize in real-time communication systems, with expertise in WebRTC, Janus, and FreeSWITCH for VoIP solutions. I have a strong foundation in data structures and algorithms (ICPC participant) and enjoy debugging complex systems. I'm experienced with DevOps tools like Docker, GitHub Actions, and Nginx. I thrive in R&D environments—prototyping ideas quickly, experimenting with new technologies, and turning concepts into working products.",
    profileImage: "",
    linkedinUrl: "https://linkedin.com/in/humayun-ahmed",
    githubUrl: "https://github.com/humayun2000444"
  },
  skills: [
    { id: "1", name: "ReactJS", category: "Frontend", level: 90 },
    { id: "2", name: "Next.js", category: "Frontend", level: 80 },
    { id: "3", name: "TypeScript", category: "Frontend", level: 82 },
    { id: "4", name: "HTML/CSS", category: "Frontend", level: 90 },
    { id: "5", name: "Node.js", category: "Backend", level: 85 },
    { id: "6", name: "Java", category: "Backend", level: 88 },
    { id: "7", name: "Spring Boot", category: "Backend", level: 85 },
    { id: "8", name: "Python", category: "Backend", level: 75 },
    { id: "9", name: "C/C++", category: "Backend", level: 82 },
    { id: "10", name: "MySQL", category: "Database", level: 95 },
    { id: "11", name: "PostgreSQL", category: "Database", level: 75 },
    { id: "12", name: "FreeSWITCH", category: "VoIP", level: 95 },
    { id: "13", name: "WebRTC", category: "VoIP", level: 85 },
    { id: "14", name: "Janus", category: "VoIP", level: 80 },
    { id: "15", name: "Docker", category: "DevOps", level: 75 },
    { id: "16", name: "LXD", category: "DevOps", level: 70 },
    { id: "17", name: "GitHub Actions", category: "DevOps", level: 75 },
    { id: "18", name: "Nginx", category: "DevOps", level: 78 }
  ],
  projects: [
    {
      id: "1",
      title: "Online Exam Proctoring",
      description: "Advanced online exam proctoring system with real-time monitoring, AI-powered cheating detection, and secure examination environment.",
      technologies: ["ReactJS", "WebRTC", "AI/ML", "Node.js"],
      githubUrl: "https://github.com/humayun2000444/online-exam-proctoring",
      image: "",
      featured: true
    },
    {
      id: "2",
      title: "WebRTC Call Center",
      description: "Complete WebRTC-based call center solution with queue management, agent dashboard, and real-time communication capabilities.",
      technologies: ["WebRTC", "FreeSWITCH", "ReactJS", "Socket.io"],
      githubUrl: "https://github.com/humayun2000444/WebRTC_Callcenter",
      image: "",
      featured: true
    },
    {
      id: "3",
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
      institution: "Daffodil Institute of IT",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      startDate: "2019",
      endDate: "2023",
      cgpa: 3.19
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