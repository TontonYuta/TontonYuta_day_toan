
import { GradeData, GradeLevel } from "../types";

export const grade2: GradeData = {
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
};
