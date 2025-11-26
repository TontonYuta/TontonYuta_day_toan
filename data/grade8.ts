
import { GradeData, GradeLevel } from "../types";

export const grade8: GradeData = {
  id: "8",
  name: GradeLevel.Grade8,
  chapters: [
    {
      id: "c1_8",
      title: "Chương 1: Phân thức đại số",
      description: "Khái niệm phân thức, điều kiện xác định và phép nhân, chia phân thức.",
      sessions: [
        {
          id: "s1_8",
          title: "Buổi 1: Định nghĩa và rút gọn phân thức",
          description: "Hiểu phân thức đại số, điều kiện xác định và rút gọn phân thức.",
          videoUrl: "https://www.youtube.com/watch?v=Y0KxF7tN0b4",
          theory: `### 1. Phân thức đại số
Phân thức đại số có dạng $\\frac{A}{B}$ với $B \\ne 0$.

### 2. Điều kiện xác định
Phân thức xác định khi mẫu số khác 0.

### 3. Rút gọn phân thức
- Phân tích tử và mẫu thành nhân tử.
- Chia cả tử và mẫu cho nhân tử chung.`,
          examples: [
            {
              id: "ex1_8_1",
              problem: "Rút gọn phân thức $\\frac{4x^2}{12x}$.",
              solution: "Chia cả tử và mẫu cho $4x$: $\\frac{4x^2}{12x} = \\frac{x}{3}$ (với $x \\ne 0$)."
            }
          ],
          essays: [
            {
              id: "es1_8_1",
              question: "Rút gọn phân thức $\\frac{x^2 - 9}{x - 3}$.",
              solution: "Ta có $x^2 - 9 = (x - 3)(x + 3)$ nên $\\frac{x^2 - 9}{x - 3} = x + 3$ (với $x \\ne 3$)."
            }
          ],
          mcqs: [
            {
              id: "mcq1_8_1",
              question: "Điều kiện xác định của phân thức $\\frac{5}{x - 2}$ là:",
              options: ["x = 2", "x \\ne 2", "x > 2", "x < 2"],
              correctIndex: 1,
              explanation: "Mẫu số phải khác 0 nên $x - 2 \\ne 0 \\Rightarrow x \\ne 2$."
            }
          ],
          review: "Muốn rút gọn phân thức: phân tích tử và mẫu, sau đó chia cả hai cho nhân tử chung và nhớ điều kiện xác định."
        },
        {
          id: "s2_8",
          title: "Buổi 2: Nhân và chia phân thức đại số",
          description: "Thực hiện phép nhân, chia phân thức bằng quy tắc nhân tử số và mẫu số.",
          videoUrl: "https://www.youtube.com/watch?v=ddad2lxG6Gc",
          theory: `### 1. Nhân phân thức
$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}$, với $B \\ne 0, D \\ne 0$.

### 2. Chia phân thức
$\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$, với $B \\ne 0, C \\ne 0, D \\ne 0$.

### 3. Cách làm
- Phân tích tử và mẫu thành nhân tử.
- Rút gọn trước khi nhân để tính cho gọn.`,
          examples: [
            {
              id: "ex2_8_1",
              problem: "Tính $\\frac{2x}{3} \\cdot \\frac{9}{4x}$ (với $x \\ne 0$).",
              solution: "$\\frac{2x}{3} \\cdot \\frac{9}{4x} = \\frac{2x \\cdot 9}{3 \\cdot 4x} = \\frac{18x}{12x} = \\frac{3}{2}$."
            }
          ],
          essays: [
            {
              id: "es2_8_1",
              question: "Tính $\\frac{x^2}{2x - 2} : \\frac{x}{x - 1}$ (với $x \\ne 1$).",
              solution: "$\\frac{x^2}{2x - 2} : \\frac{x}{x - 1} = \\frac{x^2}{2(x - 1)} \\cdot \\frac{x - 1}{x} = \\frac{x^2}{2x} = \\frac{x}{2}$."
            }
          ],
          mcqs: [
            {
              id: "mcq2_8_1",
              question: "Giá trị của $\\frac{3}{x} \\cdot \\frac{x}{5}$ (với $x \\ne 0$) là:",
              options: ["$\\frac{3x}{5}$", "$\\frac{3}{5}$", "$\\frac{15}{x}$", "$\\frac{x}{15}$"],
              correctIndex: 1,
              explanation: "Rút gọn x ở tử và mẫu ta được $\\frac{3}{5}$."
            }
          ],
          review: "Khi chia hai phân thức, hãy đổi thành nhân với phân thức nghịch đảo rồi rút gọn."
        }
      ]
    },
    {
      id: "c2_8",
      title: "Chương 2: Hằng đẳng thức và phân tích đa thức thành nhân tử",
      description: "Ba hằng đẳng thức cơ bản và các phương pháp phân tích đa thức thành nhân tử.",
      sessions: [
        {
          id: "s3_8",
          title: "Buổi 3: Ba hằng đẳng thức đáng nhớ",
          description: "Ghi nhớ và vận dụng ba hằng đẳng thức quan trọng.",
          videoUrl: "https://www.youtube.com/watch?v=gHlfMjtDa98",
          theory: `### 1. Ba hằng đẳng thức
1. $(a + b)^2 = a^2 + 2ab + b^2$
2. $(a - b)^2 = a^2 - 2ab + b^2$
3. $a^2 - b^2 = (a - b)(a + b)$

### 2. Ứng dụng
- Tính nhanh.
- Rút gọn biểu thức.
- Phân tích đa thức thành nhân tử.`,
          examples: [
            {
              id: "ex3_8_1",
              problem: "Tính nhanh $49^2 - 51^2$.",
              solution: "$49^2 - 51^2 = (49 - 51)(49 + 51) = (-2) \\cdot 100 = -200$."
            }
          ],
          essays: [
            {
              id: "es3_8_1",
              question: "Khai triển và thu gọn $(2x - 3)^2$.",
              solution: "$(2x - 3)^2 = 4x^2 - 12x + 9$."
            }
          ],
          mcqs: [
            {
              id: "mcq3_8_1",
              question: "Biểu thức nào sau đây đúng bằng $(a + b)^2$?",
              options: [
                "$a^2 + b^2$",
                "$a^2 + 2ab + b^2$",
                "$a^2 - 2ab + b^2$",
                "$(a - b)(a + b)$"
              ],
              correctIndex: 1,
              explanation: "Theo hằng đẳng thức số 1: $(a + b)^2 = a^2 + 2ab + b^2$."
            }
          ],
          review: "Thuộc lòng 3 hằng đẳng thức này để dùng xuyên suốt trong rút gọn và phân tích đa thức."
        },
        {
          id: "s4_8",
          title: "Buổi 4: Phân tích đa thức thành nhân tử",
          description: "Các phương pháp: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử.",
          videoUrl: "https://www.youtube.com/watch?v=a3t20F7gYlI",
          theory: `### 1. Đặt nhân tử chung
Ví dụ: $ax + ay = a(x + y)$.

### 2. Dùng hằng đẳng thức
Ví dụ: $x^2 - 9 = (x - 3)(x + 3)$.

### 3. Nhóm hạng tử
Tách đa thức thành các nhóm có nhân tử chung, rồi tiếp tục đặt nhân tử chung.`,
          examples: [
            {
              id: "ex4_8_1",
              problem: "Phân tích $x^2 - 9$ thành nhân tử.",
              solution: "$x^2 - 9 = (x - 3)(x + 3)$."
            }
          ],
          essays: [
            {
              id: "es4_8_1",
              question: "Phân tích $3x^2 + 6x$ thành nhân tử.",
              solution: "Đặt $3x$ làm nhân tử chung: $3x^2 + 6x = 3x(x + 2)$."
            }
          ],
          mcqs: [
            {
              id: "mcq4_8_1",
              question: "Phân tích $a^2 - 4$ đúng là:",
              options: [
                "$(a - 4)(a + 4)$",
                "$(a - 2)(a + 2)$",
                "$a(a - 4)$",
                "Không phân tích được"
              ],
              correctIndex: 1,
              explanation: "$4 = 2^2$ nên $a^2 - 4 = a^2 - 2^2 = (a - 2)(a + 2)$."
            }
          ],
          review: "Thường xuyên kiểm tra dạng của đa thức xem có thể dùng hằng đẳng thức hay đặt nhân tử chung."
        }
      ]
    },
    {
      id: "c3_8",
      title: "Chương 3: Phương trình bậc nhất một ẩn",
      description: "Dạng tổng quát, cách giải và biện luận số nghiệm của phương trình bậc nhất.",
      sessions: [
        {
          id: "s5_8",
          title: "Buổi 5: Phương trình bậc nhất – Cách giải",
          description: "Giải phương trình bậc nhất dạng $ax + b = 0$.",
          videoUrl: "https://www.youtube.com/watch?v=QktfYbW7wN4",
          theory: `### 1. Dạng phương trình bậc nhất
Phương trình bậc nhất một ẩn có dạng $ax + b = 0$, với $a \\ne 0$.

### 2. Cách giải
Từ $ax + b = 0 \\Rightarrow ax = -b \\Rightarrow x = -\\frac{b}{a}$.`,
          examples: [
            {
              id: "ex5_8_1",
              problem: "Giải phương trình $3x - 6 = 0$.",
              solution: "$3x = 6 \\Rightarrow x = 2$."
            }
          ],
          essays: [
            {
              id: "es5_8_1",
              question: "Giải phương trình $5x + 15 = 0$.",
              solution: "$5x = -15 \\Rightarrow x = -3$."
            }
          ],
          mcqs: [
            {
              id: "mcq5_8_1",
              question: "Phương trình $2x - 4 = 0$ có nghiệm:",
              options: ["x = 1", "x = 2", "x = 3", "x = -2"],
              correctIndex: 1,
              explanation: "$2x = 4 \\Rightarrow x = 2$."
            }
          ],
          review: "Quy trình: chuyển vế, thu gọn, đưa về dạng $ax = b$ rồi chia hai vế cho a."
        },
        {
          id: "s6_8",
          title: "Buổi 6: Biện luận phương trình bậc nhất – Tập nghiệm",
          description: "Xét số nghiệm của phương trình theo hệ số và viết tập nghiệm.",
          videoUrl: "https://www.youtube.com/watch?v=xkGkUai0b6o",
          theory: `### 1. Phương trình dạng $ax + b = 0$
- Nếu $a \\ne 0$: có một nghiệm duy nhất $x = -\\frac{b}{a}$.
- Nếu $a = 0, b \\ne 0$: phương trình vô nghiệm.
- Nếu $a = 0, b = 0$: phương trình có vô số nghiệm.

### 2. Tập nghiệm
- Một nghiệm: $S = \\{x_0\\}$.
- Vô nghiệm: $S = \\emptyset$.
- Vô số nghiệm: $S$ là tập tất cả các số thực.`,
          examples: [
            {
              id: "ex6_8_1",
              problem: "Biện luận nghiệm của phương trình $0 \\cdot x + 5 = 0$.",
              solution: "Vì $0 \\cdot x$ luôn bằng 0 nên phương trình trở thành $5 = 0$, vô lý. Vậy phương trình vô nghiệm, $S = \\emptyset$."
            }
          ],
          essays: [
            {
              id: "es6_8_1",
              question: "Biện luận nghiệm của phương trình $0 \\cdot x + 0 = 0$.",
              solution: "Phương trình đúng với mọi giá trị x, nên có vô số nghiệm. Tập nghiệm là tập tất cả các số thực."
            }
          ],
          mcqs: [
            {
              id: "mcq6_8_1",
              question: "Phương trình nào dưới đây là vô nghiệm?",
              options: ["$2x = 0$", "$0x = 0$", "$0x = 7$", "$x - 1 = 0$"],
              correctIndex: 2,
              explanation: "$0x = 7$ là vô lý vì vế trái luôn 0, không thể bằng 7."
            }
          ],
          review: "Trước khi giải, hãy nhìn hệ số a và b để nhận dạng nhanh trường hợp đặc biệt."
        }
      ]
    },
    {
      id: "c4_8",
      title: "Chương 4: Tam giác và các đường đặc biệt",
      description: "Định lý Py-ta-go và các đường đặc biệt trong tam giác: trung tuyến, trung trực, phân giác.",
      sessions: [
        {
          id: "s7_8",
          title: "Buổi 7: Định lý Py-ta-go",
          description: "Định lý Py-ta-go trong tam giác vuông và cách áp dụng.",
          videoUrl: "https://www.youtube.com/watch?v=lTlHKT1e7W8",
          theory: `### 1. Định lý Py-ta-go
Trong tam giác vuông có cạnh huyền c và hai cạnh góc vuông a, b:
$$a^2 + b^2 = c^2.$$

### 2. Ứng dụng
- Tính cạnh còn lại khi biết hai cạnh.
- Kiểm tra một tam giác có vuông hay không.`,
          examples: [
            {
              id: "ex7_8_1",
              problem: "Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Tính cạnh huyền.",
              solution: "Cạnh huyền $c$ thỏa $c^2 = 6^2 + 8^2 = 36 + 64 = 100$, nên $c = 10$."
            }
          ],
          essays: [
            {
              id: "es7_8_1",
              question: "Ba cạnh của một tam giác lần lượt là 7 cm, 24 cm, 25 cm. Hỏi tam giác đó có vuông không?",
              solution: "Ta có $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Vậy tam giác có một góc vuông đối diện cạnh 25 cm."
            }
          ],
          mcqs: [
            {
              id: "mcq7_8_1",
              question: "Trong tam giác vuông, cạnh đối diện góc vuông gọi là:",
              options: ["Cạnh góc vuông", "Cạnh kề", "Cạnh huyền", "Cạnh đáy"],
              correctIndex: 2,
              explanation: "Cạnh huyền là cạnh lớn nhất, đối diện góc vuông."
            }
          ],
          review: "Chỉ dùng định lý Py-ta-go trong tam giác vuông. Luôn xác định đúng cạnh huyền trước khi áp dụng."
        },
        {
          id: "s8_8",
          title: "Buổi 8: Trung tuyến, trung trực, phân giác trong tam giác",
          description: "Nhận biết và phân biệt trung tuyến, đường trung trực và tia phân giác.",
          videoUrl: "https://www.youtube.com/watch?v=DaYoy_f8O9k",
          theory: `### 1. Trung tuyến
Trong tam giác ABC, trung tuyến từ đỉnh A là đoạn thẳng nối A với trung điểm của cạnh BC.

### 2. Đường trung trực
Đường trung trực của đoạn thẳng là đường thẳng đi qua trung điểm đoạn thẳng và vuông góc với đoạn thẳng đó.

### 3. Tia phân giác
Tia phân giác của một góc là tia xuất phát từ đỉnh, chia góc đó thành hai góc có số đo bằng nhau.`,
          examples: [
            {
              id: "ex8_8_1",
              problem: "Trong tam giác ABC, M là trung điểm cạnh BC. Đoạn AM là đoạn gì của tam giác?",
              solution: "AM là trung tuyến xuất phát từ đỉnh A."
            }
          ],
          essays: [
            {
              id: "es8_8_1",
              question: "Mô tả cách dựng đường trung trực của đoạn thẳng AB.",
              solution: "Vẽ hai cung tròn tâm A và B, bán kính lớn hơn một nửa AB. Gọi hai giao điểm của hai cung tròn là C và D. Đường thẳng CD là đường trung trực của AB."
            }
          ],
          mcqs: [
            {
              id: "mcq8_8_1",
              question: "Đường trung trực của cạnh AB luôn đi qua:",
              options: [
                "Điểm A",
                "Điểm B",
                "Trung điểm của AB",
                "Một đỉnh bất kỳ của tam giác"
              ],
              correctIndex: 2,
              explanation: "Định nghĩa đường trung trực: luôn đi qua trung điểm đoạn thẳng AB và vuông góc với AB."
            }
          ],
          review: "Trung tuyến: qua trung điểm cạnh đối diện. Trung trực: qua trung điểm và vuông góc với cạnh. Phân giác: chia đôi góc."
        }
      ]
    }
  ]
};
