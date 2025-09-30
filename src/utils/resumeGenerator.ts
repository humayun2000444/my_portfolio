import { PortfolioData } from '../types';

export const generateResumeHTML = (data: PortfolioData): string => {
  const { personalInfo, skills, projects, experience, education } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${personalInfo.name} - Resume</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
            .name { font-size: 28px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
            .title { font-size: 18px; color: #6b7280; margin-bottom: 10px; }
            .contact { font-size: 14px; color: #6b7280; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 20px; font-weight: bold; color: #1e40af; margin-bottom: 15px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
            .bio { font-size: 14px; line-height: 1.8; text-align: justify; }
            .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
            .skill-category { margin-bottom: 15px; }
            .skill-category h4 { font-size: 16px; color: #374151; margin-bottom: 8px; }
            .skill-item { font-size: 14px; margin-bottom: 4px; display: flex; justify-content: space-between; }
            .skill-level { color: #3b82f6; font-weight: 500; }
            .experience-item, .education-item, .project-item { margin-bottom: 20px; }
            .item-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
            .item-title { font-size: 16px; font-weight: 600; color: #1f2937; }
            .item-meta { font-size: 14px; color: #6b7280; }
            .item-description { font-size: 14px; margin-top: 8px; line-height: 1.6; }
            .technologies { margin-top: 8px; }
            .tech-tag { display: inline-block; background: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-right: 5px; margin-bottom: 3px; }
            @media print { body { padding: 10px; font-size: 12px; } .name { font-size: 24px; } .section-title { font-size: 18px; } }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="name">${personalInfo.name}</div>
            <div class="title">${personalInfo.title}</div>
            <div class="contact">
                ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}
                ${personalInfo.company ? ` | ${personalInfo.company}` : ''}
            </div>
        </div>

        <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="bio">${personalInfo.bio}</div>
        </div>

        ${experience.length > 0 ? `
        <div class="section">
            <div class="section-title">Professional Experience</div>
            ${experience.map(exp => `
                <div class="experience-item">
                    <div class="item-header">
                        <div class="item-title">${exp.position} at ${exp.company}</div>
                        <div class="item-meta">${exp.startDate} - ${exp.isCurrentRole ? 'Present' : exp.endDate || 'Present'}</div>
                    </div>
                    <div class="item-description">${exp.description}</div>
                </div>
            `).join('')}
        </div>` : ''}

        <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
                ${Object.entries(
                    skills.reduce((acc, skill) => {
                        if (!acc[skill.category]) acc[skill.category] = [];
                        acc[skill.category].push(skill);
                        return acc;
                    }, {} as Record<string, typeof skills>)
                ).map(([category, categorySkills]) => `
                    <div class="skill-category">
                        <h4>${category}</h4>
                        ${categorySkills.map(skill => `
                            <div class="skill-item">
                                <span>${skill.name}</span>
                                <span class="skill-level">${skill.level}%</span>
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
                    <div class="item-header">
                        <div class="item-title">${project.title}</div>
                        <div class="item-meta">
                            <a href="${project.githubUrl}" target="_blank">GitHub</a>
                            ${project.liveUrl ? ` | <a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
                        </div>
                    </div>
                    <div class="item-description">${project.description}</div>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        ${education.length > 0 ? `
        <div class="section">
            <div class="section-title">Education</div>
            ${education.map(edu => `
                <div class="education-item">
                    <div class="item-header">
                        <div class="item-title">${edu.degree} in ${edu.field}</div>
                        <div class="item-meta">${edu.startDate} - ${edu.endDate}</div>
                    </div>
                    <div class="item-description">${edu.institution}</div>
                </div>
            `).join('')}
        </div>` : ''}
    </body>
    </html>
  `;
};

export const downloadResume = (data: PortfolioData) => {
  const htmlContent = generateResumeHTML(data);
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.personalInfo.name.replace(/\s+/g, '_')}_Resume.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};