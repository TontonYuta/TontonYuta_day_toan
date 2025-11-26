
import { GradeData, GradeLevel } from "../types";

export const grade6: GradeData = {
  id: "6",
  name: GradeLevel.Grade6,
  chapters: [
    /* ============================================================
       CHƯƠNG 1 — SỐ TỰ NHIÊN
    ============================================================ */
    {
      id: "c1_6",
      title: "CHƯƠNG 1. SỐ TỰ NHIÊN",
      description: "Làm quen tập hợp, phần tử, phép toán số tự nhiên và tính chia hết.",
      sessions: [
        /* ---------- Buổi 1 ----------- */
        {
          id: "s1_6",
          title: "Buổi 1: Tập hợp và phần tử",
          description:
            "Ngôn ngữ tập hợp, cách mô tả tập hợp, ký hiệu ∈, ∉ và tập N.",
          videoUrl: "https://www.youtube.com/watch?v=vWh41JLvOTM",
          theory: `### 1. Tập hợp và phần tử
- Tập hợp: một nhóm các đối tượng.
- Ký hiệu: $a \\in A$, $b \\notin A$.

### 2. Hai cách viết tập hợp
- Liệt kê: $A = \\{1; 2; 3\\}$
- Chỉ ra tính chất: $A = \\{x \\in \\mathbb{N} | x < 4\\}$

### 3. Tập số tự nhiên
- $\\mathbb{N} = \\{0; 1; 2; ...\\}$
- $\\mathbb{N}^* = \\{1; 2; 3; ...\\}$`,
          examples: [
            {
              id: "ex1_6_1",
              problem:
                "Cho A = {x ∈ N | 10 < x < 15}. Viết A dạng liệt kê.",
              solution: "A = {11; 12; 13; 14}."
            }
          ],
          essays: [
            {
              id: "es1_6_1",
              question: "Viết tập các số chẵn từ 20 đến 30.",
              solution: "M = {22; 24; 26; 28; 30}."
            }
          ],
          mcqs: [
            {
              id: "mcq1_6_1",
              question: "Tập hợp nào viết đúng?",
              options: ["(1,2,3)", "[1,2,3]", "1,2,3", "{1; 2; 3}"],
              correctIndex: 3,
              explanation: "Tập hợp phải dùng dấu ngoặc nhọn."
            }
          ],
          review: "Nhớ ký hiệu ∈ và ∉, phân biệt hai cách viết tập hợp."
        },

        /* ---------- Buổi 2 ----------- */
        {
          id: "s2_6",
          title: "Buổi 2: Các phép toán số tự nhiên",
          description:
            "Cộng, trừ, nhân, chia; tính chất giao hoán, kết hợp, phân phối.",
          videoUrl: "https://www.youtube.com/watch?v=4qdn7MyTe-E",
          theory: `### 1. Cộng – nhân
- Giao hoán: $a + b = b + a$
- Kết hợp: $(a + b) + c = a + (b + c)$
- Phân phối: $a(b + c) = ab + ac$

### 2. Trừ – chia
- Trừ: a ≥ b
- Chia có dư: $a = bq + r$ với $0 ≤ r < b$`,
          examples: [
            {
              id: "ex2_6_1",
              problem: "28 × (64 + 36)",
              solution: "64 + 36 = 100 → 28 × 100 = 2800."
            }
          ],
          essays: [
            {
              id: "es2_6_1",
              question: "124 + (118 - x) = 217. Tìm x.",
              solution: "118 - x = 93 → x = 25."
            }
          ],
          mcqs: [
            {
              id: "mcq2_6_1",
              question: "Số dư trong phép chia cho 5 có thể là:",
              options: ["0,1,2,3,4", "1–5", "0–5", "1–4"],
              correctIndex: 0,
              explanation: "Số dư luôn nhỏ hơn số chia."
            }
          ],
          review: "Luôn thực hiện nhân chia trước, cộng trừ sau."
        },

        /* ---------- Buổi 3 ----------- */
        {
          id: "s3_6",
          title: "Buổi 3: Lũy thừa với số mũ tự nhiên",
          description: "Lũy thừa, quy tắc nhân – chia lũy thừa.",
          videoUrl: "https://www.youtube.com/watch?v=Sjhdz0-pJJ0",
          theory: `### 1. Lũy thừa
$a^n = a \\cdot a \\cdots a$ (n thừa số)
- $a^1 = a$, $a^0 = 1$ (a ≠ 0)

### 2. Quy tắc
- $a^m a^n = a^{m+n}$
- $a^m : a^n = a^{m-n}$`,
          examples: [
            {
              id: "ex3_6_1",
              problem: "Viết gọn: 5·5·5·25",
              solution: "5³·5² = 5⁵."
            }
          ],
          essays: [
            {
              id: "es3_6_1",
              question: "Tìm n: 2ⁿ × 4 = 128",
              solution: "4 = 2² → 2ⁿ·2² = 2⁷ → n = 5."
            }
          ],
          mcqs: [
            {
              id: "mcq3_6_1",
              question: "x⁵ : x² = ?",
              options: ["x²", "x³", "x⁷", "x²·5"],
              correctIndex: 1,
              explanation: "Trừ số mũ 5−2 = 3."
            }
          ],
          review: "Không nhầm: aⁿ ≠ a·n."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 2 — SỐ NGUYÊN
    ============================================================ */
    {
      id: "c2_6",
      title: "CHƯƠNG 2. SỐ NGUYÊN",
      description: "Số nguyên âm, số đối, trục số, quy tắc dấu.",
      sessions: [
        {
          id: "s4_6",
          title: "Buổi 4: Số nguyên âm – Trục số",
          description: "Định nghĩa số nguyên âm, số đối, so sánh số nguyên.",
          videoUrl: "https://www.youtube.com/watch?v=Z2BAsoAhH2I",
          theory: `### 1. Số nguyên âm
Có dấu “−”: −1, −2,...

### 2. Số nguyên
$\\mathbb{Z} = \\{... −2, −1, 0, 1, 2,...\\}$

### 3. Số đối
- Đối của 5 là −5
- Đối của −3 là 3`,
          examples: [
            {
              id: "ex4_6_1",
              problem: "Số đối của −12?",
              solution: "12."
            }
          ],
          essays: [
            {
              id: "es4_6_1",
              question: "Điền dấu: −5 … −3",
              solution: "−5 < −3."
            }
          ],
          mcqs: [
            {
              id: "mcq4_6_1",
              question: "Số nào lớn nhất?",
              options: ["−1", "−5", "−10", "−20"],
              correctIndex: 0,
              explanation: "Số âm nào gần 0 hơn thì lớn hơn."
            }
          ],
          review: "0 không là số âm cũng không là số dương."
        },

        {
          id: "s5_6",
          title: "Buổi 5: Quy tắc dấu",
          description: "Cộng, trừ, nhân, chia số nguyên.",
          videoUrl: "https://www.youtube.com/watch?v=QMTBQCtNV8M",
          theory: `### 1. Cộng số nguyên
- Cùng dấu: cộng trị tuyệt đối, giữ dấu.
- Khác dấu: lấy số lớn trừ số nhỏ, giữ dấu của số lớn.

### 2. Nhân/Chia
- Cùng dấu: dương
- Khác dấu: âm`,
          examples: [
            {
              id: "ex5_6_1",
              problem: "Tính: −5 + 12",
              solution: "12 − 5 = 7"
            }
          ],
          essays: [
            {
              id: "es5_6_1",
              question: "Tính: −3 × (−4)",
              solution: "12 (cùng dấu → dương)."
            }
          ],
          mcqs: [
            {
              id: "mcq5_6_1",
              question: "(−8) : 2 = ?",
              options: ["4", "−4", "−16", "16"],
              correctIndex: 1,
              explanation: "Khác dấu → âm."
            }
          ],
          review: "Quy tắc dấu rất quan trọng trong toàn bộ chương trình."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 3 — PHÂN SỐ
    ============================================================ */
    {
      id: "c3_6",
      title: "CHƯƠNG 3. PHÂN SỐ",
      description: "Rút gọn, quy đồng, so sánh và tính toán với phân số.",
      sessions: [
        {
          id: "s6_6",
          title: "Buổi 6: Rút gọn – Quy đồng",
          description: "Rút gọn phân số và tìm mẫu chung.",
          videoUrl: "https://www.youtube.com/watch?v=WD8G7h5i5nM",
          theory: `### 1. Rút gọn
Chia tử và mẫu cho cùng số.

### 2. Quy đồng
Đưa phân số về cùng mẫu.`,
          examples: [
            {
              id: "ex6_6_1",
              problem: "Rút gọn 15/25",
              solution: "15/25 = 3/5."
            }
          ],
          essays: [
            {
              id: "es6_6_1",
              question: "Quy đồng 2/3 và 5/6",
              solution: "2/3 = 4/6 → 4/6 và 5/6."
            }
          ],
          mcqs: [
            {
              id: "mcq6_6_1",
              question: "18/24 tối giản là:",
              options: ["3/4", "6/8", "9/12", "12/18"],
              correctIndex: 0,
              explanation: "Chia tử và mẫu cho 6."
            }
          ],
          review: "Rút gọn trước khi quy đồng giúp tính nhanh hơn."
        },

        {
          id: "s7_6",
          title: "Buổi 7: Cộng – Trừ phân số",
          description: "Cách cộng trừ phân số cùng mẫu và khác mẫu.",
          videoUrl: "https://www.youtube.com/watch?v=gNCzZcSdkGA",
          theory: `### 1. Cùng mẫu
Cộng/trừ tử.

### 2. Khác mẫu
Quy đồng rồi cộng/trừ.`,
          examples: [
            {
              id: "ex7_6_1",
              problem: "1/4 + 3/4",
              solution: "1/4 + 3/4 = 1."
            }
          ],
          essays: [
            {
              id: "es7_6_1",
              question: "2/3 + 1/6",
              solution: "2/3 = 4/6 → 4/6 + 1/6 = 5/6."
            }
          ],
          mcqs: [
            {
              id: "mcq7_6_1",
              question: "5/8 − 1/8 = ?",
              options: ["4/8", "6/8", "1/8", "3/8"],
              correctIndex: 0,
              explanation: "Cùng mẫu → 4/8 = 1/2."
            }
          ],
          review: "Luôn quy đồng trước khi cộng hoặc trừ."
        },

        {
          id: "s8_6",
          title: "Buổi 8: Nhân – Chia phân số",
          description: "Nhân phân số và chia bằng nghịch đảo.",
          videoUrl: "https://www.youtube.com/watch?v=F3Oy5fS-BSI",
          theory: `### 1. Nhân
(a/b)(c/d) = ac/bd

### 2. Chia
(a/b) : (c/d) = (a/b)(d/c)`,
          examples: [
            {
              id: "ex8_6_1",
              problem: "2/3 × 5/4",
              solution: "10/12 = 5/6."
            }
          ],
          essays: [
            {
              id: "es8_6_1",
              question: "3/5 : 2/3",
              solution: "3/5 × 3/2 = 9/10."
            }
          ],
          mcqs: [
            {
              id: "mcq8_6_1",
              question: "1/2 × 3/4 = ?",
              options: ["3/8", "6/4", "3/4", "1/6"],
              correctIndex: 0,
              explanation: "Nhân tử với tử, mẫu với mẫu."
            }
          ],
          review: "Chia phân số = nhân với phân số nghịch đảo."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 4 — SỐ ĐO & ĐẠI LƯỢNG
    ============================================================ */
    {
      id: "c4_6",
      title: "CHƯƠNG 4. SỐ ĐO VÀ ĐẠI LƯỢNG",
      description: "Đơn vị đo độ dài, diện tích; đổi đơn vị.",
      sessions: [
        {
          id: "s9_6",
          title: "Buổi 9: Đơn vị độ dài – diện tích",
          description: "mm, cm, dm, m và m², cm².",
          videoUrl: "https://www.youtube.com/watch?v=KXtG4N2VNEM",
          theory: `### 1. Độ dài
1 m = 100 cm = 1000 mm

### 2. Diện tích
1 m² = 10 000 cm²`,
          examples: [
            {
              id: "ex9_6_1",
              problem: "Đổi 3 m² → cm²",
              solution: "3 × 10000 = 30000 cm²."
            }
          ],
          essays: [
            {
              id: "es9_6_1",
              question: "Đổi 450 cm² → m²",
              solution: "450 / 10000 = 0.045 m²."
            }
          ],
          mcqs: [
            {
              id: "mcq9_6_1",
              question: "1 m bằng bao nhiêu cm?",
              options: ["10", "100", "1000", "1/100"],
              correctIndex: 1,
              explanation: "1 m = 100 cm."
            }
          ],
          review: "m² → cm²: nhân 10 000."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 5 — HÌNH HỌC CƠ BẢN
    ============================================================ */
    {
      id: "c5_6",
      title: "CHƯƠNG 5. HÌNH HỌC",
      description: "Điểm, đường thẳng, tia, đoạn thẳng và góc.",
      sessions: [
        {
          id: "s10_6",
          title: "Buổi 10: Điểm – đường thẳng – tia – đoạn thẳng",
          description: "Các khái niệm cơ bản trong hình học.",
          videoUrl: "https://www.youtube.com/watch?v=oK4qLEyG5JE",
          theory: `### 1. Điểm
Ký hiệu: A, B, C

### 2. Đường thẳng
Đi qua hai điểm.

### 3. Tia
Có gốc, kéo dài 1 phía.

### 4. Đoạn thẳng
Hai đầu cố định.`,
          examples: [
            {
              id: "ex10_6_1",
              problem: "Cho AB = 5 cm. Hãy vẽ đoạn thẳng.",
              solution: "Đặt thước, đo 5 cm, nối hai đầu."
            }
          ],
          essays: [],
          mcqs: [
            {
              id: "mcq10_6_1",
              question: "Tia có bao nhiêu đầu?",
              options: ["0", "1", "2", "Vô số"],
              correctIndex: 1,
              explanation: "Tia có 1 gốc và kéo dài một phía."
            }
          ],
          review: "Điểm → tia → đoạn → đường thẳng."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 6 — THỐNG KÊ & XÁC SUẤT
    ============================================================ */
    {
      id: "c6_6",
      title: "CHƯƠNG 6. THỐNG KÊ – XÁC SUẤT",
      description: "Thu thập số liệu, bảng tần số và thí nghiệm ngẫu nhiên.",
      sessions: [
        {
          id: "s11_6",
          title: "Buổi 11: Thu thập số liệu – bảng thống kê",
          description: "Lập bảng tần số, đọc số liệu.",
          videoUrl: "https://www.youtube.com/watch?v=ViZ5fE4koUc",
          theory: `### 1. Số liệu
Dữ liệu thu được từ khảo sát.

### 2. Bảng thống kê
Ghi giá trị và số lần xuất hiện.`,
          examples: [
            {
              id: "ex11_6_1",
              problem: "Lập bảng cho dãy: 5, 6, 6, 7",
              solution:
                "5: 1 lần\n6: 2 lần\n7: 1 lần"
            }
          ],
          essays: [],
          mcqs: [
            {
              id: "mcq11_6_1",
              question: "Trong dãy 2,3,3,4,4,4,5, số 4 xuất hiện:",
              options: ["1", "2", "3", "4"],
              correctIndex: 2,
              explanation: "4 xuất hiện 3 lần."
            }
          ],
          review: "Ghi nhớ cách lập bảng tần số."
        },

        {
          id: "s12_6",
          title: "Buổi 12: Thí nghiệm ngẫu nhiên",
          description: "Khái niệm ngẫu nhiên, kết quả có thể.",
          videoUrl: "https://www.youtube.com/watch?v=u8pt8kJxI3I",
          theory: `### 1. Thí nghiệm ngẫu nhiên
Không dự đoán chắc chắn kết quả.

### 2. Kết quả có thể
- Đồng xu: sấp, ngửa
- Xúc xắc: 1–6`,
          examples: [
            {
              id: "ex12_6_1",
              problem: "Tung xúc xắc cho kết quả gì?",
              solution: "1–6."
            }
          ],
          essays: [],
          mcqs: [
            {
              id: "mcq12_6_1",
              question: "Tung đồng xu có bao nhiêu kết quả?",
              options: ["1", "2", "3", "4"],
              correctIndex: 1,
              explanation: "Sấp – ngửa."
            }
          ],
          review: "Ngẫu nhiên = không thể đoán chắc trước."
        }
      ]
    }
  ]
};
