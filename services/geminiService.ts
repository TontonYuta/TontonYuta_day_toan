import { SessionData } from "../types";

// Tính năng AI đã được loại bỏ.
// File này được giữ lại để tránh lỗi import nếu có reference sót, nhưng không còn chức năng.

export const askGeminiTutor = async (
  question: string,
  sessionContext: SessionData,
  apiKey: string
): Promise<string> => {
  return "Tính năng Gia sư AI đã bị vô hiệu hóa trong phiên bản này.";
};