CREATE TABLE event (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  img bytea NOT NULL,
  status TEXT CHECK (status IN ('Coming Soon', 'Live Now', 'Past')),
  cat TEXT CHECK (cat IN ('Webinar', 'Coaching', 'Masterclass', 'Networking', 'Talk', 'Partner', 'Workshop', 'Other')),
  industryCat TEXT[] NOT NULL,
  coach_id UUID REFERENCES coach(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_deleted BOOLEAN DEFAULT FALSE,
);