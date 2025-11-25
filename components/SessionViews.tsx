
import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle, XCircle, AlertCircle, HelpCircle, CheckSquare, RotateCcw, Youtube, ExternalLink, Printer } from 'lucide-react';
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
  // Handle youtube.com/watch?v=ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
};

// --- Helper Component for Completion Button ---
const CompleteSectionButton: React.FC<{ onClick?: () => void; isCompleted?: boolean; label?: string }> = ({ 
  onClick, 
  isCompleted, 
  label = "Đánh dấu đã xong phần này" 
}) => {
  if (!onClick) return null;
  
  return (
    <div className="mt-8 flex justify-center no-print">
      <button
        onClick={onClick}
        disabled={isCompleted}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all transform ${
          isCompleted 
            ? 'bg-green-100 text-green-700 cursor-default' 
            : 'bg-primary text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-200'
        }`}
      >
        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <CheckSquare className="w-5 h-5" />}
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
    <div className="mt-4 flex justify-center no-print">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-900 bg-transparent hover:bg-gray-100 rounded-full font-medium transition-colors"
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
    <div className="space-y-6">
      {/* Video Section */}
      {videoUrl && (
        <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-red-500 no-print">
           <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg">
             <Youtube className="text-red-600" size={24} /> Video bài giảng
           </h3>
           {embedUrl ? (
             <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-black shadow-inner">
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
             <a 
               href={videoUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full p-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors font-medium"
             >
               <ExternalLink size={20} />
               Xem video bài giảng tại liên kết này
             </a>
           )}
        </div>
      )}

      {/* Theory Content */}
      <div className="bg-white rounded-xl shadow-md border-t-4 border-blue-500 overflow-hidden print-content">
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-50 to-white border-b border-gray-100">
           <h3 className="font-bold text-gray-800 text-lg">Nội dung bài học</h3>
           <button 
             onClick={handlePrint}
             className="no-print flex items-center gap-1 text-gray-500 hover:text-primary text-sm font-medium transition-colors bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:shadow"
             title="In nội dung này"
           >
             <Printer size={16} /> In
           </button>
        </div>
        
        <div className="p-6 md:p-8">
          <MathText content={content} block={true} />
        </div>
        
        <div className="bg-gray-50 p-6 border-t border-gray-100">
           <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã hiểu lý thuyết" />
        </div>
      </div>
    </div>
  );
};

// --- Examples Tab ---
export const ExamplesView: React.FC<{ examples: Example[] } & ViewProps> = ({ examples, onComplete, isCompleted }) => {
  if (examples.length === 0) return <div className="text-center text-gray-500 italic py-10 bg-white rounded-xl shadow-sm">Chưa có ví dụ cho bài này.</div>;

  return (
    <div className="space-y-8">
      {examples.map((ex, index) => (
        <div key={ex.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden print-content hover:shadow-lg transition-shadow">
          <div className="bg-blue-50/80 px-6 py-4 border-b border-blue-100 flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
              {index + 1}
            </span>
            <div className="w-full">
              <h4 className="font-bold text-blue-900 text-lg">Ví dụ {index + 1}</h4>
              <div className="text-gray-800 mt-2 font-medium">
                <MathText content={ex.problem} block={true} />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-3 text-sm font-bold text-green-600 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              Lời giải chi tiết:
            </div>
            <div className="text-gray-700 pl-6 border-l-4 border-green-100 bg-green-50/30 p-4 rounded-r-lg">
              <MathText content={ex.solution} block={true} />
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

  if (essays.length === 0) return <div className="text-center text-gray-500 italic py-10 bg-white rounded-xl shadow-sm">Chưa có bài tập tự luận.</div>;

  return (
    <div className="space-y-8">
      {essays.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl shadow-md border-t-4 border-purple-500 print-content overflow-hidden">
          <div className="p-0">
            {/* Header / Question Area */}
            <div className="bg-gray-50 p-6 border-b border-gray-200">
               <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-sm">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                     <h4 className="text-sm font-bold text-purple-700 uppercase mb-1">Câu hỏi tự luận</h4>
                     <div className="text-lg font-medium text-gray-900">
                        <MathText content={item.question} block={true} />
                     </div>
                     {item.hint && (
                       <div className="mt-4 text-sm text-gray-600 flex items-start gap-2 bg-yellow-50 border border-yellow-100 p-3 rounded-lg">
                         <HelpCircle className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" /> 
                         <div>
                           <span className="font-bold text-yellow-700">Gợi ý: </span>
                           <MathText content={item.hint} />
                         </div>
                       </div>
                     )}
                  </div>
               </div>
            </div>
            
            <div className="p-4 bg-white flex justify-center no-print border-b border-gray-100">
              <Button 
                variant={revealed[item.id] ? "outline" : "secondary"}
                onClick={() => toggleSolution(item.id)}
                className="gap-2 shadow-sm"
              >
                {revealed[item.id] ? <EyeOff size={18}/> : <Eye size={18}/>}
                {revealed[item.id] ? 'Ẩn lời giải' : 'Xem lời giải chi tiết'}
              </Button>
            </div>

            {/* Solution Area */}
            {revealed[item.id] && (
              <div className="bg-white px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <h4 className="text-sm font-bold text-green-600 uppercase mb-3 flex items-center gap-2">
                  <CheckCircle size={16} /> Lời giải
                </h4>
                <div className="text-gray-800 bg-gray-50/50 p-5 rounded-lg border border-gray-200">
                  <MathText content={item.solution} block={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Hoàn thành bài tự luận" />
      {isCompleted && <ResetSectionButton onClick={handleReset} label="Làm lại từ đầu" />}
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

  if (mcqs.length === 0) return <div className="text-center text-gray-500 italic py-10 bg-white rounded-xl shadow-sm">Chưa có câu hỏi trắc nghiệm.</div>;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {mcqs.map((q, index) => {
        const isSubmitted = submitted[q.id];
        const selected = selectedAnswers[q.id];
        const isCorrect = selected === q.correctIndex;

        return (
          <div key={q.id} className="bg-white rounded-xl shadow-md border-t-4 border-indigo-500 overflow-hidden print-content">
            {/* Question Header */}
            <div className="bg-gray-50 p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-sm">
                  {index + 1}
                </span>
                <div className="text-lg font-medium text-gray-900 flex-grow pt-1">
                  <MathText content={q.question} block={true} />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, optIdx) => {
                  let stateStyles = "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 bg-white";
                  if (selected === optIdx) {
                    stateStyles = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500 shadow-sm";
                  }
                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      stateStyles = "border-green-500 bg-green-50 ring-1 ring-green-500 opacity-100 font-medium";
                    } else if (selected === optIdx && selected !== q.correctIndex) {
                      stateStyles = "border-red-500 bg-red-50 ring-1 ring-red-500";
                    } else {
                      stateStyles = "border-gray-100 opacity-50 bg-gray-50";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${stateStyles}`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                        selected === optIdx || (isSubmitted && optIdx === q.correctIndex) 
                          ? 'border-current' 
                          : 'border-gray-300 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <div className="flex-grow text-gray-800">
                         <MathText content={opt} />
                      </div>
                      {isSubmitted && optIdx === q.correctIndex && <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />}
                      {isSubmitted && selected === optIdx && optIdx !== q.correctIndex && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {!isSubmitted && (
                <div className="mt-6 flex justify-end no-print">
                  <Button 
                    onClick={() => checkAnswer(q.id)} 
                    disabled={selected === undefined || selected === null}
                    className="w-full sm:w-auto px-8"
                  >
                    Kiểm tra đáp án
                  </Button>
                </div>
              )}
            </div>

            {isSubmitted && (
              <div className={`px-6 py-5 border-t ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {isCorrect ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                  </div>
                  <div className="flex-grow">
                    <h4 className={`font-bold text-lg mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Chính xác!' : 'Chưa chính xác'}
                    </h4>
                    
                    {!isCorrect && (
                      <div className="mb-3 p-3 bg-white border border-green-200 text-green-800 rounded-lg text-sm font-medium inline-block shadow-sm">
                        Đáp án đúng: <strong className="text-lg ml-1">{String.fromCharCode(65 + q.correctIndex)}</strong>
                      </div>
                    )}

                    <div className="text-gray-700 bg-white/50 p-4 rounded-lg border border-gray-200/50">
                      <span className="font-bold text-gray-900 block mb-1">Giải thích: </span>
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
      {isCompleted && <ResetSectionButton onClick={handleReset} label="Làm lại bài trắc nghiệm" />}
    </div>
  );
};

// --- Review Tab ---
export const ReviewView: React.FC<{ content: string } & ViewProps> = ({ content, onComplete, isCompleted }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-md border-t-4 border-yellow-400 print-content">
      <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3 border-b border-yellow-200 pb-4">
        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><CheckCircle className="w-8 h-8" /></div>
        Tổng kết bài học
      </h3>
      <div className="bg-white/60 p-6 rounded-xl border border-yellow-100 shadow-sm">
        <MathText content={content} block={true} className="text-gray-900" />
      </div>
      <div className="mt-8 pt-6 border-t border-yellow-200/50">
        <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã nắm vững kiến thức" />
      </div>
    </div>
  );
};
