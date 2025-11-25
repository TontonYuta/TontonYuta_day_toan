import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, BookOpen, BarChart2, Code, FileText, CheckSquare, Search, Edit, Bell, ShieldCheck, Key, Trash2, UserPlus, X, Save, FileQuestion, PenTool, FolderOpen, Plus, File, Copy, Check, GitBranch, Terminal, UploadCloud } from 'lucide-react';
import { MATH_DATA } from '../data';
import { getAllUsers, getCurrentUser, saveUserToStorage, deleteUserFromStorage, resetUserPasswordInStorage } from '../services/authService';
import { getResources, addResource, deleteResource } from '../services/resourceService';
import { User, UserRole, Resource } from '../types';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'users' | 'resources' | 'deploy'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // User Management State
  const [userList, setUserList] = useState<User[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: '', username: '', role: 'student' as UserRole });

  // Resource Management State
  const [resourceList, setResourceList] = useState<Resource[]>([]);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [resourceFormData, setResourceFormData] = useState<{
    title: string;
    url: string;
    type: Resource['type'];
    grade: string;
    category: string;
  }>({ title: '', url: '', type: 'PDF', grade: '12', category: 'handbook' });

  // Code Export State
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [codeContent, setCodeContent] = useState('');
  const [codeInstructions, setCodeInstructions] = useState<{ file: string, variable: string }>({ file: '', variable: '' });
  const [copied, setCopied] = useState(false);

  // Load data on mount
  useEffect(() => {
    setUserList(getAllUsers());
    setResourceList(getResources());
  }, []);

  // 1. Tính toán thống kê thực tế từ dữ liệu
  const stats = useMemo(() => {
    const users = userList.length > 0 ? userList : getAllUsers();
    const grades = Object.values(MATH_DATA);
    let totalSessions = 0;
    let totalExamples = 0;
    let totalEssays = 0;
    let totalMCQs = 0;

    grades.forEach(g => {
      g.sessions.forEach(s => {
        totalSessions++;
        totalExamples += s.examples.length;
        totalEssays += s.essays.length;
        totalMCQs += s.mcqs.length;
      });
    });

    return {
      userCount: users.length,
      gradeCount: grades.length,
      sessionCount: totalSessions,
      questionCount: totalEssays + totalMCQs,
      exampleCount: totalExamples,
      resourceCount: resourceList.length
    };
  }, [userList, resourceList]);

  const grades = Object.values(MATH_DATA);

  const handleEditSession = (session: any) => {
    navigate('/builder', { state: { sessionData: session } });
  };

  // --- Export Helpers ---
  const handleExportUsers = () => {
    // Get full user objects including hidden properties (like password if available in a real app, here strictly what's in localStorage + structure)
    // Note: getAllUsers strips password usually, but for seed data we might want to recreate structure or use a default.
    // However, our `getAllUsers` returns clean users. We will format it to look like the seed.
    // For this simulation, we will add a default password field to the export to make it valid for the seed interface.
    
    const dbUsersString = localStorage.getItem("daytoan_users_db");
    let usersToExport = [];
    
    if (dbUsersString) {
      usersToExport = JSON.parse(dbUsersString);
    } else {
      usersToExport = userList.map(u => ({...u, password: "123"})); // Fallback
    }

    const code = `const MOCK_USERS_SEED = ${JSON.stringify(usersToExport, null, 2)};`;
    setCodeContent(code);
    setCodeInstructions({ file: 'services/authService.ts', variable: 'MOCK_USERS_SEED' });
    setIsCodeModalOpen(true);
  };

  const handleExportResources = () => {
    // Resources are cleaner, just export the list
    const code = `const SEED_RESOURCES = ${JSON.stringify(resourceList, null, 2)};`;
    setCodeContent(code);
    setCodeInstructions({ file: 'services/resourceService.ts', variable: 'SEED_RESOURCES' });
    setIsCodeModalOpen(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- User Management Handlers ---
  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({ name: '', username: '', role: 'student' });
    setIsUserModalOpen(true);
  };

  const handleEditUser = (e: React.MouseEvent, user: User) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingUser(user);
    setFormData({ name: user.name, username: user.username, role: user.role });
    setIsUserModalOpen(true);
  };

  const handleDeleteUser = (e: React.MouseEvent, userToDelete: User) => {
    e.preventDefault();
    e.stopPropagation();
    const currentUser = getCurrentUser();

    // 1. Ngăn xóa chính mình
    if (currentUser && currentUser.id === userToDelete.id) {
        alert("Bạn không thể xóa tài khoản đang đăng nhập!");
        return;
    }

    // 2. Ngăn xóa admin gốc (để tránh mất quyền truy cập hệ thống)
    if (userToDelete.username === 'admin') {
         alert("Không thể xóa tài khoản Quản trị viên gốc!");
         return;
    }

    if (window.confirm(`CẢNH BÁO: Bạn có chắc chắn muốn xóa người dùng "${userToDelete.name}"?\n\nDữ liệu tiến độ học tập của người dùng này sẽ bị xóa vĩnh viễn và không thể khôi phục.`)) {
      deleteUserFromStorage(userToDelete.id);
      setUserList(getAllUsers());
      
      if (editingUser?.id === userToDelete.id) {
        setIsUserModalOpen(false);
        setEditingUser(null);
      }
    }
  };

  const handleResetPassword = (e: React.MouseEvent, user: User) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newPass = prompt(`Nhập mật khẩu mới cho tài khoản "${user.name}" (Để trống để hủy):`);
    
    if (newPass === null) return; 
    
    if (newPass.trim() === "") return;

    resetUserPasswordInStorage(user.id, newPass);
    alert(`Đã đổi mật khẩu cho "${user.name}" thành công!`);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      const updatedUser = { ...editingUser, ...formData };
      saveUserToStorage(updatedUser);
      setUserList(getAllUsers());

      const currentUser = getCurrentUser();
      if (currentUser && currentUser.id === editingUser.id) {
          const newSession = { ...currentUser, ...formData };
          localStorage.setItem("daytoan_current_user", JSON.stringify(newSession));
          window.dispatchEvent(new Event("auth-change"));
      }
    } else {
      const newUser: User = {
        id: `u_${Date.now()}`,
        name: formData.name,
        username: formData.username,
        role: formData.role,
        avatar: formData.name.charAt(0).toUpperCase()
      };
      saveUserToStorage(newUser);
      setUserList(getAllUsers());
    }
    setIsUserModalOpen(false);
  };

  // --- Resource Management Handlers ---
  const handleAddResource = () => {
    setResourceFormData({ title: '', url: '', type: 'PDF', grade: '12', category: 'handbook' });
    setIsResourceModalOpen(true);
  };

  const handleDeleteResource = (id: string | number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài liệu này?")) {
      const updated = deleteResource(id);
      setResourceList(updated);
    }
  };

  const handleSaveResource = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = addResource({
      ...resourceFormData,
      size: 'Tùy chỉnh' 
    });
    setResourceList(updated);
    setIsResourceModalOpen(false);
  };

  return (
    <div className="space-y-8 pb-12 relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <ShieldCheck className="text-primary" size={32} />
            Trung tâm Quản trị
          </h1>
          <p className="text-gray-400">Hệ thống quản lý nội dung và người dùng Dạy Toán.</p>
        </div>
        <Link 
          to="/builder" 
          className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center gap-2"
        >
          <Code size={20} /> Soạn bài mới
        </Link>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-gray-200 pb-1 overflow-x-auto no-scrollbar">
        {[
          { id: 'overview', label: 'Tổng quan', icon: BarChart2 },
          { id: 'content', label: 'Quản lý Nội dung', icon: BookOpen },
          { id: 'users', label: 'Người dùng', icon: Users },
          { id: 'resources', label: 'Quản lý Tài liệu', icon: FolderOpen },
          { id: 'deploy', label: 'Hướng dẫn Deploy', icon: GitBranch },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white text-primary border-b-2 border-primary shadow-sm'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors">
               <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                 <Users size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500 font-medium">Tổng học viên</p>
                 <h3 className="text-2xl font-bold text-gray-900">{stats.userCount}</h3>
               </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors">
               <div className="p-4 bg-green-100 text-green-600 rounded-full">
                 <BookOpen size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500 font-medium">Buổi học</p>
                 <h3 className="text-2xl font-bold text-gray-900">{stats.sessionCount}</h3>
               </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors">
               <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
                 <FileQuestion size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500 font-medium">Câu hỏi luyện tập</p>
                 <h3 className="text-2xl font-bold text-gray-900">{stats.questionCount}</h3>
               </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors">
               <div className="p-4 bg-orange-100 text-orange-600 rounded-full">
                 <FolderOpen size={24} />
               </div>
               <div>
                 <p className="text-sm text-gray-500 font-medium">Tài liệu</p>
                 <h3 className="text-2xl font-bold text-gray-900">{stats.resourceCount}</h3>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Hoạt động gần đây</h3>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Live
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600 flex-grow">Hệ thống đã cập nhật dữ liệu mới nhất.</span>
                  <span className="text-xs text-gray-400">Vừa xong</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-sm text-gray-600 flex-grow">Nguyễn Văn A vừa hoàn thành bài "Tập hợp".</span>
                   <span className="text-xs text-gray-400">5 phút trước</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-sm text-gray-600 flex-grow">Trần Thị B đăng nhập vào hệ thống.</span>
                   <span className="text-xs text-gray-400">1 giờ trước</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                <Bell size={20} />
                Thông báo Hệ thống
              </h3>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-100 mb-4">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Chào mừng Quản trị viên!</strong><br/>
                  Hệ thống hiện đang hoạt động ổn định trên nền tảng trình duyệt. 
                  Để đảm bảo an toàn dữ liệu, vui lòng thường xuyên sao lưu các bài giảng mới thông qua công cụ xuất mã nguồn.
                  <br/><br/>
                  <em>Phiên bản: v1.0.9 - Hỗ trợ xuất mã nguồn Người dùng & Tài liệu</em>
                </p>
              </div>
              
              <div className="flex gap-3">
                 <Link to="/builder" className="text-sm bg-blue-600 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
                   <Code size={16} /> Soạn bài ngay
                 </Link>
                 <Link to="/guide" className="text-sm bg-white text-blue-600 border border-blue-200 px-4 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-sm">
                   Hướng dẫn sử dụng
                 </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: CONTENT MANAGEMENT */}
      {activeTab === 'content' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">Danh sách nội dung chương trình</h2>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Tìm lớp hoặc bài học..." 
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none w-full md:w-64 transition-colors"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6">
            {grades.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()) || g.sessions.some(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()))).map(grade => (
              <div key={grade.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-700 shadow-sm">
                      {grade.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{grade.name}</h3>
                      <p className="text-xs text-gray-500">{grade.sessions.length} bài học</p>
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {grade.sessions.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase())).map(session => (
                    <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{session.id}</span>
                          <h4 className="font-bold text-gray-800">{session.title}</h4>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1">{session.description}</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 font-medium">
                           <span className="flex items-center gap-1"><FileText size={14}/> {session.examples.length} ví dụ</span>
                           <span className="flex items-center gap-1"><PenTool size={14}/> {session.essays.length} tự luận</span>
                           <span className="flex items-center gap-1"><CheckSquare size={14}/> {session.mcqs.length} trắc nghiệm</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button 
                          onClick={() => handleEditSession(session)}
                          className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
                          title="Chỉnh sửa nội dung"
                        >
                          <Edit size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {grade.sessions.length === 0 && (
                    <div className="p-8 text-center text-gray-500 italic">Chưa có bài học nào trong lớp này.</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: USER MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">Danh sách người dùng</h2>
            <div className="flex gap-2">
              <button 
                onClick={handleExportUsers}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 shadow-sm transition-colors"
              >
                <Code size={16} /> Xuất Mã Nguồn
              </button>
              <button 
                onClick={handleAddUser}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm"
              >
                <UserPlus size={16} /> Thêm người dùng
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Học viên</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên đăng nhập</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userList.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-sm">
                            {user.avatar || user.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-xs text-gray-500">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded inline-block">{user.username}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role === 'admin' ? 'Quản trị viên' : 'Học viên'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Hoạt động
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button 
                          type="button"
                          onClick={(e) => handleResetPassword(e, user)}
                          className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors border border-transparent hover:border-orange-200"
                          title="Đổi mật khẩu"
                        >
                          <Key size={18} />
                        </button>
                        <button 
                          type="button"
                          onClick={(e) => handleEditUser(e, user)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-200"
                          title="Chỉnh sửa thông tin"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          type="button"
                          onClick={(e) => handleDeleteUser(e, user)}
                          className={`p-2 rounded-lg transition-colors border border-transparent ${
                            user.username === 'admin' 
                            ? 'text-gray-300 cursor-not-allowed' 
                            : 'text-red-600 hover:bg-red-50 hover:border-red-200'
                          }`}
                          title={user.username === 'admin' ? "Không thể xóa Admin gốc" : "Xóa người dùng"}
                          disabled={user.username === 'admin'}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: RESOURCES MANAGEMENT */}
      {activeTab === 'resources' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Quản lý Tài liệu</h2>
            <div className="flex gap-2">
               <button 
                onClick={handleExportResources}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 shadow-sm transition-colors"
              >
                <Code size={16} /> Xuất Mã Nguồn
              </button>
              <button 
                onClick={handleAddResource}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm"
              >
                <Plus size={16} /> Thêm tài liệu
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên tài liệu</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phân loại</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lớp</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {resourceList.map((res) => (
                   <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                     <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                         <div className={`p-2 rounded ${
                            res.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                         }`}>
                           {res.type === 'PDF' ? <FileText size={16}/> : <File size={16}/>}
                         </div>
                         <span className="font-medium text-gray-900 text-sm">{res.title}</span>
                       </div>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       <span className="bg-gray-100 px-2 py-1 rounded text-xs uppercase">{res.category}</span>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       Lớp {res.grade}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a href={res.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline max-w-[150px] truncate block">
                          {res.url}
                        </a>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                       <button 
                         onClick={() => handleDeleteResource(res.id)}
                         className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                         title="Xóa tài liệu"
                       >
                         <Trash2 size={18} />
                       </button>
                     </td>
                   </tr>
                 ))}
                 {resourceList.length === 0 && (
                   <tr>
                     <td colSpan={5} className="px-6 py-8 text-center text-gray-500 italic">
                       Chưa có tài liệu nào.
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
          </div>
        </div>
      )}

      {/* TAB: DEPLOY GUIDE */}
      {activeTab === 'deploy' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                <GitBranch size={24} />
              </div>
              Hướng dẫn Cập nhật Code lên GitHub
            </h2>

            <div className="space-y-6">
              <p className="text-gray-600">
                Sau khi bạn đã dán nội dung mới vào file <code>src/data.ts</code> hoặc thực hiện các thay đổi khác,
                hãy thực hiện các lệnh sau trong Terminal để lưu và đẩy thay đổi lên GitHub.
              </p>

              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                  <Terminal size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-mono">Terminal / Command Prompt</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  {/* Command 1 */}
                  <div>
                    <div className="text-gray-500 mb-1"># 1. Kiểm tra trạng thái</div>
                    <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git status
                    </div>
                  </div>

                  {/* Command 2 */}
                  <div>
                    <div className="text-gray-500 mb-1"># 2. Thêm tất cả thay đổi</div>
                    <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git add .
                    </div>
                  </div>

                  {/* Command 3 */}
                  <div>
                    <div className="text-gray-500 mb-1"># 3. Lưu (Commit) với ghi chú</div>
                    <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git commit -m "Cập nhật nội dung mới"
                    </div>
                  </div>

                  {/* Command 4 */}
                  <div>
                    <div className="text-gray-500 mb-1"># 4. Đẩy lên GitHub</div>
                    <div className="text-green-400 flex gap-2">
                      <span className="text-pink-500">➜</span> git push origin main
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-yellow-800 text-sm">
                <UploadCloud className="flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <strong>Lưu ý:</strong> Nếu website được kết nối với Vercel/Netlify, hệ thống sẽ tự động build và deploy lại sau khi bạn push code thành công (thường mất 1-2 phút).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Code Export */}
      {isCodeModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <Code size={20} className="text-primary"/> Xuất Mã Nguồn
              </h3>
              <button onClick={() => setIsCodeModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
               <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-800">
                 <p className="font-bold mb-1">Hướng dẫn cập nhật:</p>
                 <ol className="list-decimal list-inside space-y-1">
                   <li>Sao chép đoạn mã bên dưới.</li>
                   <li>Mở file <code>{codeInstructions.file}</code> trong mã nguồn của bạn.</li>
                   <li>Tìm biến <code>{codeInstructions.variable}</code> và dán đè đoạn mã này vào.</li>
                   <li>Lưu file lại để cập nhật dữ liệu vĩnh viễn.</li>
                 </ol>
               </div>

               <div className="bg-gray-900 rounded-lg p-4 relative group">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={handleCopyCode}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      {copied ? <Check size={16}/> : <Copy size={16}/>}
                      {copied ? 'Đã copy' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-gray-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap break-all">
                    {codeContent}
                  </pre>
               </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end flex-shrink-0">
              <button 
                onClick={() => setIsCodeModalOpen(false)}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-700 shadow-sm"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Add/Edit User */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                {editingUser ? <Edit size={20} className="text-indigo-600"/> : <UserPlus size={20} className="text-primary"/>}
                {editingUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới'}
              </h3>
              <button onClick={() => setIsUserModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveUser} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                  placeholder="VD: Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
                <input 
                  type="text" 
                  required
                  disabled={!!editingUser}
                  value={formData.username}
                  onChange={e => setFormData({...formData, username: e.target.value})}
                  className={`w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none transition-colors ${editingUser ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'focus:bg-white focus:ring-2 focus:ring-primary/50'}`}
                  placeholder="VD: hocsinh123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vai trò</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer border p-3 rounded-lg flex-1 hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="role" 
                      value="student"
                      checked={formData.role === 'student'}
                      onChange={() => setFormData({...formData, role: 'student'})}
                    />
                    <span className="text-sm font-medium">Học viên</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer border p-3 rounded-lg flex-1 hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="role" 
                      value="admin"
                      checked={formData.role === 'admin'}
                      onChange={() => setFormData({...formData, role: 'admin'})}
                    />
                    <span className="text-sm font-medium">Quản trị viên</span>
                  </label>
                </div>
              </div>

              {!editingUser && (
                <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg text-xs flex gap-2">
                   <Key size={14} className="flex-shrink-0 mt-0.5"/>
                   <span>Mật khẩu mặc định cho người dùng mới sẽ là <strong>123</strong>.</span>
                </div>
              )}

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium"
                >
                  Hủy bỏ
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 font-bold flex items-center gap-2"
                >
                  <Save size={18} />
                  {editingUser ? 'Cập nhật' : 'Tạo mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Add Resource */}
      {isResourceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <FolderOpen size={20} className="text-primary"/> Thêm tài liệu mới
              </h3>
              <button onClick={() => setIsResourceModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveResource} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tên tài liệu</label>
                <input 
                  type="text" 
                  required
                  value={resourceFormData.title}
                  onChange={e => setResourceFormData({...resourceFormData, title: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                  placeholder="VD: Đề thi thử Toán 12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Đường dẫn (URL)</label>
                <input 
                  type="url" 
                  required
                  value={resourceFormData.url}
                  onChange={e => setResourceFormData({...resourceFormData, url: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                  placeholder="https://drive.google.com/..."
                />
                <p className="text-xs text-gray-500 mt-1">Dán link Google Drive, Dropbox hoặc file trực tiếp.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loại file</label>
                  <select 
                    value={resourceFormData.type}
                    onChange={e => setResourceFormData({...resourceFormData, type: e.target.value as any})}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                  >
                    <option value="PDF">PDF</option>
                    <option value="DOCX">Word (DOCX)</option>
                    <option value="XLSX">Excel (XLSX)</option>
                    <option value="OTHER">Khác</option>
                  </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Dành cho lớp</label>
                   <select 
                    value={resourceFormData.grade}
                    onChange={e => setResourceFormData({...resourceFormData, grade: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                  >
                    {[12,11,10,9,8,7,6,5,4,3,2,1].map(g => (
                      <option key={g} value={g.toString()}>Lớp {g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
                <select 
                  value={resourceFormData.category}
                  onChange={e => setResourceFormData({...resourceFormData, category: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary/50 outline-none transition-colors"
                >
                  <option value="handbook">Sổ tay & Công thức</option>
                  <option value="exam">Đề thi & Kiểm tra</option>
                  <option value="topic">Chuyên đề sâu</option>
                  <option value="exercise">Bài tập rèn luyện</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsResourceModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium"
                >
                  Hủy bỏ
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 font-bold flex items-center gap-2"
                >
                  <Save size={18} /> Lưu tài liệu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;