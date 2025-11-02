import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const MEASUREMENT_ID = import.meta.env.VITE_GA_ID;
    if (!MEASUREMENT_ID || ["localhost", "127.0.0.1"].includes(location.hostname)) return;

    // ---- 1. Default consent BEFORE loading gtag.js
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
    });

    // ---- 2. Load gtag.js dynamically
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(s);

    // ---- 3. Configure GA after script inject
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID, { cookie_domain: "auto" });

    // ---- 4. Expose helpers for your consent banner
    window.grantAllConsent = () => {
      gtag("consent", "update", {
        ad_user_data: "granted",
        ad_personalization: "granted",
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    };
    window.rejectConsent = () => {
      gtag("consent", "update", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    };
  }, []);

  return null; // nothing visible
}