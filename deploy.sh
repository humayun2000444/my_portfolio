#!/bin/bash

# ╔══════════════════════════════════════════════════════════╗
# ║  Portfolio — One-Click Deployment Script                 ║
# ║  Re-run anytime to deploy updates to production          ║
# ║                                                          ║
# ║  Usage:  ./deploy.sh                                     ║
# ╚══════════════════════════════════════════════════════════╝

set -e

# ─── CONFIG ───
SERVER_IP="163.227.239.199"
SERVER_USER="root"
SERVER_PASS='Takay1#$ane%%'
DOMAIN="humayunahmed.me"
APP_DIR="/opt/portfolio"

R='\033[0;31m' G='\033[0;32m' Y='\033[1;33m' C='\033[0;36m' B='\033[1m' N='\033[0m'

echo ""
echo -e "${C}╔══════════════════════════════════════════════╗${N}"
echo -e "${C}║${B}  Portfolio — Deploying to Production          ${C}║${N}"
echo -e "${C}║${N}  Server: ${SERVER_IP}                        ${C}║${N}"
echo -e "${C}║${N}  Domain: ${DOMAIN}                       ${C}║${N}"
echo -e "${C}╚══════════════════════════════════════════════╝${N}"
echo ""

run_remote() {
    sshpass -p "${SERVER_PASS}" ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "$1"
}

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"

# ─── Step 1: Upload files ───
echo -e "${C}[1/2]${N} Uploading to server..."
cd "${PROJ_DIR}"
tar czf /tmp/portfolio-deploy.tar.gz \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.claude' \
    --exclude='*.log' \
    .

sshpass -p "${SERVER_PASS}" scp -o StrictHostKeyChecking=no /tmp/portfolio-deploy.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/
rm -f /tmp/portfolio-deploy.tar.gz

run_remote "mkdir -p ${APP_DIR} && cd ${APP_DIR} && tar xzf /tmp/portfolio-deploy.tar.gz 2>/dev/null && rm -f /tmp/portfolio-deploy.tar.gz"
echo -e "  ${G}✓${N} Files uploaded"

# ─── Step 2: Verify ───
echo -e "${C}[2/2]${N} Verifying deployment..."
STATUS=$(run_remote "curl -sk https://${DOMAIN}/ -o /dev/null -w '%{http_code}'")
if [ "$STATUS" = "200" ]; then
    echo -e "  ${G}✓${N} Site is live"
else
    echo -e "  ${R}✗${N} Site returned HTTP ${STATUS}"
fi

# ─── Final status ───
echo ""
echo -e "${G}╔══════════════════════════════════════════════╗${N}"
echo -e "${G}║  ${B}Deployment Complete!${N}                        ${G}║${N}"
echo -e "${G}║                                              ║${N}"
echo -e "${G}║${N}  App: https://${DOMAIN}                  ${G}║${N}"
echo -e "${G}╚══════════════════════════════════════════════╝${N}"
