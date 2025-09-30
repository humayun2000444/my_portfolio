# 🚀 Portfolio Deployment Guide

## GitHub Pages Deployment

Your portfolio is already on GitHub at: https://github.com/humayun2000444/my_portfolio

### 📝 Step-by-Step Deployment

#### 1. Enable GitHub Pages

1. Go to your repository settings:
   ```
   https://github.com/humayun2000444/my_portfolio/settings/pages
   ```

2. Under **"Build and deployment"** section:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
   - Click **"Save"**

3. Wait 1-2 minutes for deployment

4. Your portfolio will be live at:
   ```
   https://humayun2000444.github.io/my_portfolio/
   ```

#### 2. Quick Deploy Script

Use the deployment script for future updates:

```bash
# Windows
deploy.bat

# Or manually
git add .
git commit -m "Update portfolio"
git push origin main
```

#### 3. Verify Deployment

After pushing changes:
1. Go to: https://github.com/humayun2000444/my_portfolio/actions
2. Check the deployment status
3. Once complete (green checkmark), visit your live site

---

## 🌐 Your Live Portfolio URLs

- **Main Portfolio**: https://humayun2000444.github.io/my_portfolio/
- **Reset Page**: https://humayun2000444.github.io/my_portfolio/reset.html
- **GitHub Repo**: https://github.com/humayun2000444/my_portfolio

---

## 🔄 Auto-Update System

Your portfolio has auto-update features:

### Portfolio Data
All data is managed in `script.js`:
```javascript
let portfolioData = {
  personalInfo: { ... },
  skills: [ ... ],
  projects: [ ... ],
  experience: [ ... ],
  education: [ ... ],
  achievements: [ ... ]
}
```

### Resume Auto-Updates
The resume (PDF/DOCX) automatically pulls data from `portfolioData`:
- ✅ Personal information
- ✅ Experience
- ✅ Education
- ✅ Skills
- ✅ Projects (top 5)
- ✅ Achievements
- ✅ Coding profiles

**To update resume:**
1. Edit `script.js` → Update `portfolioData`
2. Run `deploy.bat` to push changes
3. Clear browser cache or visit reset page
4. Download updated resume

---

## 📦 Project Structure

```
portfolio-app/
├── index.html              # Main portfolio page
├── script.js               # Portfolio data & logic
├── pdf-generator.js        # PDF resume generator
├── docx-generator.js       # DOCX resume generator
├── reset.html              # Cache reset page
├── server.js               # Local development server
├── deploy.bat              # Deployment script
└── README_DEPLOYMENT.md    # This file
```

---

## 🛠️ Local Development

```bash
# Start local server
npm run dev

# Access at
http://localhost:3000
```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Test locally (npm run dev)
- [ ] Update portfolio data in script.js
- [ ] Test resume download (PDF/DOCX)
- [ ] Check all project descriptions
- [ ] Verify contact information
- [ ] Test on different browsers

After deploying:
- [ ] Verify GitHub Actions completed
- [ ] Visit live site and test all features
- [ ] Test resume downloads on live site
- [ ] Check mobile responsiveness
- [ ] Share your portfolio link!

---

## 🔗 Share Your Portfolio

Once live, share your portfolio:
- **LinkedIn**: Add to profile "Website" field
- **GitHub**: Add to repository description
- **Resume**: Include link in contact section
- **Email Signature**: Add portfolio link

---

## 📧 Support

For issues or questions:
- GitHub Issues: https://github.com/humayun2000444/my_portfolio/issues
- Email: humayun.ahmed917280@gmail.com

---

**Built with ❤️ by Humayun Ahmed**
