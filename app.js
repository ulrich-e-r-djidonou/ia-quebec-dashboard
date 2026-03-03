// ═══ APP.JS — Dashboard interactif IA Québec ═══

const BLUE = '#6366F1';
const BLUE_LIGHT = '#A5B4FC';
const ORANGE = '#F59E0B';
const ORANGE_LIGHT = '#FCD34D';
const GREEN = '#14B8A6';
const RED = '#F43F5E';
const GRAY = '#94A3B8';

const PALETTE = ['#6366F1','#14B8A6','#F59E0B','#F43F5E','#8B5CF6','#06B6D4','#EC4899','#10B981','#F97316','#84CC16'];

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.padding = 16;

// ═══ TAB NAVIGATION ═══
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.section).classList.add('active');
  });
});

// ═══ COUNTER ANIMATION ═══
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      el.textContent = current;
    }, 30);
  });
}
animateCounters();

// ═══ CHART HELPERS ═══
function tooltipConfig() {
  return {
    backgroundColor: '#1F2937',
    titleFont: { weight: '600' },
    padding: 12,
    cornerRadius: 8,
    displayColors: true,
    boxPadding: 4
  };
}

// ═══ CHART 1: TOTAL PROJETS ═══
new Chart(document.getElementById('chartTotal'), {
  type: 'bar',
  data: {
    labels: ['2024', '2025'],
    datasets: [{
      data: [DATA.total.y2024, DATA.total.y2025],
      backgroundColor: [BLUE, ORANGE],
      borderRadius: 8,
      borderSkipped: false,
      barThickness: 80
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 4,
        font: { weight: '700', size: 20 },
        color: '#1F2937',
        formatter: v => v
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 310,
        grid: { color: '#F3F4F6' },
        ticks: { font: { size: 12 } }
      },
      x: { grid: { display: false }, ticks: { font: { size: 14, weight: '600' } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 2: ORGANISMES ═══
new Chart(document.getElementById('chartOrgs'), {
  type: 'bar',
  data: {
    labels: ['2024', '2025'],
    datasets: [{
      data: [DATA.organismes.y2024, DATA.organismes.y2025],
      backgroundColor: [BLUE, ORANGE],
      borderRadius: 8,
      borderSkipped: false,
      barThickness: 80
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 4,
        font: { weight: '700', size: 20 },
        color: '#1F2937'
      }
    },
    scales: {
      y: { beginAtZero: true, max: 100, grid: { color: '#F3F4F6' } },
      x: { grid: { display: false }, ticks: { font: { size: 14, weight: '600' } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 3: CATÉGORIES ═══
new Chart(document.getElementById('chartCategories'), {
  type: 'bar',
  data: {
    labels: DATA.categories.labels,
    datasets: [
      { label: '2024', data: DATA.categories.y2024, backgroundColor: BLUE, borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.7 },
      { label: '2025', data: DATA.categories.y2025, backgroundColor: ORANGE, borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.7 }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 2,
        font: { weight: '600', size: 11 },
        color: '#374151'
      }
    },
    scales: {
      x: { beginAtZero: true, grid: { color: '#F3F4F6' }, title: { display: true, text: 'Nombre de projets' } },
      y: { grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 4: ÉVOLUTION CATÉGORIES ═══
const diffs = DATA.categories.y2025.map((v, i) => v - DATA.categories.y2024[i]);
new Chart(document.getElementById('chartCatEvolution'), {
  type: 'bar',
  data: {
    labels: DATA.categories.labels,
    datasets: [{
      data: diffs,
      backgroundColor: diffs.map(d => d > 0 ? GREEN : d < 0 ? RED : GRAY),
      borderRadius: 4,
      barPercentage: 0.7
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { ...tooltipConfig(), callbacks: { label: ctx => `Variation : ${ctx.raw > 0 ? '+' : ''}${ctx.raw} projets` } },
      datalabels: {
        anchor: ctx => ctx.dataset.data[ctx.dataIndex] >= 0 ? 'end' : 'start',
        align: ctx => ctx.dataset.data[ctx.dataIndex] >= 0 ? 'end' : 'start',
        offset: 4,
        font: { weight: '700', size: 13 },
        color: ctx => ctx.dataset.data[ctx.dataIndex] >= 0 ? '#0F766E' : '#991B1B',
        formatter: v => (v > 0 ? '+' : '') + v
      }
    },
    scales: {
      x: { grid: { color: '#F3F4F6' }, title: { display: true, text: 'Variation du nombre de projets' } },
      y: { grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 5: TOP ORGANISMES ═══
new Chart(document.getElementById('chartTopOrgs'), {
  type: 'bar',
  data: {
    labels: DATA.topOrganismes2025.labels,
    datasets: [{
      data: DATA.topOrganismes2025.values,
      backgroundColor: PALETTE,
      borderRadius: 6,
      barPercentage: 0.75
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 4,
        font: { weight: '700', size: 13 },
        color: '#1F2937'
      }
    },
    scales: {
      x: { beginAtZero: true, grid: { color: '#F3F4F6' }, title: { display: true, text: 'Nombre de projets IA' } },
      y: { grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 6 & 7: STATUTS DONUT ═══
function makeDonut(canvasId, dataArr, total) {
  new Chart(document.getElementById(canvasId), {
    type: 'doughnut',
    data: {
      labels: DATA.statuts.labels,
      datasets: [{
        data: dataArr,
        backgroundColor: [GREEN, ORANGE, GRAY],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, font: { size: 11 } } },
        tooltip: { ...tooltipConfig(), callbacks: { label: ctx => `${ctx.label}: ${ctx.raw} (${Math.round(ctx.raw/total*100)}%)` } },
        datalabels: {
          font: { weight: '600', size: 13 },
          color: '#fff',
          formatter: (v, ctx) => v > 0 ? `${Math.round(v/total*100)}%` : ''
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}
makeDonut('chartStatut24', DATA.statuts.y2024, DATA.total.y2024);
makeDonut('chartStatut25', DATA.statuts.y2025, DATA.total.y2025);

// ═══ CHART 8: PRODUCTION VS DEV ═══
new Chart(document.getElementById('chartProdVsDev'), {
  type: 'bar',
  data: {
    labels: ['2024', '2025'],
    datasets: [
      { label: 'En production', data: [DATA.statuts.y2024[0], DATA.statuts.y2025[0]], backgroundColor: GREEN, borderRadius: 6, barPercentage: 0.6 },
      { label: 'En développement', data: [DATA.statuts.y2024[1], DATA.statuts.y2025[1]], backgroundColor: ORANGE, borderRadius: 6, barPercentage: 0.6 },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 2,
        font: { weight: '700', size: 14 },
        color: '#1F2937'
      }
    },
    scales: {
      y: { beginAtZero: true, grid: { color: '#F3F4F6' }, title: { display: true, text: 'Nombre de projets' } },
      x: { grid: { display: false }, ticks: { font: { size: 14, weight: '600' } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 9: PORTEFEUILLES ═══
new Chart(document.getElementById('chartPortefeuilles'), {
  type: 'bar',
  data: {
    labels: DATA.portefeuilles.labels,
    datasets: [
      { label: '2024', data: DATA.portefeuilles.y2024, backgroundColor: BLUE, borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.7 },
      { label: '2025', data: DATA.portefeuilles.y2025, backgroundColor: ORANGE, borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.7 }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: tooltipConfig(),
      datalabels: {
        anchor: 'end', align: 'end', offset: 2,
        font: { weight: '600', size: 10 },
        color: '#374151',
        formatter: v => v > 0 ? v : ''
      }
    },
    scales: {
      x: { beginAtZero: true, grid: { color: '#F3F4F6' }, title: { display: true, text: 'Nombre de projets' } },
      y: { grid: { display: false }, ticks: { font: { size: 10 } } }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ CHART 10: SECTEURS NOUVEAUX ORGANISMES ═══
new Chart(document.getElementById('chartNewOrgsSector'), {
  type: 'doughnut',
  data: {
    labels: DATA.nouveauxOrgsSecteurs.labels,
    datasets: [{
      data: DATA.nouveauxOrgsSecteurs.values,
      backgroundColor: PALETTE.slice(0, 6),
      borderWidth: 3,
      borderColor: '#fff',
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
      legend: { position: 'bottom', labels: { padding: 14, font: { size: 11 } } },
      tooltip: tooltipConfig(),
      datalabels: {
        font: { weight: '600', size: 13 },
        color: '#fff',
        formatter: v => v
      }
    }
  },
  plugins: [ChartDataLabels]
});

// ═══ POPULATE NEW ORGS LIST ═══
const orgList = document.getElementById('newOrgsList');
DATA.nouveauxOrganismes.forEach(org => {
  const tag = document.createElement('span');
  tag.className = 'org-tag';
  tag.textContent = org;
  orgList.appendChild(tag);
});

// ═══ COPY LINKEDIN ═══
function copyLinkedin(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
}
window.copyLinkedin = copyLinkedin;

// ═══ CONTACT FORM ═══
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });
      const data = await res.json();
      if (data.success) {
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      } else {
        btn.textContent = 'Erreur — Reessayez';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Erreur — Reessayez';
      btn.disabled = false;
    }
  });
}


// ═══ DARK MODE ═══
const darkToggle = document.getElementById('darkToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  darkToggle.textContent = '☀️';
}
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ═══ SCROLL ANIMATIONS ═══
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card, .callout, .carousel-container').forEach(el => {
  observer.observe(el);
});

// Re-observe when tab changes
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    setTimeout(() => {
      document.querySelectorAll('.card:not(.visible), .callout:not(.visible), .carousel-container:not(.visible)').forEach(el => {
        observer.observe(el);
      });
    }, 50);
  });
});

// ═══ INSIGHTS CAROUSEL ═══
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
if (track && dotsContainer) {
  const slides = track.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  let autoplayInterval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    currentSlide = n;
    track.style.transform = `translateX(-${n * 100}%)`;
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === n);
    });
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }
  startAutoplay();

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  track.addEventListener('mouseleave', startAutoplay);

  // Swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; clearInterval(autoplayInterval); }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(Math.min(currentSlide + 1, slides.length - 1));
      else goToSlide(Math.max(currentSlide - 1, 0));
    }
    startAutoplay();
  }, { passive: true });
}

// ═══ ORG SEARCH / FILTER ═══
const orgSearch = document.getElementById('orgSearch');
if (orgSearch) {
  orgSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    document.querySelectorAll('.org-tag').forEach(tag => {
      const text = tag.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      tag.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
