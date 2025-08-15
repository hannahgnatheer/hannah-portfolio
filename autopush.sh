#!/bin/bash

while true
do
    git add .
    git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
    git push origin main
    echo "✅ Auto-pushed at $(date '+%Y-%m-%d %H:%M:%S')"
    sleep 3600  # wait 300 seconds = 5 minutes
done
