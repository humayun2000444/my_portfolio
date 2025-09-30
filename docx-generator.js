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

    // Professional Summary
    children.push(createSectionHeader('Summary'));
    children.push(
        new Paragraph({
            text: personalInfo.bio,
            spacing: { after: 200 }
        })
    );

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

    // Education
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

    // Technical Skills
    children.push(createSectionHeader('Technical Skills'));
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

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

    // Projects
    children.push(createSectionHeader('Projects'));
    const featuredProjects = projects.filter(p => p.featured).slice(0, 5);
    featuredProjects.forEach((project) => {
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
                        text: `Technologies: ${project.technologies.join(', ')}`,
                        italics: true,
                        size: 20
                    })
                ],
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `• ${project.description}`,
                spacing: { after: 150, left: 200 }
            })
        );
    });

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
