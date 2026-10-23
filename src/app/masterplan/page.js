"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  MapPin,
  Download,
  Phone,
  Compass,
  CheckCircle2,
  Trees,
  ShieldCheck,
  Zap,
  Droplets,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import styles from "./Masterplan.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";

const sectors = [
  {
    id: "sector-a",
    name: "Sector A: Royal Palms Enclave",
    plotRange: "250 to 500 Sq. Yards",
    facing: "Lake & Central Boulevard Facing",
    status: "Limited Luxury Inventory",
    desc: "Designed exclusively for grand luxury villas, Sector A features 60-ft wide road frontages, private palm-lined lanes, and immediate proximity to the grand entrance arch.",
    features: [
      "Exclusive 60-Ft boulevard access",
      "Vastu-compliant East/North plots",
      "Direct walking path to Club Mojika",
      "Dedicated mini-park in every lane",
    ],
  },
  {
    id: "sector-b",
    name: "Sector B: Emerald Boulevard",
    plotRange: "150 to 300 Sq. Yards",
    facing: "Park & Sports Arena Facing",
    status: "Most Popular for Families",
    desc: "The heartbeat of the township, Sector B overlooks the multi-sport arena and central manicured lawns, offering the ideal setting for modern family life.",
    features: [
      "Adjacent to Sports Complex",
      "Underground electrical & fiber grid",
      "40-Ft wide asphalt internal avenues",
      "Dual kids play parks within 100m",
    ],
  },
  {
    id: "sector-c",
    name: "Sector C: Lakeview Enclave",
    plotRange: "100 to 200 Sq. Yards",
    facing: "Green Belt & Highway Facing",
    status: "High Appreciation Potential",
    desc: "Compact, high-efficiency plot configurations tailored for smart investors and young homeowners looking for rapid capital appreciation with easy entry pricing.",
    features: [
      "High liquidity & fast resale",
      "Approved for 80% bank financing",
      "Walking distance to commercial plaza",
      "Gated boom-barrier access",
    ],
  },
];

const technicalSpecs = [
  {
    icon: <Maximize2 size={24} />,
    title: "60-Ft & 40-Ft Roads",
    desc: "Heavy-duty blacktop asphalt roads designed to withstand all weather conditions with concrete curb stones.",
  },
  {
    icon: <Zap size={24} />,
    title: "Underground Electrification",
    desc: "Zero overhead hanging wires. All high-tension power, streetlighting, and optic fiber lines run through underground conduits.",
  },
  {
    icon: <Droplets size={24} />,
    title: "Dual Water Supply Network",
    desc: "Dedicated high-pressure potable water pipeline with automated overhead reservoir and rainwater harvesting shafts.",
  },
  {
    icon: <Trees size={24} />,
    title: "Eco-STP & Zero Discharge",
    desc: "State-of-the-art sewage treatment plant recycling 100% of wastewater for public park landscaping and organic gardens.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Vastu Compliant Layout",
    desc: "Scientifically oriented plot demarcations following traditional Vedic Vastu Shastra principles for prosperity and harmony.",
  },
  {
    icon: <Compass size={24} />,
    title: "Solar Street Illumination",
    desc: "High-lumen LED solar streetlights with automatic day/night sensors and lithium-iron-phosphate battery backup.",
  },
];

export default function MasterplanPage() {
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleBrochureDownload = (e) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      window.open("/images/hero-bg.webp", "_blank");
      setDownloadSuccess(false);
    }, 1200);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <span className="section-tag">ARCHITECTURAL EXCELLENCE</span>
          <h1 className={styles.heroTitle}>
            100-Bigha Masterplan & Township Layout
          </h1>
          <p className={styles.heroSubtitle}>
            एक सोच-समझकर बनाई गई आधुनिक प्लॉटिंग योजना — जहां चौड़ी सड़कें, खुले बगीचे, और विश्वस्तरीय
            इंफ्रास्ट्रक्चर मिलकर एक संपूर्ण जीवनशैली का निर्माण करते हैं।
          </p>
        </div>
      </section>

      {/* Masterplan Visual & Interactive Selector */}
      <section className={styles.masterVisualSection}>
        <div className="container">
          <div className={styles.visualCard}>
            <div className={styles.visualHeader}>
              <div className={styles.visualBadge}>
                <Layers size={16} />
                <span>OFFICIAL TOWNSHIP MASTER LAYOUT</span>
              </div>
              <button
                className={styles.downloadBrochureBtn}
                onClick={handleBrochureDownload}
              >
                <Download size={16} />
                <span>{downloadSuccess ? "Preparing PDF..." : "Download High-Res Masterplan PDF"}</span>
              </button>
            </div>

            <div className={styles.mainMapWrapper}>
              <img
                src="/images/plots.webp"
                alt="Mojika 100-Bigha Master Layout Map"
                className={styles.masterMapImg}
              />
              <div className={styles.mapOverlayNotice}>
                <span>100 बीघा टाउनशिप • सुनियोजित प्लॉटिंग • 60-Ft चौड़ी मुख्य सड़कें</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Breakdown */}
      <section className={styles.sectorSection}>
        <div className="container">
          <div className={styles.sectorGrid}>
            <div className={styles.sectorNav}>
              <h3>Choose a Sector to Explore</h3>
              <div className={styles.sectorList}>
                {sectors.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSector(s)}
                    className={`${styles.sectorTab} ${selectedSector.id === s.id ? styles.sectorTabActive : ""}`}
                  >
                    <strong>{s.name}</strong>
                    <span>{s.plotRange}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.sectorDetailCard}>
              <div className={styles.detailHeader}>
                <span className={styles.sectorStatusBadge}>{selectedSector.status}</span>
                <h2>{selectedSector.name}</h2>
                <div className={styles.specPillRow}>
                  <div className={styles.specPill}>
                    <strong>Plot Sizes:</strong> {selectedSector.plotRange}
                  </div>
                  <div className={styles.specPill}>
                    <strong>Orientation:</strong> {selectedSector.facing}
                  </div>
                </div>
              </div>

              <p className={styles.sectorDesc}>{selectedSector.desc}</p>

              <div className={styles.sectorFeatures}>
                <h4>Key Sector Features:</h4>
                <div className={styles.featuresList}>
                  {selectedSector.features.map((f, i) => (
                    <div key={i} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.detailActionRow}>
                <button
                  className="btn-mockup-primary"
                  onClick={() => setVisitModalOpen(true)}
                >
                  <Phone size={16} />
                  <span>Inquire About {selectedSector.name.split(":")[0]}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical & Engineering Specifications */}
      <section className={styles.specsSection}>
        <div className="container">
          <div className={styles.specsHeader}>
            <span className="section-tag">ENGINEERING STANDARDS</span>
            <h2>Township Infrastructure Benchmarks</h2>
            <p>Every meter of Mojika Maulasar is engineered to match premier Tier-1 development standards.</p>
          </div>

          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className={styles.specCard}>
                <div className={styles.specIcon}>{spec.icon}</div>
                <h3>{spec.title}</h3>
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />
    </div>
  );
}
