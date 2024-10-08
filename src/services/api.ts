import axios from 'axios';
import { Job, User, UserProfile } from '../types';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Jobs API
export const jobsApi = {
  getJobs: () => api.get<Job[]>('/jobs'),
  getJob: (id: string) => api.get<Job>(`/jobs/${id}`),
  createJob: (job: Omit<Job, 'id'>) => api.post<Job>('/jobs', job),
  updateJob: (id: string, job: Partial<Job>) => api.put<Job>(`/jobs/${id}`, job),
  deleteJob: (id: string) => api.delete(`/jobs/${id}`),
  saveJob: (jobId: string) => api.post(`/jobs/${jobId}/save`),
  unsaveJob: (jobId: string) => api.delete(`/jobs/${jobId}/save`),
  getSavedJobs: () => api.get<Job[]>('/jobs/saved'),
};

// Auth API
export const authApi = {
  login: (email: string, password: string) => 
    api.post<{ token: string; user: User }>('/auth/login', { email, password }),
  signup: (email: string, password: string, name: string) =>
    api.post<{ token: string; user: User }>('/auth/signup', { email, password, name }),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get<UserProfile>('/auth/profile'),
  updateProfile: (profile: Partial<UserProfile>) => 
    api.put<UserProfile>('/auth/profile', profile),
  changePassword: (currentPassword: string, newPassword: string) =>
    api.put('/auth/password', { currentPassword, newPassword }),
};

export default api;