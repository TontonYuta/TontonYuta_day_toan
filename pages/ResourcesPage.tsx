
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Download, FileText, File, FileSpreadsheet, FolderOpen, Grid, SortAsc, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Resource } from '../types';
import { getResources } from '../services/resourceService';

const ResourcesPage = () => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGrade, setActiveGrade] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<'newest' | 'downloads' | 'name'>('newest');
  
  // Data & Pagination States
  const [resources, setResources] = useState<Resource[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    // Load resources from service
    setResources(getResources());
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeGrade, activeCategory, sortBy]);

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "handbook", label: "Sổ tay & Công thức" },
    { id: "exam", label: "Đề thi & Kiểm tra" },
    { id: "topic", label: "Chuyên đề sâu" },
    { id: "exercise", label: "Bài tập rèn luyện" },
  ];

  const grades = [
    { id: "all", label: "Tất cả các lớp" },
    { id: "12", label: "Lớp 12" },
    { id: "11", label: "Lớp 11" },
    { id: "10", label: "Lớp 10" },
    { id: "9", label: "Lớp 9" },
    { id: "8", label: "Lớp 8" },
    { id: "7", label: "Lớp 7" },
    { id: "6", label: "Lớp 6" },
    { id: "5", label: "Lớp 5" },
    { id: "4", label: "Lớp 4" },
    { id: "3", label: "Lớp 3" },
    { id: "2", label: "Lớp 2" },
    { id: "1", label: "Lớp 1" },
  ];

  // Filter & Sort Logic
  const processedResources = useMemo(() => {
    let result = resources.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesGrade = activeGrade === "all" || item.grade === activeGrade;
      return matchesSearch && matchesCategory && matchesGrade;
    });

    result.sort((a, b) => {
      if (sortBy === 'newest') return Number(b.id) - Number(a.id); // Assuming ID is timestamp based
      if (sortBy === 'downloads') return b.downloads - a.downloads;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

    return result;
  }, [resources, searchTerm, activeCategory, activeGrade, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(processedResources.length / ITEMS_PER_PAGE);
  const currentResources = processedResources.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDownload = (item: Resource) => {
    if (item.url === "#" || !item.url) {
      alert(`Chưa có link tải cho tài liệu: "${item.title}".\n\n(Vui lòng liên hệ Admin để cập nhật link)`);
      return;
    }
    window.open(item.url, '_blank');
  };

  const handleResetFilters = () => {
    setSearchTerm(""); 
    setActiveGrade("all"); 
    setActiveCategory("all");
    setSortBy("newest");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <FolderOpen size={200} />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-4">
              Kho Tài Liệu
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-sm font-medium align-middle">Miễn phí</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tuyển tập đề thi, chuyên đề và sổ tay công thức từ lớp 1 đến lớp 12. 
              Được biên soạn kỹ lưỡng, cập nhật liên tục.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center min-w-[150px]">
            <div className="text-4xl font-bold text-yellow-400 mb-1">{resources.length}</div>
            <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">Tài liệu có sẵn</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        
        {/* Filter Control Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-200 space-y-4 sticky top-4 z-40">
           {/* Top Row: Search, Grade, Sort */}
           <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm tài liệu (VD: Vectơ, Hàm số...)" 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-4 overflow-x-auto">
                <div className="relative min-w-[140px]">
                   <select 
                     value={activeGrade}
                     onChange={(e) => setActiveGrade(e.target.value)}
                     className="w-full appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer hover:bg-gray-100 transition-colors"
                   >
                     {grades.map(g => (
                       <option key={g.id} value={g.id}>{g.label}</option>
                     ))}
                   </select>
                   <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                <div className="relative min-w-[160px]">
                   <select 
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value as any)}
                     className="w-full appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer hover:bg-gray-100 transition-colors"
                   >
                     <option value="newest">Mới nhất</option>
                     <option value="downloads">Tải nhiều nhất</option>
                     <option value="name">Tên A-Z</option>
                   </select>
                   {sortBy === 'newest' ? <Grid className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" /> : 
                    sortBy === 'name' ? <SortAsc className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" /> :
                    <Download className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />}
                </div>
              </div>
           </div>

           {/* Bottom Row: Category Pills */}
           <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border shadow-sm ${
                    activeCategory === c.id 
                      ? 'bg-slate-800 text-white border-slate-800 transform scale-105' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {c.label}
                </button>
              ))}
           </div>
        </div>

        {/* Results Info & Listing */}
        <div>
          <div className="flex justify-between items-end mb-6 px-2">
             <div>
               <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                 {processedResources.length > 0 ? 'Kết quả tìm kiếm' : 'Không tìm thấy kết quả'}
               </h2>
               <p className="text-sm text-gray-500">
                 Hiển thị {Math.min(processedResources.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)} - {Math.min(processedResources.length, currentPage * ITEMS_PER_PAGE)} trong số {processedResources.length} tài liệu
               </p>
             </div>
             {(searchTerm || activeGrade !== 'all' || activeCategory !== 'all') && (
               <button 
                 onClick={handleResetFilters}
                 className="text-sm text-red-600 hover:text-red-800 font-medium underline decoration-dashed underline-offset-4 transition-colors"
               >
                 Xóa bộ lọc
               </button>
             )}
          </div>

          {/* Resource Grid */}
          {currentResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentResources.map((item) => (
                <div key={item.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-5 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all group relative shadow-lg flex flex-col animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl shadow-inner ${
                        item.type === 'PDF' ? 'bg-red-500/20 text-red-400 ring-1 ring-red-500/30' : 
                        item.type === 'DOCX' ? 'bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30' : 'bg-green-500/20 text-green-400 ring-1 ring-green-500/30'
                      }`}>
                         {item.type === 'PDF' ? <FileText size={24} /> : 
                          item.type === 'DOCX' ? <File size={24} /> : <FileSpreadsheet size={24} />}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 block uppercase tracking-widest">{item.type}</span>
                        <span className="text-xs text-slate-500 font-medium">{item.size}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-slate-700 text-slate-300 border border-slate-600 shadow-sm">
                      Lớp {item.grade}
                    </span>
                  </div>
                  
                  <h3 
                    onClick={() => handleDownload(item)}
                    className="font-bold text-white text-lg mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer flex-grow"
                    title={item.title}
                  >
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded-md">
                      <Download size={12} /> {item.downloads.toLocaleString()}
                    </span>
                    
                    <button 
                      onClick={() => handleDownload(item)}
                      className="text-sm font-bold text-white hover:text-white flex items-center gap-2 transition-all bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95"
                    >
                       Tải xuống <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200 shadow-sm flex flex-col items-center animate-in fade-in">
              <div className="inline-flex p-6 bg-gray-50 rounded-full shadow-inner mb-6">
                <Search className="h-12 w-12 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy tài liệu nào</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Thử thay đổi từ khóa hoặc bộ lọc. Nếu bạn cần tài liệu cụ thể, hãy liên hệ thầy TontonYuta nhé.
              </p>
              <button 
                onClick={handleResetFilters}
                className="px-8 py-3 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-bold text-sm transition-all shadow-sm ${
                    currentPage === page 
                      ? 'bg-blue-600 text-white scale-110 shadow-blue-200' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
