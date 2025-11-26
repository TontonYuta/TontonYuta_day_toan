
import { GradeData, GradeLevel } from "../types";

export const grade7: GradeData = {
  id: "7",
  name: GradeLevel.Grade7,
  chapters: [
    /* ============================================================
       CHƯƠNG 1 — SỐ HỮU TỈ
    ============================================================ */
    {
      id: "c1_7",
      title: "Chương 1: Số hữu tỉ",
      description:
        "Khái niệm số hữu tỉ, biểu diễn trên trục số, so sánh và giá trị tuyệt đối.",
      sessions: [
        {
          id: "s1_7",
          title: "Buổi 1: Tập hợp Q các số hữu tỉ",
          description:
            "Hiểu khái niệm số hữu tỉ, cách viết dưới dạng phân số và biểu diễn trên trục số.",
          videoUrl: "https://www.youtube.com/watch?v=PM8UX5n2v1I",
          theory: `### 1. Định nghĩa số hữu tỉ
Số hữu tỉ là số viết được dưới dạng phân số:
$$ \\frac{a}{b} $$
với $a, b \\in \\mathbb{Z}, b \\neq 0$.

Tập hợp các số hữu tỉ ký hiệu là $\\mathbb{Q}$.

Ví dụ:
- $3 = \\dfrac{3}{1}$ là số hữu tỉ.
- $-0{,}5 = \\dfrac{-1}{2}$ là số hữu tỉ.
- $2\\dfrac{5}{7} = \\dfrac{19}{7}$ cũng là số hữu tỉ.

### 2. Biểu diễn trên trục số
- Mỗi số hữu tỉ ứng với một điểm trên trục số.
- Mỗi điểm trên trục số biểu diễn một số hữu tỉ.

### 3. Liên hệ giữa $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$
- $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$.`,
          examples: [
            {
              id: "ex1_7_1",
              problem:
                "Các số sau có phải là số hữu tỉ không: 3; -0,75; 0; $2\\dfrac{1}{3}$?",
              solution:
                "3 = 3/1 nên là số hữu tỉ.\n-0,75 = -75/100 = -3/4 nên là số hữu tỉ.\n0 = 0/1 nên là số hữu tỉ.\n$2\\dfrac{1}{3} = 7/3$ nên là số hữu tỉ."
            }
          ],
          essays: [
            {
              id: "es1_7_1",
              question:
                "Viết các số sau dưới dạng phân số: a) -0,4; b) 1,25; c) -2,5.",
              solution:
                "-0,4 = -4/10 = -2/5.\n1,25 = 125/100 = 5/4.\n-2,5 = -25/10 = -5/2."
            }
          ],
          mcqs: [
            {
              id: "mcq1_7_1",
              question: "Khẳng định nào sau đây là SAI?",
              options: [
                "$\\mathbb{N} \\subset \\mathbb{Z}$",
                "$\\mathbb{Z} \\subset \\mathbb{Q}$",
                "$\\mathbb{Q} \\subset \\mathbb{Z}$",
                "$\\mathbb{N} \\subset \\mathbb{Q}$"
              ],
              correctIndex: 2,
              explanation:
                "Tập $\\mathbb{Q}$ rộng hơn $\\mathbb{Z}$ nên phải là $\\mathbb{Z} \\subset \\mathbb{Q}$, không phải $\\mathbb{Q} \\subset \\mathbb{Z}$."
            }
          ],
          review:
            "Nhớ: mọi số nguyên và mọi số thập phân hữu hạn đều là số hữu tỉ. Chuỗi bao hàm: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
        },

        {
          id: "s2_7",
          title: "Buổi 2: So sánh số hữu tỉ và giá trị tuyệt đối",
          description:
            "So sánh số hữu tỉ bằng quy đồng và hiểu ý nghĩa giá trị tuyệt đối.",
          videoUrl: "https://www.youtube.com/watch?v=8apgHVz44dc",
          theory: `### 1. So sánh hai số hữu tỉ
Bước 1: Viết dưới dạng phân số cùng mẫu dương.  
Bước 2: So sánh tử số.

Ví dụ: So sánh $\\dfrac{-2}{7}$ và $\\dfrac{-3}{11}$.
- $\\dfrac{-2}{7} = \\dfrac{-22}{77}$
- $\\dfrac{-3}{11} = \\dfrac{-21}{77}$  
Vì $-22 < -21$ nên $\\dfrac{-2}{7} < \\dfrac{-3}{11}$.

### 2. Giá trị tuyệt đối
Giá trị tuyệt đối của số hữu tỉ a là khoảng cách từ điểm biểu diễn a đến 0 trên trục số.

- Nếu $a > 0$ thì $|a| = a$.
- Nếu $a < 0$ thì $|a| = -a$.
- Nếu $a = 0$ thì $|a| = 0$.

Ví dụ:
- $|3| = 3$, $|-5| = 5$, $\\left|\\dfrac{-7}{3}\\right| = \\dfrac{7}{3}$.`,
          examples: [
            {
              id: "ex2_7_1",
              problem: "So sánh $x = -\\dfrac{3}{5}$ và $y = -\\dfrac{4}{7}$.",
              solution:
                "Quy đồng: $-3/5 = -21/35$, $-4/7 = -20/35$.\nVì -21 < -20 nên x < y."
            },
            {
              id: "ex2_7_2",
              problem:
                "Tính: a) $|-4|$; b) $\\left|\\dfrac{-7}{3}\\right|$.",
              solution:
                "a) $|-4| = 4$.\n b) $\\left|\\dfrac{-7}{3}\\right| = 7/3$."
            }
          ],
          essays: [
            {
              id: "es2_7_1",
              question:
                "So sánh hai số: $a = -2,3$ và $b = -2,25$. Số nào lớn hơn?",
              solution:
                "Viết dưới dạng thập phân: -2,30 và -2,25. Số nào gần 0 hơn thì lớn hơn. Vì -2,25 > -2,30 nên b > a."
            }
          ],
          mcqs: [
            {
              id: "mcq2_7_1",
              question: "Giá trị của $|-5| + |3|$ là:",
              options: ["-2", "2", "8", "15"],
              correctIndex: 2,
              explanation:
                "Giá trị tuyệt đối luôn không âm: |-5| = 5, |3| = 3 → 5 + 3 = 8."
            }
          ],
          review:
            "Khi so sánh số âm: số nào có trị tuyệt đối nhỏ hơn thì lớn hơn. Giá trị tuyệt đối luôn ≥ 0."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 2 — LŨY THỪA VÀ CĂN BẬC HAI
    ============================================================ */
    {
      id: "c2_7",
      title: "Chương 2: Lũy thừa và căn bậc hai",
      description:
        "Lũy thừa với số mũ nguyên, căn bậc hai số không âm và các quy tắc cơ bản.",
      sessions: [
        {
          id: "s3_7",
          title: "Buổi 3: Lũy thừa với cơ số hữu tỉ",
          description:
            "Ôn lũy thừa, nhân chia lũy thừa cùng cơ số với cơ số là số hữu tỉ.",
          videoUrl: "https://www.youtube.com/watch?v=Z5VjTqRY7aA",
          theory: `### 1. Lũy thừa cơ số hữu tỉ
Với $a \\in \\mathbb{Q}, n \\in \\mathbb{N}$:
- $a^n = \\underbrace{a \\cdot a \\cdot ... \\cdot a}_{n \\text{ thừa số}}$
- $a^1 = a$, $a^0 = 1$ (với $a \\neq 0$).

Ví dụ: $\\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{8}{27}$.

### 2. Quy tắc nhân, chia lũy thừa cùng cơ số
- $a^m \\cdot a^n = a^{m+n}$.
- $a^m : a^n = a^{m-n}$ (với $m > n$).`,
          examples: [
            {
              id: "ex3_7_1",
              problem:
                "Viết gọn: $\\left(\\dfrac{3}{5}\\right)^2 \\cdot \\left(\\dfrac{3}{5}\\right)^3$.",
              solution:
                "$(3/5)^2 (3/5)^3 = (3/5)^{2+3} = (3/5)^5."
            }
          ],
          essays: [
            {
              id: "es3_7_1",
              question:
                "Cho $a = \\dfrac{2}{5}$. Tính $A = a^3 \\cdot a^2$ và rút gọn.",
              solution:
                "A = a^{3+2} = a^5 = (2/5)^5 = 32/3125."
            }
          ],
          mcqs: [
            {
              id: "mcq3_7_1",
              question: "Kết quả của $x^4 : x^2$ là:",
              options: ["x²", "x³", "x⁶", "x⁸"],
              correctIndex: 0,
              explanation: "x⁴ : x² = x^(4−2) = x²."
            }
          ],
          review:
            "Khi cùng cơ số: nhân → cộng số mũ, chia → trừ số mũ. Nhớ điều kiện a ≠ 0."
        },

        {
          id: "s4_7",
          title: "Buổi 4: Căn bậc hai số không âm",
          description:
            "Định nghĩa căn bậc hai, tính một số căn quen thuộc và phân biệt với nghiệm phương trình.",
          videoUrl: "https://www.youtube.com/watch?v=Bh5bJq-yyvE",
          theory: `### 1. Căn bậc hai số không âm
Căn bậc hai số không âm a (a ≥ 0) là số x sao cho:
- $x^2 = a$ và $x \\ge 0$.

Ký hiệu: $x = \\sqrt{a}$.

Ví dụ:
- $\\sqrt{9} = 3$ vì $3^2 = 9$.
- $\\sqrt{25} = 5$.

Lưu ý:
- Phương trình $x^2 = 9$ có 2 nghiệm: x = 3, x = -3.
- Nhưng căn bậc hai của 9 chỉ là 3 (nghiệm không âm).

### 2. Một số căn bậc hai quen thuộc
- $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$  
- $\\sqrt{9} = 3$, $\\sqrt{16} = 4$, $\\sqrt{25} = 5$, ...`,
          examples: [
            {
              id: "ex4_7_1",
              problem: "Tính: a) $\\sqrt{36}$; b) $\\sqrt{49}$.",
              solution:
                "a) $\\sqrt{36} = 6$ vì 6² = 36.\n b) $\\sqrt{49} = 7$ vì 7² = 49."
            }
          ],
          essays: [
            {
              id: "es4_7_1",
              question:
                "Cho $x^2 = 81$. Tìm các nghiệm của phương trình và cho biết căn bậc hai của 81 là bao nhiêu.",
              solution:
                "Phương trình có 2 nghiệm: x = 9, x = -9.\nCăn bậc hai của 81 là 9 (nghiệm không âm)."
            }
          ],
          mcqs: [
            {
              id: "mcq4_7_1",
              question: "Giá trị của $\\sqrt{64}$ là:",
              options: ["-8", "±8", "8", "64"],
              correctIndex: 2,
              explanation:
                "Căn bậc hai của 64 là 8, quy ước chỉ lấy nghiệm không âm."
            }
          ],
          review:
            "Phân biệt: nghiệm của $x^2 = a$ (có thể ±) và $\\sqrt{a}$ (chỉ 1 giá trị không âm)."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 3 — BIỂU THỨC ĐẠI SỐ & ĐA THỨC
    ============================================================ */
    {
      id: "c3_7",
      title: "Chương 3: Biểu thức đại số và đa thức",
      description:
        "Biểu thức chứa biến, đơn thức, đa thức và phép cộng trừ đa thức.",
      sessions: [
        {
          id: "s5_7",
          title: "Buổi 5: Biểu thức đại số – Đơn thức",
          description:
            "Khái niệm biểu thức đại số, giá trị của biểu thức, đơn thức và bậc của đơn thức.",
          videoUrl: "https://www.youtube.com/watch?v=8BRGXttXN4E",
          theory: `### 1. Biểu thức đại số
Là biểu thức có chứa chữ (biến) và số.

Ví dụ:
- $2x + 3$, $5a^2b - 1$

### 2. Giá trị của biểu thức
Thay giá trị biến vào rồi tính.

Ví dụ:
- Với $x = 2$, $A = 2x + 3 = 2\\cdot 2 + 3 = 7$.

### 3. Đơn thức
Đơn thức là tích của một số (≠ 0) với một hay nhiều biến, mỗi biến có số mũ nguyên không âm.

Ví dụ:
- $3x$, $-5xy^2$, $\\dfrac{1}{2}ab^3$.

**Bậc của đơn thức** = tổng số mũ của các biến.`,
          examples: [
            {
              id: "ex5_7_1",
              problem:
                "Cho $A = 3x^2y$. Tính A khi $x = 2$, $y = -1$ và xác định bậc của đơn thức.",
              solution:
                "A = 3·2²·(-1) = 3·4·(-1) = -12.\nBậc: 2 + 1 = 3."
            }
          ],
          essays: [
            {
              id: "es5_7_1",
              question:
                "Cho đơn thức $M = -\\dfrac{1}{2}a^2b^3$. Tính M khi a = 2, b = -1.",
              solution:
                "M = -(1/2)·2²·(-1)³ = -(1/2)·4·(-1) = 2."
            }
          ],
          mcqs: [
            {
              id: "mcq5_7_1",
              question: "Đơn thức $5x^3y^2$ có bậc là:",
              options: ["2", "3", "5", "6"],
              correctIndex: 2,
              explanation: "Bậc = 3 + 2 = 5."
            }
          ],
          review:
            "Nắm vững: biểu thức đại số, đơn thức, bậc đơn thức để làm nền tảng cho đa thức."
        },

        {
          id: "s6_7",
          title: "Buổi 6: Đa thức – Cộng trừ đa thức một biến",
          description:
            "Khái niệm đa thức một biến, thu gọn và cộng trừ đa thức.",
          videoUrl: "https://www.youtube.com/watch?v=qPgmtuZGlFQ",
          theory: `### 1. Đa thức một biến
Là tổng (hoặc hiệu) của các đơn thức một biến.

Ví dụ:
- $P(x) = 2x^2 - 3x + 1$.

### 2. Thu gọn đa thức
Cộng các hạng tử đồng dạng (cùng biến, cùng số mũ).

### 3. Cộng, trừ đa thức
- Viết các đa thức sao cho các hạng tử đồng dạng thẳng cột.
- Cộng / trừ các hệ số của hạng tử đồng dạng.`,
          examples: [
            {
              id: "ex6_7_1",
              problem:
                "Thu gọn đa thức: $P(x) = 3x^2 - 5x + 2 + x^2 + x - 4$.",
              solution:
                "Gom hạng tử đồng dạng: (3x² + x²) + (-5x + x) + (2 - 4) = 4x² - 4x - 2."
            }
          ],
          essays: [
            {
              id: "es6_7_1",
              question:
                "Tính $A(x) + B(x)$ với $A(x) = 2x^2 - x + 3$, $B(x) = -x^2 + 4x - 1$.",
              solution:
                "A(x) + B(x) = (2x² - x + 3) + (-x² + 4x - 1)\n= (2x² - x²) + (-x + 4x) + (3 - 1)\n= x² + 3x + 2."
            }
          ],
          mcqs: [
            {
              id: "mcq6_7_1",
              question:
                "Thu gọn: $4x^2 - 3x + 1 - (x^2 - 2x - 5)$.",
              options: ["3x² - x + 6", "3x² - x - 4", "5x² - x + 6", "5x² - x - 4"],
              correctIndex: 0,
              explanation:
                "4x² - 3x + 1 - x² + 2x + 5 = 3x² - x + 6."
            }
          ],
          review:
            "Cộng, trừ đa thức = cộng, trừ các hạng tử đồng dạng. Luôn sắp xếp theo lũy thừa giảm dần để dễ nhìn."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 4 — GÓC VÀ ĐƯỜNG THẲNG SONG SONG
    ============================================================ */
    {
      id: "c4_7",
      title: "Chương 4: Góc và đường thẳng song song",
      description:
        "Khái niệm góc, các loại góc, hai đường thẳng song song và các góc tạo bởi đường cắt.",
      sessions: [
        {
          id: "s7_7",
          title: "Buổi 7: Góc và đo góc",
          description:
            "Nhận biết góc, đơn vị đo độ và các loại góc cơ bản (nhọn, vuông, tù, bẹt).",
          videoUrl: "https://www.youtube.com/watch?v=Fl4-wj7puf8",
          theory: `### 1. Góc
Góc được tạo bởi hai tia chung gốc.

Đơn vị đo: độ (°).

### 2. Các loại góc
- Góc nhọn: 0° < số đo < 90°
- Góc vuông: 90°
- Góc tù: 90° < số đo < 180°
- Góc bẹt: 180°`,
          examples: [
            {
              id: "ex7_7_1",
              problem: "Cho góc có số đo 135°. Đó là loại góc gì?",
              solution:
                "Vì 90° < 135° < 180° nên đó là góc tù."
            }
          ],
          essays: [
            {
              id: "es7_7_1",
              question:
                "Một góc lớn hơn góc vuông nhưng nhỏ hơn góc bẹt. Đó là loại góc gì? Cho một ví dụ về số đo.",
              solution:
                "Đó là góc tù. Ví dụ: 120°, 150°, 135°,..."
            }
          ],
          mcqs: [
            {
              id: "mcq7_7_1",
              question: "Góc có số đo 60° là:",
              options: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
              correctIndex: 0,
              explanation: "0° < 60° < 90° nên là góc nhọn."
            }
          ],
          review:
            "Nhớ khoảng số đo tương ứng với từng loại góc để nhận dạng nhanh trong bài hình."
        },

        {
          id: "s8_7",
          title: "Buổi 8: Hai đường thẳng song song",
          description:
            "Định nghĩa song song và các cặp góc: đồng vị, so le trong, trong cùng phía.",
          videoUrl: "https://www.youtube.com/watch?v=VpH0gjDyWmY",
          theory: `### 1. Hai đường thẳng song song
Hai đường thẳng không có điểm chung gọi là song song.

Ký hiệu: $a \\parallel b$.

### 2. Các góc tạo bởi hai đường thẳng song song bị cắt bởi một đường thẳng
Khi a // b bị cắt bởi c:
- Các góc đồng vị bằng nhau.
- Các góc so le trong bằng nhau.
- Các góc trong cùng phía bù nhau (tổng 180°).`,
          examples: [
            {
              id: "ex8_7_1",
              problem:
                "Cho a // b, c cắt a, b. Một góc đồng vị với góc 70° có số đo bao nhiêu?",
              solution:
                "Trong hai đường song song, góc đồng vị bằng nhau → góc đó cũng 70°."
            }
          ],
          essays: [
            {
              id: "es8_7_1",
              question:
                "Cho a // b. Biết một góc trong cùng phía có số đo 110°. Tính số đo góc trong cùng phía còn lại.",
              solution:
                "Hai góc trong cùng phía bù nhau: x + 110° = 180° → x = 70°."
            }
          ],
          mcqs: [
            {
              id: "mcq8_7_1",
              question:
                "Cho a // b, một góc so le trong có số đo 50°. Góc so le trong còn lại có số đo:",
              options: ["130°", "50°", "40°", "180°"],
              correctIndex: 1,
              explanation: "Hai góc so le trong bằng nhau khi hai đường song song."
            }
          ],
          review:
            "Ghi nhớ: đồng vị = bằng nhau, so le trong = bằng nhau, trong cùng phía = bù nhau."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 5 — TAM GIÁC
    ============================================================ */
    {
      id: "c5_7",
      title: "Chương 5: Tam giác",
      description:
        "Các loại tam giác, tổng ba góc trong tam giác, trung tuyến, đường cao, phân giác.",
      sessions: [
        {
          id: "s9_7",
          title: "Buổi 9: Các loại tam giác – Tổng ba góc",
          description:
            "Phân loại tam giác theo cạnh, theo góc và tính tổng ba góc trong tam giác.",
          videoUrl: "https://www.youtube.com/watch?v=0pTqL5CgNbA",
          theory: `### 1. Phân loại tam giác theo cạnh
- Tam giác đều: 3 cạnh bằng nhau.
- Tam giác cân: có 2 cạnh bằng nhau.
- Tam giác thường: không có cạnh nào bằng nhau.

### 2. Phân loại theo góc
- Tam giác vuông: có 1 góc 90°.
- Tam giác tù: có 1 góc > 90°.
- Tam giác nhọn: 3 góc < 90°.

### 3. Tổng ba góc
Trong mọi tam giác, tổng ba góc bằng:
$$ A + B + C = 180^\\circ. $$`,
          examples: [
            {
              id: "ex9_7_1",
              problem:
                "Trong tam giác ABC, $\\widehat{A} = 50^\\circ$, $\\widehat{B} = 60^\\circ$. Tính $\\widehat{C}$.",
              solution:
                "$C = 180° - (50° + 60°) = 70°."
            }
          ],
          essays: [
            {
              id: "es9_7_1",
              question:
                "Tam giác ABC có $\\widehat{A} = 90^\\circ$, $\\widehat{B} = 35^\\circ$. Tính $\\widehat{C}$ và cho biết tam giác thuộc loại nào theo góc.",
              solution:
                "$C = 180° - (90° + 35°) = 55°.\nVì có 1 góc vuông nên tam giác ABC là tam giác vuông."
            }
          ],
          mcqs: [
            {
              id: "mcq9_7_1",
              question:
                "Trong các tam giác sau, tam giác nào là tam giác đều?",
              options: [
                "Tam giác có 2 cạnh bằng nhau",
                "Tam giác có 3 cạnh bằng nhau",
                "Tam giác có 1 góc 90°",
                "Tam giác có 1 góc > 90°"
              ],
              correctIndex: 1,
              explanation: "Định nghĩa tam giác đều: 3 cạnh bằng nhau."
            }
          ],
          review:
            "Tổng ba góc tam giác luôn là 180°. Kết hợp với phân loại theo góc để suy luận các góc còn lại."
        },

        {
          id: "s10_7",
          title: "Buổi 10: Trung tuyến – Đường cao – Phân giác",
          description:
            "Nhận biết và vẽ trung tuyến, đường cao, tia phân giác trong tam giác.",
          videoUrl: "https://www.youtube.com/watch?v=edS4Cz-8bcw",
          theory: `### 1. Trung tuyến
Trong tam giác ABC:
- Trung tuyến từ đỉnh A là đoạn thẳng nối A với trung điểm của cạnh BC.

### 2. Đường cao
- Đường cao từ đỉnh A là đoạn thẳng kẻ từ A vuông góc với cạnh BC (hoặc đường thẳng chứa BC).

### 3. Tia phân giác
- Tia phân giác của góc A là tia xuất phát từ A, chia góc A thành 2 góc bằng nhau.

Ví dụ:
- AM là trung tuyến nếu M là trung điểm BC.
- AH là đường cao nếu AH ⟂ BC.
- AI là tia phân giác nếu $\\widehat{BAI} = \\widehat{IAC}$.`,
          examples: [
            {
              id: "ex10_7_1",
              problem:
                "Trong tam giác ABC, M là trung điểm cạnh BC. AM là đoạn gì?",
              solution:
                "AM là trung tuyến của tam giác ABC xuất phát từ đỉnh A."
            }
          ],
          essays: [
            {
              id: "es10_7_1",
              question:
                "Hãy vẽ tam giác ABC bất kỳ, sau đó kẻ: trung tuyến từ A, đường cao từ B, tia phân giác của góc C.",
              solution:
                "Hướng dẫn: đánh dấu trung điểm BC để vẽ trung tuyến; dùng êke để kẻ từ B vuông góc với AC là đường cao; dùng thước đo góc để xác định tia phân giác tại C."
            }
          ],
          mcqs: [
            {
              id: "mcq10_7_1",
              question:
                "Khẳng định nào sau đây đúng?",
              options: [
                "Trung tuyến luôn vuông góc với cạnh đáy",
                "Đường cao luôn đi qua trung điểm cạnh đáy",
                "Tia phân giác chia góc thành hai góc bằng nhau",
                "Trung tuyến và đường cao luôn trùng nhau"
              ],
              correctIndex: 2,
              explanation:
                "Định nghĩa tia phân giác: tia chia góc thành hai góc có số đo bằng nhau."
            }
          ],
          review:
            "Phân biệt: trung tuyến (qua trung điểm), đường cao (vuông góc), phân giác (chia đôi góc). Một đường trong tam giác đôi khi có thể vừa là trung tuyến, vừa là đường cao, vừa là phân giác (ví dụ trong tam giác cân hoặc đều)."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 6 — THỐNG KÊ VÀ BIỂU ĐỒ
    ============================================================ */
    {
      id: "c6_7",
      title: "Chương 6: Thống kê và biểu đồ",
      description:
        "Thu thập số liệu, lập bảng tần số, tính tần suất và đọc biểu đồ cột đơn giản.",
      sessions: [
        {
          id: "s11_7",
          title: "Buổi 11: Bảng tần số – Tần suất",
          description:
            "Lập bảng tần số cho dãy số liệu và hiểu ý nghĩa tần suất.",
          videoUrl: "https://www.youtube.com/watch?v=ch6gGWJdByw",
          theory: `### 1. Tần số
Tần số của một giá trị là số lần giá trị đó xuất hiện trong dãy số liệu.

### 2. Bảng tần số
Gồm:
- Các giá trị khác nhau của dấu hiệu.
- Tần số tương ứng của mỗi giá trị.

### 3. Tần suất
Tần suất của một giá trị = tần số / tổng số quan sát.`,
          examples: [
            {
              id: "ex11_7_1",
              problem:
                "Điểm kiểm tra Toán của 10 bạn là: 7, 8, 9, 7, 6, 8, 7, 9, 10, 7. Hãy lập bảng tần số.",
              solution:
                "Các giá trị: 6, 7, 8, 9, 10.\nTần số:\n- 6: 1 lần\n- 7: 4 lần\n- 8: 2 lần\n- 9: 2 lần\n- 10: 1 lần."
            }
          ],
          essays: [
            {
              id: "es11_7_1",
              question:
                "Từ bảng tần số ở ví dụ, hãy tính tần suất của điểm 7.",
              solution:
                "Tần số điểm 7 là 4, tổng số quan sát là 10.\nTần suất = 4/10 = 0,4 = 40%."
            }
          ],
          mcqs: [
            {
              id: "mcq11_7_1",
              question:
                "Một giá trị xuất hiện 5 lần trong 20 số liệu. Tần suất của nó là:",
              options: ["1/5", "1/4", "1/2", "5/20"],
              correctIndex: 1,
              explanation: "5/20 rút gọn được 1/4."
            }
          ],
          review:
            "Bảng tần số giúp quan sát nhanh giá trị nào xuất hiện nhiều, ít. Tần suất cho ta tỉ lệ (phần trăm) xuất hiện."
        },

        {
          id: "s12_7",
          title: "Buổi 12: Biểu đồ cột đơn giản",
          description:
            "Biểu diễn số liệu bằng biểu đồ cột và rút ra nhận xét.",
          videoUrl: "https://www.youtube.com/watch?v=HbgdB5v-yQg",
          theory: `### 1. Biểu đồ cột
- Trục ngang: các giá trị (hoặc nhóm giá trị) của dấu hiệu.
- Trục dọc: tần số (hoặc tần suất).
- Mỗi cột biểu diễn một giá trị.

### 2. Đọc biểu đồ
- Xem chiều cao cột để biết số lượng.
- So sánh độ cao các cột để xem giá trị nào nhiều/ít hơn.`,
          examples: [
            {
              id: "ex12_7_1",
              problem:
                "Một biểu đồ cột thể hiện số sách mượn trong tuần của ba bạn A, B, C lần lượt là 3, 5, 2. Hỏi bạn nào mượn nhiều sách nhất?",
              solution:
                "Bạn B mượn nhiều sách nhất vì cột tương ứng có chiều cao lớn nhất (5 quyển)."
            }
          ],
          essays: [
            {
              id: "es12_7_1",
              question:
                "Nhìn vào biểu đồ cột số học sinh tham gia các câu lạc bộ: Toán 10 bạn, Văn 7 bạn, Tiếng Anh 13 bạn. Hãy nêu một vài nhận xét.",
              solution:
                "Câu lạc bộ Tiếng Anh có nhiều học sinh tham gia nhất (13 bạn), tiếp theo là Toán (10 bạn), ít nhất là Văn (7 bạn)."
            }
          ],
          mcqs: [
            {
              id: "mcq12_7_1",
              question:
                "Trong biểu đồ cột, đại lượng thể hiện trên trục đứng (trục dọc) thường là:",
              options: [
                "Tên các đối tượng",
                "Giá trị số lượng/tần số",
                "Thời gian",
                "Màu sắc"
              ],
              correctIndex: 1,
              explanation:
                "Trục dọc dùng để đo số lượng (tần số/tần suất); trục ngang là các đối tượng hoặc giá trị."
            }
          ],
          review:
            "Biểu đồ cột giúp nhìn nhanh đâu là giá trị lớn nhất, nhỏ nhất và so sánh các nhóm dữ liệu."
        }
      ]
    }
  ]
};
