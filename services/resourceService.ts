import { Resource } from "../types";

const RESOURCES_STORAGE_KEY = "daytoan_resources_db";

// ============================================================================
// KHU VỰC DỮ LIỆU GỐC (SEED DATA)
// Bạn hãy copy đoạn mã từ Admin Dashboard > Tài liệu > Xuất Mã Nguồn
// và dán đè vào mảng SEED_RESOURCES bên dưới.
// ============================================================================

const SEED_RESOURCES: Resource[] = [
  // Lớp 12
  { 
    id: 1, 
    title: "Sổ tay công thức Toán 12 - Ôn thi THPTQG", 
    type: "PDF", 
    size: "5.4 MB", 
    category: "handbook", 
    grade: "12", 
    downloads: 4500,
    url: "https://drive.google.com/file/d/1ru8Z9OSQEMb9E3njfh8yPbg9EIZ11JYf/view?usp=drive_link" 
  },
  { 
    id: 2, 
    title: "Đề thi thử THPTQG 2024 - Trường THPT Chuyên KHTN", 
    type: "PDF", 
    size: "1.2 MB", 
    category: "exam", 
    grade: "12", 
    downloads: 3400,
    url: "#" 
  },
  { 
    id: 3, 
    title: "Chuyên đề: Khảo sát hàm số và Vẽ đồ thị", 
    type: "PDF", 
    size: "4.2 MB", 
    category: "topic", 
    grade: "12", 
    downloads: 1500,
    url: "#"
  },
  { 
    id: 4, 
    title: "Tuyển tập 500 câu trắc nghiệm Số phức (Có đáp án)", 
    type: "DOCX", 
    size: "800 KB", 
    category: "exercise", 
    grade: "12", 
    downloads: 2100,
    url: "#"
  },
  
  // Lớp 11
  { 
    id: 5, 
    title: "Tổng hợp kiến thức Lượng giác 11", 
    type: "PDF", 
    size: "2.1 MB", 
    category: "handbook", 
    grade: "11", 
    downloads: 1800,
    url: "#"
  },
  { 
    id: 6, 
    title: "Bài tập Hình học không gian: Khoảng cách & Góc", 
    type: "PDF", 
    size: "3.5 MB", 
    category: "topic", 
    grade: "11", 
    downloads: 1200,
    url: "#"
  },

  // Lớp 10
  { 
    id: 8, 
    title: "Lý thuyết Mệnh đề & Tập hợp (SGK Mới)", 
    type: "PDF", 
    size: "1.5 MB", 
    category: "handbook", 
    grade: "10", 
    downloads: 2200,
    url: "#"
  },
  { 
    id: 9, 
    title: "Chuyên đề Vectơ và các ứng dụng", 
    type: "PDF", 
    size: "3.0 MB", 
    category: "topic", 
    grade: "10", 
    downloads: 1600,
    url: "#"
  },

  // Lớp 9
  { 
    id: 11, 
    title: "Tổng ôn Toán 9 vào 10 - Phần Đại số", 
    type: "PDF", 
    size: "6.1 MB", 
    category: "topic", 
    grade: "9", 
    downloads: 5600,
    url: "#"
  },
  { 
    id: 13, 
    title: "Hệ thức lượng trong tam giác vuông", 
    type: "DOCX", 
    size: "500 KB", 
    category: "exercise", 
    grade: "9", 
    downloads: 1400,
    url: "#"
  },

  // THCS Khối 6, 7, 8
  { 
    id: 14, 
    title: "Sổ tay Toán học lớp 8", 
    type: "PDF", 
    size: "2.8 MB", 
    category: "handbook", 
    grade: "8", 
    downloads: 1100,
    url: "#"
  },
  { 
    id: 17, 
    title: "Ôn tập chương 1: Số tự nhiên - Toán 6", 
    type: "DOCX", 
    size: "600 KB", 
    category: "exercise", 
    grade: "6", 
    downloads: 1250,
    url: "#"
  },
];

// ============================================================================
// KẾT THÚC KHU VỰC DỮ LIỆU GỐC
// ============================================================================

export const getResources = (): Resource[] => {
  try {
    const stored = localStorage.getItem(RESOURCES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Lỗi đọc Resources DB", e);
  }
  // Init seed data
  localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(SEED_RESOURCES));
  return SEED_RESOURCES;
};

export const saveResourcesToStorage = (resources: Resource[]) => {
  localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(resources));
};

export const addResource = (newResource: Omit<Resource, 'id' | 'downloads'>) => {
  const resources = getResources();
  const resourceToAdd: Resource = {
    ...newResource,
    id: Date.now(),
    downloads: 0
  };
  // Add to top
  const updated = [resourceToAdd, ...resources];
  saveResourcesToStorage(updated);
  return updated;
};

export const deleteResource = (id: string | number) => {
  let resources = getResources();
  resources = resources.filter(r => r.id !== id);
  saveResourcesToStorage(resources);
  return resources;
};