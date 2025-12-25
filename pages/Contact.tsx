import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl text-white/90 max-w-3xl">
             لمزيد من التفاصيل اتصل بنا
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">تفاصيل الاتصال</h2>
            
            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-moci-maroon text-white p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">الهاتف</h3>
                <a href="tel:16001" className="text-2xl font-bold text-moci-maroon hover:underline">
                  16001
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-moci-maroon text-white p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
                <a 
                  href="mailto:nationalproduct@moci.gov.qa" 
                  className="text-lg text-moci-maroon hover:underline break-all"
                >
                  nationalproduct@moci.gov.qa
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-moci-maroon text-white p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">العنوان</h3>
                <p className="text-gray-600 leading-relaxed">
                  وزارة التجارة والصناعة<br />
                  الدوحة، دولة قطر
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">ساعات العمل</h3>
              <p className="text-gray-600">
                الأحد - الخميس: 7:00 صباحاً - 2:00 مساءً
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                  placeholder="+974 XXXX XXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                  الموضوع <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moci-maroon"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="general">استفسار عام</option>
                  <option value="product">استفسار عن المنتجات</option>
                  <option value="services">استفسار عن الخدمات</option>
                  <option value="complaint">شكوى</option>
                  <option value="suggestion">اقتراح</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  الرسالة <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moci-maroon resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-moci-maroon text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-moci-lightMaroon transition-colors flex items-center justify-center gap-3"
              >
                <Send size={20} />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6087087087087!2d51.5310!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sMinistry%20of%20Commerce%20and%20Industry!5e0!3m2!1sen!2sqa!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع وزارة التجارة والصناعة"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

