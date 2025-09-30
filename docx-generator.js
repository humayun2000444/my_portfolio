// Google-Standard DOCX Resume Generator
// ⚡ AUTO-UPDATES: This resume automatically uses latest data from portfolioData
// Any changes to portfolio (projects, experience, education, etc.) are reflected instantly
async function downloadResumeDOCX() {
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } = docx;
    const { personalInfo, skills, projects, experience, education, achievements, problemSolvingProfiles } = portfolioData;

    const children = [];

    // Header - Name and Contact
    children.push(
        new Paragraph({
            text: personalInfo.name.toUpperCase(),
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${personalInfo.email} | ${personalInfo.phone}`,
                    size: 20
                })
            ],
            spacing: { after: 50 }
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: personalInfo.address || personalInfo.location,
                    size: 20
                })
            ],
            spacing: { after: 50 }
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `LinkedIn: linkedin.com/in/humayun-ahmed775 | GitHub: github.com/humayun2000444`,
                    size: 20
                })
            ],
            spacing: { after: 300 }
        })
    );

    // Helper function to create section header
    function createSectionHeader(title) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: title.toUpperCase(),
                    bold: true,
                    size: 24,
                    underline: { type: UnderlineType.SINGLE }
                })
            ],
            spacing: { before: 200, after: 150 }
        });
    }

    // Professional Summary (Concise for HR scanning)
    children.push(createSectionHeader('Professional Summary'));

    // Shortened bio for quick reading
    const bioSentences = personalInfo.bio.split('.').slice(0, 3).join('.') + '.';
    const shortBio = bioSentences.length > 300 ? bioSentences.substring(0, 300) + '...' : bioSentences;

    children.push(
        new Paragraph({
            text: shortBio,
            spacing: { after: 150 }
        })
    );

    // Key Strengths for quick scanning
    children.push(
        new Paragraph({
            children: [
                new TextRun({
                    text: 'Key Strengths:',
                    bold: true
                })
            ],
            spacing: { after: 100 }
        })
    );

    const highlights = [
        'VoIP & Real-time Communication (FreeSWITCH, WebRTC, Janus, Socket.IO, Verto)',
        'Full-stack Development (React.js, Spring Boot, Node.js)',
        'Telecommunication Systems (Softswitch, PBX, Call Centers)',
        'AI/ML Integration (YOLOv8, MediaPipe, Real-time Detection)'
    ];

    highlights.forEach(highlight => {
        children.push(
            new Paragraph({
                text: `• ${highlight}`,
                spacing: { after: 80, left: 200 }
            })
        );
    });

    children.push(new Paragraph({ text: '', spacing: { after: 100 } }));

    // Experience
    children.push(createSectionHeader('Experience'));
    if (experience && experience.length > 0) {
        experience.forEach((exp) => {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${exp.position} | ${exp.company}`,
                            bold: true,
                            size: 22
                        })
                    ],
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${exp.startDate} - ${exp.isCurrentRole ? 'Present' : exp.endDate} | ${exp.location}`,
                            italics: true,
                            size: 20
                        })
                    ],
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `• ${exp.description}`,
                    spacing: { after: 150, left: 200 }
                })
            );
        });
    }

    // Projects (Shortened for HR scanning) - MOVED UP
    children.push(createSectionHeader('Key Projects'));
    const featuredProjects = projects.filter(p => p.featured).slice(0, 5);
    featuredProjects.forEach((project) => {
        // Shorten description to first 2 sentences
        const shortDesc = project.description.split('.').slice(0, 2).join('.') + '.';
        const finalDesc = shortDesc.length > 200 ? shortDesc.substring(0, 200) + '...' : shortDesc;

        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: project.title,
                        bold: true,
                        size: 22
                    })
                ],
                spacing: { after: 100 }
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `Tech Stack: ${project.technologies.slice(0, 6).join(', ')}`,
                        italics: true,
                        size: 20
                    })
                ],
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `• ${finalDesc}`,
                spacing: { after: 150, left: 200 }
            })
        );
    });

    // Technical Skills
    children.push(createSectionHeader('Technical Skills'));
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});;

    Object.entries(skillsByCategory).forEach(([category, categorySkills]) => {
        const skillsText = categorySkills.map(s => s.name).join(', ');
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `${category}: `,
                        bold: true
                    }),
                    new TextRun({
                        text: skillsText
                    })
                ],
                spacing: { after: 100 }
            })
        );
    });

    // Education - MOVED AFTER SKILLS
    children.push(createSectionHeader('Education'));
    if (education && education.length > 0) {
        education.forEach((edu) => {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${edu.degree}, ${edu.field}`,
                            bold: true,
                            size: 22
                        })
                    ],
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: edu.institution,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${edu.startDate} - ${edu.endDate} | ${edu.result}`,
                            italics: true,
                            size: 20
                        })
                    ],
                    spacing: { after: 150 }
                })
            );
        });
    }

    // Achievements
    if (achievements && achievements.length > 0) {
        children.push(createSectionHeader('Achievements & Awards'));
        achievements.slice(0, 5).forEach((achievement) => {
            children.push(
                new Paragraph({
                    text: `• ${achievement.description} (${achievement.year})`,
                    spacing: { after: 100, left: 200 }
                })
            );
        });
    }

    // Additional Information
    if (problemSolvingProfiles && problemSolvingProfiles.length > 0) {
        children.push(createSectionHeader('Additional Information'));
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: 'Coding Profiles:',
                        bold: true
                    })
                ],
                spacing: { after: 100 }
            })
        );
        problemSolvingProfiles.forEach((profile) => {
            children.push(
                new Paragraph({
                    text: `• ${profile.platform}: ${profile.username}`,
                    spacing: { after: 100, left: 200 }
                })
            );
        });
    }

    // Create document
    const doc = new Document({
        sections: [{
            properties: {},
            children: children
        }]
    });

    // Generate and download
    try {
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `${personalInfo.name.replace(/\s+/g, '_')}_Resume.docx`);
        closeDownloadModal();
    } catch (error) {
        console.error('Error generating DOCX:', error);
        alert('Error generating DOCX file. Please try again.');
    }
}

// Modal control functions
function showDownloadModal() {
    document.getElementById('download-modal').classList.remove('hidden');
}

function closeDownloadModal() {
    document.getElementById('download-modal').classList.add('hidden');
}

// Override PDF download to close modal
const originalDownloadPDF = downloadResumePDF;
window.downloadResumePDF = function() {
    originalDownloadPDF();
    closeDownloadModal();
};
