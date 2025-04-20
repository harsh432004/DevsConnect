
# 🌟 InterestFusion

> 🤝 Connecting minds, bridging distances, fostering genuine connections.

[![GitHub license](https://img.shields.io/github/license/rishyym0927/InterestFusion)](https://github.com/rishyym0927/InterestFusion/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff69b4.svg)](https://github.com/rishyym0927/InterestFusion)

## 🎯 Mission
InterestFusion revolutionizes social connections in educational institutions by tackling loneliness and social isolation through interest-based matching. We create meaningful relationships by connecting people who share similar passions and hobbies.

<details>
<summary>📊 Key Features</summary>

- 🔐 **Secure Authentication**
  - OTP verification using Vonage API
  - Interest-based profile validation
  - SSN-verified connections

- 👤 **Smart Profiles**
  - Minimalistic data collection
  - Privacy-first approach
  - Interest tagging system

- 🤝 **Intelligent Matching**
  - Tree-based interest matching algorithm
  - Mutual consent system
  - Privacy-preserving notifications

- 🛡️ **Privacy & Security**
  - Profile sharing only after mutual confirmation
  - Minimal data collection
  - Encrypted communication channels
</details>

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= v14
MongoDB
npm or yarn
```

### 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/rishyym0927/InterestFusion.git
cd InterestFusion
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configurations
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

<details>
<summary>🌐 Environment Variables</summary>

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret
PORT=3000
```
</details>

## 🎯 Current Status & Roadmap

<details>
<summary>📈 Current Implementation</summary>

- ✅ Core user authentication and profile management
- ✅ Basic interest-based matching system
- ✅ OTP verification integration
- ✅ Privacy-focused profile sharing
</details>

<details>
<summary>🗺️ Future Roadmap</summary>

### Q1 2025
- 🔄 Enhanced matching algorithm implementation
- 🔐 Advanced security features
- 📱 Mobile responsive design

### Q2 2025
- 💬 Secure chat implementation
- 🚫 User blocking and reporting system
- 📊 Analytics dashboard

### Q3 2025
- 🌍 Multi-language support
- 🤖 AI-powered interest suggestions
- 📱 Mobile app development
</details>

## 🤝 Contributing

We welcome contributions! Check out our [Contributing Guidelines](CONTRIBUTING.md) to get started.

<details>
<summary>👥 How to Get Involved</summary>

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.
</details>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Special thanks to all contributors
- Built with ❤️ for educational institutions
- Powered by modern web technologies

---

<p align="center">
Made with ❤️ by the InterestFusion Team
</p>
```

And here's the detailed CONTRIBUTING.md:

```markdown
# 🤝 Contributing to InterestFusion

First off, thank you for considering contributing to InterestFusion! It's people like you that make InterestFusion such a great tool. 🌟

## 📝 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 📌 Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

### 🤝 Our Pledge

- 🎯 Foster an open and welcoming environment
- 👥 Respect all contributors, regardless of experience level
- 🤝 Accept constructive criticism gracefully
- 💡 Focus on what is best for the community

## 🚀 Getting Started

1. **Fork the Repository**
```bash
# Clone your fork
git clone https://github.com/your-username/InterestFusion.git

# Navigate to the project directory
cd InterestFusion

# Add upstream remote
git remote add upstream https://github.com/rishyym0927/InterestFusion.git
```

2. **Set Up Development Environment**
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

## 🔄 Pull Request Process

1. **Update Documentation**
   - Add comments to your code
   - Update README.md if needed
   - Add tests for new features

2. **Create Pull Request**
   - Fill out the PR template completely
   - Link relevant issues
   - Add screenshots if applicable

3. **Code Review**
   - Address reviewer comments
   - Keep discussions focused and professional
   - Be patient and responsive


## 👥 Community

### 🤝 Getting Help

- 💬 Join our [Discord server](https://discord.gg/interestfusion)
- 📫 Email us at support@interestfusion.com
- 🐛 Create an issue for bugs
- 💡 Start a discussion for feature ideas

### 🌟 Recognition

- All contributors will be added to our [Contributors](CONTRIBUTORS.md) list
- Outstanding contributions may be featured in our newsletter
- Regular contributors may be invited to join the core team

## 📊 Project Structure

```
InterestFusion/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── styles/
├── tests/
├── docs/
└── config/
```

Remember:
- 📝 Document your code
- ✅ Write tests
- 🔄 Keep your fork updated
- 💬 Ask questions when stuck

---

<p align="center">
Happy Contributing! 🎉
</p>
