import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// External destination links for XYZ Hotel
const HOTEL_LINKS = {
  menu: '/menu.jpg',
  review: 'https://search.google.com/local/writereview?placeid=ChIJDTehJgCx5zsRBZpX5h3y4tQ',
  instagram: 'https://www.instagram.com/koyla__?stkn=OThsd3JlaW9raWtm',
  receptionPhone: 'tel:+18005550199',
  receptionWhatsapp: 'https://wa.me/18005550199?text=Hello%20XYZ%20Hotel%20Concierge',
};

const CURRENT_YEAR = new Date().getFullYear();

const getGreeting = (hour) => {
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

const getFormattedTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Dashboard = () => {
  const [greeting, setGreeting] = useState(() => getGreeting(new Date().getHours()));
  const [currentTime, setCurrentTime] = useState(() => getFormattedTime(new Date()));
  const [wifiCopied, setWifiCopied] = useState(false);

  // Time-aware greeting updated every minute
  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      setGreeting(getGreeting(now.getHours()));
      setCurrentTime(getFormattedTime(now));
    };

    const interval = setInterval(updateTimeAndGreeting, 30000);
    return () => clearInterval(interval);
  }, []);

  // Haptic feedback helper for mobile touch
  const triggerHaptic = (pattern = 15) => {
    if (window.navigator?.vibrate) {
      window.navigator.vibrate(pattern);
    }
  };

  // One-click copy Wi-Fi password
  const copyWifiPassword = (password) => {
    navigator.clipboard.writeText(password).then(() => {
      setWifiCopied(true);
      triggerHaptic([10, 30, 10]);
      setTimeout(() => setWifiCopied(false), 2500);
    });
  };

  return (
    <div className="mobile-viewport-wrapper">
      <div className="mobile-container" id="xyz-dashboard">
        {/* Ambient Aurora Glow Canvas */}
        <div className="aurora-glow-canvas" aria-hidden="true">
          <div className="aurora-sphere orb-violet" />
          <div className="aurora-sphere orb-magenta" />
          <div className="aurora-sphere orb-cyan" />
          <div className="aurora-sphere orb-sunset" />
          <div className="aurora-mesh-overlay" />
        </div>

        {/* Top Status Bar (Responsive Header) */}
        <header className="mobile-header">
          {/* Tablet/Desktop Exclusive Brand Header Accent */}
          <div className="header-brand-desktop" aria-hidden="true">
            <span className="header-crest">XYZ</span>
            <span className="header-brand-text">HOTEL & RESORT</span>
          </div>

          <div className="header-status">
            <span className="live-indicator">
              <span className="pulse-dot" />
              Portal Live
            </span>
          </div>

          <div className="header-right-group">
            <div className="header-time-badge">
              <span className="current-clock">{currentTime}</span>
            </div>

            {/* Tablet/Desktop Quick Direct Call / WhatsApp */}
            <div className="header-desktop-actions">
              <a
                href={HOTEL_LINKS.receptionPhone}
                className="header-pill-btn"
                title="Call Front Desk Concierge"
              >
                📞 Dial 0
              </a>
              <a
                href={HOTEL_LINKS.receptionWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="header-pill-btn head-whatsapp"
                title="WhatsApp Concierge"
                onClick={() => triggerHaptic(15)}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* Hero Branding Section */}
        <section className="hero-section">
          <div className="hero-aurora-canopy">
            <div className="canopy-light-ribbon ribbon-1" />
            <div className="canopy-light-ribbon ribbon-2" />
            <div className="canopy-sparkles">
              <span className="celestial-sparkle s1">✦</span>
              <span className="celestial-sparkle s2">✧</span>
              <span className="celestial-sparkle s3">✦</span>
              <span className="celestial-sparkle s4">⋆</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="luxury-badge">
              <span className="stars-rating">★★★★★</span>
              <span className="badge-text">Luxury Resort & Suites</span>
            </div>

            <div className="hotel-brand">
              <div className="brand-crest">
                <span className="crest-monogram">XYZ</span>
              </div>
              <h1 className="hotel-title">XYZ HOTEL</h1>
              <p className="hotel-greeting">
                <span className="greeting-time">{greeting}</span>, welcome to your private digital concierge.
              </p>
            </div>
          </div>
        </section>

        {/* Guest Status Strip (Expands on Tablet/Desktop) */}
        <section className="status-strip">
          <div className="status-chip">
            <span className="status-chip-icon">🛎️</span>
            <div className="status-chip-info">
              <span className="status-chip-title">Concierge</span>
              <span className="status-chip-sub">Available 24/7</span>
            </div>
          </div>
          <div className="status-chip">
            <span className="status-chip-icon">🍽️</span>
            <div className="status-chip-info">
              <span className="status-chip-title">Dining</span>
              <span className="status-chip-sub">Open Till 11:30 PM</span>
            </div>
          </div>
          <div className="status-chip desktop-chip">
            <span className="status-chip-icon">⚡</span>
            <div className="status-chip-info">
              <span className="status-chip-title">High-Speed Wi-Fi</span>
              <span className="status-chip-sub">Complimentary 1Gbps</span>
            </div>
          </div>
          <div className="status-chip desktop-chip">
            <span className="status-chip-icon">🚗</span>
            <div className="status-chip-info">
              <span className="status-chip-title">Valet Parking</span>
              <span className="status-chip-sub">Available 24/7</span>
            </div>
          </div>
        </section>

        {/* Main Actions: MENU, REVIEW, INSTAGRAM & WI-FI */}
        <main className="action-buttons-container">
          <div className="section-heading">
            <h2 className="section-title">Essential Guest Services</h2>
            <p className="section-desc">Tap below to access instant services</p>
          </div>

          {/* Cards Grid: 1-col on mobile, 3-col on tablet & desktop */}
          <div className="cards-grid">
            {/* 1. MENU BUTTON (Opens /menu.jpg directly) */}
            <a
              id="btn-menu"
              href={HOTEL_LINKS.menu}
              target="_blank"
              rel="noopener noreferrer"
              className="action-card card-menu"
              onClick={() => triggerHaptic(15)}
              aria-label="Open Koyla Dining Menu Image"
            >
              <div className="card-shine" />
              <div className="card-icon-container menu-icon-box">
                {/* Culinary Cloche / Menu Icon */}
                <svg className="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <span className="card-title">Menu</span>
                  <span className="card-pill pill-gold">Koyla Dining</span>
                </div>
                <p className="card-description">
                  Fine dining, charcoal kebabs & handcrafted cocktails menu.
                </p>
                <div className="card-meta">
                  <span className="meta-tag">🍽️ Food & Cocktail Menu</span>
                  <span className="meta-arrow">
                    Open Menu <span className="arrow-symbol">↗</span>
                  </span>
                </div>
              </div>
            </a>

            {/* 2. REVIEW BUTTON */}
            <a
              id="btn-review"
              href={HOTEL_LINKS.review}
              target="_blank"
              rel="noopener noreferrer"
              className="action-card card-review"
              onClick={() => triggerHaptic(15)}
              aria-label="Open XYZ Hotel Review external page"
            >
              <div className="card-shine" />
              <div className="card-icon-container review-icon-box">
                {/* 5-Star / Review Star Icon */}
                <svg className="action-svg" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <span className="card-title">Review</span>
                  <span className="card-pill pill-amber">4.9 ★ (1.4k+ Reviews)</span>
                </div>
                <p className="card-description">
                  Share your stay experience & reviews on Google & TripAdvisor.
                </p>
                <div className="card-meta">
                  <span className="meta-tag">⭐ Rate Your Experience</span>
                  <span className="meta-arrow">
                    Review <span className="arrow-symbol">↗</span>
                  </span>
                </div>
              </div>
            </a>

            {/* 3. INSTAGRAM BUTTON */}
            <a
              id="btn-instagram"
              href={HOTEL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="action-card card-instagram"
              onClick={() => triggerHaptic(15)}
              aria-label="Open Koyla Instagram external page"
            >
              <div className="card-shine" />
              <div className="card-icon-container instagram-icon-box">
                {/* Instagram Camera Icon */}
                <svg className="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <span className="card-title">Instagram</span>
                  <span className="card-pill pill-insta">@koyla__</span>
                </div>
                <p className="card-description">
                  Follow @koyla__ on Instagram • Stories, reels, highlights & events.
                </p>
                <div className="card-meta">
                  <span className="meta-tag">📸 Follow & Tag Us</span>
                  <span className="meta-arrow">
                    Connect <span className="arrow-symbol">↗</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Utilities Grid: 1-col on mobile, 2-col on tablet & desktop */}
          <div className="utilities-grid">
            {/* Wi-Fi Quick Connection Card */}
            <div className="wifi-card">
              <div className="wifi-icon-badge">📶</div>
              <div className="wifi-details">
                <span className="amenity-label">Complimentary Guest Wi-Fi</span>
                <span className="wifi-ssid">Network: <strong>XYZ_Luxury_Guest</strong></span>
                <div className="wifi-password-box">
                  <span className="wifi-pass-label">Password:</span>
                  <code className="wifi-pass-code">WelcomeXYZ2026</code>
                  <button
                    type="button"
                    className={`copy-btn ${wifiCopied ? 'copied' : ''}`}
                    onClick={() => copyWifiPassword('WelcomeXYZ2026')}
                    aria-label="Copy Wi-Fi password"
                  >
                    {wifiCopied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Quick Concierge Bar */}
            <div className="quick-contact-card">
              <div className="contact-text">
                <span className="contact-title">Need Immediate Assistance?</span>
                <span className="contact-sub">Front Desk Concierge is 1-tap away</span>
              </div>
              <div className="contact-buttons">
                <a
                  href={HOTEL_LINKS.receptionPhone}
                  className="contact-pill-btn call-btn"
                  title="Call Front Desk"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Dial 0
                </a>
                <a
                  href={HOTEL_LINKS.receptionWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill-btn whatsapp-btn"
                  title="WhatsApp Concierge"
                  onClick={() => triggerHaptic(15)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Chat
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer (Responsive layout for mobile, tablet, and desktop) */}
        <footer className="mobile-footer">
          <div className="footer-content-wrap">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <span className="footer-monogram">XYZ</span>
                <span className="footer-title">HOTEL & RESORT</span>
              </div>
              <p className="footer-tagline">
                Luxury Resort & Suites • Elevating guest hospitality since 2018
              </p>
            </div>

            <div className="footer-info-section">
              <p className="footer-address">
                100 Ocean Avenue, Luxury Boulevard • Concierge Ext: 0
              </p>
              <div className="footer-highlights">
                <span>🛎️ 24/7 Front Desk</span>
                <span className="footer-divider">•</span>
                <span>🍽️ Koyla Dining Till 11:30 PM</span>
                <span className="footer-divider">•</span>
                <span>📶 Complimentary Wi-Fi</span>
              </div>
            </div>
          </div>

          <p className="footer-copyright">
            © {CURRENT_YEAR} XYZ Hotel & Resort. Designed for guest luxury on mobile, tablet & desktop.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
