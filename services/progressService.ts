import { UserProgress, SectionType, SessionProgress } from "../types";
import { getCurrentUser } from "./authService";

const BASE_STORAGE_KEY = "daytoan_progress";

const getStorageKey = () => {
  const user = getCurrentUser();
  if (!user) return null;
  return `${BASE_STORAGE_KEY}_${user.id}`;
};

const defaultSessionProgress: SessionProgress = {
  theory: false,
  examples: false,
  essay: false,
  mcq: false,
  review: false,
};

export const getProgress = (): UserProgress => {
  const key = getStorageKey();
  if (!key) return {}; // Nếu chưa login thì trả về rỗng hoặc logic cho khách (tùy chọn)

  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error reading progress", error);
    return {};
  }
};

export const markSectionComplete = (sessionId: string, section: SectionType) => {
  const key = getStorageKey();
  if (!key) return;

  const currentProgress = getProgress();
  
  const sessionData = currentProgress[sessionId] || { ...defaultSessionProgress };
  sessionData[section] = true;

  const newProgress = {
    ...currentProgress,
    [sessionId]: sessionData
  };

  localStorage.setItem(key, JSON.stringify(newProgress));
  
  // Dispatch event to update UI immediately across components
  window.dispatchEvent(new Event("progress-updated"));
};

export const resetSectionProgress = (sessionId: string, section: SectionType) => {
  const key = getStorageKey();
  if (!key) return;

  const currentProgress = getProgress();
  
  if (currentProgress[sessionId]) {
    currentProgress[sessionId][section] = false;
    
    const newProgress = {
      ...currentProgress,
      [sessionId]: currentProgress[sessionId]
    };
    
    localStorage.setItem(key, JSON.stringify(newProgress));
    window.dispatchEvent(new Event("progress-updated"));
  }
};

export const getSessionCompletion = (sessionId: string): number => {
  const progress = getProgress();
  const session = progress[sessionId];
  if (!session) return 0;

  const sections = Object.values(session);
  const completedCount = sections.filter(Boolean).length;
  return Math.round((completedCount / 5) * 100);
};

export const isSectionCompleted = (sessionId: string, section: SectionType): boolean => {
  const progress = getProgress();
  return progress[sessionId]?.[section] || false;
};