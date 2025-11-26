

import { GradeData, GradeLevel } from "./types";

// Helper to create rich text with newlines
const nl = `\n\n`;

/* 
  HƯỚNG DẪN TỰ THÊM BÀI HỌC (TEMPLATE):
  ----------------------------------------------------
  Để thêm bài học mới, bạn hãy copy đoạn code mẫu dưới đây 
  và dán vào mảng 'sessions' của lớp tương ứng (ví dụ lớp 6, 7...).
  
  Lưu ý: 
  1. 'id' của session phải là duy nhất (không trùng nhau).
  2. Nội dung hỗ trợ Markdown (**in đậm**, - gạch đầu dòng).
  3. Công thức toán kẹp giữa dấu $: Ví dụ $x^2 + 1$.
  ----------------------------------------------------
*/

export const MATH_DATA: Record<string, GradeData> = {
  "1": {
    id: "1",
    name: GradeLevel.Grade1,
    sessions: [
      {
        id: "s1_1",
        title: "Buổi 1: Các số đến 10",
        description: "Làm quen với các số từ 0 đến 10, cách đếm và viết số.",
        theory: `### 1. Các số từ 0 đến 10
Các số: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

### 2. So sánh các số
- Số đứng trước trên tia số thì bé hơn.
- Số đứng sau trên tia số thì lớn hơn.
*Ví dụ:* $2 < 5$, $9 > 4$.`,
        examples: [
          {
            id: "ex1_1",
            problem: "Đếm số ngón tay trên một bàn tay.",
            solution: "Một bàn tay có 5 ngón tay."
          }
        ],
        essays: [],
        mcqs: [
          {
            id: "mcq1_1",
            question: "Số lớn hơn 3 và bé hơn 5 là số nào?",
            options: ["2", "4", "6", "1"],
            correctIndex: 1,
            explanation: "Số 4 nằm giữa số 3 và số 5."
          }
        ],
        review: "Ghi nhớ thứ tự các số từ 0 đến 10."
      }
    ]
  },
  "2": {
    id: "2",
    name: GradeLevel.Grade2,
    sessions: [
      {
        id: "s1_2",
        title: "Buổi 1: Phép cộng có nhớ trong phạm vi 100",
        description: "Học cách thực hiện phép cộng có nhớ.",
        theory: "### Quy tắc cộng\nKhi cộng hai số, ta cộng từ hàng đơn vị trước. Nếu tổng lớn hơn hoặc bằng 10, ta viết hàng đơn vị và nhớ 1 sang hàng chục.",
        examples: [],
        essays: [],
        mcqs: [],
        review: "Luôn nhớ cộng phần nhớ vào hàng chục."
      }
    ]
  },
  "3": {
    id: "3",
    name: GradeLevel.Grade3,
    sessions: [
      {
        id: "s1_3",
        title: "Buổi 1: Bảng nhân 6, 7, 8, 9",
        description: "Ôn tập và học thuộc bảng cửu chương.",
        theory: "### Bảng nhân\nHọc thuộc lòng các bảng nhân để tính toán nhanh hơn.",
        examples: [],
        essays: [],
        mcqs: [],
        review: "Luyện tập hàng ngày để thuộc bảng cửu chương."
      }
    ]
  },
  "4": {
    id: "4",
    name: GradeLevel.Grade4,
    sessions: [
      {
        id: "s1_4",
        title: "Buổi 1: Số lớn và lớp triệu",
        description: "Đọc viết các số có nhiều chữ số.",
        theory: "### Hàng và Lớp\n- Lớp đơn vị: Hàng đơn vị, Hàng chục, Hàng trăm.\n- Lớp nghìn: Hàng nghìn, Hàng chục nghìn, Hàng trăm nghìn.\n- Lớp triệu: Hàng triệu, Hàng chục triệu, Hàng trăm triệu.",
        examples: [],
        essays: [],
        mcqs: [],
        review: "Tách số thành từng lớp để dễ đọc."
      }
    ]
  },
  "5": {
    id: "5",
    name: GradeLevel.Grade5,
    sessions: [
      {
        id: "s1_5",
        title: "Buổi 1: Phân số thập phân",
        description: "Khái niệm về phân số thập phân và hỗn số.",
        theory: "### Phân số thập phân\nPhân số thập phân là phân số có mẫu số là 10, 100, 1000... \n*Ví dụ:* $\\frac{3}{10}, \\frac{5}{100}$.",
        examples: [],
        essays: [],
        mcqs: [],
        review: "Phân số thập phân có thể viết dưới dạng số thập phân."
      }
    ]
  },
  "6": {
    id: "6",
    name: GradeLevel.Grade6,
    sessions: [
      {
        id: "s1_6",
        title: "Buổi 1: Tập hợp và Phần tử của tập hợp",
        description: "Làm quen với ngôn ngữ tập hợp, cách liệt kê, tính chất đặc trưng và các ký hiệu toán học cơ bản.",
        videoUrl: "https://www.youtube.com/watch?v=vWh41JLvOTM&list=PL5q2T2FxzK7W7fdMp5HMg69q1k7aW2_Z6",
        theory: `### 1. Làm quen với tập hợp
Trong toán học và đời sống, ta thường gặp các nhóm đối tượng.
*Ví dụ:* Tập hợp các học sinh trong lớp 6A, tập hợp các số tự nhiên nhỏ hơn 10.
- Tên tập hợp thường được đặt bằng chữ cái in hoa: $A, B, C, X...$
- Các phần tử của tập hợp được đặt trong dấu ngoặc nhọn $\\{\\ ... \\}$, cách nhau bởi dấu chấm phẩy ";".

### 2. Các ký hiệu cơ bản
- **Thuộc ($\\{in}$):** Nếu a là một phần tử của tập hợp A, ta viết $a \\in A$ (đọc là: a thuộc A).
- **Không thuộc ($\\{notin}$):** Nếu b không phải là phần tử của A, ta viết $b \\notin A$ (đọc là: b không thuộc A).

### 3. Hai cách mô tả tập hợp
Để viết một tập hợp, ta thường dùng hai cách:
- **Cách 1: Liệt kê các phần tử.**
  Ta viết tất cả các phần tử trong dấu ngoặc nhọn.
  *Quy tắc:* Mỗi phần tử chỉ được liệt kê **một lần**, thứ tự liệt kê **tùy ý**.
  *Ví dụ:* $A = \\{0; 1; 2; 3\\}$
- **Cách 2: Chỉ ra tính chất đặc trưng.**
  Ta chỉ ra tính chất chung cho các phần tử của tập hợp đó.
  *Ví dụ:* $A = \\{x \\in \\mathbb{N} | x < 4\\}$

### 4. Tập hợp số tự nhiên
- Tập hợp các số tự nhiên: $\\mathbb{N} = \\{0; 1; 2; 3; ...\\}$
- Tập hợp các số tự nhiên khác 0: $\\mathbb{N}^* = \\{1; 2; 3; ...\\}$
- *Lưu ý:* $0 \\notin \\mathbb{N}^*$ nhưng $0 \\in \\mathbb{N}$.`,
        examples: [
          {
            id: "ex1_6_1",
            problem: "Cho tập hợp $A = \\{x \\in \\mathbb{N} | 10 < x < 15\\}$.\na) Viết tập hợp A bằng cách liệt kê.\nb) Điền ký hiệu $\\in, \\notin$ vào chỗ trống: 12 ... A; 15 ... A.",
            solution: "a) Các số tự nhiên lớn hơn 10 và nhỏ hơn 15 là: 11, 12, 13, 14.\nVậy $A = \\{11; 12; 13; 14\\}$.\n\nb) Ta có:\n- $12 \\in A$ (vì 12 nằm trong tập hợp).\n- $15 \\notin A$ (vì điều kiện là $x < 15$, không lấy số 15)."
          },
          {
            id: "ex2_6_1",
            problem: "Viết tập hợp $L$ các chữ cái trong từ \"HOC SINH GIOI\".",
            solution: "Các chữ cái trong từ \"HOC SINH GIOI\" là: H, O, C, S, I, N, H, G, I, O, I.\n\nLoại bỏ các chữ cái trùng nhau (H, O, I xuất hiện nhiều lần), ta có:\n$L = \\{H; O; C; S; I; N; G\\}$."
          },
          {
            id: "ex3_6_1",
            problem: "Viết tập hợp các tháng (dương lịch) có 30 ngày trong năm.",
            solution: "Dựa vào quy tắc bàn tay hoặc lịch:\nCác tháng có 30 ngày là: Tháng 4, Tháng 6, Tháng 9, Tháng 11.\nVậy $T = \\{\\text{Tháng 4}; \\text{Tháng 6}; \\text{Tháng 9}; \\text{Tháng 11}\\}$."
          }
        ],
        essays: [
          {
            id: "es1_6_1",
            question: "Viết tập hợp $M$ các số tự nhiên chẵn, lớn hơn 20 và nhỏ hơn hoặc bằng 30 bằng hai cách.",
            solution: "**Cách 1 (Liệt kê):**\nCác số chẵn thỏa mãn điều kiện là: 22, 24, 26, 28, 30.\nVậy $M = \\{22; 24; 26; 28; 30\\}$.\n\n**Cách 2 (Đặc trưng):**\n$M = \\{x \\in \\mathbb{N} | x \\text{ chẵn}, 20 < x \\le 30\\}$."
          },
          {
            id: "es2_6_1",
            question: "Cho tập hợp $X = \\{1; 3; 5; 7; 9; ...; 99\\}$.\na) Viết tập hợp X bằng cách chỉ ra tính chất đặc trưng.\nb) Tính số phần tử của tập hợp X.",
            solution: "a) Nhận xét: Đây là tập hợp các số lẻ nhỏ hơn 100.\n$X = \\{x \\in \\mathbb{N} | x \\text{ lẻ}, x < 100\\}$.\n\nb) Số phần tử của X là:\n$(99 - 1) : 2 + 1 = 50$ (phần tử).\n(Công thức: (Cuối - Đầu) : Khoảng cách + 1)."
          }
        ],
        mcqs: [
          {
            id: "mcq1_6_1",
            question: "Cách viết tập hợp nào sau đây là ĐÚNG?",
            options: ["$A = [1; 2; 3]$", "$A = (1; 2; 3)$", "$A = 1; 2; 3$", "$A = \\{1; 2; 3\\}$"],
            correctIndex: 3,
            explanation: "Tập hợp phải được đặt trong dấu ngoặc nhọn $\\{\\ \\}$."
          },
          {
            id: "mcq2_6_1",
            question: "Cho $B = \\{x \\in \\mathbb{N}^* | x \\le 3\\}$. Tập hợp B là:",
            options: ["$\\{1; 2; 3\\}$", "$\\{0; 1; 2; 3\\}$", "$\\{1; 2\\}$", "$\\{0; 1; 2\\}$"],
            correctIndex: 0,
            explanation: "Vì $x \\in \\mathbb{N}^*$ nên x bắt đầu từ 1. $x \\le 3$ nên lấy cả 3. Vậy $B = \\{1; 2; 3\\}$."
          },
          {
            id: "mcq3_6_1",
            question: "Số phần tử của tập hợp $C = \\{x \\in \\mathbb{N} | 8 < x < 9\\}$ là:",
            options: ["1", "0", "Vô số", "2"],
            correctIndex: 1,
            explanation: "Giữa số tự nhiên 8 và 9 không có số tự nhiên nào cả. Vậy tập hợp C rỗng, số phần tử là 0."
          }
        ],
        review: "### Tổng kết bài học\n1. **Phần tử:** Mỗi phần tử chỉ được liệt kê 1 lần.\n2. **Ký hiệu:** Phân biệt rõ $\\in$ (thuộc) và $\\notin$ (không thuộc).\n3. **Tập rỗng:** Tập hợp không có phần tử nào gọi là tập rỗng, kí hiệu $\\emptyset$.\n4. **Số tự nhiên:** $\\mathbb{N}^*$ là tập các số tự nhiên bỏ đi số 0."
      },
      {
        id: "s2_6",
        title: "Buổi 2: Các phép toán trên tập số tự nhiên",
        description: "Ôn tập và nâng cao về cộng, trừ, nhân, chia và tính chất phân phối.",
        theory: `### 1. Phép cộng và phép nhân
- **Giao hoán:** $a + b = b + a$; $a . b = b . a$
- **Kết hợp:** $(a + b) + c = a + (b + c)$; $(ab)c = a(bc)$
- **Phân phối:** $a(b + c) = ab + ac$

### 2. Phép trừ và phép chia
- Phép trừ $a - b = c$ thực hiện được khi $a \\geq b$.
- Phép chia có dư: $a = b . q + r$ ($0 \\leq r < b$).
  - Nếu $r = 0$: Phép chia hết.
  - Nếu $r > 0$: Phép chia có dư.`,
        examples: [
          {
            id: "ex1_6_2",
            problem: "Tính nhanh: $28.64 + 28.36$.",
            solution: "Sử dụng tính chất phân phối:\n$28.(64 + 36) = 28 . 100 = 2800$."
          },
          {
            id: "ex2_6_2",
            problem: "Tìm x biết: $124 + (118 - x) = 217$.",
            solution: "$118 - x = 217 - 124$\n$118 - x = 93$\n$x = 118 - 93$\n$x = 25$."
          }
        ],
        essays: [
          {
            id: "es1_6_2",
            question: "Một phép chia có số chia là 12, thương là 5 và số dư là số dư lớn nhất có thể. Tìm số bị chia.",
            solution: "Số dư lớn nhất có thể bé hơn số chia (12) là 11.\nSố bị chia là: $12 . 5 + 11 = 60 + 11 = 71$."
          },
          {
            id: "es2_6_2",
            question: "Tính tổng dãy số cách đều: $S = 1 + 4 + 7 + ... + 100$.",
            solution: "1. Số số hạng: $(100 - 1) : 3 + 1 = 34$ số.\n2. Tổng $S = (100 + 1) . 34 : 2 = 101 . 17 = 1717$."
          }
        ],
        mcqs: [
          {
            id: "mcq1_6_2",
            question: "Trong phép chia cho 5, số dư có thể là những số nào?",
            options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 2, 3, 4", "Bất kỳ số nào"],
            correctIndex: 1,
            explanation: "Số dư luôn nhỏ hơn số chia. Số dư trong phép chia cho 5 là: 0, 1, 2, 3, 4."
          },
          {
            id: "mcq2_6_2",
            question: "Kết quả của phép tính $120 - 20 : 4$ là:",
            options: ["25", "115", "100", "125"],
            correctIndex: 1,
            explanation: "Nhân chia trước, cộng trừ sau. $120 - 5 = 115$."
          }
        ],
        review: "Lưu ý thứ tự thực hiện phép tính và điều kiện của số dư trong phép chia."
      },
      {
        id: "s3_6",
        title: "Buổi 3: Lũy thừa với số mũ tự nhiên",
        description: "Khái niệm lũy thừa, nhân chia hai lũy thừa cùng cơ số.",
        theory: `### 1. Lũy thừa
Lũy thừa bậc n của a là tích của n thừa số bằng nhau, mỗi thừa số bằng a.
$a^n = a . a ... a$ (n thừa số, $n \\neq 0$)
- a: cơ số
- n: số mũ
Quy ước: $a^1 = a$; $a^0 = 1$ (với $a \\neq 0$).

### 2. Nhân chia hai lũy thừa cùng cơ số
- Nhân: $a^m . a^n = a^{m+n}$
- Chia: $a^m : a^n = a^{m-n}$ ($a \\neq 0, m \\geq n$)

### 3. Thứ tự thực hiện phép tính
Lũy thừa $\\rightarrow$ Nhân và Chia $\\rightarrow$ Cộng và Trừ.`,
        examples: [
          {
            id: "ex1_6_3",
            problem: "Viết gọn tích sau dưới dạng lũy thừa: $5 . 5 . 5 . 25$.",
            solution: "$5 . 5 . 5 . 25 = 5^3 . 5^2 = 5^{3+2} = 5^5$."
          },
          {
            id: "ex2_6_3",
            problem: "Tính giá trị: $3^3 . 2 - 4^2$.",
            solution: "$27 . 2 - 16 = 54 - 16 = 38$."
          }
        ],
        essays: [
          {
            id: "es1_6_3",
            question: "Tìm số tự nhiên n biết: $2^n . 4 = 128$.",
            solution: "Ta có $4 = 2^2$ và $128 = 2^7$.\n$2^n . 2^2 = 2^7$\n$2^{n+2} = 2^7$\n$n + 2 = 7 \\Rightarrow n = 5$."
          },
          {
            id: "es2_6_3",
            question: "So sánh $2^{300}$ và $3^{200}$.",
            solution: "$2^{300} = (2^3)^{100} = 8^{100}$\n$3^{200} = (3^2)^{100} = 9^{100}$\nVì $8 < 9$ nên $8^{100} < 9^{100}$. Vậy $2^{300} < 3^{200}$."
          }
        ],
        mcqs: [
          {
            id: "mcq1_6_3",
            question: "Kết quả của phép tính $x^5 : x^2$ là:",
            options: ["$x^{2.5}$", "$x^3$", "$x^7$", "$x^{10}$"],
            correctIndex: 1,
            explanation: "Giữ nguyên cơ số, trừ số mũ: $5 - 2 = 3$."
          },
          {
            id: "mcq2_6_3",
            question: "Giá trị của $2^3$ là:",
            options: ["6", "5", "8", "9"],
            correctIndex: 2,
            explanation: "$2^3 = 2 . 2 . 2 = 8$ (Không phải $2 . 3 = 6$)."
          }
        ],
        review: "Sai lầm thường gặp: $a^n$ không phải là $a . n$. Hãy cẩn thận!"
      }
    ]
  },
  "7": {
    id: "7",
    name: GradeLevel.Grade7,
    sessions: [
      {
        id: "s1_7",
        title: "Buổi 1: Tập hợp Q các số hữu tỉ",
        description: "Hiểu khái niệm số hữu tỉ và biểu diễn chúng trên trục số.",
        theory: `### 1. Số hữu tỉ
Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$.
Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$.

### 2. Biểu diễn trên trục số
Mọi số hữu tỉ đều có thể biểu diễn trên trục số. Trên trục số, điểm biểu diễn số hữu tỉ x được gọi là điểm x.`,
        examples: [
          {
            id: "ex1_7",
            problem: "Các số 3; -0,5; 0; $2\\frac{5}{7}$ có là số hữu tỉ không?",
            solution: "Có, vì chúng đều viết được dưới dạng phân số:\n$3 = \\frac{3}{1}$\n$-0,5 = \\frac{-1}{2}$\n$0 = \\frac{0}{1}$\n$2\\frac{5}{7} = \\frac{19}{7}$"
          }
        ],
        essays: [
          {
            id: "es1_7",
            question: "So sánh hai số hữu tỉ: $x = \\frac{2}{-7}$ và $y = \\frac{-3}{11}$.",
            solution: "Ta đưa về mẫu dương rồi quy đồng:\n$x = \\frac{-2}{7} = \\frac{-22}{77}$\n$y = \\frac{-3}{11} = \\frac{-21}{77}$\nVì $-22 < -21$ nên $x < y$."
          }
        ],
        mcqs: [
          {
            id: "mcq1_7",
            question: "Khẳng định nào sau đây là SAI?",
            options: ["$\\mathbb{N} \\subset \\mathbb{Z}$", "$\\mathbb{Z} \\subset \\mathbb{Q}$", "$\\mathbb{Q} \\subset \\mathbb{Z}$", "$\\mathbb{N} \\subset \\mathbb{Q}$"],
            correctIndex: 2,
            explanation: "Tập hợp số hữu tỉ Q rộng hơn tập số nguyên Z, nên Z là con của Q, không phải ngược lại."
          }
        ],
        review: "Mọi số nguyên đều là số hữu tỉ. Số thập phân hữu hạn cũng là số hữu tỉ."
      }
    ]
  },
  "8": {
    id: "8",
    name: GradeLevel.Grade8,
    sessions: [
      {
        id: "s1_8",
        title: "Buổi 1: Đơn thức nhiều biến",
        description: "Khái niệm đơn thức, đơn thức thu gọn và bậc của đơn thức.",
        theory: `### 1. Đơn thức
Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.

### 2. Đơn thức thu gọn
Là đơn thức chỉ gồm tích của một số với các biến, mà mỗi biến đã được nâng lên lũy thừa với số mũ nguyên dương.

### 3. Bậc của đơn thức
Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó.`,
        examples: [
          {
            id: "ex1_8",
            problem: "Tìm bậc của đơn thức $5x^2y^3z$.",
            solution: "Số mũ của x là 2.\nSố mũ của y là 3.\nSố mũ của z là 1.\nTổng: $2 + 3 + 1 = 6$. Vậy bậc là 6."
          }
        ],
        essays: [
          {
            id: "es1_8",
            question: "Thu gọn đơn thức sau và tìm bậc: $A = (-\\frac{1}{3}x^2y)(6xy^3)$.",
            solution: "$A = (-\\frac{1}{3} . 6) . (x^2 . x) . (y . y^3)$\n$A = -2x^3y^4$\nBậc của A là $3 + 4 = 7$."
          }
        ],
        mcqs: [
          {
            id: "mcq1_8",
            question: "Biểu thức nào sau đây KHÔNG phải là đơn thức?",
            options: ["$2x^2y$", "$x + y$", "$-5$", "$x$"],
            correctIndex: 1,
            explanation: "$x + y$ là đa thức (tổng của hai đơn thức), không phải đơn thức."
          }
        ],
        review: "Nhớ quy tắc nhân đơn thức: Nhân hệ số với hệ số, nhân phần biến với phần biến (cộng số mũ)."
      }
    ]
  },
  "9": {
    id: "9",
    name: GradeLevel.Grade9,
    sessions: [
      {
        id: "s1_9",
        title: "Buổi 1: Căn bậc hai",
        description: "Định nghĩa căn bậc hai số học và điều kiện tồn tại.",
        theory: `### 1. Căn bậc hai số học
Với số dương a, số $\\sqrt{a}$ được gọi là căn bậc hai số học của a.
Số 0 cũng được gọi là căn bậc hai số học của 0.

### 2. Điều kiện xác định
$\\sqrt{A}$ xác định (có nghĩa) khi và chỉ khi $A \\geq 0$.

### 3. Hằng đẳng thức
$\\sqrt{A^2} = |A|$`,
        examples: [
          {
            id: "ex1_9",
            problem: "Tìm căn bậc hai số học của 49.",
            solution: "Vì $7^2 = 49$ và $7 > 0$ nên $\\sqrt{49} = 7$."
          }
        ],
        essays: [
          {
            id: "es1_9",
            question: "Tìm điều kiện của x để $\\sqrt{2x - 6}$ có nghĩa.",
            solution: "Biểu thức xác định khi $2x - 6 \\geq 0 \\Leftrightarrow 2x \\geq 6 \\Leftrightarrow x \\geq 3$."
          }
        ],
        mcqs: [
          {
            id: "mcq1_9",
            question: "Giá trị của $\\sqrt{(-5)^2}$ là:",
            options: ["-5", "5", "$\\pm 5$", "25"],
            correctIndex: 1,
            explanation: "Theo hằng đẳng thức: $\\sqrt{A^2} = |A|$. Vậy $\\sqrt{(-5)^2} = |-5| = 5$."
          }
        ],
        review: "Lưu ý: Căn bậc hai của số dương có 2 giá trị đối nhau, nhưng căn bậc hai SỐ HỌC chỉ lấy giá trị không âm."
      }
    ]
  },
  "10": {
    id: "10",
    name: GradeLevel.Grade10,
    sessions: [
      {
        id: "s1",
        title: "Buổi 1: Mệnh đề toán học",
        description: "Làm quen với các khái niệm cơ bản về mệnh đề, mệnh đề phủ định, kéo theo.",
        theory: `### 1. Định nghĩa Mệnh đề
Mệnh đề toán học là một câu khẳng định **đúng** hoặc **sai**.
Một câu khẳng định không thể vừa đúng vừa sai.

*Ví dụ:*
- "3 là số nguyên tố" là mệnh đề đúng.
- "Hà Nội là thủ đô của Pháp" là mệnh đề sai.
- "Hôm nay trời đẹp quá!" không phải là mệnh đề (câu cảm thán).

### 2. Mệnh đề phủ định
Cho mệnh đề P. Mệnh đề "Không phải P" được gọi là mệnh đề phủ định của P và kí hiệu là $\\overline{P}$.
Nếu P đúng thì $\\overline{P}$ sai, và ngược lại.

### 3. Mệnh đề kéo theo
Mệnh đề "Nếu P thì Q" được gọi là mệnh đề kéo theo, kí hiệu $P \\Rightarrow Q$.
Mệnh đề $P \\Rightarrow Q$ chỉ sai khi P đúng và Q sai.`,
        examples: [
          {
            id: "ex1",
            problem: "Trong các câu sau, câu nào là mệnh đề? Xét tính đúng sai.",
            solution: "a) $2 + 2 = 5$: Là mệnh đề (Sai).\nb) $x^2 + 1 > 0$: Là mệnh đề chứa biến (chưa xác định đúng sai nếu chưa biết x, nhưng thường được coi là mệnh đề đúng với mọi x thực).\nc) Hãy đi học đi!: Không phải mệnh đề (Câu mệnh lệnh)."
          },
          {
            id: "ex2",
            problem: "Phát biểu mệnh đề phủ định của mệnh đề: P: 'Mọi số nguyên tố đều là số lẻ'.",
            solution: "Mệnh đề phủ định $\\overline{P}$: 'Tồn tại ít nhất một số nguyên tố không phải là số lẻ'. (Mệnh đề này đúng vì số 2 là số nguyên tố chẵn)."
          }
        ],
        essays: [
          {
            id: "es1",
            question: "Xét tính đúng sai của mệnh đề kéo theo: 'Nếu tam giác ABC có một góc bằng 90 độ thì tam giác ABC là tam giác vuông'.",
            solution: "Mệnh đề này là **ĐÚNG**. \n\nGiải thích: Theo định nghĩa, tam giác vuông là tam giác có một góc vuông (90 độ). Do đó giả thiết P (góc = 90 độ) kéo theo kết luận Q (tam giác vuông) là hoàn toàn chính xác."
          },
          {
            id: "es2",
            question: "Cho mệnh đề A: 'Phương trình $x^2 - 4 = 0$ có nghiệm nguyên'. Mệnh đề A đúng hay sai? Viết mệnh đề phủ định.",
            solution: "1. Giải phương trình: $x^2 = 4 \\Rightarrow x = 2$ hoặc $x = -2$. Cả 2 đều là số nguyên.\n2. Vậy mệnh đề A là **ĐÚNG**.\n3. Mệnh đề phủ định: 'Phương trình $x^2 - 4 = 0$ vô nghiệm nguyên' hoặc 'Phương trình... không có nghiệm nguyên'."
          }
        ],
        mcqs: [
          {
            id: "mcq1",
            question: "Câu nào sau đây KHÔNG phải là mệnh đề?",
            options: [
              "5 là số chẵn.",
              "Mấy giờ rồi?",
              "Hà Nội là thủ đô của Việt Nam.",
              "1 + 1 = 3."
            ],
            correctIndex: 1,
            explanation: "'Mấy giờ rồi?' là câu nghi vấn (câu hỏi), không có tính đúng sai nên không phải là mệnh đề."
          },
          {
            id: "mcq2",
            question: "Phủ định của mệnh đề '$\\forall x \\in \\mathbb{R}, x^2 \\geq 0$' là:",
            options: [
              "$\\exists x \\in \\mathbb{R}, x^2 < 0$",
              "$\\forall x \\in \\mathbb{R}, x^2 < 0$",
              "$\\exists x \\in \\mathbb{R}, x^2 \\leq 0$",
              "$\\forall x \\notin \\mathbb{R}, x^2 \\geq 0$"
            ],
            correctIndex: 0,
            explanation: "Phủ định của 'với mọi' ($\\forall$) là 'tồn tại' ($\\exists$). Phủ định của 'lớn hơn hoặc bằng' ($\\geq$) là 'nhỏ hơn' (<)."
          }
        ],
        review: "TỔNG KẾT BUỔI 1:\n\n1. Nhận biết mệnh đề: Phải xác định được tính Đúng/Sai.\n2. Các loại mệnh đề: Phủ định, Kéo theo, Tương đương.\n3. Ký hiệu lượng từ: $\\forall$ (với mọi) và $\\exists$ (tồn tại).\n\nLưu ý: Phủ định của mệnh đề chứa $\\forall$ là mệnh đề chứa $\\exists$ và ngược lại."
      },
      {
        id: "s2",
        title: "Buổi 2: Tập hợp",
        description: "Khái niệm tập hợp, các cách xác định tập hợp và các phép toán trên tập hợp.",
        theory: "### 1. Tập hợp\nTập hợp là một khái niệm cơ bản. Có 2 cách xác định:\n- Liệt kê các phần tử: $A = \\{1; 2; 3\\}$\n- Chỉ ra tính chất đặc trưng: $A = \\{x \\in \\mathbb{N} | x < 4\\}$\n\n### 2. Tập con\n$A \\subset B$ nếu mọi phần tử của A đều thuộc B.\n\n### 3. Các phép toán\n- **Giao ($A \\cap B$):** Lấy phần tử chung.\n- **Hợp ($A \\cup B$):** Lấy tất cả phần tử của cả hai.\n- **Hiệu ($A \\setminus B$):** Thuộc A nhưng không thuộc B.",
        examples: [],
        essays: [],
        mcqs: [],
        review: "Nhớ kỹ biểu đồ Ven để hình dung các phép toán tập hợp."
      }
    ]
  },
  "11": {
    id: "11",
    name: GradeLevel.Grade11,
    sessions: [
      {
        id: "s1_11",
        title: "Buổi 1: Góc lượng giác",
        description: "Khái niệm góc lượng giác, đơn vị đo radian và đường tròn lượng giác.",
        theory: `### 1. Đơn vị Radian
Cung có độ dài bằng bán kính đường tròn có số đo là 1 radian.
$180^o = \\pi$ rad.

### 2. Đường tròn lượng giác
Là đường tròn định hướng có bán kính R = 1, tâm O là gốc tọa độ.
Điểm gốc A(1; 0).

### 3. Công thức đổi đơn vị
$\\alpha_{rad} = \\alpha_{do} . \\frac{\\pi}{180}$
$\\alpha_{do} = \\alpha_{rad} . \\frac{180}{\\pi}$`,
        examples: [
          {
            id: "ex1_11",
            problem: "Đổi $30^o$ sang radian.",
            solution: "$30 . \\frac{\\pi}{180} = \\frac{\\pi}{6}$ (rad)."
          }
        ],
        essays: [
          {
            id: "es1_11",
            question: "Một bánh xe quay 2 vòng trong 5 giây. Tính vận tốc góc theo radian/giây.",
            solution: "1 vòng = $2\\pi$ rad.\n2 vòng = $4\\pi$ rad.\nVận tốc góc $\\omega = \\frac{4\\pi}{5} \\approx 2,51$ rad/s."
          }
        ],
        mcqs: [
          {
            id: "mcq1_11",
            question: "Góc có số đo $\\frac{\\pi}{4}$ đổi sang độ là:",
            options: ["$30^o$", "$45^o$", "$60^o$", "$90^o$"],
            correctIndex: 1,
            explanation: "$\\frac{\\pi}{4} . \\frac{180}{\\pi} = \\frac{180}{4} = 45^o$."
          }
        ],
        review: "Nhớ công thức: $180^o = \\pi$ rad. Đường tròn lượng giác có bán kính bằng 1."
      }
    ]
  },
  "12": {
    id: "12",
    name: GradeLevel.Grade12,
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
};
