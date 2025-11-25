import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';
import { UserRole } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user = getCurrentUser();

  if (!user) {
    // Chưa đăng nhập -> Chuyển về trang login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Đã đăng nhập nhưng không đủ quyền
    // Nếu là admin vào trang student -> cho phép (hoặc chuyển trang admin)
    // Nếu là student vào trang admin -> Chuyển về trang chủ
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;