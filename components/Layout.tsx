
import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Github, Code, LogOut, User as UserIcon, LayoutDashboard, Facebook, Video, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(getCurrentUser());

  // Lắng nghe sự kiện login/logout
  useEffect(() => {
    const handleAuthChange = () => {
      setUser(getCurrentUser());
    };
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  // Nếu đang ở trang login thì không render layout đầy đủ (chỉ render children)
  if (location.pathname === '/login') {
    return <div className="min-h-screen bg-slate-100">{children}</div>;
  }

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    // Xóa xác nhận để đăng xuất nhanh chóng và tránh lỗi nếu dialog bị chặn
    logout();
    setUser(null); // Cập nhật state ngay lập tức để tránh độ trễ
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Floating Navbar */}
      <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 no-print">
        <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 transition-all">
          <div className="flex justify-between items-center">
            <Link to={user?.role === 'admin' ? '/admin' : '/'} className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-none">Dạy Toán</h1>
              </div>
            </Link>
            
            {user && (
              <nav className="hidden md:flex space-x-1">
                {user.role === 'admin' ? (
                  <>
                     <Link 
                      to="/admin" 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/admin') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                    >
                      Quản trị
                    </Link>
                     <Link 
                      to="/builder" 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/builder') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                    >
                      Soạn bài
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/" 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/') && location.pathname === '/' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                    >
                      Trang chủ
                    </Link>
                    <Link 
                      to="/progress" 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/progress') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                    >
                      Tiến độ
                    </Link>
                    <Link 
                      to="/resources" 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/resources') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                    >
                      Tài liệu
                    </Link>
                  </>
                )}
              </nav>
            )}

            <div className="flex items-center">
               {user ? (
                 <div className="flex items-center gap-3 pl-4 border-l border-gray-200 ml-4">
                   {/* User Profile */}
                   <div className="flex items-center gap-2">
                     <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px] shadow-sm cursor-pointer group relative">
                       <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-indigo-700 font-bold text-xs">
                         {user.avatar || user.name.charAt(0)}
                       </div>
                     </div>
                     <span className="text-sm font-bold text-gray-700 hidden lg:block">{user.name}</span>
                   </div>

                   {/* Logout Button */}
                   <button 
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all focus:outline-none"
                    title="Đăng xuất"
                   >
                     <LogOut size={18} strokeWidth={2} />
                   </button>
                 </div>
               ) : (
                 <Link 
                   to="/login" 
                   className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200 flex items-center gap-2"
                 >
                   <UserIcon size={16} />
                   Đăng nhập
                 </Link>
               )}
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      {user && location.pathname !== '/login' && (
        <footer className="bg-white border-t border-gray-200 mt-auto no-print py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                 <div className="bg-gray-100 p-1.5 rounded-lg text-gray-500"><BookOpen className="h-4 w-4" /></div>
                 <span className="text-gray-500 text-sm font-medium">© 2025 TontonYuta Dạy Toán.</span>
              </div>
              
              <div className="flex space-x-6 items-center">
                <a href="https://www.facebook.com/yuta.primer" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.tiktok.com/@tontons.yuta" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <Video size={18} />
                </a>
                 <a href="https://zalo.me/0963278149" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} />
                </a>
                {user.role === 'admin' && (
                  <Link to="/builder" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-sm bg-gray-50 px-3 py-1 rounded-full">
                     <Code className="h-3 w-3" /> <span className="text-xs">Dev Mode</span>
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
