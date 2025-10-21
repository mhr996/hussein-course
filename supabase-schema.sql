-- Create submissions table for coaching course landing page
-- Run this script in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
-- Using public role to allow both authenticated and anonymous users
CREATE POLICY "Allow public inserts" ON submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions (for admin access)
CREATE POLICY "Allow authenticated reads" ON submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create policy to allow authenticated users to update/delete (for admin management)
CREATE POLICY "Allow authenticated updates" ON submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated deletes" ON submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to call the function on update
CREATE TRIGGER update_submissions_updated_at 
  BEFORE UPDATE ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Add comments for documentation
COMMENT ON TABLE submissions IS 'Stores form submissions from the coaching course landing page';
COMMENT ON COLUMN submissions.id IS 'Unique identifier for each submission';
COMMENT ON COLUMN submissions.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN submissions.email IS 'Email address of the person';
COMMENT ON COLUMN submissions.phone IS 'Phone number of the person';
COMMENT ON COLUMN submissions.created_at IS 'Timestamp when the submission was created';
COMMENT ON COLUMN submissions.updated_at IS 'Timestamp when the submission was last updated';
