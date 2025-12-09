import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import dohaImage from '../doha.png';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const SuccessStories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 12;

  // Sample stories data - you can replace with actual data
  const stories: Story[] = [
    {
      id: 1,
      title: 'المصنع الحديد',
      description: 'كانت البداية بحلم ومكرة... مكرة وأحد من الطموح والرغبة في تقديم شيء مميز في عالم الصناعة. بدأت أولى خطوات التأسيس بتوثيق الشركة رسمياً، حيث تم تسجيل المصنع في السجل التجاري بتاريخ 30/10/2004 معلناً ...',
      image: '/placeholder-factory.jpg',
      category: 'صناعة'
    },
    // Add more stories as needed
  ];

  const totalPages = Math.ceil(stories.length / storiesPerPage);
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">قصص نجاح</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            تسلط قصص النجاح التي كتبتها مصانع مختلفة الضوء على إنجازاتها المتنوعة وتأثيرها الإيجابي على صناعاتها
          </p>
        </div>
      </div>

      {/* Add Success Story Button */}
      <div className="container mx-auto px-4 py-8">
        <button className="bg-moci-maroon text-white px-8 py-3 rounded-lg font-bold hover:bg-moci-lightMaroon transition-colors flex items-center gap-2">
          <span>إضافة قصص النجاح</span>
          <span className="text-2xl">+</span>
        </button>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Story Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span className="font-bold text-gray-800">{story.category}</span>
                </div>
                {/* Doha image */}
                <img
                  src={dohaImage}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {story.description}
                </p>
                <button className="text-moci-maroon font-bold hover:underline flex items-center gap-2">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={16} className="rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-600 hover:text-moci-maroon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            « التالي
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-600 hover:text-moci-maroon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            السابق »
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

