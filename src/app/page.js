"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Trees,
  Waves,
  Building2,
  Calendar,
  Phone,
  Maximize2,
  CheckCircle,
  Award,
  Zap,
  MapPin,
  Star,
  Download,
} from "lucide-react";
import styles from "./Home.module.css";
import BannerModal from "@/components/BannerModal";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import MasterPlanExplorer from "@/components/MasterPlanExplorer";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomePage() {
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  const directPhones = [
    "9461051515",
    "9461372954",
    "9511535722",
    "9413926030",
    "8503818482",
    "8764224724",
    "9772371996",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="/images/hero.jpg"
            alt="Mojika Group Luxury Plotted Residential Township"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className="badge-gold">
                <Sparkles size={14} /> Rajasthan's Flagship Gated Development
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              Curating Iconic Spaces. Elevating Generational Living.
              <span className={styles.heroHindiTagline}>
                अब मौलासर में मिलेगा जयपुर जैसा मॉडर्न लाइफस्टाइल — 100 बीघा में फैली सपनों की नगरी!
              </span>
            </h1>

            <p className={styles.heroDescription}>
              Mojika Group presents Rajasthan’s grandest plotted township development. Experience
              wide 60-ft palm boulevards, resort-style clubhouses, underground utilities, and 100%
              clear-title luxury living designed for prosperity.
            </p>

            <div className={styles.heroCtaGroup}>
              <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
                <Calendar size={18} />
                <span>Book VIP Site Visit</span>
              </button>

              <button onClick={() => setBannerModalOpen(true)} className="btn-secondary">
                <Maximize2 size={18} />
                <span>View Launch Announcement</span>
              </button>

              <Link href="/projects" className="btn-secondary">
                <span>Explore All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats Bar */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Bigha Master Township</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Industry Trust</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,500+</span>
                <span className={styles.statLabel}>Happy Homeowners</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>RERA & Clear Titles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Banner Spotlight Section */}
      <section id="flagship" className={styles.bannerSection}>
        <div className="container">
          <div className={styles.bannerCard}>
            {/* Banner Thumbnail with Click to Expand */}
            <div className={styles.bannerMedia} onClick={() => setBannerModalOpen(true)}>
              <img
                src="/images/mojika-banner.png"
                alt="Mojika Group Maulasar Official Banner"
                className={styles.bannerThumb}
              />
              <div className={styles.bannerClickHint}>
                <Maximize2 size={14} /> Click to Expand Full Poster
              </div>
            </div>

            {/* Banner Content Details */}
            <div className={styles.bannerInfo}>
              <div className="badge-emerald">
                <Award size={14} /> Flagship Launch • Maulasar
              </div>
              <h2 className={styles.bannerHindiHeading}>
                अब मौलासर में मिलेगा जयपुर जैसा मॉडर्न लाइफस्टाइल
              </h2>
              <p className={styles.bannerSubtext}>
                Mojika Group brings the signature luxury, security, and world-class infrastructure
                of Jaipur’s finest gated townships to Maulasar. A self-sustained 100-bigha master
                planned ecosystem with world-class amenities.
              </p>

              <div className={styles.keyHighlights}>
                <div className={styles.highlightPill}>
                  <CheckCircle size={16} />
                  <span>100 Bigha Gated Community</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={16} />
                  <span>60ft & 40ft Wide Blacktop Roads</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={16} />
                  <span>Grand Clubhouse & Infinity Pool</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={16} />
                  <span>100% Legal Registry & Vastu Plots</span>
                </div>
              </div>

              {/* Direct Hotlines from Banner */}
              <div className={styles.callDirectBox}>
                <span className={styles.callDirectTitle}>
                  Direct Booking Desk (Tap to Call Now):
                </span>
                <div className={styles.directNumbers}>
                  {directPhones.slice(0, 4).map((num) => (
                    <a key={num} href={`tel:${num}`}>
                      +91 {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Township Pillars */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Engineering Excellence</span>
            <h2>Metropolitan Infrastructure Built to Last</h2>
            <p>
              Every square yard of our 100-Bigha township is engineered with international urban
              planning standards, ensuring unmatched peace of mind and long-term capital appreciation.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Zap size={28} />
              </div>
              <h3>Underground Utilities</h3>
              <p>
                Zero overhead hanging cables. Premium underground electricity conduit cabling,
                high-speed optical fiber provisions, and dedicated storm water drainage networks.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Building2 size={28} />
              </div>
              <h3>60-Ft Palm Boulevards</h3>
              <p>
                Extra-wide blacktop avenues engineered for smooth traffic flow, flanked by
                pedestrian walking pathways, manicured green hedges, and solar-powered LED streetlights.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={28} />
              </div>
              <h3>3-Tier Gated Security</h3>
              <p>
                24/7 manned security guards, RFID automated boom barriers, high boundary walls, and
                comprehensive HD CCTV surveillance covering all intersections.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Waves size={28} />
              </div>
              <h3>Abundant Water Infrastructure</h3>
              <p>
                High-capacity overhead water reservoirs, dedicated borewells, round-the-clock piped
                pressurized water supply to each plot, and rainwater harvesting structures.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Trees size={28} />
              </div>
              <h3>Lush Thematic Parks</h3>
              <p>
                Over 10 acres dedicated to open green lungs, herbal plantations, reflexology paths,
                outdoor fitness gymnasiums, and children’s sandpits.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Award size={28} />
              </div>
              <h3>Clear Title & Spot Registry</h3>
              <p>
                100% legal compliance with government town planning approvals, immediate registry
                assurance, demarcation pillars, and seamless bank loan approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Master Plan Explorer Section */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <MasterPlanExplorer onBookSiteVisit={() => setVisitModalOpen(true)} />
        </div>
      </section>

      {/* Resort Lifestyle & Clubhouse Amenities */}
      <section id="amenities" className={styles.section}>
        <div className="container">
          <div className={styles.amenitiesSplit}>
            <div className={styles.amenityVisual}>
              <img
                src="/images/clubhouse.jpg"
                alt="Mojika Township Luxury Clubhouse & Infinity Pool"
                className={styles.amenityImg}
              />
              <div className={styles.amenityBadgeFloat}>The Mojika Club & Pavilion</div>
            </div>

            <div className={styles.amenitiesContent}>
              <span className="badge-gold">Resort Living</span>
              <h2>25+ Curated Lifestyle Amenities For Every Generation</h2>
              <p>
                Live every day like a vacation. The lavish community clubhouse serves as the vibrant
                social hub of the township, combining sports, wellness, and celebration under one roof.
              </p>

              <div className={styles.amenitiesGrid}>
                <div className={styles.amenityItem}>
                  <Waves size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Infinity Swimming Pool</span>
                </div>
                <div className={styles.amenityItem}>
                  <Building2 size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>AC Banquet & Event Lawn</span>
                </div>
                <div className={styles.amenityItem}>
                  <Trees size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Landscaped Zen Gardens</span>
                </div>
                <div className={styles.amenityItem}>
                  <Sparkles size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Kids Adventure Play Park</span>
                </div>
                <div className={styles.amenityItem}>
                  <Zap size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Tennis & Badminton Courts</span>
                </div>
                <div className={styles.amenityItem}>
                  <ShieldCheck size={20} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Yoga & Meditation Deck</span>
                </div>
              </div>

              <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
                <Calendar size={18} />
                <span>Schedule a Clubhouse Tour</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Interior & Architectural Digest Showcase */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.interiorSplit}>
            <div>
              <span className="badge-emerald">Architectural Vision</span>
              <h2>Craft Your Dream Villa With Timeless Elegance</h2>
              <p>
                Each plot in Mojika townships is proportioned with optimal frontage and Vastu
                orientation, enabling double-height ceilings, expansive floor-to-ceiling glass
                facades, private courtyards, and lush rooftop gardens.
              </p>

              <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: "600" }}>
                  <CheckCircle size={18} color="#0f4c3a" />
                  <span>Custom Villa Design Consultancy Available</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: "600" }}>
                  <CheckCircle size={18} color="#0f4c3a" />
                  <span>Approved Construction Heights up to G+2</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: "600" }}>
                  <CheckCircle size={18} color="#0f4c3a" />
                  <span>Architectural Guidelines for Cohesive Neighbourhood Aesthetics</span>
                </div>
              </div>

              <Link href="/projects" className="btn-secondary">
                <span>View Plot Specifications</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.interiorVisual}>
              <img
                src="/images/interior.jpg"
                alt="Mojika Luxury Villa Sample Living Space"
                className={styles.interiorImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMI & Investment Calculator Section */}
      <section id="calculator" className={styles.section}>
        <div className="container">
          <EmiCalculator onOpenVisitModal={() => setVisitModalOpen(true)} />
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Customer Trust</span>
            <h2>What Our Landowners & Investors Say</h2>
            <p>
              Over 1,500+ happy families have partnered with Mojika Group for secure land investments
              and lifetime homes.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c59828" />
                ))}
              </div>
              <p className={styles.testiText}>
                "The 100-Bigha project in Maulasar is truly a game changer for the entire region.
                Seeing the 60-ft wide roads, underground electricity, and grand entrance gate gave
                us complete confidence. The legal registry was done seamlessly."
              </p>
              <div className={styles.testiUser}>
                <strong>Shri Narendra Choudhary</strong>
                <span>Investor & Plot Owner, Maulasar</span>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c59828" />
                ))}
              </div>
              <p className={styles.testiText}>
                "Mojika Group lives up to their slogan 'Building The Trust'. We previously bought a
                property in Jaipur with them, and their commitment to timely development and quality
                materials is unmatched. Highly recommended!"
              </p>
              <div className={styles.testiUser}>
                <strong>Dr. Rajeshwari Sharma</strong>
                <span>Resident, Jaipur</span>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c59828" />
                ))}
              </div>
              <p className={styles.testiText}>
                "Getting a loan approved by SBI for our plot was completely hassle-free because all
                RERA documents and government clearances were already in place. The complimentary
                cab tour from Jaipur was very thoughtful."
              </p>
              <div className={styles.testiUser}>
                <strong>Amitabh Singhal</strong>
                <span>Business Owner & NRI Investor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2>Experience Mojika Grandeur In Person</h2>
          <p>
            Book your guided site inspection with complimentary chauffeur pickup from Jaipur to
            the 100-Bigha Maulasar mega development.
          </p>
          <div className={styles.ctaButtons}>
            <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
              <Calendar size={18} />
              <span>Book Free Site Visit</span>
            </button>
            <a href="tel:9461051515" className="btn-secondary">
              <Phone size={18} />
              <span>Call +91 94610 51515</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      {bannerModalOpen && (
        <BannerModal isOpen={bannerModalOpen} onClose={() => setBannerModalOpen(false)} />
      )}
      {visitModalOpen && (
        <ScheduleVisitModal isOpen={visitModalOpen} onClose={() => setVisitModalOpen(false)} />
      )}
    </>
  );
}
