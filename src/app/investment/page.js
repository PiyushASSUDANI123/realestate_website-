"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  Building,
  MapPin,
  ArrowRight,
  Phone,
  Calculator,
  Percent,
  CheckCircle2,
  FileCheck,
  BadgeCheck,
  Landmark,
} from "lucide-react";
import styles from "./Investment.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";

const growthDrivers = [
  {
    title: "Jaipur-Maulasar Mega Highway",
    desc: "Direct multi-lane expressway access cutting travel time to Jaipur and Sikar significantly, driving commercial and residential property prices upward.",
    stat: "45 Min",
    statLabel: "Signal-Free Transit",
  },
  {
    title: "DMIC Industrial Corridor Proximity",
    desc: "Positioned along the high-growth Delhi-Mumbai Industrial Corridor catchment zone, generating massive employment and housing demand.",
    stat: "1.2 Lakh+",
    statLabel: "Job Creation Catchment",
  },
  {
    title: "Sambhar Eco-Tourism Hub",
    desc: "Rajasthan Government's ₹800 Cr sanctioned eco-tourism and luxury resort corridor, making land in Maulasar ideal for high-yield weekend homes.",
    stat: "₹800 Cr",
    statLabel: "Govt Infrastructure Push",
  },
  {
    title: "100% Freehold Clear Title Registry",
    desc: "Instant individual registry with demarcation and possession certificate. Zero litigation, RERA registered, and approved by all national banks.",
    stat: "100%",
    statLabel: "Clear Title Assurance",
  },
];

const bankPartners = [
  { name: "State Bank of India", badge: "Max Loan 80%", rate: "8.35% p.a." },
  { name: "HDFC Bank", badge: "Instant Sanction", rate: "8.40% p.a." },
  { name: "ICICI Bank", badge: "Pre-Approved", rate: "8.50% p.a." },
  { name: "Bank of Baroda", badge: "Low Processing Fee", rate: "8.45% p.a." },
  { name: "PNB Housing", badge: "Up to 25 Years", rate: "8.60% p.a." },
];

export default function InvestmentPage() {
  const [plotSize, setPlotSize] = useState(200); // sq. yards
  const [holdingPeriod, setHoldingPeriod] = useState(5); // years
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  // Price calculations
  const pricePerSqYd = 12500;
  const initialCost = plotSize * pricePerSqYd;
  const annualGrowthRate = 0.16; // 16% historical CAGR
  const futureValue = Math.round(initialCost * Math.pow(1 + annualGrowthRate, holdingPeriod));
  const estimatedGain = futureValue - initialCost;

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <span className="section-tag">HIGH ROI OPPORTUNITY</span>
          <h1 className={styles.heroTitle}>
            Why Invest in Maulasar & The Jaipur Growth Corridor
          </h1>
          <p className={styles.heroSubtitle}>
            मौलासर में आज का निवेश आपके भविष्य की वित्तीय स्वतंत्रता की नींव है। 100 बीघा की इस
            टाउनशिप में 16% से अधिक वार्षिक कैपिटल एप्रिसिएशन का ऐतिहासिक ट्रैक रिकॉर्ड।
          </p>
        </div>
      </section>

      {/* Growth Drivers Grid */}
      <section className={styles.driversSection}>
        <div className="container">
          <div className={styles.driversGrid}>
            {growthDrivers.map((driver, idx) => (
              <div key={idx} className={styles.driverCard}>
                <div className={styles.driverHeader}>
                  <div className={styles.driverStat}>{driver.stat}</div>
                  <div className={styles.driverStatLabel}>{driver.statLabel}</div>
                </div>
                <h3 className={styles.driverTitle}>{driver.title}</h3>
                <p className={styles.driverDesc}>{driver.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Wealth Projection Calculator */}
      <section className={styles.calculatorSection}>
        <div className="container">
          <div className={styles.calcWrapper}>
            <div className={styles.calcLeft}>
              <span className={styles.calcTag}>
                <Calculator size={16} />
                <span>ROI CALCULATOR</span>
              </span>
              <h2>Project Your Wealth & Returns</h2>
              <p>
                Calculate your estimated capital appreciation based on historical corridor growth
                benchmarks (16% projected CAGR).
              </p>

              {/* Slider 1: Plot Size */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabelRow}>
                  <span>Plot Size:</span>
                  <strong>{plotSize} Sq. Yards ({plotSize * 9} Sq.Ft.)</strong>
                </div>
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="50"
                  value={plotSize}
                  onChange={(e) => setPlotSize(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
                <div className={styles.sliderMarks}>
                  <span>100 Yd</span>
                  <span>250 Yd</span>
                  <span>400 Yd</span>
                  <span>600 Yd</span>
                </div>
              </div>

              {/* Slider 2: Holding Period */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabelRow}>
                  <span>Holding Horizon:</span>
                  <strong>{holdingPeriod} Years (2026 - {2026 + holdingPeriod})</strong>
                </div>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  value={holdingPeriod}
                  onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
                <div className={styles.sliderMarks}>
                  <span>3 Yrs</span>
                  <span>5 Yrs</span>
                  <span>7 Yrs</span>
                  <span>10 Yrs</span>
                </div>
              </div>
            </div>

            <div className={styles.calcRight}>
              <div className={styles.summaryCard}>
                <span className={styles.summarySmallTitle}>ESTIMATED INVESTMENT SUMMARY</span>

                <div className={styles.summaryItem}>
                  <span>Today's Purchase Value:</span>
                  <strong>₹{(initialCost / 100000).toFixed(2)} Lakh</strong>
                </div>

                <div className={styles.summaryItem}>
                  <span>Projected Value in {2026 + holdingPeriod}:</span>
                  <strong className={styles.highlightGreen}>
                    ₹{(futureValue / 100000).toFixed(2)} Lakh
                  </strong>
                </div>

                <div className={styles.gainBox}>
                  <div className={styles.gainLabel}>Estimated Capital Wealth Gain:</div>
                  <div className={styles.gainAmount}>
                    + ₹{(estimatedGain / 100000).toFixed(2)} Lakh
                  </div>
                  <div className={styles.cagrBadge}>Based on 16% Corridor CAGR</div>
                </div>

                <button
                  className="btn-mockup-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setVisitModalOpen(true)}
                >
                  <Phone size={16} />
                  <span>Lock Pre-Launch Plot Rate</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Land Price Trend */}
      <section className={styles.trendSection}>
        <div className="container">
          <div className={styles.trendBox}>
            <span className="section-tag">HISTORICAL DATA</span>
            <h2>Land Price Appreciation Timeline in Maulasar Corridor</h2>
            <div className={styles.timelineGrid}>
              <div className={styles.timeCard}>
                <span className={styles.yearTag}>2019</span>
                <strong>₹3,800</strong>
                <span>per sq. yard</span>
                <p>Initial land acquisition & regional survey</p>
              </div>

              <div className={styles.timeCard}>
                <span className={styles.yearTag}>2022</span>
                <strong>₹7,500</strong>
                <span>per sq. yard</span>
                <p>Expressway corridor announcement</p>
              </div>

              <div className={`${styles.timeCard} ${styles.timeCardActive}`}>
                <span className={styles.yearTagActive}>2026 (CURRENT)</span>
                <strong style={{ color: "var(--color-brown)" }}>₹12,500</strong>
                <span>per sq. yard</span>
                <p>Mojika 100-Bigha Grand Launch</p>
              </div>

              <div className={styles.timeCard}>
                <span className={styles.yearTag}>2031 (PROJECTED)</span>
                <strong style={{ color: "#16A34A" }}>₹28,000+</strong>
                <span>per sq. yard</span>
                <p>Full township habitation & commercial zone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners & 80% Loan Sanction */}
      <section className={styles.bankSection}>
        <div className="container">
          <div className={styles.bankHeader}>
            <span className="section-tag">FINANCIAL APPROVALS</span>
            <h2>Approved by Leading National Banks</h2>
            <p>Up to 80% loan sanction with simple documentation and pre-approved project clearance.</p>
          </div>

          <div className={styles.bankGrid}>
            {bankPartners.map((bank, i) => (
              <div key={i} className={styles.bankCard}>
                <Landmark size={28} className={styles.bankIcon} />
                <h4>{bank.name}</h4>
                <span className={styles.bankBadge}>{bank.badge}</span>
                <span className={styles.bankRate}>Starting {bank.rate}</span>
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
