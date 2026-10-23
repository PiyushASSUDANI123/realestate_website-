"use client";

import { useState } from "react";
import { Compass, CheckCircle2, Shield, Eye, Calendar, Sparkles, Filter, Layers } from "lucide-react";
import styles from "./InteractivePlotSelector.module.css";

const sectors = [
  {
    id: "sector-a",
    name: "Sector A • Palm Avenue",
    road: "60-Ft Main Boulevard",
    highlight: "Direct Clubhouse & Main Gate Access",
    plots: [
      { id: "A-101", size: "200 Sq. Yd", dims: "30' × 60'", facing: "North-East (Vastu)", status: "Available", priceEst: "₹24.8 Lakhs", tag: "Corner Plot" },
      { id: "A-102", size: "200 Sq. Yd", dims: "30' × 60'", facing: "North", status: "Available", priceEst: "₹23.5 Lakhs", tag: "Prime Facing" },
      { id: "A-103", size: "200 Sq. Yd", dims: "30' × 60'", facing: "North", status: "Reserved", priceEst: "₹23.5 Lakhs", tag: "Reserved" },
      { id: "A-104", size: "200 Sq. Yd", dims: "30' × 60'", facing: "East", status: "Available", priceEst: "₹23.5 Lakhs", tag: "Morning Sun" },
      { id: "A-105", size: "250 Sq. Yd", dims: "35' × 64'", facing: "East", status: "Available", priceEst: "₹29.4 Lakhs", tag: "Wide Frontage" },
      { id: "A-106", size: "250 Sq. Yd", dims: "35' × 64'", facing: "North-East", status: "Sold", priceEst: "Sold Out", tag: "Demarcated" },
      { id: "A-107", size: "200 Sq. Yd", dims: "30' × 60'", facing: "North", status: "Available", priceEst: "₹23.5 Lakhs", tag: "Vastu" },
      { id: "A-108", size: "200 Sq. Yd", dims: "30' × 60'", facing: "East", status: "Available", priceEst: "₹23.5 Lakhs", tag: "Near Park" },
    ],
  },
  {
    id: "sector-b",
    name: "Sector B • Central Park Enclave",
    road: "40-Ft Landscaped Avenue",
    highlight: "Overlooking 10-Acre Central Theme Park",
    plots: [
      { id: "B-201", size: "350 Sq. Yd", dims: "42' × 75'", facing: "Park-Facing (North)", status: "Available", priceEst: "₹42.0 Lakhs", tag: "Executive Estate" },
      { id: "B-202", size: "350 Sq. Yd", dims: "42' × 75'", facing: "Park-Facing (North)", status: "Reserved", priceEst: "₹42.0 Lakhs", tag: "Park Front" },
      { id: "B-203", size: "350 Sq. Yd", dims: "42' × 75'", facing: "East", status: "Available", priceEst: "₹41.5 Lakhs", tag: "Luxury Villa" },
      { id: "B-204", size: "500 Sq. Yd", dims: "50' × 90'", facing: "North-East", status: "Available", priceEst: "₹59.0 Lakhs", tag: "Mansion Plot" },
      { id: "B-205", size: "350 Sq. Yd", dims: "42' × 75'", facing: "North", status: "Available", priceEst: "₹41.5 Lakhs", tag: "Corner" },
      { id: "B-206", size: "350 Sq. Yd", dims: "42' × 75'", facing: "East", status: "Sold", priceEst: "Sold Out", tag: "Handed Over" },
    ],
  },
  {
    id: "sector-c",
    name: "Sector C • Boulevard Greens",
    road: "40-Ft Sector Road",
    highlight: "High Rental Yield & Fast Appreciation",
    plots: [
      { id: "C-301", size: "120 Sq. Yd", dims: "24' × 45'", facing: "East", status: "Available", priceEst: "₹14.2 Lakhs", tag: "Starter Plot" },
      { id: "C-302", size: "120 Sq. Yd", dims: "24' × 45'", facing: "East", status: "Available", priceEst: "₹14.2 Lakhs", tag: "Compact Villa" },
      { id: "C-303", size: "150 Sq. Yd", dims: "27' × 50'", facing: "North", status: "Available", priceEst: "₹17.8 Lakhs", tag: "Popular 3BHK" },
      { id: "C-304", size: "150 Sq. Yd", dims: "27' × 50'", facing: "North", status: "Reserved", priceEst: "₹17.8 Lakhs", tag: "Reserved" },
      { id: "C-305", size: "150 Sq. Yd", dims: "27' × 50'", facing: "North-East", status: "Available", priceEst: "₹18.2 Lakhs", tag: "Vastu Choice" },
      { id: "C-306", size: "120 Sq. Yd", dims: "24' × 45'", facing: "East", status: "Available", priceEst: "₹14.2 Lakhs", tag: "High ROI" },
    ],
  },
];

export default function InteractivePlotSelector({ onBookPlot }) {
  const [activeSectorId, setActiveSectorId] = useState("sector-a");
  const currentSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];
  const [selectedPlot, setSelectedPlot] = useState(currentSector.plots[0]);

  const handleSectorChange = (secId) => {
    setActiveSectorId(secId);
    const sec = sectors.find((s) => s.id === secId);
    if (sec && sec.plots.length > 0) {
      setSelectedPlot(sec.plots[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div>
          <span className="badge-gold">
            <Layers size={13} /> Live Township Inventory
          </span>
          <h3>Interactive Plot Master Layout</h3>
          <p>
            Select a sector, inspect individual plot dimensions and Vastu orientation, and reserve your plot with locked pre-launch pricing.
          </p>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotAvailable}`} /> Available
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotReserved}`} /> Reserved
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotSold}`} /> Sold Out
          </div>
        </div>
      </div>

      {/* Sector Tabs */}
      <div className={styles.sectorTabs}>
        {sectors.map((sec) => (
          <button
            key={sec.id}
            onClick={() => handleSectorChange(sec.id)}
            className={`${styles.sectorBtn} ${activeSectorId === sec.id ? styles.sectorBtnActive : ""}`}
          >
            <span>{sec.name}</span>
            <small>{sec.road}</small>
          </button>
        ))}
      </div>

      {/* Main Grid View */}
      <div className={styles.mainGrid}>
        {/* Interactive Visual Plot Map */}
        <div className={styles.plotsCard}>
          <div className={styles.roadIndicator}>
            <span>{currentSector.road} • Dedicated Underground Utilities & Palm Trees</span>
          </div>

          <div className={styles.plotsGrid}>
            {currentSector.plots.map((plot) => {
              const isSelected = selectedPlot?.id === plot.id;
              const statusClass =
                plot.status === "Available"
                  ? styles.plotAvailable
                  : plot.status === "Reserved"
                  ? styles.plotReserved
                  : styles.plotSold;

              return (
                <button
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className={`${styles.plotTile} ${statusClass} ${isSelected ? styles.plotSelected : ""}`}
                >
                  <div className={styles.plotTileHeader}>
                    <span className={styles.plotNumber}>{plot.id}</span>
                    <span className={styles.plotStatusPill}>{plot.status}</span>
                  </div>
                  <div className={styles.plotTileBody}>
                    <strong>{plot.size}</strong>
                    <span>{plot.facing}</span>
                  </div>
                  <div className={styles.plotTag}>{plot.tag}</div>
                </button>
              );
            })}
          </div>

          <div className={styles.plotGuideText}>
            <Sparkles size={14} color="#b88a29" />
            <span>Click any plot card above to review exact specifications & request hold</span>
          </div>
        </div>

        {/* Sidebar Inspector Card */}
        <div className={styles.inspectorCard}>
          {selectedPlot ? (
            <>
              <div className={styles.inspectorTop}>
                <div>
                  <span className={styles.inspectorSector}>{currentSector.name}</span>
                  <h4>Plot {selectedPlot.id}</h4>
                </div>
                <span
                  className={`${styles.statusBadge} ${
                    selectedPlot.status === "Available"
                      ? styles.badgeAvail
                      : selectedPlot.status === "Reserved"
                      ? styles.badgeRes
                      : styles.badgeSold
                  }`}
                >
                  {selectedPlot.status}
                </span>
              </div>

              <div className={styles.specsList}>
                <div className={styles.specRow}>
                  <span>Plot Configuration:</span>
                  <strong>{selectedPlot.size}</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Plot Dimensions:</span>
                  <strong>{selectedPlot.dims}</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Vastu Facing:</span>
                  <strong>{selectedPlot.facing}</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Frontage Road:</span>
                  <strong>{currentSector.road}</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Legal Title:</span>
                  <strong style={{ color: "#0f4c3a" }}>100% Clear & RERA Approved</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Estimated Value:</span>
                  <strong style={{ color: "#b88a29", fontSize: "1.05rem" }}>
                    {selectedPlot.priceEst}
                  </strong>
                </div>
              </div>

              <div className={styles.inspectorFeatures}>
                <div className={styles.featItem}>
                  <CheckCircle2 size={16} color="#0f4c3a" />
                  <span>Immediate spot registry with demarcated boundary stones</span>
                </div>
                <div className={styles.featItem}>
                  <CheckCircle2 size={16} color="#0f4c3a" />
                  <span>Pre-approved bank loans from SBI, HDFC & ICICI</span>
                </div>
                <div className={styles.featItem}>
                  <CheckCircle2 size={16} color="#0f4c3a" />
                  <span>Underground water pipeline & electricity feeder points</span>
                </div>
              </div>

              {selectedPlot.status === "Available" ? (
                <button
                  onClick={() => onBookPlot && onBookPlot(selectedPlot.id, currentSector.name)}
                  className="btn-primary"
                  style={{ width: "100%", marginTop: "14px" }}
                >
                  <Calendar size={16} />
                  <span>Book VIP Site Visit for Plot {selectedPlot.id}</span>
                </button>
              ) : selectedPlot.status === "Reserved" ? (
                <button
                  onClick={() => onBookPlot && onBookPlot(selectedPlot.id, currentSector.name)}
                  className="btn-secondary"
                  style={{ width: "100%", marginTop: "14px" }}
                >
                  <span>Inquire for Waiting List</span>
                </button>
              ) : (
                <div className={styles.soldNote}>
                  This plot is already allocated. Please choose an adjacent available plot.
                </div>
              )}
            </>
          ) : (
            <div className={styles.emptyPrompt}>Select any plot from the layout grid.</div>
          )}
        </div>
      </div>
    </div>
  );
}
