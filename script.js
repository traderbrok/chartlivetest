document.addEventListener("DOMContentLoaded", () => {
    // Initialiser TradingView-widgets
    loadTradingViewWidgets("BTCUSD");

    // Skift widget-data baseret på valgte aktiv
    const assetSelect = document.getElementById('assetSelect');
    assetSelect.addEventListener('change', () => {
        const selectedAsset = assetSelect.value;
        loadTradingViewWidgets(selectedAsset);
    });
});

// Funktion til at opdatere TradingView-widgets
function loadTradingViewWidgets(symbol) {
    // Candlestick chart
    new TradingView.widget({
        "container_id": "tradingview_chart",
        "symbol": `BINANCE:${symbol}`,
        "interval": "60",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "studies": ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
        "height": "400",
        "width": "100%"
    });

    // Market Overview Widget
    new TradingView.MediumWidget({
        "container_id": "tradingview-widget",
        "symbols": [
            [`BINANCE:${symbol}`]
        ],
        "greyText": "Quotes by TradingView",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4fa3ff",
        "width": "100%",
        "height": "300",
        "locale": "en"
    });

    // Technical Analysis Widget
    new TradingView.widget({
        "container_id": "technical-analysis-widget",
        "autosize": true,
        "symbol": `BINANCE:${symbol}`,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "studies": ["StochasticRSI@tv-basicstudies", "BollingerBands@tv-basicstudies"],
        "width": "100%",
        "height": "300",
        "allow_symbol_change": true
    });
}
