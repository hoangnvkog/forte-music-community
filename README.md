# Forte Music Community

A beautiful, modern website for a real-world Piano-focused music community.

## 🎹 Overview

Forte Music Community is a digital home for a real-world music community where Piano is the primary musical focus. This MVP website answers four simple questions:

1. What is Forte Music Community?
2. What activities/events are happening?
3. Who are the members?
4. What has the community been doing?

## ✨ Features

- **Home**: Elegant landing page with hero section, upcoming events, community preview, gallery preview
- **Events**: Listing of upcoming and past events with detailed views
- **Members**: Member directory with individual profiles
- **Gallery**: Responsive grid showcasing community moments
- **About**: Information about the community's story, activities, and values
- **Join Community CTA**: Clear call-to-action linking to external registration form

## 🛠️ Tech Stack

- **Frontend**: Next.js 16.3.4, React 19, TypeScript, Tailwind CSS
- **Backend/Data**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Forms**: External registration (Google Forms/Tally recommended for MVP)

## 📁 Project Structure

```
forte-music-community/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── about/                # About page
│   │   ├── events/               # Events listing
│   │   │   └── [slug]/           # Individual event detail
│   │   ├── members/              # Members listing
│   │   │   └── [slug]/           # Individual member profile
│   │   └── gallery/              # Gallery listing
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── home/                 # Homepage sections
│   │   ├── events/               # Event cards
│   │   ├── members/              # Member cards
│   │   ├── gallery/              # Gallery grid
│   │   └── ui/                   # Reusable UI components
│   └── lib/
│       ├── supabase/             # Supabase client setup
│       └── data/                 # Data types and helpers
├── supabase/
│   └── migrations/               # Database schema
├── public/                       # Static assets
├── .env.example                  # Environment variables template
└── package.json
```

## 🗄️ Database Schema

### Members Table
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
slug TEXT UNIQUE NOT NULL
name TEXT NOT NULL
avatar_url TEXT
short_bio TEXT
piano_level TEXT
favorite_artists TEXT
favorite_genres TEXT
instagram_url TEXT
facebook_url TEXT
youtube_url TEXT
joined_at DATE
published BOOLEAN DEFAULT true
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
```

### Events Table
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
slug TEXT UNIQUE NOT NULL
title TEXT NOT NULL
description TEXT
event_date DATE NOT NULL
start_time TIME
end_time TIME
location TEXT
cover_image_url TEXT
registration_url TEXT
status TEXT NOT NULL DEFAULT 'upcoming'
published BOOLEAN DEFAULT true
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
```

### Gallery Table
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
event_id UUID REFERENCES events(id) ON DELETE SET NULL
title TEXT
image_url TEXT NOT NULL
display_order INTEGER DEFAULT 0
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
```

Row Level Security is enabled to ensure anonymous users can only read published content.

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd forte-music-community
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual Supabase URL and anon key.

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the migration in `supabase/migrations/001_initial_schema.sql`
   - Optionally add seed data (see below)

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🌱 Seed Data

For development, you can insert sample data into your Supabase database:

```sql
-- Sample members
INSERT INTO members (slug, name, short_bio, piano_level, favorite_artists, favorite_genres, joined_at, published) VALUES
('demo-member-one', 'Demo Member One', 'Piano Enthusiast · Classical & Jazz', 'Intermediate', 'Ludwig van Beethoven, Frédéric Chopin', 'Classical, Jazz', '2026-01-15', true),
('demo-member-two', 'Demo Member Two', 'Piano Teacher · Baroque & Romantic', 'Advanced', 'Johann Sebastian Bach, Franz Liszt', 'Baroque, Romantic', '2026-02-20', true),
('demo-member-three', 'Demo Member Three', 'Accompanist · Contemporary & Improv', 'Beginner', 'Claude Debussy, Bill Evans', 'Contemporary, Jazz', '2026-03-10', true);

-- Sample events
INSERT INTO events (slug, title, description, event_date, start_time, end_time, location, status, published) VALUES
('demo-piano-gathering', 'Demo Piano Gathering', 'Join us for an evening of piano music and community connection.', '2026-09-15', '19:00:00', '21:30:00', 'Community Hall', 'upcoming', true),
('demo-piano-workshop', 'Demo Piano Workshop', 'Learn new techniques and share your piano journey with others.', '2026-09-22', '14:00:00', '17:00:00', 'Music Studio', 'upcoming', true),
('community-meetup', 'Community Meetup', 'A casual gathering to play music and connect with fellow members.', '2026-10-05', '18:30:00', '20:30:00', 'Local Park', 'upcoming', true);

-- Sample gallery items
INSERT INTO gallery (event_id, title, image_url, display_order, published) VALUES
(1, 'Piano Gathering #12', '/placeholder-gallery-1.jpg', 0, true),
(2, 'Piano Night #11', '/placeholder-gallery-2.jpg', 1, true),
(3, 'Workshop #10', '/placeholder-gallery-3.jpg', 2, true),
(4, 'Community Meetup', '/placeholder-gallery-4.jpg', 3, true);
```

## 🚀 Deployment to Vercel

1. Push your repository to GitHub
2. Import the project into Vercel
3. Add the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_JOIN_URL`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
   - `NEXT_PUBLIC_FACEBOOK_URL`
   - `NEXT_PUBLIC_YOUTUBE_URL`
4. Deploy!

## 📝 Content Management Strategy

For this MVP, we do NOT build an admin panel. Instead:

1. **Supabase Dashboard serves as the CMS**
2. Administrators can manually insert/edit data through Supabase Dashboard:
   - events
   - members
   - gallery
3. The website automatically reads published records
4. To update content, simply log into Supabase Dashboard and modify the relevant tables

## 🎨 Design Guidelines

- **Visual Identity**: Piano, Elegant, Warm, Contemporary, Minimal, Premium, Community-oriented
- **Color Palette**: Off-white/warm neutral background, black/charcoal typography, subtle gold/warm accents
- **Typography**: Elegant, highly readable with strong visual hierarchy
- **Layout**: Generous whitespace, high-quality photography, subtle borders, restrained shadows
- **Components**: Reusable design system with Tailwind utility classes

## 📱 Responsiveness

The website is fully responsive and tested on:
- Mobile: 375px, 390px
- Tablet: 768px
- Desktop/Laptop: 1280px+

Navigation remains usable on all screen sizes, and the gallery maintains visual appeal on mobile devices.

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard-accessible navigation
- Visible focus states
- Sufficient color contrast
- Correct use of buttons vs. links

## 🚫 What's Out of Scope (MVP)

To maintain simplicity and focus:
- No social feed, likes, followers
- No chat, notifications, direct messaging
- No complex user accounts or authentication
- No practice tracker or AI features
- No online courses or payment systems
- No marketplace or complicated CMS
- No admin dashboard (using Supabase Dashboard instead)
- No mobile application (responsive web only)

## 🔒 Security

- Only public Supabase environment variables are exposed client-side
- Row Level Security ensures anonymous users can only SELECT published content
- No INSERT/UPDATE/DELETE permissions for anonymous users
- No exposure of Supabase service role key or private credentials
- No private member information is exposed publicly

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Development

Available npm scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- The build process includes TypeScript checking

## 🎯 Completion Criteria

This MVP is considered complete when:
1. ✅ Website is visually coherent and feels like a real Piano community
2. ✅ All five main sections work (Home, Events, Members, Gallery, About)
3. ✅ All routes function correctly
4. ✅ Supabase schema exists and is properly configured
5. ✅ Data access works correctly
6. ✅ Demo data renders properly
7. ✅ Responsive layout works on all device sizes
8. ✅ Build passes with no errors
9. ✅ Comprehensive README exists
10. ✅ Vercel deployment instructions are documented

