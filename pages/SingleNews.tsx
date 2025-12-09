import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';
import dohaImage from '../doha.png';

const SingleNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy news data - in a real app, this would come from an API
  const newsArticles = [
    {
      id: 1,
      title: 'وزارة التجارة والصناعة تطلق مبادرة جديدة لدعم المنتجات الوطنية',
      content: `
        <p>أعلنت وزارة التجارة والصناعة عن إطلاق مبادرة جديدة تهدف إلى تعزيز المنتجات الوطنية القطرية في الأسواق المحلية والعالمية، وذلك في إطار رؤية قطر 2030 للتنويع الاقتصادي.</p>
        
        <p>وقال سعادة الوزير في كلمته خلال حفل الإطلاق: "تأتي هذه المبادرة في إطار جهود الوزارة المستمرة لدعم القطاع الصناعي الوطني وتعزيز تنافسية المنتجات القطرية في الأسواق المحلية والعالمية."</p>
        
        <p>وتتضمن المبادرة عدة محاور رئيسية منها:</p>
        <ul>
          <li>تقديم الدعم الفني والاستشاري للمصانع الوطنية</li>
          <li>تسهيل إجراءات الحصول على شهادات الجودة العالمية</li>
          <li>تنظيم معارض محلية ودولية للمنتجات القطرية</li>
          <li>إطلاق حملات تسويقية لتعزيز الوعي بالمنتجات الوطنية</li>
        </ul>
        
        <p>وأضاف سعادته: "نحن ملتزمون بتوفير كافة أشكال الدعم للقطاع الصناعي الوطني، ونسعى لجعل المنتجات القطرية خياراً أول للمستهلكين محلياً ودولياً."</p>
        
        <p>من المتوقع أن تستفيد من هذه المبادرة أكثر من 200 منشأة صناعية وطنية خلال العام الأول من إطلاقها.</p>
      `,
      date: '2024-12-08',
      category: 'أخبار الوزارة',
      image: '/placeholder-news.jpg'
    },
    {
      id: 2,
      title: 'افتتاح مصنع جديد للصناعات الغذائية في المنطقة الصناعية',
      content: `
        <p>شهدت المنطقة الصناعية في قطر افتتاح مصنع جديد للصناعات الغذائية بطاقة إنتاجية تبلغ 5000 طن سنوياً، مما يعزز الأمن الغذائي في الدولة.</p>
        
        <p>يأتي هذا المصنع ضمن خطة الدولة لتحقيق الاكتفاء الذاتي في المنتجات الغذائية الأساسية، ويوفر 150 فرصة عمل للمواطنين والمقيمين.</p>
        
        <p>وأكد مدير المصنع أن المنشأة تستخدم أحدث التقنيات في مجال الصناعات الغذائية، وتلتزم بأعلى معايير الجودة والسلامة الغذائية.</p>
      `,
      date: '2024-12-07',
      category: 'الصناعة',
      image: '/placeholder-news.jpg'
    }
  ];

  const article = newsArticles.find(a => a.id === parseInt(id || '1')) || newsArticles[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-moci-maroon">الرئيسية</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-moci-maroon">الأخبار</Link>
            <span>/</span>
            <span className="text-gray-800">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-moci-maroon hover:underline mb-6"
          >
            <ArrowRight size={20} />
            <span>العودة إلى الأخبار</span>
          </Link>

          {/* Article Card */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Article Image */}
            <div className="relative h-96 bg-gray-200">
              <div className="absolute top-4 right-4 bg-moci-maroon text-white px-4 py-2 rounded-full text-sm font-bold">
                {article.category}
              </div>
              {/* Doha image */}
              <img
                src={dohaImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={18} />
                  <span>{new Date(article.date).toLocaleDateString('ar-QA', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <button className="flex items-center gap-2 text-moci-maroon hover:underline">
                  <Share2 size={18} />
                  <span>مشاركة</span>
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {article.title}
              </h1>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none text-right" 
                dir="rtl"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#374151'
                }}
              />
            </div>
          </article>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">أخبار ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={dohaImage}
                    alt={relatedArticle.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{new Date(relatedArticle.date).toLocaleDateString('ar-QA')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

