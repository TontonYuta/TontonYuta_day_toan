import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle, XCircle, AlertCircle, HelpCircle, CheckSquare, RotateCcw } from 'lucide-react';
import { EssayQuestion, Example, MCQQuestion } from '../types';
import Button from './Button';
import MathText from './MathText';

interface ViewProps {
  onComplete?: () => void;
  onReset?: () => void;
  isCompleted?: boolean;
}

// --- Helper Component for Completion Button ---
const CompleteSectionButton: React.FC<{ onClick?: () => void; isCompleted?: boolean; label?: string }> = ({ 
  onClick, 
  isCompleted, 
  label = "Đánh dấu đã xong phần này" 
}) => {
  if (!onClick) return null;
  
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onClick}
        disabled={isCompleted}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all transform ${
          isCompleted 
            ? 'bg-green-100 text-green-700 cursor-default' 
            : 'bg-primary text-white hover:bg-blue-700 hover:scale-105 shadow-lg'
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
    <div className="mt-4 flex justify-center">
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
export const TheoryView: React.FC<{ content: string } & ViewProps> = ({ content, onComplete, isCompleted }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <MathText content={content} block={true} />
      <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã hiểu lý thuyết" />
    </div>
  );
};

// --- Examples Tab ---
export const ExamplesView: React.FC<{ examples: Example[] } & ViewProps> = ({ examples, onComplete, isCompleted }) => {
  if (examples.length === 0) return <div className="text-center text-gray-500 italic py-10">Chưa có ví dụ cho bài này.</div>;

  return (
    <div className="space-y-6">
      {examples.map((ex, index) => (
        <div key={ex.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-blue-50/50 px-6 py-4 border-b border-blue-100 flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </span>
            <div className="w-full">
              <h4 className="font-semibold text-blue-900">Ví dụ {index + 1}</h4>
              <div className="text-gray-800 mt-1">
                <MathText content={ex.problem} block={true} />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Lời giải:
            </div>
            <div className="text-gray-700 pl-6 border-l-2 border-green-100">
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

  if (essays.length === 0) return <div className="text-center text-gray-500 italic py-10">Chưa có bài tập tự luận.</div>;

  return (
    <div className="space-y-8">
      {essays.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex gap-3 mb-4">
               <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
                B{index + 1}
              </span>
              <div className="flex-grow">
                 <div className="text-lg font-medium text-gray-900">
                    <MathText content={item.question} block={true} />
                 </div>
                 {item.hint && (
                   <div className="mt-3 text-sm text-gray-500 flex items-start gap-1 bg-gray-50 p-2 rounded">
                     <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> 
                     <div>
                       <span className="font-bold">Gợi ý: </span>
                       <MathText content={item.hint} />
                     </div>
                   </div>
                 )}
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => toggleSolution(item.id)}
                className="gap-2"
              >
                {revealed[item.id] ? <EyeOff size={16}/> : <Eye size={16}/>}
                {revealed[item.id] ? 'Ẩn lời giải' : 'Xem lời giải'}
              </Button>
            </div>
          </div>

          {revealed[item.id] && (
            <div className="bg-gray-50 px-6 py-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Lời giải chi tiết</h4>
              <div className="text-gray-800 bg-white p-4 rounded border border-gray-200 shadow-sm">
                <MathText content={item.solution} block={true} />
              </div>
            </div>
          )}
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

  if (mcqs.length === 0) return <div className="text-center text-gray-500 italic py-10">Chưa có câu hỏi trắc nghiệm.</div>;

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {mcqs.map((q, index) => {
        const isSubmitted = submitted[q.id];
        const selected = selectedAnswers[q.id];
        const isCorrect = selected === q.correctIndex;

        return (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="text-lg font-medium text-gray-900 flex-grow">
                  <MathText content={q.question} block={true} />
                </div>
              </div>

              <div className="space-y-3 pl-11">
                {q.options.map((opt, optIdx) => {
                  let stateStyles = "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  if (selected === optIdx) {
                    stateStyles = "border-blue-500 bg-blue-50 ring-1 ring-blue-500";
                  }
                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      stateStyles = "border-green-500 bg-green-50 ring-1 ring-green-500 opacity-100";
                    } else if (selected === optIdx && selected !== q.correctIndex) {
                      stateStyles = "border-red-500 bg-red-50 ring-1 ring-red-500";
                    } else {
                      stateStyles = "border-gray-100 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-4 rounded-lg border transition-all flex items-center gap-3 ${stateStyles}`}
                    >
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs flex-shrink-0 ${
                        selected === optIdx || (isSubmitted && optIdx === q.correctIndex) ? 'border-current font-bold' : 'border-gray-300 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <div className="flex-grow text-gray-800">
                         <MathText content={opt} />
                      </div>
                      {isSubmitted && optIdx === q.correctIndex && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                      {isSubmitted && selected === optIdx && optIdx !== q.correctIndex && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {!isSubmitted && (
                <div className="mt-6 pl-11">
                  <Button 
                    onClick={() => checkAnswer(q.id)} 
                    disabled={selected === undefined || selected === null}
                    className="w-full sm:w-auto"
                  >
                    Kiểm tra
                  </Button>
                </div>
              )}
            </div>

            {isSubmitted && (
              <div className={`px-6 py-4 border-t ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" /> : <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />}
                  <div className="flex-grow">
                    <h4 className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Chính xác!' : 'Chưa chính xác'}
                    </h4>
                    
                    {!isCorrect && (
                      <div className="mb-2 p-2 bg-green-100 text-green-800 rounded-md text-sm font-medium inline-block">
                        Đáp án đúng: {String.fromCharCode(65 + q.correctIndex)}
                      </div>
                    )}

                    <div className="text-gray-700">
                      <span className="font-semibold">Giải thích: </span>
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
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-sm border border-yellow-200">
      <h3 className="text-xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
        <CheckCircle className="w-6 h-6" />
        Tổng kết bài học
      </h3>
      <MathText content={content} block={true} className="text-gray-800" />
      <div className="mt-6 pt-6 border-t border-yellow-200/50">
        <CompleteSectionButton onClick={onComplete} isCompleted={isCompleted} label="Đã nắm vững kiến thức" />
      </div>
    </div>
  );
};