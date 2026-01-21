import React, { useState } from 'react';
import { ChevronUp, ChevronDown, FileText } from 'lucide-react';

interface Establishment {
  name: string;
  legalForm: string;
  commercialRegNo: string;
  regExpiryDate: string;
  regStatus: 'نشط' | 'مشطوب';
  licenseNo: string;
  licenseExpiryDate: string;
  licenseStatus: 'نشط' | 'منتهي';
  classification: 'Micro' | 'Small' | 'Medium' | 'Large';
  classificationDate: string;
}

interface Activity {
  activity: string;
  legalForm: string;
  licenseNo: string;
  issueDate: string;
  expiryDate: string;
  status: 'نشط' | 'منتهي';
  notes?: string;
}

interface DataTablesModuleProps {
  filters?: {
    municipality?: string | null;
    year?: string | null;
  };
}

const DataTablesModule: React.FC<DataTablesModuleProps> = ({ filters }) => {
  const [establishmentsPage, setEstablishmentsPage] = useState(1);
  const [activitiesPage, setActivitiesPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const itemsPerPage = 10;

  // Sample data for establishments
  const establishmentsData: Establishment[] = [
    {
      name: 'شركة الخليج للتجارة',
      legalForm: 'شركة ذات مسؤولية محدودة',
      commercialRegNo: 'CR-2024-12345',
      regExpiryDate: '2025-12-31',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98765',
      licenseExpiryDate: '2025-12-31',
      licenseStatus: 'نشط',
      classification: 'Small',
      classificationDate: '2024-01-15'
    },
    {
      name: 'مؤسسة النور للخدمات',
      legalForm: 'مؤسسة فردية',
      commercialRegNo: 'CR-2024-12346',
      regExpiryDate: '2025-11-30',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98766',
      licenseExpiryDate: '2025-11-30',
      licenseStatus: 'نشط',
      classification: 'Micro',
      classificationDate: '2024-01-14'
    },
    {
      name: 'شركة الأمل للاستثمار',
      legalForm: 'شركة مساهمة',
      commercialRegNo: 'CR-2024-12347',
      regExpiryDate: '2024-06-30',
      regStatus: 'مشطوب',
      licenseNo: 'LIC-2024-98767',
      licenseExpiryDate: '2024-06-30',
      licenseStatus: 'منتهي',
      classification: 'Medium',
      classificationDate: '2024-01-13'
    },
    {
      name: 'مؤسسة الفجر التجارية',
      legalForm: 'مؤسسة فردية',
      commercialRegNo: 'CR-2024-12348',
      regExpiryDate: '2026-03-15',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98768',
      licenseExpiryDate: '2026-03-15',
      licenseStatus: 'نشط',
      classification: 'Small',
      classificationDate: '2024-01-12'
    },
    {
      name: 'شركة البحر للتطوير',
      legalForm: 'شركة ذات مسؤولية محدودة',
      commercialRegNo: 'CR-2024-12349',
      regExpiryDate: '2025-09-20',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98769',
      licenseExpiryDate: '2025-09-20',
      licenseStatus: 'نشط',
      classification: 'Large',
      classificationDate: '2024-01-11'
    },
    {
      name: 'مؤسسة الشروق للمقاولات',
      legalForm: 'مؤسسة فردية',
      commercialRegNo: 'CR-2024-12350',
      regExpiryDate: '2025-07-10',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98770',
      licenseExpiryDate: '2025-07-10',
      licenseStatus: 'نشط',
      classification: 'Medium',
      classificationDate: '2024-01-10'
    },
    {
      name: 'شركة النجاح التجارية',
      legalForm: 'شركة تضامن',
      commercialRegNo: 'CR-2024-12351',
      regExpiryDate: '2024-12-31',
      regStatus: 'مشطوب',
      licenseNo: 'LIC-2024-98771',
      licenseExpiryDate: '2024-12-31',
      licenseStatus: 'منتهي',
      classification: 'Small',
      classificationDate: '2024-01-09'
    },
    {
      name: 'مؤسسة الأفق للاستشارات',
      legalForm: 'مؤسسة فردية',
      commercialRegNo: 'CR-2024-12352',
      regExpiryDate: '2026-05-25',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98772',
      licenseExpiryDate: '2026-05-25',
      licenseStatus: 'نشط',
      classification: 'Micro',
      classificationDate: '2024-01-08'
    },
    {
      name: 'شركة الرؤية للتكنولوجيا',
      legalForm: 'شركة ذات مسؤولية محدودة',
      commercialRegNo: 'CR-2024-12353',
      regExpiryDate: '2025-10-15',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98773',
      licenseExpiryDate: '2025-10-15',
      licenseStatus: 'نشط',
      classification: 'Medium',
      classificationDate: '2024-01-07'
    },
    {
      name: 'مؤسسة الإبداع للتصميم',
      legalForm: 'مؤسسة فردية',
      commercialRegNo: 'CR-2024-12354',
      regExpiryDate: '2026-02-28',
      regStatus: 'نشط',
      licenseNo: 'LIC-2024-98774',
      licenseExpiryDate: '2026-02-28',
      licenseStatus: 'نشط',
      classification: 'Small',
      classificationDate: '2024-01-06'
    },
  ];

  // Sample data for activities
  const activitiesData: Activity[] = [
    {
      activity: 'استوديو تصوير',
      legalForm: 'مؤسسة فردية',
      licenseNo: 'LIC-2024-10001',
      issueDate: '2024-01-15',
      expiryDate: '2025-01-15',
      status: 'نشط',
      notes: 'تجديد تلقائي'
    },
    {
      activity: 'التصوير الفوتوغرافي',
      legalForm: 'شركة ذات مسؤولية محدودة',
      licenseNo: 'LIC-2024-10002',
      issueDate: '2024-01-14',
      expiryDate: '2025-01-14',
      status: 'نشط'
    },
    {
      activity: 'اصلاح الاثاث المنزلي',
      legalForm: 'مؤسسة فردية',
      licenseNo: 'LIC-2024-10003',
      issueDate: '2024-01-13',
      expiryDate: '2025-01-13',
      status: 'نشط'
    },
    {
      activity: 'إعداد الديكورات الخاصة بالمعارض',
      legalForm: 'شركة تضامن',
      licenseNo: 'LIC-2024-10004',
      issueDate: '2024-01-12',
      expiryDate: '2024-07-12',
      status: 'منتهي',
      notes: 'يتطلب تجديد'
    },
    {
      activity: 'تحميض وطبع الأفلام الفوتوغرافية',
      legalForm: 'مؤسسة فردية',
      licenseNo: 'LIC-2024-10005',
      issueDate: '2024-01-11',
      expiryDate: '2025-01-11',
      status: 'نشط'
    },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  const SortIcon: React.FC<{ column: string }> = ({ column }) => {
    if (sortColumn !== column) {
      return <ChevronDown size={16} className="text-gray-400" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp size={16} className="text-moci-maroon" /> : 
      <ChevronDown size={16} className="text-moci-maroon" />;
  };

  const StatusBadge: React.FC<{ status: 'نشط' | 'مشطوب' | 'منتهي' }> = ({ status }) => {
    const colors = {
      'نشط': 'bg-green-100 text-green-800',
      'مشطوب': 'bg-red-100 text-red-800',
      'منتهي': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
        {status}
      </span>
    );
  };

  const Pagination: React.FC<{
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
  }> = ({ currentPage, totalItems, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    return (
      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-600">
          عرض {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} من {totalItems}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            السابق
          </button>
          {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === page
                    ? 'bg-moci-maroon text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            التالي
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* TABLE A: Latest Registered Commercial Establishments */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-moci-maroon text-white px-6 py-4 flex items-center gap-3">
          <FileText size={24} />
          <h3 className="text-xl font-bold">أحدث المنشآت التجارية المسجلة</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b-2 border-gray-200 sticky top-0">
              <tr>
                <th
                  className="px-4 py-3 text-right text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>اسم المنشأة التجارية</span>
                    <SortIcon column="name" />
                  </div>
                </th>
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
              {establishmentsData
                .slice((establishmentsPage - 1) * itemsPerPage, establishmentsPage * itemsPerPage)
                .map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.legalForm}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{item.commercialRegNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.regExpiryDate}</td>
                    <td className="px-4 py-3"><StatusBadge status={item.regStatus} /></td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{item.licenseNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.licenseExpiryDate}</td>
                    <td className="px-4 py-3"><StatusBadge status={item.licenseStatus} /></td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                        {item.classification}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.classificationDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={establishmentsPage}
          totalItems={establishmentsData.length}
          onPageChange={setEstablishmentsPage}
        />
      </div>

      {/* TABLE B: Latest Licensed Commercial Activities */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-moci-maroon text-white px-6 py-4 flex items-center gap-3">
          <FileText size={24} />
          <h3 className="text-xl font-bold">أحدث الأنشطة التجارية المرخصة</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b-2 border-gray-200 sticky top-0">
              <tr>
                <th
                  className="px-4 py-3 text-right text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('activity')}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>النشاط التجاري</span>
                    <SortIcon column="activity" />
                  </div>
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">الشكل القانوني</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">رقم الرخصة</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ إصدار الرخصة</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">تاريخ انتهاء الرخصة</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">حالة الرخصة</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">ملاحظات قانونية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activitiesData
                .slice((activitiesPage - 1) * itemsPerPage, activitiesPage * itemsPerPage)
                .map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.activity}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.legalForm}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{item.licenseNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.issueDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.expiryDate}</td>
                    <td className="px-4 py-3"><StatusBadge status={item.status} /></td>
                    <td className="px-4 py-3 text-sm text-gray-500 italic">{item.notes || '-'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={activitiesPage}
          totalItems={activitiesData.length}
          onPageChange={setActivitiesPage}
        />
      </div>

      {/* Empty State (if no data) */}
      {establishmentsData.length === 0 && activitiesData.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <FileText size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-600 mb-2">لا توجد بيانات متاحة</h3>
          <p className="text-gray-500">يرجى تعديل معايير البحث أو المرشحات</p>
        </div>
      )}
    </div>
  );
};

export default DataTablesModule;

