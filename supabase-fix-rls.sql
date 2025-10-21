-- Quick fix: Disable RLS for submissions table
-- This allows anyone to insert form submissions

-- First, drop all existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON submissions;
DROP POLICY IF EXISTS "Allow public inserts" ON submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON submissions;
DROP POLICY IF EXISTS "Allow authenticated updates" ON submissions;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON submissions;

-- Disable RLS completely (simplest solution for a public form)
ALTER TABLE submissions DISABLE ROW LEVEL SECURITY;

-- OR if you want to keep RLS enabled, use this instead:
-- ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
-- 
-- CREATE POLICY "Enable insert for all users" ON submissions
--   FOR INSERT
--   WITH CHECK (true);
-- 
-- CREATE POLICY "Enable read for authenticated users" ON submissions
--   FOR SELECT
--   TO authenticated
--   USING (true);
