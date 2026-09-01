/**
 * SERJAFAN — Main Interactive Logic (Ultra Fast, Modern, & Accessible)
 * Optimized for Mobile-First & High Performance
 */

import { CONFIG, POPULAR_SERVICES, ALL_SERVICES, FAQ_ITEMS, TERMS_CONDITIONS } from './data.js';
import { openWhatsApp, openGeneralConsultation, buildWhatsAppUrl } from './whatsapp.js';

// DOM Element References
const popularContainer = document.getElementById('popular-services-container');
const allServicesContainer = document.getElementById('all-services-container');
const searchInput = document.getElementById('service-search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchResultCount = document.getElementById('search-result-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const faqContainer = document.getElementById('faq-container');
const termsContainer = document.getElementById('terms-list-container');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('back-to-top-btn');
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

// Order Modal Elements
const orderModal = document.getElementById('order-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalServiceTitle = document.getElementById('modal-service-title');
const modalServiceNameInput = document.getElementById('modal-service-name');
const modalDetailsInput = document.getElementById('modal-details');
const modalQtyInput = document.getElementById('modal-qty');
const modalDeadlineInput = document.getElementById('modal-deadline');
const modalSubmitBtn = document.getElementById('modal-submit-btn');

let currentCategory = 'all';
let searchQuery = '';

/**
 * Initialize Application on DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {
  renderPopularServices();
  renderAllServices();
  renderFaqAccordion();
  renderTerms();
  setupEventListeners();
  setupScrollSpyAndEffects();
  setupFloatingWaButton();
});

/**
 * Render Popular Services Cards
 */
function renderPopularServices() {
  if (!popularContainer) return;
  
  popularContainer.innerHTML = POPULAR_SERVICES.map(item => `
    <article class="popular-card" data-service-id="${item.id}">
      <div class="popular-card-top">
        <div class="service-icon-box" aria-hidden="true">${item.icon}</div>
        <span class="badge badge-price">${item.badge}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="popular-card-footer">
        <div class="card-price-display">
          <span class="label">Mulai dari</span>
          <span class="price">Rp${item.startingPrice.toLocaleString('id-ID')} / ${item.unit}</span>
        </div>
        <button class="btn btn-wa btn-sm btn-order-trigger" data-service="${item.serviceKey}" aria-label="Pesan ${item.title}">
          <span>💬 Pesan</span>
        </button>
      </div>
    </article>
  `).join('');
}

/**
 * Render All Services with Active Search & Category Filter
 */
function renderAllServices() {
  if (!allServicesContainer) return;

  const filtered = ALL_SERVICES.filter(service => {
    // Category match
    const categoryMatch = currentCategory === 'all' || service.category === currentCategory;

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    if (!q) return categoryMatch;

    const titleMatch = service.title.toLowerCase().includes(q);
    const summaryMatch = service.summary.toLowerCase().includes(q);
    const itemMatch = service.items.some(it => 
      it.name.toLowerCase().includes(q) || (it.note && it.note.toLowerCase().includes(q))
    );

    return categoryMatch && (titleMatch || summaryMatch || itemMatch);
  });

  // Update Result Counter
  if (searchResultCount) {
    if (searchQuery.trim() || currentCategory !== 'all') {
      searchResultCount.style.display = 'flex';
      searchResultCount.innerHTML = `<span>🔎 Ditemukan <strong>${filtered.length}</strong> layanan</span>`;
    } else {
      searchResultCount.style.display = 'none';
    }
  }

  // Handle Empty State
  if (filtered.length === 0) {
    allServicesContainer.innerHTML = `
      <div class="no-results-box">
        <div style="font-size: 3rem; margin-bottom: 0.75rem;">🔍</div>
        <h3>Layanan tidak ditemukan</h3>
        <p>Tidak ada layanan yang sesuai dengan kata kunci "<strong>${escapeHtml(searchQuery)}</strong>".</p>
        <button class="btn btn-secondary btn-sm" id="reset-search-btn" style="margin-top: 1rem;">
          Tampilkan Semua Layanan
        </button>
      </div>
    `;

    document.getElementById('reset-search-btn')?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.classList.remove('visible');
      searchQuery = '';
      currentCategory = 'all';
      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
      });
      renderAllServices();
    });
    return;
  }

  allServicesContainer.innerHTML = filtered.map(service => `
    <article class="service-card" data-category="${service.category}">
      <header class="service-card-header">
        <div class="service-card-meta">
          <span class="badge badge-location">${service.categoryLabel}</span>
          <span class="badge badge-price">Mulai Rp${service.startFrom.toLocaleString('id-ID')}</span>
        </div>
        <div class="service-card-title-group">
          <span style="font-size: 1.5rem;" aria-hidden="true">${service.icon}</span>
          <h3>${service.title}</h3>
        </div>
        <p class="service-card-desc">${service.summary}</p>
      </header>

      <div class="service-items-list">
        ${service.items.map(subItem => `
          <div class="service-item-row">
            <div class="item-left">
              <span class="item-name">${subItem.name}</span>
              ${subItem.note ? `<span class="item-note">${subItem.note}</span>` : ''}
            </div>
            <div class="item-price">
              ${subItem.price} ${subItem.unit ? `<span>/${subItem.unit}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <footer class="service-card-footer">
        <button class="btn btn-wa btn-block btn-order-trigger" data-service="${service.serviceKey}" aria-label="${service.buttonText}">
          <span>💬 ${service.buttonText}</span>
        </button>
      </footer>
    </article>
  `).join('');
}

/**
 * Render FAQ Accordion
 */
function renderFaqAccordion() {
  if (!faqContainer) return;

  faqContainer.innerHTML = FAQ_ITEMS.map((item, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-header" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <span class="faq-icon-arrow" aria-hidden="true">▼</span>
      </button>
      <div class="faq-body">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  // Accordion click listener
  faqContainer.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      faqContainer.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-header')?.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Render Terms & Conditions
 */
function renderTerms() {
  if (!termsContainer) return;

  termsContainer.innerHTML = TERMS_CONDITIONS.map(term => `
    <li>${term}</li>
  `).join('');
}

/**
 * Global Event Listeners Setup
 */
function setupEventListeners() {
  // Live Search
  let debounceTimeout;
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
    }
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      renderAllServices();
    }, 150);
  });

  // Search Clear Button
  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    searchClearBtn.classList.remove('visible');
    searchQuery = '';
    renderAllServices();
  });

  // Category Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'all';
      renderAllServices();
    });
  });

  // Mobile Hamburger Toggle
  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close Mobile Menu on Nav Link Click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      if (navToggle) navToggle.innerHTML = '☰';
    });
  });

  // Back to Top Button
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Delegated Order Trigger Click
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.btn-order-trigger');
    if (trigger) {
      e.preventDefault();
      const serviceName = trigger.dataset.service || 'Layanan SERJAFAN';
      openOrderModal(serviceName);
    }
  });

  // General Consultation Click
  document.querySelectorAll('.btn-general-consult').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openGeneralConsultation();
    });
  });

  // Modal Events
  modalCloseBtn?.addEventListener('click', closeOrderModal);
  orderModal?.addEventListener('click', (e) => {
    if (e.target === orderModal) closeOrderModal();
  });

  // Modal Submit Order Event
  modalSubmitBtn?.addEventListener('click', handleModalSubmit);
}

/**
 * Modal Management
 */
function openOrderModal(serviceName) {
  if (!orderModal) return;
  
  if (modalServiceTitle) modalServiceTitle.textContent = `Pesan: ${serviceName}`;
  if (modalServiceNameInput) modalServiceNameInput.value = serviceName;
  if (modalDetailsInput) modalDetailsInput.value = '';
  if (modalQtyInput) modalQtyInput.value = '';
  if (modalDeadlineInput) modalDeadlineInput.value = '';

  orderModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  if (!orderModal) return;
  orderModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleModalSubmit() {
  const serviceName = modalServiceNameInput?.value || "Layanan SERJAFAN";
  const details = modalDetailsInput?.value.trim() || "";
  const quantity = modalQtyInput?.value.trim() || "";
  const deadline = modalDeadlineInput?.value.trim() || "";

  openWhatsApp(serviceName, {
    details: details || "Mohon info detail pengerjaan",
    quantity: quantity || "1",
    deadline: deadline || "Segera / Menyesuaikan"
  });

  closeOrderModal();
}

/**
 * High-Performance ScrollSpy & Scroll Effects
 */
function setupScrollSpyAndEffects() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Navbar Shadow
        navbar?.classList.toggle('scrolled', scrollY > 20);

        // Back to Top Button visibility
        backToTopBtn?.classList.toggle('visible', scrollY > 400);

        // ScrollSpy logic
        let currentSectionId = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id') || '';
          }
        });

        // Update Desktop Nav Active State
        desktopNavLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update Mobile Bottom Nav Active State
        bottomNavItems.forEach(item => {
          const href = item.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Floating WhatsApp Button setup
 */
function setupFloatingWaButton() {
  const fab = document.getElementById('floating-wa-fab');
  if (fab) {
    fab.href = buildWhatsAppUrl("Halo SERJAFAN 👋 Saya ingin konsultasi/order layanan jasa.");
    fab.target = "_blank";
    fab.rel = "noopener noreferrer";
  }
}

/**
 * Helper to escape HTML characters
 */
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
