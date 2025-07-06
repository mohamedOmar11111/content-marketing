// Chart for Principle 4
const ctx = document.getElementById('perception-chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
        datasets: [{
            label: 'Audience Perception',
            data: [70, 85, 55, 40, 20, 35, 45],
            borderColor: '#333',
            tension: 0.4,
            pointBackgroundColor: (context) => (context.raw > 50 ? '#4CAF50' : '#F44336'),
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { min: 0, max: 100, ticks: { display: false } }
        },
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    yMin: 50,
                    yMax: 50,
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2,
                    label: { content: 'Perception Limit', enabled: true, position: 'start' }
                }
            }
        }
    }
});
