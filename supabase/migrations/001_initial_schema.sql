-- Members table
create table members (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  avatar_url text,
  short_bio text,
  piano_level text,
  favorite_artists text,
  favorite_genres text,
  instagram_url text,
  facebook_url text,
  youtube_url text,
  joined_at date,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Events table
create table events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  event_date date not null,
  start_time time,
  end_time time,
  location text,
  cover_image_url text,
  registration_url text,
  status text not null default 'upcoming',
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Gallery table
create table gallery (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete set null,
  title text,
  image_url text not null,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes for better query performance
create index idx_members_slug on members(slug);
create index idx_members_published on members(published) where published = true;
create index idx_events_slug on events(slug);
create index idx_events_published on events(published) where published = true;
create index idx_events_event_date on events(event_date);
create index idx_events_status on events(status);
create index idx_gallery_event_id on gallery(event_id);
create index idx_gallery_display_order on gallery(display_order);

-- Row Level Security
alter table members enable row level security;
alter table events enable row level security;
alter table gallery enable row level security;

-- Policies for members
create policy "Members are viewable by everyone"
  on members for select
  using (published = true);

-- Policies for events
create policy "Events are viewable by everyone"
  on events for select
  using (published = true);

-- Policies for gallery
create policy "Gallery items are viewable by everyone"
  on gallery for select
  using (true);
