import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface AnalyticsChartsProps {
  onChartFilter?: (chartType: string, value: string | null) => void;
}

const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({ onChartFilter }) => {
  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Chart 1: Commercial Licenses by Municipality
  const municipalityData: ChartDataPoint[] = [
    { label: 'الدوحة', value: 85420 },
    { label: 'الريان', value: 42150 },
    { label: 'الوكرة', value: 28340 },
    { label: 'أم صلال', value: 15280 },
    { label: 'الخور', value: 12450 },
    { label: 'الشمال', value: 8920 },
    { label: 'الضعاين', value: 6850 },
    { label: 'الشحانية', value: 4980 },
  ].sort((a, b) => b.value - a.value);

  // Chart 2: License Duration Distribution
  const durationData: ChartDataPoint[] = [
    { label: '0-5 سنوات', value: 45230, color: '#8A1538' },
    { label: '5-10 سنوات', value: 38150, color: '#A52A4A' },
    { label: '10-15 سنة', value: 28940, color: '#C05468' },
    { label: '15-20 سنة', value: 18670, color: '#D87E8F' },
    { label: 'أكثر من 20', value: 12340, color: '#E8A0AD' },
  ];

  // Chart 3: Expired Commercial Registers (Last 5 Years)
  const expiredData: ChartDataPoint[] = [
    { label: '2020', value: 3980 },
    { label: '2021', value: 4520 },
    { label: '2022', value: 3890 },
    { label: '2023', value: 4150 },
    { label: '2024', value: 3420 },
  ];

  // Chart 4: New Commercial Registers (Last 5 Years)
  const newRegistersData: ChartDataPoint[] = [
    { label: '2020', value: 9980 },
    { label: '2021', value: 11520 },
    { label: '2022', value: 13890 },
    { label: '2023', value: 15150 },
    { label: '2024', value: 12420 },
  ];

  const handleBarClick = (chartType: string, label: string) => {
    if (chartType === 'municipality') {
      const newSelection = selectedMunicipality === label ? null : label;
      setSelectedMunicipality(newSelection);
      onChartFilter?.('municipality', newSelection);
    } else if (chartType === 'year') {
      const newSelection = selectedYear === label ? null : label;
      setSelectedYear(newSelection);
      onChartFilter?.('year', newSelection);
    }
  };

  const VerticalBarChart: React.FC<{
    data: ChartDataPoint[];
    title: string;
    chartType: string;
    color: string;
    selectedValue?: string | null;
  }> = ({ data, title, chartType, color, selectedValue }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-moci-maroon" />
          {title}
        </h4>
        <div className="flex items-end justify-between gap-2 h-64">
          {data.map((item, index) => {
            const heightPercentage = (item.value / maxValue) * 100;
            const isSelected = selectedValue === item.label;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center group">
                <div className="relative w-full flex-1 flex items-end justify-center">
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-moci-gold">{item.value.toLocaleString()}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  
                  {/* Bar */}
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 cursor-pointer ${
                      isSelected ? 'ring-2 ring-moci-gold ring-offset-2' : ''
                    }`}
                    style={{
                      height: `${heightPercentage}%`,
                      backgroundColor: item.color || color,
                      opacity: isSelected ? 1 : 0.85
                    }}
                    onClick={() => handleBarClick(chartType, item.label)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.label}: ${item.value.toLocaleString()}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleBarClick(chartType, item.label);
                      }
                    }}
                  >
                    {/* Value Label on Hover */}
                    <div className="hidden group-hover:flex items-center justify-center h-full">
                      <span className="text-white font-bold text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* X-axis Label */}
                <div className="mt-2 text-xs text-gray-600 text-center font-medium max-w-full overflow-hidden">
                  <div className="truncate">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const HorizontalBarChart: React.FC<{
    data: ChartDataPoint[];
    title: string;
  }> = ({ data, title }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-moci-maroon" />
          {title}
        </h4>
        <div className="space-y-4">
          {data.map((item, index) => {
            const widthPercentage = (item.value / maxValue) * 100;
            
            return (
              <div key={index} className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold text-moci-maroon">{item.value.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden relative">
                  <div
                    className="h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                    style={{
                      width: `${widthPercentage}%`,
                      backgroundColor: item.color || '#8A1538'
                    }}
                  >
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {widthPercentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-moci-maroon">التحليلات والإحصائيات</h3>
        {(selectedMunicipality || selectedYear) && (
          <button
            onClick={() => {
              setSelectedMunicipality(null);
              setSelectedYear(null);
              onChartFilter?.('clear', null);
            }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            مسح جميع التحديدات
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Licenses by Municipality */}
        <VerticalBarChart
          data={municipalityData}
          title="عدد التراخيص التجارية حسب البلدية"
          chartType="municipality"
          color="#8A1538"
          selectedValue={selectedMunicipality}
        />

        {/* Chart 2: License Duration Distribution */}
        <HorizontalBarChart
          data={durationData}
          title="التراخيص التجارية حسب بداية ونهاية الرخص"
        />

        {/* Chart 3: Expired Registers */}
        <VerticalBarChart
          data={expiredData}
          title="عدد السجلات التجارية المنتهية خلال آخر 5 سنوات"
          chartType="year"
          color="#DC2626"
          selectedValue={selectedYear}
        />

        {/* Chart 4: New Registers */}
        <VerticalBarChart
          data={newRegistersData}
          title="عدد السجلات التجارية الجديدة خلال آخر 5 سنوات"
          chartType="year"
          color="#16A34A"
          selectedValue={selectedYear}
        />
      </div>
    </div>
  );
};

export default AnalyticsCharts;

