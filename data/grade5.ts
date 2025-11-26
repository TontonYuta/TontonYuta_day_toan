
import { GradeData, GradeLevel } from "../types";

export const grade5: GradeData = {
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
};
