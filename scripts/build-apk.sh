#!/bin/bash

# Navigate to the project directory
cd /path/to/RunRaid

# Install npm dependencies
npm install

# Build the project
npm run build

# Sync Capacitor
npx cap sync

# Build the APK using Gradle
cd android
./gradlew assembleDebug
