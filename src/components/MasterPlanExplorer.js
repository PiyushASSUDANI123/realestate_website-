"use client";

import { useState } from "react";
import { Compass, CheckCircle2, Trees, Sparkles, Shield, Maximize2, Layers } from "lucide-react";
import styles from "./MasterPlanExplorer.module.css";

const zones = [
  {
    id: "entrance",
    title: "Grand 60-Ft Imperial Gateway",
    badge: "Entrance Zone",
    coords: { top: "82%", left: "50%" },
    description: "Multi-lane secured security check, royal Rajasthani architectural arch, CCTV surveillance and palm-lined main boulevard.",
    features: ["60-Ft Wide Asphalt Road", "Automated Boom Barriers", "Visitor Lounge"],
  },
  {
    id: "clubhouse",
    title: "The Regal Clubhouse & Pavilion",
    badge: "Lifestyle Zone",
    coords: { top: "38%", left: "61%" },
    description: "State-of-the-art community clubhouse with heated infinity pool, gymnasium, indoor badminton, banquet hall, and coffee lounge.",
    features: ["Infinity Edge Pool", "Modern Health Club", "Party Lawn"],
  },
  {
    id: "centralpark",
    title: "10-Acre Central Theme Park",
    badge: "Green Oasis",
    coords: { top: "45%", left: "48%" },
    description: "Expansive green lung with Japanese zen garden, reflexology pathway, 1.5 km jogging track, and gazebo sit-outs.",
    features: ["Oxygen-Rich Tree Cover", "Kids Play Area", "Amphitheatre"],
  },
  {
    id: "premiumplots",
    title: "Executive Villa Enclave",
    badge: "Residential",
    coords: { top: "28%", left: "42%" },
    description: "East and North facing premium Vastu-compliant plots with underground electrical cabling, piped water connection, and wide avenue frontage.",
    features: ["150 - 450 Sq. Yds", "100% Vastu Compliant", "Independent Water Connection"],
  },
  {
    id: "sports",
    title: "Multi-Sport Activity Arena",
    badge: "Recreation",
    coords: { top: "42%", left: "68%" },
    description: "Full-sized tennis court, basketball half-court, skating rink, and open-air gymnasium.",
    features: ["Floodlit Courts", "Professional Turf", "Yoga Deck"],
  },
];

export default function MasterPlanExplorer({ onBookSiteVisit }) {
  const [activeZone, setActiveZone] = useState(zones[1]);
  const [selectedPlotType, setSelectedPlotType] = useState("200");

  const plotTypes = [
    { size: "120", label: "120 Sq. Yds", dims: "25' × 43'", ideal: "Compact Villa / High Rental Yield", priceEst: "Flexible Plans Available" },
    { size: "200", label: "200 Sq. Yds", dims: "30' × 60'", ideal: "Luxury 3/4 BHK Independent Villa", priceEst: "Most Popular Category" },
    { size: "350", label: "350 Sq. Yds", dims: "42' × 75'", ideal: "Grand Mansion with Private Lawn", priceEst: "Corner & Park Facing" },
    { size: "500", label: "500+ Sq. Yds", dims: "50' × 90'", ideal: "Custom Luxury Estate / Farmhouse", priceEst: "Exclusive Limited Edition" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className="badge-gold">
          <Layers size={14} /> Master Plan Visualization
        </div>
        <h3>Interactive 100-Bigha Township Blueprint</h3>
        <p>Explore zoning, infrastructure, and world-class amenities designed for generational living.</p>
      </div>

      <div className={styles.mainLayout}>
        {/* Interactive Map Visual */}
        <div className={styles.mapContainer}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/masterplan.webp"
              alt="100 Bigha Master Plan 3D Rendering"
              className={styles.mapImage}
            />

            {/* Hotspot Pins */}
            {zones.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  className={`${styles.pin} ${isSelected ? styles.pinActive : ""}`}
                  style={{ top: zone.coords.top, left: zone.coords.left }}
                  onClick={() => setActiveZone(zone)}
                  aria-label={zone.title}
                >
                  <span className={styles.pinDot} />
                  <span className={styles.pinPulse} />
                  <span className={styles.pinLabel}>{zone.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.mapFooterGuide}>
            <span><Sparkles size={14} color="#dfba5c" /> Click any golden pin on the blueprint to inspect zones</span>
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className={styles.detailSidebar}>
          <div className={styles.activeZoneCard}>
            <div className={styles.cardTop}>
              <span className="badge-gold">{activeZone.badge}</span>
              <span className={styles.scaleTag}>RERA Registered</span>
            </div>
            <h4>{activeZone.title}</h4>
            <p className={styles.zoneDesc}>{activeZone.description}</p>

            <div className={styles.featureList}>
              {activeZone.features.map((feat, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <CheckCircle2 size={16} color="#0f4c3a" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className={styles.sidebarCta}>
              <button onClick={onBookSiteVisit} className="btn-primary" style={{ width: "100%" }}>
                Schedule Site Inspection
              </button>
            </div>
          </div>

          {/* Plot Size Selector Box */}
          <div className={styles.plotSelectorBox}>
            <div className={styles.plotBoxHeader}>
              <span className={styles.boxTitle}>Choose Plot Category:</span>
            </div>
            <div className={styles.plotTabs}>
              {plotTypes.map((pt) => (
                <button
                  key={pt.size}
                  onClick={() => setSelectedPlotType(pt.size)}
                  className={`${styles.plotTab} ${selectedPlotType === pt.size ? styles.plotTabActive : ""}`}
                >
                  {pt.label}
                </button>
              ))}
            </div>

            {(() => {
              const currentPlot = plotTypes.find((p) => p.size === selectedPlotType);
              return (
                <div className={styles.plotDetails}>
                  <div className={styles.plotRow}>
                    <span>Dimensions:</span>
                    <strong>{currentPlot.dims}</strong>
                  </div>
                  <div className={styles.plotRow}>
                    <span>Suited For:</span>
                    <strong>{currentPlot.ideal}</strong>
                  </div>
                  <div className={styles.plotRow}>
                    <span>Availability:</span>
                    <strong style={{ color: "#0f4c3a" }}>{currentPlot.priceEst}</strong>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
