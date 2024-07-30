import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
    "width": "1150",
          "height": "680",
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "60",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": false,
        "hotlist": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    // Append the script to the container
    containerRef.current.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
    </div>
  );
};

export default memo(TradingViewWidget);
