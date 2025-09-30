// Google-Standard ATS-Friendly PDF Resume Generator
// ⚡ AUTO-UPDATES: This resume automatically uses latest data from portfolioData
// Any changes to portfolio (projects, experience, education, etc.) are reflected instantly
function downloadResumePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const { personalInfo, skills, projects, experience, education, achievements, problemSolvingProfiles } = portfolioData;

    let yPos = 15;
    const pageHeight = 280;
    const margin = 15;
    const lineHeight = 6;
    const maxWidth = 180;

    // Helper function to check page overflow
    function checkPageOverflow(additionalHeight = 10) {
        if (yPos + additionalHeight > pageHeight) {
            doc.addPage();
            yPos = 15;
        }
    }

    // Helper to add section header (Google style - simple, clean)
    function addSectionHeader(title) {
        checkPageOverflow(10);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text(title.toUpperCase(), margin, yPos);
        yPos += 2;
        doc.setLineWidth(0.3);
        doc.setDrawColor(0, 0, 0);
        doc.line(margin, yPos, 210 - margin, yPos);
        yPos += 6;
    }

    // Header - Google Style (Name prominent, contact info below)
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(personalInfo.name.toUpperCase(), 105, yPos, { align: 'center' });
    yPos += 7;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const contactLine1 = `${personalInfo.email} | ${personalInfo.phone}`;
    doc.text(contactLine1, 105, yPos, { align: 'center' });
    yPos += 4;

    const contactLine2 = personalInfo.address || personalInfo.location;
    doc.text(contactLine2, 105, yPos, { align: 'center' });
    yPos += 4;

    const contactLine3 = `LinkedIn: linkedin.com/in/humayun-ahmed775 | GitHub: github.com/humayun2000444`;
    doc.text(contactLine3, 105, yPos, { align: 'center' });
    yPos += 8;

    // Professional Summary - Google Style (Concise for quick scanning)
    addSectionHeader('Professional Summary');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    // Extract key points from bio (first 2-3 sentences)
    const bioSentences = personalInfo.bio.split('.').slice(0, 3).join('.') + '.';
    const shortBio = bioSentences.length > 300 ? bioSentences.substring(0, 300) + '...' : bioSentences;
    const bioLines = doc.splitTextToSize(shortBio, maxWidth);
    doc.text(bioLines, margin, yPos);
    yPos += bioLines.length * 5.5 + 2;

    // Add key highlights with bullet points for quick scanning
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Strengths:', margin, yPos);
    yPos += 5;

    doc.setFont('helvetica', 'normal');
    const highlights = [
        '• VoIP & Real-time Communication (FreeSWITCH, WebRTC, Janus, Socket.IO, Verto)',
        '• Full-stack Development (React.js, Spring Boot, Node.js)',
        '• Telecommunication Systems (Softswitch, PBX, Call Centers)',
        '• AI/ML Integration (YOLOv8, MediaPipe, Real-time Detection)'
    ];

    highlights.forEach(highlight => {
        checkPageOverflow(6);
        doc.text(highlight, margin + 3, yPos);
        yPos += 5;
    });
    yPos += 4;

    // Experience - Google Style (Position | Company | Dates on one line)
    addSectionHeader('Experience');

    if (experience && experience.length > 0) {
        experience.forEach((exp) => {
            checkPageOverflow(25);

            // Position and Company on one line, bold
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.text(`${exp.position} | ${exp.company}`, margin, yPos);
            yPos += 5;

            // Dates and Location, italics
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(9);
            doc.text(`${exp.startDate} - ${exp.isCurrentRole ? 'Present' : exp.endDate} | ${exp.location}`, margin, yPos);
            yPos += 5;

            // Description with bullet points
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            const descLines = doc.splitTextToSize(exp.description, maxWidth - 5);
            descLines.forEach(line => {
                checkPageOverflow(8);
                doc.text(`• ${line}`, margin + 3, yPos);
                yPos += lineHeight;
            });
            yPos += 3;
        });
    }

    // Education - Google Style
    addSectionHeader('Education');

    if (education && education.length > 0) {
        education.forEach((edu) => {
            checkPageOverflow(18);

            // Degree | Field, bold
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.text(`${edu.degree}, ${edu.field}`, margin, yPos);
            yPos += 5;

            // Institution, normal
            doc.setFont('helvetica', 'normal');
            doc.text(edu.institution, margin, yPos);
            yPos += 5;

            // Dates and Result, italics
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(9);
            doc.text(`${edu.startDate} - ${edu.endDate} | ${edu.result}`, margin, yPos);
            yPos += 6;
        });
    }

    // Technical Skills - Google Style (Category: skills in one line)
    addSectionHeader('Technical Skills');

    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    doc.setFontSize(10);
    Object.entries(skillsByCategory).forEach(([category, categorySkills]) => {
        checkPageOverflow(10);

        // Category name bold, skills normal
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        const categoryText = `${category}: `;
        const categoryWidth = doc.getTextWidth(categoryText);
        doc.text(categoryText, margin, yPos);

        doc.setFont('helvetica', 'normal');
        const skillsText = categorySkills.map(s => s.name).join(', ');
        const skillLines = doc.splitTextToSize(skillsText, maxWidth - categoryWidth);
        doc.text(skillLines[0], margin + categoryWidth, yPos);

        if (skillLines.length > 1) {
            yPos += lineHeight;
            for (let i = 1; i < skillLines.length; i++) {
                doc.text(skillLines[i], margin + categoryWidth, yPos);
                yPos += lineHeight;
            }
        }
        yPos += 6;
    });

    // Projects - Google Style (Shortened for HR scanning)
    addSectionHeader('Key Projects');

    const featuredProjects = projects.filter(p => p.featured).slice(0, 5);
    featuredProjects.forEach((project) => {
        checkPageOverflow(18);

        // Project Title, bold
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text(project.title, margin, yPos);
        yPos += 5;

        // Technologies, italics
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9);
        doc.text(`Tech Stack: ${project.technologies.slice(0, 6).join(', ')}`, margin, yPos);
        yPos += 5;

        // Description - Shortened to first 2 sentences or 150 chars
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        const shortDesc = project.description.split('.').slice(0, 2).join('.') + '.';
        const finalDesc = shortDesc.length > 200 ? shortDesc.substring(0, 200) + '...' : shortDesc;
        const descLines = doc.splitTextToSize(`• ${finalDesc}`, maxWidth - 5);
        descLines.forEach(line => {
            checkPageOverflow(7);
            doc.text(line, margin + 3, yPos);
            yPos += 5.5;
        });
        yPos += 2;
    });

    // Achievements & Awards - Google Style
    if (achievements && achievements.length > 0) {
        addSectionHeader('Achievements & Awards');

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);

        achievements.slice(0, 5).forEach((achievement) => {
            checkPageOverflow(8);
            doc.text(`• ${achievement.description} (${achievement.year})`, margin, yPos);
            yPos += lineHeight;
        });
        yPos += 3;
    }

    // Additional Information (Coding Profiles)
    if (problemSolvingProfiles && problemSolvingProfiles.length > 0) {
        addSectionHeader('Additional Information');

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Coding Profiles:', margin, yPos);
        yPos += 5;

        doc.setFont('helvetica', 'normal');
        problemSolvingProfiles.forEach(profile => {
            checkPageOverflow(8);
            doc.text(`• ${profile.platform}: ${profile.username}`, margin + 3, yPos);
            yPos += lineHeight;
        });
    }

    // Save PDF with Google-style format
    doc.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
}

// Replace the old downloadResume function
if (typeof downloadResume !== 'undefined') {
    window.downloadResume = downloadResumePDF;
} else {
    function downloadResume() {
        downloadResumePDF();
    }
}
