import React from 'react';
import { Link } from 'react-router-dom';

const IndustrialServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدمات الصناعة</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            منصة خدمات الصناعية، الواجهة الذكية الداعمة للمستثمر في القطاع الصناعي حيث يتم تقديم الخدمات الصناعية في مختلف مراحل المشروع الصناعي
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-700 leading-relaxed mb-6">
              تعتبر منصة خدمات الصناعية، الواجهة الذكية الداعمة للمستثمر في القطاع الصناعي حيث يتم تقديم الخدمات الصناعية في مختلف مراحل المشروع الصناعي
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              يمكن التقديم على الخدمات من خلال الرابط :{' '}
              <a href="#" className="text-blue-600 hover:underline">
                التقديم على الخدمات الصناعية
              </a>
            </p>

            <h2 className="text-2xl font-bold text-moci-maroon mb-6">قائمة الخدمات :</h2>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة الموافقة المبدئية على إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تجديد الموافقة المبدئية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إلغاء الموافقة المبدئية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة ترخيص إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تجديد ترخيص إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إلغاء ترخيص إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تفعيل ترخيص إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إعادة تفعيل ترخيص إقامة مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة ترخيص تشغيل مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تجديد ترخيص تشغيل مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إلغاء ترخيص تشغيل مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إعادة تفعيل ترخيص تشغيل مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة عدم ممانعة من تغيير اسم المشروع الصناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة عدم ممانعة من تعديل بيانات الشركة للمشروع الصناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة عدم ممانعة من تغيير موقع المشروع الصناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة عدم ممانعة من إضافة نشاط المشروع الصناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تعديل بيانات المنشأة الصناعية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة شعار المنتج الوطني</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمات شكاوى الممارسات التجارة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تعديل الرمز المنسق من HS8 إلى HS12</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة زيادة الطاقة الإنتاجية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة توريد الكهرباء بأسعار تشجيعية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة إعطاء حركي لمشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة تغيير موقع مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة توقيف مشروع صناعي</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-moci-maroon mt-1">•</span>
                <span>خدمة عدم ممانعة من تغيير اسم المشروع الصناعي من المشروع الصناعي</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialServices;

