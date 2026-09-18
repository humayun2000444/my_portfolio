// Portfolio Data Management
let portfolioData = {
    personalInfo: {
        name: "Humayun Ahmed",
        title: "VoIP & WebRTC Engineer",
        email: "humayun.ahmed917280@gmail.com",
        phone: "+880 1789 896378",
        location: "Dhaka, Bangladesh",
        address: "House no 530, Road no 12, Adabor, Dhaka 1207",
        company: "Telcobright Limited",
        bio: "I'm a VoIP and telecom engineer with 3+ years building and debugging the systems that carry real phone calls. At Telcobright I work on carrier-grade softswitch software: FreeSWITCH with ESL control planes in Java and Spring Boot, WebRTC calling through Janus and SIP.js, SIP trunking, and TURN over TLS for networks that block VoIP media. I diagnose faults from SIP traces and packet captures rather than guesswork - one-way audio, dropped calls, registration failures. Alongside the telecom work I build the full stack around it in ReactJS, Node.js and MySQL/PostgreSQL, and deploy with Docker, Nginx and GitHub Actions. ICPC participant, and happiest in R&D - prototyping fast and turning ideas into working systems.",
        resumeSummary: "VoIP and telecom engineer with 3+ years building and debugging the systems that carry real phone calls. At Telcobright I build carrier-grade platforms for licensed operators: a FreeSWITCH softswitch with a Java and Spring Boot control plane carrying 5,000+ concurrent calls, and a multi-tenant hosted PBX on FusionPBX serving BTCL and Cosmopolitan Communications Limited. I diagnose production faults from SIP traces and packet captures rather than guesswork, and build the full stack around the telephony layer in React, Spring Boot and PostgreSQL.",
        keyStrengths: [
            "VoIP & telephony: FreeSWITCH, FusionPBX, Asterisk, SIP, RTP, SIP trunking",
            "Carrier platforms: softswitch, hosted PBX, least-cost routing, billing, CDR, SBC, SIGTRAN",
            "WebRTC: Janus, SIP.js, coturn TURN over TLS, browser and mobile softphones",
            "Full-stack: Java, Spring Boot, Node.js, React, TypeScript, PostgreSQL, MySQL",
            "Production debugging: SIP traces, packet captures, NAT and firewall faults"
        ],
        profileImage: "assets/profile.jpg",
        linkedinUrl: "https://www.linkedin.com/in/humayun-ahmed775",
        githubUrl: "https://github.com/humayun2000444"
    },
    skills: [
        { id: "13", name: "FreeSWITCH", category: "VoIP", level: 95 },
        { id: "20", name: "SIP", category: "VoIP", level: 88 },
        { id: "14", name: "WebRTC", category: "VoIP", level: 85 },
        { id: "15", name: "Janus", category: "VoIP", level: 80 },
        { id: "21", name: "Asterisk / FusionPBX", category: "VoIP", level: 80 },
        { id: "6", name: "Java", category: "Backend", level: 88 },
        { id: "7", name: "Spring Boot", category: "Backend", level: 85 },
        { id: "8", name: "Node.js", category: "Backend", level: 85 },
        { id: "10", name: "C/C++", category: "Backend", level: 82 },
        { id: "9", name: "Python", category: "Backend", level: 75 },
        { id: "11", name: "MySQL", category: "Database", level: 95 },
        { id: "12", name: "PostgreSQL", category: "Database", level: 75 },
        { id: "4", name: "JavaScript", category: "Frontend", level: 95 },
        { id: "1", name: "ReactJS", category: "Frontend", level: 90 },
        { id: "5", name: "HTML/CSS", category: "Frontend", level: 90 },
        { id: "3", name: "TypeScript", category: "Frontend", level: 82 },
        { id: "2", name: "Next.js", category: "Frontend", level: 80 },
        { id: "19", name: "Nginx", category: "DevOps", level: 78 },
        { id: "16", name: "Docker", category: "DevOps", level: 75 },
        { id: "18", name: "GitHub Actions", category: "DevOps", level: 75 },
        { id: "17", name: "LXD", category: "DevOps", level: 70 }
    ],
    projects: [
        {
            id: "crm",
            title: "Contact Centre CRM on FreeSWITCH",
            client: "BTCL, Cosmopolitan Communications Limited",
            resumeSummary: "Multi-tenant contact centre CRM where the call, the customer record and the appointment live in one system rather than two an agent retypes between. Browser softphone over WebRTC with screen pop, hold, transfer and wrap-up, and one FreeSWITCH domain per company provisioned by API. 36 screens across 9 industries and 5 companies, as lead engineer.",
            description: "Multi-tenant contact centre CRM where the call, the WhatsApp thread, the appointment and the customer record are one record instead of two systems an agent retypes between. One deployment serves multiple companies, each with its own FreeSWITCH domain, users and data, provisioned through a single API call rather than a new server. Agents work in a browser softphone over WebRTC with screen pop, hold, transfer and wrap-up; the caller is identified before the agent says hello. Also covers appointment booking, two-language self-service over IVR/SMS/WhatsApp, omnichannel messaging and agent/call/billing reporting.",
            technologies: ["FreeSWITCH", "FusionPBX", "WebRTC", "Odoo 19", "Python", "React", "TypeScript", "Quarkus", "Java", "XMPP"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "Contact centres run the switch and the CRM as two systems: the switch knows about calls and nothing else, the CRM knows about customers and cannot see the phone. The agent sits in the gap retyping, and every question a caller asks about their own history falls into it.",
                solution: "Built one system where telephony and the customer record share a database, multi-tenant by company rather than by installation, with a single gateway that resolves the tenant, carries identity, drives the IVR dialogue and fans messages out across channels.",
                features: [
                    "Browser softphone over WebRTC with screen pop, hold, transfer and wrap-up",
                    "One FreeSWITCH domain per company, provisioned by API with rollback on each step",
                    "Appointments with per-resource sessions, slot capacity and customer notifications",
                    "Self-service booking, checking and cancelling over IVR, SMS and WhatsApp in two languages",
                    "Omnichannel: WhatsApp and Facebook threads land beside calls and email on the same customer",
                    "Company-scoped data and users enforced by database record rules, not UI filters",
                    "Agent performance, call history, appointment load and billing reports as CSV and print-ready PDF",
                    "One codebase that speaks each industry's vocabulary from a single tenant setting"
                ],
                challenges: [
                    { title: "One product, nine industries, no forks", description: "A hospital calls it an appointment, a courier a delivery, a school a session. Company type became one tenant setting from which every noun on every screen, report and IVR prompt is derived, so a new industry is a table entry rather than a fork." },
                    { title: "Tenancy that fails safe on live data", description: "Adding multi-tenancy to a system already carrying data is where leaks happen: existing rows belong to nobody and a strict rule hides all of them on release day. Used database-level record rules with a deliberate fail-open on unattributed rows, plus a migration that attributed them from evidence already on file." },
                    { title: "Answering the phone without an agent, or a language", description: "A free keyword tier runs before any model, the dialogue asks which language to use and remembers it, and anything unrecognised returns 'not handled' so the router hands it to a person - the failure mode is a human being rather than silence." },
                    { title: "A middle tier that could not reach its own switch", description: "Provisioning went through a service that on one operator had never reached the switch. Read the switch first and found every fallback-written route carried a correct bridge string, so the concern recorded in the code was not borne out by the data; then swapped the order and reported both failure reasons instead of one." }
                ],
                impact: [
                    { metric: "36", label: "Screens Shipped" },
                    { metric: "9", label: "Industries From One Codebase" },
                    { metric: "5", label: "Companies On One Deployment" },
                    { metric: "456", label: "Commits In 7 Weeks" }
                ]
            }
        },
        {
            id: "routesphere",
            title: "RouteSphere - Carrier Call & SMS Routing Engine",
            client: "Telcobright Limited (operator deployments)",
            role: "Core contributor - call state machine, omnichannel messaging, config layer (305 of 1,175 commits)",
            resumeSummary: "Multi-tenant call and SMS routing engine on Quarkus and Java 21, driving FreeSWITCH over ESL. Every call passes a database-driven pipeline: tenant and partner resolution by source IP, channel limits, digit-filter rewriting, MNP lookup across ~954K ported numbers, longest-prefix dialplan matching, rating and multi-level balance reservation. Owned the call state machine and the omnichannel SMS/IM path.",
            description: "Carrier-grade routing and processing platform built with Quarkus on Java 21, sitting in front of FreeSWITCH over the Event Socket Layer. A parked channel is resolved to a tenant, then to a partner by source IP, checked against that partner's concurrent channel limit, rewritten by longest-match digit filter rules, corrected for number portability against ~954,000 ported numbers held in memory, matched to a dialplan by longest prefix, rated against the partner's rate plan, and finally reserved against balances at partner, parent and root level before the call is allowed to proceed. Around that core sit OmniQueue (a YAML-driven abstraction over Kafka), statewalk state machines, CDR, campaign and scheduling modules, and WebRTC via LiveKit and OpenVidu. My work concentrated on routesphere-core, the call state machine, the configuration layer and the omnichannel IM/SMS integration.",
            technologies: ["Java 21", "Quarkus", "FreeSWITCH ESL", "Kafka", "MySQL", "State Machines", "SIP", "Maven", "Chronicle Queue", "LiveKit"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "A carrier switch has to answer four questions in the few milliseconds before a call is bridged: who is sending it, are they allowed to, what does the number really mean after portability, and can they afford it. Hardcoding any of that means a code change and a redeploy every time an operator adds a partner, a prefix or a rate.",
                solution: "Built the decision path as a database-driven pipeline with no hardcoded prefix logic, so routing, rewriting, rating and credit control are all table entries an operator can change while calls are flowing.",
                features: [
                    "Tenant resolved by IP or domain, then partner resolved by source IP within that tenant",
                    "Concurrent channel limit enforced per partner before the call is admitted",
                    "Digit filter rules with longest match independently for calling and called numbers: allow/deny, add prefix, cut-and-replace",
                    "Mobile number portability lookup over ~954,000 entries loaded lazily into a concurrent map for O(1) correction of the operator routing code",
                    "Longest-prefix dialplan matching with no default fallback, so an unmatched call is dropped rather than misrouted",
                    "Rate lookup per partner and rate plan, then multi-level balance reservation across partner, parent and root",
                    "OmniQueue: Kafka producer behaviour, retries and HA configured per tenant in YAML instead of Java",
                    "Call state machine handling park, answer, transfer, max-duration and teardown"
                ],
                challenges: [
                    { title: "A cut that ended half a call", description: "A max-duration cut tore down one leg and left the other live, so the switch believed the call was over while the customer was still talking and still being charged. Fixed the state machine so the duration guard terminates the session rather than a single channel." },
                    { title: "One number, many shapes", description: "The same subscriber arrives as 01789..., +8801789... and 8801789... depending on the channel. Normalised every inbound form to 880XXXXXXXXXX at the gateway boundary, so downstream routing, dedupe and customer matching all compare like with like." },
                    { title: "Replies leaving by the wrong door", description: "In multi-tenant messaging an agent's reply could leave through another company's SMS gateway, exposing the wrong sender ID. Bound the outbound route to the agent's own company gateway at send time rather than to a global default." },
                    { title: "Configuration read once, at boot", description: "Channel settings were cached at startup, so an operator changing a gateway had to wait for a restart. Made the channel layer re-read settings on change, which removed a class of overnight maintenance windows." }
                ],
                impact: [
                    { metric: "954K", label: "Ported Numbers In Memory" },
                    { metric: "305", label: "My Commits Of 1,175" },
                    { metric: "3", label: "Balance Levels Reserved" },
                    { metric: "0", label: "Hardcoded Prefixes" }
                ],
                architecture: "Quarkus services on Java 21 with FreeSWITCH as the media and signalling plane over ESL. MySQL holds tenants, partners, digit filter plans, dialplans, rate plans and balances; the MNP table is lazily loaded into a ConcurrentHashMap. Kafka carries events behind OmniQueue, a YAML-configured abstraction layer. State machines model the call lifecycle; CDR, campaign and scheduler modules consume the same core domain.",
                duration: "Ongoing since 2025",
                role: "Core contributor (305 of 1,175 commits)",
                learnings: "How much of a carrier platform is really data modelling rather than code, why fail-closed routing beats a default route, and how to keep multi-tenant boundaries intact all the way out to the last gateway hop."
            }
        },
        {
            id: "softswitch-dashboard",
            title: "Softswitch Operations Dashboard",
            client: "BTCL, Cosmopolitan Communications Limited, LINK3",
            role: "Second-largest contributor - 448 of 1,738 commits",
            resumeSummary: "React operations console for a multi-tenant softswitch, deployed under seven client profiles across BTCL, CCL and LINK3. Covers PBX management, live call monitoring, CDR reporting, SMS campaigns and routing, voice broadcast, multi-level partner hierarchy, rate plans, DID pools and Kafka cluster health, with per-client theming from a single codebase.",
            description: "The operations console that telecom staff actually use to run the softswitch day to day. One React codebase serves seven deployment profiles (BTCL PBX, BTCL HCC, BTCL SMS, BTCL Voice Broadcast, CCL, LINK3 and local development), each with its own API endpoints, branding and enabled service set, so a client is a configuration profile rather than a fork. Voice side: PBX and extension management, call routing, active call monitoring, CDR reports. SMS side: campaign management, bulk SMS, routing, sender ID management and developer API documentation. Plus voice broadcast campaigns, live call statistics, system and Kafka cluster health, and a multi-level partner hierarchy with rate plans and DID pool allocation.",
            technologies: ["React", "Material UI", "Ant Design", "REST APIs", "Kafka", "Recharts", "Multi-tenancy", "JWT Auth"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "Every operator wanted the same softswitch with a different face: different colours, different API hosts, and a different subset of services. Cloning the front end per client had already started, and each clone drifted further from the others with every bug fix applied in only one place.",
                solution: "Collapsed the clones into one codebase with a profile system. A profile carries the API base, theme colour, brand and the services that are switched on, so adding a client is a configuration entry and a fix lands everywhere at once.",
                features: [
                    "Seven deployment profiles across three operators from a single build",
                    "Voice: PBX and extension management, call routing, active call monitoring with live statistics",
                    "SMS: campaigns, bulk send, routing rules, sender ID management and API documentation for integrators",
                    "Voice broadcast campaign creation and monitoring",
                    "Multi-level partner hierarchy with rate plans and DID pool management",
                    "CDR reporting with filtering and export",
                    "System health including Kafka cluster status",
                    "Per-profile theming and branding applied at runtime"
                ],
                challenges: [
                    { title: "One console, three operators, no forks", description: "Client-specific behaviour was spreading through the codebase as conditionals. Moved it into profile configuration so components read capability flags instead of asking which client they are running for." },
                    { title: "Screens that must not lie", description: "An operations console showing stale call state is worse than no console: staff act on it. Live views poll and reconcile against the switch rather than trusting the last render." },
                    { title: "Voice and SMS in one product", description: "The two service families have different entities, reports and permissions. Kept them as separate feature modules behind a shared shell so an SMS-only client never loads voice screens at all." }
                ],
                impact: [
                    { metric: "7", label: "Client Profiles" },
                    { metric: "3", label: "Operators In Production" },
                    { metric: "448", label: "My Commits Of 1,738" },
                    { metric: "2", label: "Service Families (Voice + SMS)" }
                ],
                architecture: "React single-page application with Material UI and Ant Design components, talking to softswitch REST APIs. A profile layer resolves API base URLs, theme tokens and feature flags at runtime; feature modules for voice, SMS and broadcast load behind a shared application shell. Charts via Recharts; Kafka and system health surfaced through dedicated status endpoints.",
                duration: "Ongoing since 2024",
                role: "Second-largest contributor (448 of 1,738 commits)",
                learnings: "Configuration-driven multi-tenancy at the UI layer, and how operations tools are judged on whether the numbers on screen match the switch, not on how they look."
            }
        },
        {
            id: "1",
            title: "Softswitch VoIP Calling System",
            client: "Telecom operators",
            resumeSummary: "Carrier-grade softswitch on FreeSWITCH ESL and Spring Boot: least-cost routing, real-time prepaid and postpaid billing, CDR management, and SIP trunk failover with health checks. Handles 5,000+ concurrent calls on PostgreSQL, with a REST API and call analytics dashboard for operator integration.",
            description: "Enterprise-grade Softswitch VoIP calling system built with FreeSWITCH ESL and Spring Boot for telecommunication operators. Features include intelligent call routing with least-cost routing (LCR), real-time billing engine with prepaid/postpaid support, call detail records (CDR) management, SIP trunk management, concurrent call handling, call quality monitoring (QoS), automated failover and load balancing, WebRTC gateway integration, REST API for system integration, real-time call analytics dashboard, and comprehensive monitoring tools. Handles high-volume call traffic with PostgreSQL database for robust data management.",
            technologies: ["FreeSWITCH", "ESL (Event Socket Layer)", "Spring Boot", "Java", "VoIP", "SIP Protocol", "WebRTC", "PostgreSQL", "REST API", "CDR Management"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "Telecom operators needed a reliable, scalable softswitch solution to handle high-volume VoIP traffic with real-time billing, intelligent routing, and seamless failover capabilities.",
                solution: "Built an enterprise-grade softswitch using FreeSWITCH ESL integrated with Spring Boot, implementing event-driven architecture for real-time call control and billing operations.",
                features: [
                    "Least Cost Routing (LCR) engine with dynamic rate management",
                    "Real-time prepaid/postpaid billing with balance alerts",
                    "SIP trunk management with automatic failover",
                    "Call Detail Records (CDR) with analytics dashboard",
                    "WebRTC gateway for browser-based calling",
                    "REST API for third-party integrations"
                ],
                challenges: [
                    { title: "High Concurrency", description: "Handling 5000+ concurrent calls required optimizing FreeSWITCH event handling and implementing connection pooling." },
                    { title: "Real-time Billing", description: "Implemented Redis-based caching for balance checks to achieve sub-millisecond billing decisions." },
                    { title: "Failover System", description: "Designed automatic trunk failover with health checks to ensure 99.9% uptime." }
                ],
                impact: [
                    { metric: "5000+", label: "Concurrent Calls" },
                    { metric: "99.9%", label: "System Uptime" },
                    { metric: "<100ms", label: "Call Setup Time" },
                    { metric: "1M+", label: "Daily CDRs Processed" }
                ],
                architecture: "Microservices architecture with FreeSWITCH as the media server, Spring Boot for business logic, PostgreSQL for persistent storage, and Redis for caching and session management.",
                duration: "8 months",
                role: "Lead Developer",
                learnings: "Deep understanding of VoIP protocols (SIP, RTP), real-time system design, and telecom billing mechanisms."
            }
        },
        {
            id: "2",
            title: "Hosted PBX System",
            client: "BTCL, Cosmopolitan Communications Limited",
            resumeSummary: "Cloud PBX management platform on the FusionPBX REST API with a React 19 front end, multi-tenant across two operators with a three-tier pricing model. 24 management pages covering extensions, IVR builder, call queues, ring groups, conference rooms, live call monitoring, a WebDialer softphone, CDR reporting and billing.",
            description: "Production-ready cloud PBX management platform built with React 19 and FusionPBX REST API backend. Features multi-tenant architecture supporting multiple organizations (BTCL, CCL) with configurable profiles, three-tier pricing model (Bronze/Silver/Gold), and 24 distinct management pages. Includes real-time dashboard with call analytics, extension management, IVR builder, call queues, ring groups, conference rooms, active call monitoring, WebDialer softphone, call forwarding, CDR reporting, and comprehensive billing system with invoice generation.",
            technologies: ["React 19", "Vite", "Tailwind CSS", "FusionPBX", "REST API", "JWT Auth", "Recharts", "Lucide Icons"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "Telecom operators BTCL and CCL needed a modern, user-friendly web interface to manage their hosted PBX services with multi-tenant support, tiered pricing, and comprehensive call management features for enterprise customers.",
                solution: "Built a feature-rich React 19 application with FusionPBX REST API integration, supporting multiple organization profiles with custom branding, three-tier subscription model with package limits enforcement, and 50+ RESTful endpoints for complete PBX management.",
                features: [
                    "Multi-tenant architecture with organization profiles (BTCL, CCL)",
                    "Three-tier pricing: Bronze (10 ext), Silver (30 ext), Gold (100 ext)",
                    "Real-time dashboard with call volume charts and analytics",
                    "Extension management with device type support (IP Phone, Softphone, Mobile)",
                    "IVR menu builder with DTMF options and audio greetings",
                    "Call Queues and Ring Groups for team-based routing",
                    "Conference room management",
                    "Active call monitoring with hangup/transfer capabilities",
                    "Draggable WebDialer softphone with dial pad and call controls",
                    "Call forwarding with DND toggle",
                    "CDR analytics and summary reports",
                    "Billing system with invoice generation and PDF download"
                ],
                challenges: [
                    { title: "Multi-Organization Support", description: "Implemented configurable profile system with dynamic theming, API endpoints, and branding for BTCL (green theme) and CCL (navy theme)." },
                    { title: "Package Limits Validation", description: "Built usePackageLimits hook for frontend enforcement of extension/IVR limits with automatic package info fetching and expiration validation." },
                    { title: "WebDialer Integration", description: "Created draggable softphone component with DTMF support, call state management, mute/hold/transfer functionality, and duration tracking." },
                    { title: "Flexible API Integration", description: "Designed system to handle multiple field naming conventions from different backends with automatic response structure detection." }
                ],
                impact: [
                    { metric: "24", label: "Management Pages" },
                    { metric: "50+", label: "API Endpoints" },
                    { metric: "3", label: "Pricing Tiers" },
                    { metric: "2", label: "Organizations Supported" }
                ],
                architecture: "React 19 + Vite frontend with Tailwind CSS styling, FusionPBX REST API backend, JWT authentication with role-based access, Recharts for analytics visualization, profile-based configuration system for multi-organization support.",
                duration: "4 months",
                role: "Frontend Developer",
                learnings: "Multi-tenant SaaS architecture, profile-based configuration systems, complex state management for telephony interfaces, and building intuitive UIs for enterprise telecom applications."
            }
        },
        {
            id: "allinone-school",
            title: "All-in-One School - Multi-School SaaS",
            client: "Independent product",
            role: "Sole developer - 68 of 68 commits",
            resumeSummary: "Multi-school management platform for Bangladeshi schools, built and shipped alone: per-school public website with bilingual result search, four role tiers, a grading engine ported 1:1 from the offline app and verified by dual computation, plus per-school module grants for attendance and fees. Next.js 15, React 19, Prisma and MySQL.",
            description: "A hosted platform that lets many schools run on one deployment, grown out of an earlier offline single-file app that is still maintained on another branch. Guardians and students need no login: each school gets a public website with home, teachers, gallery, notices and contact, plus result search where a student ID returns a marksheet with GPA, grade, class position and subject-wise marks, in English or Bangla on any page. Behind the login sit four roles: super admin creating schools and granting modules, school admin running classes, students, teachers, exams, fees, attendance and the website, teachers restricted to their own assigned classes and subjects, and students seeing only their own results, attendance, fees and notes. Schools start with result management and can request attendance and fees as module grants, which the super admin approves from a dashboard.",
            technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma", "MySQL", "Zod", "JOSE / JWT", "bcrypt", "SheetJS"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "Bangladeshi schools were running results from an offline single-file app: reliable, but one file per school, no public site for guardians, and no way to share fixes. Moving them online risked the one thing they trusted, that the grades come out exactly as they did before.",
                solution: "Built a hosted multi-school platform where the grading engine is a 1:1 port of the offline rules, and proved the port rather than claiming it: the backup importer recomputes every imported result both ways and compares, so a school can migrate only once the numbers match.",
                features: [
                    "One deployment serving many schools, each with its own public website and data",
                    "Public result search by exam and student ID: GPA, grade, class position and subject-wise marks, no login",
                    "Bilingual English and Bangla across every page, switchable anywhere",
                    "Four roles with strictly scoped access: super admin, school admin, teacher, student and guardian",
                    "Teachers limited to their assigned classes and subjects for marks and attendance",
                    "Module grants: schools begin with results and request attendance or fees, approved by the super admin",
                    "Offline backup importer with dual recomputation to prove grading parity before migration",
                    "Fees with receipts, attendance, class notes and printed certificates"
                ],
                challenges: [
                    { title: "Migrating trust, not just data", description: "Schools would not accept a new grading engine on assurance alone. The importer runs both the ported and the original rules over the same backup and reports any difference, so parity is demonstrated per school rather than asserted once." },
                    { title: "Roles that hold at the data layer", description: "A teacher must never see another section's marks, and a guardian must see only their own child. Scope is enforced where the queries are built, not by hiding buttons in the interface." },
                    { title: "Selling by module without breaking the product", description: "Attendance and fees are add-ons, but a locked module still has to look like part of the product. Ungranted modules render greyed with a padlock and a request action rather than disappearing, so the school knows what it can ask for." },
                    { title: "Bilingual as a requirement, not a plugin", description: "Guardians read Bangla, administrators often work in English, and both appear in the same marksheet. Language is carried through the whole render path including printed output, rather than bolted on as a client-side toggle." }
                ],
                impact: [
                    { metric: "68/68", label: "Commits (Sole Author)" },
                    { metric: "4", label: "Role Tiers" },
                    { metric: "2", label: "Languages Throughout" },
                    { metric: "1:1", label: "Verified Grading Parity" }
                ],
                architecture: "Next.js 15 with React 19 and TypeScript, Prisma over MySQL, JWT sessions via JOSE with bcrypt password hashing, and Zod validation at the boundaries. Grading lives in a single shared module ported from the offline engine; the backup importer reads offline files with SheetJS and recomputes results through both paths for comparison.",
                duration: "2026",
                role: "Sole developer",
                learnings: "That migration is a trust problem before it is a technical one, and that proving equivalence with the old system is worth more than any feature added on top of it."
            }
        },
        {
            id: "3",
            title: "ExamGuard - AI Exam Proctoring SaaS",
            resumeSummary: "Multi-tenant SaaS proctoring platform with AI cheating detection using YOLOv8, InsightFace and MediaPipe at 30-50ms frame analysis, with composite risk scoring. LiveKit SFU video for 100+ participants and a six-provider LLM failover chain for question generation and automated grading.",
            description: "Production-grade multi-tenant SaaS exam proctoring platform with AI-powered cheating detection using YOLOv8, InsightFace, and MediaPipe. Features 6-provider LLM failover for AI question generation & grading, hybrid P2P/LiveKit SFU video meetings supporting 100+ participants with Google Meet-style views, real-time proctoring dashboard with composite risk scoring, multi-angle face verification, dual camera monitoring, and comprehensive violation tracking. Built with React 19, Spring Boot 3.2, Python Flask AI service, and MySQL across 35+ tables with full multi-tenant data isolation.",
            technologies: ["React 19", "Spring Boot 3.2", "Python Flask", "MySQL", "YOLOv8", "InsightFace", "MediaPipe", "LiveKit SFU", "WebRTC", "Socket.IO", "Docker", "JWT", "ONNX Runtime", "Tailwind CSS", "Claude API", "Stripe"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            status: "featured",
            type: "production",
            caseStudy: {
                problem: "Educational institutions needed a comprehensive, production-ready proctoring solution capable of detecting multiple cheating vectors — prohibited devices, identity fraud, gaze deviation, voice communication, and tab switching — while minimizing false positives. They also required integrated exam management with AI-powered question generation, scalable video meetings for virtual classrooms, and multi-tenant SaaS architecture to serve multiple institutions from a single deployment.",
                solution: "Designed and built ExamGuard, a full-stack microservices SaaS platform with three core services: a Spring Boot 3.2 API handling business logic, authentication, and LLM orchestration; a Python Flask AI service running YOLOv8 object detection, InsightFace face recognition, MediaPipe gaze tracking, and WebRTC VAD voice detection; and a React 19 frontend with real-time WebSocket communication. Implemented a 6-provider LLM failover chain (Claude → Gemini → Groq → Mistral → Cohere → Ollama) for AI question generation and answer grading. Built hybrid video meetings using LiveKit SFU for production (100+ participants) with P2P mesh fallback, featuring Google Meet-style grid/spotlight views. Added multi-tenant data isolation with per-org branding, SMTP configuration, and subscription billing via Stripe.",
                features: [
                    "YOLOv8 object detection across 15 COCO classes (phones, laptops, headphones, books) with adaptive confidence thresholds",
                    "InsightFace + MediaPipe face verification with multi-angle registration and cosine similarity matching",
                    "Per-student gaze calibration with 8 detection zones and cross-modal validation (phone + looking away = confirmed cheating)",
                    "Composite risk scoring (0-100) with temporal smoothing, auto-flagging at 65+ threshold, and liveness detection",
                    "6-provider LLM failover chain for AI question generation (MCQ, analytical, CQ) and automated answer grading",
                    "Hybrid LiveKit SFU / P2P mesh video meetings with Grid, Spotlight, and Pin view modes for 100+ participants",
                    "Real-time proctoring dashboard with live video grid, risk badges, bounding box overlays, and instant ban/unban",
                    "Dual camera support (desktop + mobile via QR code) with WebRTC streaming and auto-reconnect",
                    "Multi-tenant SaaS with per-org branding, SMTP, AI API keys, subscription plans, and Stripe billing",
                    "PDF integrity reports with risk distribution analysis, violation timelines, and screenshot evidence",
                    "VM/remote desktop detection via WebGL fingerprinting and hardware concurrency analysis",
                    "Automated email notifications: exam reminders, results, credentials, and custom teacher emails"
                ],
                challenges: [
                    { title: "Real-time AI Processing Pipeline", description: "Achieved 30-50ms frame analysis using ONNX Runtime with MPS acceleration on Apple Silicon. Implemented adaptive frame sending (500ms when suspicious, 2000ms when clean) to balance accuracy and bandwidth across concurrent exam sessions." },
                    { title: "False Positive Reduction", description: "Built an 8-zone spatial detection system with zone multipliers (1.8x for ear proximity), cross-modal validation between detection types, and 1-2.5 second temporal smoothing windows — reducing false alerts by 85% while maintaining detection accuracy." },
                    { title: "Scalable Video Meetings", description: "Evolved from mesh P2P (max 10 participants) to LiveKit SFU supporting 100+ concurrent users. Implemented hybrid auto-detection based on deployment context, with Google Meet-style Grid/Spotlight/Pin views and auto-spotlight on screen share." },
                    { title: "Multi-Tenant Data Isolation", description: "Designed organization-scoped repositories with thread-local tenant context, separate SMTP and LLM API key configurations per org, custom branding (logo, colors, favicon), and plan-based feature limits enforced at the service layer." },
                    { title: "LLM Provider Resilience", description: "Built a 6-provider cascading failover chain (Claude → Gemini → Groq → Mistral → Cohere → Ollama) with tenant-configurable API keys, automatic retry on failure, and AI status monitoring endpoint for provider health checks." },
                    { title: "Production Deployment", description: "Architected one-click VPS deployment with systemd services, Nginx reverse proxy with Let's Encrypt SSL, Docker-containerized LiveKit SFU, and automated database migrations — all orchestrated through a single deploy.sh script." }
                ],
                impact: [
                    { metric: "30-50ms", label: "AI Frame Analysis" },
                    { metric: "100+", label: "Meeting Participants" },
                    { metric: "85%", label: "False Positive Reduction" },
                    { metric: "6", label: "LLM Provider Failover" },
                    { metric: "35+", label: "Database Tables" },
                    { metric: "21", label: "API Controllers" }
                ],
                architecture: "Microservices architecture with three core services: React 19 + Tailwind CSS frontend with LiveKit client and Socket.IO for real-time communication; Spring Boot 3.2 API (21 controllers, 25+ services) with JPA/Hibernate, Spring Security JWT, WebFlux async calls, and LiveKit/Stripe SDK integrations; Python Flask AI service with YOLOv8, InsightFace, MediaPipe, and WebRTC VAD running on ONNX Runtime. MySQL 8.0 database with 35+ tables supporting full multi-tenant isolation. Nginx reverse proxy with Let's Encrypt SSL, Docker-containerized LiveKit SFU, and systemd process management.",
                duration: "6 months",
                role: "Full Stack Developer & ML Engineer",
                learnings: "End-to-end SaaS architecture design with multi-tenant data isolation, advanced computer vision pipeline optimization for real-time processing, building resilient LLM integrations with cascading failover, scaling WebRTC from P2P mesh to SFU architecture, and deploying production microservices with automated SSL, process management, and one-click deployment scripts."
            }
        },
        {
            id: "tour-wallet",
            title: "Tour Wallet - Group Expense Tracker",
            client: "Independent product",
            role: "Co-developer - 36 of 74 commits",
            resumeSummary: "React Native and Expo app with Firebase for group trip expenses: shared, partial, personal and IOU expense types, guest members without accounts, minimal-transfer settle-up, per-member PDF reports, push notifications, and offline WiFi Direct group voice calling built as a native Kotlin module.",
            description: "A group expense tracker for trips, built with Expo, TypeScript and Firebase. One person holds the cash and the fund is tracked as members contribute. Expenses come in four kinds: shared across everyone, partial across selected members (with the rest notified but not charged), personal and private, or an IOU where one person paid for another until it is settled. Guests can be added without accounts or contact details and still take part in splits and balances, with the admin recording contributions on their behalf and generating a per-member PDF to print and hand over. Settle-up computes a minimal set of transfers to clear all balances. Beyond expenses, the app includes push notifications through Expo and FCM, invite codes, a private personal budget, and a WiFi Direct group voice call for tour members that works with no internet or router.",
            technologies: ["React Native", "Expo", "TypeScript", "Firebase Auth", "Firestore", "Kotlin", "WiFi Direct", "Expo Push / FCM"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true,
            caseStudy: {
                problem: "On a group trip one person ends up paying for everything, and the accounting happens afterwards from memory and screenshots. Existing splitters assume every participant has an account, an internet connection and the patience to reconcile at the end.",
                solution: "Built the tracker around how trips actually run: one fund holder, members who may not have accounts, four kinds of expense including private ones, and a settle-up that proposes the fewest transfers rather than a balance table to interpret.",
                features: [
                    "Trips with an admin holding the fund; contributions tracked per member",
                    "Guest members with no account, phone or email, included in splits and balances",
                    "Four expense types: shared, partial with FYI notifications, personal and private, and IOU debt",
                    "Settle up with a greedy minimal-transfer suggestion to clear all balances",
                    "Per-member PDF reports for guests to be printed and handed over",
                    "Push notifications via Expo and FCM that arrive with the app closed",
                    "Invite codes to join a trip without searching for users",
                    "Group voice call over WiFi Direct with no internet, using a native Kotlin module"
                ],
                challenges: [
                    { title: "Members without accounts", description: "Requiring sign-up excludes exactly the people trips include: a driver, a relative, a friend who does not want another app. Guests exist as first-class members owned by the trip, with the admin acting on their behalf and a printed PDF as their record." },
                    { title: "Voice calls where there is no network", description: "On hill and coastal routes there is no data. Group calling uses WiFi Direct with a native Kotlin module streaming 20ms PCM frames at 16kHz, with acoustic echo cancellation and noise suppression, keyed by the trip invite code so only members can join." },
                    { title: "Telling people without charging them", description: "A partial expense concerns everyone socially but only some financially. Non-participants receive an informational notification rather than a charge, which kept the split honest without the group feeling excluded." }
                ],
                impact: [
                    { metric: "4", label: "Expense Types" },
                    { metric: "0", label: "Internet Needed For Group Call" },
                    { metric: "36/74", label: "Commits (Co-developer)" },
                    { metric: "16kHz", label: "Native Audio Streaming" }
                ],
                architecture: "Expo and React Native with TypeScript, Firebase Authentication and Firestore for data and sync, Expo Push over FCM for notifications, and a custom native Kotlin module for WiFi Direct discovery and real-time PCM audio using Android AudioRecord and AudioTrack with echo cancellation and noise suppression.",
                duration: "2026",
                role: "Co-developer (36 of 74 commits)",
                learnings: "Designing for people who are not users of the app, and how much product value sits in the last mile: printed reports, offline calling and notifications that arrive when the app is closed."
            }
        },
        {
            id: "nms",
            title: "NMS - VoIP Fleet Monitoring with HA",
            client: "BTCL (Telcobright deployment)",
            role: "Contributor - 27 of 101 commits",
            resumeSummary: "Quarkus and React monitoring system that probes a fleet of FreeSWITCH boxes and Linux VMs from outside the cluster, chosen over deploying Grafana. Runs seven identical instances behind haproxy with automatic preempting failover, measured at zero failed requests when the active node is killed and recovery in about 1 to 6 seconds.",
            description: "A deliberately small network monitoring system for the VoIP fleet: a Quarkus backend that probes FreeSWITCH servers and Linux VMs from outside the cluster, and a React and TypeScript dashboard embedded in the same deployment via Quinoa. It reports status, history and alerts over REST and server-sent events, with no Grafana, no Prometheus and no agent installed on the monitored hosts. High availability is provided by running seven identical copies behind haproxy, which routes to the highest-priority healthy instance and preempts back to the primary when it recovers. The only application change HA required was a whoami endpoint, which powers a served-by badge in the UI.",
            technologies: ["Quarkus", "Java", "React", "TypeScript", "Vite", "Quinoa", "haproxy", "Server-Sent Events", "FreeSWITCH"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: false,
            caseStudy: {
                problem: "The VoIP fleet needed monitoring, and the default answer was Grafana plus Prometheus plus exporters on every host. That meant agents on production switches, a metrics store to run, and a stack larger than the thing it was watching, to answer one question: is this box up and are its calls flowing.",
                solution: "Built a purpose-sized monitor that probes the fleet from outside rather than instrumenting from inside, then made the monitor itself highly available so the thing watching for outages does not become one.",
                features: [
                    "External probing of FreeSWITCH boxes and Linux VMs, with no agent installed on targets",
                    "Status engine with history and threshold-based alerting",
                    "React and TypeScript dashboard served by the same Quarkus process via Quinoa",
                    "Live updates over server-sent events rather than polling",
                    "Seven identical instances behind haproxy with priority-ordered health routing",
                    "Automatic failover with preemption back to the primary on recovery",
                    "Served-by badge in the UI, backed by a whoami endpoint, so operators can see which node answered"
                ],
                challenges: [
                    { title: "Monitoring that must not need monitoring", description: "A single-instance monitor is a single point of failure at exactly the wrong moment. HA was solved in infrastructure, haproxy in front of seven identical processes, rather than by writing clustering code into the application." },
                    { title: "Proving failover instead of assuming it", description: "The active node was killed under load and the result measured: zero failed requests, recovery within roughly one to six seconds, and automatic preemption when the primary came back." },
                    { title: "Choosing not to build", description: "The alternative keepalived and virtual IP design was written up and rejected in favour of haproxy, and the decision recorded in the repository so the next engineer inherits the reasoning rather than the argument." }
                ],
                impact: [
                    { metric: "0", label: "Failed Requests On Failover" },
                    { metric: "1-6s", label: "Recovery Time" },
                    { metric: "7", label: "Redundant Instances" },
                    { metric: "0", label: "Agents On Monitored Hosts" }
                ],
                architecture: "Quarkus backend running the probe scheduler, status engine, storage and a REST plus SSE API, with a React and TypeScript frontend built by Vite and embedded through Quinoa. Seven instances run on port 8090 across the fleet; haproxy fronts them on a single stable URL and routes by health and priority.",
                duration: "2026",
                role: "Contributor (27 of 101 commits)",
                learnings: "That high availability is often an infrastructure decision rather than an application one, and that a monitoring tool sized to the question beats a platform sized to the category."
            }
        },
        {
            id: "12",
            title: "Magic Call - Voice Changer Platform",
            description: "VoIP voice changer platform with real-time audio processing via C++ JNI native library. Features FreeSWITCH ESL integration for live call voice modification, multiple voice presets (male-to-female, robot, deep voice), user balance management with top-up system, voice purchase marketplace, call history tracking, and admin dashboard. Built with Spring Boot 3.2 backend, Next.js 16 frontend, and native C++ signal processing using Signalsmith Stretch library.",
            technologies: ["Spring Boot 3.2", "Next.js 16", "C++ JNI", "FreeSWITCH", "MySQL", "JWT", "Tailwind CSS", "Firebase"],
            githubUrl: "https://github.com/humayun2000444",
            liveUrl: "",
            image: "",
            excludeFromResume: true,
            featured: true,
            status: "featured",
            type: "production"
        },
        {
            id: "11",
            title: "FuelTracker BD - National Fuel Monitoring",
            description: "Web-based fuel distribution tracking and monitoring system built for Bangladesh's fuel crisis, enabling government and fuel pump organizations to track fuel distribution by vehicle registration and driving license. Features multi-role access control (Super Admin, Government, Fuel Station, Vehicle Owner), anti-hoarding system with daily quotas and cooldown periods, real-time fuel stock management, vehicle self-registration with NID/DL verification, role-specific dashboards with analytics, and BSP BRTA verification integration.",
            technologies: ["Next.js 16", "TypeScript", "Prisma ORM", "MySQL", "NextAuth.js", "Tailwind CSS", "Recharts"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            excludeFromResume: true,
            featured: true,
            status: "featured",
            type: "production",
            caseStudy: {
                problem: "Bangladesh's fuel crisis left vehicle owners facing 3-4 hour queues at fuel stations, with no system to prevent hoarding or ensure fair distribution. Government and fuel station operators lacked visibility into dispensing patterns, vehicle histories, and station stock levels.",
                solution: "Built FuelTracker BD, a full-stack Next.js 16 application with Prisma ORM and MySQL for real-time fuel distribution monitoring. Implemented multi-role access control (Super Admin, Government, Fuel Station, Vehicle Owner) with NextAuth.js JWT authentication. Designed an anti-hoarding system with configurable daily fuel quotas per vehicle type and cooldown periods between refueling. Added BSP BRTA verification for vehicle/license validation and real-time stock management with automatic deduction on dispensing.",
                features: [
                    "Multi-role access: Super Admin, Government, Fuel Station, Vehicle Owner with role-specific dashboards",
                    "Anti-hoarding: configurable daily quotas (Motorcycle 5L, Car 30L, Truck 150L) with cooldown enforcement",
                    "Vehicle tracking by registration number + driving license combination",
                    "Self-registration with NID, driving license, DOB, engine/chassis number verification",
                    "Fuel stock management with auto-deduction and insufficient stock prevention",
                    "BSP BRTA online verification integration for license validation",
                    "Role-specific analytics dashboards with Recharts visualizations",
                    "Login via email or phone with NextAuth.js JWT strategy"
                ],
                challenges: [
                    { title: "Anti-Hoarding Enforcement", description: "Implemented real-time quota and cooldown checks at dispensing time with configurable per-vehicle-type limits, preventing abuse while allowing legitimate refueling within policy bounds." },
                    { title: "Multi-Role Data Isolation", description: "Designed role-based access control where Government sees all stations, Fuel Stations manage their own stock, and Vehicle Owners view only their vehicles and fuel history." },
                    { title: "External Verification", description: "Integrated BSP BRTA verification API for driving license and vehicle registration validation using Cheerio web scraping and cookie-based session management." }
                ],
                impact: [
                    { metric: "4", label: "User Roles" },
                    { metric: "7", label: "Vehicle Types" },
                    { metric: "6", label: "Database Models" },
                    { metric: "Real-time", label: "Stock Tracking" }
                ],
                architecture: "Next.js 16 App Router with TypeScript, Prisma ORM with MariaDB adapter connecting to MySQL, NextAuth.js JWT authentication, Tailwind CSS styling, Recharts for analytics dashboards. RESTful API routes for all CRUD operations with middleware-based route protection.",
                duration: "1 week",
                role: "Full Stack Developer",
                learnings: "Building government-scale monitoring systems with Next.js 16, implementing complex business rules (quotas, cooldowns) at the database query level, integrating external verification APIs with session management, and designing role-based multi-tenant dashboards."
            }
        },
        {
            id: "4",
            title: "WebRTC Call Center",
            client: "BTCL, Cosmopolitan Communications Limited, Netron Solutions",
            resumeSummary: "Browser-based call centre on WebRTC: agents take and place calls with no desk phone, with queue handling, agent state and live call status on one screen.",
            description: "Browser-based call centre built on WebRTC: agents take and place calls from the browser with no desk phone, with queue handling, agent state and live call status on one screen.",
            technologies: ["WebRTC"],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: true
        },
        {
            id: "5",
            title: "NetronSolution WebRTC",
            description: "Enterprise-grade WebRTC communication solution with advanced features for video conferencing, screen sharing, and real-time collaboration.",
            technologies: ["WebRTC", "Janus", "Java"],
            githubUrl: "",
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
            description: "Build and operate carrier-grade telephony platforms for licensed operators.\nLead engineer on a multi-tenant hosted PBX on FusionPBX serving two telecom operators, BTCL and Cosmopolitan Communications Limited - extensions, IVR, call queues, ring groups, conference rooms, live call monitoring, browser softphone, CDR reporting and billing with invoice generation, across 24 management pages and three subscription tiers.\nSoftswitch on FreeSWITCH with a Java and Spring Boot ESL control plane carrying 5,000+ concurrent calls: least-cost routing, real-time prepaid and postpaid billing, CDR pipeline, SIP trunk management with health-checked failover, and a WebRTC gateway for browser calling.\nLead engineer on a multi-tenant contact centre CRM on FreeSWITCH and Odoo, where the call, the customer record and the appointment are one system rather than two an agent retypes between: browser softphone with screen pop, hold, transfer and wrap-up, one FreeSWITCH domain per company provisioned by API with rollback, appointment booking over IVR, SMS and WhatsApp in two languages, and agent, call and billing reporting. 36 screens across 9 industries, 5 companies on one deployment.\nWebRTC calling for browser and mobile clients using Janus and SIP.js, with coturn TURN over TLS on 443 so calls complete on networks that block VoIP media.\nDiagnose production faults from SIP traces and packet captures rather than guesswork - one-way audio, dropped calls, registration failures and NAT/firewall issues.\nDelivered corporate training as trainer: SIGTRAN over secure IPSec networks with SMSC, VHLR, VMSC and bulk SMS platform operations (10 days), and SBC hardware with the digital service platform for BTCL (5 days).\nStack: FreeSWITCH, FusionPBX, SIP, RTP, WebRTC, Janus, Java, Spring Boot, PostgreSQL, MySQL, Redis, Docker, Nginx, Linux."
        },
        {
            id: "2",
            company: "Netron Solutions",
            position: "Software Engineer",
            location: "United Arab Emirates · Remote",
            startDate: "Oct 2024",
            endDate: "Jan 2025",
            isCurrentRole: false,
            description: "Remote contract engagement alongside the Telcobright role.\nBuilt real-time communication features on the Janus WebRTC Gateway: signalling, peer connection handling and media routing for browser-based audio and video.\nStack: Janus, WebRTC, JavaScript, Java."
        },
        {
            id: "3",
            company: "City IT",
            position: "Web Designer & Front End Developer",
            location: "Dhaka, Bangladesh · Remote",
            startDate: "Feb 2021",
            endDate: "Jul 2023",
            isCurrentRole: false,
            description: "Part-time front-end role held while completing the BSc.\nBuilt and maintained responsive client websites and interfaces in HTML, CSS, JavaScript and ReactJS.\nStack: HTML5, CSS3, JavaScript, ReactJS, Bootstrap, WordPress."
        }
    ],
    education: [
        {
            id: "1",
            institution: "Daffodil Institute of IT (National University)",
            degree: "Bachelor of Science (BSc)",
            field: "Computer Science & Engineering",
            result: "CGPA: 3.20 out of 4",
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
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);

    // Add cursor styles
    const style = document.createElement('style');
    style.textContent = `
        .cursor-dot {
            width: 8px;
            height: 8px;
            background: var(--accent-blue);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10001;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease, background 0.2s ease;
        }
        .cursor-outline {
            width: 35px;
            height: 35px;
            border: 2px solid var(--accent-blue);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            opacity: 0.5;
            transition: transform 0.15s ease-out, opacity 0.2s ease, border-color 0.2s ease;
        }
        .cursor-dot.hover {
            transform: translate(-50%, -50%) scale(1.5);
            background: var(--accent-green);
        }
        .cursor-outline.hover {
            transform: translate(-50%, -50%) scale(1.5);
            border-color: var(--accent-green);
            opacity: 0.8;
        }
        @media (max-width: 768px) {
            .cursor-dot, .cursor-outline { display: none !important; }
        }
    `;
    document.head.appendChild(style);

    // Track mouse position with smooth follow
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop for smooth cursor movement
    function animateCursor() {
        // Dot follows closely
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        // Outline follows with more delay
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .card, .cursor-hover, input, textarea, [onclick]');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '0.5';
    });
}

// ==================== CODE RAIN BACKGROUND (SIMPLIFIED) ====================
function initCodeRain() {
    const codeRain = document.getElementById('code-rain');
    if (!codeRain) return;

    // Reduced columns for better performance
    const codeChars = '01{}[]<>=;:';
    const columnCount = Math.floor(window.innerWidth / 60); // Less columns

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'code-column';
        column.style.left = (i * 60) + 'px';
        column.style.animationDuration = (20 + Math.random() * 15) + 's'; // Slower
        column.style.animationDelay = (Math.random() * 5) + 's';

        let text = '';
        const charCount = Math.floor(5 + Math.random() * 10); // Less characters
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
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank"
                           class="glass-effect text-white p-2 rounded-lg hover:bg-white/20 transition-all group/btn cursor-hover">
                            <i class="fab fa-github text-lg group-hover/btn:scale-110 transition-transform"></i>
                        </a>` : ''}
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
                        ${project.client ? `<p class="text-xs text-gray-500 mb-2"><span class="text-gray-400 font-semibold">Client:</span> ${project.client}</p>` : ''}
                        ${project.role ? `<p class="text-xs text-gray-500 mb-2"><span class="text-gray-400 font-semibold">My role:</span> ${project.role}</p>` : ''}
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

                    ${project.liveUrl ? `
                        <div class="mb-3">
                            <a href="${project.liveUrl}" target="_blank" class="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all cursor-hover" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}cc); color: #fff; box-shadow: 0 4px 15px ${accentColor}40;">
                                <i class="fas fa-play-circle"></i>Live Demo
                                <i class="fas fa-external-link-alt text-xs opacity-70"></i>
                            </a>
                        </div>
                    ` : ''}

                    <div class="flex items-center justify-between pt-3 border-t border-white/10">
                        <div class="flex space-x-4">
                            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="text-gray-400 hover:text-white transition-colors font-medium text-sm cursor-hover">
                                <i class="fab fa-github mr-1"></i>Code
                            </a>` : ''}
                        </div>
                        <div class="flex space-x-3">
                            ${project.caseStudy ? `
                                <button onclick="openCaseStudyModal('${project.id}')" class="text-xs font-mono px-2 py-1 rounded transition-colors cursor-hover" style="background: ${accentColor}20; color: ${accentColor}; border: 1px solid ${accentColor}40;">
                                    <i class="fas fa-book-open mr-1"></i>Case Study
                                </button>
                            ` : ''}
                            <button onclick="toggleTechStack('${project.id}')" class="text-xs font-mono transition-colors cursor-hover" style="color: ${accentColor};">
                                <i class="fas fa-layer-group mr-1"></i>Stack
                            </button>
                        </div>
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

// Resume Download
function downloadResume() {
    const { personalInfo, skills, projects, experience, education } = portfolioData;

    // Build experience HTML
    let experienceHTML = '';
    experience.forEach(exp => {
        experienceHTML += '<div class="experience-item">';
        experienceHTML += '<div class="item-header"><div>';
        experienceHTML += '<span class="item-title">' + exp.position + '</span>';
        experienceHTML += '<span class="item-company"> — ' + exp.company + '</span>';
        experienceHTML += '</div>';
        experienceHTML += '<div class="item-meta">' + exp.startDate + ' - ' + (exp.isCurrentRole ? 'Present' : (exp.endDate || 'Present')) + '</div>';
        experienceHTML += '</div>';
        experienceHTML += '<div class="item-description">' + exp.description + '</div>';
        experienceHTML += '</div>';
    });

    // Build skills HTML
    let skillsHTML = '';
    skills.forEach(skill => {
        skillsHTML += '<span class="skill-tag">' + skill.name + '</span>';
    });

    // Build projects HTML
    let projectsHTML = '';
    projects.filter(p => p.featured && !p.excludeFromResume).forEach(project => {
        projectsHTML += '<div class="project-item">';
        projectsHTML += '<div class="item-title">' + project.title + '</div>';
        projectsHTML += '<div class="item-description">' + project.description.substring(0, 200) + '...</div>';
        projectsHTML += '<div style="margin-top: 5px; font-size: 11px; color: #2563eb;">';
        projectsHTML += 'Technologies: ' + project.technologies.slice(0, 6).join(', ');
        projectsHTML += '</div></div>';
    });

    // Build education HTML
    let educationHTML = '';
    education.forEach(edu => {
        educationHTML += '<div class="education-item">';
        educationHTML += '<div class="item-title">' + edu.degree + ' in ' + edu.field + '</div>';
        educationHTML += '<div class="item-company">' + edu.institution + '</div>';
        educationHTML += '<div class="item-meta">' + edu.startDate + ' - ' + edu.endDate + (edu.cgpa ? ' | CGPA: ' + edu.cgpa : '') + '</div>';
        educationHTML += '</div>';
    });

    const resumeHTML = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
'    <meta charset="UTF-8">' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
'    <title>' + personalInfo.name + ' - Resume</title>' +
'    <style>' +
'        * { margin: 0; padding: 0; box-sizing: border-box; }' +
'        body { font-family: Segoe UI, Arial, sans-serif; line-height: 1.5; color: #333; max-width: 800px; margin: 0 auto; padding: 30px; background: #fff; }' +
'        .header { text-align: center; margin-bottom: 25px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }' +
'        .name { font-size: 32px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }' +
'        .title { font-size: 18px; color: #4b5563; margin-bottom: 10px; }' +
'        .contact { font-size: 13px; color: #6b7280; }' +
'        .contact a { color: #2563eb; text-decoration: none; }' +
'        .section { margin-bottom: 22px; }' +
'        .section-title { font-size: 16px; font-weight: bold; color: #1e40af; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; text-transform: uppercase; }' +
'        .bio { font-size: 13px; line-height: 1.7; text-align: justify; }' +
'        .skills-list { display: flex; flex-wrap: wrap; gap: 8px; }' +
'        .skill-tag { font-size: 12px; padding: 4px 10px; background: #eff6ff; color: #1d4ed8; border-radius: 15px; display: inline-block; }' +
'        .experience-item, .education-item, .project-item { margin-bottom: 15px; }' +
'        .item-header { display: flex; justify-content: space-between; align-items: center; }' +
'        .item-title { font-size: 14px; font-weight: 600; color: #1f2937; }' +
'        .item-company { font-size: 13px; color: #4b5563; }' +
'        .item-meta { font-size: 12px; color: #6b7280; }' +
'        .item-description { font-size: 12px; margin-top: 5px; line-height: 1.6; color: #4b5563; }' +
'        @media print { body { padding: 15px; } }' +
'    </style>' +
'</head>' +
'<body>' +
'    <div class="header">' +
'        <div class="name">' + personalInfo.name + '</div>' +
'        <div class="title">' + personalInfo.title + ' at ' + personalInfo.company + '</div>' +
'        <div class="contact">' +
             personalInfo.email + ' | ' + personalInfo.phone + ' | ' + personalInfo.location + '<br>' +
'            <a href="' + personalInfo.linkedinUrl + '">LinkedIn</a> | <a href="' + personalInfo.githubUrl + '">GitHub</a>' +
'        </div>' +
'    </div>' +
'    <div class="section">' +
'        <div class="section-title">Professional Summary</div>' +
'        <p class="bio">' + personalInfo.bio + '</p>' +
'    </div>' +
'    <div class="section">' +
'        <div class="section-title">Professional Experience</div>' +
         experienceHTML +
'    </div>' +
'    <div class="section">' +
'        <div class="section-title">Technical Skills</div>' +
'        <div class="skills-list">' + skillsHTML + '</div>' +
'    </div>' +
'    <div class="section">' +
'        <div class="section-title">Featured Projects</div>' +
         projectsHTML +
'    </div>' +
'    <div class="section">' +
'        <div class="section-title">Education</div>' +
         educationHTML +
'    </div>' +
'</body>' +
'</html>';

    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = personalInfo.name.replace(/\s+/g, '_') + '_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

// Case Study Modal Functions
function openCaseStudyModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project || !project.caseStudy) return;

    const cs = project.caseStudy;

    // Title
    document.getElementById('cs-title').textContent = project.title;

    // Meta info
    document.getElementById('cs-meta').innerHTML = `
        <span><i class="fas fa-user mr-1"></i>${cs.role}</span>
        <span><i class="fas fa-clock mr-1"></i>${cs.duration}</span>
        ${project.client ? `<span><i class="fas fa-building mr-1"></i>${project.client}</span>` : ''}
    `;

    // Problem & Solution
    document.getElementById('cs-problem').textContent = cs.problem;
    document.getElementById('cs-solution').textContent = cs.solution;

    // Impact metrics
    document.getElementById('cs-impact').innerHTML = cs.impact.map(item => `
        <div class="text-center p-4 rounded-xl" style="background: var(--bg-tertiary);">
            <div class="text-2xl font-bold font-mono" style="color: var(--accent-green);">${item.metric}</div>
            <div class="text-xs text-gray-400 mt-1">${item.label}</div>
        </div>
    `).join('');

    // Features
    document.getElementById('cs-features').innerHTML = cs.features.map(feature => `
        <div class="flex items-start p-3 rounded-lg" style="background: var(--bg-tertiary);">
            <i class="fas fa-check text-xs mt-1 mr-3" style="color: var(--accent-green);"></i>
            <span class="text-sm text-gray-300">${feature}</span>
        </div>
    `).join('');

    // Challenges
    document.getElementById('cs-challenges').innerHTML = cs.challenges.map(challenge => `
        <div class="p-4 rounded-xl" style="background: var(--bg-tertiary);">
            <h4 class="text-sm font-semibold text-white mb-2">${challenge.title}</h4>
            <p class="text-xs text-gray-400">${challenge.description}</p>
        </div>
    `).join('');

    // Architecture
    document.getElementById('cs-architecture').textContent = cs.architecture;

    // Technologies
    document.getElementById('cs-technologies').innerHTML = project.technologies.map(tech => `
        <span class="px-3 py-1.5 rounded-lg text-xs font-mono" style="background: var(--accent-blue); color: var(--bg-primary);">${tech}</span>
    `).join('');

    // Learnings
    document.getElementById('cs-learnings').textContent = cs.learnings;

    // Links
    document.getElementById('cs-links').innerHTML = `
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-hover" style="background: var(--bg-tertiary); color: var(--text-primary);"><i class="fab fa-github mr-2"></i>View Source Code</a>` : ''}
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-hover" style="background: var(--accent-green); color: var(--bg-primary);"><i class="fas fa-external-link-alt mr-2"></i>Live Demo</a>` : ''}
    `;

    document.getElementById('case-study-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
    document.getElementById('case-study-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// Download Modal Functions
function showDownloadModal() {
    document.getElementById('download-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    document.getElementById('download-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// Generate Resume HTML Content
function getResumeHTML() {
    const { personalInfo, skills, projects, experience, education, achievements, certifications } = portfolioData;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.name} - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.5; color: #333; max-width: 800px; margin: 0 auto; padding: 30px; background: #fff; }
        .header { text-align: center; margin-bottom: 25px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
        .name { font-size: 32px; font-weight: bold; color: #1e40af; margin-bottom: 5px; letter-spacing: 1px; }
        .title { font-size: 18px; color: #4b5563; margin-bottom: 10px; font-weight: 500; }
        .contact { font-size: 13px; color: #6b7280; }
        .contact a { color: #2563eb; text-decoration: none; }
        .section { margin-bottom: 22px; }
        .section-title { font-size: 16px; font-weight: bold; color: #1e40af; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
        .bio { font-size: 13px; line-height: 1.7; text-align: justify; color: #374151; }
        .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag { font-size: 12px; padding: 4px 10px; background: #eff6ff; color: #1d4ed8; border-radius: 15px; font-weight: 500; }
        .experience-item, .education-item, .project-item { margin-bottom: 15px; }
        .item-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
        .item-title { font-size: 14px; font-weight: 600; color: #1f2937; }
        .item-company { font-size: 13px; color: #4b5563; font-weight: 500; }
        .item-meta { font-size: 12px; color: #6b7280; }
        .item-description { font-size: 12px; margin-top: 5px; line-height: 1.6; color: #4b5563; }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media print {
            body { padding: 15px; font-size: 11px; }
            .name { font-size: 26px; }
            .section-title { font-size: 14px; }
            .section { margin-bottom: 15px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title} at ${personalInfo.company}</div>
        <div class="contact">
            ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}<br>
            <a href="${personalInfo.linkedinUrl}">LinkedIn</a> | <a href="${personalInfo.githubUrl}">GitHub</a>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <p class="bio">${personalInfo.bio}</p>
    </div>

    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${experience.map(exp => `
            <div class="experience-item">
                <div class="item-header">
                    <div>
                        <span class="item-title">${exp.position}</span>
                        <span class="item-company"> — ${exp.company}</span>
                    </div>
                    <div class="item-meta">${exp.startDate} - ${exp.isCurrentRole ? 'Present' : (exp.endDate || 'Present')}</div>
                </div>
                <div class="item-description">${exp.description}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            ${skills.map(skill => `<span class="skill-tag">${skill.name}</span>`).join('')}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Featured Projects</div>
        ${projects.filter(p => p.featured && !p.excludeFromResume).map(project => `
            <div class="project-item">
                <div class="item-title">${project.title}</div>
                <div class="item-description">${project.description.substring(0, 250)}${project.description.length > 250 ? '...' : ''}</div>
                <div style="margin-top: 5px; font-size: 11px; color: #2563eb;">
                    Technologies: ${project.technologies.join(', ')}
                </div>
            </div>
        `).join('')}
    </div>

    <div class="two-column">
        <div class="section">
            <div class="section-title">Education</div>
            ${education.map(edu => `
                <div class="education-item">
                    <div class="item-title">${edu.degree}</div>
                    <div class="item-company">${edu.institution}</div>
                    <div class="item-meta">${edu.field} | ${edu.startDate} - ${edu.endDate}${edu.cgpa ? ` | CGPA: ${edu.cgpa}` : ''}</div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <div class="section-title">Achievements</div>
            ${achievements.slice(0, 4).map(ach => `
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 12px; font-weight: 600; color: #1f2937;">${ach.title}</div>
                    <div style="font-size: 11px; color: #6b7280;">${ach.year}</div>
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>`;
}

// Generate PDF using jsPDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const { personalInfo, skills, projects, experience, education, achievements } = portfolioData;

    let y = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;

    // Header
    doc.setFontSize(24);
    doc.setTextColor(30, 64, 175);
    doc.text(personalInfo.name, pageWidth / 2, y, { align: 'center' });
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99);
    doc.text(personalInfo.title + ' at ' + personalInfo.company, pageWidth / 2, y, { align: 'center' });
    y += 7;

    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128);
    doc.text(personalInfo.email + ' | ' + personalInfo.phone + ' | ' + personalInfo.location, pageWidth / 2, y, { align: 'center' });
    y += 12;

    // Line separator
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;

    // Professional Summary
    doc.setFontSize(12);
    doc.setTextColor(30, 64, 175);
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    y += 7;

    doc.setFontSize(10);
    doc.setTextColor(55, 65, 81);
    const bioLines = doc.splitTextToSize(personalInfo.bio, contentWidth);
    doc.text(bioLines, margin, y);
    y += bioLines.length * 5 + 8;

    // Experience
    doc.setFontSize(12);
    doc.setTextColor(30, 64, 175);
    doc.text('PROFESSIONAL EXPERIENCE', margin, y);
    y += 7;

    experience.forEach(exp => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
        doc.setFontSize(11);
        doc.setTextColor(31, 41, 55);
        doc.text(exp.position + ' — ' + exp.company, margin, y);

        doc.setFontSize(9);
        doc.setTextColor(107, 114, 128);
        const dateText = exp.startDate + ' - ' + (exp.isCurrentRole ? 'Present' : (exp.endDate || 'Present'));
        doc.text(dateText, pageWidth - margin, y, { align: 'right' });
        y += 5;

        doc.setFontSize(9);
        doc.setTextColor(75, 85, 99);
        const descLines = doc.splitTextToSize(exp.description, contentWidth);
        doc.text(descLines.slice(0, 3), margin, y);
        y += Math.min(descLines.length, 3) * 4 + 6;
    });

    // Skills
    if (y > 240) {
        doc.addPage();
        y = 20;
    }
    doc.setFontSize(12);
    doc.setTextColor(30, 64, 175);
    doc.text('TECHNICAL SKILLS', margin, y);
    y += 7;

    doc.setFontSize(9);
    doc.setTextColor(55, 65, 81);
    const skillsText = skills.map(s => s.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth);
    doc.text(skillLines, margin, y);
    y += skillLines.length * 4 + 8;

    // Education
    doc.setFontSize(12);
    doc.setTextColor(30, 64, 175);
    doc.text('EDUCATION', margin, y);
    y += 7;

    education.forEach(edu => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
        doc.setFontSize(10);
        doc.setTextColor(31, 41, 55);
        doc.text(edu.degree + ' in ' + edu.field, margin, y);
        y += 4;

        doc.setFontSize(9);
        doc.setTextColor(75, 85, 99);
        doc.text(edu.institution + ' | ' + edu.startDate + ' - ' + edu.endDate + (edu.cgpa ? ' | CGPA: ' + edu.cgpa : ''), margin, y);
        y += 6;
    });

    // Save PDF
    doc.save(personalInfo.name.replace(/\s+/g, '_') + '_Resume.pdf');
    closeDownloadModal();
}

// Generate DOCX (downloads as HTML that can be opened in Word)
function generateDOCX() {
    const htmlContent = getResumeHTML();
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = portfolioData.personalInfo.name.replace(/\s+/g, '_') + '_Resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    closeDownloadModal();
}

// Generate HTML
function generateHTML() {
    const htmlContent = getResumeHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = portfolioData.personalInfo.name.replace(/\s+/g, '_') + '_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    closeDownloadModal();
}