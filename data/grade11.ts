
import { GradeData, GradeLevel } from "../types";

export const grade11: GradeData = {
  id: "11",
  name: GradeLevel.Grade11,
  chapters: [
    {
      id: "c1_11",
      title: "Chương 1: Hàm số bậc nhất và bậc hai",
      sessions: [
        {
          id: "s1_11",
          title: "Buổi 1: Hàm số bậc nhất",
          description: "Định nghĩa, tính chất và đồ thị của hàm số bậc nhất.",
          videoUrl: "https://www.youtube.com/watch?v=UeWQHmiVxE4",
          theory: `### 1. Khái niệm
Hàm số bậc nhất có dạng:
$$ y = ax + b $$
Trong đó:
- $a, b$ là các số thực
- $a \\neq 0$

### 2. Tính chất
- Hàm số đồng biến khi $a > 0$
- Hàm số nghịch biến khi $a < 0$

### 3. Đồ thị
Đồ thị là một **đường thẳng**, cắt trục tung tại điểm $(0, b)$ và có hệ số góc là $a$.`,
          examples: [
            {
              id: "ex1_11_1",
              problem: "Xác định tính biến thiên của hàm số $y = 3x - 1$.",
              solution: "Vì hệ số a = 3 > 0 nên hàm số **đồng biến**."
            }
          ],
          essays: [
            {
              id: "es1_11_1",
              question: "Hãy tìm giao điểm của đồ thị hàm số $y = 2x + 5$ với trục tung.",
              solution: "Giao với trục tung khi $x = 0$. Khi đó: $y = 2·0 + 5 = 5$. Vậy giao điểm là $(0, 5)$."
            }
          ],
          mcqs: [
            {
              id: "mcq1_11_1",
              question: "Hàm số nào sau đây là hàm bậc nhất?",
              options: [
                "$y = 3x - 7$",
                "$y = x^2 - 1$",
                "$y = \\frac{1}{x}$",
                "$y = 5$"
              ],
              correctIndex: 0,
              explanation: "Hàm bậc nhất phải có dạng $y = ax + b$ với $a \\neq 0$. Chỉ có $y = 3x - 7$ thỏa mãn."
            }
          ],
          review: "Ghi nhớ dạng chuẩn của hàm bậc nhất và ý nghĩa hệ số a, b."
        }
      ]
    }
  ]
};
