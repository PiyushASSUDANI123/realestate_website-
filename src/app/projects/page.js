"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle,
  Download,
  Phone,
  ArrowRight,
  Maximize2,
  ShieldCheck,
  Building,
  Trees,
} from "lucide-react";
import styles from "./Projects.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import BannerModal from "@/components/BannerModal";

const projectsData = [
  {
    id: "maulasar",
    title: "Mojika Grand Township",
    subtitle: "A 100-Bigha Master-Planned Dream Township",
    category: "Mega Townships",
    scale: "100+ Bigha Integrated Township",
    location: "State Highway, Maulasar (Rajasthan)",
    status: "Pre-Launch VIP Booking",
    statusColor: "#c59828",
    image: "/images/masterplan.webp",
    plotSizes: "120 - 500 Sq. Yds",
    roadWidth: "60-Ft & 40-Ft Boulevards",
    possession: "Dec 2027 (Fast Track)",
    description:
      "The flagship mega-development bringing Jaipur-style cosmopolitan luxury, 25+ resort amenities, 10-acre central greens, and underground infrastructure to Maulasar.",
    features: [
      "100 Bigha Master-Planned Gated Community",
      "Grand Clubhouse with Heated Infinity Pool",
      "Underground Electrical & Water Distribution",
      "100% Legal Clear Title & Immediate Registry",
    ],
    isFlagship: true,
  },
  {
    id: "royal-meadows",
    title: "Mojika Royal Meadows",
    subtitle: "Where Regal Heritage Meets Lush Green Living",
    category: "Plotted Communities",
    scale: "35 Bigha Plotted Enclave",
    location: "Tonk Road Growth Corridor, Jaipur",
    status: "Under Construction",
    statusColor: "#0f4c3a",
    image: "/images/hero.webp",
    plotSizes: "150 - 350 Sq. Yds",
    roadWidth: "50-Ft Tree-lined Roads",
    possession: "Ready Demarcation",
    description:
      "Exclusive low-density gated villa community strategically located near Ring Road junction, featuring landscaped avenues and a private recreational sports club.",
    features: [
      "Secured Boundary Wall with 24/7 Guards",
      "Vastu Compliant Corner & Park-Facing Plots",
      "Pre-approved Home Loans from Top Banks",
      "Direct Connectivity to Jaipur International Airport",
    ],
  },
  {
    id: "serene-greens",
    title: "Mojika Serene Greens",
    subtitle: "Eco-Luxury Villa Estates in the Lap of Nature",
    category: "Plotted Communities",
    scale: "25 Bigha Eco-Community",
    location: "Main Sikar Road, Jaipur",
    status: "Booking Fast",
    statusColor: "#0f4c3a",
    image: "/images/clubhouse.webp",
    plotSizes: "200 - 450 Sq. Yds",
    roadWidth: "40-Ft Sector Roads",
    possession: "Mid 2026",
    description:
      "Designed around wellness and ecological harmony, featuring thousands of fruit-bearing trees, solar street lighting, rainwater recharging, and outdoor yoga decks.",
    features: [
      "Over 40% Land Dedicated to Greens & Parks",
      "Modern Community Hall & Indoor Games",
      "Wide Pedestrian Walkways & Cycling Track",
      "RERA Registered & Clear Title Guarantee",
    ],
  },
  {
    id: "imperial-villas",
    title: "Mojika Imperial Mansions",
    subtitle: "Turnkey Modern Architectural Masterpieces",
    category: "Luxury Villas",
    scale: "Boutique Villa Enclave",
    location: "Mansarovar Extension, Jaipur",
    status: "Ready for Possession",
    statusColor: "#2563eb",
    image: "/images/interior.webp",
    plotSizes: "300 - 600 Sq. Yds",
    roadWidth: "40-Ft Paved Roads",
    possession: "Immediate Handover",
    description:
      "Ultra-luxury turnkey designer villas with double-height living rooms, Italian marble finishes, private elevators, and landscaped private backyards.",
    features: [
      "Turnkey Fully Customized Luxury Architecture",
      "Private Swimming Pool & Terrace Lounge",
      "Smart Home Automation Pre-installed",
      "Prime Urban Location near Top Schools & Hospitals",
    ],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [selectedProjectForVisit, setSelectedProjectForVisit] = useState(
    "Mojika Grand Township, Maulasar (100 Bigha)"
  );
  const [bannerModalOpen, setBannerModalOpen] = useState(false);

  const categories = [
    "All Projects",
    "Mega Townships",
    "Plotted Communities",
    "Luxury Villas",
  ];

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleOpenVisit = (projectTitle) => {
    setSelectedProjectForVisit(projectTitle);
    setVisitModalOpen(true);
  };

  return (
    <>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <span className="badge-gold">
            <Sparkles size={14} /> The Mojika Portfolio
          </span>
          <h1>Iconic Landmarks & Plotted Communities</h1>
          <p>
            Explore our meticulously planned residential developments across Rajasthan. Built on
            unwavering trust, supreme infrastructure, and 100% legal clarity.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterInner}>
            <div className={styles.filterTabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.filterBtn} ${
                    selectedCategory === cat ? styles.filterBtnActive : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.statsCount}>
              Showing <strong>{filteredProjects.length}</strong> Premier Developments
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} id={project.id} className={styles.projectCard}>
                <div className={styles.projectMedia}>
                  <img src={project.image} alt={project.title} className={styles.projectImg} />
                  <div className={styles.statusBadge}>{project.status}</div>
                  <div className={styles.locationBadge}>
                    <MapPin size={14} color="#c59828" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className={styles.projectBody}>
                  <span className={styles.projectScale}>{project.scale}</span>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.specsGrid}>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Plot Sizes</span>
                      <strong className={styles.specVal}>{project.plotSizes}</strong>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Road Network</span>
                      <strong className={styles.specVal}>{project.roadWidth}</strong>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Handover</span>
                      <strong className={styles.specVal}>{project.possession}</strong>
                    </div>
                  </div>

                  <div className={styles.featuresList}>
                    {project.features.map((feat, idx) => (
                      <div key={idx} className={styles.feat}>
                        <CheckCircle size={15} color="#0f4c3a" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.projectActions}>
                    <button
                      onClick={() => handleOpenVisit(project.title)}
                      className="btn-primary"
                      style={{ padding: "10px 18px", fontSize: "0.85rem", flex: 1 }}
                    >
                      <Calendar size={16} />
                      <span>Book Site Tour</span>
                    </button>

                    {project.isFlagship && (
                      <button
                        onClick={() => setBannerModalOpen(true)}
                        className="btn-secondary"
                        style={{ padding: "9px 14px", fontSize: "0.85rem" }}
                      >
                        <Maximize2 size={15} />
                        <span>View Launch Poster</span>
                      </button>
                    )}

                    <a
                      href="tel:9461051515"
                      className="btn-secondary"
                      style={{ padding: "9px 14px", fontSize: "0.85rem" }}
                      title="Speak to Sales Specialist"
                    >
                      <Phone size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {visitModalOpen && (
        <ScheduleVisitModal
          isOpen={visitModalOpen}
          onClose={() => setVisitModalOpen(false)}
          defaultProject={selectedProjectForVisit}
        />
      )}
      {bannerModalOpen && (
        <BannerModal isOpen={bannerModalOpen} onClose={() => setBannerModalOpen(false)} />
      )}
    </>
  );
}
