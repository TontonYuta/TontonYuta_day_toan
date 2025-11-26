
import { GradeData, GradeLevel } from "./types";

// Helper to create rich text with newlines
const nl = `\n\n`;

/* 
  HƯỚNG DẪN TỰ THÊM BÀI HỌC (TEMPLATE):
  ----------------------------------------------------
  Cấu trúc mới: Grade -> Chapters -> Sessions
  
  Để thêm bài học mới:
  1. Tìm đến Lớp và Chương tương ứng.
  2. Thêm object bài học vào mảng 'sessions' của chương đó.
  ----------------------------------------------------
*/

export const MATH_DATA: Record<string, GradeData> = {
"1": {
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
},
  "2": {
  id: "2",
  name: GradeLevel.Grade2,
  chapters: [
    {
      id: "c1_2",
      title: "Chương 1: Phép cộng và phép trừ có nhớ",
      description: "Cộng – trừ có nhớ trong phạm vi 100.",
      sessions: [
        {
          id: "s1_2",
          title: "Buổi 1: Phép cộng có nhớ (phạm vi 100)",
          description: "Cộng hai số có nhớ sang hàng chục.",
          videoUrl: "https://www.youtube.com/watch?v=Zl8GQ_GJzBY",
          theory: `### 1. Quy tắc cộng có nhớ
- Cộng hàng đơn vị trước.
- Nếu tổng ≥ 10 thì viết hàng đơn vị, nhớ 1 sang hàng chục.

Ví dụ:
$28 + 17$
→ 8 + 7 = 15 → viết 5, nhớ 1
→ 2 + 1 + 1 = 4
Kết quả: 45.`,
          examples: [
            {
              id: "ex1_2_1",
              problem: "Tính: 46 + 27",
              solution: "6 + 7 = 13 → viết 3, nhớ 1. 4 + 2 + 1 = 7. Kết quả: 73."
            }
          ],
          essays: [
            {
              id: "es1_2_1",
              question: "Tính: 58 + 36",
              solution: "8 + 6 = 14 → nhớ 1. 5 + 3 + 1 = 9 → 94."
            }
          ],
          mcqs: [
            {
              id: "mcq1_2_1",
              question: "Kết quả của 47 + 28 là:",
              options: ["65", "75", "78", "85"],
              correctIndex: 1,
              explanation: "7 + 8 = 15, viết 5 nhớ 1. 4 + 2 + 1 = 7 → 75."
            }
          ],
          review: "Cộng hàng đơn vị trước, nhớ sang hàng chục."
        },
        {
          id: "s2_2",
          title: "Buổi 2: Phép trừ có nhớ (phạm vi 100)",
          description: "Thực hiện phép trừ mượn 1 chục.",
          videoUrl: "https://www.youtube.com/watch?v=3uo3xNatCxE",
          theory: `### 1. Quy tắc trừ có nhớ
- Trừ hàng đơn vị trước.
- Nếu đơn vị nhỏ hơn số trừ, mượn 1 chục.

Ví dụ:
$52 - 27$
→ 2 không trừ được 7 → mượn 1 thành 12.
→ 12 - 7 = 5.
→ 4 - 2 = 2.
Kết quả: 25.`,
          examples: [
            {
              id: "ex2_2_2",
              problem: "Tính: 71 − 46",
              solution: "11 − 6 = 5; 6 − 4 = 2 → 25."
            }
          ],
          essays: [
            {
              id: "es2_2_2",
              question: "Tính: 63 − 28",
              solution: "13 − 8 = 5; 5 − 2 = 3 → 35."
            }
          ],
          mcqs: [
            {
              id: "mcq2_2_2",
              question: "55 − 29 = ?",
              options: ["26", "25", "28", "29"],
              correctIndex: 0,
              explanation: "11 − 9 = 2; 4 − 2 = 2 → 26."
            }
          ],
          review: "Nhớ mượn 1 chục khi không đủ để trừ."
        }
      ]
    },

    {
      id: "c2_2",
      title: "Chương 2: Giải toán có lời văn",
      description: "Nhận diện dạng toán thêm – bớt – so sánh.",
      sessions: [
        {
          id: "s3_2",
          title: "Buổi 3: Toán thêm (phép cộng)",
          description: "Nhận diện từ khóa 'thêm', 'nhiều hơn'.",
          videoUrl: "https://www.youtube.com/watch?v=9c0WlAbIWyE",
          theory: `### 1. Toán dạng thêm
Dạng: Có a, thêm b → tất cả: a + b.`,
          examples: [
            {
              id: "ex3_2",
              problem: "Lan có 15 bút, được tặng thêm 4 bút. Hỏi có bao nhiêu bút?",
              solution: "15 + 4 = 19."
            }
          ],
          essays: [
            {
              id: "es3_2",
              question: "Có 28 quả táo, thêm 6 quả nữa. Hỏi có bao nhiêu quả?",
              solution: "28 + 6 = 34."
            }
          ],
          mcqs: [
            {
              id: "mcq3_2",
              question: "Tình huống nào là phép cộng?",
              options: ["Bớt 3 quả", "Chuyển đi 5 cái", "Thêm 4 cái", "Cho bớt 2 cái"],
              correctIndex: 2,
              explanation: "'Thêm' → cộng."
            }
          ],
          review: "Toán thêm → phép cộng."
        },
        {
          id: "s4_2",
          title: "Buổi 4: Toán bớt (phép trừ)",
          description: "Nhận diện từ khóa 'bớt', 'lấy đi'.",
          videoUrl: "https://www.youtube.com/watch?v=0HXq8fFsLmw",
          theory: `### 1. Toán dạng bớt
Dạng: Có a, bớt b → còn lại: a − b.`,
          examples: [
            {
              id: "ex4_2",
              problem: "Có 24 cái kẹo, ăn 5 cái. Còn lại bao nhiêu?",
              solution: "24 − 5 = 19."
            }
          ],
          essays: [
            {
              id: "es4_2",
              question: "63 quyển sách, chuyển đi 20 quyển. Còn lại bao nhiêu?",
              solution: "63 − 20 = 43."
            }
          ],
          mcqs: [
            {
              id: "mcq4_2",
              question: "Tình huống nào là phép trừ?",
              options: ["Thêm 3 quả", "Mua thêm 10 cái", "Bỏ đi 5 cái", "Gấp đôi số bánh"],
              correctIndex: 2,
              explanation: "'Bỏ đi' → trừ."
            }
          ],
          review: "Toán bớt → phép trừ."
        }
      ]
    },

    {
      id: "c3_2",
      title: "Chương 3: Bảng nhân – chia",
      description: "Làm quen với nhân – chia đơn giản.",
      sessions: [
        {
          id: "s5_2",
          title: "Buổi 5: Phép nhân",
          description: "Nhân là cộng nhiều lần.",
          videoUrl: "https://www.youtube.com/watch?v=7w0AMKpIPXw",
          theory: `### 1. Phép nhân
3 + 3 + 3 = 9 → 3 × 3 = 9.`,
          examples: [
            {
              id: "ex5_2",
              problem: "4 hộp, mỗi hộp 2 bút. Hỏi có bao nhiêu bút?",
              solution: "2 + 2 + 2 + 2 = 8 → 4 × 2 = 8."
            }
          ],
          essays: [
            {
              id: "es5_2",
              question: "5 nhóm, mỗi nhóm 3 quả bóng. Tổng bao nhiêu?",
              solution: "5 × 3 = 15."
            }
          ],
          mcqs: [
            {
              id: "mcq5_2",
              question: "3 + 3 + 3 + 3 ứng với phép nhân nào?",
              options: ["3 × 2", "4 × 3", "2 × 3", "8 × 2"],
              correctIndex: 1,
              explanation: "Có 4 nhóm 3 → 4 × 3."
            }
          ],
          review: "Nhân = cộng nhiều lần."
        },
        {
          id: "s6_2",
          title: "Buổi 6: Phép chia",
          description: "Chia là tách đều các nhóm.",
          videoUrl: "https://www.youtube.com/watch?v=c2Jt8ch5uGk",
          theory: `### 1. Phép chia
12 cái bánh chia 3 bạn → 4 cái mỗi bạn.`,
          examples: [
            {
              id: "ex6_2",
              problem: "15 kẹo chia đều cho 5 bạn.",
              solution: "15 : 5 = 3."
            }
          ],
          essays: [
            {
              id: "es6_2",
              question: "12 cái bánh chia 4 bạn. Mỗi bạn được bao nhiêu?",
              solution: "12 : 4 = 3."
            }
          ],
          mcqs: [
            {
              id: "mcq6_2",
              question: "16 : 4 = ?",
              options: ["2", "3", "4", "5"],
              correctIndex: 2,
              explanation: "16 chia 4 nhóm → mỗi nhóm 4."
            }
          ],
          review: "Chia = tách đều."
        }
      ]
    },

    {
      id: "c4_2",
      title: "Chương 4: Đo độ dài",
      description: "Đơn vị đo: cm, m, đổi đơn vị.",
      sessions: [
        {
          id: "s7_2",
          title: "Buổi 7: Cm và mét",
          description: "Hiểu 1 m = 100 cm.",
          videoUrl: "https://www.youtube.com/watch?v=EnTKoEtp5as",
          theory: `### 1. Đơn vị độ dài
- cm: vật nhỏ  
- m: vật dài  
- 1 m = 100 cm`,
          examples: [
            {
              id: "ex7_2",
              problem: "Đổi 3 m ra cm.",
              solution: "3 × 100 = 300 cm."
            }
          ],
          essays: [
            {
              id: "es7_2",
              question: "Đo đoạn thẳng dài 8 vạch.",
              solution: "Độ dài: 8 cm."
            }
          ],
          mcqs: [
            {
              id: "mcq7_2",
              question: "1 m bằng bao nhiêu cm?",
              options: ["10", "50", "100", "1000"],
              correctIndex: 2,
              explanation: "1 m = 100 cm."
            }
          ],
          review: "Ghi nhớ: 1 m = 100 cm."
        }
      ]
    },

    {
      id: "c5_2",
      title: "Chương 5: Thời gian",
      description: "Ngày – tháng – giờ – phút.",
      sessions: [
        {
          id: "s8_2",
          title: "Buổi 8: Ngày – giờ – phút",
          description: "Xem lịch, xem đồng hồ.",
          videoUrl: "https://www.youtube.com/watch?v=EqN9OnDn7cc",
          theory: `### 1. Thời gian
- Tuần có 7 ngày  
- Tháng có 28–31 ngày  
- 1 ngày = 24 giờ`,
          examples: [
            {
              id: "ex8_2",
              problem: "Kim ngắn chỉ 8, kim dài chỉ 12. Là mấy giờ?",
              solution: "8 giờ."
            }
          ],
          essays: [
            {
              id: "es8_2",
              question: "Một ngày có bao nhiêu giờ?",
              solution: "24 giờ."
            }
          ],
          mcqs: [
            {
              id: "mcq8_2",
              question: "Kim phút chỉ số 12 nghĩa là:",
              options: ["Nửa giờ", "Giờ đúng", "5 phút", "30 phút"],
              correctIndex: 1,
              explanation: "Kim phút chỉ 12 → giờ đúng."
            }
          ],
          review: "Nắm vững đơn vị thời gian."
        }
      ]
    },

    {
      id: "c6_2",
      title: "Chương 6: Hình học",
      description: "Nhận biết hình tam giác và tứ giác.",
      sessions: [
        {
          id: "s9_2",
          title: "Buổi 9: Hình tam giác – hình tứ giác",
          description: "Nhận dạng hình theo số cạnh.",
          videoUrl: "https://www.youtube.com/watch?v=8klkfjS3-p8",
          theory: `### 1. Hình tam giác
Có 3 cạnh.

### 2. Hình tứ giác
Có 4 cạnh.`,
          examples: [
            {
              id: "ex9_2",
              problem: "Hình nào là hình tam giác?",
              solution: "Hình có 3 cạnh."
            }
          ],
          essays: [
            {
              id: "es9_2",
              question: "Vẽ một hình tứ giác bất kỳ.",
              solution: "Hình gồm 4 cạnh."
            }
          ],
          mcqs: [
            {
              id: "mcq9_2",
              question: "Hình nào có 3 cạnh?",
              options: ["Hình vuông", "Hình tam giác", "Hình chữ nhật", "Hình tròn"],
              correctIndex: 1,
              explanation: "Tam giác có 3 cạnh."
            }
          ],
          review: "Đếm số cạnh để nhận biết hình."
        }
      ]
    }
  ]
},

"3": {
  id: "3",
  name: GradeLevel.Grade3,
  chapters: [
    {
      id: "c1_3",
      title: "Chương 1: Bảng nhân và bảng chia 6, 7, 8, 9",
      description: "Ôn tập và học thuộc các bảng nhân, bảng chia từ 6 đến 9.",
      sessions: [
        {
          id: "s1_3",
          title: "Buổi 1: Bảng nhân 6 và 7",
          description: "Ghi nhớ và vận dụng bảng nhân 6, 7.",
          videoUrl: "https://www.youtube.com/watch?v=Ofw3nZGfqqA",
          theory: `### 1. Bảng nhân 6
6 × 1 = 6  
6 × 2 = 12  
6 × 3 = 18  
6 × 4 = 24  
6 × 5 = 30  
6 × 6 = 36  
6 × 7 = 42  
6 × 8 = 48  
6 × 9 = 54  

### 2. Bảng nhân 7
7 × 1 = 7  
7 × 2 = 14  
7 × 3 = 21  
7 × 4 = 28  
7 × 5 = 35  
7 × 6 = 42  
7 × 7 = 49  
7 × 8 = 56  
7 × 9 = 63  

### 3. Ghi nhớ
- Đọc đi đọc lại nhiều lần.  
- Làm nhiều bài tập để thuộc lòng.`,
          examples: [
            {
              id: "ex1_3_1",
              problem: "Tính: 6 × 7",
              solution: "6 × 7 = 42."
            },
            {
              id: "ex2_3_1",
              problem: "Tính: 7 × 8",
              solution: "7 × 8 = 56."
            }
          ],
          essays: [
            {
              id: "es1_3_1",
              question: "Viết lại bảng nhân 6 đầy đủ.",
              solution: `6 × 1 = 6
6 × 2 = 12
6 × 3 = 18
6 × 4 = 24
6 × 5 = 30
6 × 6 = 36
6 × 7 = 42
6 × 8 = 48
6 × 9 = 54`
            }
          ],
          mcqs: [
            {
              id: "mcq1_3_1",
              question: "Giá trị của 6 × 8 là:",
              options: ["42", "40", "48", "54"],
              correctIndex: 2,
              explanation: "6 × 8 = 48."
            },
            {
              id: "mcq2_3_1",
              question: "Giá trị của 7 × 6 là:",
              options: ["36", "42", "49", "56"],
              correctIndex: 1,
              explanation: "7 × 6 = 42."
            }
          ],
          review: "Học thuộc bảng nhân 6, 7 để làm bài nhanh, chính xác."
        },
        {
          id: "s2_3",
          title: "Buổi 2: Bảng nhân 8 và 9",
          description: "Ghi nhớ và luyện tập bảng nhân 8, 9.",
          videoUrl: "https://www.youtube.com/watch?v=hZlUejMOxkc",
          theory: `### 1. Bảng nhân 8
8 × 1 = 8  
8 × 2 = 16  
8 × 3 = 24  
8 × 4 = 32  
8 × 5 = 40  
8 × 6 = 48  
8 × 7 = 56  
8 × 8 = 64  
8 × 9 = 72  

### 2. Bảng nhân 9
9 × 1 = 9  
9 × 2 = 18  
9 × 3 = 27  
9 × 4 = 36  
9 × 5 = 45  
9 × 6 = 54  
9 × 7 = 63  
9 × 8 = 72  
9 × 9 = 81  

### 3. Mẹo
- 9 × 10 = 90, nên 9 × 9 = 81 gần 90 nhưng bớt đi 9.`,
          examples: [
            {
              id: "ex1_3_2",
              problem: "Tính: 8 × 7",
              solution: "8 × 7 = 56."
            },
            {
              id: "ex2_3_2",
              problem: "Tính: 9 × 8",
              solution: "9 × 8 = 72."
            }
          ],
          essays: [
            {
              id: "es1_3_2",
              question: "Viết lại bảng nhân 9.",
              solution: `9 × 1 = 9
9 × 2 = 18
9 × 3 = 27
9 × 4 = 36
9 × 5 = 45
9 × 6 = 54
9 × 7 = 63
9 × 8 = 72
9 × 9 = 81`
            }
          ],
          mcqs: [
            {
              id: "mcq1_3_2",
              question: "Giá trị của 8 × 6 là:",
              options: ["46", "48", "56", "54"],
              correctIndex: 1,
              explanation: "8 × 6 = 48."
            },
            {
              id: "mcq2_3_2",
              question: "Giá trị của 9 × 7 là:",
              options: ["63", "56", "72", "81"],
              correctIndex: 0,
              explanation: "9 × 7 = 63."
            }
          ],
          review: "Luyện đọc trước gương hoặc đọc to để dễ thuộc bảng nhân 8, 9."
        },
        {
          id: "s3_3",
          title: "Buổi 3: Bảng chia 6, 7, 8, 9",
          description: "Vận dụng bảng nhân để lập bảng chia tương ứng.",
          videoUrl: "https://www.youtube.com/watch?v=SY-pB9YuaNw",
          theory: `### 1. Từ bảng nhân sang bảng chia
Ví dụ: 6 × 7 = 42  
→ 42 : 6 = 7  
→ 42 : 7 = 6  

### 2. Bảng chia 6 (ví dụ)
36 : 6 = 6  
42 : 6 = 7  
48 : 6 = 8  
54 : 6 = 9  

### 3. Lưu ý
- Phép chia là phép "ngược lại" của phép nhân.`,
          examples: [
            {
              id: "ex1_3_3",
              problem: "Biết 8 × 6 = 48. Tính 48 : 6.",
              solution: "48 : 6 = 8."
            },
            {
              id: "ex2_3_3",
              problem: "Biết 9 × 7 = 63. Tính 63 : 9.",
              solution: "63 : 9 = 7."
            }
          ],
          essays: [
            {
              id: "es1_3_3",
              question: "Lập các phép chia từ 8 × 7 = 56.",
              solution: "8 × 7 = 56 ⇒ 56 : 8 = 7 và 56 : 7 = 8."
            }
          ],
          mcqs: [
            {
              id: "mcq1_3_3",
              question: "48 : 8 = ?",
              options: ["5", "6", "7", "8"],
              correctIndex: 1,
              explanation: "Vì 8 × 6 = 48 nên 48 : 8 = 6."
            },
            {
              id: "mcq2_3_3",
              question: "72 : 9 = ?",
              options: ["7", "8", "9", "6"],
              correctIndex: 1,
              explanation: "9 × 8 = 72 nên 72 : 9 = 8."
            }
          ],
          review: "Muốn làm nhanh phép chia → nhớ bảng nhân."
        }
      ]
    },

    {
      id: "c2_3",
      title: "Chương 2: Số đến 1000",
      description: "Đọc, viết, so sánh các số có ba chữ số.",
      sessions: [
        {
          id: "s4_3",
          title: "Buổi 4: Đọc và viết số có ba chữ số",
          description: "Làm quen với trăm, chục, đơn vị.",
          videoUrl: "https://www.youtube.com/watch?v=yVIwPkWznh0",
          theory: `### 1. Cấu tạo số có ba chữ số
Ví dụ: 345  
- 3 trăm  
- 4 chục  
- 5 đơn vị  

### 2. Cách đọc
345: ba trăm bốn mươi lăm.`,
          examples: [
            {
              id: "ex1_4_3",
              problem: "Viết số: 'hai trăm mười bảy'.",
              solution: "217."
            },
            {
              id: "ex2_4_3",
              problem: "Cho số 406. Hãy cho biết số trăm, số chục, số đơn vị.",
              solution: "4 trăm, 0 chục, 6 đơn vị."
            }
          ],
          essays: [
            {
              id: "es1_4_3",
              question: "Viết số: 'chín trăm linh hai'.",
              solution: "902."
            }
          ],
          mcqs: [
            {
              id: "mcq1_4_3",
              question: "Số 'bốn trăm năm mươi sáu' viết là:",
              options: ["456", "465", "546", "564"],
              correctIndex: 0,
              explanation: "Bốn trăm (4), năm chục (5), sáu đơn vị (6) → 456."
            }
          ],
          review: "Xác định rõ hàng trăm, chục, đơn vị trước khi viết số."
        },
        {
          id: "s5_3",
          title: "Buổi 5: So sánh và sắp xếp số đến 1000",
          description: "So sánh dựa vào hàng trăm, chục, đơn vị.",
          videoUrl: "https://www.youtube.com/watch?v=H5z9yxkgWEI",
          theory: `### 1. Quy tắc so sánh
- So sánh hàng trăm trước.  
- Nếu bằng nhau → so sánh hàng chục.  
- Nếu vẫn bằng → so sánh hàng đơn vị.`,
          examples: [
            {
              id: "ex1_5_3",
              problem: "So sánh 456 và 462.",
              solution: "Cùng 4 trăm; so sánh chục: 5 < 6 → 456 < 462."
            }
          ],
          essays: [
            {
              id: "es1_5_3",
              question: "Sắp xếp các số sau theo thứ tự tăng dần: 305, 530, 350.",
              solution: "305, 350, 530."
            }
          ],
          mcqs: [
            {
              id: "mcq1_5_3",
              question: "Số nào lớn nhất?",
              options: ["789", "798", "879", "897"],
              correctIndex: 3,
              explanation: "So sánh lần lượt: 8 < 8 < 8 < 8 trăm; tiếp theo 7, 9, 7, 9 chục; cuối cùng đơn vị → 897 lớn nhất."
            }
          ],
          review: "So sánh từ trái sang phải: hàng trăm → hàng chục → hàng đơn vị."
        }
      ]
    },

    {
      id: "c3_3",
      title: "Chương 3: Giải toán có lời văn (nhân và chia)",
      description: "Áp dụng phép nhân, phép chia vào bài toán có lời văn.",
      sessions: [
        {
          id: "s6_3",
          title: "Buổi 6: Toán nhân (dạng nhiều lần)",
          description: "Nhận dạng bài toán 'gấp nhiều lần'.",
          videoUrl: "https://www.youtube.com/watch?v=r2uwJSPfU1w",
          theory: `### 1. Nhận dạng
Dạng: Mỗi nhóm có a phần tử, có b nhóm. Hỏi tất cả bao nhiêu?  
→ a × b.`,
          examples: [
            {
              id: "ex1_6_3",
              problem: "Một hộp có 8 chiếc bút, có 5 hộp như thế. Hỏi có bao nhiêu chiếc bút?",
              solution: "8 × 5 = 40 (chiếc bút)."
            }
          ],
          essays: [
            {
              id: "es1_6_3",
              question: "Một hàng cây có 6 cây, có 9 hàng như thế. Hỏi có tất cả bao nhiêu cây?",
              solution: "6 × 9 = 54 (cây)."
            }
          ],
          mcqs: [
            {
              id: "mcq1_6_3",
              question: "Mỗi túi có 7 viên bi, có 8 túi. Có tất cả bao nhiêu viên bi?",
              options: ["48", "52", "54", "56"],
              correctIndex: 3,
              explanation: "7 × 8 = 56."
            }
          ],
          review: "Toán nhân thường gắn với các từ: 'mỗi', 'có ... nhóm', 'gấp ... lần'."
        },
        {
          id: "s7_3",
          title: "Buổi 7: Toán chia (dạng chia đều)",
          description: "Nhận dạng bài toán chia đều thành các nhóm bằng nhau.",
          videoUrl: "https://www.youtube.com/watch?v=MITxeeKmdJg",
          theory: `### 1. Nhận dạng
Dạng: Có a phần tử, chia đều cho b nhóm. Hỏi mỗi nhóm bao nhiêu?  
→ a : b.`,
          examples: [
            {
              id: "ex1_7_3",
              problem: "Có 42 quyển vở, chia đều cho 7 bạn. Mỗi bạn được bao nhiêu quyển?",
              solution: "42 : 7 = 6 (quyển)."
            }
          ],
          essays: [
            {
              id: "es1_7_3",
              question: "Có 56 chiếc kẹo, chia đều cho 8 bạn. Mỗi bạn được bao nhiêu chiếc?",
              solution: "56 : 8 = 7 (chiếc)."
            }
          ],
          mcqs: [
            {
              id: "mcq1_7_3",
              question: "36 cái bánh chia đều cho 6 bạn, mỗi bạn được:",
              options: ["5", "6", "7", "8"],
              correctIndex: 1,
              explanation: "36 : 6 = 6."
            }
          ],
          review: "Toán chia thường có từ: 'chia đều', 'mỗi bạn', 'mỗi nhóm'."
        }
      ]
    },

    {
      id: "c4_3",
      title: "Chương 4: Phân số cơ bản",
      description: "Làm quen với khái niệm phân số và đọc, viết phân số đơn giản.",
      sessions: [
        {
          id: "s8_3",
          title: "Buổi 8: Khái niệm phân số",
          description: "Biết phân số chỉ phần bằng nhau của một đơn vị.",
          videoUrl: "https://www.youtube.com/watch?v=v2JmFdPYZ2E",
          theory: `### 1. Phân số là gì?
Khi chia một hình hay một lượng thành các phần bằng nhau, thì mỗi phần được biểu diễn bởi một phân số.

Ví dụ: Chia một cái bánh thành 4 phần bằng nhau, lấy 1 phần → phân số 1/4.

### 2. Cách đọc
1/2 đọc là 'một phần hai'  
3/5 đọc là 'ba phần năm'.`,
          examples: [
            {
              id: "ex1_8_3",
              problem: "Một đoạn thẳng được chia thành 5 phần bằng nhau, tô màu 2 phần. Phân số biểu diễn phần đã tô màu là:",
              solution: "2/5."
            }
          ],
          essays: [
            {
              id: "es1_8_3",
              question: "Cho hình tròn chia thành 8 phần bằng nhau, tô màu 3 phần. Hãy viết phân số chỉ phần đã tô màu.",
              solution: "3/8."
            }
          ],
          mcqs: [
            {
              id: "mcq1_8_3",
              question: "Phân số nào chỉ 'một phần tư'?",
              options: ["1/2", "1/3", "1/4", "2/4"],
              correctIndex: 2,
              explanation: "Một phần tư là 1/4."
            }
          ],
          review: "Phân số = số phần được lấy / tổng số phần bằng nhau."
        }
      ]
    },

    {
      id: "c5_3",
      title: "Chương 5: Đo độ dài, khối lượng, thời gian",
      description: "Ôn các đơn vị đo cơ bản và đổi đơn vị đơn giản.",
      sessions: [
        {
          id: "s9_3",
          title: "Buổi 9: Đơn vị đo độ dài (mm, cm, m)",
          description: "Làm quen với mm, nhắc lại cm, m.",
          videoUrl: "https://www.youtube.com/watch?v=EnTKoEtp5as",
          theory: `### 1. Đơn vị
- mm (milimét)  
- cm (xentimét)  
- m (mét)

### 2. Quan hệ
10 mm = 1 cm  
100 cm = 1 m.`,
          examples: [
            {
              id: "ex1_9_3",
              problem: "Đổi 5 cm ra mm.",
              solution: "5 × 10 = 50 mm."
            }
          ],
          essays: [
            {
              id: "es1_9_3",
              question: "Đổi 2 m ra cm.",
              solution: "2 × 100 = 200 cm."
            }
          ],
          mcqs: [
            {
              id: "mcq1_9_3",
              question: "1 cm bằng bao nhiêu mm?",
              options: ["10 mm", "5 mm", "100 mm", "1 mm"],
              correctIndex: 0,
              explanation: "1 cm = 10 mm."
            }
          ],
          review: "Ghi nhớ 10 mm = 1 cm, 100 cm = 1 m."
        },
        {
          id: "s10_3",
          title: "Buổi 10: Đơn vị đo khối lượng và thời gian",
          description: "Làm quen với kg, gam, giờ, phút.",
          videoUrl: "https://www.youtube.com/watch?v=EqN9OnDn7cc",
          theory: `### 1. Khối lượng
1 kg = 1000 g.

### 2. Thời gian
1 giờ = 60 phút.`,
          examples: [
            {
              id: "ex1_10_3",
              problem: "Đổi 3 kg ra gam.",
              solution: "3 × 1000 = 3000 g."
            }
          ],
          essays: [
            {
              id: "es1_10_3",
              question: "Một bài kiểm tra làm trong 45 phút. Hỏi 1 giờ có bao nhiêu phút?",
              solution: "1 giờ có 60 phút."
            }
          ],
          mcqs: [
            {
              id: "mcq1_10_3",
              question: "1 kg bằng:",
              options: ["10 g", "100 g", "1000 g", "10000 g"],
              correctIndex: 2,
              explanation: "1 kg = 1000 g."
            }
          ],
          review: "Nắm vững các mối quan hệ giữa các đơn vị đo."
        }
      ]
    },

    {
      id: "c6_3",
      title: "Chương 6: Hình học",
      description: "Chu vi hình chữ nhật, hình vuông và nhận biết một số hình cơ bản.",
      sessions: [
        {
          id: "s11_3",
          title: "Buổi 11: Chu vi hình chữ nhật và hình vuông",
          description: "Công thức tính chu vi hình chữ nhật, hình vuông.",
          videoUrl: "https://www.youtube.com/watch?v=39q2NzynrxE",
          theory: `### 1. Chu vi hình vuông
Chu vi = cạnh × 4.

### 2. Chu vi hình chữ nhật
Chu vi = (chiều dài + chiều rộng) × 2.`,
          examples: [
            {
              id: "ex1_11_3",
              problem: "Một hình vuông có cạnh 5 cm. Tính chu vi.",
              solution: "Chu vi = 5 × 4 = 20 cm."
            },
            {
              id: "ex2_11_3",
              problem: "Một hình chữ nhật có chiều dài 8 cm, chiều rộng 4 cm. Tính chu vi.",
              solution: "Chu vi = (8 + 4) × 2 = 12 × 2 = 24 cm."
            }
          ],
          essays: [
            {
              id: "es1_11_3",
              question: "Một mảnh vườn hình chữ nhật có chiều dài 15 m và chiều rộng 10 m. Tính chu vi mảnh vườn.",
              solution: "Chu vi = (15 + 10) × 2 = 25 × 2 = 50 m."
            }
          ],
          mcqs: [
            {
              id: "mcq1_11_3",
              question: "Hình vuông cạnh 7 cm có chu vi:",
              options: ["14 cm", "21 cm", "28 cm", "35 cm"],
              correctIndex: 2,
              explanation: "Chu vi = 7 × 4 = 28 cm."
            }
          ],
          review: "Chu vi là tổng độ dài các cạnh bao quanh hình."
        }
      ]
    }
  ]
},

"4": {
  id: "4",
  name: GradeLevel.Grade4,
  chapters: [
    {
      id: "c1_4",
      title: "Chương 1: Số tự nhiên và phép tính",
      description: "Đọc, viết, so sánh số tự nhiên lớn đến hàng triệu. Thực hiện cộng, trừ, nhân, chia.",
      sessions: [
        {
          id: "s1_4",
          title: "Buổi 1: Số tự nhiên lớn – Lớp triệu",
          description: "Đọc và viết số đến hàng triệu.",
          videoUrl: "https://www.youtube.com/watch?v=YqvL4ju0R80",
          theory: `### 1. Cấu tạo số có nhiều chữ số
- Số có thể được chia thành các lớp:  
  - Lớp đơn vị: đơn vị, chục, trăm  
  - Lớp nghìn: nghìn, chục nghìn, trăm nghìn  
  - Lớp triệu: triệu, chục triệu, trăm triệu  

### 2. Cách đọc số
Ví dụ: 5 372 408  
→ Năm triệu ba trăm bảy mươi hai nghìn bốn trăm linh tám.`,
          examples: [
            {
              id: "ex1_4_1",
              problem: "Đọc số: 2 406 013.",
              solution: "Hai triệu bốn trăm linh sáu nghìn không trăm mười ba."
            }
          ],
          essays: [
            {
              id: "es1_4_1",
              question: "Viết số: 'Bảy triệu không trăm tám mươi hai nghìn năm trăm'.",
              solution: "7 082 500."
            }
          ],
          mcqs: [
            {
              id: "mcq1_4_1",
              question: "Số nào lớn nhất?",
              options: ["5 430 200", "5 403 200", "5 304 200", "5 340 200"],
              correctIndex: 0,
              explanation: "So sánh từ trái qua phải: hàng triệu → trăm nghìn → …"
            }
          ],
          review: "Luôn tách số thành từng lớp để đọc và viết chính xác."
        },

        {
          id: "s2_4",
          title: "Buổi 2: Cộng và trừ số lớn",
          description: "Cộng/trừ số tự nhiên có nhiều chữ số.",
          videoUrl: "https://www.youtube.com/watch?v=ANodt_YnAf8",
          theory: `### 1. Quy tắc
- Đặt tính thẳng cột.  
- Cộng/trừ từ phải sang trái.  
- Ghi nhớ khi cần thiết.`,
          examples: [
            {
              id: "ex2_4_2",
              problem: "Tính: 345 600 + 78 429",
              solution: "345 600 + 78 429 = 424 029."
            }
          ],
          essays: [
            {
              id: "es2_4_2",
              question: "Tính: 908 230 − 45 128",
              solution: "908 230 − 45 128 = 863 102."
            }
          ],
          mcqs: [
            {
              id: "mcq2_4_2",
              question: "Kết quả của 700 000 − 698 999 là:",
              options: ["1 001", "2 001", "3 001", "999"],
              correctIndex: 0,
              explanation: "700 000 − 698 999 = 1 001."
            }
          ],
          review: "Với số lớn, cần đặt tính cẩn thận để tránh nhầm."
        },

        {
          id: "s3_4",
          title: "Buổi 3: Nhân và chia số có nhiều chữ số",
          description: "Nhân số có hai, ba chữ số; chia cho số có một chữ số.",
          videoUrl: "https://www.youtube.com/watch?v=rn1x-sG7nQI",
          theory: `### 1. Nhân số có nhiều chữ số
Nhân từng hàng ⇒ cộng kết quả từng bước.

### 2. Chia số tự nhiên
- Thực hiện từ trái sang phải.
- Viết thương theo thứ tự.`,
          examples: [
            {
              id: "ex3_4_3",
              problem: "Tính: 324 × 23",
              solution: "324 × 23 = 7 452."
            }
          ],
          essays: [
            {
              id: "es3_4_3",
              question: "Chia: 8 456 : 4",
              solution: "8 456 : 4 = 2 114."
            }
          ],
          mcqs: [
            {
              id: "mcq3_4_3",
              question: "Kết quả của 125 × 8 là:",
              options: ["1000", "1024", "950", "875"],
              correctIndex: 0,
              explanation: "125 × 8 = 1000."
            }
          ],
          review: "Đặt tính rõ ràng, cẩn thận khi nhân/chia nhiều bước."
        }
      ]
    },

    {
      id: "c2_4",
      title: "Chương 2: Phân số",
      description: "Khái niệm phân số, rút gọn phân số, quy đồng mẫu số.",
      sessions: [
        {
          id: "s4_4",
          title: "Buổi 4: Khái niệm phân số",
          description: "Phân số biểu diễn phần bằng nhau được chia ra.",
          videoUrl: "https://www.youtube.com/watch?v=v2JmFdPYZ2E",
          theory: `### 1. Phân số
Phân số dạng \\( \\frac{a}{b} \\) với b ≠ 0.

### 2. Ý nghĩa
- a: số phần được lấy  
- b: tổng số phần bằng nhau`,
          examples: [
            {
              id: "ex4_4_1",
              problem: "Một hình tròn chia thành 5 phần bằng nhau, tô màu 2 phần. Phân số là:",
              solution: "2/5."
            }
          ],
          essays: [
            {
              id: "es4_4_1",
              question: "Tô màu 3 phần trong 8 phần bằng nhau. Viết phân số.",
              solution: "3/8."
            }
          ],
          mcqs: [
            {
              id: "mcq4_4_1",
              question: "Phân số nào lớn hơn?",
              options: ["1/3", "2/3", "1/6", "1/2"],
              correctIndex: 1,
              explanation: "2/3 lớn nhất trong các phân số trên."
            }
          ],
          review: "Phân số phải có mẫu ≠ 0."
        },

        {
          id: "s5_4",
          title: "Buổi 5: Rút gọn phân số",
          description: "Chia cả tử và mẫu cho cùng một số.",
          videoUrl: "https://www.youtube.com/watch?v=iWcA_2KmkRI",
          theory: `### 1. Quy tắc rút gọn phân số
Chia tử và mẫu cho cùng một ước chung.

Ví dụ: \\( \\frac{12}{18} = \\frac{2}{3} \\).`,
          examples: [
            {
              id: "ex5_4_2",
              problem: "Rút gọn 15/25.",
              solution: "Chia cả tử và mẫu cho 5 → 3/5."
            }
          ],
          essays: [
            {
              id: "es5_4_2",
              question: "Rút gọn 24/36.",
              solution: "Chia cả tử và mẫu cho 12 → 2/3."
            }
          ],
          mcqs: [
            {
              id: "mcq5_4_2",
              question: "Phân số 16/24 rút gọn còn:",
              options: ["4/6", "2/3", "1/2", "2/6"],
              correctIndex: 1,
              explanation: "16/24 chia cả tử và mẫu cho 8 → 2/3."
            }
          ],
          review: "Luôn tìm ước chung lớn nhất để rút nhanh."
        },

        {
          id: "s6_4",
          title: "Buổi 6: Quy đồng mẫu số",
          description: "Đưa các phân số về cùng mẫu.",
          videoUrl: "https://www.youtube.com/watch?v=uSgPi_iD3TY",
          theory: `### 1. Quy đồng
Muốn quy đồng: nhân cả tử và mẫu cho hệ số thích hợp.

Ví dụ: \\( \\frac{1}{3} \\) và \\( \\frac{1}{4} \\)  
→ mẫu chung = 12  
→ 1/3 = 4/12  
→ 1/4 = 3/12.`,
          examples: [
            {
              id: "ex6_4_3",
              problem: "Quy đồng: 2/5 và 3/10.",
              solution: "Mẫu chung 10 → 2/5 = 4/10; 3/10 giữ nguyên."
            }
          ],
          essays: [
            {
              id: "es6_4_3",
              question: "Quy đồng 3/8 và 5/12.",
              solution: "Mẫu chung 24 → 3/8 = 9/24; 5/12 = 10/24."
            }
          ],
          mcqs: [
            {
              id: "mcq6_4_3",
              question: "Mẫu chung nhỏ nhất của 1/6 và 1/8 là:",
              options: ["12", "24", "36", "48"],
              correctIndex: 1,
              explanation: "Bội chung nhỏ nhất của 6 và 8 là 24."
            }
          ],
          review: "Nhớ tìm mẫu chung nhỏ nhất để quy đồng nhanh."
        }
      ]
    },

    {
      id: "c3_4",
      title: "Chương 3: Hình học",
      description: "Nhận biết các yếu tố hình học và tính chu vi – diện tích.",
      sessions: [
        {
          id: "s7_4",
          title: "Buổi 7: Đường thẳng – đoạn thẳng – tia",
          description: "Nhận dạng các yếu tố cơ bản của hình học.",
          videoUrl: "https://www.youtube.com/watch?v=z18S46Q7b8o",
          theory: `### 1. Đường thẳng
Kéo dài vô hạn hai phía.

### 2. Đoạn thẳng
Có hai đầu mút.

### 3. Tia
Có một đầu mút và kéo dài về một phía.`,
          examples: [
            {
              id: "ex7_4",
              problem: "Cho điểm A và B. Đoạn thẳng AB có mấy đầu mút?",
              solution: "Có 2 đầu mút: A và B."
            }
          ],
          essays: [
            {
              id: "es7_4",
              question: "Vẽ một tia xuất phát từ điểm O.",
              solution: "Tia có một đầu mút O."
            }
          ],
          mcqs: [
            {
              id: "mcq7_4",
              question: "Hình nào kéo dài về hai phía?",
              options: ["Đoạn thẳng", "Tia", "Đường thẳng", "Hình tròn"],
              correctIndex: 2,
              explanation: "Đường thẳng kéo dài vô hạn về hai phía."
            }
          ],
          review: "Ghi nhớ đặc điểm của từng loại để phân biệt."
        },

        {
          id: "s8_4",
          title: "Buổi 8: Chu vi các hình",
          description: "Cách tính chu vi hình chữ nhật, vuông, tam giác.",
          videoUrl: "https://www.youtube.com/watch?v=AJZqRFmt0Js",
          theory: `### 1. Chu vi hình vuông
C = cạnh × 4

### 2. Chu vi hình chữ nhật
C = (dài + rộng) × 2

### 3. Chu vi tam giác
C = tổng độ dài ba cạnh`,
          examples: [
            {
              id: "ex8_4",
              problem: "Hình vuông cạnh 9 cm. Tính chu vi.",
              solution: "C = 9 × 4 = 36 cm."
            }
          ],
          essays: [
            {
              id: "es8_4",
              question: "Hình chữ nhật dài 12 cm, rộng 7 cm. Tính chu vi.",
              solution: "C = (12 + 7) × 2 = 38 cm."
            }
          ],
          mcqs: [
            {
              id: "mcq8_4",
              question: "Công thức chu vi hình vuông là:",
              options: ["C = a + b", "C = a × 4", "C = a × 2", "C = a + 4"],
              correctIndex: 1,
              explanation: "Chu vi hình vuông = cạnh × 4."
            }
          ],
          review: "Thuộc công thức là chìa khóa để làm nhanh."
        },

        {
          id: "s9_4",
          title: "Buổi 9: Diện tích hình chữ nhật – hình vuông",
          description: "Tính diện tích dựa vào công thức.",
          videoUrl: "https://www.youtube.com/watch?v=RADNPy8jYDo",
          theory: `### 1. Diện tích hình vuông
S = cạnh × cạnh

### 2. Diện tích hình chữ nhật
S = dài × rộng`,
          examples: [
            {
              id: "ex9_4",
              problem: "Hình vuông cạnh 7 cm. Tính diện tích.",
              solution: "S = 7 × 7 = 49 cm²."
            }
          ],
          essays: [
            {
              id: "es9_4",
              question: "Hình chữ nhật dài 15 cm, rộng 9 cm. Tính diện tích.",
              solution: "S = 15 × 9 = 135 cm²."
            }
          ],
          mcqs: [
            {
              id: "mcq9_4",
              question: "Diện tích hình vuông cạnh 8 cm là:",
              options: ["24 cm²", "16 cm²", "64 cm²", "48 cm²"],
              correctIndex: 2,
              explanation: "8 × 8 = 64 cm²."
            }
          ],
          review: "Nhớ công thức S = dài × rộng; S = cạnh × cạnh."
        }
      ]
    },

    {
      id: "c4_4",
      title: "Chương 4: Đại lượng và đo đại lượng",
      description: "Đơn vị đo độ dài, khối lượng, diện tích, thời gian.",
      sessions: [
        {
          id: "s10_4",
          title: "Buổi 10: Đơn vị độ dài (km – m – cm – mm)",
          description: "Đổi đơn vị đo độ dài.",
          videoUrl: "https://www.youtube.com/watch?v=EnTKoEtp5as",
          theory: `1 km = 1000 m  
1 m = 100 cm  
1 cm = 10 mm`,
          examples: [
            {
              id: "ex10_4",
              problem: "Đổi 3 km ra m.",
              solution: "3 × 1000 = 3000 m."
            }
          ],
          essays: [
            {
              id: "es10_4",
              question: "Đổi 250 cm ra m.",
              solution: "250 cm = 2.5 m."
            }
          ],
          mcqs: [
            {
              id: "mcq10_4",
              question: "1 km bằng bao nhiêu m?",
              options: ["100", "1000", "10000", "500"],
              correctIndex: 1,
              explanation: "1 km = 1000 m."
            }
          ],
          review: "Học thuộc bảng chuyển đổi."
        },

        {
          id: "s11_4",
          title: "Buổi 11: Đơn vị khối lượng (tấn – kg – g)",
          description: "Đổi đơn vị khối lượng.",
          videoUrl: "https://www.youtube.com/watch?v=yDwLj_rdNRc",
          theory: `1 tấn = 1000 kg  
1 kg = 1000 g`,
          examples: [
            {
              id: "ex11_4",
              problem: "Đổi 5 kg ra gam.",
              solution: "5 kg = 5000 g."
            }
          ],
          essays: [
            {
              id: "es11_4",
              question: "Đổi 2 tấn ra kg.",
              solution: "2 × 1000 = 2000 kg."
            }
          ],
          mcqs: [
            {
              id: "mcq11_4",
              question: "1 kg bằng bao nhiêu gam?",
              options: ["10 g", "100 g", "1000 g", "10000 g"],
              correctIndex: 2,
              explanation: "1 kg = 1000 g."
            }
          ],
          review: "Nắm rõ quan hệ giữa tấn – kg – g."
        },

        {
          id: "s12_4",
          title: "Buổi 12: Thời gian – Giờ, phút, giây",
          description: "Đọc đồng hồ, đổi giờ – phút – giây.",
          videoUrl: "https://www.youtube.com/watch?v=EqN9OnDn7cc",
          theory: `1 giờ = 60 phút  
1 phút = 60 giây`,
          examples: [
            {
              id: "ex12_4",
              problem: "Đổi 2 giờ ra phút.",
              solution: "2 × 60 = 120 phút."
            }
          ],
          essays: [
            {
              id: "es12_4",
              question: "Đổi 180 giây ra phút.",
              solution: "180 : 60 = 3 phút."
            }
          ],
          mcqs: [
            {
              id: "mcq12_4",
              question: "1 giờ có bao nhiêu phút?",
              options: ["30", "45", "60", "120"],
              correctIndex: 2,
              explanation: "1 giờ = 60 phút."
            }
          ],
          review: "Ghi nhớ 60 phút = 1 giờ."
        }
      ]
    },

    {
      id: "c5_4",
      title: "Chương 5: Giải toán có lời văn",
      description: "Bài toán tổng – hiệu – gấp nhiều lần – trung bình cộng.",
      sessions: [
        {
          id: "s13_4",
          title: "Buổi 13: Bài toán tìm số trung bình cộng",
          description: "Tính trung bình cộng của nhiều số.",
          videoUrl: "https://www.youtube.com/watch?v=FkFVXGEDtqg",
          theory: `### 1. Trung bình cộng
= Tổng các số : số lượng số.`,
          examples: [
            {
              id: "ex13_4",
              problem: "Tìm trung bình cộng của 4, 7, 9.",
              solution: "(4 + 7 + 9) : 3 = 20 : 3 = 6.67."
            }
          ],
          essays: [
            {
              id: "es13_4",
              question: "TBC của 12, 16, 20, 24 là:",
              solution: "(12 + 16 + 20 + 24) : 4 = 18."
            }
          ],
          mcqs: [
            {
              id: "mcq13_4",
              question: "TBC của 6 và 10 là:",
              options: ["6", "8", "10", "12"],
              correctIndex: 1,
              explanation: "(6 + 10) : 2 = 8."
            }
          ],
          review: "Cộng tất cả rồi chia cho số lượng."
        },

        {
          id: "s14_4",
          title: "Buổi 14: Bài toán gấp lên – giảm đi nhiều lần",
          description: "Nhận dạng bài toán gấp nhiều lần.",
          videoUrl: "https://www.youtube.com/watch?v=WQG17eRIFbw",
          theory: `### 1. Dạng toán
- Gấp lên k lần: nhân  
- Giảm đi k lần: chia`,
          examples: [
            {
              id: "ex14_4",
              problem: "Một sợi dây dài 15 m. Sợi dây thứ hai dài gấp 3 lần. Tính độ dài sợi dây thứ hai.",
              solution: "15 × 3 = 45 m."
            }
          ],
          essays: [
            {
              id: "es14_4",
              question: "Một bông hoa nặng 12 g. Quả bóng nặng gấp 5 lần. Quả bóng nặng bao nhiêu?",
              solution: "12 × 5 = 60 g."
            }
          ],
          mcqs: [
            {
              id: "mcq14_4",
              question: "Một vật nặng 48 kg, bằng 6 lần vật kia. Vật kia nặng:",
              options: ["6 kg", "8 kg", "10 kg", "12 kg"],
              correctIndex: 1,
              explanation: "48 : 6 = 8."
            }
          ],
          review: "Gấp → nhân; giảm → chia."
        }
      ]
    }
  ]
},

"5": {
  id: "5",
  name: GradeLevel.Grade5,
  chapters: [
    {
      id: "c1_5",
      title: "Chương 1: Phân số và số thập phân",
      description: "Ôn lại phân số, phân số thập phân, hỗn số và bước đầu làm quen với số thập phân.",
      sessions: [
        {
          id: "s1_5",
          title: "Buổi 1: Phân số thập phân",
          description: "Phân số thập phân và cách viết dưới dạng số thập phân đơn giản.",
          videoUrl: "https://www.youtube.com/watch?v=9uVO1qZKkqQ",
          theory: `### 1. Phân số thập phân
Phân số thập phân là phân số có mẫu số là 10, 100, 1000, ...

Ví dụ:
- 3/10, 25/100, 7/1000 đều là phân số thập phân.

### 2. Viết phân số thập phân thành số thập phân
- 3/10 = 0,3  
- 25/100 = 0,25  
- 7/1000 = 0,007

Quy tắc:
- Đếm số chữ số 0 ở mẫu → bấy nhiêu chữ số sau dấu phẩy ở phần thập phân.`,
          examples: [
            {
              id: "ex1_5_1",
              problem: "Viết các phân số sau dưới dạng số thập phân: a) 4/10; b) 39/100.",
              solution: "a) 4/10 = 0,4\nb) 39/100 = 0,39."
            }
          ],
          essays: [
            {
              id: "es1_5_1",
              question: "Viết 7/1000, 5/100 và 8/10 dưới dạng số thập phân.",
              solution: "7/1000 = 0,007\n5/100 = 0,05\n8/10 = 0,8."
            }
          ],
          mcqs: [
            {
              id: "mcq1_5_1",
              question: "Phân số nào sau đây là phân số thập phân?",
              options: ["3/5", "7/20", "9/10", "11/15"],
              correctIndex: 2,
              explanation: "Chỉ phân số có mẫu là 10, 100, 1000,... mới là phân số thập phân."
            }
          ],
          review: "Nhớ: mẫu 10, 100, 1000,... → phân số thập phân, dễ đổi sang số thập phân."
        },

        {
          id: "s2_5",
          title: "Buổi 2: Hỗn số và phân số thập phân",
          description: "Khái niệm hỗn số và cách đổi hỗn số thành phân số thập phân/số thập phân (trường hợp đơn giản).",
          videoUrl: "https://www.youtube.com/watch?v=GHg1yv3bELc",
          theory: `### 1. Hỗn số
Hỗn số gồm phần nguyên và phần phân số.

Ví dụ:
- 2 3/10 (hai và ba phần mười)
- 4 7/100 (bốn và bảy phần một trăm)

### 2. Đổi hỗn số (mẫu 10, 100) thành số thập phân
Ví dụ:
- 2 3/10 = 2 + 3/10 = 2,3  
- 4 7/100 = 4 + 7/100 = 4,07`,
          examples: [
            {
              id: "ex2_5_2",
              problem: "Đổi các hỗn số sau thành số thập phân: a) 1 5/10; b) 3 9/100.",
              solution: "a) 1 5/10 = 1,5\nb) 3 9/100 = 3,09."
            }
          ],
          essays: [
            {
              id: "es2_5_2",
              question: "Viết thành số thập phân: 5 4/10; 7 25/100.",
              solution: "5 4/10 = 5,4\n7 25/100 = 7,25."
            }
          ],
          mcqs: [
            {
              id: "mcq2_5_2",
              question: "Hỗn số 2 7/10 bằng số thập phân nào?",
              options: ["2,07", "2,7", "2,70", "2,17"],
              correctIndex: 1,
              explanation: "2 7/10 = 2 + 0,7 = 2,7."
            }
          ],
          review: "Hỗn số có mẫu 10, 100,... đổi sang số thập phân rất nhanh."
        }
      ]
    },

    {
      id: "c2_5",
      title: "Chương 2: Các phép tính với phân số",
      description: "Cộng, trừ, nhân, chia phân số và vận dụng vào bài toán.",
      sessions: [
        {
          id: "s3_5",
          title: "Buổi 3: Cộng và trừ phân số",
          description: "Cộng, trừ hai phân số cùng mẫu và khác mẫu (đơn giản).",
          videoUrl: "https://www.youtube.com/watch?v=COqVtrx_vfo",
          theory: `### 1. Cộng/trừ phân số cùng mẫu
Giữ nguyên mẫu, cộng/trừ tử.

Ví dụ:
- 2/7 + 3/7 = (2 + 3)/7 = 5/7
- 5/9 − 2/9 = (5 − 2)/9 = 3/9 = 1/3

### 2. Cộng/trừ phân số khác mẫu (trường hợp đơn giản)
- Quy đồng mẫu số (tìm mẫu chung).  
- Đưa về cùng mẫu rồi cộng/trừ như trên.`,
          examples: [
            {
              id: "ex3_5_1",
              problem: "Tính: 1/4 + 3/4.",
              solution: "1/4 + 3/4 = (1 + 3)/4 = 4/4 = 1."
            },
            {
              id: "ex3_5_2",
              problem: "Tính: 2/3 + 1/6.",
              solution: "Quy đồng: 2/3 = 4/6 → 4/6 + 1/6 = 5/6."
            }
          ],
          essays: [
            {
              id: "es3_5_1",
              question: "Tính: 3/5 + 2/15.",
              solution: "Quy đồng: 3/5 = 9/15 → 9/15 + 2/15 = 11/15."
            }
          ],
          mcqs: [
            {
              id: "mcq3_5_1",
              question: "Kết quả của 5/8 − 1/8 là:",
              options: ["4/8", "6/8", "4/16", "1/4"],
              correctIndex: 0,
              explanation: "5/8 − 1/8 = 4/8 = 1/2."
            }
          ],
          review: "Nhớ rút gọn phân số sau khi tính để kết quả gọn hơn."
        },

        {
          id: "s4_5",
          title: "Buổi 4: Nhân và chia phân số",
          description: "Quy tắc nhân, chia phân số và rút gọn.",
          videoUrl: "https://www.youtube.com/watch?v=OGkfybxqgRo",
          theory: `### 1. Nhân hai phân số
\\( \\frac{a}{b} × \\frac{c}{d} = \\frac{a × c}{b × d} \\), với b, d ≠ 0.

### 2. Chia hai phân số
\\( \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} × \\frac{d}{c} \\), với b, c, d ≠ 0.

### 3. Rút gọn trước khi nhân
Có thể rút gọn chéo tử – mẫu để phép tính đơn giản hơn.`,
          examples: [
            {
              id: "ex4_5_1",
              problem: "Tính: 2/3 × 5/4.",
              solution: "2/3 × 5/4 = (2 × 5)/(3 × 4) = 10/12 = 5/6."
            },
            {
              id: "ex4_5_2",
              problem: "Tính: 3/5 : 2/3.",
              solution: "3/5 : 2/3 = 3/5 × 3/2 = 9/10."
            }
          ],
          essays: [
            {
              id: "es4_5_1",
              question: "Tính: 4/9 × 3/8 (rút gọn trước khi nhân).",
              solution: "4/9 × 3/8 → rút gọn 4 và 8: 4/8 = 1/2, 3/9 = 1/3 → 1/3 × 1/2 = 1/6."
            }
          ],
          mcqs: [
            {
              id: "mcq4_5_1",
              question: "Giá trị của 1/2 × 3/4 là:",
              options: ["3/8", "4/6", "1/6", "3/4"],
              correctIndex: 0,
              explanation: "1 × 3 = 3, 2 × 4 = 8 → 3/8."
            }
          ],
          review: "Chia phân số = nhân với phân số nghịch đảo; nên rút gọn trước khi nhân."
        }
      ]
    },

    {
      id: "c3_5",
      title: "Chương 3: Số thập phân và các phép tính",
      description: "Đọc, viết số thập phân và thực hiện các phép tính cơ bản.",
      sessions: [
        {
          id: "s5_5",
          title: "Buổi 5: Đọc, viết số thập phân",
          description: "Hiểu phần nguyên, phần thập phân và cách đọc số thập phân.",
          videoUrl: "https://www.youtube.com/watch?v=z6Vh-HHeT5g",
          theory: `### 1. Cấu tạo số thập phân
Ví dụ: 12,35  
- Phần nguyên: 12  
- Phần thập phân: 35 (3 là phần mười, 5 là phần trăm)

### 2. Cách đọc
- 12,35 đọc là 'mười hai phẩy ba mươi lăm'.`,
          examples: [
            {
              id: "ex5_5_1",
              problem: "Viết cách đọc các số: a) 0,5; b) 3,07.",
              solution: "a) 0,5: 'không phẩy năm'\nb) 3,07: 'ba phẩy không bảy'."
            }
          ],
          essays: [
            {
              id: "es5_5_1",
              question: "Viết số thập phân có: phần nguyên 9, phần thập phân là 25.",
              solution: "Số đó là 9,25."
            }
          ],
          mcqs: [
            {
              id: "mcq5_5_1",
              question: "Số nào có phần nguyên là 7, phần thập phân là 3?",
              options: ["7,03", "7,30", "7,3", "0,73"],
              correctIndex: 2,
              explanation: "7,3 là 7 phẩy ba (3 phần mười)."
            }
          ],
          review: "Phần thập phân luôn đứng sau dấu phẩy."
        },

        {
          id: "s6_5",
          title: "Buổi 6: Cộng, trừ số thập phân",
          description: "Cộng, trừ số thập phân bằng cách đặt thẳng cột.",
          videoUrl: "https://www.youtube.com/watch?v=KRZzn-7YuM8",
          theory: `### 1. Nguyên tắc
- Viết các số sao cho dấu phẩy thẳng cột.  
- Cộng/trừ như số tự nhiên.  
- Đặt dấu phẩy vào kết quả thẳng cột với dấu phẩy ở các số hạng.`,
          examples: [
            {
              id: "ex6_5_1",
              problem: "Tính: 2,35 + 1,7.",
              solution: "Viết: 2,35\n      1,70\n→ 2,35 + 1,70 = 4,05."
            }
          ],
          essays: [
            {
              id: "es6_5_1",
              question: "Tính: 7,8 − 2,45.",
              solution: "Viết: 7,80 − 2,45 = 5,35."
            }
          ],
          mcqs: [
            {
              id: "mcq6_5_1",
              question: "Kết quả 0,5 + 0,25 là:",
              options: ["0,30", "0,70", "0,75", "0,55"],
              correctIndex: 2,
              explanation: "0,50 + 0,25 = 0,75."
            }
          ],
          review: "Luôn căn thẳng dấu phẩy trước khi cộng/trừ."
        },

        {
          id: "s7_5",
          title: "Buổi 7: Nhân, chia số thập phân (cơ bản)",
          description: "Nhân chia số thập phân với 10, 100, 1000 và với số tự nhiên.",
          videoUrl: "https://www.youtube.com/watch?v=x3nkuRHwwDU",
          theory: `### 1. Nhân số thập phân với 10, 100, 1000
- Dịch chuyển dấu phẩy sang phải 1, 2, 3 chữ số.

Ví dụ:
- 2,5 × 10 = 25
- 2,5 × 100 = 250

### 2. Chia số thập phân cho 10, 100, 1000
- Dịch chuyển dấu phẩy sang trái 1, 2, 3 chữ số.

Ví dụ:
- 25 : 10 = 2,5
- 3,5 : 10 = 0,35`,
          examples: [
            {
              id: "ex7_5_1",
              problem: "Tính: 4,7 × 10; 4,7 × 100.",
              solution: "4,7 × 10 = 47\n4,7 × 100 = 470."
            }
          ],
          essays: [
            {
              id: "es7_5_1",
              question: "Tính: 3,6 : 10; 3,6 : 100.",
              solution: "3,6 : 10 = 0,36\n3,6 : 100 = 0,036."
            }
          ],
          mcqs: [
            {
              id: "mcq7_5_1",
              question: "Kết quả của 0,72 × 10 là:",
              options: ["0,72", "7,2", "0,702", "72"],
              correctIndex: 1,
              explanation: "Nhân 10 → dịch dấu phẩy sang phải 1 chữ số: 7,2."
            }
          ],
          review: "Nhân 10,100,1000 → dấu phẩy sang phải; chia → sang trái."
        }
      ]
    },

    {
      id: "c4_5",
      title: "Chương 4: Diện tích và thể tích",
      description: "Ôn diện tích và làm quen với thể tích hình hộp chữ nhật, hình lập phương.",
      sessions: [
        {
          id: "s8_5",
          title: "Buổi 8: Đơn vị diện tích và đổi đơn vị",
          description: "Đơn vị cm², m², km² và đổi đơn vị đơn giản.",
          videoUrl: "https://www.youtube.com/watch?v=d7dNUU7UqIc",
          theory: `### 1. Đơn vị diện tích
- 1 cm², 1 dm², 1 m², 1 km²

### 2. Một số quy đổi
- 1 m² = 10 000 cm²  
- 1 dm² = 100 cm²`,
          examples: [
            {
              id: "ex8_5_1",
              problem: "Đổi 3 m² ra cm².",
              solution: "3 × 10 000 = 30 000 cm²."
            }
          ],
          essays: [
            {
              id: "es8_5_1",
              question: "Đổi 5000 cm² ra m².",
              solution: "5000 cm² = 0,5 m²."
            }
          ],
          mcqs: [
            {
              id: "mcq8_5_1",
              question: "1 m² bằng bao nhiêu cm²?",
              options: ["100", "1000", "10 000", "100 000"],
              correctIndex: 2,
              explanation: "1 m² = 100 cm × 100 cm = 10 000 cm²."
            }
          ],
          review: "Nhớ: 1 m² = 10 000 cm² là rất quan trọng."
        },

        {
          id: "s9_5",
          title: "Buổi 9: Thể tích hình hộp chữ nhật và hình lập phương",
          description: "Công thức tính thể tích và đơn vị đo.",
          videoUrl: "https://www.youtube.com/watch?v=bZ6n3UwTcU4",
          theory: `### 1. Thể tích hình hộp chữ nhật
V = dài × rộng × cao.

### 2. Thể tích hình lập phương
V = cạnh × cạnh × cạnh.

### 3. Đơn vị
- cm³, dm³, m³  
- 1 dm³ = 1 lít`,
          examples: [
            {
              id: "ex9_5_1",
              problem: "Hình hộp chữ nhật có các kích thước: 5 dm, 3 dm, 2 dm. Tính thể tích.",
              solution: "V = 5 × 3 × 2 = 30 dm³."
            }
          ],
          essays: [
            {
              id: "es9_5_1",
              question: "Một bể nước hình hộp chữ nhật có: dài 4 m, rộng 3 m, cao 2 m. Thể tích bể là bao nhiêu m³?",
              solution: "V = 4 × 3 × 2 = 24 m³."
            }
          ],
          mcqs: [
            {
              id: "mcq9_5_1",
              question: "Hình lập phương cạnh 3 cm có thể tích:",
              options: ["9 cm³", "18 cm³", "27 cm³", "30 cm³"],
              correctIndex: 2,
              explanation: "V = 3 × 3 × 3 = 27 cm³."
            }
          ],
          review: "Hình hộp chữ nhật: dài × rộng × cao; lập phương: cạnh³."
        }
      ]
    },

    {
      id: "c5_5",
      title: "Chương 5: Tỉ số và phần trăm",
      description: "Tỉ số, phần trăm và ứng dụng trong bài toán thực tế.",
      sessions: [
        {
          id: "s10_5",
          title: "Buổi 10: Tỉ số",
          description: "Khái niệm tỉ số giữa hai số và cách trình bày.",
          videoUrl: "https://www.youtube.com/watch?v=4P_aoSwuBIY",
          theory: `### 1. Tỉ số
Tỉ số của a và b (b ≠ 0) là a/b.

Ví dụ:
- Tỉ số của 2 và 5 là 2/5.`,
          examples: [
            {
              id: "ex10_5_1",
              problem: "Viết tỉ số của 8 và 12.",
              solution: "Tỉ số là 8/12 = 2/3 (sau khi rút gọn)."
            }
          ],
          essays: [
            {
              id: "es10_5_1",
              question: "Lớp 5A có 20 bạn nữ và 15 bạn nam. Tính tỉ số của số nữ và số nam.",
              solution: "Tỉ số là 20/15 = 4/3."
            }
          ],
          mcqs: [
            {
              id: "mcq10_5_1",
              question: "Tỉ số của 6 và 9 là:",
              options: ["6/9", "9/6", "2/3", "3/2"],
              correctIndex: 2,
              explanation: "6/9 rút gọn được 2/3."
            }
          ],
          review: "Tỉ số thường viết dưới dạng phân số và có thể rút gọn."
        },

        {
          id: "s11_5",
          title: "Buổi 11: Phần trăm",
          description: "Khái niệm phần trăm và đổi giữa số thập phân, phân số, phần trăm.",
          videoUrl: "https://www.youtube.com/watch?v=IpYj3p-K77A",
          theory: `### 1. Phần trăm
a% nghĩa là a/100.

Ví dụ:
- 25% = 25/100 = 0,25.

### 2. Đổi số thập phân sang phần trăm
- Nhân số đó với 100 rồi viết thêm ký hiệu %.`,
          examples: [
            {
              id: "ex11_5_1",
              problem: "Viết 0,4 dưới dạng phần trăm.",
              solution: "0,4 × 100 = 40 → 40%."
            }
          ],
          essays: [
            {
              id: "es11_5_1",
              question: "Một lớp học có 30 học sinh, trong đó có 18 bạn nữ. Hỏi số học sinh nữ chiếm bao nhiêu phần trăm số học sinh cả lớp?",
              solution: "Tỉ số: 18/30 = 0,6 = 60%."
            }
          ],
          mcqs: [
            {
              id: "mcq11_5_1",
              question: "25% bằng phân số nào?",
              options: ["1/2", "1/3", "1/4", "1/5"],
              correctIndex: 2,
              explanation: "25% = 25/100 = 1/4."
            }
          ],
          review: "Nhớ: a% = a/100; đổi qua lại giữa phân số – thập phân – phần trăm."
        }
      ]
    },

    {
      id: "c6_5",
      title: "Chương 6: Giải toán có lời văn nâng cao",
      description: "Các bài toán tìm hai số khi biết tổng, hiệu và tỉ số.",
      sessions: [
        {
          id: "s12_5",
          title: "Buổi 12: Tìm hai số khi biết tổng và tỉ số",
          description: "Dùng sơ đồ đoạn thẳng và tỉ số để giải.",
          videoUrl: "https://www.youtube.com/watch?v=8MmtvJvPXIE",
          theory: `### 1. Dạng toán
Biết:
- Tổng hai số S  
- Tỉ số: số thứ nhất : số thứ hai = a : b

Bước giải:
1. Tìm tổng số phần bằng nhau: a + b.
2. Tìm giá trị 1 phần: S : (a + b).
3. Tìm từng số:
   - Số thứ nhất = a × (giá trị 1 phần)
   - Số thứ hai = b × (giá trị 1 phần).`,
          examples: [
            {
              id: "ex12_5_1",
              problem: "Tổng của hai số là 63. Tỉ số của số thứ nhất và số thứ hai là 4 : 3. Tìm hai số đó.",
              solution: "Tổng phần: 4 + 3 = 7 phần.\n1 phần = 63 : 7 = 9.\nSố thứ nhất = 4 × 9 = 36.\nSố thứ hai = 3 × 9 = 27."
            }
          ],
          essays: [
            {
              id: "es12_5_1",
              question: "Tổng của hai số là 120. Tỉ số của số thứ nhất và số thứ hai là 2 : 3. Tìm hai số đó.",
              solution: "Tổng phần = 2 + 3 = 5.\n1 phần = 120 : 5 = 24.\nSố thứ nhất = 2 × 24 = 48.\nSố thứ hai = 3 × 24 = 72."
            }
          ],
          mcqs: [
            {
              id: "mcq12_5_1",
              question: "Tổng hai số là 70, tỉ số là 3 : 4. Số bé là:",
              options: ["30", "40", "24", "32"],
              correctIndex: 3,
              explanation: "3 + 4 = 7 phần; 1 phần = 70 : 7 = 10; số bé = 3 × 10 = 30; số lớn = 4 × 10 = 40 → bé là 30 (chọn 30)."
            }
          ],
          review: "Nhớ lập sơ đồ đoạn thẳng, tổng phần = cộng hai số ở tỉ số."
        },

        {
          id: "s13_5",
          title: "Buổi 13: Tìm hai số khi biết hiệu và tỉ số",
          description: "Dùng hiệu và tỉ số để giải bài toán.",
          videoUrl: "https://www.youtube.com/watch?v=IF9cgh8kCm0",
          theory: `### 1. Dạng toán
Biết:
- Hiệu hai số H  
- Tỉ số: số lớn : số bé = a : b

Bước giải:
1. Tìm hiệu số phần bằng nhau: a − b.
2. Tìm giá trị 1 phần: H : (a − b).
3. Tìm từng số:
   - Số bé = b × (giá trị 1 phần)
   - Số lớn = a × (giá trị 1 phần).`,
          examples: [
            {
              id: "ex13_5_1",
              problem: "Hiệu của hai số là 24. Tỉ số của số lớn và số bé là 5 : 2. Tìm hai số đó.",
              solution: "Hiệu phần: 5 − 2 = 3.\n1 phần = 24 : 3 = 8.\nSố bé = 2 × 8 = 16.\nSố lớn = 5 × 8 = 40."
            }
          ],
          essays: [
            {
              id: "es13_5_1",
              question: "Hiệu của hai số là 18. Tỉ số của số lớn và số bé là 7 : 4. Tìm hai số đó.",
              solution: "Hiệu phần = 7 − 4 = 3.\n1 phần = 18 : 3 = 6.\nSố bé = 4 × 6 = 24.\nSố lớn = 7 × 6 = 42."
            }
          ],
          mcqs: [
            {
              id: "mcq13_5_1",
              question: "Hiệu hai số là 21, tỉ số là 4 : 1. Số lớn là:",
              options: ["4", "5", "21", "28"],
              correctIndex: 3,
              explanation: "Hiệu phần = 4 − 1 = 3.\n1 phần = 21 : 3 = 7.\nSố lớn = 4 × 7 = 28."
            }
          ],
          review: "Dạng 'tổng – tỉ', 'hiệu – tỉ' rất quan trọng trong Toán 5 và các lớp sau."
        }
      ]
    }
  ]
},
"6": {
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
},

"7": {
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
},
"8": {
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
},

"9": {
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
},
"10": {
  id: "10",
  name: GradeLevel.Grade10,
  chapters: [
    {
      id: "c1_10",
      title: "Chương 1: Mệnh đề và Tập hợp",
      sessions: [
        {
          id: "s1_10",
          title: "Buổi 1: Mệnh đề toán học",
          description: "Làm quen với khái niệm mệnh đề, mệnh đề đúng, sai và mệnh đề phủ định.",
          theory: `### 1. Mệnh đề là gì?
Mệnh đề là một câu khẳng định mà **hoặc đúng, hoặc sai**, nhưng không thể vừa đúng vừa sai.

Ví dụ về mệnh đề:
- "2 + 3 = 5" (đúng)
- "7 là số chẵn" (sai)

Ví dụ không phải mệnh đề:
- "Bạn học lớp mấy?" (câu hỏi)
- "Hãy học bài đi!" (câu mệnh lệnh)

### 2. Mệnh đề đúng – mệnh đề sai
- Nếu nội dung câu khẳng định là đúng ⇒ mệnh đề **đúng**.
- Nếu nội dung câu khẳng định là sai ⇒ mệnh đề **sai**.

### 3. Mệnh đề phủ định
Cho mệnh đề P, mệnh đề phủ định của P là một mệnh đề có ý nghĩa "không P".
Kí hiệu: ¬P (đọc là "phủ định P").

Ví dụ:
- P: "5 là số nguyên tố".
- ¬P: "5 không phải là số nguyên tố".`,
          examples: [
            {
              id: "ex1_10_1",
              problem: "Cho câu: \"9 là số chia hết cho 3\". Hãy cho biết đây có phải là mệnh đề không, và cho biết nó đúng hay sai.",
              solution: "Câu này là một câu khẳng định, nên là **mệnh đề**. Vì 9 : 3 = 3 nên câu nói đúng ⇒ đây là một **mệnh đề đúng**."
            }
          ],
          essays: [
            {
              id: "es1_10_1",
              question: "Viết mệnh đề phủ định của câu sau: \"Tổng của hai số chẵn luôn là số chẵn\".",
              solution: "Mệnh đề phủ định là: \"Tồn tại hai số chẵn sao cho tổng của chúng **không** là số chẵn.\" (hoặc: \"Không phải lúc nào tổng của hai số chẵn cũng là số chẵn.\")"
            }
          ],
          mcqs: [
            {
              id: "mcq1_10_1",
              question: "Câu nào dưới đây là một mệnh đề?",
              options: [
                "\"Bạn đã làm xong bài tập chưa?\"",
                "\"x + 1 = 5 với mọi số thực x\"",
                "\"Hãy mở vở ra!\"",
                "\"Bạn tên là gì?\""
              ],
              correctIndex: 1,
              explanation: "Chỉ câu \"x + 1 = 5 với mọi số thực x\" là một câu khẳng định có thể xét đúng/sai ⇒ là mệnh đề. Các câu còn lại là câu hỏi hoặc mệnh lệnh, không phải mệnh đề."
            }
          ],
          review: "Ghi nhớ: mệnh đề là câu khẳng định có thể xác định được đúng hay sai. Phủ định của mệnh đề P là câu mang ý nghĩa \"không P\"."
        }
      ]
    }
  ]
},
"11": {
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
},
  "12": {
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
  }
};
