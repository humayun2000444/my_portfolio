# Dynamic Portfolio Website

A modern, fully customizable portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio features an admin panel for easy content management, resume download functionality, and a responsive design.

## 🚀 Features

### Core Features
- **Responsive Design**: Looks great on all devices
- **Dynamic Content**: All content is customizable through the admin panel
- **Resume Download**: Generate and download resume as HTML
- **Image Upload**: Upload profile and project images
- **Data Export/Import**: Backup and restore your portfolio data
- **Smooth Animations**: Beautiful transitions and hover effects
- **Modern UI**: Clean, professional design with Tailwind CSS

### Admin Features
- **Edit Mode**: Toggle between view and edit modes
- **Profile Management**: Update personal information, bio, and contact details
- **Project Management**: Add, edit, and delete projects with images
- **Skills Management**: Manage technical skills with proficiency levels
- **Experience Timeline**: Add and manage work experience
- **Data Backup**: Export/import portfolio data as JSON

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms
- **Storage**: Browser localStorage for data persistence

## 🏗️ Project Structure

```
portfolio-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation and admin controls
│   │   ├── Hero.tsx        # Hero section with profile
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills management
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Contact.tsx     # Contact form and info
│   │   ├── AdminPanel.tsx  # Admin dashboard
│   │   └── Footer.tsx      # Footer component
│   ├── contexts/           # React contexts
│   │   └── PortfolioContext.tsx  # Global state management
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # All interfaces and types
│   ├── utils/              # Utility functions
│   │   ├── resumeGenerator.ts    # Resume HTML generation
│   │   └── imageHandler.ts       # Image upload utilities
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   cd portfolio-app
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

### Admin Access

1. Click the "Admin" button in the header
2. Click "Edit" to enter edit mode
3. Now you can:
   - Edit your profile information
   - Add/edit/delete projects
   - Manage skills and experience
   - Upload images
   - Export/import data

## 📝 Customization Guide

### Personal Information
Update your details in the Hero section when in edit mode:
- Name and title
- Profile photo
- Bio/description
- Contact information
- Social media links

### Projects
Add your projects with:
- Project title and description
- Technologies used
- GitHub and live demo links
- Project screenshots
- Featured project toggle

### Skills
Organize skills by categories:
- Frontend, Backend, Database, etc.
- Proficiency levels (0-100%)
- Add/remove skills as needed

### Experience
Add your work experience:
- Company and position
- Start/end dates
- Job description
- Current role indicator

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Your portfolio is live!

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Custom domain support available

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

### Option 4: Self-hosting
1. Build the project: `npm run build`
2. Upload the `build` folder to your web server
3. Configure your server to serve the files

## 🎨 Customization Tips

### Colors
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        500: '#your-color',
        600: '#your-color',
        // ... more shades
      }
    }
  }
}
```

### Typography
Change fonts in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
}
```

### Layout
Modify component layouts by editing the respective component files in `src/components/`.

## 📊 Data Management

### Export Data
Use the admin panel to export your portfolio data as JSON for backup.

### Import Data
Import previously exported JSON data to restore your portfolio.

### Local Storage
All data is automatically saved to browser localStorage, so your changes persist between sessions.

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed
2. **Images Not Loading**: Check image file sizes (max 5MB)
3. **Data Not Saving**: Check browser localStorage is enabled
4. **Styling Issues**: Clear browser cache and rebuild

### Getting Help

1. Check the browser console for error messages
2. Ensure all required fields are filled
3. Try refreshing the page
4. Clear localStorage and start fresh if needed

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

---

**Happy coding! 🚀**