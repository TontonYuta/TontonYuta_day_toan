
import { GradeData, GradeLevel } from "../types";

export const grade4: GradeData = {
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
};
