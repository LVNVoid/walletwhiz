# 💰 WalletWhiz

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</div>

<div align="center">
  <h3>🚀 A personal finance companion to help track, understand, and manage your spending smarter.</h3>
  
  [![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)
  [![GitHub issues](https://img.shields.io/github/issues/LVNVoid/walletwhiz)](https://github.com/LVNVoid/walletwhiz/issues)
  [![GitHub stars](https://img.shields.io/github/stars/LVNVoid/walletwhiz)](https://github.com/LVNVoid/walletwhiz/stargazers)
</div>

---

## ✨ Features and Functionality

### 🔐 **User Authentication**
- Secure sign-up and sign-in using **Clerk**
- Protected routes and user session management

### 📊 **Dashboard**
- 💳 Overview of current balance, total income, and total expenses
- 📈 Trend indicators to visualize financial health
- 📉 Interactive finance charts (monthly and weekly views)
- 🕐 Recent transactions list with quick actions

### 💸 **Transaction Management**
- ➕ Add new transactions with comprehensive details
- 📋 View all transactions in a sortable, filterable table
- ✏️ Edit existing transactions seamlessly
- 🗑️ Delete transactions with confirmation
- 🔍 Detailed transaction view with full information

### 📈 **Data Visualization**
- 📊 Interactive charts displaying income and expenses over time
- 📉 Statistics and trends to understand spending habits
- 🎯 Monthly and weekly financial insights

### 🎨 **Theming**
- 🌙 Toggle between light and dark themes
- Consistent design across all components

---

## 🛠️ Technology Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br>Next.js
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind CSS" />
<br>Tailwind CSS
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=postgres" width="48" height="48" alt="PostgreSQL" />
<br>PostgreSQL
</td>
</tr>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=prisma" width="48" height="48" alt="Prisma" />
<br>Prisma
</td>
<td align="center" width="96">
<img src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4" width="48" height="48" alt="Clerk" />
<br>Clerk
</td>
<td align="center" width="96">
<img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" width="48" height="48" alt="Zustand" />
<br>Zustand
</td>
<td align="center" width="96">
<img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" width="48" height="48" alt="React Hook Form" />
<br>React Hook Form
</td>
<td align="center" width="96">
<img src="https://raw.githubusercontent.com/colinhacks/zod/HEAD/logo.svg" width="48" height="48" alt="Zod" />
<br>Zod
</td>
</tr>
</table>

### 📚 **Core Technologies**
- **🔧 Next.js** - React framework for building server-rendered applications
- **⚛️ React** - JavaScript library for building user interfaces
- **📝 TypeScript** - Superset of JavaScript that adds static typing
- **🎨 Tailwind CSS** - Utility-first CSS framework

### 🔒 **Authentication & Database**
- **🛡️ Clerk** - Authentication and user management
- **🗄️ Prisma** - ORM for database access
- **🐘 PostgreSQL** - Relational database

### 📊 **State Management & UI**
- **🏪 Zustand** - Lightweight state management
- **📋 React Hook Form & Zod** - Form management and validation
- **📈 Recharts** - Beautiful charting library
- **🌐 Axios** - HTTP client for API requests
- **🎯 Lucide React** - Beautiful icon library
- **🧩 Radix UI Primitives** - Unstyled, accessible UI primitives
- **📅 react-day-picker** - Date picker component

---

## 🚀 Quick Start

### 📋 Prerequisites

- 📦 **Node.js** (v18 or higher)
- 📦 **npm** or **yarn**
- 🐘 **PostgreSQL** database
- 🔑 **Clerk** account and API keys

### 🔧 Installation

1. **📥 Clone the repository:**
   ```bash
   git clone https://github.com/LVNVoid/walletwhiz
   cd walletwhiz
   ```

2. **📦 Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **⚙️ Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="your_postgresql_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   
   # Application URLs
   NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"
   ```

   > 💡 **Configuration Guide:**
   > - `DATABASE_URL`: PostgreSQL connection string (e.g., `postgresql://user:password@host:port/database?schema=public`)
   > - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Found in your Clerk dashboard
   > - `CLERK_SECRET_KEY`: ⚠️ Keep this secure and never expose it publicly

4. **🗄️ Initialize database:**
   ```bash
   npx prisma migrate dev
   ```
   
   > If you encounter issues, install Prisma CLI globally:
   > ```bash
   > npm install -g prisma
   > ```

5. **🏃‍♂️ Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

🎉 **Your application is now running at** `http://localhost:3000`

---

## 📖 Usage Guide

### 1. 🔐 **Authentication**
- Navigate to your local application
- Click **"Get Started"** to create a new account
- Or sign in with existing credentials

### 2. 📊 **Dashboard Overview**
- View your financial summary at a glance
- Monitor income vs expenses trends
- Check recent transaction activity

### 3. 💸 **Managing Transactions**
- **Add:** Click "Add Transaction" and fill out the comprehensive form
- **Edit:** Use the dropdown menu in transaction rows to modify entries
- **Delete:** Remove transactions with confirmation prompts
- **View Details:** Click on any transaction for detailed information

### 4. 🎨 **Customization**
- Toggle between light and dark themes using the navbar switch
- Enjoy consistent theming across all application components

---

## 🔌 API Documentation

### 📡 **Transaction Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/transactions` | Create a new transaction |
| `GET` | `/api/transactions` | Retrieve all user transactions |
| `GET` | `/api/transactions/:id` | Get specific transaction |
| `PATCH` | `/api/transactions/:id` | Update transaction |
| `DELETE` | `/api/transactions/:id` | Delete transaction |
| `GET` | `/api/transactions/recent` | Get 5 most recent transactions |
| `GET` | `/api/transactions/stats` | Get monthly statistics |
| `GET` | `/api/transactions/stats/overview` | Get overview data (monthly/weekly) |

### 📝 **Request Examples**

**Create Transaction:**
```json
{
  "name": "Salary",
  "amount": 5000000,
  "description": "Monthly salary from ABC Company",
  "type": "income",
  "category": "Income",
  "transactionDate": "2024-01-01"
}
```

**Query Parameters:**
- `/api/transactions/stats/overview?mode=weekly` - Weekly overview
- `/api/transactions/stats/overview?mode=monthly` - Monthly overview

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a new branch for your feature
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. 💻 **Make** your changes
4. ✅ **Write** tests for your changes
5. 📤 **Submit** a pull request

### 🔍 **Development Guidelines**
- Follow TypeScript best practices
- Maintain consistent code formatting
- Write meaningful commit messages
- Update documentation when needed

---

## 📄 License

This project is **All Rights Reserved**. Please contact the repository owner for usage permissions.

---

## 📞 Support & Contact

- 🐛 **Issues**: [GitHub Issues](https://github.com/LVNVoid/walletwhiz/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/LVNVoid/walletwhiz/discussions)
- 📧 **Contact**: Repository owner through GitHub

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/LVNVoid">LVNVoid</a></p>
  
  ⭐ **Star this repository if you find it helpful!**
</div>
