
export enum GradeLevel {
  Grade1 = "Lớp 1",
  Grade2 = "Lớp 2",
  Grade3 = "Lớp 3",
  Grade4 = "Lớp 4",
  Grade5 = "Lớp 5",
  Grade6 = "Lớp 6",
  Grade7 = "Lớp 7",
  Grade8 = "Lớp 8",
  Grade9 = "Lớp 9",
  Grade10 = "Lớp 10",
  Grade11 = "Lớp 11",
  Grade12 = "Lớp 12",
}

export type UserRole = 'admin' | 'student';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Resource {
  id: string | number;
  title: string;
  type: 'PDF' | 'DOCX' | 'XLSX' | 'OTHER';
  size: string;
  category: string;
  grade: string;
  downloads: number;
  url: string;
}

export interface Example {
  id: string;
  problem: string;
  solution: string;
}

export interface EssayQuestion {
  id: string;
  question: string;
  solution: string; // Detailed step-by-step
  hint?: string;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number; // 0-3
  explanation: string;
}

export interface SessionData {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // New field for video link
  theory: string; // Markdown supported content
  examples: Example[];
  essays: EssayQuestion[];
  mcqs: MCQQuestion[];
  review: string; // Summary/Mindmap text
}

export interface GradeData {
  id: string;
  name: string;
  sessions: SessionData[];
}

export type SectionType = 'theory' | 'examples' | 'essay' | 'mcq' | 'review';

export interface SessionProgress {
  theory: boolean;
  examples: boolean;
  essay: boolean;
  mcq: boolean;
  review: boolean;
}

export interface UserProgress {
  [sessionId: string]: SessionProgress;
}
