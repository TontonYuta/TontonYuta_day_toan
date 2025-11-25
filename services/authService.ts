import { User } from "../types";

// ============================================================================
// KHU VỰC DỮ LIỆU GỐC (SEED DATA)
// Bạn hãy copy đoạn mã từ Admin Dashboard > Người dùng > Xuất Mã Nguồn
// và dán đè vào mảng MOCK_USERS_SEED bên dưới.
// ============================================================================

const MOCK_USERS_SEED: (User & { password: string })[] = [
  {
    id: "admin_01",
    username: "admin",
    password: "123",
    name: "Quản Trị Viên",
    role: "admin",
    avatar: "A"
  },
  {
    id: "hs_01",
    username: "hocsinh1",
    password: "123",
    name: "Nguyễn Văn A",
    role: "student",
    avatar: "H1"
  },
  {
    id: "hs_02",
    username: "hocsinh2",
    password: "123",
    name: "Trần Thị B",
    role: "student",
    avatar: "H2"
  },
  {
    id: "hs_03",
    username: "hocsinh3",
    password: "123",
    name: "Lê Văn C",
    role: "student",
    avatar: "H3"
  },
  {
    "id": "u_1764076465354",
    "name": "Trần Huy Hoàng ",
    "username": "yuta1",
    "role": "student",
    "avatar": "T",
    "password": "123"
  }
];

// ============================================================================
// KẾT THÚC KHU VỰC DỮ LIỆU GỐC
// ============================================================================

const USER_STORAGE_KEY = "daytoan_current_user"; // Lưu session phiên đăng nhập
const DB_USERS_KEY = "daytoan_users_db"; // Lưu "Database" toàn bộ user

// --- HELPER: Lấy DB từ localStorage (hoặc khởi tạo nếu chưa có) ---
const getUsersFromDB = (): (User & { password: string })[] => {
  try {
    const stored = localStorage.getItem(DB_USERS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Lỗi đọc DB user", e);
  }
  // Nếu chưa có, khởi tạo từ MOCK seed
  localStorage.setItem(DB_USERS_KEY, JSON.stringify(MOCK_USERS_SEED));
  return MOCK_USERS_SEED;
};

// --- HELPER: Lưu DB vào localStorage ---
const saveUsersToDB = (users: (User & { password: string })[]) => {
  localStorage.setItem(DB_USERS_KEY, JSON.stringify(users));
};

export const login = (username: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Đọc từ DB động thay vì biến tĩnh
      const users = getUsersFromDB();
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        const { password, ...safeUser } = user;
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
        window.dispatchEvent(new Event("auth-change"));
        resolve(safeUser);
      } else {
        reject(new Error("Tên đăng nhập hoặc mật khẩu không đúng"));
      }
    }, 800);
  });
};

export const logout = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
  window.dispatchEvent(new Event("auth-change"));
};

export const getCurrentUser = (): User | null => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};

export const getAllUsers = (): User[] => {
  const users = getUsersFromDB();
  return users.map(({ password, ...user }) => user);
};

// --- CÁC HÀM QUẢN LÝ USER (CRUD) CHO ADMIN ---

export const saveUserToStorage = (userData: User & { password?: string }) => {
  const users = getUsersFromDB();
  const existingIndex = users.findIndex(u => u.id === userData.id);

  if (existingIndex >= 0) {
    // Cập nhật (giữ nguyên password cũ nếu không truyền password mới)
    const oldUser = users[existingIndex];
    users[existingIndex] = {
      ...oldUser,
      ...userData,
      password: userData.password || oldUser.password // Nếu không đổi pass thì giữ nguyên
    };
  } else {
    // Tạo mới (bắt buộc phải có password, nếu thiếu thì gán mặc định)
    users.push({
      ...userData,
      password: userData.password || "123"
    });
  }
  saveUsersToDB(users);
};

export const deleteUserFromStorage = (userId: string) => {
  let users = getUsersFromDB();
  users = users.filter(u => u.id !== userId);
  saveUsersToDB(users);
  
  // Xóa tiến độ học tập của user này để giải phóng bộ nhớ
  localStorage.removeItem(`daytoan_progress_${userId}`);
};

export const resetUserPasswordInStorage = (userId: string, newPass: string) => {
  const users = getUsersFromDB();
  const user = users.find(u => u.id === userId);
  if (user) {
    user.password = newPass;
    saveUsersToDB(users);
  }
};