
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Search, ArrowRight, BookOpen, CheckSquare, Award, Facebook, Video, MessageCircle, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { MATH_DATA } from '../data';
import { GradeLevel, SessionData } from '../types';
import { getCurrentUser } from '../services/authService';

// --- CONFIG: TEACHER INFO ---
const TEACHER_INFO = {
  name: "Thầy TontonYuta",
  role: "Giáo viên Toán & Lập trình",
  bio: "Đồng hành cùng các em chinh phục điểm 10 môn Toán bằng phương pháp tư duy đơn giản hóa.",
  avatar: "https://i.pinimg.com/originals/2c/8e/1d/2c8e1de27b47747e38f4168436965e88.jpg", 
  links: {
    facebook: "https://www.facebook.com/yuta.primer",
    tiktok: "https://www.tiktok.com/@tontons.yuta",
    zalo: "https://zalo.me/0963278149",
    youtube: "https://www.youtube.com/@hoctoancungyuta",
    donate: "https://img.vietqr.io/image/MB-0963278149-compact.jpg"
  }
};

const HomePage = () => {
  const user = getCurrentUser();
  const [searchTerm, setSearchTerm] = useState('');

  // Global Search Logic
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    const results: { gradeId: string; gradeName: string; session: SessionData }[] = [];
    
    Object.values(MATH_DATA).forEach(grade => {
      grade.chapters.forEach(chapter => {
        chapter.sessions.forEach(session => {
          if (session.title.toLowerCase().includes(term) || session.description.toLowerCase().includes(term)) {
            results.push({
              gradeId: grade.id,
              gradeName: grade.name,
              session
            });
          }
        });
      });
    });
    return results.slice(0, 5); // Limit to 5 results
  }, [searchTerm]);

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 px-4 sm:pt-16 lg:pt-24 mb-10 z-20">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
               <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
               <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
         </div>

         <div className="max-w-5xl mx-auto text-center relative z-10 pb-10">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold text-blue-700 bg-white border border-blue-100 mb-8 shadow-lg shadow-blue-100/50 animate-in fade-in slide-in-from-bottom-4">
               <Sparkles className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" /> 
               Chào mừng, {user?.name || "Bạn mới"}! Sẵn sàng bứt phá chưa?
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
              Chinh phục Toán học <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm">
                Dễ dàng & Hiệu quả
              </span>
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Nền tảng học tập toàn diện từ Lớp 1 đến Lớp 12. 
              Lộ trình bài bản, lý thuyết cô đọng và hệ thống bài tập phong phú giúp bạn tự tin đạt điểm cao.
            </p>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 relative animate-in fade-in slide-in-from-bottom-10 duration-1000">
               <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors" />
                 </div>
                 <input 
                   type="text"
                   className="block w-full pl-14 pr-6 py-5 border-2 border-transparent bg-white/80 backdrop-blur-xl rounded-full leading-5 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:bg-white shadow-xl shadow-blue-900/5 transition-all text-lg font-medium"
                   placeholder="Tìm kiếm bài học (Ví dụ: Hàm số, Vectơ...)"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-5 flex items-center text-gray-400 hover:text-gray-600"
                    >
                       &times;
                    </button>
                 )}
               </div>

               {/* Search Results Dropdown */}
               {searchTerm && (
                 <div className="absolute z-[100] w-full mt-3 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-left animate-in fade-in slide-in-from-top-2">
                    {searchResults.length > 0 ? (
                      <div>
                        <div className="px-6 py-3 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Kết quả tìm kiếm</div>
                        {searchResults.map((item) => (
                          <Link 
                            key={item.session.id} 
                            to={`/grade/${item.gradeId}/session/${item.session.id}`}
                            className="block px-6 py-4 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0 group"
                          >
                             <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{item.session.title}</div>
                             <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                               <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-bold text-[10px] uppercase">{item.gradeName}</span>
                               <span className="truncate opacity-80">{item.session.description}</span>
                             </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-10 text-center text-gray-500 flex flex-col items-center">
                        <Search size={40} className="mb-3 text-gray-200"/>
                        <p className="font-medium">Không tìm thấy kết quả nào cho "{searchTerm}"</p>
                      </div>
                    )}
                 </div>
               )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
               <button 
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('chon-lop')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
               >
                 Bắt đầu học ngay <ArrowRight size={20} />
               </button>
               <Link to="/resources" className="px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-sm border border-white hover:bg-white rounded-full shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all flex items-center justify-center">
                 Kho tài liệu
               </Link>
            </div>
         </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               icon: BookOpen, 
               color: "text-blue-600",
               bg: "bg-blue-50",
               title: "Lộ trình bài bản", 
               desc: "Hệ thống bài học được thiết kế khoa học, chia theo từng buổi học giúp học sinh dễ dàng tiếp thu." 
             },
             { 
               icon: CheckSquare, 
               color: "text-green-600",
               bg: "bg-green-50",
               title: "Thực hành chuyên sâu", 
               desc: "Kho bài tập tự luận và trắc nghiệm phong phú kèm lời giải chi tiết để rèn luyện kỹ năng." 
             },
             { 
               icon: Award, 
               color: "text-purple-600",
               bg: "bg-purple-50",
               title: "Tự học hiệu quả", 
               desc: "Nội dung bám sát chương trình giáo dục phổ thông mới, tài liệu chi tiết giúp tự học dễ dàng tại nhà." 
             }
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group hover:-translate-y-2 duration-300">
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                   <item.icon size={32} className={item.color} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Teacher Section */}
      <section className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-white shadow-2xl shadow-indigo-100 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50 pointer-events-none"></div>
          
          <div className="flex-shrink-0 relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[4px] shadow-xl group-hover:rotate-6 transition-transform duration-500">
              <img 
                src={TEACHER_INFO.avatar} 
                alt="Teacher Avatar" 
                className="w-full h-full rounded-full bg-white object-cover border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg border-4 border-white animate-bounce">
              <Star size={20} fill="currentColor" />
            </div>
          </div>
          
          <div className="text-center md:text-left flex-grow relative z-10">
            <h3 className="text-indigo-600 font-black uppercase tracking-widest text-xs mb-2 bg-indigo-50 inline-block px-3 py-1 rounded-lg">Góc Giáo Viên</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{TEACHER_INFO.name}</h2>
            <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">{TEACHER_INFO.bio}</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href={TEACHER_INFO.links.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-blue-700 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm font-bold text-sm">
                <Facebook size={18} /> Facebook
              </a>
              <a href={TEACHER_INFO.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-800 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm font-bold text-sm">
                <Video size={18} /> TikTok
              </a>
               <a href={TEACHER_INFO.links.zalo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-blue-600 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm font-bold text-sm">
                <MessageCircle size={18} /> Zalo
              </a>
              <a href={TEACHER_INFO.links.donate} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-200 transition-all shadow-md font-bold text-sm">
                <Heart size={18} fill="currentColor" /> Donate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selection */}
      <section id="chon-lop" className="max-w-7xl mx-auto px-4 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Chọn Lớp Học</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">Chương trình được biên soạn riêng cho từng khối lớp, bám sát sách giáo khoa và đề thi mới nhất.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.values(GradeLevel).map((grade, idx) => {
            const gradeId = Object.keys(MATH_DATA).find(key => MATH_DATA[key].name === grade);
            const hasData = !!gradeId;
            // Generate diverse colors based on index
            const colors = [
                'from-blue-500 to-cyan-400',
                'from-purple-500 to-pink-400',
                'from-emerald-500 to-teal-400',
                'from-orange-500 to-amber-400',
                'from-indigo-500 to-violet-400',
                'from-rose-500 to-red-400',
            ];
            const colorClass = colors[idx % colors.length];
            
            return (
              <Link
                key={grade}
                to={hasData ? `/grade/${gradeId}` : '#'}
                className={`group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-500 flex flex-col items-center bg-white border border-gray-100 ${
                  hasData 
                    ? 'hover:shadow-2xl hover:shadow-blue-100 cursor-pointer hover:-translate-y-3' 
                    : 'cursor-not-allowed opacity-50 grayscale'
                }`}
              >
                {/* Background hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className={`w-24 h-24 rounded-[1.5rem] flex items-center justify-center text-3xl font-black mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${hasData ? colorClass : 'from-gray-300 to-gray-400'} text-white relative`}>
                   {grade.replace(/[^0-9]/g, '')}
                   {hasData && <div className="absolute inset-0 bg-white opacity-20 rounded-[1.5rem] group-hover:opacity-0 transition-opacity"></div>}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{grade}</h3>
                <p className="text-xs text-gray-500 mb-6 text-center px-2 font-medium uppercase tracking-wide">
                  {hasData ? 'Sẵn sàng' : 'Sắp ra mắt'}
                </p>
                
                <div className={`mt-auto w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    hasData ? 'bg-gray-50 text-gray-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200' : 'bg-gray-100 text-gray-400'
                }`}>
                   {hasData ? (
                       <>Vào lớp <ChevronRight size={16} /></>
                   ) : 'Chờ nhé'}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
