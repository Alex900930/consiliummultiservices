import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'
// 🔵 Meta Pixel
if (typeof window !== 'undefined') {
  !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  (window as any).fbq('init', '730161389707858');
  (window as any).fbq('track', 'PageView');
}

createRoot(document.getElementById("root")!).render(

    <Suspense fallback={<div>Cargando traducciones...</div>}>
      <App />
    </Suspense>


);
