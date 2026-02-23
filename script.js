// Portfolio Data Management
let portfolioData = {
    personalInfo: {
        name: "Humayun Ahmed",
        title: "Software Engineer",
        email: "humayun.ahmed917280@gmail.com",
        phone: "01789896378",
        location: "Dhaka, Bangladesh",
        address: "House no 530, Road no 12, Adabor, Dhaka 1207",
        company: "Telcobright Limited",
        bio: "I'm a Software Engineer with 3+ years of hands-on experience building full-stack applications using Java, Spring Boot, and ReactJS. I specialize in real-time communication systems, with expertise in WebRTC, Janus, and FreeSWITCH for VoIP solutions. I have a strong foundation in data structures and algorithms (ICPC participant) and enjoy debugging complex systems. I'm experienced with DevOps tools like Docker, GitHub Actions, and Nginx. I thrive in R&D environments—prototyping ideas quickly, experimenting with new technologies, and turning concepts into working products.",
        profileImage: "assets/profile.jpg",
        linkedinUrl: "https://www.linkedin.com/in/humayun-ahmed775",
        githubUrl: "https://github.com/humayun2000444"
    },
    skills: [
        { id: "1", name: "ReactJS", category: "Frontend", level: 90 },
        { id: "2", name: "Next.js", category: "Frontend", level: 80 },
        { id: "3", name: "TypeScript", category: "Frontend", level: 82 },
        { id: "4", name: "JavaScript", category: "Frontend", level: 95 },
        { id: "5", name: "HTML/CSS", category: "Frontend", level: 90 },
        { id: "6", name: "Java", category: "Backend", level: 88 },
        { id: "7", name: "Spring Boot", category: "Backend", level: 85 },
        { id: "8", name: "Node.js", category: "Backend", level: 85 },
        { id: "9", name: "Python", category: "Backend", level: 75 },
        { id: "10", name: "C/C++", category: "Backend", level: 82 },
        { id: "11", name: "MySQL", category: "Database", level: 95 },
        { id: "12", name: "PostgreSQL", category: "Database", level: 75 },
        { id: "13", name: "FreeSWITCH", category: "VoIP", level: 95 },
        { id: "14", name: "WebRTC", category: "VoIP", level: 85 },
        { id: "15", name: "Janus", category: "VoIP", level: 80 },
        { id: "16", name: "Docker", category: "DevOps", level: 75 },
        { id: "17", name: "LXD", category: "DevOps", level: 70 },
        { id: "18", name: "GitHub Actions", category: "DevOps", level: 75 },
        { id: "19", name: "Nginx", category: "DevOps", level: 78 }
    ],
    projects: [
        {
            id: "1",
            title: "Softswitch VoIP Calling System",
            description: "Enterprise-grade Softswitch VoIP calling system built with FreeSWITCH ESL and Spring Boot for telecommunication operators. Features include intelligent call routing with least-cost routing (LCR), real-time billing engine with prepaid/postpaid support, call detail records (CDR) management, SIP trunk management, concurrent call handling, call quality monitoring (QoS), automated failover and load balancing, WebRTC gateway integration, REST API for system integration, real-time call analytics dashboard, and comprehensive monitoring tools. Handles high-volume call traffic with PostgreSQL database for robust data management.",
            technologies: ["FreeSWITCH", "ESL (Event Socket Layer)", "Spring Boot", "Java", "VoIP", "SIP Protocol", "WebRTC", "PostgreSQL", "REST API", "CDR Management"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "2",
            title: "Hosted PBX System",
            description: "Cloud-based Private Branch Exchange (PBX) system providing advanced telephony features for businesses. Includes call routing, IVR (Interactive Voice Response), call recording, voicemail, conference calling, call analytics, and real-time monitoring. Built with FreeSWITCH for reliability and scalability, enabling businesses to manage their phone systems efficiently with features like extension management, call forwarding, time-based routing, and multi-tenant support.",
            technologies: ["FreeSWITCH", "Asterisk", "Spring Boot", "ReactJS", "WebRTC", "PostgreSQL", "Redis", "REST API"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "3",
            title: "Online Exam Proctoring System",
            description: "Comprehensive AI-powered online exam proctoring system with YOLOv8n object detection and MediaPipe facial recognition. Features include real-time monitoring with dual camera support (desktop + mobile), WebRTC live streaming, Socket.IO communication, multi-role authentication (Student/Teacher/Admin), instant violation alerts, gaze direction analysis, multiple person detection, prohibited device detection (phones, laptops, tablets), window focus monitoring, and comprehensive activity logging. Modern light-themed UI built with React and Tailwind CSS, Flask Python backend with MySQL database, JWT authentication, and role-based access control.",
            technologies: ["React.js", "Flask", "Python", "MySQL", "YOLOv8n", "MediaPipe", "WebRTC", "Socket.IO", "Tailwind CSS", "JWT", "AI/ML"],
            githubUrl: "https://github.com/humayun2000444/online-exam-proctoring",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "4",
            title: "WebRTC Call Center",
            description: "Complete WebRTC-based call center solution with queue management, agent dashboard, and real-time communication capabilities for modern customer service.",
            technologies: ["WebRTC", "FreeSWITCH", "ReactJS", "Socket.io"],
            githubUrl: "https://github.com/humayun2000444/WebRTC_Callcenter",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "5",
            title: "NetronSolution WebRTC",
            description: "Enterprise-grade WebRTC communication solution with advanced features for video conferencing, screen sharing, and real-time collaboration.",
            technologies: ["WebRTC", "Janus", "Java"],
            githubUrl: "https://github.com/humayun2000444/NetronSolution-WebRTC",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "6",
            title: "ClamMind",
            description: "Intelligent mind mapping and productivity application with collaborative features, designed to enhance team productivity and creative thinking processes.",
            technologies: ["ReactJS", "Spring Boot", "PostgreSQL"],
            githubUrl: "https://github.com/humayun2000444/ClamMind",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "7",
            title: "National Health Management System",
            description: "Comprehensive health management system for national healthcare services with patient records, appointment scheduling, and medical data analytics.",
            technologies: ["Spring Boot", "MySQL", "ReactJS"],
            githubUrl: "https://github.com/humayun2000444/National-Health-Management-System",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "8",
            title: "Weather Pro",
            description: "Comprehensive Android weather application providing real-time weather information, 24-hour and 10-day forecasts, weather alerts, and detailed metrics including UV index, humidity, wind speed, atmospheric pressure, and sunrise/sunset times. Features smart caching for offline availability, material design UI, and location services with automatic detection and manual city search.",
            technologies: ["Java", "Android SDK", "OkHttp", "Gson", "Material Design", "Google Play Services Location", "WeatherAPI"],
            githubUrl: "https://github.com/humayun2000444/WeatherApp",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "9",
            title: "MohoChat - Real-time Messaging App",
            description: "Modern, feature-rich Android real-time messaging application built with Firebase backend and Material Design 3. Features include smart contact sync, app user detection, SMS invites, instant messaging with read receipts, online status indicators, profile management with image upload, chat deletion, and message history. Redesigned with modern card-based UI, collapsing toolbar design, and unified theme consistency. Built with Firebase Realtime Database for real-time synchronization and Firebase Storage for image management.",
            technologies: ["Java", "Android SDK", "Firebase Realtime Database", "Firebase Auth", "Firebase Storage", "Material Design 3", "SMS Integration", "Contact Sync"],
            githubUrl: "https://github.com/humayun2000444/MohoChat",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "10",
            title: "Health - Open Source",
            description: "Open-source contribution to a health-related application with modern full-stack architecture.",
            technologies: ["Node.js", "TypeORM", "PostgreSQL", "React.js"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            featured: false
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
            image: "assets/certifications/sigtran.jpg"
        },
        {
            id: "2",
            title: "Trainer - Hardware Equipment & Software Platform of SBC and Digital Service Platform for BTCL (5 Days)",
            institution: "Telcobright Limited",
            location: "Dhaka, Bangladesh",
            startDate: "Feb 2026",
            endDate: "Feb 2026",
            image: "assets/certifications/sbc.jpg"
        },
        {
            id: "3",
            title: "Explore Robotics with Embedded Systems",
            institution: "Daffodil Institute of IT (DIIT) - RCDC",
            location: "Dhaka, Bangladesh",
            startDate: "Sep 2024",
            endDate: "Sep 2024",
            image: "assets/certifications/robotics.jpg"
        },
        {
            id: "4",
            title: "Responsive and Interactive Web Development from Scratch",
            institution: "Daffodil Institute of IT (DIIT) - RCDC",
            location: "Dhaka, Bangladesh",
            startDate: "Jul 2024",
            endDate: "Sep 2024",
            image: "assets/certifications/web-development.jpg"
        },
        {
            id: "5",
            title: "Unlock your Computer Networking Career with CCNA Basics",
            institution: "Daffodil Institute of IT (DIIT) - RCDC",
            location: "Dhaka, Bangladesh",
            startDate: "Jul 2024",
            endDate: "Sep 2024",
            image: "assets/certifications/ccna.jpg"
        },
        {
            id: "6",
            title: "Hackathon Participation - CSE Fest 2K24",
            institution: "Tejgaon College",
            location: "Dhaka, Bangladesh",
            startDate: "Dec 2024",
            endDate: "Dec 2024",
            image: "assets/certifications/hackathon.jpg"
        },
        {
            id: "7",
            title: "Professional Outsourcing Training - Graphic Design",
            institution: "Learning and Earning Development Project (LEDP) - ICT Division",
            location: "Dhaka, Bangladesh",
            startDate: "2020",
            endDate: "2020",
            image: "assets/certifications/graphic-design-ledp.jpg"
        }
    ],
    experience: [
        {
            id: "1",
            company: "Telcobright Limited",
            position: "Software Engineer",
            location: "Dhaka, Bangladesh · On-site",
            startDate: "Jul 2023",
            endDate: null,
            isCurrentRole: true,
            description: "Working on VoIP solutions, WebRTC applications, FreeSWITCH softswitch systems, and enterprise software development. Technologies: Java, FreeSWITCH, WebRTC, Spring Boot, PostgreSQL, MySQL."
        },
        {
            id: "2",
            company: "Netron Solutions",
            position: "Software Engineer",
            location: "United Arab Emirates · Remote",
            startDate: "Oct 2024",
            endDate: "Jan 2025",
            isCurrentRole: false,
            description: "Developed engineering solutions and worked on Janus WebRTC Gateway integration for real-time communication systems. Technologies: Engineering, Janus, WebRTC."
        },
        {
            id: "3",
            company: "City IT",
            position: "Web Designer & Front End Developer",
            location: "Dhaka, Bangladesh · Remote",
            startDate: "Feb 2021",
            endDate: "Jul 2023",
            isCurrentRole: false,
            description: "Specialized in web design and front-end development using HTML, CSS, JavaScript, ReactJS, and responsive design principles. Part-time role focusing on creating user-friendly web interfaces."
        }
    ],
    education: [
        {
            id: "1",
            institution: "Daffodil Institute of IT",
            degree: "Bachelor of Science (BSc)",
            field: "Computer Science & Engineering",
            result: "CGPA: 3.19 out of 4",
            startDate: "2019",
            endDate: "2023"
        },
        {
            id: "2",
            institution: "Dr. Abdur Razzak Municipal College, Jashore",
            degree: "Higher Secondary Certificate (HSC)",
            field: "Science",
            result: "CGPA: 3.5 out of 5",
            startDate: "2016",
            endDate: "2018"
        },
        {
            id: "3",
            institution: "Jashore Zilla School, Jashore",
            degree: "Secondary School Certificate (SSC)",
            field: "Science",
            result: "CGPA: 5 out of 5",
            startDate: "2014",
            endDate: "2016"
        }
    ]
};

// State Management
let isAdminMode = false;
let isEditMode = false;

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderPortfolio();
    initSmoothScroll();
    initCustomCursor();
    initCodeRain();
    initScrollProgress();
    initScrollReveal();
    initCounterAnimation();

    // Add animation delays for staggered effects
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Console Easter Egg
    console.log('%c👋 Hey Developer!', 'font-size: 24px; font-weight: bold; color: #4A9EE0;');
    console.log('%c💻 Like what you see? Let\'s connect!', 'font-size: 14px; color: #6CCF7F;');
    console.log('%c🔗 GitHub: https://github.com/humayun2000444', 'font-size: 12px; color: #8B949E;');
});

// ==================== CUSTOM CURSOR ====================
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');

    if (!cursor || !cursorDot) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Use event delegation for hover effect on all interactive elements (including dynamically added ones)
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button, .cursor-hover, input, textarea');
        if (target) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('a, button, .cursor-hover, input, textarea');
        if (target) {
            cursor.classList.remove('hover');
        }
    });
}

// ==================== CODE RAIN BACKGROUND ====================
function initCodeRain() {
    const codeRain = document.getElementById('code-rain');
    if (!codeRain) return;

    const codeChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>=+-*/&|!?;:';
    const columnCount = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'code-column';
        column.style.left = (i * 20) + 'px';
        column.style.animationDuration = (15 + Math.random() * 20) + 's';
        column.style.animationDelay = (Math.random() * 10) + 's';

        let text = '';
        const charCount = Math.floor(10 + Math.random() * 20);
        for (let j = 0; j < charCount; j++) {
            text += codeChars[Math.floor(Math.random() * codeChars.length)] + '<br>';
        }
        column.innerHTML = text;
        codeRain.appendChild(column);
    }
}

// ==================== SCROLL PROGRESS BAR ====================
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ==================== SCROLL REVEAL ANIMATIONS ====================
let scrollRevealObserver = null;

function initScrollReveal() {
    // Create observer only once
    if (!scrollRevealObserver) {
        scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
    }

    // Find all reveal elements that aren't already being observed (don't have 'active' class yet)
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    revealElements.forEach(el => scrollRevealObserver.observe(el));
}

// ==================== COUNTER ANIMATION ====================
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
        }
    }, 30);
}

// Load data from localStorage
function loadData() {
    try {
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            // Deep merge to preserve default structure while updating with saved data
            portfolioData = {
                ...portfolioData,
                ...parsed,
                personalInfo: { ...portfolioData.personalInfo, ...(parsed.personalInfo || {}) },
                skills: parsed.skills || portfolioData.skills,
                projects: parsed.projects || portfolioData.projects,
                experience: parsed.experience || portfolioData.experience,
                education: parsed.education || portfolioData.education,
                certifications: parsed.certifications || portfolioData.certifications,
                achievements: parsed.achievements || portfolioData.achievements,
                problemSolvingProfiles: parsed.problemSolvingProfiles || portfolioData.problemSolvingProfiles
            };
        }
        console.log('Portfolio data loaded:', portfolioData);
    } catch (error) {
        console.error('Error loading data from localStorage:', error);
        // Use default data if localStorage is corrupted
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// Render Portfolio Content
function renderPortfolio() {
    console.log('Rendering portfolio with data:', portfolioData);

    try { renderPersonalInfo(); console.log('✓ Personal info rendered'); } catch(e) { console.error('✗ Personal info error:', e); }
    try { renderSkills(); console.log('✓ Skills rendered'); } catch(e) { console.error('✗ Skills error:', e); }
    try { renderProjects(); console.log('✓ Projects rendered'); } catch(e) { console.error('✗ Projects error:', e); }
    try { renderExperience(); console.log('✓ Experience rendered'); } catch(e) { console.error('✗ Experience error:', e); }
    try { renderEducation(); console.log('✓ Education rendered'); } catch(e) { console.error('✗ Education error:', e); }
    try { renderCertifications(); console.log('✓ Certifications rendered'); } catch(e) { console.error('✗ Certifications error:', e); }
    try { renderAchievements(); console.log('✓ Achievements rendered'); } catch(e) { console.error('✗ Achievements error:', e); }
    try { renderProblemSolvingProfiles(); console.log('✓ Problem solving profiles rendered'); } catch(e) { console.error('✗ Problem solving profiles error:', e); }

    // Re-initialize scroll reveal for dynamically added elements
    initScrollReveal();
}

// Render Personal Information
function renderPersonalInfo() {
    const { personalInfo } = portfolioData;

    // Update all name references
    document.getElementById('nav-name').textContent = personalInfo.name;
    document.getElementById('hero-name').textContent = personalInfo.name;
    document.getElementById('footer-name').textContent = personalInfo.name;

    // Update hero section
    document.getElementById('hero-title').textContent = personalInfo.title;
    document.getElementById('hero-bio').textContent = personalInfo.bio;

    // Update about section
    document.getElementById('about-text').textContent = personalInfo.bio;
    document.getElementById('about-location').textContent = personalInfo.location;
    document.getElementById('about-company').textContent = personalInfo.company;

    // Update contact section
    document.getElementById('contact-email').textContent = personalInfo.email;
    document.getElementById('contact-email').href = `mailto:${personalInfo.email}`;
    document.getElementById('contact-phone').textContent = personalInfo.phone;
    document.getElementById('contact-location').textContent = personalInfo.location;

    // Update social links
    document.getElementById('github-link').href = personalInfo.githubUrl;
    document.getElementById('linkedin-link').href = personalInfo.linkedinUrl;
    document.getElementById('email-link').href = `mailto:${personalInfo.email}`;

    // Update profile image
    if (personalInfo.profileImage) {
        document.getElementById('profile-img').src = personalInfo.profileImage;
        document.getElementById('profile-img').classList.remove('hidden');
        document.getElementById('profile-placeholder').classList.add('hidden');
    } else {
        document.getElementById('profile-placeholder').textContent = personalInfo.name.charAt(0);
    }
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    const skillsByCategory = {};

    portfolioData.skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });

    container.innerHTML = '';

    const categoryIcons = {
        'Frontend': 'fa-laptop-code',
        'Backend': 'fa-server',
        'VoIP': 'fa-phone-volume',
        'Database': 'fa-database',
        'DevOps': 'fa-cloud',
        'Mobile': 'fa-mobile-alt'
    };

    const categoryColors = {
        'Frontend': '#4A9EE0',
        'Backend': '#6CCF7F',
        'VoIP': '#C099E8',
        'Database': '#E8935A',
        'DevOps': '#8FC7E8',
        'Mobile': '#E86B6B'
    };

    Object.entries(skillsByCategory).forEach(([category, skills], catIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'reveal mb-10';
        categoryDiv.style.animationDelay = `${catIndex * 0.1}s`;
        const color = categoryColors[category] || '#4A9EE0';
        const icon = categoryIcons[category] || 'fa-code';

        categoryDiv.innerHTML = `
            <div class="glass-effect rounded-xl p-6 border border-white/5" style="box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div class="flex items-center mb-6 pb-4 border-b border-white/10">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style="background: ${color}15;">
                        <i class="fas ${icon}" style="color: ${color};"></i>
                    </div>
                    <h3 class="text-xl font-semibold font-display text-white">${category}</h3>
                    <span class="ml-auto text-sm font-mono text-gray-500">${skills.length} skills</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${skills.map((skill, index) => `
                        <div class="skill-item group" style="animation-delay: ${index * 0.05}s">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">${skill.name}</span>
                                <span class="text-xs font-mono" style="color: ${color};">${skill.level}%</span>
                            </div>
                            <div class="h-2 rounded-full overflow-hidden" style="background: ${color}15;">
                                <div class="skill-bar h-full rounded-full transition-all duration-1000 ease-out"
                                     style="width: 0%; background: linear-gradient(90deg, ${color}90, ${color});"
                                     data-width="${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(categoryDiv);
    });

    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-bar');
                bars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width;
                    }, index * 50);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.glass-effect').forEach(el => observer.observe(el));
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    const allProjects = isEditMode ? portfolioData.projects : featuredProjects;

    container.innerHTML = '';

    allProjects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'reveal project-card';
        projectDiv.style.animationDelay = `${index * 0.1}s`;

        // Random accent color for variety - softer tones
        const accentColors = ['#4A9EE0', '#6CCF7F', '#C099E8', '#E8935A', '#E86B6B'];
        const accentColor = accentColors[index % accentColors.length];

        projectDiv.innerHTML = `
            <div class="glass-effect rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-[1.02]"
                 style="box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div class="relative h-48 overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}05);">
                    ${project.image ?
                        `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">` :
                        `<div class="w-full h-full flex items-center justify-center relative">
                            <div class="absolute inset-0 opacity-10">
                                <div class="font-mono text-xs text-white/30 p-4 leading-relaxed overflow-hidden h-full">
const ${project.title.replace(/[^a-zA-Z]/g, '').substring(0, 10)} = {
  tech: [${project.technologies.slice(0, 3).map(t => `"${t}"`).join(', ')}],
  status: "featured",
  type: "production"
};
                                </div>
                            </div>
                            <div class="text-center z-10">
                                <i class="fas fa-code text-4xl mb-3" style="color: ${accentColor};"></i>
                                <h4 class="text-lg font-bold font-display text-white/90">${project.title.substring(0, 20)}${project.title.length > 20 ? '...' : ''}</h4>
                            </div>
                        </div>`
                    }

                    ${isEditMode ? `
                        <div class="absolute top-3 right-3 flex space-x-2">
                            <button onclick="editProject('${project.id}')" class="glass-effect text-white p-2 rounded-lg hover:bg-white/20 transition-all">
                                <i class="fas fa-edit text-sm"></i>
                            </button>
                            <button onclick="deleteProject('${project.id}')" class="glass-effect text-red-400 p-2 rounded-lg hover:bg-red-500/20 transition-all">
                                <i class="fas fa-trash text-sm"></i>
                            </button>
                        </div>
                    ` : ''}

                    <div class="absolute top-3 left-3">
                        <span class="px-3 py-1 rounded-full text-xs font-mono font-medium"
                              style="background: ${accentColor}30; color: ${accentColor}; border: 1px solid ${accentColor}50;">
                            <i class="fas fa-star mr-1"></i>Featured
                        </span>
                    </div>

                    <div class="absolute bottom-3 right-3 flex space-x-2">
                        <a href="${project.githubUrl}" target="_blank"
                           class="glass-effect text-white p-2 rounded-lg hover:bg-white/20 transition-all group/btn cursor-hover">
                            <i class="fab fa-github text-lg group-hover/btn:scale-110 transition-transform"></i>
                        </a>
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank"
                               class="glass-effect text-white p-2 rounded-lg hover:bg-white/20 transition-all group/btn cursor-hover">
                                <i class="fas fa-external-link-alt text-lg group-hover/btn:scale-110 transition-transform"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>

                <div class="p-5" style="background: rgba(13, 17, 23, 0.8);">
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="text-xl font-bold font-display text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">${project.title}</h3>
                        <button onclick="toggleDescription('${project.id}')" class="text-gray-400 hover:text-white ml-2 flex-shrink-0 transition-colors cursor-hover">
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>

                    <div id="desc-${project.id}" class="hidden mb-4">
                        <p class="text-gray-400 text-sm leading-relaxed">${project.description}</p>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.slice(0, 4).map(tech =>
                            `<span class="px-2 py-1 rounded text-xs font-mono" style="background: ${accentColor}15; color: ${accentColor}; border: 1px solid ${accentColor}30;">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 4 ?
                            `<span class="text-gray-500 text-xs font-mono px-2 py-1">+${project.technologies.length - 4}</span>` : ''
                        }
                    </div>

                    <div class="flex items-center justify-between pt-3 border-t border-white/10">
                        <div class="flex space-x-4">
                            <a href="${project.githubUrl}" target="_blank" class="text-gray-400 hover:text-white transition-colors font-medium text-sm cursor-hover">
                                <i class="fab fa-github mr-1"></i>Code
                            </a>
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" class="text-gray-400 hover:text-green-400 transition-colors font-medium text-sm cursor-hover">
                                    <i class="fas fa-external-link-alt mr-1"></i>Live
                                </a>
                            ` : ''}
                        </div>
                        <button onclick="toggleTechStack('${project.id}')" class="text-xs font-mono transition-colors cursor-hover" style="color: ${accentColor};">
                            <i class="fas fa-layer-group mr-1"></i>Stack
                        </button>
                    </div>

                    <div id="tech-${project.id}" class="hidden mt-4 pt-4 border-t border-white/10">
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech =>
                                `<span class="px-2 py-1 rounded text-xs font-mono" style="background: ${accentColor}15; color: ${accentColor};">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(projectDiv);
    });
}

// Admin Functions
function toggleAdmin() {
    isAdminMode = !isAdminMode;
    const adminPanel = document.getElementById('admin-panel');
    const adminBtn = document.getElementById('admin-btn');

    if (isAdminMode) {
        adminPanel.classList.remove('hidden');
        adminBtn.textContent = 'Exit Admin';
        adminBtn.classList.add('text-blue-600');
    } else {
        adminPanel.classList.add('hidden');
        adminBtn.textContent = 'Admin';
        adminBtn.classList.remove('text-blue-600');
        isEditMode = false;
        updateEditModeUI();
    }
}

function toggleEditMode() {
    isEditMode = !isEditMode;
    updateEditModeUI();
    renderPortfolio();
}

function updateEditModeUI() {
    const editBtn = document.getElementById('edit-btn');
    const editText = document.getElementById('edit-text');
    const addSkillSection = document.getElementById('add-skill-section');
    const addProjectBtn = document.getElementById('add-project-btn');
    const profileContainer = document.getElementById('profile-img-container');
    const imgOverlay = document.getElementById('img-upload-overlay');

    if (isEditMode) {
        editBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        editBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        editText.textContent = 'Exit Edit';
        addSkillSection.classList.remove('hidden');
        addProjectBtn.classList.remove('hidden');

        // Enable profile image editing
        profileContainer.onclick = () => document.getElementById('profile-upload').click();
        profileContainer.onmouseenter = () => imgOverlay.classList.remove('hidden');
        profileContainer.onmouseleave = () => imgOverlay.classList.add('hidden');

        // Add edit button to hero section
        addEditProfileButton();
    } else {
        editBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        editBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        editText.textContent = 'Edit Mode';
        addSkillSection.classList.add('hidden');
        addProjectBtn.classList.add('hidden');

        // Disable profile image editing
        profileContainer.onclick = null;
        profileContainer.onmouseenter = null;
        profileContainer.onmouseleave = null;
        imgOverlay.classList.add('hidden');

        // Remove edit button from hero section
        removeEditProfileButton();
    }
}

function addEditProfileButton() {
    const heroSection = document.querySelector('#home .text-center');
    if (!document.getElementById('edit-profile-btn')) {
        const editBtn = document.createElement('button');
        editBtn.id = 'edit-profile-btn';
        editBtn.className = 'bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors mb-4';
        editBtn.innerHTML = '<i class="fas fa-edit mr-2"></i>Edit Profile';
        editBtn.onclick = () => openEditProfileModal();

        const ctaButtons = heroSection.querySelector('.flex.flex-col.md\\:flex-row');
        heroSection.insertBefore(editBtn, ctaButtons);
    }
}

function removeEditProfileButton() {
    const editBtn = document.getElementById('edit-profile-btn');
    if (editBtn) {
        editBtn.remove();
    }
}

// Edit Profile Modal
function openEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    const { personalInfo } = portfolioData;

    document.getElementById('edit-name').value = personalInfo.name;
    document.getElementById('edit-title').value = personalInfo.title;
    document.getElementById('edit-bio').value = personalInfo.bio;
    document.getElementById('edit-email').value = personalInfo.email;
    document.getElementById('edit-phone').value = personalInfo.phone;
    document.getElementById('edit-location').value = personalInfo.location;
    document.getElementById('edit-company').value = personalInfo.company;
    document.getElementById('edit-github').value = personalInfo.githubUrl;
    document.getElementById('edit-linkedin').value = personalInfo.linkedinUrl;

    modal.classList.remove('hidden');
}

function saveProfile() {
    portfolioData.personalInfo.name = document.getElementById('edit-name').value;
    portfolioData.personalInfo.title = document.getElementById('edit-title').value;
    portfolioData.personalInfo.bio = document.getElementById('edit-bio').value;
    portfolioData.personalInfo.email = document.getElementById('edit-email').value;
    portfolioData.personalInfo.phone = document.getElementById('edit-phone').value;
    portfolioData.personalInfo.location = document.getElementById('edit-location').value;
    portfolioData.personalInfo.company = document.getElementById('edit-company').value;
    portfolioData.personalInfo.githubUrl = document.getElementById('edit-github').value;
    portfolioData.personalInfo.linkedinUrl = document.getElementById('edit-linkedin').value;

    saveData();
    renderPersonalInfo();
    closeModal('edit-profile-modal');
    showMessage('Profile updated successfully!', 'success');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Image Upload
function uploadProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size must be less than 5MB');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            portfolioData.personalInfo.profileImage = e.target.result;
            saveData();
            renderPersonalInfo();
            showMessage('Profile image updated!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

// Skills Management
function addSkill() {
    const name = document.getElementById('new-skill-name').value.trim();
    const category = document.getElementById('new-skill-category').value.trim();
    const level = parseInt(document.getElementById('new-skill-level').value);

    if (name && category && level >= 0 && level <= 100) {
        const newSkill = {
            id: Date.now().toString(),
            name,
            category,
            level
        };

        portfolioData.skills.push(newSkill);
        saveData();
        renderSkills();

        // Clear form
        document.getElementById('new-skill-name').value = '';
        document.getElementById('new-skill-category').value = '';
        document.getElementById('new-skill-level').value = '';

        showMessage('Skill added successfully!', 'success');
    } else {
        alert('Please fill all fields correctly (level must be 0-100)');
    }
}

function deleteSkill(skillId) {
    if (confirm('Are you sure you want to delete this skill?')) {
        portfolioData.skills = portfolioData.skills.filter(skill => skill.id !== skillId);
        saveData();
        renderSkills();
        showMessage('Skill deleted!', 'success');
    }
}

// Projects Management
function toggleAddProject() {
    const section = document.getElementById('add-project-section');
    section.classList.toggle('hidden');
}

function addProject() {
    const title = document.getElementById('new-project-title').value.trim();
    const description = document.getElementById('new-project-description').value.trim();
    const githubUrl = document.getElementById('new-project-github').value.trim();
    const liveUrl = document.getElementById('new-project-live').value.trim();
    const technologies = document.getElementById('new-project-tech').value.split(',').map(t => t.trim()).filter(t => t);

    if (title && description && githubUrl && technologies.length > 0) {
        const newProject = {
            id: Date.now().toString(),
            title,
            description,
            technologies,
            githubUrl,
            liveUrl,
            image: '',
            featured: true
        };

        portfolioData.projects.push(newProject);
        saveData();
        renderProjects();

        // Clear form
        document.getElementById('new-project-title').value = '';
        document.getElementById('new-project-description').value = '';
        document.getElementById('new-project-github').value = '';
        document.getElementById('new-project-live').value = '';
        document.getElementById('new-project-tech').value = '';

        toggleAddProject();
        showMessage('Project added successfully!', 'success');
    } else {
        alert('Please fill all required fields');
    }
}

function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        portfolioData.projects = portfolioData.projects.filter(project => project.id !== projectId);
        saveData();
        renderProjects();
        showMessage('Project deleted!', 'success');
    }
}

// Data Management
function exportData() {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data.json';
    link.click();
    URL.revokeObjectURL(url);
    showMessage('Data exported successfully!', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                portfolioData = { ...portfolioData, ...importedData };
                saveData();
                renderPortfolio();
                showMessage('Data imported successfully!', 'success');
            } catch (error) {
                showMessage('Invalid file format!', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Resume Download (PDF)
function downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const { personalInfo, skills, projects, experience, education, achievements } = portfolioData;

    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.name} - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
        .name { font-size: 28px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
        .title { font-size: 18px; color: #6b7280; margin-bottom: 10px; }
        .contact { font-size: 14px; color: #6b7280; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 20px; font-weight: bold; color: #1e40af; margin-bottom: 15px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category h4 { font-size: 16px; color: #374151; margin-bottom: 8px; }
        .skill-item { font-size: 14px; margin-bottom: 4px; display: flex; justify-content: space-between; }
        .project-item { margin-bottom: 20px; }
        .item-title { font-size: 16px; font-weight: 600; color: #1f2937; }
        .item-description { font-size: 14px; margin-top: 8px; line-height: 1.6; }
        .tech-tag { background: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-right: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title}</div>
        <div class="contact">${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}</div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${personalInfo.bio}</p>
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            ${Object.entries(skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
            }, {})).map(([category, categorySkills]) => `
                <div>
                    <h4>${category}</h4>
                    ${categorySkills.map(skill => `
                        <div class="skill-item">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Featured Projects</div>
        ${projects.filter(p => p.featured).map(project => `
            <div class="project-item">
                <div class="item-title">${project.title}</div>
                <div class="item-description">${project.description}</div>
                <div style="margin-top: 8px;">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div style="margin-top: 8px; font-size: 14px; color: #6b7280;">
                    GitHub: ${project.githubUrl}
                </div>
            </div>
        `).join('')}
    </div>
</body>
</html>`;

    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.html`;
    link.click();
    URL.revokeObjectURL(url);
}

// Utility Functions
function showMessage(message, type) {
    const messageDiv = document.getElementById('admin-message');
    messageDiv.textContent = message;
    messageDiv.className = `mb-4 p-3 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
    messageDiv.classList.remove('hidden');

    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 3000);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function sendMessage(event) {
    event.preventDefault();
    alert('Thank you for your message! This is a demo - in a real implementation, this would send an email.');
    event.target.reset();
}

// Contact Form Submission using Web3Forms
async function sendContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('contact-submit-btn');
    const statusDiv = document.getElementById('form-status');
    const btnText = submitBtn.querySelector('span');
    const btnIcon = submitBtn.querySelector('i');

    // Get form data
    const formData = new FormData(form);

    // Show loading state
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin mr-2';
    submitBtn.disabled = true;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Success
            statusDiv.textContent = '$ Message sent successfully! I will get back to you soon.';
            statusDiv.className = 'text-center text-sm py-3 rounded-lg mt-4 font-mono';
            statusDiv.style.background = 'rgba(108, 207, 127, 0.15)';
            statusDiv.style.color = '#6CCF7F';
            statusDiv.style.border = '1px solid rgba(108, 207, 127, 0.3)';
            form.reset();

            // Reset button
            btnText.textContent = 'Message Sent!';
            btnIcon.className = 'fas fa-check mr-2';

            setTimeout(() => {
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane mr-2';
                submitBtn.disabled = false;
                statusDiv.className = 'hidden';
            }, 5000);
        } else {
            throw new Error(result.message || 'Something went wrong');
        }
    } catch (error) {
        // Error
        statusDiv.textContent = '$ Error: ' + (error.message || 'Failed to send message. Please try again.');
        statusDiv.className = 'text-center text-sm py-3 rounded-lg mt-4 font-mono';
        statusDiv.style.background = 'rgba(232, 107, 107, 0.15)';
        statusDiv.style.color = '#E86B6B';
        statusDiv.style.border = '1px solid rgba(232, 107, 107, 0.3)';

        // Reset button
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane mr-2';
        submitBtn.disabled = false;

        setTimeout(() => {
            statusDiv.className = 'hidden';
        }, 5000);
    }

    return false;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});


// Project Card Interactive Functions
function toggleDescription(projectId) {
    const desc = document.getElementById(`desc-${projectId}`);
    const icon = event.target.closest('button').querySelector('i');

    if (desc.classList.contains('hidden')) {
        desc.classList.remove('hidden');
        icon.className = 'fas fa-times-circle';
    } else {
        desc.classList.add('hidden');
        icon.className = 'fas fa-info-circle';
    }
}

function toggleTechStack(projectId) {
    const techStack = document.getElementById(`tech-${projectId}`);
    const button = event.target.closest('button');

    if (techStack.classList.contains('hidden')) {
        techStack.classList.remove('hidden');
        button.innerHTML = '<i class="fas fa-chevron-up mr-1"></i>Hide Tech';
    } else {
        techStack.classList.add('hidden');
        button.innerHTML = '<i class="fas fa-layer-group mr-1"></i>Tech Stack';
    }
}

// Navigation smooth scroll enhancement
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
}

// Render Achievements
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container || !portfolioData.achievements) return;

    container.innerHTML = portfolioData.achievements.map((achievement, index) => {
        // Check if ICPC achievement for special styling
        const isICPC = achievement.title.toLowerCase().includes('icpc');
        const color = isICPC ? '#E8935A' : '#6CCF7F';

        return `
        <div class="glass-effect rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 group reveal"
             style="animation-delay: ${index * 0.1}s; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
            <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center relative"
                     style="background: ${color}20; border: 1px solid ${color}40;">
                    <i class="fas fa-trophy text-xl" style="color: ${color};"></i>
                    ${isICPC ? `<div class="absolute -top-1 -right-1 w-4 h-4 rounded-full" style="background: ${color};"><i class="fas fa-star text-[8px] text-black flex items-center justify-center w-full h-full"></i></div>` : ''}
                </div>
                <span class="text-sm font-mono px-3 py-1 rounded-lg"
                      style="background: ${color}20; color: ${color}; border: 1px solid ${color}40;">
                    ${achievement.year}
                </span>
            </div>
            <h4 class="text-base font-bold font-display text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400">
                ${achievement.title}
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed">
                ${achievement.description}
            </p>
            ${isICPC ? `
            <div class="mt-3 pt-3 border-t border-white/10">
                <span class="text-xs font-mono" style="color: ${color};">
                    <i class="fas fa-code mr-1"></i>Competitive Programming
                </span>
            </div>
            ` : ''}
        </div>
    `}).join('');
}

// Render Problem Solving Profiles
function renderProblemSolvingProfiles() {
    const container = document.getElementById('profiles-container');
    if (!container || !portfolioData.problemSolvingProfiles) return;

    // Platform-specific colors and icons - softer tones
    const platformStyles = {
        'Codeforces': { color: '#E86B6B', icon: 'fa-code', iconType: 'fas' },
        'HackerRank': { color: '#6CCF7F', icon: 'fa-hackerrank', iconType: 'fab' },
        'Beecrowd': { color: '#4A9EE0', icon: 'fa-laptop-code', iconType: 'fas' },
        'LeetCode': { color: '#E8935A', icon: 'fa-code', iconType: 'fas' },
        'default': { color: '#C099E8', icon: 'fa-code', iconType: 'fas' }
    };

    container.innerHTML = portfolioData.problemSolvingProfiles.map((profile, index) => {
        const style = platformStyles[profile.platform] || platformStyles['default'];
        return `
        <a href="${profile.url}" target="_blank" rel="noopener noreferrer"
           class="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-hover reveal"
           style="animation-delay: ${index * 0.1}s; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
            <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative"
                     style="background: ${style.color}20; border: 1px solid ${style.color}40;">
                    <i class="${style.iconType} ${style.icon} text-2xl" style="color: ${style.color};"></i>
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                         style="box-shadow: 0 2px 10px ${style.color}20;"></div>
                </div>
                <h4 class="text-lg font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all">
                    ${profile.platform}
                </h4>
                <p class="text-sm text-gray-400 mb-4 font-mono px-3 py-1.5 rounded-lg"
                   style="background: ${style.color}10; border: 1px solid ${style.color}30;">
                    @${profile.username}
                </p>
                <div class="flex items-center text-sm font-medium group-hover:gap-2 transition-all" style="color: ${style.color};">
                    <span>View Profile</span>
                    <i class="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </a>
    `}).join('');
}

// Render Experience
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !portfolioData.experience) return;

    container.innerHTML = portfolioData.experience.map((exp, index) => `
        <div class="relative flex items-start mb-12 last:mb-0 reveal" style="animation-delay: ${index * 0.15}s">
            <!-- Timeline Line -->
            ${index < portfolioData.experience.length - 1 ? `
                <div class="absolute left-6 top-16 w-0.5 h-full" style="background: linear-gradient(to bottom, ${exp.isCurrentRole ? '#6CCF7F' : '#4A9EE0'}, ${exp.isCurrentRole ? '#6CCF7F30' : '#4A9EE030'});"></div>
            ` : ''}

            <!-- Timeline Node -->
            <div class="w-12 h-12 rounded-full flex items-center justify-center mr-6 z-10 flex-shrink-0 relative"
                 style="background: ${exp.isCurrentRole ? 'linear-gradient(135deg, #6CCF7F, #3FB950)' : 'linear-gradient(135deg, #4A9EE0, #1F6FEB)'};
                        box-shadow: 0 2px 10px ${exp.isCurrentRole ? '#6CCF7F20' : '#4A9EE020'};">
                <div class="w-3 h-3 bg-white rounded-full"></div>
                ${exp.isCurrentRole ? `<div class="absolute w-full h-full rounded-full animate-ping opacity-30" style="background: #6CCF7F;"></div>` : ''}
            </div>

            <!-- Content Card -->
            <div class="flex-1 glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                 style="box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                <div class="flex flex-wrap justify-between items-start mb-4 gap-3">
                    <div class="flex-1">
                        <h3 class="text-xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">${exp.position}</h3>
                        <p class="text-lg font-semibold mb-1" style="color: ${exp.isCurrentRole ? '#6CCF7F' : '#4A9EE0'};">
                            <i class="fas fa-building mr-2 text-sm"></i>${exp.company}
                        </p>
                        <p class="text-sm text-gray-400 flex items-center">
                            <i class="fas fa-map-marker-alt mr-2"></i>${exp.location}
                        </p>
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        <span class="px-4 py-2 rounded-lg text-sm font-mono"
                              style="background: ${exp.isCurrentRole ? '#6CCF7F20' : '#4A9EE020'}; color: ${exp.isCurrentRole ? '#6CCF7F' : '#4A9EE0'}; border: 1px solid ${exp.isCurrentRole ? '#6CCF7F40' : '#4A9EE040'};">
                            ${exp.startDate} - ${exp.isCurrentRole ? 'Present' : exp.endDate}
                        </span>
                        ${exp.isCurrentRole ? `
                            <span class="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                  style="background: #6CCF7F; color: #0D1117;">
                                <span class="w-2 h-2 rounded-full bg-green-900 animate-pulse"></span>
                                Active
                            </span>
                        ` : ''}
                    </div>
                </div>
                <div class="border-t border-white/10 pt-4 mt-4">
                    <p class="text-gray-400 leading-relaxed text-sm">${exp.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Education
function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container || !portfolioData.education) return;

    const eduColors = ['#C099E8', '#4A9EE0', '#6CCF7F'];

    container.innerHTML = portfolioData.education.map((edu, index) => {
        const color = eduColors[index % eduColors.length];
        return `
        <div class="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group reveal"
             style="animation-delay: ${index * 0.1}s; box-shadow: 0 0 30px rgba(0,0,0,0.3);">
            <div class="flex items-start justify-between mb-4 gap-4">
                <div class="flex items-start space-x-4">
                    <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                         style="background: ${color}20; border: 1px solid ${color}40;">
                        <i class="fas fa-graduation-cap text-2xl" style="color: ${color};"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-bold font-display text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">${edu.degree}</h3>
                        <p class="text-base font-semibold mb-1" style="color: ${color};">${edu.field}</p>
                        <p class="text-gray-400 text-sm flex items-center">
                            <i class="fas fa-university mr-2 text-xs"></i>${edu.institution}
                        </p>
                    </div>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="px-3 py-1.5 rounded-lg text-sm font-mono"
                          style="background: ${color}20; color: ${color}; border: 1px solid ${color}40;">
                        ${edu.startDate} - ${edu.endDate}
                    </span>
                </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 font-mono">// result</span>
                    <span class="text-sm font-bold font-mono px-3 py-1 rounded-lg"
                          style="background: ${color}15; color: ${color};">${edu.result}</span>
                </div>
            </div>
        </div>
    `}).join('');
}

function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container || !portfolioData.certifications) return;

    const certColors = ['#C099E8', '#E8935A', '#4A9EE0', '#6CCF7F', '#E86B6B', '#8FC7E8', '#6BB3D9'];

    container.innerHTML = portfolioData.certifications.map((cert, index) => {
        const color = certColors[index % certColors.length];
        const isTrainer = cert.title.toLowerCase().includes('trainer');
        return `
        <div class="glass-effect rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group reveal"
             style="animation-delay: ${index * 0.08}s; box-shadow: 0 4px 15px rgba(0,0,0,0.15);"
             onclick="openCertificateModal('${cert.id}')">
            <div class="relative h-44 overflow-hidden" style="background: linear-gradient(135deg, ${color}20, ${color}05);">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                ${isTrainer ? `
                <div class="absolute top-3 left-3">
                    <span class="px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                          style="background: #E8935A; color: #0D1117;">
                        <i class="fas fa-chalkboard-teacher text-xs"></i>
                        Trainer
                    </span>
                </div>
                ` : ''}

                <div class="absolute bottom-3 left-3 right-3">
                    <span class="text-xs font-mono px-2 py-1 rounded-lg"
                          style="background: ${color}30; color: ${color}; border: 1px solid ${color}50;">
                        ${cert.startDate === cert.endDate ? cert.endDate : cert.startDate + ' - ' + cert.endDate}
                    </span>
                </div>
            </div>
            <div class="p-4" style="background: rgba(13, 17, 23, 0.9);">
                <div class="flex items-start mb-3">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3"
                         style="background: ${color}20; border: 1px solid ${color}40;">
                        <i class="fas fa-award" style="color: ${color};"></i>
                    </div>
                    <h4 class="text-sm font-semibold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">${cert.title}</h4>
                </div>
                <div class="space-y-2 text-sm">
                    <div class="flex items-center text-gray-400">
                        <i class="fas fa-building mr-2 text-xs" style="color: ${color}50;"></i>
                        <span class="truncate">${cert.institution}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <i class="fas fa-map-marker-alt mr-2 text-xs" style="color: ${color}50;"></i>
                        <span>${cert.location}</span>
                    </div>
                </div>
                <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-center">
                    <span class="text-xs font-mono" style="color: ${color};">
                        <i class="fas fa-expand mr-1"></i>Click to view
                    </span>
                </div>
            </div>
        </div>
    `}).join('');
}

function openCertificateModal(certId) {
    const cert = portfolioData.certifications.find(c => c.id === certId);
    if (!cert) return;

    document.getElementById('modal-title').textContent = cert.title;
    document.getElementById('modal-image').src = cert.image;
    document.getElementById('modal-image').alt = cert.title;
    document.getElementById('modal-institution').textContent = cert.institution;
    document.getElementById('modal-location').textContent = cert.location;
    document.getElementById('modal-date').textContent = cert.startDate === cert.endDate ? cert.endDate : cert.startDate + ' - ' + cert.endDate;

    document.getElementById('certificate-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
    document.getElementById('certificate-modal').classList.add('hidden');
    document.body.style.overflow = '';
}