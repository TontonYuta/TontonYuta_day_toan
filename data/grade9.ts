
import { GradeData, GradeLevel } from "../types";

export const grade9: GradeData = {
  id: "9",
  name: GradeLevel.Grade9,
  chapters: [
    {
      id: "c1_9",
      title: "Chương 1: Căn bậc hai số học",
      sessions: [
        {
          id: "s1_9",
          title: "Buổi 1: Căn bậc hai số học",
          description: "Ôn số bình phương và định nghĩa căn bậc hai số học của một số không âm.",
          theory: `### 1. Số bình phương
Một số được gọi là bình phương của số tự nhiên a nếu nó bằng $a^2$.
Ví dụ: $3^2 = 9$, $5^2 = 25$.

### 2. Căn bậc hai số học
Căn bậc hai số học của số không âm $a$ là số không âm $x$ sao cho $x^2 = a$.
Kí hiệu: $\\sqrt{a}$.

Ví dụ:
- $\\sqrt{0} = 0$
- $\\sqrt{1} = 1$
- $\\sqrt{4} = 2$
- $\\sqrt{9} = 3$
- $\\sqrt{16} = 4$

### 3. Ghi nhớ
- Chỉ những số **không âm** mới có căn bậc hai số học.
- Căn bậc hai số học luôn **không âm**.`,
          examples: [
            {
              id: "ex1_9_1",
              problem: "Tính các căn bậc hai sau: $\\sqrt{16},\\ \\sqrt{25},\\ \\sqrt{36}.$",
              solution: "$\\sqrt{16} = 4$, $\\sqrt{25} = 5$, $\\sqrt{36} = 6$."
            }
          ],
          essays: [
            {
              id: "es1_9_1",
              question: "Điền số thích hợp vào chỗ chấm: $\\sqrt{49} = \\dots,\\ \\sqrt{81} = \\dots$.",
              solution: "$\\sqrt{49} = 7$, $\\sqrt{81} = 9$."
            }
          ],
          mcqs: [
            {
              id: "mcq1_9_1",
              question: "Khẳng định nào sau đây đúng?",
              options: [
                "$\\sqrt{25} = -5$",
                "$\\sqrt{25} = 5$",
                "$\\sqrt{25} = \\pm 5$",
                "$\\sqrt{25}$ không xác định"
              ],
              correctIndex: 1,
              explanation: "Căn bậc hai **số học** của 25 là số không âm có bình phương bằng 25, nên $\\sqrt{25} = 5$."
            }
          ],
          review: "Ghi nhớ các bình phương quen thuộc: $2^2=4$, $3^2=9$, $4^2=16$, $5^2=25$, $6^2=36$, $7^2=49$, $8^2=64$, $9^2=81$, $10^2=100$ để tính căn nhanh hơn."
        }
      ]
    }
  ]
};
