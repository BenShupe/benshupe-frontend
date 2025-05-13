#!/bin/bash

# === CONFIG ===
APP_DIR="C:\Users\bensh\workspace\benshupe-site"
DEPLOY_DIR="/var/www/benshupe.com"

echo "[*] Starting React + Vite deployment..."

# === 1. Build the Vite app ===
echo "[*] Building Vite app..."
cd "$APP_DIR" || { echo "[!] Failed to cd into $APP_DIR"; exit 1; }
npm run build || { echo "[!] Build failed"; exit 1; }

# === 2. Copy build files ===
echo "[*] Copying build files to $DEPLOY_DIR"
ssh pi "sudo rm -rf $DEPLOY_DIR/*"
scp -r dist/* pi:$DEPLOY_DIR

echo "[✓] Deployment complete. Check https://benshupe.com 🎉"
