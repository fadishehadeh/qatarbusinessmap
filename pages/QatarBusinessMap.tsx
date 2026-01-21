import React, { useState } from 'react';
import { Search, ChevronDown, FileText, Building2, MapPin, BarChart3, Calendar, Download, Filter } from 'lucide-react';
import BusinessMapHeader from '../components/BusinessMapHeader';
import BusinessMapFooter from '../components/BusinessMapFooter';
import InteractiveQatarMap from '../components/InteractiveQatarMap';

const QatarBusinessMap: React.FC = () => {
  // Mode toggle: 'activities' or 'establishments'
  const [viewMode, setViewMode] = useState<'activities' | 'establishments'>('establishments');
  
  // Search type for establishments mode
  const [searchType, setSearchType] = useState<'commercial' | 'name' | 'license'>('commercial');
  
  // Filter states
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedISIC, setSelectedISIC] = useState('');
  const [selectedClassification, setSelectedClassification] = useState('');
  const [activityCode, setActivityCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      <BusinessMapHeader />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb and Mode Toggle */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-600">
                <span className="text-moci-maroon font-semibold">خريطة الأعمال لدولة قطر</span>
              </div>

              {/* Mode Toggle Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setViewMode('activities')}
                  className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                    viewMode === 'activities'
                      ? 'bg-moci-maroon text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  بحث عن الأنشطة التجارية
                </button>
                <button
                  onClick={() => setViewMode('establishments')}
                  className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                    viewMode === 'establishments'
                      ? 'bg-moci-maroon text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  بحث عن المنشآت التجارية
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MODE 1: SEARCH COMMERCIAL ACTIVITIES */}
        {viewMode === 'activities' && (
          <div className="container mx-auto px-4 py-8">
            {/* Filter Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-moci-maroon mb-6">بحث عن الأنشطة التجارية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Activity Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">اسم النشاط التجاري</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>استوديو تصوير</option>
                    <option>التصوير الفني</option>
                    <option>التصوير الفوتوغرافي</option>
                    <option>تحميض وطبع الأفلام الفوتوغرافية</option>
                    <option>تصوير الحفلات والمناسبات الشخصية</option>
                    <option>اصلاح الاثاث المنزلي</option>
                    <option>إعداد الديكورات الخاصة بالمعارض والمؤتمرات</option>
                  </select>
                </div>

                {/* Activity Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">كود النشاط التجاري</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={activityCode}
                      onChange={(e) => setActivityCode(e.target.value)}
                      placeholder="أدخل الكود"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                    />
                    <button className="px-4 py-2.5 bg-moci-gold text-white rounded-lg hover:bg-moci-gold/90 transition-colors text-sm whitespace-nowrap">
                      تفعيل
                    </button>
                  </div>
                </div>

                {/* Activity Groups */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">مجموعة الأنشطة التجارية</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>استوديوهات التصوير</option>
                    <option>اعمال الديكور</option>
                    <option>اعمال التجارة</option>
                    <option>الإدارة والاستشارات والدراسات بكافة أنواعها</option>
                    <option>الاستثمار التجاري</option>
                    <option>الاستثمار في الصناعة</option>
                    <option>الاستثمار في مجال النفط والغاز</option>
                    <option>الاستثمار في مجال التعدين</option>
                    <option>الاستثمار في مجال التكنولوجيا</option>
                  </select>
                </div>

                {/* ISIC */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">التصنيف الصناعي الدولي الموحد (ISIC)</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>ISIC Rev. 4</option>
                    <option>Section A - Agriculture, forestry and fishing</option>
                    <option>Section C - Manufacturing</option>
                    <option>Section G - Wholesale and retail trade</option>
                  </select>
                </div>
              </div>

              {/* More Info Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="px-6 py-2.5 bg-moci-maroon text-white rounded-lg hover:bg-moci-maroon/90 transition-colors font-semibold"
                >
                  المزيد من المعلومات
                </button>
              </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-moci-maroon text-white">
                    <tr>
                      <th className="px-6 py-4 text-right font-semibold">كود النشاط التجاري</th>
                      <th className="px-6 py-4 text-right font-semibold">الأنشطة</th>
                      <th className="px-6 py-4 text-right font-semibold">مجموعات</th>
                      <th className="px-6 py-4 text-right font-semibold">عدد المنشآت التجارية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7420</td>
                      <td className="px-6 py-4">استوديو تصوير</td>
                      <td className="px-6 py-4">استوديوهات التصوير</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">245</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7421</td>
                      <td className="px-6 py-4">التصوير الفني</td>
                      <td className="px-6 py-4">استوديوهات التصوير</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">189</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7422</td>
                      <td className="px-6 py-4">التصوير الفوتوغرافي</td>
                      <td className="px-6 py-4">استوديوهات التصوير</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">312</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7423</td>
                      <td className="px-6 py-4">تحميض وطبع الأفلام الفوتوغرافية</td>
                      <td className="px-6 py-4">استوديوهات التصوير</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">87</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7424</td>
                      <td className="px-6 py-4">تصوير الحفلات والمناسبات الشخصية</td>
                      <td className="px-6 py-4">استوديوهات التصوير</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">156</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">9520</td>
                      <td className="px-6 py-4">اصلاح الاثاث المنزلي</td>
                      <td className="px-6 py-4">اعمال الديكور</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">423</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">7410</td>
                      <td className="px-6 py-4">إعداد الديكورات الخاصة بالمعارض والمؤتمرات</td>
                      <td className="px-6 py-4">اعمال الديكور</td>
                      <td className="px-6 py-4 font-semibold text-moci-maroon">298</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  عرض 1-7 من 150 نشاط
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">السابق</button>
                  <button className="px-4 py-2 bg-moci-maroon text-white rounded-lg text-sm">1</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">2</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">3</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">التالي</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: SEARCH COMMERCIAL ESTABLISHMENTS */}
        {viewMode === 'establishments' && (
          <div className="container mx-auto px-4 py-8">
            {/* Search Type and Filters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-moci-maroon mb-6">بحث عن المنشآت التجارية</h2>

              {/* Search Type Radio Buttons */}
              <div className="flex flex-wrap gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="commercial"
                    checked={searchType === 'commercial'}
                    onChange={() => setSearchType('commercial')}
                    className="w-4 h-4 text-moci-maroon"
                  />
                  <span className="text-sm font-medium">رقم السجل التجاري</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="name"
                    checked={searchType === 'name'}
                    onChange={() => setSearchType('name')}
                    className="w-4 h-4 text-moci-maroon"
                  />
                  <span className="text-sm font-medium">اسم المنشأة</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="license"
                    checked={searchType === 'license'}
                    onChange={() => setSearchType('license')}
                    className="w-4 h-4 text-moci-maroon"
                  />
                  <span className="text-sm font-medium">رقم الرخصة التجارية</span>
                </label>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    searchType === 'commercial' ? 'أدخل رقم السجل التجاري' :
                    searchType === 'name' ? 'أدخل اسم المنشأة' :
                    'أدخل رقم الرخصة التجارية'
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Commercial Activities */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الأنشطة التجارية</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>استوديو تصوير</option>
                    <option>التصوير الفني</option>
                    <option>التصوير الفوتوغرافي</option>
                    <option>اصلاح الاثاث المنزلي</option>
                  </select>
                </div>

                {/* Classification */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">التصنيف</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>Micro</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>

                {/* Activity Groups */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">مجموعات الأنشطة</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>استوديوهات التصوير</option>
                    <option>اعمال الديكور</option>
                    <option>اعمال التجارة</option>
                  </select>
                </div>

                {/* ISIC */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ISIC</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moci-maroon">
                    <option value="">الكل</option>
                    <option>ISIC Rev. 4</option>
                    <option>Section A</option>
                    <option>Section C</option>
                  </select>
                </div>
              </div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-moci-maroon">
                <div className="flex items-center justify-between mb-2">
                  <Building2 className="text-moci-maroon" size={32} />
                </div>
                <div className="text-3xl font-bold text-moci-maroon mb-1">212,390</div>
                <div className="text-sm text-gray-600 font-medium">إجمالي عدد المنشآت التجارية</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="text-green-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-green-500 mb-1">107,279</div>
                <div className="text-sm text-gray-600 font-medium">الرخص / المنشآت النشطة</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <Building2 className="text-blue-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-500 mb-1">13K</div>
                <div className="text-sm text-gray-600 font-medium">المنشآت المهنية الحديثة</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="text-orange-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-1">0</div>
                <div className="text-sm text-gray-600 font-medium">المنشآت الحديثة</div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mb-8">
              <InteractiveQatarMap />
            </div>

            {/* Analytics & Charts Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-moci-maroon mb-6">التحليلات والإحصائيات</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Chart 1: Licenses by Municipality */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">عدد التراخيص التجارية حسب البلدية</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'الدوحة', value: 85420 },
                      { name: 'الريان', value: 42150 },
                      { name: 'الوكرة', value: 28340 },
                      { name: 'أم صلال', value: 15280 },
                      { name: 'الخور', value: 12450 },
                      { name: 'الشمال', value: 8920 },
                      { name: 'الضعاين', value: 6850 },
                      { name: 'الشحانية', value: 4980 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.name}</span>
                          <span className="text-sm font-bold text-moci-maroon">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-moci-maroon to-moci-gold h-2.5 rounded-full"
                            style={{ width: `${(item.value / 85420) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart 2: Licenses by Duration */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">التراخيص التجارية حسب بداية ونهاية الرخص</h4>
                  <div className="space-y-3">
                    {[
                      { range: '0-5 سنوات', value: 45230 },
                      { range: '5-10 سنوات', value: 38150 },
                      { range: '10-15 سنة', value: 28940 },
                      { range: '15-20 سنة', value: 18670 },
                      { range: '20+ سنة', value: 12340 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.range}</span>
                          <span className="text-sm font-bold text-moci-maroon">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full"
                            style={{ width: `${(item.value / 45230) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart 3: Expired Registrations */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">عدد السجلات التجارية المنتهية خلال آخر 5 سنوات</h4>
                  <div className="space-y-3">
                    {[
                      { year: '2024', value: 3420 },
                      { year: '2023', value: 4150 },
                      { year: '2022', value: 3890 },
                      { year: '2021', value: 4520 },
                      { year: '2020', value: 3980 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.year}</span>
                          <span className="text-sm font-bold text-red-600">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-red-500 to-red-300 h-2.5 rounded-full"
                            style={{ width: `${(item.value / 4520) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart 4: New Registrations */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">عدد السجلات التجارية الجديدة خلال آخر 5 سنوات</h4>
                  <div className="space-y-3">
                    {[
                      { year: '2024', value: 12420 },
                      { year: '2023', value: 15150 },
                      { year: '2022', value: 13890 },
                      { year: '2021', value: 11520 },
                      { year: '2020', value: 9980 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.year}</span>
                          <span className="text-sm font-bold text-green-600">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full"
                            style={{ width: `${(item.value / 15150) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Table: Latest Registered Commercial Establishments */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-moci-maroon text-white px-6 py-4">
                <h3 className="text-xl font-bold">أحدث المنشآت التجارية المسجلة</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">اسم المنشأة التجارية</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">الشكل القانوني</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">رقم السجل التجاري</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ انتهاء السجل</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">حالة السجل</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">رقم الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ انتهاء الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">حالة الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">التصنيف</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ التصنيف</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">شركة الخليج للتجارة</td>
                      <td className="px-4 py-3 text-sm">شركة ذات مسؤولية محدودة</td>
                      <td className="px-4 py-3 text-sm">CR-2024-12345</td>
                      <td className="px-4 py-3 text-sm">2025-12-31</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                      <td className="px-4 py-3 text-sm">LIC-2024-98765</td>
                      <td className="px-4 py-3 text-sm">2025-12-31</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                      <td className="px-4 py-3 text-sm">Small</td>
                      <td className="px-4 py-3 text-sm">2024-01-15</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">مؤسسة النور للخدمات</td>
                      <td className="px-4 py-3 text-sm">مؤسسة فردية</td>
                      <td className="px-4 py-3 text-sm">CR-2024-12346</td>
                      <td className="px-4 py-3 text-sm">2025-11-30</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                      <td className="px-4 py-3 text-sm">LIC-2024-98766</td>
                      <td className="px-4 py-3 text-sm">2025-11-30</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                      <td className="px-4 py-3 text-sm">Micro</td>
                      <td className="px-4 py-3 text-sm">2024-01-14</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">شركة الأمل للاستثمار</td>
                      <td className="px-4 py-3 text-sm">شركة مساهمة</td>
                      <td className="px-4 py-3 text-sm">CR-2024-12347</td>
                      <td className="px-4 py-3 text-sm">2024-06-30</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">مشطوب</span></td>
                      <td className="px-4 py-3 text-sm">LIC-2024-98767</td>
                      <td className="px-4 py-3 text-sm">2024-06-30</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">منتهي</span></td>
                      <td className="px-4 py-3 text-sm">Medium</td>
                      <td className="px-4 py-3 text-sm">2024-01-13</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table: Latest Licensed Commercial Activities */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-moci-maroon text-white px-6 py-4">
                <h3 className="text-xl font-bold">أحدث الأنشطة التجارية المرخصة</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">النشاط التجاري</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">الشكل القانوني</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">رقم الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ إصدار الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ انتهاء الرخصة</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">حالة الرخصة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">استوديو تصوير</td>
                      <td className="px-4 py-3 text-sm">مؤسسة فردية</td>
                      <td className="px-4 py-3 text-sm">LIC-2024-10001</td>
                      <td className="px-4 py-3 text-sm">2024-01-15</td>
                      <td className="px-4 py-3 text-sm">2025-01-15</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">التصوير الفوتوغرافي</td>
                      <td className="px-4 py-3 text-sm">شركة ذات مسؤولية محدودة</td>
                      <td className="px-4 py-3 text-sm">LIC-2024-10002</td>
                      <td className="px-4 py-3 text-sm">2024-01-14</td>
                      <td className="px-4 py-3 text-sm">2025-01-14</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">اصلاح الاثاث المنزلي</td>
                      <td className="px-4 py-3 text-sm">مؤسسة فردية</td>
                      <td className="px-4 py-3 text-sm">LIC-2024-10003</td>
                      <td className="px-4 py-3 text-sm">2024-01-13</td>
                      <td className="px-4 py-3 text-sm">2025-01-13</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">نشط</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <BusinessMapFooter />
    </>
  );
};

export default QatarBusinessMap;


