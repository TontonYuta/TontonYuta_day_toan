
import { GradeData, GradeLevel } from "../types";

export const grade12: GradeData = {
    id: "12",
    name: GradeLevel.Grade12,
    chapters: [
      {
        id: "c1_12",
        title: "Chương 1: Ứng dụng đạo hàm",
        sessions: [
          {
            id: "s1_12",
            title: "Buổi 1: Tính đơn điệu của hàm số",
            description: "Khảo sát sự biến thiên, đồng biến, nghịch biến của hàm số.",
            theory: `### 1. Định lí
Cho hàm số $y=f(x)$ có đạo hàm trên K.
- Nếu $f'(x) > 0$ với mọi x thuộc K thì hàm số đồng biến trên K.
- Nếu $f'(x) < 0$ với mọi x thuộc K thì hàm số nghịch biến trên K.
- Nếu $f'(x) = 0$ với mọi x thuộc K thì hàm số không đổi trên K.

### 2. Quy tắc xét tính đơn điệu
1. Tìm tập xác định.
2. Tính đạo hàm $f'(x)$.
3. Tìm các điểm $x_i$ tại đó $f'(x)=0$ hoặc không xác định.
4. Lập bảng biến thiên.
5. Kết luận.`,
            examples: [
              {
                id: "ex1_12_1",
                problem: "Xét sự biến thiên của hàm số $y = x^3 - 3x + 1$.",
                solution: "1. TXĐ: $D = \\mathbb{R}$\n2. $y' = 3x^2 - 3$\n3. $y' = 0 \\Leftrightarrow x = \\pm 1$\n4. Bảng biến thiên: \n   - $(-\\infty; -1)$: $y' > 0$ (đồng biến)\n   - $(-1; 1)$: $y' < 0$ (nghịch biến)\n   - $(1; +\\infty)$: $y' > 0$ (đồng biến)"
              }
            ],
            essays: [
              {
                id: "es1_12_1",
                question: "Tìm khoảng đồng biến của hàm số $y = -x^3 + 3x^2$.",
                solution: "Ta có $y' = -3x^2 + 6x$.\nCho $y' = 0 \\Leftrightarrow -3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.\nHệ số a = -3 < 0, nên trong khoảng (0; 2) đạo hàm dương.\nVậy hàm số đồng biến trên khoảng (0; 2)."
              }
            ],
            mcqs: [
              {
                id: "mcq1_12_1",
                question: "Hàm số $y = \\frac{2x+1}{x-1}$ có đạo hàm là:",
                options: ["$\\frac{-3}{(x-1)^2}$", "$\\frac{3}{(x-1)^2}$", "$\\frac{1}{(x-1)^2}$", "$\\frac{-1}{(x-1)^2}$"],
                correctIndex: 0,
                explanation: "Áp dụng công thức $(\\frac{ax+b}{cx+d})' = \\frac{ad-bc}{(cx+d)^2}$. Ta có $ad-bc = 2(-1) - 1(1) = -3$."
              },
              {
                id: "mcq2_12_1",
                question: "Hàm số nào sau đây đồng biến trên $\\mathbb{R}$?",
                options: ["$y = x^4 + x^2$", "$y = x^3 - x$", "$y = x^3 + x$", "$y = \\frac{x-1}{x+1}$"],
                correctIndex: 2,
                explanation: "Xét $y = x^3 + x$ có $y' = 3x^2 + 1$. Vì $3x^2 \\geq 0$ nên $y' > 0$ với mọi x. Vậy hàm đồng biến trên R."
              }
            ],
            review: "Đạo hàm dương -> Đồng biến. Đạo hàm âm -> Nghịch biến. Chú ý dấu của hệ số a."
          },
          {
            id: "s2_12",
            title: "Buổi 2: Cực trị của hàm số",
            description: "Nhận biết điểm cực đại, cực tiểu của hàm số và các quy tắc tìm cực trị.",
            theory: `### 1. Định nghĩa
Cho hàm số y=f(x) xác định trên K và $x_0 \\in K$.
- $x_0$ là điểm cực đại nếu $f(x) < f(x_0)$ với mọi x lân cận $x_0$.
- $x_0$ là điểm cực tiểu nếu $f(x) > f(x_0)$ với mọi x lân cận $x_0$.

### 2. Điều kiện cần và đủ
- **Điều kiện cần:** Nếu hàm số đạt cực trị tại $x_0$ và có đạo hàm thì $f'(x_0) = 0$.
- **Điều kiện đủ (Dấu hiệu 1):** Nếu $f'(x)$ đổi dấu từ dương sang âm qua $x_0$ thì $x_0$ là điểm cực đại. Nếu đổi dấu từ âm sang dương thì là cực tiểu.`,
            examples: [
              {
                id: "ex1_12_2",
                problem: "Tìm các điểm cực trị của hàm số $y = x^4 - 2x^2 + 2$.",
                solution: "$y' = 4x^3 - 4x = 4x(x^2 - 1)$.\n$y' = 0 \\Leftrightarrow x = 0, x = 1, x = -1$.\n- Tại $x = 0$, y' đổi từ âm sang dương $\\Rightarrow$ Cực tiểu.\n- Tại $x = \\pm 1$, y' đổi từ dương sang âm $\\Rightarrow$ Cực đại (Sai, phải lập bảng xét dấu chi tiết: -1 là cực tiểu, 0 cực đại... Chờ đã, kiểm tra lại: qua 0 là đổi từ âm sang dương? Không, xét dấu: \n(-vc, -1): âm, (-1, 0): dương, (0, 1): âm, (1, +vc): dương.\nVậy $x = \\pm 1$ là điểm cực tiểu, $x = 0$ là điểm cực đại."
              }
            ],
            essays: [
              {
                id: "es1_12_2",
                question: "Tìm cực trị của hàm số $y = x^3 - 3x + 2$.",
                solution: "1. $y' = 3x^2 - 3$. $y' = 0 \\Leftrightarrow x = \\pm 1$.\n2. Bảng biến thiên:\n   - $x = -1$: $y' > 0$ (trái) $\\rightarrow y' < 0$ (phải). $\\Rightarrow$ Cực đại tại $x = -1, y = 4$.\n   - $x = 1$: $y' < 0$ (trái) $\\rightarrow y' > 0$ (phải). $\\Rightarrow$ Cực tiểu tại $x = 1, y = 0$."
              }
            ],
            mcqs: [
              {
                id: "mcq1_12_2",
                question: "Hàm số $y = x^3 - 3x^2 + 2$ đạt cực tiểu tại điểm nào?",
                options: ["x = 0", "x = 2", "x = 1", "x = -1"],
                correctIndex: 1,
                explanation: "$y' = 3x^2 - 6x$. $y'=0 \\Leftrightarrow x=0, x=2$. Hệ số a > 0, dáng đồ thị chữ N. Cực đại trước, cực tiểu sau. Vậy x=2 là cực tiểu."
              }
            ],
            review: "Cực đại: Đổi dấu Dương -> Âm. Cực tiểu: Đổi dấu Âm -> Dương."
          }
        ]
      }
    ]
};
