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
                src="/images/gate.webp"
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
                src="/images/plots.webp"
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
                src="/images/highway.webp"
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
              <img src="/images/plots.webp" alt="100-Bigha Aerial View" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>100-Bigha Master Plotted Layout</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/gate.webp" alt="Grand Entrance Gate" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>60-Ft Grand Imperial Gateway</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/hero.webp" alt="Luxury Villa Architecture" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>Palm Boulevard & Villa Enclave</div>
            </div>
            <div className={styles.galleryCard}>
              <img src="/images/clubhouse.webp" alt="Resort Clubhouse & Pool" className={styles.galleryImg} />
              <div className={styles.galleryCaption}>Resort Clubhouse & Infinity Pool</div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          NEW SECTION A: 30+ WORLD-CLASS AMENITIES SHOWCASE
          ======================================================== */}
      <section className={styles.sectionAmenitiesShowcase}>
        <div className="container">
          <div className={styles.amenitiesSectionHeader}>
            <div>
              <span className="section-tag">ROYAL LIFESTYLE</span>
              <h2>30+ World-Class Amenities & Club Mojika</h2>
              <p>Experience an elevated standard of leisure, sports, and holistic wellness right at your doorstep.</p>
            </div>
            <Link href="/amenities" className="btn-mockup-primary">
              <span>Explore All 30+ Amenities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.amenitiesCardGrid}>
            <div className={styles.amenityShowcaseCard}>
              <div className={styles.amenityCardImgWrap}>
                <img src="/images/clubhouse.webp" alt="Club Mojika" />
                <span className={styles.amenityCardBadge}>25,000 Sq.Ft.</span>
              </div>
              <div className={styles.amenityCardContent}>
                <h3>Club Mojika & Lounge</h3>
                <p>Private banquet hall, member café, indoor billiards lounge, and mini-theatre.</p>
              </div>
            </div>

            <div className={styles.amenityShowcaseCard}>
              <div className={styles.amenityCardImgWrap}>
                <img src="/images/lifestyle.webp" alt="Infinity Pool" />
                <span className={styles.amenityCardBadge}>Olympic Length</span>
              </div>
              <div className={styles.amenityCardContent}>
                <h3>Infinity Swimming Pool</h3>
                <p>Temperature-controlled pool with private cabanas, sundeck loungers, and kids splash bay.</p>
              </div>
            </div>

            <div className={styles.amenityShowcaseCard}>
              <div className={styles.amenityCardImgWrap}>
                <img src="/images/plots.webp" alt="60-Ft Wide Avenues" />
                <span className={styles.amenityCardBadge}>Wide Blacktop</span>
              </div>
              <div className={styles.amenityCardContent}>
                <h3>60-Ft Tree-Lined Avenues</h3>
                <p>Spacious asphalt roads, underground electrical conduits, and automated solar streetlamps.</p>
              </div>
            </div>

            <div className={styles.amenityShowcaseCard}>
              <div className={styles.amenityCardImgWrap}>
                <img src="/images/gate.webp" alt="3-Tier Security" />
                <span className={styles.amenityCardBadge}>24/7 Gated</span>
              </div>
              <div className={styles.amenityCardContent}>
                <h3>3-Tier Smart Security</h3>
                <p>AI night-vision CCTV coverage, RFID boom barriers, and round-the-clock trained security guards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          NEW SECTION B: LIVE CONSTRUCTION & DEVELOPMENT TIMELINE
          ======================================================== */}
      <section className={styles.sectionProgressTimeline}>
        <div className="container">
          <div className={styles.progressHeader}>
            <span className="section-tag-center">ON-GROUND REALITY</span>
            <h2>Live Construction & Development Milestones</h2>
            <p>Our commitment to transparent, fast-track execution in the 100-Bigha township.</p>
          </div>

          <div className={styles.timelineRow}>
            <div className={styles.timelineStepCard}>
              <div className={styles.timelineStatusCompleted}>100% Done</div>
              <h4>Phase 1: Boundary & Demarcation</h4>
              <p>Perimeter boundary wall, individual plot stone demarcations, and legal survey pillars.</p>
            </div>

            <div className={styles.timelineStepCard}>
              <div className={styles.timelineStatusCompleted}>100% Done</div>
              <h4>Phase 2: Grand Entrance Gate</h4>
              <p>Majestic stone archway, guard cabins, and dual entry/exit boom barriers completed.</p>
            </div>

            <div className={styles.timelineStepCard}>
              <div className={styles.timelineStatusCompleted}>100% Done</div>
              <h4>Phase 3: 60-Ft Main Avenues</h4>
              <p>Heavy-duty asphalt blacktop roads, concrete curbs, and stormwater drain channels.</p>
            </div>

            <div className={styles.timelineStepCard}>
              <div className={styles.timelineStatusProgress}>85% In Progress</div>
              <h4>Phase 4: Underground Utilities</h4>
              <p>Underground cabling, high-pressure water supply lines, and solar streetlight poles.</p>
            </div>

            <div className={styles.timelineStepCard}>
              <div className={styles.timelineStatusProgress}>65% In Progress</div>
              <h4>Phase 5: Club Mojika & Parks</h4>
              <p>Clubhouse structural work, pool excavation, and landscaped botanical planting.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          NEW SECTION C: BANK TIE-UPS & 80% LOAN SANCTION
          ======================================================== */}
      <section className={styles.sectionBankTieups}>
        <div className="container">
          <div className={styles.bankBanner}>
            <div className={styles.bankBannerLeft}>
              <span className={styles.bankTag}>FINANCIAL SECURITY</span>
              <h2>Approved by Top National Banks (Up to 80% Loan)</h2>
              <p>Pre-sanctioned clear titles enable seamless, expedited home loan approvals with attractive interest rates.</p>
            </div>
            <Link href="/investment" className="btn-mockup-primary">
              <span>View Investment Potential</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.bankPartnersGrid}>
            <div className={styles.bankPillCard}>
              <strong>SBI</strong>
              <span>State Bank of India</span>
            </div>
            <div className={styles.bankPillCard}>
              <strong>HDFC</strong>
              <span>HDFC Bank Home Loans</span>
            </div>
            <div className={styles.bankPillCard}>
              <strong>ICICI</strong>
              <span>ICICI Bank Pre-Approved</span>
            </div>
            <div className={styles.bankPillCard}>
              <strong>BOB</strong>
              <span>Bank of Baroda</span>
            </div>
            <div className={styles.bankPillCard}>
              <strong>PNB</strong>
              <span>PNB Housing Finance</span>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          NEW SECTION D: VERIFIED INVESTOR TESTIMONIALS
          ======================================================== */}
      <section className={styles.sectionTestimonials}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <span className="section-tag-center">CLIENT VOICES</span>
            <h2>Trusted by 1,200+ Happy Homeowners & Investors</h2>
            <p>Real stories of trust, wealth creation, and community living with Mojika Group.</p>
          </div>

          <div className={styles.testimonialCardsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.starRow}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "I purchased a 300 Sq.Yd plot in Sector A. The 60-ft wide roads, underground electricity,
                and prompt freehold registry were beyond my expectations. Mojika Group has delivered on every promise."
              </p>
              <div className={styles.buyerInfo}>
                <strong>Rajesh Khandelwal</strong>
                <span>Businessman, Jaipur • Verified Buyer</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.starRow}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "As an NRI based in Dubai, transparent legal paperwork and RERA registration were my top priorities.
                The team provided end-to-end video updates. In just 18 months, my plot value has appreciated by 28%!"
              </p>
              <div className={styles.buyerInfo}>
                <strong>Vikramaditya Rathore</strong>
                <span>NRI Investor, Dubai • Sector B Owner</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.starRow}>★★★★★</div>
              <p className={styles.reviewQuote}>
                "The peaceful green environment, clubhouse facilities, and proximity to the highway made Mojika Maulasar
                the perfect location for our family's retirement dream villa."
              </p>
              <div className={styles.buyerInfo}>
                <strong>Dr. Sunita Meena</strong>
                <span>Senior Physician, Sikar • Sector C Owner</span>
              </div>
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
                src="/images/gate.webp"
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
