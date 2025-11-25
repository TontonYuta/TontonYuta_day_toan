import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Github, Code, LogOut, User as UserIcon, LayoutDashboard } from 'lucide-react';
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
    return <div className="min-h-screen bg-gray-50">{children}</div>;
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
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={user?.role === 'admin' ? '/admin' : '/'} className="flex items-center space-x-2 group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-none">Dạy Toán</h1>
                <p className="text-xs text-gray-500 font-medium">Học Toán Thông Minh</p>
              </div>
            </Link>
            
            {user && (
              <nav className="hidden md:flex space-x-8">
                {user.role === 'admin' ? (
                  <>
                     <Link 
                      to="/admin" 
                      className={`font-medium transition-colors ${isActive('/admin') ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
                    >
                      Quản trị
                    </Link>
                     <Link 
                      to="/builder" 
                      className={`font-medium transition-colors ${isActive('/builder') ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
                    >
                      Soạn bài
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/" 
                      className={`font-medium transition-colors ${isActive('/') && location.pathname === '/' ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
                    >
                      Trang chủ
                    </Link>
                    <Link 
                      to="/progress" 
                      className={`flex items-center gap-1 font-medium transition-colors ${isActive('/progress') ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
                    >
                      Tiến độ
                    </Link>
                    <Link 
                      to="/resources" 
                      className={`flex items-center gap-1 font-medium transition-colors ${isActive('/resources') ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
                    >
                      Tài liệu
                    </Link>
                  </>
                )}
              </nav>
            )}

            <div className="flex items-center">
               {user ? (
                 <div className="flex items-center gap-4 pl-6 border-l border-gray-200 ml-4">
                   {/* User Profile */}
                   <div className="flex items-center gap-3">
                     <div className="text-right hidden md:block">
                       <p className="text-sm font-bold text-gray-900 leading-tight">{user.name}</p>
                       <p className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${user.role === 'admin' ? 'text-purple-600' : 'text-green-600'}`}>
                         {user.role === 'admin' ? 'Quản trị viên' : 'Học viên'}
                       </p>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-sm">
                       <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-indigo-700 font-bold text-sm">
                         {user.avatar || user.name.charAt(0)}
                       </div>
                     </div>
                   </div>

                   {/* Logout Button */}
                   <button 
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-100"
                    title="Đăng xuất"
                   >
                     <LogOut size={20} strokeWidth={2} />
                   </button>
                 </div>
               ) : (
                 <Link 
                   to="/login" 
                   className="px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 flex items-center gap-2"
                 >
                   <UserIcon size={16} />
                   Đăng nhập
                 </Link>
               )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      {user && location.pathname !== '/login' && (
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                 <BookOpen className="h-5 w-5 text-gray-400" />
                 <span className="text-gray-500 text-sm">© TontonYuta Dạy Toán. All rights reserved.</span>
              </div>
              
              <div className="flex space-x-6 items-center">
                {user.role === 'admin' && (
                  <Link to="/builder" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-sm">
                     <Code className="h-4 w-4" /> Soạn bài mới
                  </Link>
                )}
                <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;