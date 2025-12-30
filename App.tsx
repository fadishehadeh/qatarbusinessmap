import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import IndustrialServices from './pages/IndustrialServices';
import SuccessStories from './pages/SuccessStories';
import NationalPrograms from './pages/NationalPrograms';
import Regulations from './pages/Regulations';
import TradeReports from './pages/TradeReports';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Contact from './pages/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'moci2025') {
      setIsAuthenticated(true);
    } else {
      setError('كلمة المرور غير صحيحة');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans" dir="rtl">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-moci-maroon">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-moci-maroon/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8A1538" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">وزارة التجارة والصناعة</h1>
            <p className="text-gray-500 font-medium">بوابة المنتج القطري (نسخة تجريبية)</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none transition-all text-left"
                placeholder="••••••••"
                dir="ltr"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-moci-maroon text-white py-4 rounded-lg font-bold text-lg hover:bg-moci-lightMaroon hover:shadow-lg transition-all duration-300"
            >
              دخول النظام
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">جميع الحقوق محفوظة © 2025</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industrial-services" element={<IndustrialServices />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/national-programs" element={<NationalPrograms />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/trade-reports" element={<TradeReports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;