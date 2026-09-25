-- Digital Life Academy database schema for Supabase

create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  full_name text,
  username text,
  role text not null default 'user' check (role in ('user', 'admin')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  lesson_title text,
  category text,
  completed boolean not null default false,
  last_score integer default 0,
  attempts integer not null default 0,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create table if not exists public.lesson_attempts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  score integer not null default 0,
  passed boolean not null default false,
  answers jsonb default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  badge text not null,
  title text,
  description text,
  earned_at timestamptz not null default now()
);

create table if not exists public.user_sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  device_name text,
  ip_address text,
  last_seen timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, username, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'role', 'user')
  )
  on conflict (email) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute procedure public.update_updated_at();

create trigger user_progress_updated_at
before update on public.user_progress
for each row execute procedure public.update_updated_at();

alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.lesson_attempts enable row level security;
alter table public.achievements enable row level security;
alter table public.user_sessions enable row level security;

create policy "Users can view their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id);

create policy "Users can view own progress"
on public.user_progress
for select
using (auth.uid() = user_id);

create policy "Users can update own progress"
on public.user_progress
for update
using (auth.uid() = user_id);

create policy "Users can insert own progress"
on public.user_progress
for insert
with check (auth.uid() = user_id);

create policy "Users can view own attempts"
on public.lesson_attempts
for select
using (auth.uid() = user_id);

create policy "Users can insert own attempts"
on public.lesson_attempts
for insert
with check (auth.uid() = user_id);

create policy "Users can view own achievements"
on public.achievements
for select
using (auth.uid() = user_id);

create policy "Users can insert own achievements"
on public.achievements
for insert
with check (auth.uid() = user_id);

create policy "Users can view own sessions"
on public.user_sessions
for select
using (auth.uid() = user_id);

create policy "Users can insert own sessions"
on public.user_sessions
for insert
with check (auth.uid() = user_id);

-- Optional admin access policies (you can extend these further)
create policy "Admins can view all profiles"
on public.profiles
for select
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

create policy "Admins can view all progress"
on public.user_progress
for select
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

create policy "Admins can view all attempts"
on public.lesson_attempts
for select
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

create policy "Admins can view all achievements"
on public.achievements
for select
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);
