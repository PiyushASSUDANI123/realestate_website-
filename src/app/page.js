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
  Compass,
} from "lucide-react";
import styles from "./Home.module.css";
import BannerModal from "@/components/BannerModal";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import InteractivePlotSelector from "@/components/InteractivePlotSelector";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomePage() {
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [selectedPlotForVisit, setSelectedPlotForVisit] = useState(
    "Mojika Grand Township, Maulasar (100 Bigha)"
  );

  const directPhones = [
    "9461051515",
    "9461372954",
    "9511535722",
    "9413926030",
    "8503818482",
    "8764224724",
    "9772371996",
  ];

  const handleBookPlot = (plotId, sectorName) => {
    setSelectedPlotForVisit(
      `Plot ${plotId} (${sectorName}) - Mojika Grand Township, Maulasar`
    );
    setVisitModalOpen(true);
  };

  return (
    <>
      {/* Hero Section - Light Architectural Luxury */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.locationCoordinates}>
                <Compass size={14} /> Rajasthan Growth Corridor • RERA Approved
              </div>

              <h1 className={styles.heroTitle}>
                Curating Generational Legacies.
                <span className={styles.heroHindiTagline}>
                  अब मौलासर में मिलेगा जयपुर जैसा मॉडर्न लाइफस्टाइल — 100 बीघा में फैली सपनों की नगरी!
                </span>
              </h1>

              <p className={styles.heroDescription}>
                Mojika Group presents Rajasthan’s landmark 100-Bigha plotted township in Maulasar.
                Wide 60-ft palm avenues, underground electrification, resort-style clubhouse, and
                100% clear-title demarcated plots designed for lifetime appreciation.
              </p>

              <div className={styles.heroCtaGroup}>
                <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
                  <Calendar size={16} />
                  <span>Book Guided Site Visit</span>
                </button>

                <button onClick={() => setBannerModalOpen(true)} className="btn-secondary">
                  <Maximize2 size={16} />
                  <span>Launch Announcement</span>
                </button>

                <Link href="/projects" className="btn-outline-gold">
                  <span>Explore Portfolio</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Stats Bar */}
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>Bigha Township</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>60 Ft</span>
                  <span className={styles.statLabel}>Wide Boulevards</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1,500+</span>
                  <span className={styles.statLabel}>Happy Families</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Clear Titles</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Column */}
            <div className={styles.heroVisualCol}>
              <div className={styles.heroImageFrame}>
                <img
                  src="/images/hero.jpg"
                  alt="Mojika Luxury Contemporary Villa"
                  className={styles.heroImg}
                />
                <div className={styles.heroFloatingPill}>
                  <span className={styles.floatingPillTitle}>Mojika Grand Township</span>
                  <span className={styles.floatingPillSub}>Pre-Launch VIP Booking Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Banner Spotlight Card */}
      <section id="flagship" className={styles.bannerSection}>
        <div className="container">
          <div className={styles.bannerCard}>
            <div className={styles.bannerMedia} onClick={() => setBannerModalOpen(true)}>
              <img
                src="/images/mojika-banner.png"
                alt="Mojika Group Maulasar Official Banner"
                className={styles.bannerThumb}
              />
              <div className={styles.bannerClickHint}>
                <Maximize2 size={14} /> Click to View Full Banner
              </div>
            </div>

            <div className={styles.bannerInfo}>
              <div className="badge-emerald">
                <Award size={14} /> Mega Township Launch • Maulasar
              </div>
              <h2 className={styles.bannerHindiHeading}>
                अब मौलासर में मिलेगा जयपुर जैसा मॉडर्न लाइफस्टाइल
              </h2>
              <p className={styles.bannerSubtext}>
                Mojika Group brings the signature luxury, security, and world-class infrastructure
                of Jaipur’s finest gated townships to Maulasar. A 100-Bigha master planned sanctuary
                with 25+ resort-grade amenities.
              </p>

              <div className={styles.keyHighlights}>
                <div className={styles.highlightPill}>
                  <CheckCircle size={15} />
                  <span>100 Bigha Gated Community</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={15} />
                  <span>60ft & 40ft Wide Blacktop Roads</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={15} />
                  <span>Clubhouse & Swimming Pool</span>
                </div>
                <div className={styles.highlightPill}>
                  <CheckCircle size={15} />
                  <span>100% Legal Registry & Spot Possession</span>
                </div>
              </div>

              {/* Direct Hotlines from Banner */}
              <div className={styles.callDirectBox}>
                <span className={styles.callDirectTitle}>
                  Direct Booking Desk (Tap to Call):
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

      {/* Interactive Plot Master Layout Selector */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <InteractivePlotSelector onBookPlot={handleBookPlot} />
        </div>
      </section>

      {/* Township Infrastructure Standards */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Metropolitan Quality</span>
            <h2>Planned For Generations to Come</h2>
            <p>
              Engineered with world-class urban specifications, every square yard ensures safety,
              convenience, and solid capital appreciation.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Zap size={24} />
              </div>
              <h3>Underground Utilities</h3>
              <p>
                Zero overhead wiring. Dedicated underground electric conduits, optical fiber broadband
                ducts, and storm water drainage networks.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Building2 size={24} />
              </div>
              <h3>60-Ft Palm Boulevards</h3>
              <p>
                Extra-wide blacktop avenues flanked by walking footpaths, manicured royal palms, and
                solar LED streetlights.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={24} />
              </div>
              <h3>3-Tier Gated Security</h3>
              <p>
                24/7 manned security guards, RFID automated boom barriers, perimeter boundary walls,
                and high-definition CCTV coverage.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Waves size={24} />
              </div>
              <h3>Pressurized Water Grid</h3>
              <p>
                Overhead water reservoirs, dedicated deep borewells, pressurized individual pipeline to
                each plot, and rainwater harvesting recharge pits.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Trees size={24} />
              </div>
              <h3>10-Acre Central Theme Park</h3>
              <p>
                Expansive green lungs with yoga gazebos, reflexology walking tracks, kids play arenas,
                and open-air gymnasiums.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Award size={24} />
              </div>
              <h3>Spot Demarcation & Registry</h3>
              <p>
                100% clear titles, immediate registry assurance, boundary pillars for each plot, and
                instant bank loan pre-approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Lifestyle & Amenities */}
      <section id="amenities" className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.amenitiesSplit}>
            <div className={styles.amenityVisual}>
              <img
                src="/images/clubhouse.jpg"
                alt="Mojika Club & Pavilion"
                className={styles.amenityImg}
              />
              <div className={styles.amenityBadgeFloat}>The Mojika Club & Pavilion</div>
            </div>

            <div className={styles.amenitiesContent}>
              <span className="badge-emerald">Resort Living</span>
              <h2>25+ Curated Lifestyle Amenities</h2>
              <p>
                Live every day like a vacation. The community clubhouse serves as the premier social
                and fitness hub for families.
              </p>

              <div className={styles.amenitiesGrid}>
                <div className={styles.amenityItem}>
                  <Waves size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Infinity Swimming Pool</span>
                </div>
                <div className={styles.amenityItem}>
                  <Building2 size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>AC Banquet & Event Lawn</span>
                </div>
                <div className={styles.amenityItem}>
                  <Trees size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Landscaped Zen Gardens</span>
                </div>
                <div className={styles.amenityItem}>
                  <Sparkles size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Kids Adventure Playground</span>
                </div>
                <div className={styles.amenityItem}>
                  <Zap size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Tennis & Badminton Courts</span>
                </div>
                <div className={styles.amenityItem}>
                  <ShieldCheck size={18} className={styles.amenityItemIcon} />
                  <span className={styles.amenityItemTitle}>Yoga & Meditation Deck</span>
                </div>
              </div>

              <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
                <Calendar size={16} />
                <span>Schedule a Guided Clubhouse Tour</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EMI & Growth Calculator */}
      <section id="calculator" className={styles.section}>
        <div className="container">
          <EmiCalculator onOpenVisitModal={() => setVisitModalOpen(true)} />
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Proven Trust</span>
            <h2>Words From Our Landowners</h2>
            <p>
              Over 1,500+ families across Rajasthan have chosen Mojika Group for peaceful living and
              sound investment.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#b88a29" />
                ))}
              </div>
              <p className={styles.testiText}>
                "The 100-Bigha development in Maulasar is truly a game changer for the region. The
                wide 60-ft roads and underground utilities give it a genuine Jaipur-like standard.
                Registry was completed effortlessly."
              </p>
              <div className={styles.testiUser}>
                <strong>Narendra Choudhary</strong>
                <span>Plot Owner, Maulasar Township</span>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#b88a29" />
                ))}
              </div>
              <p className={styles.testiText}>
                "Mojika Group lives up to their slogan 'Building The Trust'. Their transparent documentation
                and timely development on Sikar Road made our purchase completely worry-free."
              </p>
              <div className={styles.testiUser}>
                <strong>Dr. Rajeshwari Sharma</strong>
                <span>Homeowner, Jaipur</span>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.testiRating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#b88a29" />
                ))}
              </div>
              <p className={styles.testiText}>
                "Getting a loan approved by SBI for our plot was seamless because all RERA and town
                planning sanctions were in order. The free cab pickup from Jaipur for our family visit
                was very appreciated."
              </p>
              <div className={styles.testiUser}>
                <strong>Amitabh Singhal</strong>
                <span>NRI Investor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2>Experience Mojika Grandeur In Person</h2>
          <p>
            Book your guided site inspection with complimentary chauffeur pickup from Jaipur to the
            100-Bigha Maulasar mega development.
          </p>
          <div className={styles.ctaButtons}>
            <button onClick={() => setVisitModalOpen(true)} className="btn-primary">
              <Calendar size={16} />
              <span>Book Free Site Visit (Free AC Cab)</span>
            </button>
            <a href="tel:9461051515" className="btn-secondary">
              <Phone size={16} />
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
        <ScheduleVisitModal
          isOpen={visitModalOpen}
          onClose={() => setVisitModalOpen(false)}
          defaultProject={selectedPlotForVisit}
        />
      )}
    </>
  );
}
