# ProDev Mobile Setup – Expo & React Native

## 📱 Project Overview

This project marks the beginning of mobile application development using **React Native** and the **Expo Framework**. Since mobile development typically requires more computational resources than web development, Expo is used to simplify development, testing, and deployment by allowing applications to run directly on physical devices.

---

## 🎯 Objectives

### 1. Expo Go Setup
- Set up **Expo Go** on a physical Android or iOS device.
- Understand why Expo Go is a cost-effective alternative to emulators.
- Document the setup process and any challenges faced.

### 2. First Mobile Application
- Scaffold a React Native application using the **Expo Router template**.
- Modify the default home screen.
- Run and test the application on a physical device.
- Observe and document the effects of resetting the project.

---

## 🛠 Prerequisites

Ensure the following tools are installed before starting:

- **Node.js (LTS version)**
- **Visual Studio Code (VS Code)** – Recommended IDE
- **Operating System:** macOS, Linux, or Windows
- **Expo Go App** installed on a physical device:
  - Android (Google Play Store)
  - iOS (Apple App Store)

---

## 🚀 Why Expo Go?

Mobile development typically relies on device emulators, which can be resource-intensive and difficult to maintain due to frequent device updates (e.g., multiple iPhone and Android models).

**Expo Go** solves this by:
- Allowing apps to run directly on physical devices
- Supporting both Android and iOS seamlessly
- Eliminating the need for heavy emulator setups
- Providing a faster development and testing workflow

---

## 📲 Installing Expo Go

1. Visit the official Expo Go page:  
   👉 https://expo.dev/go

2. Select the **latest SDK version**.

3. Install Expo Go:
   - **Android:** Google Play Store
   - **iOS:** Apple App Store

4. Open the Expo Go app on your device.

5. Create a new account or log in with an existing one.

### 📝 Setup Notes & Challenges
- QR code scanning worked smoothly on both Android and iOS.
- Network connectivity is important—both the development machine and mobile device must be on the same network.
- On some networks, firewall restrictions may prevent the app from loading.

---

## 🧱 Project Scaffolding

### Navigate to the Project Directory

```bash
cd prodev-mobile-setup

npx create-expo-app@latest .

npx expo start

npm run reset-project
