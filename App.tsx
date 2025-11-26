
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ContentBuilder from './components/ContentBuilder';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UserGuide from './components/UserGuide';
import EntertainmentPage from './components/EntertainmentPage';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import ProgressPage from './pages/ProgressPage';
import GradeOverviewPage from './pages/GradeOverviewPage';
import SessionPage from './pages/SessionPage';

// --- Main App Component ---
const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/builder" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ContentBuilder />
              </ProtectedRoute>
            } 
          />

          {/* Student/Shared Routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/progress" 
            element={
              <ProtectedRoute>
                <ProgressPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <ProtectedRoute>
                <ResourcesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entertainment" 
            element={
              <ProtectedRoute>
                <EntertainmentPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/guide" 
            element={
              <ProtectedRoute>
                <UserGuide />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grade/:gradeId" 
            element={
              <ProtectedRoute>
                <GradeOverviewPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grade/:gradeId/session/:sessionId" 
            element={
              <ProtectedRoute>
                <SessionPage />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
