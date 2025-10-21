# Hussein Housh - Pentagon Strategy Landing Page

A professional Next.js landing page for Hussein Housh's coaching program featuring the Pentagon Strategy.

## Features

- 🎯 Arabic RTL support with Almarai font
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📊 Supabase integration for form submissions
- 📅 Calendly integration for consultation booking
- 🔒 Protected admin dashboard
- 📤 CSV export functionality

## Tech Stack

- Next.js 15.5.4
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Supabase
- Calendly

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=your_password
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` - Main landing page
- `/video` - Video viewing page with Calendly booking
- `/dashboard` - Admin dashboard (protected)

## Admin Dashboard

Access at `/dashboard` with credentials from `.env.local`
