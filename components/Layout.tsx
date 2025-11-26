
import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Github, Code, LogOut, User as UserIcon, LayoutDashboard, Facebook, Video, MessageCircle, ListTodo, Gamepad2, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import { User } from '../types';
import TodoList from './TodoList';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(getCurrentUser());
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for TodoList
  const [isTodoListOpen, setIsTodoListOpen] = useState(false);

  // Lắng nghe sự kiện login/logout
  useEffect(() => {
    const handleAuthChange = () => {
      setUser(getCurrentUser());
    };
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Nếu đang ở trang login thì không render layout đầy đủ (chỉ render children)
  if (location.pathname === '/login' || location.pathname === '/register') {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/login');
  };

  const NavItem = ({ to, label, icon: Icon, exact = false }: any) => {
    const active = exact ? location.pathname === to : location.pathname.startsWith(to);
    return (
      <Link 
        to={to} 
        className={`relative px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 group ${
          active 
            ? 'bg-white text-blue-600 shadow-md shadow-blue-100 ring-1 ring-black/5' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
        }`}
      >
        {Icon && <Icon size={16} className={active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'} />}
        {label}
        {active && (
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-blue-600 rounded-full md:hidden"></span>
        )}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Floating Navbar Container */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? 'pt-2' : 'pt-6'}`}>
        <header 
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 relative z-50 ${
            scrolled || isMobileMenuOpen
              ? 'bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg shadow-blue-900/5 py-2 px-4' 
              : 'bg-white/70 backdrop-blur-md border border-white/30 shadow-sm py-3 px-6'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={user?.role === 'admin' ? '/admin' : '/'} className="flex items-center space-x-3 group select-none">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 leading-none tracking-tight">
                  Dạy Toán
                </h1>
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">Learning App</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            {user && (
              <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 mx-4">
                {user.role === 'admin' ? (
                  <>
                     <NavItem to="/admin" label="Quản trị" icon={LayoutDashboard} />
                     <NavItem to="/builder" label="Soạn bài" icon={Code} />
                  </>
                ) : (
                  <>
                    <NavItem to="/" label="Trang chủ" exact={true} />
                    <NavItem to="/progress" label="Tiến độ" />
                    <NavItem to="/resources" label="Tài liệu" />
                    <NavItem to="/entertainment" label="Giải trí" icon={Gamepad2} />
                  </>
                )}
              </nav>
            )}

            {/* User Actions */}
            <div className="flex items-center gap-2">
               {user ? (
                 <>
                   {/* TodoList Toggle */}
                   <button
                    onClick={() => setIsTodoListOpen(!isTodoListOpen)}
                    className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all focus:outline-none relative group ${
                      isTodoListOpen 
                        ? 'bg-indigo-100 text-indigo-600 ring-2 ring-indigo-200' 
                        : 'text-gray-500 hover:bg-gray-100 hover:text-indigo-600'
                    }`}
                    title="Việc cần làm"
                   >
                     <ListTodo size={20} />
                     {!isTodoListOpen && <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>}
                   </button>

                   {/* User Profile */}
                   <div className="hidden md:flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors cursor-pointer group border border-transparent hover:border-gray-100">
                     <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors text-right leading-tight">
                       {user.name}
                       <span className="block text-[10px] font-normal text-gray-400 uppercase">{user.role === 'admin' ? 'Admin' : 'Học viên'}</span>
                     </span>
                     <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px] shadow-sm group-hover:shadow-md transition-shadow">
                       <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-indigo-700 font-bold text-xs">
                         {user.avatar || user.name.charAt(0)}
                       </div>
                     </div>
                   </div>

                   {/* Logout Button (Desktop) */}
                   <button 
                    type="button"
                    onClick={handleLogout}
                    className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all focus:outline-none"
                    title="Đăng xuất"
                   >
                     <LogOut size={20} strokeWidth={2} />
                   </button>

                   {/* Mobile Menu Toggle */}
                   <button
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                   >
                     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                   </button>
                 </>
               ) : (
                 <Link 
                   to="/login" 
                   className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 flex items-center gap-2"
                 >
                   <UserIcon size={18} />
                   Đăng nhập
                 </Link>
               )}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {user && isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in duration-200 pb-2">
              <div className="flex items-center gap-3 mb-6 px-2">
                 <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px]">
                   <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-indigo-700 font-bold text-sm">
                     {user.avatar || user.name.charAt(0)}
                   </div>
                 </div>
                 <div>
                   <div className="font-bold text-gray-900">{user.name}</div>
                   <div className="text-xs text-gray-500 uppercase">{user.role === 'admin' ? 'Quản trị viên' : 'Học viên'}</div>
                 </div>
              </div>

              <div className="space-y-1">
                {user.role === 'admin' ? (
                  <>
                    <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isActive('/admin') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <LayoutDashboard size={20} /> Quản trị hệ thống
                    </Link>
                    <Link to="/builder" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isActive('/builder') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <Code size={20} /> Soạn bài giảng
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${location.pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <GraduationCap size={20} /> Trang chủ
                    </Link>
                    <Link to="/progress" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isActive('/progress') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <ListTodo size={20} /> Tiến độ học tập
                    </Link>
                    <Link to="/resources" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isActive('/resources') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <BookOpen size={20} /> Kho tài liệu
                    </Link>
                    <Link to="/entertainment" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isActive('/entertainment') ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <Gamepad2 size={20} /> Khu giải trí
                    </Link>
                  </>
                )}
                
                <button 
                  onClick={() => setIsTodoListOpen(!isTodoListOpen)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-left"
                >
                  <ListTodo size={20} /> Việc cần làm
                </button>

                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 text-left mt-2"
                >
                  <LogOut size={20} /> Đăng xuất
                </button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Global TodoList Component */}
      <TodoList isOpen={isTodoListOpen} onClose={() => setIsTodoListOpen(false)} />

      {/* Footer */}
      {user && location.pathname !== '/login' && (
        <footer className="border-t border-gray-200 mt-auto no-print bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-3">
                 <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><GraduationCap className="h-5 w-5" /></div>
                 <div>
                    <span className="text-gray-900 text-sm font-bold block">Dạy Toán Online</span>
                    <span className="text-gray-500 text-xs">© 2025 TontonYuta. Học thông minh hơn.</span>
                 </div>
              </div>
              
              <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/yuta.primer" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm hover:shadow hover:-translate-y-1">
                  <Facebook size={18} />
                </a>
                <a href="https://www.tiktok.com/@tontons.yuta" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-all shadow-sm hover:shadow hover:-translate-y-1">
                  <Video size={18} />
                </a>
                 <a href="https://zalo.me/0963278149" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm hover:shadow hover:-translate-y-1">
                  <MessageCircle size={18} />
                </a>
                {user.role === 'admin' && (
                  <Link to="/builder" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-xs bg-gray-100 px-3 py-1.5 rounded-full font-mono hover:bg-gray-200">
                     <Code className="h-3 w-3" /> Dev Mode
                  </Link>
                )}
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
