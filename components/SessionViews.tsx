
import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle, XCircle, AlertCircle, HelpCircle, CheckSquare, RotateCcw, Youtube, ExternalLink, Printer, Book, Lightbulb, PenTool } from 'lucide-react';
import { EssayQuestion, Example, MCQQuestion } from '../types';
import Button from './Button';
import MathText from './MathText';

interface ViewProps {
  onComplete?: () => void;
  onReset?: () => void;
  isCompleted?: boolean;
}

// --- Helper: Get Embed URL from YouTube Link ---
const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return null;
  
  try {
    // Regex to capture video ID from various YouTube URL formats (standard, short, embed, shorts)
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return (match && match[1]) ? `https://www.youtube.com/embed/${match[1]}?rel=0&playsinline=1` : null;
  } catch (error) {
    return null;
  }
};

// --- Helper Component for Completion Button ---
const CompleteSectionButton: React.FC<{ onClick?: () => void; isCompleted?: boolean; label?: string }> = ({ 
  onClick, 
  isCompleted, 
  label = "Hoàn thành phần này" 
}) => {
  if (!onClick) return null;
  
  return (
    <div className="mt-12 flex justify-center no-print pb-8">
      <button
        onClick={onClick}
        disabled={isCompleted}
        className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all transform active:scale-95 ${
          isCompleted 
            ? 'bg-green-100 text-green-700 cursor-default border border-green-200' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1'
        }`}
      >
        {isCompleted ? <CheckCircle className="w-6 h-6" /> : <CheckSquare className="w-6 h-6" />}
        {isCompleted ? 'Đã hoàn thành' : label}
      </button>
    </div>
  );
};

// --- Helper Component for Reset Button ---
const ResetSectionButton: React.FC<{ onClick?: () => void; label?: string }> = ({ 
  onClick, 
  label = "Làm lại" 
}) => {
  if (!onClick) return null;
  
  return (
    <div className="mt-2 flex justify-center no-print pb-8">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-5 py-2 text-sm text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 rounded-full font-medium transition-colors shadow-sm"
      >
        <RotateCcw className="w-4 h-4" />
        {label}
      </button>
    </div>
  );
};

// --- Theory Tab ---
export const TheoryView: React.FC<{ content: string; videoUrl?: string } & ViewProps> = ({ content, videoUrl, onComplete, isCompleted }) => {
  const embedUrl = videoUrl ? getYoutubeEmbedUrl(videoUrl) : null;
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Video Section */}
      {videoUrl && (
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 no-print">
           <div className="bg-gray-900 text-white px-6 py-4 flex items-center gap-3 border-b border-gray-800">
             <Youtube className="text-red-600" size={24} /> 
             <h3 className="font-bold text-lg">Video bài giảng</h3>
           </div>
           {embedUrl ? (
             <div className="relative w-full pt-[56.25%] bg-black">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedUrl} 
                  title="Video bài giảng"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             </div>
           ) : (
             <div className="p-10 flex justify-center">
                <a 
                  href={videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all font-bold"
                >
                  <ExternalLink size={20} />
                  Mở video bài giảng trong tab mới
                </a>
             </div>
           )}
        </div>
      )}

      {/* Theory Content */}
      <div className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden print-content relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50">
           <h3 className="font-bold text-gray-800 text-2xl flex items-center gap-3">
             <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Book size={24}/></div>
             Nội dung bài học
           </h3>
           <button 
             onClick={handlePrint}
             className="no-print p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
             title="In nội dung này"
           >
             <Printer size={20} />
           </button>
        </div>
        
        <div className="p-8 md:p-12">
          <article className="prose prose-lg prose-indigo max-w-none text-gray-700">
             <MathText content={content} block={true} />
          </article>
        </div>
      </div>
      
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã hiểu lý thuyết" />
    </div>
  );
};

// --- Examples Tab ---
export const ExamplesView: React.FC<{ examples: Example[] } & ViewProps> = ({ examples, onComplete, isCompleted }) => {
  if (examples.length === 0) return <div className="text-center text-gray-500 italic py-20 bg-white rounded-3xl border border-gray-100">Chưa có ví dụ cho bài này.</div>;

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {examples.map((ex, index) => (
        <div key={ex.id} className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden print-content group hover:shadow-xl transition-all duration-300">
          <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-50 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <h4 className="font-bold text-blue-900 text-xl">Ví dụ minh họa</h4>
          </div>
          
          <div className="p-8">
            <div className="text-lg font-medium text-gray-800 mb-8 leading-relaxed">
              <MathText content={ex.problem} block={true} />
            </div>
            
            <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100 relative">
               <div className="absolute -top-3 left-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                 <Lightbulb size={12} className="fill-current" /> Lời giải chi tiết
               </div>
               <div className="text-gray-700 pt-2">
                 <MathText content={ex.solution} block={true} />
               </div>
            </div>
          </div>
        </div>
      ))}
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã xem hết ví dụ" />
    </div>
  );
};

// --- Essay Tab ---
export const EssayView: React.FC<{ essays: EssayQuestion[] } & ViewProps> = ({ essays, onComplete, onReset, isCompleted }) => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setRevealed({});
    if (onReset) onReset();
  };

  if (essays.length === 0) return <div className="text-center text-gray-500 italic py-20 bg-white rounded-3xl border border-gray-100">Chưa có bài tập tự luận.</div>;

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {essays.map((item, index) => (
        <div key={item.id} className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 print-content overflow-hidden">
          {/* Header / Question Area */}
          <div className="p-8 border-b border-gray-50">
             <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner">
                  {index + 1}
                </div>
                <div className="flex-grow pt-1">
                   <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Bài tập tự luận</h4>
                   <div className="text-xl font-medium text-gray-900 leading-relaxed">
                      <MathText content={item.question} block={true} />
                   </div>
                   
                   {item.hint && (
                     <div className="mt-6 flex items-start gap-3 bg-yellow-50 border border-yellow-100 p-4 rounded-xl">
                       <div className="p-1.5 bg-yellow-200 text-yellow-700 rounded-full"><HelpCircle size={16} /></div>
                       <div className="text-sm text-gray-700">
                         <span className="font-bold text-yellow-800 block mb-1">Gợi ý: </span>
                         <MathText content={item.hint} />
                       </div>
                     </div>
                   )}
                </div>
             </div>
          </div>
          
          <div className="px-8 py-4 bg-gray-50/50 flex justify-center no-print border-t border-gray-100">
            <button 
              onClick={() => toggleSolution(item.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all ${
                revealed[item.id] 
                  ? 'bg-gray-200 text-gray-600 hover:bg-gray-300' 
                  : 'bg-white border border-gray-200 text-purple-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {revealed[item.id] ? <EyeOff size={18}/> : <Eye size={18}/>}
              {revealed[item.id] ? 'Ẩn lời giải' : 'Xem lời giải chi tiết'}
            </button>
          </div>

          {/* Solution Area */}
          {revealed[item.id] && (
            <div className="p-8 bg-white animate-in fade-in slide-in-from-top-2 duration-300 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-green-600 font-bold text-sm uppercase tracking-wider">
                <CheckCircle size={18} /> Lời giải tham khảo
              </div>
              <div className="text-gray-800 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <MathText content={item.solution} block={true} />
              </div>
            </div>
          )}
        </div>
      ))}
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Hoàn thành tự luận" />
      {isCompleted && <ResetSectionButton onClick={handleReset} label="Làm lại" />}
    </div>
  );
};

// --- MCQ Tab ---
export const MCQView: React.FC<{ mcqs: MCQQuestion[] } & ViewProps> = ({ mcqs, onComplete, onReset, isCompleted }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleSelect = (qId: string, optionIndex: number) => {
    if (submitted[qId]) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const checkAnswer = (qId: string) => {
    if (selectedAnswers[qId] === undefined || selectedAnswers[qId] === null) return;
    setSubmitted(prev => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted({});
    if (onReset) onReset();
  };

  if (mcqs.length === 0) return <div className="text-center text-gray-500 italic py-20 bg-white rounded-3xl border border-gray-100">Chưa có câu hỏi trắc nghiệm.</div>;

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {mcqs.map((q, index) => {
        const isSubmitted = submitted[q.id];
        const selected = selectedAnswers[q.id];
        const isCorrect = selected === q.correctIndex;

        return (
          <div key={q.id} className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden print-content">
            {/* Question Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md transform rotate-3">
                  {index + 1}
                </div>
                <div className="text-lg font-medium text-gray-900 flex-grow pt-2 leading-relaxed">
                  <MathText content={q.question} block={true} />
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, optIdx) => {
                  let stateStyles = "border-gray-200 hover:border-indigo-300 hover:bg-white bg-white/50 shadow-sm";
                  if (selected === optIdx) {
                    stateStyles = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500 shadow-md z-10";
                  }
                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      stateStyles = "border-green-500 bg-green-50 ring-1 ring-green-500 opacity-100 font-bold shadow-sm";
                    } else if (selected === optIdx && selected !== q.correctIndex) {
                      stateStyles = "border-red-500 bg-red-50 ring-1 ring-red-500 opacity-70";
                    } else {
                      stateStyles = "border-gray-100 opacity-40 bg-gray-50 grayscale";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${stateStyles}`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-black flex-shrink-0 transition-colors ${
                        selected === optIdx || (isSubmitted && optIdx === q.correctIndex) 
                          ? 'border-current' 
                          : 'border-gray-300 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <div className="flex-grow text-gray-800">
                         <MathText content={opt} />
                      </div>
                      {isSubmitted && optIdx === q.correctIndex && <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 animate-in zoom-in" />}
                      {isSubmitted && selected === optIdx && optIdx !== q.correctIndex && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 animate-in zoom-in" />}
                    </button>
                  );
                })}
              </div>

              {!isSubmitted && (
                <div className="mt-8 flex justify-end no-print">
                  <button 
                    onClick={() => checkAnswer(q.id)} 
                    disabled={selected === undefined || selected === null}
                    className="px-8 py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Kiểm tra đáp án
                  </button>
                </div>
              )}
            </div>

            {isSubmitted && (
              <div className={`px-8 py-6 border-t ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full flex-shrink-0 ${isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                    {isCorrect ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                  </div>
                  <div className="flex-grow">
                    <h4 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Chính xác! Làm tốt lắm.' : 'Chưa chính xác.'}
                    </h4>
                    
                    {!isCorrect && (
                      <div className="mb-4 inline-block px-4 py-2 bg-white border border-green-200 text-green-800 rounded-xl text-sm font-medium shadow-sm">
                        Đáp án đúng là: <strong className="text-lg ml-1">{String.fromCharCode(65 + q.correctIndex)}</strong>
                      </div>
                    )}

                    <div className="text-gray-700 bg-white/60 p-5 rounded-xl border border-gray-200/50">
                      <span className="font-bold text-gray-900 block mb-2 flex items-center gap-2"><Lightbulb size={16} className="text-yellow-500"/> Giải thích: </span>
                      <MathText content={q.explanation} block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Hoàn thành trắc nghiệm" />
      {isCompleted && <ResetSectionButton onClick={handleReset} label="Làm lại tất cả" />}
    </div>
  );
};

// --- Review Tab ---
export const ReviewView: React.FC<{ content: string } & ViewProps> = ({ content, onComplete, isCompleted }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-[2.5rem] shadow-xl border border-orange-100 print-content relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        
        <h3 className="text-3xl font-black text-orange-800 mb-8 flex items-center gap-4 relative z-10">
          <div className="bg-white p-3 rounded-2xl text-orange-500 shadow-md"><PenTool className="w-8 h-8" /></div>
          Tổng kết bài học
        </h3>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-orange-100 shadow-sm relative z-10">
          <MathText content={content} block={true} className="text-gray-800 text-lg leading-loose" />
        </div>
        
        <div className="mt-10 pt-6 border-t border-orange-200/50 relative z-10">
          <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Tôi đã nắm vững kiến thức" />
        </div>
      </div>
    </div>
  );
};
