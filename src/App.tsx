import { Navigate, Route, Routes } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useScrollMemory } from "./hooks/useScrollMemory";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import JobList from "./pages/JobList";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Signup from "./pages/Signup";

export default function App() {
  useScrollMemory();

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Navbar />
          <Breadcrumbs />
          <div className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <JobList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/:id"
                element={
                  <ProtectedRoute>
                    <JobDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
