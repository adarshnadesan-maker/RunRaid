# Comprehensive APK Building Guide for RunRaid Using Capacitor

This document provides a step-by-step guide to building an APK for the RunRaid app using Capacitor. Follow these instructions carefully to ensure a successful build.

## Prerequisites
Before you start, make sure you have the following installed on your system:
- Node.js (LTS version recommended)
- npm (Node Package Manager)
- Java Development Kit (JDK) 8 or higher
- Android Studio

## Step 1: Setting Up Your Project
1. **Install Capacitor**: If you haven't already, create a new project using Capacitor. You can do this by running:
   ```bash
   npm init @capacitor/app
   ```
   Follow the prompts to set up your project.

2. **Add Android Platform**: Navigate to your project directory and add the Android platform:
   ```bash
   cd your-project-name
   npx cap add android
   ```

## Step 2: Configuring Your Project
1. **Update `capacitor.config.ts`**: Open the `capacitor.config.ts` file and ensure it includes your app's information:
   ```typescript
   const config: CapacitorConfig = {
     appId: 'com.example.runraid',
     appName: 'RunRaid',
     webDir: 'www',
     bundledWebRuntime: false
   };
   export default config;
   ```

2. **Configure Android Settings**: Open the `android/app/build.gradle` file to configure build settings. Here is an example configuration:
   ```gradle
   android {
       compileSdkVersion 31
       defaultConfig {
           applicationId "com.example.runraid"
           minSdkVersion 21
           targetSdkVersion 31
           versionCode 1
           versionName "1.0"
           // other configurations
       }
   }
   ```

## Step 3: Building the APK
1. **Sync Project with Gradle Files**: Open your project in Android Studio and click on **Sync Project with Gradle Files** to ensure all dependencies are resolved.

2. **Build the APK**: You can build the APK by going to the **Build** menu and selecting **Build Bundle(s) / APK(s) > Build APK(s)**. After the build is complete, you will see a notification that allows you to explore the APK file.

## Step 4: Testing the APK
1. **Test on an Emulator**: You can run your APK on an Android Emulator.
2. **Install on a Device**: Transfer the APK to your Android device and install it. Ensure that you have enabled installation from unknown sources in your device settings.

## Step 5: Troubleshooting Common Issues
- If you encounter build errors, check the **Gradle console** for details.
- Make sure all your dependencies are correctly specified in the `build.gradle` files.
- Ensure that your JDK version is compatible with the Android version you are targeting.

## Conclusion
By following this guide, you should be able to successfully build an APK for the RunRaid app using Capacitor. For further information and advanced configurations, refer to the [Capacitor documentation](https://capacitorjs.com/docs).
