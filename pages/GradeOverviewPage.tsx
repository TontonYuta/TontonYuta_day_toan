
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { MATH_DATA } from '../data';
import { getSessionCompletion } from '../services/progressService';

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
        <span className="font-semibold text-gray-900 bg-white px-2 py-1 rounded shadow-sm">{gradeData.name}</span>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Danh sách bài học</h2>
        <p className="text-gray-600">Lộ trình học tập chi tiết cho {gradeData.name}</p>
      </div>

      <div className="space-y-12">
        {gradeData.chapters.map((chapter) => (
          <div key={chapter.id} className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg border-l-4 border-primary shadow-sm">
                {chapter.title}
              </h3>
              {chapter.description && <p className="text-gray-500 hidden md:block text-sm pt-1">{chapter.description}</p>}
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {chapter.sessions.length > 0 ? (
                chapter.sessions.map((session) => {
                  const progress = getSessionCompletion(session.id);
                  
                  return (
                    <Link
                      key={session.id}
                      to={`/grade/${gradeId}/session/${session.id}`}
                      className="flex flex-col bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-700 border-t-4 border-t-blue-500 hover:shadow-2xl hover:border-t-blue-400 transition-all group relative overflow-hidden hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg transition-colors shadow-sm ${progress === 100 ? 'bg-green-900/50 text-green-400' : 'bg-blue-900/50 text-blue-400'}`}>
                          {progress === 100 ? <CheckCircle2 size={24} /> : <PlayCircle size={24} />}
                        </div>
                        <span className="text-xs font-bold text-slate-400 bg-slate-900/50 px-2 py-1 rounded-full border border-slate-600 shadow-sm">
                          5 phần học
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mb-6 flex-grow leading-relaxed">
                        {session.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden border border-slate-600">
                        <div 
                          className={`h-full transition-all duration-700 rounded-full shadow-sm ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-xs text-right text-slate-500 font-bold">
                        {progress}% Hoàn thành
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full py-4 text-gray-400 italic text-sm pl-4 border-l-2 border-gray-200">
                  Nội dung chương này đang được cập nhật...
                </div>
              )}
            </div>
          </div>
        ))}
        {gradeData.chapters.length === 0 && (
           <div className="text-center py-10 text-gray-500">Chưa có chương học nào được tạo.</div>
        )}
      </div>
    </div>
  );
};

export default GradeOverviewPage;
