CREATE TABLE project (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  img bytea NOT NULL,
  status text CHECK (status IN ('Not Started', 'BackLog', 'SprintLog', 'In Progress', 'Under Review', 'Waiting Validation', 'Completed', 'Discarded')),
  industryCat TEXT[] NOT NULL,
  coach_id UUID REFERENCES coach(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_deleted BOOLEAN DEFAULT FALSE,
);