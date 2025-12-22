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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Conditional Inputs based on Tab */}
            {activeTab === SearchTab.Activity && (
              <>
                {/* Row 1: Activity Type */}
                <div className="md:col-span-12 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">نوع النشاط</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="activityType"
                        value="activity"
                        defaultChecked
                        className="w-4 h-4 text-moci-maroon focus:ring-moci-maroon"
                      />
                      <span className="text-gray-700">بحث بالنشاط</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="activityType"
                        value="mainAndSub"
                        className="w-4 h-4 text-moci-maroon focus:ring-moci-maroon"
                      />
                      <span className="text-gray-700">بحث بالنشاط</span>
                    </label>
                  </div>
                </div>

                {/* Row 2: ISIC Classifications */}
                <div className="md:col-span-6 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">التصنيف الرئيسي (ISIC2)</label>
                  <input
                    type="text"
                    placeholder="نشاط رئيسي و فرعي"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>
                <div className="md:col-span-6 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">التصنيف الفرعي (ISIC4)</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>

                {/* Row 3: Factory Name */}
                <div className="md:col-span-12 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">اسم المصنع</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>
              </>
            )}

            {activeTab === SearchTab.Product && (
              <>
                <div className="md:col-span-12 space-y-2">
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
                <div className="md:col-span-12 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">اسم المصنع</label>
                  <input
                    type="text"
                    placeholder="ابحث باسم المصنع..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moci-maroon focus:border-transparent outline-none"
                  />
                </div>
              </>
            )}

          </div>

          {/* Action Button - Positioned at bottom left */}
          <div className="mt-6 flex justify-start">
            <button className="bg-moci-maroon text-white px-8 py-3 rounded-lg font-bold hover:bg-moci-lightMaroon transition-colors flex items-center gap-2">
              <Search size={20} />
              بحث
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;