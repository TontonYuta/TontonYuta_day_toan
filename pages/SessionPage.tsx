
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, BookOpen, FileText, PenTool, CheckSquare, RefreshCw } from 'lucide-react';
import { MATH_DATA } from '../data';
import { SectionType } from '../types';
import { getSessionCompletion, isSectionCompleted, markSectionComplete, resetSectionProgress } from '../services/progressService';
import { TheoryView, ExamplesView, EssayView, MCQView, ReviewView } from '../components/SessionViews';

const SessionPage = () => {
  const { gradeId, sessionId } = useParams<{ gradeId: string; sessionId: string }>();
  const gradeData = gradeId ? MATH_DATA[gradeId] : null;
  // Flatten sessions to find the specific one
  const session = gradeData?.chapters.flatMap(c => c.sessions).find(s => s.id === sessionId);
  
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
      <div className="space-y-4 no-print">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to={`/grade/${gradeId}`} className="hover:text-primary">Lớp {gradeData.name.replace("Lớp ", "")}</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-gray-900 truncate bg-white px-2 py-0.5 rounded shadow-sm">{session.title}</span>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           <div>
             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{session.title}</h1>
             <p className="text-gray-600">{session.description}</p>
           </div>
           <div className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap shadow-sm border ${getSessionCompletion(session.id) === 100 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
              Tiến độ: {getSessionCompletion(session.id)}%
           </div>
        </div>
      </div>

      {/* Title only for Print Mode */}
      <div className="hidden print:block mb-6">
         <h1 className="text-3xl font-bold text-black mb-2">{session.title}</h1>
         <p className="text-gray-600 italic">Dạy Toán - Học Toán Hiệu Quả</p>
         <hr className="mt-4 border-black" />
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-30 bg-slate-100/95 backdrop-blur supports-[backdrop-filter]:bg-slate-100/60 py-2 no-print rounded-3xl">
        <div className="flex space-x-2 p-1 bg-white border border-gray-200 rounded-3xl overflow-x-auto no-scrollbar shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isCompleted = isSectionCompleted(session.id, tab.id);
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-2xl transition-all whitespace-nowrap relative ${
                  isActive
                    ? 'bg-primary text-white shadow-md transform scale-105'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} className={isCompleted && !isActive ? 'text-green-500' : ''} />
                {tab.label}
                {isCompleted && (
                  <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-green-500'}`}></span>
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
            videoUrl={session.videoUrl} // Pass videoUrl here
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

export default SessionPage;
