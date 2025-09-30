@echo off
echo ========================================
echo   Portfolio Deployment to GitHub Pages
echo ========================================
echo.

echo [1/3] Adding all changes...
git add .

echo.
echo [2/3] Committing changes...
git commit -m "Update portfolio"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your portfolio is now updated on GitHub!
echo.
echo To enable GitHub Pages:
echo 1. Go to: https://github.com/humayun2000444/my_portfolio/settings/pages
echo 2. Under "Source", select "Deploy from a branch"
echo 3. Select branch: "main"
echo 4. Select folder: "/ (root)"
echo 5. Click "Save"
echo.
echo Your portfolio will be live at:
echo https://humayun2000444.github.io/my_portfolio/
echo.
pause
