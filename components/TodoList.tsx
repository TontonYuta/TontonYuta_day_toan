
import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Trash2, Plus, ListTodo, Move, Minus, Flag, Edit2, Trash, Filter } from 'lucide-react';
import Button from './Button';

interface TodoListProps {
  isOpen: boolean;
  onClose: () => void;
}

type Priority = 'high' | 'medium' | 'low';
type FilterType = 'all' | 'active' | 'completed';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
}

const TodoList: React.FC<TodoListProps> = ({ isOpen, onClose }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<Priority>('medium');
  const [filter, setFilter] = useState<FilterType>('all');
  
  // Edit State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const [isMinimized, setIsMinimized] = useState(false);
  
  // Draggable state
  const [position, setPosition] = useState({ x: window.innerWidth - 380, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('daytoan_todos');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse todos");
      }
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('daytoan_todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      priority: selectedPriority,
      createdAt: Date.now()
    };

    setTasks([newTask, ...tasks]);
    setInputValue('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const saveEdit = (id: number) => {
    if (editValue.trim() === '') return;
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editValue.trim() } : t));
    setEditingId(null);
  };

  const clearCompleted = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả công việc đã hoàn thành?')) {
      setTasks(tasks.filter(t => !t.completed));
    }
  };

  // Dragging Logic
  const startDragging = (e: React.MouseEvent) => {
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

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const getPriorityColor = (p: Priority) => {
    switch(p) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
    }
  };

  const getPriorityIconColor = (p: Priority) => {
    switch(p) {
      case 'high': return 'text-red-500 fill-red-500';
      case 'medium': return 'text-orange-500 fill-orange-500';
      case 'low': return 'text-blue-500 fill-blue-500';
    }
  };

  if (!isOpen) return null;

  // Minimized View
  if (isMinimized) {
    return (
      <div 
        className="fixed z-[100] bg-indigo-600 text-white p-3 rounded-full shadow-xl cursor-pointer hover:bg-indigo-700 transition-all animate-bounce border-2 border-white flex items-center justify-center"
        style={{ left: position.x, top: position.y }}
        onClick={() => setIsMinimized(false)}
        onMouseDown={startDragging}
      >
        <ListTodo size={24} />
        {tasks.filter(t => !t.completed).length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-white font-bold">
            {tasks.filter(t => !t.completed).length}
          </span>
        )}
      </div>
    );
  }

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div 
      className="fixed z-[100] w-[380px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 font-sans"
      style={{ 
        left: position.x, 
        top: position.y,
        maxHeight: '85vh'
      }}
    >
      {/* Header */}
      <div 
        className="bg-indigo-600 p-3 flex items-center justify-between cursor-move select-none text-white shadow-md z-10"
        onMouseDown={startDragging}
      >
        <div className="flex items-center gap-2">
          <ListTodo size={18} />
          <span className="font-bold text-sm">Việc cần làm</span>
          <span className="bg-indigo-500 text-xs px-2 py-0.5 rounded-full border border-indigo-400">
            {activeCount}
          </span>
        </div>
        <div className="flex items-center gap-1" onMouseDown={e => e.stopPropagation()}>
          <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-indigo-500 rounded text-indigo-100 hover:text-white transition-colors">
            <Minus size={16} />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-red-500 rounded text-indigo-100 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-gray-50 border-b border-gray-100 z-10">
        <form onSubmit={addTask} className="relative mb-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Thêm nhiệm vụ mới..."
            className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm shadow-sm"
          />
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-1 top-1 p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
          >
            <Plus size={16} />
          </button>
        </form>
        
        {/* Priority Selector */}
        <div className="flex items-center gap-2">
           <span className="text-xs font-medium text-gray-500">Ưu tiên:</span>
           <button 
             onClick={() => setSelectedPriority('high')}
             className={`px-2 py-1 rounded text-[10px] font-bold border transition-all flex items-center gap-1 ${selectedPriority === 'high' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-white text-gray-400 border-gray-200 hover:border-red-200'}`}
           >
             <Flag size={10} className={selectedPriority === 'high' ? 'fill-red-700' : ''}/> Cao
           </button>
           <button 
             onClick={() => setSelectedPriority('medium')}
             className={`px-2 py-1 rounded text-[10px] font-bold border transition-all flex items-center gap-1 ${selectedPriority === 'medium' ? 'bg-orange-100 text-orange-700 border-orange-200' : 'bg-white text-gray-400 border-gray-200 hover:border-orange-200'}`}
           >
             <Flag size={10} className={selectedPriority === 'medium' ? 'fill-orange-700' : ''}/> TB
           </button>
           <button 
             onClick={() => setSelectedPriority('low')}
             className={`px-2 py-1 rounded text-[10px] font-bold border transition-all flex items-center gap-1 ${selectedPriority === 'low' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-white text-gray-400 border-gray-200 hover:border-blue-200'}`}
           >
             <Flag size={10} className={selectedPriority === 'low' ? 'fill-blue-700' : ''}/> Thấp
           </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex border-b border-gray-200 bg-white">
        {(['all', 'active', 'completed'] as FilterType[]).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-2 text-xs font-medium transition-colors border-b-2 ${
              filter === f 
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50' 
                : 'text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            {f === 'all' && 'Tất cả'}
            {f === 'active' && 'Đang làm'}
            {f === 'completed' && 'Đã xong'}
          </button>
        ))}
      </div>

      {/* List Area */}
      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar min-h-[250px]">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-10 text-gray-400">
            <ListTodo size={48} className="mb-2 opacity-20" />
            <p className="text-sm text-center">Danh sách trống.<br/>Thêm mục tiêu để bắt đầu!</p>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm italic">
            Không có công việc nào trong mục này.
          </div>
        ) : (
          <ul className="space-y-2 pb-2">
            {filteredTasks.map(task => (
              <li 
                key={task.id} 
                className={`group relative flex items-center gap-3 p-3 rounded-lg border transition-all shadow-sm ${
                  task.completed 
                    ? 'bg-gray-50 border-gray-100 opacity-70' 
                    : 'bg-white border-gray-200 hover:border-indigo-300'
                }`}
              >
                {/* Priority Indicator Line */}
                <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${
                   task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-orange-500' : 'bg-blue-500'
                }`}></div>

                {/* Checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`ml-2 w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
                    task.completed 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'bg-white border-gray-400 text-transparent hover:border-green-500'
                  }`}
                >
                  <Check size={12} strokeWidth={3} />
                </button>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {editingId === task.id ? (
                    <form 
                      onSubmit={(e) => { e.preventDefault(); saveEdit(task.id); }}
                      className="flex gap-2"
                    >
                      <input 
                        autoFocus
                        type="text" 
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => saveEdit(task.id)}
                        className="w-full text-sm border-b border-indigo-500 outline-none bg-transparent py-0.5"
                      />
                    </form>
                  ) : (
                    <div className="flex flex-col">
                       <span 
                         onClick={() => { if(!task.completed) startEdit(task); }}
                         className={`text-sm truncate cursor-text ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                       >
                         {task.text}
                       </span>
                       <div className="flex items-center gap-2 mt-0.5">
                          <Flag size={10} className={getPriorityIconColor(task.priority)} />
                          <span className={`text-[10px] font-medium uppercase ${
                             task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-orange-500' : 'text-blue-500'
                          }`}>
                            {task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                          </span>
                       </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!task.completed && (
                    <button 
                      onClick={() => startEdit(task)}
                      className="text-gray-400 hover:text-indigo-600 p-1 rounded hover:bg-indigo-50"
                      title="Sửa"
                    >
                      <Edit2 size={14} />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50"
                    title="Xóa"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {tasks.some(t => t.completed) && (
        <div className="p-2 border-t border-gray-100 bg-gray-50 flex justify-center">
           <button 
             onClick={clearCompleted}
             className="text-xs font-medium text-gray-500 hover:text-red-600 flex items-center gap-1 py-1 px-3 rounded hover:bg-red-50 transition-colors"
           >
             <Trash size={12} /> Xóa {tasks.filter(t => t.completed).length} việc đã xong
           </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
