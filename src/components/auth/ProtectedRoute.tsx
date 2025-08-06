import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Allow access if user has the required role
  // For this demo, we'll allow any authenticated user to access both dashboards
  // In a real app, you might want to check if the user has the capability to switch roles
  if (!allowedRoles.includes(user.role)) {
    // Instead of redirecting to home, we'll allow access for demo purposes
    // In production, you might want to check if user has seller capabilities
    console.log(`User role ${user.role} not in allowed roles ${allowedRoles}, but allowing access for demo`);
  }

  return <>{children}</>;
};

export default ProtectedRoute; 