
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Copy, Check, Eye, Code, Save, Edit2, Bot, ExternalLink, X, Sparkles, FolderPlus, FileText } from 'lucide-react';
import Button from './Button';
import MathText from './MathText';
import { Example, EssayQuestion, MCQQuestion, SessionData } from '../types';
import { useLocation } from 'react-router-dom';

const ContentBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const editData = location.state?.sessionData as SessionData | undefined;
  
  // AI Modal State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiPromptCopied, setAiPromptCopied] = useState(false);
  
  // Mode State: 'session' (Bài học lẻ) or 'chapter' (Chương mới)
  const [buildMode, setBuildMode] = useState<'session' | 'chapter'>('session');

  // Chapter Form State
  const [chapterId, setChapterId] = useState(`c_${Math.floor(Math.random() * 1000)}`);
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterDesc, setChapterDesc] = useState('');

  // Session Form State - Initialize with editData if available
  const [id, setId] = useState(editData?.id || `s${Math.floor(Math.random() * 1000)}`);
  const [title, setTitle] = useState(editData?.title || '');
  const [desc, setDesc] = useState(editData?.description || '');
  const [videoUrl, setVideoUrl] = useState(editData?.videoUrl || '');
  const [theory, setTheory] = useState(editData?.theory || '');
  const [review, setReview] = useState(editData?.review || '');
  
  const [examples, setExamples] = useState<Example[]>(editData?.examples || []);
  const [essays, setEssays] = useState<EssayQuestion[]>(editData?.essays || []);
  const [mcqs, setMcqs] = useState<MCQQuestion[]>(editData?.mcqs || []);

  // --- AI Prompt Template ---
  const AI_PROMPT_TEMPLATE = `Tôi muốn bạn đóng vai trò là một trợ lý soạn thảo nội dung toán học cho ứng dụng. Tôi sẽ cung cấp cho bạn nội dung bài học (lý thuyết và bài tập) dạng văn bản thô. Nhiệm vụ của bạn là chuyển đổi nó thành định dạng JSON chuẩn xác theo cấu trúc sau (chỉ trả về JSON, không giải thích gì thêm):

{
  "id": "tự_sinh_ngẫu_nhiên_ngắn_gọn",
  "title": "Tên bài học",
  "description": "Mô tả ngắn gọn mục tiêu bài học",
  "videoUrl": "Link YouTube của bài giảng (nếu có, để trống nếu không biết)",
  "theory": "Nội dung lý thuyết định dạng Markdown. Sử dụng $...$ cho công thức toán inline (ví dụ $x^2$). Sử dụng ### cho tiêu đề mục.",
  "examples": [
    { 
      "id": "ex_1", 
      "problem": "Đề bài ví dụ (có thể dùng LaTeX)", 
      "solution": "Lời giải chi tiết (có thể dùng LaTeX)" 
    }
  ],
  "essays": [
    {
      "id": "es_1",
      "question": "Câu hỏi tự luận",
      "solution": "Lời giải chi tiết",
      "hint": "Gợi ý ngắn (nếu có)"
    }
  ],
  "mcqs": [
    {
      "id": "mcq_1",
      "question": "Câu hỏi trắc nghiệm",
      "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      "correctIndex": 0, // Số nguyên từ 0-3 tương ứng với vị trí đáp án đúng trong mảng options
      "explanation": "Giải thích tại sao đáp án này đúng"
    }
  ],
  "review": "Tóm tắt ngắn gọn các ý chính cần nhớ"
}

Hãy bắt đầu! Dưới đây là nội dung bài học:
[DÁN NỘI DUNG CỦA BẠN VÀO ĐÂY]`;

  // Helpers for adding items
  const addExample = () => {
    setExamples([...examples, { id: `ex_${Date.now()}`, problem: '', solution: '' }]);
  };

  const addEssay = () => {
    setEssays([...essays, { id: `es_${Date.now()}`, question: '', solution: '', hint: '' }]);
  };

  const addMcq = () => {
    setMcqs([...mcqs, { 
      id: `mcq_${Date.now()}`, 
      question: '', 
      options: ['', '', '', ''], 
      correctIndex: 0, 
      explanation: '' 
    }]);
  };

  // Helpers for updating items
  const updateExample = (idx: number, field: keyof Example, value: string) => {
    const newEx = [...examples];
    newEx[idx] = { ...newEx[idx], [field]: value };
    setExamples(newEx);
  };

  const updateEssay = (idx: number, field: keyof EssayQuestion, value: string) => {
    const newEs = [...essays];
    newEs[idx] = { ...newEs[idx], [field]: value };
    setEssays(newEs);
  };

  const updateMcq = (idx: number, field: keyof MCQQuestion | 'options', value: any, optIdx?: number) => {
    const newMcqs = [...mcqs];
    if (field === 'options' && typeof optIdx === 'number') {
      newMcqs[idx].options[optIdx] = value;
    } else {
      // @ts-ignore
      newMcqs[idx][field] = value;
    }
    setMcqs(newMcqs);
  };

  const removeExample = (idx: number) => setExamples(examples.filter((_, i) => i !== idx));
  const removeEssay = (idx: number) => setEssays(essays.filter((_, i) => i !== idx));
  const removeMcq = (idx: number) => setMcqs(mcqs.filter((_, i) => i !== idx));

  // Generate Code Function
  const generateCode = () => {
    // Escape backticks and ${} to prevent template literal injection
    const safe = (str: string) => str.replace(/`/g, "\\`").replace(/\${/g, "\\${");
    
    // Generate Session Object Code
    const sessionCode = `      {
        id: "${id}",
        title: \`${safe(title)}\`,
        description: \`${safe(desc)}\`,
        videoUrl: "${safe(videoUrl)}",
        theory: \`${safe(theory)}\`,
        examples: [
${examples.map(ex => `          {
            id: "${ex.id}",
            problem: \`${safe(ex.problem)}\`,
            solution: \`${safe(ex.solution)}\`
          }`).join(',\n')}
        ],
        essays: [
${essays.map(es => `          {
            id: "${es.id}",
            question: \`${safe(es.question)}\`,
            solution: \`${safe(es.solution)}\`,
            hint: \`${safe(es.hint || '')}\`
          }`).join(',\n')}
        ],
        mcqs: [
${mcqs.map(m => `          {
            id: "${m.id}",
            question: \`${safe(m.question)}\`,
            options: [${m.options.map(o => `\`${safe(o)}\``).join(', ')}],
            correctIndex: ${m.correctIndex},
            explanation: \`${safe(m.explanation)}\`
          }`).join(',\n')}
        ],
        review: \`${safe(review)}\`
      }`;

    // If Mode is Chapter, wrap in Chapter Object
    if (buildMode === 'chapter') {
      return `      {
        id: "${chapterId}",
        title: \`${safe(chapterTitle)}\`,
        description: \`${safe(chapterDesc)}\`,
        sessions: [
${sessionCode}
        ]
      }`;
    }
      
    return sessionCode;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode() + ','); // Add comma for convenience
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleCopyAiPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT_TEMPLATE);
    setAiPromptCopied(true);
    setTimeout(() => setAiPromptCopied(false), 2000);
  };

  const inputClass = "w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors";

  return (
    <div className="max-w-5xl mx-auto pb-20 relative">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Code className="text-primary" /> Công cụ Soạn Bài
          </h1>
          {editData ? (
            <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-lg flex items-center gap-2 mt-2 text-sm">
              <Edit2 size={16} />
              Đang chỉnh sửa: <strong>{editData.title}</strong>
            </div>
          ) : (
            <p className="text-gray-600 text-sm">
              Điền nội dung vào form, sau đó copy mã và dán vào file <code className="bg-gray-100 px-1 rounded text-red-500 font-mono">data.ts</code>.
            </p>
          )}
        </div>
        
        <button 
          onClick={() => setIsAiModalOpen(true)}
          className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-5 py-3 rounded-full font-bold shadow-lg shadow-teal-200 flex items-center gap-2 transition-all transform hover:-translate-y-1"
        >
          <Bot size={20} />
          Soạn nhanh với ChatGPT
        </button>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Navigation */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            {[
              { num: 1, label: 'Thông tin chung' },
              { num: 2, label: 'Lý thuyết' },
              { num: 3, label: 'Ví dụ minh họa' },
              { num: 4, label: 'Bài tập Tự luận' },
              { num: 5, label: 'Trắc nghiệm' },
              { num: 6, label: 'Xuất mã nguồn' },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${
                  step === s.num 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === s.num ? 'bg-white text-primary' : 'bg-gray-200 text-gray-500'
                }`}>
                  {s.num}
                </div>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1 space-y-6">
          
          {/* STEP 1: General Info */}
          {step === 1 && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">Cấu trúc & Thông tin</h2>

              {/* Build Mode Selection */}
              {!editData && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Bạn muốn tạo gì?</label>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setBuildMode('session')}
                      className={`flex-1 p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                        buildMode === 'session' 
                          ? 'border-blue-500 bg-white ring-2 ring-blue-200' 
                          : 'border-transparent bg-white/50 hover:bg-white text-gray-500'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${buildMode === 'session' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>
                        <FileText size={24} />
                      </div>
                      <div>
                        <div className="font-bold">Bài học lẻ</div>
                        <div className="text-xs mt-1">Thêm bài vào chương có sẵn</div>
                      </div>
                      {buildMode === 'session' && <Check className="ml-auto text-blue-500" />}
                    </button>

                    <button 
                      onClick={() => setBuildMode('chapter')}
                      className={`flex-1 p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                        buildMode === 'chapter' 
                          ? 'border-purple-500 bg-white ring-2 ring-purple-200' 
                          : 'border-transparent bg-white/50 hover:bg-white text-gray-500'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${buildMode === 'chapter' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100'}`}>
                        <FolderPlus size={24} />
                      </div>
                      <div>
                        <div className="font-bold">Chương mới</div>
                        <div className="text-xs mt-1">Tạo chương kèm bài học đầu tiên</div>
                      </div>
                      {buildMode === 'chapter' && <Check className="ml-auto text-purple-500" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Chapter Info (Only if Chapter Mode) */}
              {buildMode === 'chapter' && (
                <div className="space-y-4 p-5 bg-purple-50 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-purple-900 flex items-center gap-2">
                    <FolderPlus size={18} /> Thông tin Chương mới
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mã Chương (ID)</label>
                    <input 
                      type="text" 
                      value={chapterId} 
                      onChange={e => setChapterId(e.target.value)} 
                      className={`${inputClass} font-mono`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên Chương</label>
                    <input 
                      type="text" 
                      value={chapterTitle} 
                      onChange={e => setChapterTitle(e.target.value)} 
                      placeholder="VD: Chương 1: Số tự nhiên"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả Chương</label>
                    <textarea 
                      value={chapterDesc} 
                      onChange={e => setChapterDesc(e.target.value)} 
                      placeholder="Mô tả tổng quan về chương này..."
                      className={`${inputClass} h-20`}
                    />
                  </div>
                </div>
              )}

              {/* Session Info */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 border-b pb-2">Thông tin Buổi học</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID Buổi học (Duy nhất)</label>
                  <input 
                    type="text" 
                    value={id} 
                    onChange={e => setId(e.target.value)} 
                    className={`${inputClass} bg-gray-50 font-mono`}
                    readOnly={!!editData}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề buổi học</label>
                  <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="VD: Buổi 1: Tập hợp"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn</label>
                  <textarea 
                    value={desc} 
                    onChange={e => setDesc(e.target.value)} 
                    placeholder="Mô tả nội dung chính của bài học..."
                    className={`${inputClass} h-20`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link Video Bài Giảng (YouTube)</label>
                  <input 
                    type="url" 
                    value={videoUrl} 
                    onChange={e => setVideoUrl(e.target.value)} 
                    placeholder="https://www.youtube.com/watch?v=..."
                    className={inputClass}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tổng kết bài học (Phần Nhắc lại)</label>
                  <textarea 
                    value={review} 
                    onChange={e => setReview(e.target.value)} 
                    placeholder="Các ý chính cần ghi nhớ..."
                    className={`${inputClass} h-24`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Theory */}
          {step === 2 && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 animate-in fade-in">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">Nội dung Lý thuyết</h2>
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 mb-4">
                <strong>Mẹo:</strong> Hỗ trợ Markdown. Dùng <code>### Tiêu đề</code>, <code>- Gạch đầu dòng</code>. 
                Công thức toán kẹp giữa <code>$</code>. VD: <code>$x^2 + 1$</code>.
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px]">
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Soạn thảo:</label>
                  <textarea 
                    value={theory} 
                    onChange={e => setTheory(e.target.value)} 
                    className={`${inputClass} h-full font-mono text-sm leading-relaxed resize-none`}
                    placeholder="### 1. Khái niệm..."
                  />
                </div>
                <div className="flex flex-col">
                   <label className="font-medium mb-1 flex items-center gap-2"><Eye size={14}/> Xem trước:</label>
                   <div className="flex-1 p-4 border rounded bg-gray-50 overflow-y-auto">
                     <MathText content={theory || "Nội dung xem trước sẽ hiện ở đây..."} block={true} />
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Examples */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold">Danh sách Ví dụ ({examples.length})</h2>
                <Button onClick={addExample} size="sm"><Plus size={16} className="mr-1"/> Thêm Ví dụ</Button>
              </div>

              {examples.map((ex, idx) => (
                <div key={ex.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative group">
                  <button 
                    onClick={() => removeExample(idx)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={18} />
                  </button>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">Ví dụ {idx + 1}</span>
                  
                  <div className="space-y-3">
                    <textarea
                      placeholder="Đề bài (VD: Giải phương trình $2x = 4$)"
                      value={ex.problem}
                      onChange={(e) => updateExample(idx, 'problem', e.target.value)}
                      className={`${inputClass} h-20`}
                    />
                    <textarea 
                      placeholder="Lời giải chi tiết..."
                      value={ex.solution}
                      onChange={(e) => updateExample(idx, 'solution', e.target.value)}
                      className={`${inputClass} h-24`}
                    />
                  </div>
                  <div className="mt-2 text-xs text-gray-400">Xem trước lời giải: <MathText content={ex.solution} /></div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: Essay */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold">Bài tập Tự luận ({essays.length})</h2>
                <Button onClick={addEssay} size="sm"><Plus size={16} className="mr-1"/> Thêm Bài tập</Button>
              </div>

              {essays.map((es, idx) => (
                <div key={es.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative group">
                  <button onClick={() => removeEssay(idx)} className="absolute top-4 right-4 text-gray-400 hover:text-red-50 opacity-0 group-hover:opacity-100"><Trash2 size={18} /></button>
                  <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">Bài {idx + 1}</span>
                  
                  <div className="space-y-3">
                    <textarea 
                      placeholder="Câu hỏi..."
                      value={es.question}
                      onChange={(e) => updateEssay(idx, 'question', e.target.value)}
                      className={`${inputClass} h-20`}
                    />
                    <input 
                      placeholder="Gợi ý (Không bắt buộc)"
                      value={es.hint}
                      onChange={(e) => updateEssay(idx, 'hint', e.target.value)}
                      className={inputClass}
                    />
                    <textarea 
                      placeholder="Lời giải chi tiết..."
                      value={es.solution}
                      onChange={(e) => updateEssay(idx, 'solution', e.target.value)}
                      className={`${inputClass} h-24`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 5: MCQ */}
          {step === 5 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold">Câu hỏi Trắc nghiệm ({mcqs.length})</h2>
                <Button onClick={addMcq} size="sm"><Plus size={16} className="mr-1"/> Thêm Câu hỏi</Button>
              </div>

              {mcqs.map((m, idx) => (
                <div key={m.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative group">
                   <button onClick={() => removeMcq(idx)} className="absolute top-4 right-4 text-gray-400 hover:text-red-50 opacity-0 group-hover:opacity-100"><Trash2 size={18} /></button>
                   <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">Câu {idx + 1}</span>

                   <div className="space-y-4">
                     <textarea 
                        placeholder="Nội dung câu hỏi..."
                        value={m.question}
                        onChange={(e) => updateMcq(idx, 'question', e.target.value)}
                        className={`${inputClass} font-medium h-20`}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {m.options.map((opt, optIdx) => (
                          <div key={optIdx} className="flex items-center gap-2">
                            <span className="w-6 font-bold text-gray-400">{String.fromCharCode(65 + optIdx)}.</span>
                            <input 
                              placeholder={`Đáp án ${String.fromCharCode(65 + optIdx)}`}
                              value={opt}
                              onChange={(e) => updateMcq(idx, 'options', e.target.value, optIdx)}
                              className={`flex-1 p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:bg-white focus:border-primary outline-none transition-colors ${optIdx === m.correctIndex ? 'ring-2 ring-green-500 border-green-500 bg-green-50' : ''}`}
                            />
                            <input 
                              type="radio" 
                              name={`correct_${m.id}`}
                              checked={optIdx === m.correctIndex}
                              onChange={() => updateMcq(idx, 'correctIndex', optIdx)}
                              className="w-4 h-4 cursor-pointer"
                              title="Chọn là đáp án đúng"
                            />
                          </div>
                        ))}
                      </div>

                      <textarea 
                        placeholder="Giải thích đáp án đúng..."
                        value={m.explanation}
                        onChange={(e) => updateMcq(idx, 'explanation', e.target.value)}
                        className={`${inputClass} text-sm h-16`}
                      />
                   </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 6: Export */}
          {step === 6 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Hoàn tất!
                </h3>
                <p className="text-green-700 mb-4">
                  {buildMode === 'chapter' 
                    ? "Dưới đây là mã nguồn cho CHƯƠNG MỚI (kèm bài học đầu tiên)." 
                    : "Dưới đây là mã nguồn cho BÀI HỌC MỚI."} 
                  Hãy sao chép nó và cập nhật vào hệ thống.
                </p>

                <div className="bg-gray-900 rounded-lg p-4 relative group">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={handleCopy}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      {copied ? <Check size={16}/> : <Copy size={16}/>}
                      {copied ? 'Đã copy' : 'Copy Code'}
                    </button>
                  </div>
                  <pre className="text-gray-300 font-mono text-sm overflow-x-auto h-[400px] custom-scrollbar p-2">
                    {generateCode()},
                  </pre>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Hướng dẫn Cập nhật vào File Data:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                  <li>Mở file <code>src/data.ts</code> trong trình soạn thảo code của bạn.</li>
                  
                  {buildMode === 'chapter' ? (
                    <>
                      <li>Tìm đến object của Lớp tương ứng (VD: <code>"6": &#123; ... &#125;</code>).</li>
                      <li>Dán toàn bộ mã vừa copy vào bên trong mảng <code>chapters: [ ... ]</code>.</li>
                    </>
                  ) : (
                    <>
                      <li>Tìm đến <strong>Chương</strong> mà bạn muốn thêm bài học.</li>
                      <li>Dán mã vừa copy vào bên trong mảng <code>sessions: [ ... ]</code> của chương đó.</li>
                    </>
                  )}
                  
                  <li>Lưu file lại (Ctrl + S), ứng dụng sẽ tự động cập nhật!</li>
                </ol>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
             <Button 
               variant="outline" 
               onClick={() => setStep(Math.max(1, step - 1))}
               disabled={step === 1}
             >
               Quay lại
             </Button>
             
             {step < 6 ? (
               <Button onClick={() => setStep(step + 1)}>
                 Tiếp theo
               </Button>
             ) : (
               <Button onClick={handleCopy} variant="primary" className="bg-green-600 hover:bg-green-700">
                 <Copy size={18} className="mr-2"/> Copy toàn bộ
               </Button>
             )}
          </div>

        </div>
      </div>

      {/* AI Assistant Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
             <div className="bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-4 border-b border-teal-600 flex justify-between items-center text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                   <Sparkles size={20} /> Trợ lý AI Soạn bài
                </h3>
                <button onClick={() => setIsAiModalOpen(false)} className="text-teal-100 hover:text-white">
                   <X size={24} />
                </button>
             </div>
             
             <div className="p-6 overflow-y-auto">
                <p className="text-gray-600 mb-6">
                  Sử dụng ChatGPT để chuyển đổi nhanh nội dung từ file Word/PDF sang định dạng JSON của ứng dụng.
                </p>

                <div className="space-y-6">
                   {/* Step 1 */}
                   <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">1</div>
                      <div className="flex-1">
                         <h4 className="font-bold text-gray-900 mb-1">Mở ChatGPT</h4>
                         <p className="text-sm text-gray-500 mb-2">Mở trang web ChatGPT trong tab mới.</p>
                         <a 
                           href="https://chatgpt.com" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-teal-600 font-medium hover:underline bg-teal-50 px-3 py-1.5 rounded border border-teal-100"
                         >
                           <ExternalLink size={16} /> chatgpt.com
                         </a>
                      </div>
                   </div>

                   {/* Step 2 */}
                   <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">2</div>
                      <div className="flex-1">
                         <h4 className="font-bold text-gray-900 mb-2">Sao chép Prompt Mẫu</h4>
                         <p className="text-sm text-gray-500 mb-3">
                           Copy câu lệnh (Prompt) dưới đây gửi cho ChatGPT để nó hiểu cấu trúc dữ liệu của ứng dụng. Sau đó bạn chỉ cần dán nội dung bài học vào chat.
                         </p>
                         
                         <div className="bg-gray-900 rounded-lg p-3 relative group border border-gray-700">
                            <div className="absolute top-2 right-2">
                               <button 
                                 onClick={handleCopyAiPrompt}
                                 className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1"
                               >
                                 {aiPromptCopied ? <Check size={14}/> : <Copy size={14}/>}
                                 {aiPromptCopied ? 'Đã copy' : 'Copy Prompt'}
                               </button>
                            </div>
                            <pre className="text-gray-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap break-words h-40 custom-scrollbar">
                               {AI_PROMPT_TEMPLATE}
                            </pre>
                         </div>
                      </div>
                   </div>

                   {/* Step 3 */}
                   <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">3</div>
                      <div className="flex-1">
                         <h4 className="font-bold text-gray-900 mb-1">Dán kết quả</h4>
                         <p className="text-sm text-gray-500">
                           Copy đoạn JSON mà ChatGPT trả về, sau đó vào công cụ Soạn bài và điền thủ công hoặc dán trực tiếp vào code nếu bạn rành kỹ thuật.
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setIsAiModalOpen(false)}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-700 shadow-sm"
                >
                  Đóng
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentBuilder;
