
import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, PenTool, Trash2, Minus, Move, Undo, Redo, Grid3x3, Layers, Circle, Type } from 'lucide-react';

interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
}

const Scratchpad: React.FC<ScratchpadProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Tools & Settings
  const [color, setColor] = useState('#2563EB'); // Default Blue
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [bgMode, setBgMode] = useState<'white' | 'grid' | 'transparent'>('white');
  
  // Window State
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // History for Undo/Redo
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyStep, setHistoryStep] = useState(-1);

  // Initialize Canvas
  useEffect(() => {
    if (isOpen && canvasRef.current && containerRef.current && !isMinimized) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Handle resizing: Only set size if it differs to prevent clearing content
      if (canvas.width !== containerRef.current.clientWidth || canvas.height !== containerRef.current.clientHeight - 100) {
          canvas.width = containerRef.current.clientWidth;
          canvas.height = containerRef.current.clientHeight - 60; // Adjust for header + toolbar height

          if (ctx) {
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            // Restore context settings after resize
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            // Clear history on resize as dimensions changed
            setHistory([]);
            setHistoryStep(-1);
          }
      }
    }
  }, [isOpen, isMinimized]); // Re-run when opened or maximized

  // Update Context when settings change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
      }
    }
  }, [color, lineWidth]);

  // --- Drawing Logic ---

  const saveHistory = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Remove any redo steps ahead
    const newHistory = history.slice(0, historyStep + 1);
    // Push new state
    newHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    
    // Limit history size to 20 steps to save memory
    if (newHistory.length > 20) newHistory.shift();

    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  };

  const undo = () => {
    if (historyStep > 0) {
      const newStep = historyStep - 1;
      restoreHistory(newStep);
      setHistoryStep(newStep);
    } else if (historyStep === 0) {
        // Clear if at start
        clearCanvas(false); 
        setHistoryStep(-1);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const newStep = historyStep + 1;
      restoreHistory(newStep);
      setHistoryStep(newStep);
    }
  };

  const restoreHistory = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.putImageData(history[index], 0, 0);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    
    if (tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = lineWidth * 5; // Eraser is bigger
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const rect = canvasRef.current.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      // Prevent scrolling while drawing
      // e.preventDefault(); // Warning: Passive event listener issue in React 18 usually needs CSS touch-action
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
        setIsDrawing(false);
        saveHistory();
    }
  };

  const clearCanvas = (saveToHistory = true) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (saveToHistory) {
            saveHistory();
        }
      }
    }
  };

  // --- Dragging Logic ---
  const startDragging = (e: React.MouseEvent) => {
    // Only drag if clicking header
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  useEffect(() => {
    const onDrag = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStartRef.current.x,
          y: e.clientY - dragStartRef.current.y
        });
      }
    };
    const stopDragging = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', stopDragging);
    };
  }, [isDragging]);


  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <div 
        className="fixed z-[100] bg-primary text-white p-3 rounded-full shadow-xl cursor-pointer hover:bg-blue-700 transition-all animate-bounce border-2 border-white"
        style={{ left: position.x, top: position.y }}
        onClick={() => setIsMinimized(false)}
        onMouseDown={startDragging}
      >
        <PenTool size={24} />
      </div>
    );
  }

  // --- Background Styles ---
  const getBackgroundStyle = () => {
      switch(bgMode) {
          case 'grid':
              return {
                  backgroundColor: '#ffffff',
                  backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
              };
          case 'transparent':
              return {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Mostly transparent
                  backdropFilter: 'blur(2px)'
              };
          default:
              return { backgroundColor: '#ffffff' };
      }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed z-[100] rounded-xl shadow-2xl border border-gray-300 overflow-hidden flex flex-col"
      style={{ 
        left: position.x, 
        top: position.y, 
        width: 'min(95vw, 700px)', 
        height: 'min(80vh, 600px)',
        backgroundColor: bgMode === 'transparent' ? 'transparent' : 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Header / Toolbar */}
      <div 
        className="bg-gray-100/90 backdrop-blur-sm p-2 flex items-center justify-between cursor-move select-none border-b border-gray-200"
        onMouseDown={startDragging}
      >
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-md text-primary shadow-sm">
            <Move size={14} />
          </div>
          <span className="font-bold text-gray-700 text-sm">Bảng nháp</span>
        </div>
        
        <div className="flex items-center gap-1" onMouseDown={e => e.stopPropagation()}>
          <button 
            onClick={() => setIsMinimized(true)}
            className="p-1.5 hover:bg-gray-200 rounded text-gray-500 transition-colors"
            title="Thu nhỏ"
          >
            <Minus size={18} />
          </button>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-red-100 rounded text-red-500 transition-colors"
            title="Đóng"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Tools Panel */}
      <div className="bg-white/95 border-b border-gray-200 p-2 flex flex-wrap items-center gap-2 md:gap-4 select-none backdrop-blur-sm">
        
        {/* Undo/Redo */}
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
             <button 
               onClick={undo} disabled={historyStep < 0}
               className={`p-1.5 rounded ${historyStep < 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-white hover:text-black hover:shadow-sm'}`}
             >
                 <Undo size={18} />
             </button>
             <button 
               onClick={redo} disabled={historyStep >= history.length - 1}
               className={`p-1.5 rounded ${historyStep >= history.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-white hover:text-black hover:shadow-sm'}`}
             >
                 <Redo size={18} />
             </button>
        </div>

        <div className="w-px h-6 bg-gray-200 hidden md:block"></div>

        {/* Brush & Eraser */}
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
          <button 
            onClick={() => { setTool('pen'); }}
            className={`p-1.5 rounded transition-all ${tool === 'pen' ? 'bg-white text-primary shadow-sm font-bold' : 'text-gray-500 hover:text-gray-700'}`}
            title="Bút viết"
          >
            <PenTool size={18} />
          </button>
          <button 
            onClick={() => { setTool('eraser'); }}
            className={`p-1.5 rounded transition-all ${tool === 'eraser' ? 'bg-white text-primary shadow-sm font-bold' : 'text-gray-500 hover:text-gray-700'}`}
            title="Tẩy"
          >
            <Eraser size={18} />
          </button>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5">
          {['#2563EB', '#DC2626', '#16A34A', '#000000'].map(c => (
             <button
              key={c}
              onClick={() => { setColor(c); setTool('pen'); }}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${color === c && tool === 'pen' ? 'border-gray-400 scale-110 ring-1 ring-offset-1 ring-gray-300' : 'border-transparent hover:scale-105'}`}
              style={{ backgroundColor: c }}
             />
          ))}
        </div>

        {/* Line Width Slider */}
        <div className="flex items-center gap-2 group relative px-2">
            <Circle size={Math.max(4, lineWidth * 2)} fill="currentColor" className="text-gray-400" />
            <input 
                type="range" 
                min="1" max="10" 
                value={lineWidth} 
                onChange={(e) => setLineWidth(Number(e.target.value))}
                className="w-16 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                title="Độ đậm nét"
            />
        </div>

        <div className="w-px h-6 bg-gray-200 hidden md:block ml-auto"></div>

        {/* Background Modes */}
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
             <button 
                onClick={() => setBgMode('white')}
                className={`p-1.5 rounded ${bgMode === 'white' ? 'bg-white text-primary shadow-sm' : 'text-gray-400'}`}
                title="Nền trắng"
             >
                 <Type size={18} />
             </button>
             <button 
                onClick={() => setBgMode('grid')}
                className={`p-1.5 rounded ${bgMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-gray-400'}`}
                title="Kẻ ô"
             >
                 <Grid3x3 size={18} />
             </button>
             <button 
                onClick={() => setBgMode('transparent')}
                className={`p-1.5 rounded ${bgMode === 'transparent' ? 'bg-white text-primary shadow-sm' : 'text-gray-400'}`}
                title="Xuyên thấu"
             >
                 <Layers size={18} />
             </button>
        </div>

        <button 
          onClick={() => clearCanvas(true)}
          className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-colors ml-1"
          title="Xóa tất cả"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Canvas Area */}
      <div 
        className="flex-grow relative cursor-crosshair touch-none overflow-hidden"
        style={getBackgroundStyle()}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full block"
        />
        {bgMode === 'transparent' && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary/10 font-bold text-4xl pointer-events-none select-none">
                Chế độ xuyên thấu
            </div>
        )}
      </div>
    </div>
  );
};

export default Scratchpad;
