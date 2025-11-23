import React, { useState } from 'react';
import { Search, Filter, Factory, Package, Activity } from 'lucide-react';

enum SearchTab {
  Activity = 'activity',
  Product = 'product',
  Factory = 'factory',
}

const SearchWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SearchTab>(SearchTab.Activity);

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Header/Title */}
        <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-moci-maroon">دليل المنتجات والمصنعين</h2>
          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
            قاعدة بيانات شاملة للصناعة القطرية
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50/50">
          <button
            onClick={() => setActiveTab(SearchTab.Activity)}
            className={`flex-1 py-4 px-6 text-center font-medium transition-all flex items-center justify-center gap-2
              ${activeTab === SearchTab.Activity 
                ? 'text-moci-maroon border-b-2 border-moci-maroon bg-white shadow-sm' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          >
            <Activity size={18} />
            <span>بحث بالنشاط</span>
          </button>
          
          <button
            onClick={() => setActiveTab(SearchTab.Product)}
            className={`flex-1 py-4 px-6 text-center font-medium transition-all flex items-center justify-center gap-2
              ${activeTab === SearchTab.Product 
                ? 'text-moci-maroon border-b-2 border-moci-maroon bg-white shadow-sm' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          >
            <Package size={18} />
            <span>بحث بالمنتج</span>
          </button>

          <button
            onClick={() => setActiveTab(SearchTab.Factory)}
            className={`flex-1 py-4 px-6 text-center font-medium transition-all flex items-center justify-center gap-2
              ${activeTab === SearchTab.Factory 
                ? 'text-moci-maroon border-b-2 border-moci-maroon bg-white shadow-sm' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          >
            <Factory size={18} />
            <span>بحث بالمصنع</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            
            {/* Conditional Inputs based on Tab */}
            {activeTab === SearchTab.Activity && (
              <>
                <div className="md:col-span-5 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">التصنيف الرئيسي (ISIC2)</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none bg-white">
                    <option>اختر التصنيف الرئيسي...</option>
                    <option>الصناعات التحويلية</option>
                    <option>التعدين واستغلال المحاجر</option>
                  </select>
                </div>
                <div className="md:col-span-5 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">التصنيف الفرعي (ISIC4)</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none bg-white">
                    <option>اختر التصنيف الفرعي...</option>
                    <option>صنع المنتجات الغذائية</option>
                    <option>صنع المشروبات</option>
                  </select>
                </div>
              </>
            )}

            {activeTab === SearchTab.Product && (
              <>
                <div className="md:col-span-10 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">اسم المنتج</label>
                  <input 
                    type="text" 
                    placeholder="ابحث عن منتج (مثال: ألبان، حديد، بلاستيك...)" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>
              </>
            )}

            {activeTab === SearchTab.Factory && (
               <>
                <div className="md:col-span-10 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">اسم المصنع</label>
                  <input 
                    type="text" 
                    placeholder="ابحث باسم المصنع..." 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="md:col-span-2 flex flex-col gap-2">
               <button className="w-full bg-moci-maroon text-white p-3 rounded-lg font-bold hover:bg-moci-lightMaroon transition-colors flex justify-center items-center gap-2">
                 <Search size={20} />
                 بحث
               </button>
               <button className="w-full text-xs text-gray-500 hover:text-moci-maroon flex justify-center items-center gap-1 mt-1">
                 <Filter size={12} />
                 مسح البحث
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;