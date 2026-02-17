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
        { id: "13", name: "FreeSWITCH", category: "VoIP", level: 80 },
        { id: "14", name: "WebRTC", category: "VoIP", level: 85 },
        { id: "15", name: "Janus", category: "VoIP", level: 78 },
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

    // Add animation delays for staggered effects
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Load data from localStorage
function loadData() {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
        portfolioData = { ...portfolioData, ...JSON.parse(savedData) };
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// Render Portfolio Content
function renderPortfolio() {
    renderPersonalInfo();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderAchievements();
    renderProblemSolvingProfiles();
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

    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'bg-white rounded-2xl shadow-xl p-8 fade-in-up';

        const categoryColors = {
            'Frontend': 'from-blue-500 to-cyan-500',
            'Backend': 'from-green-500 to-emerald-500',
            'VoIP': 'from-purple-500 to-violet-500',
            'Database': 'from-orange-500 to-red-500',
            'Mobile': 'from-pink-500 to-rose-500'
        };

        const gradientClass = categoryColors[category] || 'from-gray-500 to-gray-600';

        categoryDiv.innerHTML = `
            <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center mr-4">
                    <i class="fas fa-code text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">${category}</h3>
            </div>
            <div class="space-y-6">
                ${skills.map(skill => `
                    <div class="skill-item" data-skill-id="${skill.id}">
                        <div class="flex justify-between items-center mb-3">
                            <h4 class="text-lg font-semibold text-gray-900">${skill.name}</h4>
                            <div class="flex items-center space-x-3">
                                <span class="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">${skill.level}%</span>
                                ${isEditMode ? `
                                    <button onclick="editSkill('${skill.id}')" class="text-gray-400 hover:text-blue-600 p-1 rounded transition-colors">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="deleteSkill('${skill.id}')" class="text-gray-400 hover:text-red-600 p-1 rounded transition-colors">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div class="skill-progress h-3 rounded-full transition-all duration-2000 ease-out" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.appendChild(categoryDiv);
    });
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    const allProjects = isEditMode ? portfolioData.projects : featuredProjects;

    container.innerHTML = '';

    allProjects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card bg-white rounded-2xl shadow-xl overflow-hidden fade-in-up';

        projectDiv.innerHTML = `
            <div class="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                ${project.image ?
                    `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">` :
                    `<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i class="fas fa-code text-3xl mb-2 opacity-80"></i>
                            <h4 class="text-lg font-bold">${project.title.substring(0, 15)}${project.title.length > 15 ? '...' : ''}</h4>
                        </div>
                    </div>`
                }

                ${isEditMode ? `
                    <div class="absolute top-2 right-2 flex space-x-1">
                        <button onclick="editProject('${project.id}')" class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-md hover:bg-white shadow-sm transition-all">
                            <i class="fas fa-edit text-sm"></i>
                        </button>
                        <button onclick="deleteProject('${project.id}')" class="bg-white/90 backdrop-blur-sm text-red-600 p-2 rounded-md hover:bg-white shadow-sm transition-all">
                            <i class="fas fa-trash text-sm"></i>
                        </button>
                    </div>
                ` : ''}

                <div class="absolute top-2 left-2">
                    <span class="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Featured
                    </span>
                </div>

                <div class="absolute bottom-2 right-2 flex space-x-2">
                    <a href="${project.githubUrl}" target="_blank" class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-md hover:bg-white hover:text-blue-600 shadow-sm transition-all group">
                        <i class="fab fa-github text-sm group-hover:scale-110 transition-transform"></i>
                    </a>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-md hover:bg-white hover:text-green-600 shadow-sm transition-all group">
                            <i class="fas fa-external-link-alt text-sm group-hover:scale-110 transition-transform"></i>
                        </a>
                    ` : ''}
                </div>
            </div>

            <div class="p-5">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-xl font-bold text-gray-900 leading-tight">${project.title}</h3>
                    <button onclick="toggleDescription('${project.id}')" class="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>

                <div id="desc-${project.id}" class="hidden mb-4">
                    <p class="text-gray-600 text-sm leading-relaxed">${project.description}</p>
                </div>

                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${project.technologies.slice(0, 4).map(tech =>
                        `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 4 ?
                        `<span class="text-gray-500 text-xs font-medium px-2 py-1">+${project.technologies.length - 4}</span>` : ''
                    }
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex space-x-3">
                        <a href="${project.githubUrl}" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            <i class="fab fa-github mr-1"></i>Code
                        </a>
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" class="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">
                                <i class="fas fa-external-link-alt mr-1"></i>Live
                            </a>
                        ` : ''}
                    </div>
                    <button onclick="toggleTechStack('${project.id}')" class="text-xs text-blue-600 hover:text-blue-700 font-medium">
                        <i class="fas fa-layer-group mr-1"></i>Tech Stack
                    </button>
                </div>

                <div id="tech-${project.id}" class="hidden mt-3 pt-3 border-t border-gray-100">
                    <div class="flex flex-wrap gap-1">
                        ${project.technologies.map(tech =>
                            `<span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">${tech}</span>`
                        ).join('')}
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

    container.innerHTML = portfolioData.achievements.map(achievement => `
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-500">
            <div class="flex items-start justify-between mb-4">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <i class="fas fa-trophy text-yellow-600 text-2xl"></i>
                </div>
                <span class="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded-full">
                    ${achievement.year}
                </span>
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3 leading-tight">
                ${achievement.title}
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">
                ${achievement.description}
            </p>
        </div>
    `).join('');
}

// Render Problem Solving Profiles
function renderProblemSolvingProfiles() {
    const container = document.getElementById('profiles-container');
    if (!container || !portfolioData.problemSolvingProfiles) return;

    container.innerHTML = portfolioData.problemSolvingProfiles.map(profile => `
        <a href="${profile.url}" target="_blank" rel="noopener noreferrer"
           class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group">
            <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-code text-green-600 text-3xl"></i>
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    ${profile.platform}
                </h4>
                <p class="text-sm text-gray-600 mb-4 font-mono bg-gray-50 px-4 py-2 rounded-lg">
                    ${profile.username}
                </p>
                <div class="flex items-center text-green-600 text-sm font-semibold group-hover:text-green-700">
                    <span>View Profile</span>
                    <i class="fas fa-external-link-alt ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </a>
    `).join('');
}

// Render Experience
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !portfolioData.experience) return;

    container.innerHTML = portfolioData.experience.map((exp, index) => `
        <div class="relative flex items-start mb-10 last:mb-0 fade-in-up" style="animation-delay: ${index * 0.1}s">
            ${index < portfolioData.experience.length - 1 ? `
                <div class="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            ` : ''}

            <div class="w-12 h-12 rounded-full flex items-center justify-center mr-6 z-10 flex-shrink-0 ${
                exp.isCurrentRole
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 shadow-lg'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
            }">
                <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <div class="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex flex-wrap justify-between items-start mb-4 gap-3">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">${exp.position}</h3>
                        <p class="text-lg font-semibold text-blue-600 mb-1">${exp.company}</p>
                        <p class="text-sm text-gray-500 flex items-center">
                            <i class="fas fa-map-marker-alt mr-2"></i>${exp.location}
                        </p>
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        <span class="px-4 py-2 rounded-full text-sm font-semibold ${
                            exp.isCurrentRole
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-700'
                        }">
                            ${exp.startDate} - ${exp.isCurrentRole ? 'Present' : exp.endDate}
                        </span>
                        ${exp.isCurrentRole ? `
                            <span class="px-3 py-1 rounded-full text-xs font-bold bg-green-600 text-white animate-pulse">
                                Current
                            </span>
                        ` : ''}
                    </div>
                </div>
                <p class="text-gray-600 leading-relaxed">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Education
function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container || !portfolioData.education) return;

    container.innerHTML = portfolioData.education.map((edu, index) => `
        <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500 fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-start space-x-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-graduation-cap text-blue-600 text-2xl"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${edu.degree}</h3>
                        <p class="text-lg font-semibold text-blue-600 mb-1">${edu.field}</p>
                        <p class="text-gray-700 font-medium">${edu.institution}</p>
                    </div>
                </div>
                <div class="text-right">
                    <span class="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 whitespace-nowrap">
                        ${edu.startDate} - ${edu.endDate}
                    </span>
                </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 font-medium">Result:</span>
                    <span class="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">${edu.result}</span>
                </div>
            </div>
        </div>
    `).join('');
}