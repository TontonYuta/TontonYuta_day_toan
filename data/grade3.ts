
import { GradeData, GradeLevel } from "../types";

export const grade3: GradeData = {
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
};
