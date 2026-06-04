# Supabase Database & Storage Setup

Please follow these instructions in your Supabase Dashboard.

## 1. Create Database Tables
Go to the **SQL Editor** in the left sidebar, create a **New Query**, and paste the following SQL. Then click **Run**.

```sql
-- 1. Projects Table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  description TEXT NOT NULL,
  main_image TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  icon TEXT NOT NULL
);

-- 2. Blogs Table
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL,
  read_time TEXT NOT NULL,
  image TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}'
);

-- 3. Services Table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  image TEXT NOT NULL,
  icon TEXT NOT NULL
);

-- 4. Testimonials Table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  text TEXT NOT NULL,
  avatar TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create Policies (Read access for everyone)
CREATE POLICY "Allow public read-only access for projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access for blogs" ON blogs FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access for testimonials" ON testimonials FOR SELECT USING (true);

-- Create Policies (Admin access for everything - authenticated only)
CREATE POLICY "Allow admin all access for projects" ON projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin all access for blogs" ON blogs FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin all access for services" ON services FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin all access for testimonials" ON testimonials FOR ALL TO authenticated USING (true);
```

## 2. Setup Storage
Go to **Storage** in the left sidebar.

1.  Click **New Bucket**.
2.  Name it `biogas-images`.
3.  Toggle **Public Bucket** to ON (so images can be viewed on the website).
4.  Click **Save**.
5.  (Optional) Under **Policies** for this bucket, ensure that "Public" users can "Select" (read) objects, and "Authenticated" users can perform all actions (upload/delete).
