import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MATH_DATA } from './data';
import { GradeLevel, SessionData, SectionType, Resource } from './types';
import { TheoryView, ExamplesView, EssayView, MCQView, ReviewView } from './components/SessionViews';
import ContentBuilder from './components/ContentBuilder';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UserGuide from './components/UserGuide';
import { BookOpen, FileText, PenTool, CheckSquare, RefreshCw, ChevronRight, PlayCircle, Award, ArrowRight, Star, Trophy, CheckCircle2, Search, Filter, Download, File, FileSpreadsheet, FolderOpen, Layers, GraduationCap, Flame, Zap, Target, BarChart2, Rocket } from 'lucide-react';
import { getSessionCompletion, isSectionCompleted, markSectionComplete, resetSectionProgress, getProgress } from './services/progressService';
import { getCurrentUser } from './services/authService';
import { getResources } from './services/resourceService';

// --- Components: Visual Charts ---

const CircularProgress = ({ percentage, size = 120, strokeWidth = 10, color = "text-primary" }: { percentage: number; size?: number; strokeWidth?: number; color?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          className="text-gray-100"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${color} transition-all duration-1000 ease-out`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-gray-700">
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

// --- Page: Resources (Documents & Downloads) ---
const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGrade, setActiveGrade] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // Load resources from service
    setResources(getResources());
  }, []);

  const categories = [
    { id: "all", label: "Tất cả tài liệu" },
    { id: "handbook", label: "Sổ tay & Công thức" },
    { id: "exam", label: "Đề thi & Kiểm tra" },
    { id: "topic", label: "Chuyên đề sâu" },
    { id: "exercise", label: "Bài tập rèn luyện" },
  ];

  const grades = [
    { id: "all", label: "Tất cả các lớp" },
    { id: "12", label: "Lớp 12" },
    { id: "11", label: "Lớp 11" },
    { id: "10", label: "Lớp 10" },
    { id: "9", label: "Lớp 9" },
    { id: "8", label: "Lớp 8" },
    { id: "7", label: "Lớp 7" },
    { id: "6", label: "Lớp 6" },
    { id: "5", label: "Lớp 5" },
    { id: "4", label: "Lớp 4" },
    { id: "3", label: "Lớp 3" },
    { id: "2", label: "Lớp 2" },
    { id: "1", label: "Lớp 1" },
  ];

  const filteredResources = resources.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesGrade = activeGrade === "all" || item.grade === activeGrade;
    return matchesSearch && matchesCategory && matchesGrade;
  });

  const handleDownload = (item: Resource) => {
    // Kiểm tra nếu link là dấu # hoặc rỗng
    if (item.url === "#" || !item.url) {
      alert(`Chưa có link tải cho tài liệu: "${item.title}".\n\n(Vui lòng liên hệ Admin để cập nhật link)`);
      return;
    }

    // Mở link trực tiếp, không hỏi xác nhận để tránh bị trình duyệt chặn
    window.open(item.url, '_blank');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FolderOpen className="h-8 w-8 text-blue-200" />
              Kho Tài Liệu Toán Học
            </h1>
            <p className="text-blue-100 max-w-2xl text-lg">
              Tuyển tập đề thi, chuyên đề và sổ tay công thức từ lớp 1 đến lớp 12. Cập nhật liên tục, tải xuống miễn phí.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-center">
              <span className="block text-3xl font-bold">{resources.length}+</span>
              <span className="text-sm text-blue-100">Tài liệu chất lượng</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter (Desktop) */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Filter size={18} />
              Lọc theo Lớp
            </h3>
            <div className="space-y-1">
              {grades.map(g => (
                <button
                  key={g.id}
                  onClick={() => setActiveGrade(g.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex justify-between items-center ${
                    activeGrade === g.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {g.label}
                  {g.id !== 'all' && activeGrade === g.id && <CheckCircle2 size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
             <h4 className="font-bold text-blue-800 mb-2 text-sm uppercase">Mẹo tìm kiếm</h4>
             <p className="text-sm text-blue-600 leading-relaxed">
               Sử dụng từ khóa như "đề thi", "hình học", "đại số" để tìm nhanh tài liệu bạn cần.
             </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Search & Category Filter */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Tìm kiếm tài liệu (VD: Vectơ, Hàm số...)" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
               {categories.map(c => (
                 <button
                   key={c.id}
                   onClick={() => setActiveCategory(c.id)}
                   className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                     activeCategory === c.id 
                       ? 'bg-gray-900 text-white border-gray-900' 
                       : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                   }`}
                 >
                   {c.label}
                 </button>
               ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-lg">
              {filteredResources.length} Tài liệu được tìm thấy
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredResources.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-primary/30 transition-all group relative">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${
                      item.type === 'PDF' ? 'bg-red-50 text-red-500' : 
                      item.type === 'DOCX' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                    }`}>
                       {item.type === 'PDF' ? <FileText size={20} /> : 
                        item.type === 'DOCX' ? <File size={20} /> : <FileSpreadsheet size={20} />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 block uppercase tracking-wider">{item.type}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    Lớp {item.grade}
                  </span>
                </div>
                
                <h3 
                  onClick={() => handleDownload(item)}
                  className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
                  title="Bấm để tải xuống"
                >
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Download size={14} /> {item.downloads.toLocaleString()} lượt tải
                  </span>
                  
                  <button 
                    onClick={() => handleDownload(item)}
                    className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                     Tải xuống <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
            
            {filteredResources.length === 0 && (
              <div className="col-span-full bg-gray-50 rounded-xl p-12 text-center border-2 border-dashed border-gray-200">
                <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4">
                  <Search className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Không tìm thấy tài liệu</h3>
                <p className="text-gray-500">
                  Thử thay đổi bộ lọc lớp hoặc từ khóa tìm kiếm của bạn.
                </p>
                <button 
                  onClick={() => {setSearchTerm(""); setActiveGrade("all"); setActiveCategory("all");}}
                  className="mt-4 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page: Progress (Overview of all learning) ---
const ProgressPage = () => {
  const navigate = useNavigate();
  const [activeGradeFilter, setActiveGradeFilter] = useState('all');

  // Trigger for updates from service
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTrigger(prev => prev + 1);
    window.addEventListener("progress-updated", handleUpdate);
    return () => window.removeEventListener("progress-updated", handleUpdate);
  }, []);

  const gradeOptions = [
    { id: 'all', label: 'Tất cả' },
    { id: '1', label: 'Lớp 1' },
    { id: '2', label: 'Lớp 2' },
    { id: '3', label: 'Lớp 3' },
    { id: '4', label: 'Lớp 4' },
    { id: '5', label: 'Lớp 5' },
    { id: '6', label: 'Lớp 6' },
    { id: '7', label: 'Lớp 7' },
    { id: '8', label: 'Lớp 8' },
    { id: '9', label: 'Lớp 9' },
    { id: '10', label: 'Lớp 10' },
    { id: '11', label: 'Lớp 11' },
    { id: '12', label: 'Lớp 12' },
  ];

  // 1. Calculate Global User Profile (XP, Level) - Always based on ALL data
  const userProfile = useMemo(() => {
    let xp = 0;
    Object.values(MATH_DATA).forEach(grade => {
      grade.sessions.forEach(session => {
        if (isSectionCompleted(session.id, 'theory')) xp += 20;
        if (isSectionCompleted(session.id, 'examples')) xp += 20;
        if (isSectionCompleted(session.id, 'review')) xp += 20;
        if (isSectionCompleted(session.id, 'essay')) xp += 20;
        if (isSectionCompleted(session.id, 'mcq')) xp += 20;
      });
    });

    let levelTitle = "Học viên tập sự";
    if (xp > 200) levelTitle = "Học viên chăm chỉ";
    if (xp > 500) levelTitle = "Chuyên gia toán học";
    if (xp > 1000) levelTitle = "Thần đồng đất Việt";
    if (xp > 2000) levelTitle = "Giáo sư tương lai";

    return { xp, levelTitle };
  }, [trigger]);

  // 2. Calculate Dashboard Stats based on Filter
  const dashboardStats = useMemo(() => {
    // Determine which grades to include
    const gradesToProcess = activeGradeFilter === 'all' 
      ? Object.values(MATH_DATA) 
      : [MATH_DATA[activeGradeFilter]].filter(Boolean);

    let totalS = 0;
    let completedS = 0;
    let totalScore = 0;
    
    let theoryItemsTotal = 0;
    let theoryItemsDone = 0;
    let practiceItemsTotal = 0;
    let practiceItemsDone = 0;

    let foundNext = false;
    let nextS = null;

    gradesToProcess.forEach(grade => {
      grade.sessions.forEach(session => {
        totalS++;
        
        theoryItemsTotal += 3; 
        practiceItemsTotal += 2;
        
        if (isSectionCompleted(session.id, 'theory')) theoryItemsDone++;
        if (isSectionCompleted(session.id, 'examples')) theoryItemsDone++;
        if (isSectionCompleted(session.id, 'review')) theoryItemsDone++;
        
        if (isSectionCompleted(session.id, 'essay')) practiceItemsDone++;
        if (isSectionCompleted(session.id, 'mcq')) practiceItemsDone++;

        const completion = getSessionCompletion(session.id);
        totalScore += completion;
        
        if (completion === 100) {
          completedS++;
        } else if (!foundNext && !nextS) {
          nextS = {
            gradeId: grade.id,
            sessionId: session.id,
            title: session.title,
            gradeName: grade.name
          };
          foundNext = true;
        }
      });
    });

    const avgPercent = totalS > 0 ? Math.round(totalScore / totalS) : 0;
    const theoryP = theoryItemsTotal > 0 ? Math.round((theoryItemsDone / theoryItemsTotal) * 100) : 0;
    const practiceP = practiceItemsTotal > 0 ? Math.round((practiceItemsDone / practiceItemsTotal) * 100) : 0;

    return {
      totalSessions: totalS,
      completedSessions: completedS,
      totalPercent: avgPercent,
      theoryPercent: theoryP,
      practicePercent: practiceP,
      nextSession: nextS,
      gradesData: gradesToProcess // For the list view
    };
  }, [activeGradeFilter, trigger]);

  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const streakData = [true, true, true, false, true, true, false]; 

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Level Badge (Global) */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Trophy size={180} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
           <div className="flex-shrink-0">
             <div className="w-32 h-32 rounded-full border-4 border-yellow-400 bg-gray-700 flex items-center justify-center shadow-lg relative">
                <GraduationCap size={64} className="text-yellow-400" />
                <div className="absolute -bottom-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Level {Math.floor(userProfile.xp / 200) + 1}
                </div>
             </div>
           </div>
           
           <div className="text-center md:text-left flex-grow space-y-2">
             <h2 className="text-blue-300 font-medium uppercase tracking-widest text-sm">Hồ sơ học tập</h2>
             <h1 className="text-3xl md:text-4xl font-bold text-white">{userProfile.levelTitle}</h1>
             <p className="text-gray-400 max-w-lg">Bạn đã tích lũy được <span className="text-yellow-400 font-bold">{userProfile.xp} XP</span>. Tiếp tục hoàn thành các bài học để thăng cấp!</p>
             
             {/* XP Bar */}
             <div className="w-full max-w-md bg-gray-700 h-3 rounded-full mt-4 overflow-hidden">
               <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{ width: `${Math.min(100, (userProfile.xp % 200) / 2)}%` }}></div>
             </div>
             <div className="text-xs text-gray-500 mt-1">
               {userProfile.xp % 200} / 200 XP đến cấp tiếp theo
             </div>
           </div>
        </div>
      </div>

      {/* Grade Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {gradeOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveGradeFilter(opt.id)}
            className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all shadow-sm border ${
              activeGradeFilter === opt.id
                ? 'bg-primary text-white border-primary ring-2 ring-primary/20'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Suggested Lesson (Next Mission - Filtered) */}
      {dashboardStats.nextSession ? (
        <div 
           className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform cursor-pointer"
           onClick={() => navigate(`/grade/${dashboardStats.nextSession?.gradeId}/session/${dashboardStats.nextSession?.sessionId}`)}
        >
           <div className="flex items-center gap-4">
             <div className="bg-white/20 p-3 rounded-full">
               <Rocket size={32} className="text-yellow-300 animate-pulse" />
             </div>
             <div>
               <h3 className="text-indigo-100 font-bold text-sm uppercase mb-1 flex items-center gap-2">
                 <Target size={14} /> Nhiệm vụ tiếp theo {activeGradeFilter !== 'all' ? `(${gradeOptions.find(g => g.id === activeGradeFilter)?.label})` : ''}
               </h3>
               <h2 className="text-2xl font-bold">{dashboardStats.nextSession.title}</h2>
               <p className="text-indigo-100 text-sm opacity-90">{dashboardStats.nextSession.gradeName}</p>
             </div>
           </div>
           <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap">
             Học ngay <ArrowRight size={18} />
           </button>
        </div>
      ) : (
        <div className="bg-green-100 border border-green-200 rounded-2xl p-6 text-green-800 shadow-sm flex items-center justify-center gap-4">
           <Trophy size={32} className="text-green-600" />
           <div>
             <h2 className="text-xl font-bold">Tuyệt vời! Bạn đã hoàn thành tất cả bài học {activeGradeFilter !== 'all' ? `của ${gradeOptions.find(g => g.id === activeGradeFilter)?.label}` : ''}.</h2>
             <p className="text-green-700 text-sm">Hãy thử sức với các lớp khác hoặc chờ nội dung mới nhé.</p>
           </div>
        </div>
      )}

      {/* Main Stats Dashboard (Filtered) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Main Progress */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
           <h3 className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
             <Target size={18} /> Độ phủ kiến thức {activeGradeFilter !== 'all' ? `(Lớp ${activeGradeFilter})` : ''}
           </h3>
           <CircularProgress percentage={dashboardStats.totalPercent} size={140} color="text-primary" />
        </div>

        {/* Card 2: Skill Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
           <h3 className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
             <BarChart2 size={18} /> Phân tích kỹ năng
           </h3>
           
           <div className="space-y-6 flex-grow flex flex-col justify-center">
             <div>
               <div className="flex justify-between text-sm mb-1 font-medium">
                 <span className="text-blue-700 flex items-center gap-1"><BookOpen size={14} /> Lý thuyết & Ví dụ</span>
                 <span className="text-blue-700">{dashboardStats.theoryPercent}%</span>
               </div>
               <div className="h-2.5 w-full bg-blue-50 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 rounded-full" style={{ width: `${dashboardStats.theoryPercent}%` }}></div>
               </div>
             </div>
             
             <div>
               <div className="flex justify-between text-sm mb-1 font-medium">
                 <span className="text-green-700 flex items-center gap-1"><PenTool size={14} /> Bài tập thực hành</span>
                 <span className="text-green-700">{dashboardStats.practicePercent}%</span>
               </div>
               <div className="h-2.5 w-full bg-green-50 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 rounded-full" style={{ width: `${dashboardStats.practicePercent}%` }}></div>
               </div>
             </div>
           </div>
        </div>

        {/* Card 3: Streak & Sessions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
           <h3 className="text-gray-500 font-semibold mb-6 flex items-center gap-2">
             <Flame size={18} className="text-orange-500" /> Chuỗi ngày học
           </h3>
           
           <div className="flex justify-between items-center mb-8">
             {weekDays.map((day, idx) => (
               <div key={day} className="flex flex-col items-center gap-2">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                   streakData[idx] ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'
                 }`}>
                   {streakData[idx] && <Zap size={14} fill="currentColor" />}
                 </div>
                 <span className="text-xs text-gray-400">{day}</span>
               </div>
             ))}
           </div>

           <div className="mt-auto bg-gray-50 rounded-xl p-4 flex items-center justify-between">
             <div>
               <div className="text-xs text-gray-500 uppercase font-bold">Đã hoàn thành</div>
               <div className="text-2xl font-bold text-gray-800">
                 {dashboardStats.completedSessions} <span className="text-sm font-normal text-gray-500">/ {dashboardStats.totalSessions} buổi</span>
               </div>
             </div>
             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
               <CheckCircle2 size={20} />
             </div>
           </div>
        </div>
      </div>

      {/* Detailed Progress by Grade (Filtered) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Layers className="text-primary" /> Chi tiết theo lớp
        </h2>
        
        {dashboardStats.gradesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dashboardStats.gradesData.map(grade => {
              const sessions = grade.sessions;
              
              // Calculate specific stats for this grade
              let gTheoryTotal = 0, gTheoryDone = 0;
              let gPracTotal = 0, gPracDone = 0;
              
              sessions.forEach(s => {
                 gTheoryTotal += 3;
                 if (isSectionCompleted(s.id, 'theory')) gTheoryDone++;
                 if (isSectionCompleted(s.id, 'examples')) gTheoryDone++;
                 if (isSectionCompleted(s.id, 'review')) gTheoryDone++;
                 
                 gPracTotal += 2;
                 if (isSectionCompleted(s.id, 'essay')) gPracDone++;
                 if (isSectionCompleted(s.id, 'mcq')) gPracDone++;
              });

              const gTheoryP = sessions.length ? Math.round((gTheoryDone/gTheoryTotal)*100) : 0;
              const gPracP = sessions.length ? Math.round((gPracDone/gPracTotal)*100) : 0;
              const gAvg = Math.round((gTheoryP + gPracP) / 2);

              return (
                <div key={grade.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                        {grade.name.replace("Lớp ", "")}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{grade.name}</h3>
                        <p className="text-xs text-gray-500">{sessions.length} bài học</p>
                      </div>
                    </div>
                    <CircularProgress percentage={gAvg} size={50} strokeWidth={4} />
                  </div>
                  
                  <div className="space-y-3">
                    {/* Theory Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1 text-gray-500">
                        <span>Lý thuyết</span>
                        <span>{gTheoryDone}/{gTheoryTotal} phần</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: `${gTheoryP}%` }}></div>
                      </div>
                    </div>
                    
                    {/* Practice Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1 text-gray-500">
                        <span>Thực hành</span>
                        <span>{gPracDone}/{gPracTotal} phần</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: `${gPracP}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end">
                     <Link to={`/grade/${grade.id}`} className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-1">
                       Vào học <ArrowRight size={14} />
                     </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
           <div className="text-center py-10 text-gray-500 italic">Không có dữ liệu cho lớp này.</div>
        )}
      </div>
    </div>
  );
};

// --- Page: Home (Grade Selection) ---
const HomePage = () => {
  const user = getCurrentUser();

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 px-4 sm:pt-16 lg:pt-24">
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary bg-blue-50 border border-blue-100 mb-6">
               <Star className="w-4 h-4 mr-2 fill-primary" /> Xin chào, {user?.name || "Học viên"}!
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Chinh phục Toán học <br />
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Dễ dàng & Hiệu quả
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-8 leading-relaxed">
              Nền tảng học tập toàn diện từ Lớp 1 đến Lớp 12. 
              Lộ trình bài bản, lý thuyết cô đọng và hệ thống bài tập phong phú.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button 
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('chon-lop')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="px-8 py-4 text-base font-bold text-white bg-primary hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
               >
                 Bắt đầu học ngay <ArrowRight size={20} />
               </button>
               <Link to="/resources" className="px-8 py-4 text-base font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-full shadow-sm transition-all flex items-center justify-center">
                 Xem tài liệu
               </Link>
            </div>
         </div>
         
         {/* Decorative blobs */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 md:left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-10 right-10 md:right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
         </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               icon: BookOpen, 
               color: "text-blue-600 bg-blue-50",
               title: "Lộ trình bài bản", 
               desc: "Hệ thống bài học được thiết kế khoa học, chia theo từng buổi học giúp học sinh dễ dàng tiếp thu." 
             },
             { 
               icon: CheckSquare, 
               color: "text-green-600 bg-green-50",
               title: "Thực hành chuyên sâu", 
               desc: "Kho bài tập tự luận và trắc nghiệm phong phú kèm lời giải chi tiết để rèn luyện kỹ năng." 
             },
             { 
               icon: Award, 
               color: "text-indigo-600 bg-indigo-50",
               title: "Tự học hiệu quả", 
               desc: "Nội dung bám sát chương trình giáo dục phổ thông mới, tài liệu chi tiết giúp tự học dễ dàng tại nhà." 
             }
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                   <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Grade Selection */}
      <section id="chon-lop" className="max-w-7xl mx-auto px-4 pt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Chọn lớp học của bạn</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Chương trình được biên soạn riêng cho từng khối lớp, bám sát sách giáo khoa và đề thi.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(GradeLevel).map((grade) => {
            const gradeId = Object.keys(MATH_DATA).find(key => MATH_DATA[key].name === grade);
            const hasData = !!gradeId;
            
            return (
              <Link
                key={grade}
                to={hasData ? `/grade/${gradeId}` : '#'}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border flex flex-col items-center ${
                  hasData 
                    ? 'bg-white hover:shadow-xl border-gray-200 hover:border-primary/50 cursor-pointer hover:-translate-y-1' 
                    : 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-60'
                }`}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                  hasData ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                   {grade.replace(/[^0-9]/g, '')}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{grade}</h3>
                <p className="text-xs text-gray-500 mb-4 text-center px-2">
                  {hasData ? 'Đầy đủ bài giảng & bài tập' : 'Nội dung đang cập nhật'}
                </p>
                
                {hasData && (
                   <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                     <span className="text-primary text-sm font-bold flex items-center">
                       Vào học ngay <ChevronRight size={16} className="ml-1" />
                     </span>
                   </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// --- Page: Grade Overview (Session Selection) ---
const GradeOverviewPage = () => {
  const { gradeId } = useParams<{ gradeId: string }>();
  const gradeData = gradeId ? MATH_DATA[gradeId] : null;
  // Force re-render when progress changes (could use context, but simple event listener works for static app)
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTrigger(prev => prev + 1);
    window.addEventListener("progress-updated", handleUpdate);
    return () => window.removeEventListener("progress-updated", handleUpdate);
  }, []);

  if (!gradeData) return <Navigate to="/" />;

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <ChevronRight size={14} />
        <span className="font-semibold text-gray-900">{gradeData.name}</span>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Danh sách buổi học</h2>
        <p className="text-gray-600">Lộ trình học tập chi tiết cho {gradeData.name}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gradeData.sessions.map((session) => {
          const progress = getSessionCompletion(session.id);
          
          return (
            <Link
              key={session.id}
              to={`/grade/${gradeId}/session/${session.id}`}
              className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg transition-colors ${progress === 100 ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                  {progress === 100 ? <CheckCircle2 size={24} /> : <PlayCircle size={24} />}
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  5 phần học
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {session.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">
                {session.description}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                 <div 
                   className={`h-full transition-all duration-700 ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} 
                   style={{ width: `${progress}%` }}
                 ></div>
              </div>
              <div className="mt-2 text-xs text-right text-gray-400 font-medium">
                {progress}% Hoàn thành
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// --- Page: Session Detail (Main Learning View) ---
const SessionPage = () => {
  const { gradeId, sessionId } = useParams<{ gradeId: string; sessionId: string }>();
  const gradeData = gradeId ? MATH_DATA[gradeId] : null;
  const session = gradeData?.sessions.find(s => s.id === sessionId);
  const [activeTab, setActiveTab] = useState<SectionType>('theory');
  // State to force re-render on progress update
  const [progressVersion, setProgressVersion] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!gradeData || !session) return <Navigate to="/" />;

  const handleComplete = (section: SectionType) => {
    if (sessionId) {
      markSectionComplete(sessionId, section);
      setProgressVersion(prev => prev + 1);
      
      // Auto switch to next tab if not review
      const tabs: SectionType[] = ['theory', 'examples', 'essay', 'mcq', 'review'];
      const idx = tabs.indexOf(section);
      if (idx < tabs.length - 1) {
        // Optional: Auto navigation? Maybe just a toast or let user decide.
        // Let's scroll to top to show success
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleReset = (section: SectionType) => {
    if (sessionId) {
      resetSectionProgress(sessionId, section);
      setProgressVersion(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const tabs: { id: SectionType; label: string; icon: any }[] = [
    { id: 'theory', label: 'Lý thuyết', icon: BookOpen },
    { id: 'examples', label: 'Ví dụ', icon: FileText },
    { id: 'essay', label: 'Tự luận', icon: PenTool },
    { id: 'mcq', label: 'Trắc nghiệm', icon: CheckSquare },
    { id: 'review', label: 'Nhắc lại', icon: RefreshCw },
  ];

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Breadcrumb & Title */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to={`/grade/${gradeId}`} className="hover:text-primary">{gradeData.name}</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-gray-900 truncate">{session.title}</span>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           <div>
             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{session.title}</h1>
             <p className="text-gray-600">{session.description}</p>
           </div>
           <div className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-bold text-sm whitespace-nowrap">
              Tiến độ: {getSessionCompletion(session.id)}%
           </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
        <div className="flex space-x-1 p-1 bg-white/50 border border-gray-200 rounded-xl overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isCompleted = isSectionCompleted(session.id, tab.id);
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all whitespace-nowrap relative ${
                  isActive
                    ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} className={isCompleted ? 'text-green-500' : ''} />
                {tab.label}
                {isCompleted && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px] mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'theory' && (
          <TheoryView 
            content={session.theory} 
            onComplete={() => handleComplete('theory')}
            isCompleted={isSectionCompleted(session.id, 'theory')}
          />
        )}
        {activeTab === 'examples' && (
          <ExamplesView 
            examples={session.examples} 
            onComplete={() => handleComplete('examples')}
            isCompleted={isSectionCompleted(session.id, 'examples')}
          />
        )}
        {activeTab === 'essay' && (
          <EssayView 
            essays={session.essays} 
            onComplete={() => handleComplete('essay')}
            onReset={() => handleReset('essay')}
            isCompleted={isSectionCompleted(session.id, 'essay')}
          />
        )}
        {activeTab === 'mcq' && (
          <MCQView 
            mcqs={session.mcqs} 
            onComplete={() => handleComplete('mcq')}
            onReset={() => handleReset('mcq')}
            isCompleted={isSectionCompleted(session.id, 'mcq')}
          />
        )}
        {activeTab === 'review' && (
          <ReviewView 
            content={session.review} 
            onComplete={() => handleComplete('review')}
            isCompleted={isSectionCompleted(session.id, 'review')}
          />
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/builder" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ContentBuilder />
              </ProtectedRoute>
            } 
          />

          {/* Student/Shared Routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/progress" 
            element={
              <ProtectedRoute>
                <ProgressPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <ProtectedRoute>
                <ResourcesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/guide" 
            element={
              <ProtectedRoute>
                <UserGuide />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grade/:gradeId" 
            element={
              <ProtectedRoute>
                <GradeOverviewPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grade/:gradeId/session/:sessionId" 
            element={
              <ProtectedRoute>
                <SessionPage />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;