import React, { useState } from 'react';
import './Dashboard.css';

// Active redirection links
const CURRENT_LINKS = {
  menu: '/menu.jpg',
  review: 'https://search.google.com/local/writereview?placeid=ChIJDTehJgCx5zsRBZpX5h3y4tQ',
  socialMedia: 'https://www.instagram.com/koyla__?stkn=OThsd3JlaW9raWtm',
  // Preserved guest amenities
  receptionPhone: 'tel:+18005550199',
  receptionWhatsapp: 'https://wa.me/18005550199?text=Hello%20Concierge',
  wifiPassword: 'WelcomeXYZ2026',
  wifiSSID: 'TheFoodCourt_Guest',
};

const Dashboard = () => {
  const [wifiCopied, setWifiCopied] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);

  // Native haptic feedback
  const triggerHaptic = (pattern = 15) => {
    if (window.navigator?.vibrate) {
      try {
        window.navigator.vibrate(pattern);
      } catch {
        // Ignore devices where vibrate is restricted
      }
    }
  };

  const handleLinkClick = (e, url) => {
    triggerHaptic(20);
    // Let standard anchor redirect or direct navigation take place
  };

  const copyWifiPassword = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(CURRENT_LINKS.wifiPassword).then(() => {
      setWifiCopied(true);
      triggerHaptic([15, 40, 15]);
      setTimeout(() => setWifiCopied(false), 2200);
    });
  };

  return (
    <div className="portal-viewport">
      <main className="portal-container" id="food-court-portal">
        {/* Top Restaurant Atmosphere Banner */}
        <header className="hero-banner">
          <div className="banner-image-container">
            <img
              src="/restaurant_banner.jpg"
              alt="Restaurant Dining Atmosphere"
              className="banner-image"
              loading="eager"
            />
            <div className="banner-gradient-overlay" />
          </div>

          <div className="brand-header-content">
            {/* Elegant Golden Chef Hat Icon */}
            <div className="chef-hat-badge" aria-hidden="true">
              <svg
                viewBox="0 0 54 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chef-hat-svg"
              >
                <path
                  d="M14 29C10.6 29 8 26.3 8 23C8 20 10.3 17.5 13.3 17.1C14.4 10.9 20.1 6.2 27 6.2C33.9 6.2 39.6 10.9 40.7 17.1C43.7 17.5 46 20 46 23C46 26.3 43.4 29 40 29"
                  stroke="#deb876"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 31.5H41C42.1 31.5 43 32.4 43 33.5V36C43 37.1 42.1 38 41 38H13C11.9 38 11 37.1 11 36V33.5C11 32.4 11.9 31.5 13 31.5Z"
                  stroke="#deb876"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="22"
                  y1="32"
                  x2="22"
                  y2="37.5"
                  stroke="#deb876"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="37.5"
                  stroke="#deb876"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h1 className="brand-title">THE FOOD COURT</h1>
            <p className="brand-tagline">Good Food &bull; Great Vibes</p>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <h2 className="welcome-heading">Welcome!</h2>
          <p className="welcome-subheading">What would you like to explore?</p>
        </section>

        {/* 3 Main Action Option Buttons */}
        <section className="options-stack" aria-label="Guest Options">
          {/* 1. Menu Option Card (Golden Amber) */}
          <a
            id="btn-option-menu"
            href={CURRENT_LINKS.menu}
            className="option-card card-amber"
            onClick={(e) => handleLinkClick(e, CURRENT_LINKS.menu)}
            aria-label="View Menu"
          >
            <div className="card-left">
              <div className="icon-circle icon-circle-dark">
                {/* Fork and Knife Cutlery SVG */}
                <svg
                  className="card-icon-svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-8.03c2.09-.13 3.75-1.85 3.75-3.97V2h-2v7zm8-7c-2.21 0-4 1.79-4 4v7h2.5V22h2.5V2c-.33 0-.67 0-1 0z" />
                </svg>
              </div>
              <span className="card-label">Menu</span>
            </div>
            <div className="card-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 2. Review Us Option Card (Coral Red) */}
          <a
            id="btn-option-review"
            href={CURRENT_LINKS.review}
            className="option-card card-coral"
            onClick={(e) => handleLinkClick(e, CURRENT_LINKS.review)}
            aria-label="Review Us on Google"
          >
            <div className="card-left">
              <div className="icon-circle icon-circle-white-soft">
                {/* 5-Star SVG */}
                <svg
                  className="card-icon-svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="card-label">Review Us</span>
            </div>
            <div className="card-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 3. Social Media Option Card (Radiant Violet-Blue) */}
          <a
            id="btn-option-social"
            href={CURRENT_LINKS.socialMedia}
            className="option-card card-indigo"
            onClick={(e) => handleLinkClick(e, CURRENT_LINKS.socialMedia)}
            aria-label="Visit Social Media Instagram"
          >
            <div className="card-left">
              <div className="icon-circle icon-circle-white-soft">
                {/* Connected Social Nodes SVG */}
                <svg
                  className="card-icon-svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
              </div>
              <span className="card-label">Social Media</span>
            </div>
            <div className="card-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>
        </section>

        {/* Bottom Footer with ServiGo Branding */}
        <footer className="portal-footer">

          {/* Optional Guest Utilities Toggle (Wi-Fi & Concierge) */}
          <div className="amenities-toggle-wrap">
            <button
              type="button"
              className="amenities-toggle-btn"
              onClick={() => {
                triggerHaptic(15);
                setShowAmenities(!showAmenities);
              }}
              aria-expanded={showAmenities}
            >
              <span>{showAmenities ? 'Hide Amenities' : '📶 Wi-Fi & Concierge'}</span>
            </button>
          </div>

          {/* Expandable Amenities Panel */}
          {showAmenities && (
            <div className="amenities-drawer animate-fade-in">
              <div className="amenity-item wifi-box">
                <div className="amenity-icon">📶</div>
                <div className="amenity-text">
                  <span className="amenity-name">Guest Wi-Fi</span>
                  <span className="amenity-val">
                    Pass: <strong>{CURRENT_LINKS.wifiPassword}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  className={`amenity-copy-btn ${wifiCopied ? 'copied' : ''}`}
                  onClick={copyWifiPassword}
                >
                  {wifiCopied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="amenities-call-row">
                <a
                  href={CURRENT_LINKS.receptionPhone}
                  className="amenity-action-btn"
                  onClick={() => triggerHaptic(15)}
                >
                  📞 Call Desk
                </a>
                <a
                  href={CURRENT_LINKS.receptionWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amenity-action-btn whatsapp-action"
                  onClick={() => triggerHaptic(15)}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          )}

          <div className="servigo-brand">
            <svg
              className="servigo-pin"
              viewBox="0 0 24 24"
              fill="#2f70f6"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="servigo-text">Powered by BROTOCOL</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
