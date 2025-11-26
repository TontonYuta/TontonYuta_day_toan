
import { GradeData, GradeLevel } from "../types";

export const grade10: GradeData = {
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
};
