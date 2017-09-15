#!/bin/sh

# Kill apps
sudo pm2 delete webmail || true

# Removes all files from project folder ignoring node_modules
# sudo find /var/www/webmail/ -maxdepth 1 -not -name 'node_modules' -exec rm -R {} \; || true

# Removes the project folder
sudo rm -rf /var/www/webmail

# Creates the project folder
sudo mkdir -p /var/www/webmail
