"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Waves,
  Trees,
  ShieldCheck,
  Dumbbell,
  Compass,
  ArrowRight,
  Phone,
  CheckCircle2,
  Coffee,
  Sun,
  Activity,
  Award,
} from "lucide-react";
import styles from "./Amenities.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";

const amenitiesCategories = [
  { id: "all", label: "All Amenities (30+)" },
  { id: "clubhouse", label: "Club & Wellness" },
  { id: "sports", label: "Sports & Fitness" },
  { id: "nature", label: "Parks & Greenery" },
  { id: "infrastructure", label: "Smart Infrastructure" },
];

const amenitiesList = [
  {
    title: "Club Mojika (25,000 Sq.Ft.)",
    category: "clubhouse",
    tag: "Signature Clubhouse",
    desc: "A majestic double-height grand lobby, private banquet hall, members-only café lounge, and indoor games arcade designed for royal social living.",
    image: "/images/clubhouse.jpg",
    highlights: ["Private Banquet Hall", "Members Lounge & Café", "Mini Theatre", "Billiards & Board Games"],
  },
  {
    title: "Olympic-Length Infinity Pool",
    category: "clubhouse",
    tag: "Aquatic Paradise",
    desc: "Heated resort-style infinity swimming pool with private sun-loungers, dedicated kids splash pool, and Jacuzzi jets surrounded by palm trees.",
    image: "/images/lifestyle.jpg",
    highlights: ["Temperature Controlled", "Kids Splash Zone", "Sun Deck & Cabanas", "Poolside Juice Bar"],
  },
  {
    title: "Grand Stone Entrance Arch",
    category: "infrastructure",
    tag: "Landmark Gateway",
    desc: "Majestic Rajasthani hand-carved stone archway with automatic boom barriers, RFID vehicle scanners, and 24/7 armed security checkposts.",
    image: "/images/gate.jpg",
    highlights: ["Hand-Carved Stone Facade", "RFID Access Gates", "24/7 Security Cabin", "CCTV ANPR Cameras"],
  },
  {
    title: "60-Ft & 40-Ft Tree-Lined Avenues",
    category: "infrastructure",
    tag: "Wide Blacktop Roads",
    desc: "Engineered asphalt roads designed with paved walkways, landscaped central verges, underground storm water drainage, and solar illumination.",
    image: "/images/plots.jpg",
    highlights: ["60-Ft Main Arterial Road", "40-Ft Sector Roads", "Underground Utility Ducts", "Paved Walkways"],
  },
  {
    title: "Scenic Highway Connectivity",
    category: "infrastructure",
    tag: "Fast Mobility",
    desc: "Direct access to the multi-lane expressway connecting Maulasar seamlessly to Jaipur, Kishangarh Airport, and Sikar.",
    image: "/images/highway.jpg",
    highlights: ["Zero Traffic Jams", "Wide Multi-Lane Corridor", "Signal-Free Junction", "Highway Facing Entry"],
  },
  {
    title: "Zen Meditation & Reflexology Park",
    category: "nature",
    tag: "Holistic Wellness",
    desc: "Natural stone reflexology walking trails, aromatic herb gardens, outdoor yoga pavilions, and peaceful water fountains for mindful mornings.",
    image: "/images/lifestyle.jpg",
    highlights: ["Reflexology Path", "Yoga & Meditation Deck", "Water Cascade", "Aromatherapy Garden"],
  },
  {
    title: "Multi-Sport Outdoor Arena",
    category: "sports",
    tag: "Active Lifestyle",
    desc: "Floodlit synthetic tennis court, dual badminton courts, half basketball court, and dedicated cricket nets with professional turfing.",
    image: "/images/clubhouse.jpg",
    highlights: ["Floodlit Tennis Court", "2 Badminton Courts", "Cricket Practice Nets", "Basketball Half-Court"],
  },
  {
    title: "3-Tier Smart Security Matrix",
    category: "infrastructure",
    tag: "Safety & Privacy",
    desc: "10-foot gated perimeter boundary wall with solar fencing, 360-degree night-vision CCTV surveillance, and verified visitor management app.",
    image: "/images/gate.jpg",
    highlights: ["Solar Electric Perimeter", "AI Motion Detection", "24/7 Security Patrols", "Visitor QR App"],
  },
  {
    title: "Children's Adventure Wonderland",
    category: "nature",
    tag: "Safe Play Space",
    desc: "Specially designed rubberized safety flooring, wooden obstacle courses, swings, slides, sand pits, and shaded seating for parents.",
    image: "/images/plots.jpg",
    highlights: ["Shock-Absorbing Floor", "Wooden Treehouse Play", "Toddler Sand Pit", "CCTV Covered"],
  },
];

export default function AmenitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  const filteredAmenities =
    activeCategory === "all"
      ? amenitiesList
      : amenitiesList.filter((a) => a.category === activeCategory);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <span className="section-tag">RESORT-STYLE LIVING</span>
          <h1 className={styles.heroTitle}>
            30+ World-Class Amenities at Mojika Maulasar
          </h1>
          <p className={styles.heroSubtitle}>
            100 बीघा में फैली इस टाउनशिप में हर सुख-सुविधा का ख्याल रखा गया है — जहां आधुनिकता,
            सुरक्षा और प्रकृति का अनोखा संगम मिलता है।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className={styles.categorySection}>
        <div className="container">
          <div className={styles.categoryTabs}>
            {amenitiesCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabBtnActive : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.amenitiesGrid}>
            {filteredAmenities.map((item, idx) => (
              <div key={idx} className={styles.amenityCard}>
                <div className={styles.cardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.cardImg} />
                  <span className={styles.cardTag}>{item.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <ul className={styles.highlightList}>
                    {item.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className={styles.checkIcon} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Mojika Spotlight */}
      <section className={styles.clubSpotlight}>
        <div className="container">
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightContent}>
              <span className={styles.goldBadge}>
                <Sparkles size={16} />
                <span>MEMBERSHIP PRIVILEGE</span>
              </span>
              <h2>Club Mojika: Where Luxury Meets Community</h2>
              <p>
                Every plot owner at Mojika Maulasar receives exclusive lifetime access to Club
                Mojika. Host private family celebrations, unwind by the infinity pool, or stay fit in
                our state-of-the-art gymnasium.
              </p>
              <div className={styles.specRow}>
                <div className={styles.specBox}>
                  <strong>25,000+</strong>
                  <span>Sq.Ft. Club Area</span>
                </div>
                <div className={styles.specBox}>
                  <strong>100%</strong>
                  <span>Plot Owner Access</span>
                </div>
                <div className={styles.specBox}>
                  <strong>24/7</strong>
                  <span>Concierge Service</span>
                </div>
              </div>
              <button
                className="btn-mockup-primary"
                onClick={() => setVisitModalOpen(true)}
              >
                <Phone size={16} />
                <span>Book VIP Site & Club Tour</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className={styles.spotlightVisual}>
              <img
                src="/images/clubhouse.jpg"
                alt="Club Mojika Interior"
                className={styles.spotlightImg}
              />
            </div>
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
