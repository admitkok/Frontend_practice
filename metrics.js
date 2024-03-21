import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';


function sendMetrics(metricsData) {
    fetch('https://httpbin.org/status/200', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(metricsData)
    })
        .then(response => {

            console.log('Metrics sent successfully:', response);
        })
        .catch(error => {

            console.error('Error sending metrics:', error);
        });
}


getCLS(sendMetrics);
getFID(sendMetrics);
getLCP(sendMetrics);
getTTFB(sendMetrics);

