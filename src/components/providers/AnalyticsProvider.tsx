import React, { useEffect } from "react";
import { initGA, logPageView } from "../../utils/analytics";

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Log initial page view
    logPageView(window.location.pathname + window.location.search);

    // Listen for route changes (if using client-side routing)
    const handleRouteChange = () => {
      logPageView(window.location.pathname + window.location.search);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
