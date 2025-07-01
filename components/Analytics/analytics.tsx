'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Carica script GA dinamicamente
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-4ZW5XQSDEQ";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-4ZW5XQSDEQ');
  }, []);

  return null;
}
