import React, { createContext, useContext, useState } from 'react';
import { User, AuthContextType } from '../types';

// Mock user data - in a real app, this would come from your backend
const MOCK_USERS = [
  {
    id: 'admin1',
    email: 'admin@example.com',
    password: 'admin123', // In a real app, passwords would be hashed
    name: 'Admin User',
    role: 'admin' as const,
  },
];

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!mockUser) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = mockUser;
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    if (MOCK_USERS.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'user' as const,
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}