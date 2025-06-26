# 💸 WalletWhiz

> A **personal finance companion** to help you track, understand, and manage your spending smarter, with rich visuals and delightful UI.

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-3E2EFF?logo=clerk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?logo=react&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF5A5F?logo=chart.js&logoColor=white)

---

## ✨ Features

- 🔐 **Secure Authentication** using [Clerk](https://clerk.dev)
- 📊 **Dynamic Dashboard** with:
  - Current balance, total income, total expenses
  - Visual trends and charts (weekly & monthly)
  - Recent transactions list
- 💼 **Transaction Management**:
  - Create, view, update, delete transactions
  - Categorized by type, category, and date
- 📈 **Data Visualization** with responsive charts
- 🌗 **Dark/Light Theme Toggle**
- 🧠 **State Management** using Zustand
- ⚡ Fast & Responsive UI

---

## 🛠️ Tech Stack

| Stack                                                                                                       | Description                             |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| ![Next.js](https://img.shields.io/badge/-Next.js-black?logo=next.js)                                        | React framework with App Router and SSR |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)              | Strongly-typed JavaScript               |
| ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)          | Utility-first CSS framework             |
| ![Clerk](https://img.shields.io/badge/-Clerk-3E2EFF?logo=clerk&logoColor=white)                             | Authentication and user management      |
| ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma)                                          | Type-safe ORM for PostgreSQL            |
| ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white)              | Relational database                     |
| ![Zustand](https://img.shields.io/badge/-Zustand-black?logo=react)                                          | Global state management                 |
| ![Recharts](https://img.shields.io/badge/-Recharts-FF5A5F?logo=chart.js)                                    | Chart library for visual data           |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white)                             | HTTP client                             |
| ![React Hook Form](https://img.shields.io/badge/-React_Hook_Form-EC5990?logo=reacthookform&logoColor=white) | Forms & validation                      |
| ![Zod](https://img.shields.io/badge/-Zod-3E82F7?logo=zod&logoColor=white)                                   | Schema validation                       |
| ![Lucide](https://img.shields.io/badge/-Lucide-000000?logo=lucide&logoColor=white)                          | Icon set for modern apps                |
| ![Radix UI](https://img.shields.io/badge/-Radix_UI-black?logo=radix-ui&logoColor=white)                     | Accessible UI primitives                |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js `v18+`
- npm or yarn
- PostgreSQL instance
- Clerk account and API keys

### 📥 Installation

```bash
git clone https://github.com/LVNVoid/walletwhiz
cd walletwhiz
npm install # or yarn
```

### 🔑 Configure Environment

Create a `.env.local` file and populate:

```env
DATABASE_URL="your_postgresql_connection_string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"
```

### 🛠️ Prisma Migrations

```bash
npx prisma migrate dev
```

### 🧪 Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

---

## 📚 Usage Guide

1. **Sign Up / Sign In**  
   Use the "Get Started" button on the home page.

2. **Dashboard**  
   View balance, income, expenses, trends, and recent transactions.

3. **Transactions**  
   Add, edit, or delete transactions via modals. View full details per entry.

4. **Theme Toggle**  
   Switch between dark/light mode via toggle in navbar.

---

## 📡 API Endpoints

| Method | Endpoint                                       | Description                 |
| ------ | ---------------------------------------------- | --------------------------- |
| POST   | `/api/transactions`                            | Create a new transaction    |
| GET    | `/api/transactions`                            | Get all user transactions   |
| GET    | `/api/transactions/:transactionId`             | Get transaction by ID       |
| PATCH  | `/api/transactions/:transactionId`             | Update transaction by ID    |
| DELETE | `/api/transactions/:transactionId`             | Delete transaction by ID    |
| GET    | `/api/transactions/recent`                     | Fetch last 5 transactions   |
| GET    | `/api/transactions/stats`                      | Monthly finance summary     |
| GET    | `/api/transactions/stats/overview?mode=weekly` | Trend data (weekly/monthly) |

---

## 🧑‍💻 Contributing

We welcome contributions!  
To contribute:

1. Fork this repo
2. Create a branch: `git checkout -b feat/amazing-feature`
3. Make your changes and commit: `git commit -m 'feat: add amazing feature'`
4. Push and submit a pull request

---

## 📄 License

Currently not licensed. All rights reserved.

---

## 📬 Contact

Feel free to open an [issue](https://github.com/LVNVoid/walletwhiz/issues) or contact me via GitHub for support or suggestions.
