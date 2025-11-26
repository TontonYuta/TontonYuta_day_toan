
import { GradeData } from "./types";
import { grade1 } from "./data/grade1";
import { grade2 } from "./data/grade2";
import { grade3 } from "./data/grade3";
import { grade4 } from "./data/grade4";
import { grade5 } from "./data/grade5";
import { grade6 } from "./data/grade6";
import { grade7 } from "./data/grade7";
import { grade8 } from "./data/grade8";
import { grade9 } from "./data/grade9";
import { grade10 } from "./data/grade10";
import { grade11 } from "./data/grade11";
import { grade12 } from "./data/grade12";

// Helper to create rich text with newlines if needed
const nl = `\n\n`;

/* 
  HƯỚNG DẪN TỰ THÊM BÀI HỌC (TEMPLATE):
  ----------------------------------------------------
  Cấu trúc mới: Đã tách riêng từng file trong thư mục /data/
  
  Để thêm bài học mới:
  1. Mở file tương ứng với lớp cần thêm (ví dụ data/grade6.ts).
  2. Tìm đến mảng 'sessions' của chương tương ứng.
  3. Thêm object bài học vào đó.
  ----------------------------------------------------
*/

export const MATH_DATA: Record<string, GradeData> = {
  "1": grade1,
  "2": grade2,
  "3": grade3,
  "4": grade4,
  "5": grade5,
  "6": grade6,
  "7": grade7,
  "8": grade8,
  "9": grade9,
  "10": grade10,
  "11": grade11,
  "12": grade12,
};
