# 🧱 Architecture Overview

This document describes the high-level technical architecture of the Clothing E-Commerce Platform, including frontend, backend, database, and infrastructure components.

---

## 🔧 Tech Stack

| Layer    | Technology                           |
| -------- | ------------------------------------ |
| Frontend | Next.js, Tailwind CSS                |
| Backend  | Node.js (Express)                    |
| Database | PostgreSQL (via Supabase)            |
| Auth     | JWT + Supabase Auth (Google OAuth)   |
| Payments | Stripe                               |
| Hosting  | Vercel (frontend), Railway (backend) |
| CI/CD    | GitHub Actions                       |

---

## 🔄 System Diagram (Simplified)

[User Browser]
↓
[Next.js Frontend] ─────────────┐
↓ ↓
[API Layer (Express)] [Stripe Checkout]
↓ ↑
[PostgreSQL via Supabase] ←── Webhooks

---

## 🖥️ Frontend Architecture

- **Framework**: Next.js (using static + SSR rendering)
- **Styling**: Tailwind CSS
- **Routing**: File-based routing (`/pages`)
- **State Management**: Minimal (React Context + useState/localStorage)
- **Key Pages**:
  - `/` – Homepage
  - `/products` – Product grid with filters
  - `/product/[slug]` – Product details
  - `/cart` – Shopping cart
  - `/checkout` – Stripe integration
  - `/account` – User profile & orders

---

## 🛠️ Backend (API Layer)

- **Framework**: Express.js
- **Purpose**: Acts as a middle layer between frontend and database
- **Endpoints**:
  - `POST /api/login`
  - `GET /api/products`
  - `GET /api/product/:id`
  - `POST /api/cart`
  - `POST /api/checkout`
  - `POST /api/webhooks/stripe`
- **Security**:
  - Input validation (Zod or Joi)
  - Auth middleware for protected routes
  - Rate limiting via middleware

---

## 🗃️ Database Schema (PostgreSQL)

- **Tables**:

  - `users` – User accounts
  - `products` – Core product info
  - `variants` – Color/size combinations
  - `orders` – Purchase history
  - `cart_items` – Saved cart state
  - `designs` – Shared artwork for multiple products

- **ERD Tool**: [https://dbdiagram.io](https://dbdiagram.io)

---

## 🔐 Auth System

- **User Flow**:
  - Sign up / Login via Supabase
  - Social login (Google)
  - JWT stored in HTTP-only cookie
- **Middleware**:
  - Checks token on API requests
  - Guards private pages (account, orders)

---

## 💸 Payments & Checkout

- **Provider**: Stripe
- **Flow**:
  1. User clicks “Checkout”
  2. Frontend creates Stripe Checkout Session via API
  3. Stripe handles payment
  4. Webhook creates order in DB on success
- **Webhooks**:
  - `checkout.session.completed` triggers order creation

---

## 🚀 Deployment & CI/CD

- **Frontend**:
  - Vercel
  - Auto-deploy from `main` branch
- **Backend**:
  - Railway (Node.js server)
  - `.env` vars for Stripe, DB, JWT secret
- **CI**:
  - GitHub Actions
  - Lint + Test + Deploy jobs

---

## 📈 Monitoring & Logging

- **Frontend**:
  - Console logs
  - Performance metrics via Vercel Analytics
- **Backend**:
  - Logs from Railway dashboard
  - TODO: Integrate with Sentry or LogRocket for error reporting

---

## 🔮 Future Enhancements

- Multi-currency pricing
- Product reviews and ratings
- Inventory sync with supplier system
- Admin analytics dashboard
- AI-powered product recommendations

---

## 📌 Last Updated

July 18, 2025
