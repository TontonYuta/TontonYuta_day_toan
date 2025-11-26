
import { GradeData, GradeLevel } from "../types";

export const grade1: GradeData = {
  id: "1",
  name: GradeLevel.Grade1,
  chapters: [
    /* ============================================================
       CHƯƠNG 1 — CÁC SỐ ĐẾN 10
    ============================================================ */
    {
      id: "c1_1",
      title: "Chương 1: Các số đến 10",
      description: "Làm quen với dãy số 0–10, đếm đồ vật, so sánh và sắp xếp số.",
      sessions: [
        /* ---------- Buổi 1 ----------- */
        {
          id: "s1_1",
          title: "Buổi 1: Các số từ 0 đến 10",
          description: "Nhận biết, đọc – viết các số đến 10.",
          videoUrl: "https://www.youtube.com/watch?v=hDJrTn4DM3E",
          theory: `### 1. Dãy số 0–10
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

### 2. Ý nghĩa
- 0: không có gì.
- Các số khác cho biết số lượng đồ vật.

### 3. So sánh
- Số đứng sau thì lớn hơn.
- Số đứng trước thì bé hơn.

Ví dụ: $3 < 7$, $8 > 5$.`,
          examples: [
            {
              id: "ex1_1",
              problem: "Đếm số bông hoa (có 5 bông).",
              solution: "Số tương ứng: 5."
            }
          ],
          essays: [
            {
              id: "es1_1",
              question: "Viết các số từ 0 đến 10.",
              solution: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10."
            }
          ],
          mcqs: [
            {
              id: "mcq1_1",
              question: "Số nào lớn hơn 6?",
              options: ["5", "4", "7", "3"],
              correctIndex: 2,
              explanation: "7 lớn hơn 6."
            }
          ],
          review: "Ghi nhớ thứ tự các số 0–10."
        },

        /* ---------- Buổi 2 ----------- */
        {
          id: "s2_1",
          title: "Buổi 2: Đếm đồ vật",
          description: "Đếm và viết số tương ứng cho nhóm đồ vật.",
          videoUrl: "https://www.youtube.com/watch?v=hvp0iT0n0js",
          theory: `### 1. Đếm đồ vật
- Mỗi đồ vật chỉ đếm một lần.
- Đếm từ trái sang phải hoặc từ trên xuống dưới.

### 2. Viết số tương ứng
Đếm được bao nhiêu, viết số đó.`,
          examples: [
            {
              id: "ex2_1",
              problem: "Có 3 hình vuông. Viết số.",
              solution: "Số 3."
            }
          ],
          essays: [
            {
              id: "es2_1",
              question: "Có 8 quả bóng trong hình. Em hãy viết số tương ứng.",
              solution: "Số 8."
            }
          ],
          mcqs: [
            {
              id: "mcq2_1",
              question: "Có 2 con mèo. Số tương ứng là:",
              options: ["1", "2", "3", "4"],
              correctIndex: 1,
              explanation: "Có 2 con mèo."
            }
          ],
          review: "Đếm chính xác, không bỏ sót."
        },

        /* ---------- Buổi 3 ----------- */
        {
          id: "s3_1",
          title: "Buổi 3: So sánh và sắp xếp số",
          description: "Biết bé hơn, lớn hơn, sắp xếp tăng – giảm.",
          videoUrl: "https://www.youtube.com/watch?v=oDjc9KNy-mw",
          theory: `### 1. Thứ tự số
Tăng dần: 0, 1, 2, 3,... 10.

### 2. Kí hiệu
- Bé hơn: "<"
- Lớn hơn: ">"

### 3. Sắp xếp
Dựa vào vị trí trong dãy số.`,
          examples: [
            {
              id: "ex3_1",
              problem: "Sắp xếp 5, 1, 8 theo thứ tự tăng dần.",
              solution: "1, 5, 8."
            }
          ],
          essays: [
            {
              id: "es3_1",
              question: "Viết các số từ 10 đến 0.",
              solution: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0."
            }
          ],
          mcqs: [
            {
              id: "mcq3_1",
              question: "Số nào bé nhất?",
              options: ["1", "3", "2", "0"],
              correctIndex: 3,
              explanation: "0 là số bé nhất."
            }
          ],
          review: "Luôn so sánh phần vị trí trên tia số."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 2 — PHÉP CỘNG TRONG PHẠM VI 10
    ============================================================ */
    {
      id: "c2_1",
      title: "Chương 2: Phép cộng trong phạm vi 10",
      description: "Thực hiện phép cộng không nhớ bằng hình và bằng số.",
      sessions: [
        /* ---------- Buổi 4 ----------- */
        {
          id: "s4_1",
          title: "Buổi 4: Phép cộng không nhớ",
          description: "Cộng hai số bé bằng cách đếm thêm.",
          videoUrl: "https://www.youtube.com/watch?v=cit6dRz8DAc",
          theory: `### 1. Cách cộng
- Lấy số thứ nhất rồi đếm thêm số thứ hai.

Ví dụ: 3 + 2 = 5.`,
          examples: [
            {
              id: "ex4_1",
              problem: "Tính: 4 + 3",
              solution: "4 đếm thêm 3 → 7."
            }
          ],
          essays: [
            {
              id: "es4_1",
              question: "Liệt kê phép cộng có kết quả bằng 6.",
              solution: "0+6, 1+5, 2+4, 3+3, 4+2, 5+1, 6+0."
            }
          ],
          mcqs: [
            {
              id: "mcq4_1",
              question: "5 + 2 bằng bao nhiêu?",
              options: ["6", "7", "8", "5"],
              correctIndex: 1,
              explanation: "5 đếm thêm 2 → 7."
            }
          ],
          review: "Cộng bằng cách đếm thêm."
        },

        /* ---------- Buổi 5 ----------- */
        {
          id: "s5_1",
          title: "Buổi 5: Cộng bằng hình",
          description: "Nhìn tranh để thực hiện phép cộng.",
          videoUrl: "https://www.youtube.com/watch?v=tiX0MiYxFIA",
          theory: `### 1. Cộng bằng hình
- Đếm số hình nhóm 1.
- Đếm số hình nhóm 2.
- Cộng lại.`,
          examples: [
            {
              id: "ex5_1",
              problem: "Có 2 quả táo, thêm 3 quả nữa. Hỏi có tất cả bao nhiêu?",
              solution: "2 + 3 = 5."
            }
          ],
          essays: [
            {
              id: "es5_1",
              question: "Có 4 con mèo và thêm 4 con nữa. Có tất cả bao nhiêu con?",
              solution: "4 + 4 = 8."
            }
          ],
          mcqs: [
            {
              id: "mcq5_1",
              question: "1 quả + 5 quả = ?",
              options: ["4", "5", "6", "7"],
              correctIndex: 2,
              explanation: "1 + 5 = 6."
            }
          ],
          review: "Luôn đếm đủ tổng số hình."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 3 — PHÉP TRỪ TRONG PHẠM VI 10
    ============================================================ */
    {
      id: "c3_1",
      title: "Chương 3: Phép trừ trong phạm vi 10",
      description: "Bớt đi một số lượng và đếm ngược để trừ.",
      sessions: [
        /* ---------- Buổi 6 ----------- */
        {
          id: "s6_1",
          title: "Buổi 6: Phép trừ không nhớ",
          description: "Làm quen bớt đi và đếm lùi.",
          videoUrl: "https://www.youtube.com/watch?v=KB-ozubjeVY",
          theory: `### 1. Phép trừ là gì?
7 − 3 nghĩa là: có 7 đồ vật, bớt đi 3 → còn 4.

### 2. Đếm lùi
- Bắt đầu từ số lớn.
- Lùi từng số một.`,
          examples: [
            {
              id: "ex6_1",
              problem: "Tính 9 − 2.",
              solution: "9 lùi 2 đơn vị → 7."
            }
          ],
          essays: [
            {
              id: "es6_1",
              question: "Liệt kê phép trừ có kết quả bằng 5.",
              solution: "5−0, 6−1, 7−2, 8−3, 9−4, 10−5."
            }
          ],
          mcqs: [
            {
              id: "mcq6_1",
              question: "8 − 3 bằng bao nhiêu?",
              options: ["4", "5", "6", "7"],
              correctIndex: 1,
              explanation: "8 lùi 3 → 5."
            }
          ],
          review: "Trừ = đếm lùi."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 4 — ĐO ĐỘ DÀI
    ============================================================ */
    {
      id: "c4_1",
      title: "Chương 4: Đo độ dài (cm)",
      description: "Nhận biết thước, cách đo và đọc số đo.",
      sessions: [
        /* ---------- Buổi 7 ----------- */
        {
          id: "s7_1",
          title: "Buổi 7: Đo độ dài bằng cm",
          description: "Cách đặt thước, đọc vạch và đo vật.",
          videoUrl: "https://www.youtube.com/watch?v=DXXLX2qoA2U",
          theory: `### 1. Đơn vị cm
Dùng để đo đồ vật ngắn.

### 2. Cách đo
- Đặt vật trùng vạch 0.
- Đọc số ở đầu kia.`,
          examples: [
            {
              id: "ex7_1",
              problem: "Đo đoạn thẳng dài tới vạch 5.",
              solution: "Dài 5 cm."
            }
          ],
          essays: [
            {
              id: "es7_1",
              question: "Đo chiều dài bút chì (ví dụ 12 cm).",
              solution: "Ví dụ: bút chì dài 12 cm."
            }
          ],
          mcqs: [
            {
              id: "mcq7_1",
              question: "Sau vạch 3 cm là:",
              options: ["4 cm", "5 cm", "2 cm", "1 cm"],
              correctIndex: 0,
              explanation: "Sau 3 là 4 cm."
            }
          ],
          review: "Luôn bắt đầu đo từ vạch 0."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 5 — GIỜ – PHÚT
    ============================================================ */
    {
      id: "c5_1",
      title: "Chương 5: Thời gian (giờ – phút)",
      description: "Nhận biết đồng hồ, giờ, phút.",
      sessions: [
        /* ---------- Buổi 8 ----------- */
        {
          id: "s8_1",
          title: "Buổi 8: Nhận biết đồng hồ",
          description: "Xác định kim giờ, kim phút và đọc giờ đúng.",
          videoUrl: "https://www.youtube.com/watch?v=1miY8OVwB04",
          theory: `### 1. Các kim đồng hồ
- Kim ngắn: chỉ **giờ**
- Kim dài: chỉ **phút**

### 2. Đọc giờ đúng
Khi kim phút chỉ số 12 → “giờ đúng”.

Ví dụ: Kim ngắn chỉ 3 → 3 giờ.`,
          examples: [
            {
              id: "ex8_1",
              problem: "Kim ngắn chỉ 7, kim dài chỉ 12. Là mấy giờ?",
              solution: "7 giờ."
            }
          ],
          essays: [
            {
              id: "es8_1",
              question: "Hãy vẽ đồng hồ chỉ 5 giờ.",
              solution: "Kim ngắn hướng số 5, kim dài hướng số 12."
            }
          ],
          mcqs: [
            {
              id: "mcq8_1",
              question: "Kim dài chỉ số 12 nghĩa là:",
              options: ["Nửa giờ", "Giờ đúng", "1 phút", "5 phút"],
              correctIndex: 1,
              explanation: "Kim phút tại số 12 là giờ đúng."
            }
          ],
          review: "Nhớ: kim ngắn – giờ, kim dài – phút."
        }
      ]
    },

    /* ============================================================
       CHƯƠNG 6 — HÌNH HỌC CƠ BẢN
    ============================================================ */
    {
      id: "c6_1",
      title: "Chương 6: Hình học cơ bản",
      description: "Nhận biết hình vuông, hình tròn, hình tam giác, hình chữ nhật.",
      sessions: [
        /* ---------- Buổi 9 ----------- */
        {
          id: "s9_1",
          title: "Buổi 9: Các hình cơ bản",
          description: "Nhận biết và phân biệt 4 hình cơ bản.",
          videoUrl: "https://www.youtube.com/watch?v=F6l2qC1gk3k",
          theory: `### 1. Hình vuông
Có 4 cạnh bằng nhau.

### 2. Hình chữ nhật
Có 4 góc vuông.

### 3. Hình tam giác
Có 3 cạnh.

### 4. Hình tròn
Không có cạnh.`,
          examples: [
            {
              id: "ex9_1",
              problem: "Trong hình sau, đâu là hình tam giác?",
              solution: "Hình có 3 cạnh là hình tam giác."
            }
          ],
          essays: [
            {
              id: "es9_1",
              question: "Hãy kể tên 4 hình em biết.",
              solution: "Hình vuông, hình chữ nhật, hình tam giác, hình tròn."
            }
          ],
          mcqs: [
            {
              id: "mcq9_1",
              question: "Hình nào có 4 cạnh đều bằng nhau?",
              options: ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình chữ nhật"],
              correctIndex: 1,
              explanation: "Hình vuông có 4 cạnh bằng nhau."
            }
          ],
          review: "Ghi nhớ đặc điểm để phân biệt hình."
        }
      ]
    }
  ]
};
