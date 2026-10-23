"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  MapPin,
  LayoutGrid,
  Layers,
  Building2,
  Trees,
  ShieldCheck,
  TrendingUp,
  Compass,
} from "lucide-react";
import styles from "./Home.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import BannerModal from "@/components/BannerModal";
import InteractivePlotSelector from "@/components/InteractivePlotSelector";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomePage() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({ name: "", phone: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phone) return;
    setFormSent(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================
          HERO SECTION - EXACT MATCH TO SS2 (media_1792752352441.jpg)
          ======================================================== */}
      <section className={styles.heroContainer}>
        {/* Content in the Upper Region */}
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTagline}>
              A NEW LANDMARK IN JAIPUR
            </div>

            <h1 className={styles.heroHeadline}>
              <span className={styles.headlineBlack}>अब मौलासर में मिलेगा</span>
              <span className={styles.headlineRed}>जयपुर जैसा मॉडर्न लाइफस्टाइल</span>
            </h1>

            <p className={styles.heroSubtext}>
              100 बीघा में फैली सपनों की नगरी।
            </p>

            <a href="tel:9461051515" className={styles.heroCtaBtn}>
              <Phone size={15} />
              <span>9461051515</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div className={styles.heroRight}>
            <span className={styles.comingSoonScript}>Coming Soon</span>
          </div>
        </div>

        {/* Bottom Hero Area with Curved Wave, Pill Card on Left, Scroll in Center */}
        <div className={styles.heroBottomArea}>
          {/* Pill Card on Bottom-Left */}
          <div className={styles.infoPillCard}>
            <div className={styles.infoPillCol}>
              <MapPin size={20} className={styles.infoPillIcon} />
              <div className={styles.infoPillText}>
                <strong>Moulasar</strong>
                <span>JAIPUR</span>
              </div>
            </div>

            <div className={styles.infoPillDivider} />

            <div className={styles.infoPillCol}>
              <LayoutGrid size={20} className={styles.infoPillIcon} />
              <div className={styles.infoPillText}>
                <strong>100 बीघा</strong>
                <span>PREMIUM LAND</span>
              </div>
            </div>

            <div className={styles.infoPillDivider} />

            <div className={styles.infoPillCol}>
              <Building2 size={20} className={styles.infoPillIcon} />
              <div className={styles.infoPillText}>
                <strong>Coming Soon</strong>
                <span>A NEW WAY OF LIVING</span>
              </div>
            </div>
          </div>

          {/* Mouse Scroll in Center Dip */}
          <div className={styles.scrollIndicator} onClick={() => scrollToSection("about")}>
            <div className={styles.mouseIcon}>
              <div className={styles.mouseWheel} />
            </div>
            <span>SCROLL</span>
            <div className={styles.scrollLine} />
          </div>

          {/* Curved Wave Bottom Divider */}
          <div className={styles.bottomWaveWrapper}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={styles.bottomWaveSvg}>
              <path
                d="M0,45 C320,68 520,32 660,42 C690,44 710,50 720,50 C730,50 750,44 780,42 C920,32 1120,68 1440,45 L1440,80 L0,80 Z"
                fill="#FDFBF1"
              />
            </svg>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 1: ABOUT US (from SS2)
          ======================================================== */}
      <section id="about" className={styles.sectionAbout}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className="section-tag">ABOUT US</span>
              <h2>Mojika Group</h2>
              <span className={styles.aboutSubtitle}>BUILDING THE TRUST</span>
              <p className={styles.aboutHindiText}>
                Mojika Group का उद्देश्य जयपुर में बेहतर और सुव्यवस्थित रिहायशी एवं निवेश योग्य
                प्रोजेक्ट विकसित करना है। हम भरोसे, गुणवत्ता और बेहतर भविष्य के साथ आगे बढ़ते हैं।
              </p>
              <Link href="/about" className="btn-mockup-secondary">
                <span>Know More</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.aboutVisualWrapper}>
              <img
                src="/images/gate.jpg"
                alt="Mojika Group Grand Entrance Gate"
                className={styles.aboutGateImg}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 2: PROJECT OVERVIEW (from SS2)
          ======================================================== */}
      <section id="project" className={styles.sectionOverview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <span className="section-tag">PROJECT OVERVIEW</span>
              <h2>एक सुनियोजित और आधुनिक टाउनशिप</h2>
              <p className={styles.overviewHindiText}>
                100 बीघा में फैला यह प्रोजेक्ट सोच-समझकर बनाई गई प्लॉटिंग, चौड़ी सड़कों और बेहतर
                इंफ्रास्ट्रक्चर के साथ एक नई जीवनशैली प्रदान करेगा।
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-mockup-secondary">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </Link>
                <button onClick={() => setBannerModalOpen(true)} className="btn-mockup-secondary">
                  <span>View Launch Poster</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className={styles.overviewVisual}>
              <img
                src="/images/plots.jpg"
                alt="Mojika Plotted Township Aerial Overview"
                className={styles.overviewImg}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 3: PROJECT HIGHLIGHTS (5 Cards from SS2)
          ======================================================== */}
      <section className={styles.sectionHighlights}>
        <div className="container">
          <span className="section-tag-center">PROJECT HIGHLIGHTS</span>

          <div className={styles.highlightsCardWrapper}>
            <div className={styles.highlightsGrid}>
              {/* Card 1 */}
              <div className={styles.highlightItem}>
                <div className={styles.highlightIconBox}>
                  <Layers size={22} />
                </div>
                <strong>100 बीघा</strong>
                <span>Premium Land</span>
              </div>

              {/* Card 2 */}
              <div className={styles.highlightItem}>
                <div className={styles.highlightIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="21" x2="10" y2="3" />
                    <line x1="20" y1="21" x2="14" y2="3" />
                    <line x1="12" y1="6" x2="12" y2="8" strokeDasharray="2 2" />
                    <line x1="12" y1="12" x2="12" y2="14" strokeDasharray="2 2" />
                    <line x1="12" y1="18" x2="12" y2="20" strokeDasharray="2 2" />
                  </svg>
                </div>
                <strong>Wide Roads</strong>
                <span>Better Connectivity</span>
              </div>

              {/* Card 3 */}
              <div className={styles.highlightItem}>
                <div className={styles.highlightIconBox}>
                  <Trees size={22} />
                </div>
                <strong>Green Surroundings</strong>
                <span>Peaceful Environment</span>
              </div>

              {/* Card 4 */}
              <div className={styles.highlightItem}>
                <div className={styles.highlightIconBox}>
                  <ShieldCheck size={22} />
                </div>
                <strong>Planned Development</strong>
                <span>Well Designed Layout</span>
              </div>

              {/* Card 5 */}
              <div className={styles.highlightItem}>
                <div className={styles.highlightIconBox}>
                  <TrendingUp size={22} />
                </div>
                <strong>Great Location</strong>
                <span>Future Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          INTERACTIVE PLOT MASTER LAYOUT SELECTOR (Rich Section)
          ======================================================== */}
      <section className={styles.sectionOverview} style={{ background: "#FFFFFF" }}>
        <div className="container">
          <InteractivePlotSelector onBookPlot={() => setVisitModalOpen(true)} />
        </div>
      </section>


      {/* ========================================================
          SECTION 4: LIFESTYLE BANNER (from SS2)
          ======================================================== */}
      <section className={styles.sectionLifestyle}>
        <div className={styles.lifestyleBanner}>
          <div className={styles.lifestyleOverlay} />
          <div className="container">
            <div className={styles.lifestyleContent}>
              <h2 className={styles.lifestyleTitle}>
                A BETTER TOMORROW IN JAIPUR
              </h2>
              <span className={styles.lifestyleSubtitle}>
                MODERN LIVING BEGINS HERE
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 5: OUR LOCATION (from SS2)
          ======================================================== */}
      <section className={styles.sectionLocation}>
        <div className="container">
          <div className={styles.locationCard}>
            <div className={styles.locationLeft}>
              <span className="section-tag">OUR LOCATION</span>
              <h2>Moulasar, Jaipur</h2>
              <p className={styles.locationDesc}>
                A strategically located township connected seamlessly via state highways to Jaipur,
                Didwana, and Sikar with rapid economic growth.
              </p>
              <a
                href="https://maps.google.com/?q=Maulasar+Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="btn-mockup-secondary"
              >
                <span>Get Directions</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className={styles.locationRight}>
              <img
                src="/images/highway.jpg"
                alt="Moulasar Highway Connectivity"
                className={styles.locationRoadImg}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SMART EMI & INVESTMENT PLANNER (Rich Section)
          ======================================================== */}
      <section className={styles.sectionHighlights}>
        <div className="container">
          <EmiCalculator onOpenVisitModal={() => setVisitModalOpen(true)} />
        </div>
      </section>


      {/* ========================================================
          SECTION 6: GALLERY SECTION (from SS2)
          ======================================================== */}
      <section id="gallery" className={styles.sectionGallery}>
        <div className="container">
          <span className="section-tag-center">GALLERY SECTION</span>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img src="/images/plots.jpg" alt="100-Bigha Aerial View" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>100-Bigha Master Plotted Layout</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/gate.jpg" alt="Grand Entrance Gate" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>60-Ft Grand Imperial Gateway</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/hero.jpg" alt="Luxury Villa Architecture" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>Palm Boulevard & Villa Enclave</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/clubhouse.jpg" alt="Resort Clubhouse & Pool" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>Resort Clubhouse & Infinity Pool</div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 7: CONTACT CTA & INQUIRY FORM (from SS2)
          ======================================================== */}
      <section id="contact" className={styles.sectionContactCta}>
        <div className="container">
          {/* Top Full Width Banner from SS2 */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBannerLeft}>
              <h3>Have Questions? Get in Touch With Us</h3>
              <p>For more information about the project, site visit or investment details.</p>
            </div>
            <a href="tel:9461051515" className="btn-mockup-primary">
              <Phone size={18} />
              <span>9461051515</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Form + Gate Visual Grid from SS2 */}
          <div className={styles.contactGrid}>
            <div className={styles.formBox}>
              <span className="section-tag">GET IN TOUCH</span>
              <h4>Request Information & Site Tour</h4>
              <p>Speak directly with our senior township planners.</p>

              {!formSent ? (
                <form onSubmit={handleFormSubmit} className={styles.actualForm}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className={styles.formInput}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 9461051515)"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className={styles.formInput}
                  />
                  <textarea
                    rows={3}
                    placeholder="Message / Preferred Plot Size (Optional)"
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className={styles.formTextarea}
                  />
                  <button type="submit" className="btn-mockup-primary" style={{ width: "100%", marginTop: "6px" }}>
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ background: "#FDFBF1", border: "1px solid #E8DCC5", borderRadius: "10px", padding: "24px", textAlign: "center" }}>
                  <strong style={{ color: "#8B603D", display: "block", fontSize: "1.15rem" }}>
                    Thank you, {contactData.name}!
                  </strong>
                  <p style={{ color: "#6B7280", fontSize: "0.92rem", marginTop: "6px" }}>
                    Our sales advisor will call you at {contactData.phone} within 15 minutes to coordinate your VIP tour.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.contactVisualWrapper}>
              <img
                src="/images/gate.jpg"
                alt="Mojika Group Gateway"
                className={styles.contactGatePhoto}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      {visitModalOpen && (
        <ScheduleVisitModal isOpen={visitModalOpen} onClose={() => setVisitModalOpen(false)} />
      )}
      {bannerModalOpen && (
        <BannerModal isOpen={bannerModalOpen} onClose={() => setBannerModalOpen(false)} />
      )}
    </>
  );
}
