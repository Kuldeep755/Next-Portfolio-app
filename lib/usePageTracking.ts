import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-0D82LMBLBW"; // Replace with your actual Measurement ID

export const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_TRACKING_ID || typeof window === "undefined") return;

    const handlePageView = () => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    };

    if (!window.gtag) {
      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `;
      document.head.appendChild(script2);
    }

    handlePageView();
  }, [pathname]);
};
