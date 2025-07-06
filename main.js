document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for animations ---
    const cards = document.querySelectorAll('.principle-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // --- Chart.js Global Config ---
    Chart.defaults.font.family = 'Segoe UI';
    Chart.defaults.font.size = 14;
    Chart.defaults.color = '#555';

    // --- Chart Implementations ---

    // 1. Audience Chart (Venn Diagram style)
    const ctxAudience = document.getElementById('audience-chart')?.getContext('2d');
    if (ctxAudience) {
        new Chart(ctxAudience, {
            type: 'doughnut',
            data: {
                labels: ['Your Expertise', 'Audience Problems'],
                datasets: [{
                    data: [60, 60],
                    backgroundColor: ['rgba(0, 86, 179, 0.7)', 'rgba(23, 162, 184, 0.7)'],
                    borderColor: ['#0056b3', '#17a2b8'],
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                cutout: '50%',
                plugins: {
                    title: { display: true, text: 'Finding the Content Sweet Spot', font: { size: 18, weight: 'bold' } },
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // 2. Unique Content Chart (Polar Area)
    const ctxUnique = document.getElementById('unique-content-chart')?.getContext('2d');
    if (ctxUnique) {
        new Chart(ctxUnique, {
            type: 'polarArea',
            data: {
                labels: ['Proprietary Data', 'Unique Viewpoint', 'Polished Style'],
                datasets: [{
                    data: [35, 45, 20],
                    backgroundColor: ['rgba(0, 86, 179, 0.7)', 'rgba(40, 167, 69, 0.7)', 'rgba(255, 193, 7, 0.7)']
                }]
            },
            options: {
                plugins: {
                    title: { display: true, text: 'Pillars of Unique Content', font: { size: 18, weight: 'bold' } },
                    legend: { position: 'bottom' }
                }
            }
        });
    }
    
    // 3. Authority Chart (Radar)
    const ctxAuthority = document.getElementById('authority-chart')?.getContext('2d');
    if (ctxAuthority) {
        new Chart(ctxAuthority, {
            type: 'radar',
            data: {
                labels: ['Trust', 'Credibility', 'Expertise', 'Influence', 'Recognition'],
                datasets: [{
                    label: 'Authority Score',
                    data: [75, 85, 90, 60, 70],
                    fill: true,
                    backgroundColor: 'rgba(0, 86, 179, 0.2)',
                    borderColor: '#0056b3',
                    pointBackgroundColor: '#0056b3'
                }]
            },
            options: {
                plugins: {
                    title: { display: true, text: 'Authority-Building Metrics', font: { size: 18, weight: 'bold' } }
                }
            }
        });
    }

    // 4. Perception Chart (Line)
    const ctxPerception = document.getElementById('perception-chart')?.getContext('2d');
    if (ctxPerception) {
        new Chart(ctxPerception, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Brand Perception',
                    data: [65, 70, 60, 45, 55, 80],
                    borderColor: '#0056b3',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(0, 86, 179, 0.1)'
                }]
            },
            options: {
                plugins: {
                    title: { display: true, text: 'Impact of Content Quality', font: { size: 18, weight: 'bold' } }
                }
            }
        });
    }

    // 5. Repurpose Chart (Bar)
    const ctxRepurpose = document.getElementById('repurpose-chart')?.getContext('2d');
    if (ctxRepurpose) {
        new Chart(ctxRepurpose, {
            type: 'bar',
            data: {
                labels: ['Blog Posts', 'Videos', 'Social Carousels', 'Tweets', 'Checklists'],
                datasets: [{
                    label: 'Assets from 1 Pillar Piece',
                    data: [3, 2, 5, 20, 2],
                    backgroundColor: ['#0056b3', '#17a2b8', '#28a745', '#ffc107', '#dc3545']
                }]
            },
            options: {
                indexAxis: 'y',
                plugins: {
                    title: { display: true, text: 'Content Repurposing Matrix', font: { size: 18, weight: 'bold' } },
                    legend: { display: false }
                }
            }
        });
    }

    // 9. Results Chart (Combined Bar/Line)
    const ctxResults = document.getElementById('results-chart')?.getContext('2d');
    if (ctxResults) {
        new Chart(ctxResults, {
            type: 'bar',
            data: {
                labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Effort (Content Published)',
                        data: [10, 12, 11, 13, 12, 14],
                        borderColor: '#ffc107',
                        tension: 0.4,
                        yAxisID: 'y1'
                    },
                    {
                        type: 'bar',
                        label: 'Inbound Leads',
                        data: [5, 8, 15, 25, 40, 65],
                        backgroundColor: '#28a745',
                        yAxisID: 'y'
                    }
                ]
            },
            options: {
                plugins: {
                    title: { display: true, text: 'The Lagging Effect of Content', font: { size: 18, weight: 'bold' } }
                },
                scales: {
                    y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Leads' } },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Effort' } }
                }
            }
        });
    }

});
