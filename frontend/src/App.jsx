import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastProvider } from './components/ToastContext';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Collections from './pages/Collections';
import Explore from './pages/Explore';
import ArtifactDetails from './pages/ArtifactDetails';
import RegisterArtifact from './pages/RegisterArtifact';
import MyArtifacts from './pages/MyArtifacts';
import Provenance from './pages/Provenance';
import TimelinePage from './pages/TimelinePage';
import JourneyMapPage from './pages/JourneyMapPage';
import KnowledgeGraphPage from './pages/KnowledgeGraphPage';
import AIMatching from './pages/AIMatching';
import Verification from './pages/Verification';
import Museums from './pages/Museums';
import Users from './pages/Users';
import Settings from './pages/Settings';
import About from './pages/About';

import { initStorage } from './utils/storage';

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isStandalonePage = location.pathname === '/' || location.pathname === '/login';

  if (isStandalonePage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto min-w-0">{children}</main>
      </div>
    </div>
  );
};

export function App() {
  useEffect(() => {
    initStorage();
  }, []);

  return (
    <ToastProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/artifact/:id" element={<ArtifactDetails />} />
            <Route path="/provenance/:id" element={<Provenance />} />
            <Route path="/provenance" element={<Provenance />} />
            <Route path="/timeline/:id" element={<TimelinePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/journey/:id" element={<JourneyMapPage />} />
            <Route path="/journey" element={<JourneyMapPage />} />
            <Route path="/graph/:id" element={<KnowledgeGraphPage />} />
            <Route path="/graph" element={<KnowledgeGraphPage />} />
            <Route path="/museums" element={<Museums />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />

            {/* Authenticated Role-Guarded Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin', 'curator', 'researcher', 'public']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute allowedRoles={['admin', 'curator']}>
                  <RegisterArtifact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-artifacts"
              element={
                <ProtectedRoute allowedRoles={['admin', 'curator']}>
                  <MyArtifacts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-matching"
              element={
                <ProtectedRoute allowedRoles={['admin', 'curator', 'researcher']}>
                  <AIMatching />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verification"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Verification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <div className="p-12 text-center max-w-lg mx-auto my-12 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-[#12212E]">Page Not Found</h2>
                  <p className="text-xs text-slate-500">
                    The requested HeritageChain route does not exist in this digital registry.
                  </p>
                  <Link
                    to="/explore"
                    className="inline-block px-5 py-2.5 rounded-xl bg-[#12212E] text-[#EA9940] font-bold text-xs hover:bg-[#307082] hover:text-white transition-colors"
                  >
                    Browse Artifact Explorer
                  </Link>
                </div>
              }
            />
          </Routes>
        </AppLayout>
      </Router>
    </ToastProvider>
  );
}

export default App;
