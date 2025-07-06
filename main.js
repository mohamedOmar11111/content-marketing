document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Back to Top Button ---
    const toTopBtn = document.getElementById('to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Intersection Observer for Card Animations ---
    const cards = document.querySelectorAll('.principle-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // --- Chart.js Global Config ---
    Chart.defaults.font.family = 'Poppins';
    Chart.defaults.font.size = 14;
    Chart.defaults.color = '#5d6d7e';
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.plugins.title.font = { size: 20, weight: 'bold' };
    Chart.defaults.plugins.title.color = '#2c3e50';

    // --- Chart Implementations ---

    // 1. Audience Chart
    const ctxAudience = document.getElementById('audience-chart')?.getContext('2d');
    if (ctxAudience) {
        new Chart(ctxAudience, {
            type: 'bar',
            data: {
                labels: ['Pain Points', 'Goals', 'Questions', 'Interests'],
                datasets: [{
                    label: 'Audience Understanding',
                    data: [90, 75, 85, 60],
                    backgroundColor: 'rgba(10, 76, 154, 0.7)',
                    borderColor: '#0a4c9a',
                    borderWidth: 2
                }]
            },
            options: {
                plugins: { title: { display: true, text: 'Deep Audience Understanding' } }
            }
        });
    }

    // 2. Unique Content Chart
    const ctxUnique = document.getElementById('unique-content-chart')?.getContext('2d');
    if (ctxUnique) {
        new Chart(ctxUnique, {
            type: 'pie',
            data: {
                labels: ['Proprietary Data', 'Unique Viewpoint', 'Signature Style'],
                datasets: [{ data: [40, 35, 25], backgroundColor: ['#0a4c9a', '#00a9e0', '#f39c12'] }]
            },
            options: {
                plugins: { title: { display: true, text: 'Pillars of Unique Content' } }
            }
        });
    }

    // 3. Authority Chart
    const ctxAuthority = document.getElementById('authority-chart')?.getContext('2d');
    if (ctxAuthority) {
        new Chart(ctxAuthority, {
            type: 'radar',
            data: {
                labels: ['Trust', 'Credibility', 'Expertise', 'Influence', 'Recognition'],
                datasets: [{
                    label: 'Authority Score',
                    data: [80, 85, 90, 70, 75],
                    backgroundColor: 'rgba(10, 76, 154, 0.2)',
                    borderColor: '#0a4c9a',
                    pointBackgroundColor: '#0a4c9a'
                }]
            },
            options: {
                plugins: { title: { display: true, text: 'Authority-Building Metrics' } }
            }
        });
    }

    // 4. Perception Chart
    const ctxPerception = document.getElementById('perception-chart')?.getContext('2d');
    if (ctxPerception) {
        new Chart(ctxPerception, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    { label: 'High Quality', data: [60, 70, 85, 95], borderColor: '#27ae60', tension: 0.4 },
                    { label: 'Low Quality', data: [50, 40, 30, 20], borderColor: '#dc3545', tension: 0.4 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Impact of Content Quality on Brand Perception' } }
            }
        });
    }

    // 5. Repurpose Chart
    const ctxRepurpose = document.getElementById('repurpose-chart')?.getContext('2d');
    if (ctxRepurpose) {
        new Chart(ctxRepurpose, {
            type: 'bar',
            data: {
                labels: ['Pillar Page', 'Webinar', 'Case Study'],
                datasets: [
                    { label: 'Social Posts', data: [15, 20, 10], backgroundColor: '#0a4c9a' },
                    { label: 'Videos', data: [3, 5, 2], backgroundColor: '#00a9e0' },
                    { label: 'Guides/PDFs', data: [2, 1, 1], backgroundColor: '#f39c12' }
                ]
            },
            options: {
                scales: { x: { stacked: true }, y: { stacked: true } },
                plugins: { title: { display: true, text: 'Content Repurposing Yield' } }
            }
        });
    }

    // 9. Results Chart
    const ctxResults = document.getElementById('results-chart')?.getContext('2d');
    if (ctxResults) {
        new Chart(ctxResults, {
            type: 'line',
            data: {
                labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'],
                datasets: [
                    { label: 'Effort (Content Published)', data: [10, 12, 11, 13, 12, 14, 13, 15, 14], borderColor: '#f39c12', fill: false, yAxisID: 'y1' },
                    { label: 'Results (Inbound Leads)', data: [2, 5, 8, 15, 25, 40, 65, 90, 120], borderColor: '#27ae60', backgroundColor: 'rgba(39, 174, 96, 0.1)', fill: true, yAxisID: 'y' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'The Lagging Effect of Content Marketing' } },
                scales: {
                    y: { position: 'left', title: { display: true, text: 'Leads' } },
                    y1: { position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Effort' } }
                }
            }
        });
    }
});
