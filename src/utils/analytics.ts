// Google Analytics
export const initGA = (trackingId: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', trackingId);
};

// Page View
export const logPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID!, {
      page_path: path,
    });
  }
};

// Event
export const logEvent = (category: string, action: string, label?: string) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};