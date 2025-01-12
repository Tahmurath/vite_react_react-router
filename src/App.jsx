import './App.css'
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";

const MainLayout = lazy(() => import('./layouts/MainLayout.jsx'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout.jsx'));

const Home = lazy(() => import('./pages/main/Home.jsx'));
const About = lazy(() => import('./pages/main/About.jsx'));

const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Panel = lazy(() => import('./pages/admin/Panel'));


function App() {

  return (
    <>
      <Routes>

          
          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<>...</>}><About /></Suspense>} />
          </Route>

          {/* Admin Layout Routes */}
          <Route path="/admin" element={<Suspense fallback={<>...</>}><AdminLayout /></Suspense>}>
            <Route path="dashboard" element={<Suspense fallback={<>...</>}><Dashboard /></Suspense>} />
            <Route path="panel" element={<Suspense fallback={<>...</>}><Panel /></Suspense>} />
          </Route>

          <Route path="*" element={<NoMatch />} />

      </Routes>
      
    </>
  )
}
const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default App
