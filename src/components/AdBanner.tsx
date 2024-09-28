import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdBannerProps {
  type: 'google' | 'meta';
  className?: string;
  adSlot?: string; // Google Ad Slot ID
  metaPlacementId?: string; // Meta Placement ID
}

export default function AdBanner({ type, className = '', adSlot, metaPlacementId }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === 'google' && adSlot) {
      try {
        // Load Google AdSense script
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.REACT_APP_GOOGLE_ADSENSE_ID}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        // Initialize ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('Error loading Google AdSense:', error);
      }
    } else if (type === 'meta' && metaPlacementId) {
      try {
        // Load Meta Ads script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbadnw60-tag.js';
        document.head.appendChild(script);

        // Initialize Meta ad
        window.fbAsyncInit = function() {
          window.fbq('init', process.env.REACT_APP_META_PIXEL_ID);
          window.fbq('track', 'PageView');
        };
      } catch (error) {
        console.error('Error loading Meta Ads:', error);
      }
    }
  }, [type, adSlot, metaPlacementId]);

  if (type === 'google' && adSlot) {
    return (
      <div className={`ad-container ${className}`} ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={process.env.REACT_APP_GOOGLE_ADSENSE_ID}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  if (type === 'meta' && metaPlacementId) {
    return (
      <div className={`ad-container ${className}`} ref={adRef}>
        <div
          className="fb-ad"
          data-placementid={metaPlacementId}
          data-format="native"
          data-testmode="false"
        />
      </div>
    );
  }

  // Fallback/placeholder for development
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        {type === 'google' ? (
          <div className="h-[100px] bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 flex items-center justify-center">
            <span className="font-medium">Google Ads Banner Space</span>
          </div>
        ) : (
          <div className="h-[100px] bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
            <span className="font-medium">Meta Ads Banner Space</span>
          </div>
        )}
      </div>
    </div>
  );
}