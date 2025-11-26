
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trophy, GraduationCap, Target, BarChart2, Flame, Zap, CheckCircle2, Layers, BookOpen, PenTool, ArrowRight, Medal } from 'lucide-react';
import { MATH_DATA } from '../data';
import { isSectionCompleted, getSessionCompletion } from '../services/progressService';
import { getCurrentUser, getAllUsers } from '../services/authService';
import CircularProgress from '../components/CircularProgress';

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
      grade.chapters.forEach(chapter => {
        chapter.sessions.forEach(session => {
          if (isSectionCompleted(session.id, 'theory')) xp += 20;
          if (isSectionCompleted(session.id, 'examples')) xp += 20;
          if (isSectionCompleted(session.id, 'review')) xp += 20;
          if (isSectionCompleted(session.id, 'essay')) xp += 20;
          if (isSectionCompleted(session.id, 'mcq')) xp += 20;
        });
      });
    });

    let levelTitle = "Học viên tập sự";
    if (xp > 200) levelTitle = "Học viên chăm chỉ";
    if (xp > 500) levelTitle = "Chuyên gia toán học";
    if (xp > 1000) levelTitle = "Thần đồng đất Việt";
    if (xp > 2000) levelTitle = "Giáo sư tương lai";

    return { xp, levelTitle };
  }, [trigger]);

  // Calculate Leaderboard Data (Hack to read other users' progress from localStorage in this simplified architecture)
  const leaderboardData = useMemo(() => {
    const allUsers = getAllUsers().filter(u => u.role === 'student'); // Only rank students
    const currentUser = getCurrentUser();
    
    const rankings = allUsers.map(u => {
      let score = 0;
      // For current user, use the live calculation
      if (currentUser && u.id === currentUser.id) {
         score = userProfile.xp;
      } else {
        // For others, try to read their storage key. 
        const key = `daytoan_progress_${u.id}`;
        const stored = localStorage.getItem(key);
        if (stored) {
           const progress = JSON.parse(stored);
           // Calculate XP from stored progress object
           Object.values(progress).forEach((sess: any) => {
             if(sess.theory) score += 20;
             if(sess.examples) score += 20;
             if(sess.review) score += 20;
             if(sess.essay) score += 20;
             if(sess.mcq) score += 20;
           });
        } else {
           // Simulation for demo purposes: Generate a stable random score based on user ID
           const seed = u.id.charCodeAt(0) + u.id.length;
           score = (seed * 15) % 800; 
        }
      }
      return { ...u, xp: score };
    });

    // Sort by XP desc
    return rankings.sort((a, b) => b.xp - a.xp).slice(0, 5); // Top 5
  }, [trigger, userProfile.xp]);

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
      grade.chapters.forEach(chapter => {
        chapter.sessions.forEach(session => {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats */}
        <div className="lg:col-span-2 space-y-8">
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
                  <div className="w-full max-w-md bg-gray-700 h-3 rounded-full mt-4 overflow-hidden border border-gray-600">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]" style={{ width: `${Math.min(100, (userProfile.xp % 200) / 2)}%` }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {userProfile.xp % 200} / 200 XP đến cấp tiếp theo
                  </div>
                </div>
              </div>
            </div>

            {/* Grade Filter Bar */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar">
                {gradeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveGradeFilter(opt.id)}
                    className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all shadow-sm border ${
                      activeGradeFilter === opt.id
                        ? 'bg-primary text-white border-primary ring-2 ring-primary/20'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested Lesson */}
            {dashboardStats.nextSession ? (
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform cursor-pointer border-t-4 border-indigo-400"
                onClick={() => navigate(`/grade/${dashboardStats.nextSession?.gradeId}/session/${dashboardStats.nextSession?.sessionId}`)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Target size={32} className="text-yellow-300 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-indigo-100 font-bold text-sm uppercase mb-1 flex items-center gap-2">
                      <Target size={14} /> Nhiệm vụ tiếp theo {activeGradeFilter !== 'all' ? `(${gradeOptions.find(g => g.id === activeGradeFilter)?.label})` : ''}
                    </h3>
                    <h2 className="text-2xl font-bold">{dashboardStats.nextSession.title}</h2>
                    <p className="text-indigo-100 text-sm opacity-90">{dashboardStats.nextSession.gradeName}</p>
                  </div>
                </div>
                <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 whitespace-nowrap">
                  Học ngay <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="bg-green-100 border border-green-200 rounded-3xl p-6 text-green-800 shadow-sm flex items-center justify-center gap-4">
                <Trophy size={32} className="text-green-600" />
                <div>
                  <h2 className="text-xl font-bold">Tuyệt vời! Bạn đã hoàn thành tất cả bài học {activeGradeFilter !== 'all' ? `của ${gradeOptions.find(g => g.id === activeGradeFilter)?.label}` : ''}.</h2>
                  <p className="text-green-700 text-sm">Hãy thử sức với các lớp khác hoặc chờ nội dung mới nhé.</p>
                </div>
              </div>
            )}

            {/* Main Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
                <h3 className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
                  <Target size={18} /> Độ phủ kiến thức
                </h3>
                <CircularProgress percentage={dashboardStats.totalPercent} size={140} color="text-primary" />
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between">
                <h3 className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
                  <BarChart2 size={18} /> Phân tích kỹ năng
                </h3>
                <div className="space-y-6 flex-grow flex flex-col justify-center">
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-medium">
                      <span className="text-blue-700 flex items-center gap-1"><BookOpen size={14} /> Lý thuyết & Ví dụ</span>
                      <span className="text-blue-700">{dashboardStats.theoryPercent}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-blue-50 rounded-full overflow-hidden border border-blue-100">
                      <div className="h-full bg-blue-500 rounded-full shadow-sm" style={{ width: `${dashboardStats.theoryPercent}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-medium">
                      <span className="text-green-700 flex items-center gap-1"><PenTool size={14} /> Bài tập thực hành</span>
                      <span className="text-green-700">{dashboardStats.practicePercent}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-green-50 rounded-full overflow-hidden border border-green-100">
                      <div className="h-full bg-green-500 rounded-full shadow-sm" style={{ width: `${dashboardStats.practicePercent}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col">
                <h3 className="text-gray-500 font-semibold mb-6 flex items-center gap-2">
                  <Flame size={18} className="text-orange-500" /> Chuỗi ngày học
                </h3>
                <div className="flex justify-between items-center mb-8">
                  {weekDays.map((day, idx) => (
                    <div key={day} className="flex flex-col items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                        streakData[idx] ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {streakData[idx] && <Zap size={14} fill="currentColor" />}
                      </div>
                      <span className="text-xs text-gray-400">{day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Đã hoàn thành</div>
                    <div className="text-2xl font-bold text-gray-800">
                      {dashboardStats.completedSessions} <span className="text-sm font-normal text-gray-500">/ {dashboardStats.totalSessions} buổi</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Right Column: Leaderboard */}
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white text-center relative shadow-md">
                 <Medal size={40} className="mx-auto mb-2 text-white drop-shadow-md" />
                 <h3 className="font-bold text-xl">Bảng xếp hạng</h3>
                 <p className="text-yellow-100 text-sm">Top 5 học viên xuất sắc nhất</p>
              </div>
              <div className="p-4 bg-white">
                 {leaderboardData.map((user, idx) => {
                    const isTop1 = idx === 0;
                    const isTop2 = idx === 1;
                    const isTop3 = idx === 2;
                    let rankBg = "bg-gray-100 text-gray-600";
                    if (isTop1) rankBg = "bg-yellow-100 text-yellow-700 shadow-sm border-yellow-200 border";
                    if (isTop2) rankBg = "bg-gray-200 text-gray-700 shadow-sm border-gray-300 border";
                    if (isTop3) rankBg = "bg-orange-100 text-orange-700 shadow-sm border-orange-200 border";

                    return (
                       <div key={user.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors mb-2 border border-transparent hover:border-gray-200">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rankBg}`}>
                             {idx + 1}
                          </div>
                          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 p-[2px] shadow-sm">
                             <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-blue-700 font-bold text-xs">
                                {user.avatar || user.name.charAt(0)}
                             </div>
                          </div>
                          <div className="flex-1 min-w-0">
                             <h4 className="font-bold text-gray-900 truncate">{user.name}</h4>
                             <p className="text-xs text-gray-500">Học viên</p>
                          </div>
                          <div className="text-right">
                             <span className="font-bold text-indigo-600 text-lg">{user.xp}</span>
                             <span className="text-[10px] text-gray-400 uppercase ml-1 font-bold">XP</span>
                          </div>
                       </div>
                    );
                 })}
                 <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Zap size={12} className="text-yellow-500"/> Cập nhật theo thời gian thực
                    </p>
                 </div>
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
              const sessions = grade.chapters.flatMap(c => c.sessions);
              
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
                <div key={grade.id} className="bg-white rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-md">
                        {grade.name.replace("Lớp ", "")}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{grade.name}</h3>
                        <p className="text-xs text-gray-500 font-medium">{sessions.length} bài học</p>
                      </div>
                    </div>
                    <CircularProgress percentage={gAvg} size={50} strokeWidth={4} />
                  </div>
                  
                  <div className="space-y-4">
                    {/* Theory Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1 text-gray-500 font-medium">
                        <span>Lý thuyết</span>
                        <span>{gTheoryDone}/{gTheoryTotal} phần</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full shadow-sm" style={{ width: `${gTheoryP}%` }}></div>
                      </div>
                    </div>
                    
                    {/* Practice Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1 text-gray-500 font-medium">
                        <span>Thực hành</span>
                        <span>{gPracDone}/{gPracTotal} phần</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full shadow-sm" style={{ width: `${gPracP}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-100 flex justify-end">
                     <Link to={`/grade/${grade.id}`} className="text-sm font-bold text-white bg-primary hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-1 transition-colors shadow-sm">
                       Vào học <ArrowRight size={14} />
                     </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
           <div className="text-center py-10 text-gray-500 italic bg-white rounded-3xl shadow-sm">Không có dữ liệu cho lớp này.</div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
