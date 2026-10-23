"use client";

import { X, Phone, Download, Check, Sparkles, MapPin } from "lucide-react";
import styles from "./BannerModal.module.css";

export default function BannerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const phoneNumbers = [
    "9461051515",
    "9461372954",
    "9511535722",
    "9413926030",
    "8503818482",
    "8764224724",
    "9772371996",
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className={styles.bannerHeader}>
          <div className="badge-gold">
            <Sparkles size={14} /> Official Mega Launch Announcement
          </div>
          <h2>Mojika Group • Maulasar Flagship Township</h2>
          <p>
            Experience Jaipur-grade modern lifestyle in Maulasar — A 100-Bigha master-planned sanctuary of prosperity!
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/images/mojika-banner.png"
            alt="Mojika Group Maulasar 100 Bigha Township Official Launch Banner"
            className={styles.bannerImage}
          />
        </div>

        <div className={styles.detailsRow}>
          <div className={styles.detailCard}>
            <span className={styles.detailLabel}>Township Scale</span>
            <span className={styles.detailValue}>100+ Bigha Gated Enclave</span>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>Maulasar, Rajasthan</span>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailLabel}>Lifestyle</span>
            <span className={styles.detailValue}>Jaipur-Grade Modern Amenities</span>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailLabel}>Status</span>
            <span className={styles.detailValue} style={{ color: "#c59828" }}>
              Pre-Launch Booking Open
            </span>
          </div>
        </div>

        <div className={styles.phonesSection}>
          <span className={styles.phonesTitle}>
            <Phone size={16} /> Direct Hotline Numbers (Tap to call directly):
          </span>
          <div className={styles.phoneGrid}>
            {phoneNumbers.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className={styles.phonePill}>
                <span>+91 {phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
