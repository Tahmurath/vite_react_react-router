import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import MainLayout from './layouts/MainLayout';
import AuthLayout from './auth/AuthLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import About from './auth/About.jsx';
import AdminDashboard from './auth/AdminDashboard';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<AuthLayout />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Admin Layout Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

    </Routes>
    
  </BrowserRouter>
  </StrictMode>,
)
