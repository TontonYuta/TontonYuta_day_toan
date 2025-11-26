
import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, Brain, Music, Trophy, Timer, RefreshCw, CheckCircle, XCircle, Play, HelpCircle, Eye, EyeOff, Sparkles, Grid3x3, Zap, Star, LayoutGrid, Headphones, Info } from 'lucide-react';

// --- SUB-COMPONENT: MATH GAME (SPEED MATH) ---
const MathGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('math_game_highscore') || '0'));
  const [timeLeft, setTimeLeft] = useState(60);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [streak, setStreak] = useState(0); // Combo streak
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate Question
  const generateQuestion = () => {
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    
    if (operator === '-' && a < b) [a, b] = [b, a];
    
    if (operator === '×') {
        a = Math.floor(Math.random() * 12) + 1; // Tăng độ khó nhẹ
        b = Math.floor(Math.random() * 10) + 1;
    }

    setQuestion(`${a} ${operator} ${b}`);
    
    let res = 0;
    switch(operator) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '×': res = a * b; break;
    }
    setAnswer(res.toString());
    setUserAnswer('');
    setFeedback(null);
  };

  // Timer Logic
  useEffect(() => {
    let interval: any;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    generateQuestion();
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('math_game_highscore', score.toString());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPlaying) return;

    if (userAnswer === answer) {
        const bonus = Math.floor(streak / 3) * 5; // Bonus points for streak
        setScore(score + 10 + bonus);
        setStreak(streak + 1);
        setFeedback('correct');
        generateQuestion();
    } else {
        setStreak(0);
        setFeedback('wrong');
        setTimeout(() => {
            setFeedback(null);
            setUserAnswer('');
        }, 300);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl border border-indigo-50 overflow-hidden relative h-full flex flex-col hover:shadow-2xl transition-shadow duration-500">
        {/* Decorative Header Bar */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></div>
        
        {!isPlaying && timeLeft === 60 ? (
            // Start Screen
            <div className="p-8 text-center flex flex-col items-center justify-center flex-grow bg-gradient-to-b from-white to-indigo-50/30">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-indigo-600 mb-6 shadow-lg shadow-indigo-100 animate-float ring-4 ring-indigo-50">
                    <Zap size={48} fill="currentColor" className="text-indigo-500" />
                </div>
                <h3 className="text-3xl font-black text-gray-800 mb-3 tracking-tight">Thần Toán Tốc Độ</h3>
                <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">Thử thách 60 giây tính nhẩm siêu tốc. Bạn có thể đạt bao nhiêu điểm?</p>
                
                <div className="mb-8 flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-yellow-100 shadow-sm">
                    <Trophy size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-gray-600">Kỷ lục hiện tại: <span className="text-yellow-600 text-lg">{highScore}</span></span>
                </div>

                <button 
                    onClick={startGame}
                    className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-full shadow-xl shadow-indigo-200 transform hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    <Play size={24} fill="currentColor" /> Bắt đầu chơi
                </button>
            </div>
        ) : !isPlaying && timeLeft === 0 ? (
            // Game Over Screen
            <div className="p-8 text-center flex flex-col items-center justify-center flex-grow bg-gradient-to-b from-white to-indigo-50/50">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 rounded-full"></div>
                    <Trophy size={80} className="text-yellow-400 drop-shadow-md relative z-10 animate-bounce" />
                </div>
                <h3 className="text-4xl font-black text-gray-800 mb-2">Hết giờ!</h3>
                <div className="text-6xl font-black text-indigo-600 mb-2 tracking-tighter">{score}</div>
                <p className="text-gray-500 font-medium mb-8">Điểm số của bạn</p>
                
                {score >= highScore && score > 0 && (
                    <div className="mb-8 animate-pulse bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-green-200">
                        <Star fill="currentColor" /> Kỷ lục mới được thiết lập!
                    </div>
                )}
                
                <button 
                    onClick={startGame}
                    className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors border-2 border-gray-100 hover:border-gray-200 shadow-sm"
                >
                    <RefreshCw size={20} /> Chơi lại
                </button>
            </div>
        ) : (
            // Gameplay Screen
            <div className="p-8 flex flex-col h-full bg-gradient-to-b from-white to-gray-50/50">
                {/* Top Bar */}
                <div className="flex justify-between items-start mb-10">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold transition-all shadow-sm border ${
                        timeLeft < 10 
                        ? 'bg-red-50 text-red-500 border-red-100 animate-pulse' 
                        : 'bg-white text-gray-600 border-gray-200'
                    }`}>
                        <Timer size={20} /> {timeLeft}s
                    </div>
                    
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2 rounded-2xl font-black text-xl border border-indigo-100 shadow-sm">
                            {score}
                        </div>
                        {streak > 2 && (
                            <div className="text-xs font-bold text-orange-500 mt-1 flex items-center gap-1 animate-in slide-in-from-right-2">
                                <FlameIcon /> Combo x{streak}
                            </div>
                        )}
                    </div>
                </div>

                {/* Question Area */}
                <div className="flex-grow flex flex-col items-center justify-center -mt-10">
                    <div className="text-6xl sm:text-7xl font-black text-gray-800 mb-10 tracking-wider drop-shadow-sm">
                        {question}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="w-full max-w-xs relative">
                        <input 
                            ref={inputRef}
                            type="number" 
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className={`w-full text-center text-4xl font-bold py-5 rounded-3xl border-2 focus:outline-none transition-all shadow-lg ${
                                feedback === 'correct' ? 'border-green-400 bg-green-50 text-green-600 ring-4 ring-green-100' :
                                feedback === 'wrong' ? 'border-red-400 bg-red-50 text-red-600 ring-4 ring-red-100' :
                                'border-gray-200 text-gray-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                            }`}
                            placeholder="?"
                            autoFocus
                        />
                        {/* Feedback Icons */}
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                            {feedback === 'correct' && <CheckCircle className="text-green-500 w-10 h-10 animate-in zoom-in duration-200 drop-shadow-sm" />}
                            {feedback === 'wrong' && <XCircle className="text-red-500 w-10 h-10 animate-in zoom-in duration-200 drop-shadow-sm" />}
                        </div>
                    </form>
                    <p className="text-gray-400 text-sm mt-6 font-medium">Nhấn Enter để trả lời</p>
                </div>
            </div>
        )}
    </div>
  );
};

// --- Helper Icon ---
const FlameIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.25a.75.75 0 01.75.75c0 .618.335 1.197.88 1.51a.75.75 0 00.75-1.3C13.6 2.76 12.8 2.25 12 2.25zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5 0-3.5 2.383-6.476 5.643-7.28a.75.75 0 11.358 1.457c-2.47.609-4.501 2.96-4.501 5.823 0 3.314 2.686 6 6 6s6-2.686 6-6c0-.456-.053-.898-.152-1.322a.75.75 0 111.456-.356c.123.527.196 1.078.196 1.678 0 4.142-3.358 7.5-7.5 7.5z" />
        <path d="M12 9.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    </svg>
);

// --- SUB-COMPONENT: MEMORY GAME ---
interface MemoryCard {
    id: number;
    content: string;
    value: number;
    isFlipped: boolean;
    isMatched: boolean;
}

const MathMemoryGame = () => {
    const [cards, setCards] = useState<MemoryCard[]>([]);
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [isChecking, setIsChecking] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);
    const [moves, setMoves] = useState(0);

    const initializeGame = () => {
        const pairs = [
            { q: "2 + 3", a: "5", val: 5 },
            { q: "10 - 4", a: "6", val: 6 },
            { q: "3 x 3", a: "9", val: 9 },
            { q: "8 : 2", a: "4", val: 4 },
            { q: "5 + 5", a: "10", val: 10 },
            { q: "7 - 0", a: "7", val: 7 },
            { q: "2 x 4", a: "8", val: 8 },
            { q: "12 : 4", a: "3", val: 3 },
        ];

        let deck: MemoryCard[] = [];
        pairs.forEach((p, idx) => {
            deck.push({ id: idx * 2, content: p.q, value: p.val, isFlipped: false, isMatched: false });
            deck.push({ id: idx * 2 + 1, content: p.a, value: p.val, isFlipped: false, isMatched: false });
        });

        deck = deck.sort(() => Math.random() - 0.5);
        setCards(deck);
        setFlippedIndices([]);
        setIsGameWon(false);
        setMoves(0);
        setIsChecking(false);
    };

    useEffect(() => {
        initializeGame();
    }, []);

    const handleCardClick = (index: number) => {
        if (isChecking || cards[index].isFlipped || cards[index].isMatched) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedIndices, index];
        setFlippedIndices(newFlipped);

        if (newFlipped.length === 2) {
            setIsChecking(true);
            setMoves(prev => prev + 1);
            const idx1 = newFlipped[0];
            const idx2 = newFlipped[1];

            if (newCards[idx1].value === newCards[idx2].value) {
                setTimeout(() => {
                    newCards[idx1].isMatched = true;
                    newCards[idx2].isMatched = true;
                    setCards([...newCards]);
                    setFlippedIndices([]);
                    setIsChecking(false);
                    
                    if (newCards.every(c => c.isMatched)) {
                        setIsGameWon(true);
                    }
                }, 500);
            } else {
                setTimeout(() => {
                    newCards[idx1].isFlipped = false;
                    newCards[idx2].isFlipped = false;
                    setCards([...newCards]);
                    setFlippedIndices([]);
                    setIsChecking(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-xl border border-emerald-50 overflow-hidden relative h-full flex flex-col hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
            
            {isGameWon ? (
                <div className="p-8 text-center flex flex-col items-center justify-center flex-grow animate-in fade-in bg-gradient-to-b from-white to-emerald-50/50">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 ring-4 ring-emerald-50">
                        <Trophy size={48} fill="currentColor" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800 mb-2">Chiến thắng!</h3>
                    <p className="text-gray-500 mb-8 text-lg">Bạn đã hoàn thành trong <span className="font-bold text-emerald-600">{moves}</span> lượt.</p>
                    <button 
                        onClick={initializeGame}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-3 px-10 rounded-full shadow-lg shadow-emerald-200 flex items-center gap-2 transition-all transform hover:scale-105"
                    >
                        <RefreshCw size={20} /> Chơi lại
                    </button>
                </div>
            ) : (
                <div className="p-6 flex flex-col h-full bg-gradient-to-b from-white to-gray-50">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                            <Grid3x3 size={24} className="text-emerald-500"/> Cặp Đôi Hoàn Hảo
                        </h3>
                        <div className="text-sm bg-white px-4 py-1.5 rounded-full font-bold text-gray-600 border border-gray-200 shadow-sm">
                            Lượt: {moves}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3 sm:gap-4 flex-grow content-center">
                        {cards.map((card, idx) => (
                            <button
                                key={card.id}
                                onClick={() => handleCardClick(idx)}
                                disabled={card.isMatched}
                                className={`aspect-square rounded-2xl font-black text-lg sm:text-2xl flex items-center justify-center transition-all duration-500 transform perspective-1000 ${
                                    card.isFlipped || card.isMatched
                                    ? 'bg-white border-2 border-emerald-400 text-emerald-600 rotate-y-0 shadow-sm scale-100'
                                    : 'bg-gradient-to-br from-emerald-400 to-teal-500 text-transparent rotate-y-180 shadow-md hover:shadow-lg scale-95 hover:scale-100 border-none'
                                } ${card.isMatched ? 'opacity-40 cursor-default grayscale' : ''}`}
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                {(card.isFlipped || card.isMatched) ? (
                                    <span className="animate-in zoom-in duration-300">{card.content}</span>
                                ) : (
                                    <span className="text-white/30 text-2xl">?</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- SUB-COMPONENT: RIDDLES ---
const Riddles = () => {
    const riddles = [
        { q: "Cái gì càng thêm vào thì càng nhỏ?", a: "Cái hố (hoặc cái lỗ)." },
        { q: "Số nào chia cho 2 bằng 0 nhưng nhân với 2 cũng bằng 0?", a: "Số 0." },
        { q: "Có 2 người cha và 2 người con cùng đi câu cá. Họ câu được 3 con cá và chia đều. Tại sao?", a: "Vì họ là: Ông - Bố - Con (3 người)." },
        { q: "Cái gì có cổ nhưng không có miệng?", a: "Cái áo." },
        { q: "Con gì đầu dê mình ốc?", a: "Con dốc." },
        { q: "1 kg sắt và 1 kg bông, cái nào nặng hơn?", a: "Bằng nhau (đều là 1kg)." }
    ];

    const [revealed, setRevealed] = useState<number[]>([]);

    const toggle = (idx: number) => {
        if (revealed.includes(idx)) {
            setRevealed(revealed.filter(i => i !== idx));
        } else {
            setRevealed([...revealed, idx]);
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-xl border border-purple-50 p-6 h-full hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Brain size={24} />
                </div>
                Đố vui hại não
            </h3>
            <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {riddles.map((r, idx) => (
                    <div key={idx} className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100 transition-all hover:bg-purple-50 group">
                        <div className="flex justify-between items-start gap-4">
                            <div className="font-medium text-gray-800 flex gap-3 leading-relaxed">
                                <span className="bg-white text-purple-600 border border-purple-200 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">{idx + 1}</span>
                                {r.q}
                            </div>
                            <button 
                                onClick={() => toggle(idx)}
                                className={`p-2 rounded-xl transition-all flex-shrink-0 ${
                                    revealed.includes(idx) 
                                    ? 'bg-purple-200 text-purple-700' 
                                    : 'bg-white text-gray-400 hover:text-purple-600 border border-gray-200 hover:border-purple-200 shadow-sm'
                                }`}
                                title={revealed.includes(idx) ? "Ẩn đáp án" : "Xem đáp án"}
                            >
                                {revealed.includes(idx) ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {revealed.includes(idx) && (
                            <div className="mt-4 pl-10 text-base font-bold text-purple-700 animate-in fade-in slide-in-from-top-2 border-t border-purple-200/50 pt-3 flex items-center gap-2">
                                <Sparkles size={16} /> {r.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
const EntertainmentPage = () => {
  const [activeTab, setActiveTab] = useState<'games' | 'relax'>('games');

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"></div>
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold uppercase tracking-wider text-yellow-300">
                    <Star size={14} fill="currentColor"/> Khu Vực Giải Trí
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    Học mà chơi,<br/>Chơi mà học!
                </h1>
                <p className="text-purple-100 text-lg leading-relaxed opacity-90">
                    Thư giãn sau giờ học với các trò chơi rèn luyện tư duy logic và kho nhạc không lời giúp tập trung tối đa.
                </p>
            </div>
            <div className="relative">
                <Gamepad2 size={200} className="text-white/20 absolute -top-10 -right-10 rotate-12" />
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-xl relative z-10">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-yellow-900 shadow-lg">
                            <Zap size={24} fill="currentColor"/>
                        </div>
                        <div>
                            <div className="text-sm text-purple-200 font-medium uppercase">Trạng thái</div>
                            <div className="font-bold text-xl">Sẵn sàng bùng nổ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center sticky top-4 z-40">
          <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-gray-200 inline-flex gap-2">
              <button 
                onClick={() => setActiveTab('games')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                    activeTab === 'games' 
                    ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                  <Gamepad2 size={18} /> Thử thách Trí tuệ
              </button>
              <button 
                onClick={() => setActiveTab('relax')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                    activeTab === 'relax' 
                    ? 'bg-teal-500 text-white shadow-md transform scale-105' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                  <Headphones size={18} /> Góc Thư giãn
              </button>
          </div>
      </div>

      {/* Content Area */}
      {activeTab === 'games' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Game 1: Speed Math */}
             <div className="h-[600px]">
                <MathGame />
             </div>
             
             {/* Game 2: Memory Math */}
             <div className="h-[600px]">
                <MathMemoryGame />
             </div>
          </div>
      ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="lg:col-span-2 space-y-8">
                {/* Music Section */}
                <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 relative z-10">
                        <div className="p-2 bg-teal-100 rounded-xl text-teal-600">
                            <Music size={24} />
                        </div>
                        Nhạc Tập Trung & Thư Giãn
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                        <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk" target="_blank" rel="noreferrer" className="group block relative overflow-hidden rounded-3xl aspect-video shadow-md hover:shadow-xl transition-all duration-300">
                            <img 
                                src="https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg" 
                                alt="Lofi Girl" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <Play size={32} fill="currentColor" className="ml-1"/>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                                <div className="font-bold text-lg mb-1">Lofi Hip Hop Radio</div>
                                <div className="text-xs font-medium bg-white/20 backdrop-blur-sm inline-block px-2 py-1 rounded text-gray-100">Beats to Relax/Study</div>
                            </div>
                        </a>

                        <a href="https://www.youtube.com/watch?v=4oStP82aZxs" target="_blank" rel="noreferrer" className="group block relative overflow-hidden rounded-3xl aspect-video shadow-md hover:shadow-xl transition-all duration-300">
                            <img 
                                src="https://img.youtube.com/vi/4oStP82aZxs/maxresdefault.jpg" 
                                alt="Piano Relax" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <Play size={32} fill="currentColor" className="ml-1"/>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                                <div className="font-bold text-lg mb-1">Ghibli Piano Collection</div>
                                <div className="text-xs font-medium bg-white/20 backdrop-blur-sm inline-block px-2 py-1 rounded text-gray-100">Nhạc không lời nhẹ nhàng</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Fun Fact Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-orange-100 shadow-lg flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 text-orange-200 opacity-50 rotate-12">
                        <Info size={150} />
                    </div>
                    
                    <div className="bg-white p-4 rounded-2xl text-orange-500 shadow-md flex-shrink-0 relative z-10 rotate-3">
                        <HelpCircle size={32} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="font-black text-orange-900 mb-2 text-xl uppercase tracking-tight">Bạn có biết?</h3>
                        <p className="text-orange-800 text-lg leading-relaxed font-medium">
                            "Số 0 là số duy nhất không thể viết được bằng chữ số La Mã. Người La Mã cổ đại không có ký hiệu riêng cho số 0!"
                        </p>
                    </div>
                </div>
             </div>

             {/* Riddles Column */}
             <div className="lg:col-span-1 h-full">
                <Riddles />
             </div>
          </div>
      )}
    </div>
  );
};

export default EntertainmentPage;
