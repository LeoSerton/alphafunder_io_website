import React, { useEffect } from 'react';
import './Symbols.css';
import JoinDiscordSection from '../components/JoinDiscordSection';
import { BecomeFundedSection } from './HomePage';

const Symbols = () => {
  useEffect(() => {
    const marketDataScriptContent = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "symbolsGroups": [
        {
          "name": "GOLD & SILVER",
          "originalName": "INDICES",
          "symbols": [
            { "name": "OANDA:XAUUSD", "displayName": "GOLD / USD" },
            { "name": "OANDA:XAUEUR", "displayName": "GOLD / EUR" },
            { "name": "OANDA:XAGUSD", "displayName": "SILVER / USD" },
            { "name": "OANDA:XAGEUR", "displayName": "SILVER / EUR" },
          ]
        },
        {
          "name": "Forex",
          "originalName": "Forex",
          "symbols": [
            { "name": "OANDA:AUDCAD", "displayName": "AUD / CAD" },
            { "name": "OANDA:AUDCHF", "displayName": "AUD / CHF" },
            { "name": "OANDA:AUDJPY", "displayName": "AUD / JPY" },
            { "name": "OANDA:AUDNZD", "displayName": "AUD / NZD" },
            { "name": "OANDA:AUDUSD", "displayName": "AUD / USD" },
            { "name": "OANDA:CADCHF", "displayName": "CAD / CHF" },
            { "name": "OANDA:CADJPY", "displayName": "CAD / JPY" },
            { "name": "OANDA:CHFJPY", "displayName": "CHF / JPY" },
            { "name": "OANDA:EURAUD", "displayName": "EUR / AUD" },
            { "name": "OANDA:EURCAD", "displayName": "EUR / CAD" },
            { "name": "OANDA:EURCHF", "displayName": "EUR / CHF" },
            { "name": "OANDA:EURGBP", "displayName": "EUR / GBP" },
            { "name": "OANDA:EURJPY", "displayName": "EUR / JPY" },
            { "name": "OANDA:EURNZD", "displayName": "EUR / NZD" },
            { "name": "OANDA:EURUSD", "displayName": "EUR / USD" },
            { "name": "OANDA:EURZAR", "displayName": "EUR / ZAR" },
            { "name": "OANDA:GBPAUD", "displayName": "GBP / AUD" },
            { "name": "OANDA:GBPCAD", "displayName": "GBP / CAD" },
            { "name": "OANDA:GBPCHF", "displayName": "GBP / CHF" },
            { "name": "OANDA:GBPJPY", "displayName": "GBP / JPY" },
            { "name": "OANDA:GBPNZD", "displayName": "GBP / NZD" },
            { "name": "OANDA:GBPUSD", "displayName": "GBP / USD" }
          ]
        },
        {
          "name": "Indices",
          "originalName": "Indices",
          "symbols": [
            { "name": "PEPPERSTONE:AUS200", "displayName": "Australia 200 Index" },
            { "name": "BLACKBULL:BRENT", "displayName": "Brent Crude Oil" },
            { "name": "OANDA:EU50EUR", "displayName": "EURO CDFs 50" },
            { "name": "TRADENATION:F40", "displayName": "France 40" },
            { "name": "PEPPERSTONE:GER40", "displayName": "German 40 Index" },
            { "name": "PEPPERSTONE:HK50", "displayName": "Hong Kong 50 Index" },
            { "name": "PEPPERSTONE:JPN225", "displayName": "Nikkei 225 Index" },
            { "name": "OANDA:NATGASUSD", "displayName": "Natural Gas (USD)" },
            { "name": "THINKMARKETS:SPAIN35", "displayName": "Spain 35 Cash" },
            { "name": "PEPPERSTONE:UK100", "displayName": "UK 100 Index" },
            { "name": "PEPPERSTONE:US30", "displayName": "US Wall Street 30 Cash" },
            { "name": "PEPPERSTONE:US500", "displayName": "S&P 500 Index" },
            { "name": "ICMARKETS:USTEC", "displayName": "US Tech 100 Cash" },
            { "name": "BLACKBULL:WTI", "displayName": "Light Crude Oil" }
          ]
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en",
      "backgroundColor": "#131722"
    });

    const marketOverviewScriptContent = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "100%",
      "height": "100%",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(209, 212, 220, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        // {
        //   "title": "GOLD & SILVER",
        //   "symbols": [
        //     { "s": "OANDA:XAUUSD", "d": "GOLD / USD" },
        //     { "s": "OANDA:XAUEUR", "d": "GOLD / EUR" },
        //     { "s": "OANDA:XAGUSD", "d": "SILVER / USD" },
        //     { "s": "OANDA:XAGEUR", "d": "SILVER / EUR" },
        //   ],
        //   "originalTitle": "GOLD & SILVER"
        // },
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500 Index" },
            { "s": "FOREXCOM:NSXUSD", "d": "US 100 Cash CFD" },
            { "s": "INDEX:NKY", "d": "Nikkei 225" },
            { "s": "FOREXCOM:UKXGBP", "d": "FTSE 100 Index" },
            { "s": "PEPPERSTONE:AUS200", "d": "AUS 200 Index" },
            { "s": "BLACKBULL:BRENT", "d": "Brent Crude Oil" },
            { "s": "OANDA:EU50EUR", "d": "EURO CDFs 50" },
            { "s": "CAPITALCOM:FR40", "d": "France 40" },
            { "s": "PEPPERSTONE:GER40", "d": "German 40 Index" },
            { "s": "PEPPERSTONE:HK50", "d": "Hong Kong 50 Index" },
            { "s": "OANDA:NATGASUSD", "d": "Natural Gas (USD)" },
            { "s": "OANDA:ESPIXEUR", "d": "SPAIN 35 (EUR)" },
            { "s": "TVC:UKX", "d": "UK 100 Index" },
            { "s": "PEPPERSTONE:US30", "d": "US Wall Street 30 Cash" },
            { "s": "ICMARKETS:USTEC", "d": "US Tech 100 Index" },
            { "s": "BLACKBULL:WTI", "d": "Light Crude Oil" }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Forex",
          "symbols": [
            { "s": "OANDA:AUDCAD", "d": "AUD / CAD" },
            { "s": "OANDA:AUDCHF", "d": "AUD / CHF" },
            { "s": "OANDA:AUDJPY", "d": "AUD / JPY" },
            { "s": "OANDA:AUDNZD", "d": "AUD / NZD" },
            { "s": "OANDA:AUDUSD", "d": "AUD / USD" },
            { "s": "OANDA:CADCHF", "d": "CAD / CHF" },
            { "s": "OANDA:CADJPY", "d": "CAD / JPY" },
            { "s": "OANDA:CHFJPY", "d": "CHF / JPY" },
            { "s": "OANDA:EURAUD", "d": "EUR / AUD" },
            { "s": "OANDA:EURCAD", "d": "EUR / CAD" },
            { "s": "OANDA:EURCHF", "d": "EUR / CHF" },
            { "s": "OANDA:EURGBP", "d": "EUR / GBP" },
            { "s": "OANDA:EURJPY", "d": "EUR / JPY" },
            { "s": "OANDA:EURNZD", "d": "EUR / NZD" },
            { "s": "OANDA:EURUSD", "d": "EUR / USD" },
            { "s": "OANDA:EURZAR", "d": "EUR / ZAR" },
            { "s": "OANDA:GBPAUD", "d": "GBP / AUD" },
            { "s": "OANDA:GBPCAD", "d": "GBP / CAD" },
            { "s": "OANDA:GBPCHF", "d": "GBP / CHF" },
            { "s": "OANDA:GBPJPY", "d": "GBP / JPY" },
            { "s": "OANDA:GBPNZD", "d": "GBP / NZD" },
            { "s": "OANDA:GBPUSD", "d": "GBP / USD" }
          ],
          "originalTitle": "Forex"
        }
      ]
    });

    const addTradingViewWidget = (containerId, scriptContent, scriptSrc) => {
      const container = document.getElementById(containerId);
      if (container && !container.querySelector('script')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.async = true;
        script.innerHTML = scriptContent;
        container.appendChild(script);
      }
    };

    setTimeout(() => addTradingViewWidget('tradingview-widget-container-1', marketDataScriptContent, 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'), 1000);
    setTimeout(() => addTradingViewWidget('tradingview-widget-container-2', marketOverviewScriptContent, 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'), 1000);

    return () => {
      const container1 = document.getElementById('tradingview-widget-container-1');
      if (container1) container1.innerHTML = '';
      const container2 = document.getElementById('tradingview-widget-container-2');
      if (container2) container2.innerHTML = '';
    };
  }, []);

  return (
    <div className="symbols">
      <h1 className="symbols-title">Symbols</h1>
      <h2 className="symbols-subtitle">Explore and compare live data on the different symbols we currently offer.</h2>
      <h2 className="symbols-subtitle-2">Watch this space - more symbols will be added based on your demands!</h2>
      <div className="widgets-container">
        <div id="tradingview-widget-container-1" className="tradingview-widget-wrapper market-data-widget"></div>
        <div id="tradingview-widget-container-2" className="tradingview-widget-wrapper market-overview-widget"></div>
      </div>
      <BecomeFundedSection />
      <JoinDiscordSection />
    </div>
  );
};

export default Symbols;



