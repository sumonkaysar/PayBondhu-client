# 💸 PayBondhu — Frontend

**PayBondhu** is a **digital wallet web application** built using **React + TypeScript + Redux Toolkit + RTK Query + TailwindCSS**.  
It connects with the **[PayBondhu Backend API](https://pay-bondhu-server.vercel.app/api/v1)** and provides a seamless UI for **Users, Agents, and Admins** to manage **wallets, transactions, and approvals**.

---

## 🌐 Live Demo

[**PayBondhu App**](https://pay-bondhu.vercel.app/)

---

## 🔗 Backend API

Base URL: **https://pay-bondhu-server.vercel.app/api/v1**

Full Backend Documentation → [PayBondhu Backend](https://github.com/sumonkaysar/PayBondhu-server)

---

## 🚀 Features

### **For Users**

- 🔹 Register & Login
- 🔹 Add Money from Bank/Card
- 🔹 Send Money to Other Users
- 🔹 Cash-In from Agent & Cash-Out to Agent
- 🔹 View Wallet Balance
- 🔹 View Transaction History
- 🔹 Reset / Change Password

### **For Agents**

- 🔹 Register as Agent _(Admin Approval Required)_
- 🔹 Cash-In to Users
- 🔹 Cash-Out from Users
- 🔹 View Wallet Balance
- 🔹 View Transaction History

### **For Admins**

- 🔹 Dashboard Overview (Users, Agents, Transaction Volume & Count)
- 🔹 Manage Users (View, Block, Unblock)
- 🔹 Manage Agents (Approve, Suspend)
- 🔹 View All Transactions with Filters & Search
- 🔹 Adjust System Fees & Limits _(Optional)_
- 🔹 Admin Profile Management

---

## 🛠️ Technologies Used

- **React** + **TypeScript**
- **Redux Toolkit** + **RTK Query** (State Management & API Calls)
- **React Router** (Routing)
- **TailwindCSS** + **ShadCN/UI** (Styling & UI Components)
- **Recharts** (Analytics & Graphs)
- **Sonner** (Notifications)
- **React Hook Form + Zod** (Forms & Validation)
- **Axios** (API Calls when needed)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/sumonkaysar/PayBondhu-client.git
cd PayBondhu-client
```

### 2️⃣ Install Dependencies

```
bun install
```

### 3️⃣ Setup Environment Variables

Create a .env file in the project root:

```
VITE_API_URL=https://pay-bondhu-server.vercel.app/api/v1
```

### 4️⃣ Run the App

```
bun dev
```

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── redux/
├── utils/
└── main.tsx
```

---

## 🔑 User Roles & Test Credentials

- **Admin:**

  ```
  phoneNumber: 00000000000
  password: Admin123@
  ```

- **User:**

  ```
  User-1:
  phoneNumber: 01700000000
  password: Password123@
  ```

  ```
  User-2:
  phoneNumber: 01900000000
  password: Password123@
  ```

- **Agent:**

  ```
  phoneNumber: 01500000000
  password: Password123@
  ```

---

### ✍️ Author

**Sumon Kaysar** <br>
📧 sumon.kaysar.sk@gmail.com <br>
🌐 [Facebook](https://facebook.com/sumon.kaysar.sk) • [GitHub](https://github.com/sumonkaysar)

---
