import React from 'react';
import { BookOpen, Code, GraduationCap, Layers, CheckCircle2, HelpCircle, FileText, CheckSquare, PenTool, GitBranch, Terminal, UploadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-12 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <div className="inline-flex p-4 bg-blue-50 text-blue-600 rounded-full mb-4">
          <BookOpen size={40} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hướng dẫn sử dụng</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Tài liệu hướng dẫn chi tiết giúp bạn khai thác tối đa hiệu quả của ứng dụng Dạy Toán.
        </p>
      </div>

      {/* Student Guide */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 border-b pb-4">
          <div className="p-2 bg-green-100 rounded-lg text-green-600">
             <GraduationCap size={24} />
          </div>
          Dành cho Học viên
        </h2>
        
        <div className="space-y-8">
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">1</div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Chọn Lớp & Bài học</h3>
              <p className="text-gray-600 mb-3">
                Tại trang chủ, hãy chọn khối lớp của bạn (Từ lớp 1 đến lớp 12). 
                Các lớp có nội dung sẽ sáng lên và cho phép truy cập. 
                Sau khi vào lớp, chọn bài học theo lộ trình từng Buổi.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">2</div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Quy trình học 5 bước</h3>
              <p className="text-gray-600 mb-4">Mỗi buổi học được thiết kế khoa học với 5 phần nội dung:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><BookOpen size={18}/></div>
                  <div>
                    <span className="font-bold text-gray-800 block">1. Lý thuyết</span>
                    <span className="text-sm text-gray-500">Đọc hiểu kiến thức trọng tâm.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-lg"><FileText size={18}/></div>
                  <div>
                    <span className="font-bold text-gray-800 block">2. Ví dụ minh họa</span>
                    <span className="text-sm text-gray-500">Xem cách giải mẫu chi tiết.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg"><PenTool size={18}/></div>
                  <div>
                    <span className="font-bold text-gray-800 block">3. Bài tập Tự luận</span>
                    <span className="text-sm text-gray-500">Tự giải và đối chiếu đáp án.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><CheckSquare size={18}/></div>
                  <div>
                    <span className="font-bold text-gray-800 block">4. Trắc nghiệm</span>
                    <span className="text-sm text-gray-500">Kiểm tra nhanh kiến thức.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">3</div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Hệ thống Điểm & Cấp độ</h3>
              <p className="text-gray-600">
                Mỗi khi hoàn thành một phần học (bấm nút "Hoàn thành"), bạn sẽ nhận được <strong>20 XP</strong>. 
                Hệ thống sẽ dựa vào tổng XP để xếp hạng cấp độ của bạn từ "Học viên tập sự" đến "Thần đồng đất Việt".
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Guide */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <Code size={150} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 border-b pb-4 relative z-10">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
             <Code size={24} />
          </div>
          Dành cho Quản trị viên (Soạn bài)
        </h2>
        
        <div className="space-y-8 relative z-10">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6 flex gap-4 items-start">
            <HelpCircle className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 text-sm uppercase mb-1">Cơ chế hoạt động</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Ứng dụng này hoạt động dạng Client-side (chạy hoàn toàn trên trình duyệt). 
                Dữ liệu bài học được lưu trữ cứng trong file mã nguồn <code>src/data.ts</code>. 
                Do đó, để thêm bài học mới vĩnh viễn, bạn cần sử dụng công cụ soạn bài để tạo mã JSON và dán vào file code.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">1</div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Công cụ Soạn bài (Builder)</h3>
              <p className="text-gray-600 mb-2">
                Truy cập trang <strong>Soạn bài</strong> từ menu Admin. Form nhập liệu được chia làm 6 bước:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                <li><strong>Bước 1:</strong> Thông tin chung (Tiêu đề, Mô tả).</li>
                <li><strong>Bước 2:</strong> Soạn Lý thuyết (Hỗ trợ Markdown & LaTeX: <code>$x^2$</code>).</li>
                <li><strong>Bước 3-5:</strong> Nhập Ví dụ, Tự luận và Trắc nghiệm.</li>
                <li><strong>Bước 6:</strong> Xuất mã nguồn JSON.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">2</div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Cập nhật vào hệ thống</h3>
              <div className="bg-gray-900 text-gray-300 p-4 rounded-xl font-mono text-sm overflow-x-auto">
                <p className="text-gray-500 mb-2">// Ví dụ cấu trúc file src/data.ts</p>
                <p>"6": &#123;</p>
                <p>&nbsp;&nbsp;id: "6",</p>
                <p>&nbsp;&nbsp;name: GradeLevel.Grade6,</p>
                <p>&nbsp;&nbsp;sessions: [</p>
                <p className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;// Dán đoạn mã bạn vừa copy từ Builder vào đây</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#123; ... bài học cũ ... &#125;,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#123; ... <strong>BÀI MỚI DÁN VÀO ĐÂY</strong> ... &#125;</p>
                <p>&nbsp;&nbsp;]</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Guide (GitHub) */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <GitBranch size={150} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 border-b pb-4 relative z-10">
          <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
             <GitBranch size={24} />
          </div>
          Dành cho Nhà phát triển (Update GitHub)
        </h2>

        <div className="space-y-6 relative z-10">
          <p className="text-gray-600">
            Sau khi bạn đã dán nội dung mới vào file <code>src/data.ts</code> (hoặc cập nhật code khác), 
            hãy thực hiện các lệnh sau trong Terminal (Ctrl + `) để lưu và đẩy thay đổi lên GitHub.
          </p>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
             <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <Terminal size={14} className="text-gray-400"/>
                <span className="text-xs text-gray-400 font-mono">Terminal / Command Prompt</span>
             </div>
             <div className="p-6 font-mono text-sm space-y-4">
                {/* Command 1 */}
                <div>
                   <div className="text-gray-500 mb-1"># 1. Kiểm tra các file đã thay đổi</div>
                   <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git status
                   </div>
                </div>

                {/* Command 2 */}
                <div>
                   <div className="text-gray-500 mb-1"># 2. Thêm tất cả thay đổi vào danh sách chờ (Staging)</div>
                   <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git add .
                   </div>
                </div>

                {/* Command 3 */}
                <div>
                   <div className="text-gray-500 mb-1"># 3. Lưu (Commit) với ghi chú</div>
                   <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git commit -m "Cập nhật bài học mới"
                   </div>
                </div>

                 {/* Command 4 */}
                <div>
                   <div className="text-gray-500 mb-1"># 4. Đẩy lên GitHub (Triển khai)</div>
                   <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git push origin main
                   </div>
                </div>
             </div>
          </div>

          <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-yellow-800 text-sm">
             <UploadCloud className="flex-shrink-0 mt-0.5" size={18} />
             <div>
                <strong>Lưu ý:</strong> Nếu bạn đang sử dụng Vercel hoặc Netlify được kết nối với GitHub, 
                trang web sẽ tự động cập nhật phiên bản mới sau khoảng 1-2 phút kể từ khi bạn chạy lệnh <code>git push</code>.
             </div>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8">
         <Link 
           to="/" 
           className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-700 transition-transform hover:-translate-y-1 shadow-lg"
         >
           Đã hiểu, bắt đầu học ngay
         </Link>
      </div>
    </div>
  );
};

export default UserGuide;