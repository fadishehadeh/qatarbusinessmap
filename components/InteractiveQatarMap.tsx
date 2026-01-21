import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface Municipality {
  id: string;
  name: string;
  nameEn: string;
  establishments: number;
  lat: number;
  lng: number;
  size: 'large' | 'medium' | 'small';
}

interface InteractiveQatarMapProps {
  onMunicipalitySelect?: (municipalityId: string | null) => void;
  selectedMunicipality?: string | null;
}

const InteractiveQatarMap: React.FC<InteractiveQatarMapProps> = ({
  onMunicipalitySelect,
  selectedMunicipality
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const municipalities: Municipality[] = [
    { id: 'doha', name: 'الدوحة', nameEn: 'Doha', establishments: 85420, lat: 25.2854, lng: 51.5310, size: 'large' },
    { id: 'rayyan', name: 'الريان', nameEn: 'Al Rayyan', establishments: 42150, lat: 25.2522, lng: 51.4394, size: 'large' },
    { id: 'wakrah', name: 'الوكرة', nameEn: 'Al Wakrah', establishments: 28340, lat: 25.1716, lng: 51.6058, size: 'medium' },
    { id: 'umm-salal', name: 'أم صلال', nameEn: 'Umm Salal', establishments: 15280, lat: 25.4103, lng: 51.4064, size: 'medium' },
    { id: 'khor', name: 'الخور', nameEn: 'Al Khor', establishments: 12450, lat: 25.6805, lng: 51.4969, size: 'medium' },
    { id: 'shamal', name: 'الشمال', nameEn: 'Al Shamal', establishments: 8920, lat: 26.1292, lng: 51.2056, size: 'small' },
    { id: 'daayen', name: 'الضعاين', nameEn: 'Al Daayen', establishments: 6850, lat: 25.5783, lng: 51.4825, size: 'small' },
    { id: 'shahaniya', name: 'الشحانية', nameEn: 'Al Shahaniya', establishments: 4980, lat: 25.4111, lng: 51.1847, size: 'small' },
  ];

  const getMarkerColor = (establishments: number): string => {
    const maxEstablishments = 85420;
    const intensity = establishments / maxEstablishments;

    if (intensity > 0.7) return '#8A1538'; // Deep maroon
    if (intensity > 0.4) return '#A52A4A'; // Medium maroon
    if (intensity > 0.2) return '#C05468'; // Light maroon
    return '#D87E8F'; // Very light maroon
  };

  const getMarkerScale = (size: 'large' | 'medium' | 'small'): number => {
    switch (size) {
      case 'large': return 1.5;
      case 'medium': return 1.2;
      case 'small': return 1.0;
    }
  };

  const handleMunicipalityClick = (municipalityId: string) => {
    if (selectedMunicipality === municipalityId) {
      onMunicipalitySelect?.(null);
    } else {
      onMunicipalitySelect?.(municipalityId);
    }
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize Google Map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 25.3548, lng: 51.1839 }, // Center of Qatar
      zoom: 8,
      mapTypeId: 'roadmap',
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        }
      ]
    });

    googleMapRef.current = map;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for each municipality
    municipalities.forEach((municipality) => {
      const marker = new google.maps.Marker({
        position: { lat: municipality.lat, lng: municipality.lng },
        map: map,
        title: `${municipality.name} - ${municipality.establishments.toLocaleString()} منشأة`,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: getMarkerColor(municipality.establishments),
          fillOpacity: 0.85,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: getMarkerScale(municipality.size) * 8
        },
        animation: google.maps.Animation.DROP
      });

      // Info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: Arial, sans-serif; direction: rtl; text-align: right;">
            <h3 style="margin: 0 0 8px 0; color: #8A1538; font-size: 16px; font-weight: bold;">${municipality.name}</h3>
            <p style="margin: 0 0 4px 0; color: #666; font-size: 12px;">${municipality.nameEn}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
              <span style="color: #999; font-size: 11px;">عدد المنشآت:</span>
              <span style="color: #8A1538; font-size: 16px; font-weight: bold;">${municipality.establishments.toLocaleString()}</span>
            </div>
          </div>
        `
      });

      // Click event
      marker.addListener('click', () => {
        handleMunicipalityClick(municipality.id);
        infoWindow.open(map, marker);
      });

      // Hover effect
      marker.addListener('mouseover', () => {
        marker.setIcon({
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: getMarkerColor(municipality.establishments),
          fillOpacity: 1,
          strokeColor: '#C0A062',
          strokeWeight: 3,
          scale: getMarkerScale(municipality.size) * 10
        });
      });

      marker.addListener('mouseout', () => {
        const isSelected = selectedMunicipality === municipality.id;
        marker.setIcon({
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: getMarkerColor(municipality.establishments),
          fillOpacity: 0.85,
          strokeColor: isSelected ? '#C0A062' : '#FFFFFF',
          strokeWeight: isSelected ? 3 : 2,
          scale: getMarkerScale(municipality.size) * 8
        });
      });

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
    };
  }, [selectedMunicipality]);

  // Top 4 commercial activities data
  const topActivities = [
    { name: 'معلومات غير محددة (نشطة)', nameEn: '(Blank)', value: 15100, color: '#8A1538' },
    { name: 'انشاءات عامة (المباني)', nameEn: 'General Construction (Buildings)', value: 6100, color: '#9B2842' },
    { name: 'معلومات عامة الطبي', nameEn: 'General Medical Information', value: 3700, color: '#AC3B4C' },
    { name: 'معلومات غير محددة ومسجلة (الانشطة المالية المسجلة)', nameEn: 'Unspecified Registered Financial Activities', value: 1800, color: '#BD4E56' }
  ];

  const maxValue = 15100;

  return (
    <div className="space-y-6">
      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Side - Bar Chart Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-4">أكثر أربعة أنشطة تجارية استخداماً</h4>
          <div className="space-y-4">
            {topActivities.map((activity, index) => {
              const widthPercentage = (activity.value / maxValue) * 100;

              return (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-gray-700 block">{activity.name}</span>
                      <span className="text-xs text-gray-500">{activity.nameEn}</span>
                    </div>
                    <span className="text-sm font-bold text-moci-maroon">{(activity.value / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-4"
                      style={{
                        width: `${widthPercentage}%`,
                        backgroundColor: activity.color
                      }}
                    >
                      <span className="text-white text-sm font-bold">
                        {(activity.value / 1000).toFixed(1)}K
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Google Map Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-moci-maroon flex items-center gap-2">
              <MapPin size={24} />
              التوزيع الجغرافي للمنشآت التجارية
            </h3>
            {selectedMunicipality && (
              <button
                onClick={() => onMunicipalitySelect?.(null)}
                className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                إعادة تعيين التحديد
              </button>
            )}
          </div>

          <div
            ref={mapRef}
            className="w-full h-[490px] rounded-lg overflow-hidden border-2 border-gray-200"
          ></div>

          {/* Legend */}
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-moci-maroon rounded-full"></div>
              <span className="text-gray-600">كثافة عالية (&gt;60K)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#A52A4A] rounded-full"></div>
              <span className="text-gray-600">كثافة متوسطة (30K-60K)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#C05468] rounded-full"></div>
              <span className="text-gray-600">كثافة منخفضة (10K-30K)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#D87E8F] rounded-full"></div>
              <span className="text-gray-600">كثافة قليلة (&lt;10K)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveQatarMap;

