"use client";

import { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle, Car, ShieldCheck, Phone } from "lucide-react";
import styles from "./ScheduleVisitModal.module.css";

export default function ScheduleVisitModal({ isOpen, onClose, defaultProject = "Mojika Grand Township, Maulasar (100 Bigha)" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "Morning (10:00 AM - 1:00 PM)",
    project: defaultProject,
    cabPickup: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className={styles.header}>
              <div className="badge-gold">VIP Experience</div>
              <h2>Schedule a Guided Site Tour</h2>
              <p>Experience the 100-Bigha mega development firsthand with our senior township planners.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Select Township / Project</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className={styles.input}
                >
                  <option value="Mojika Grand Township, Maulasar (100 Bigha)">
                    Mojika Grand Township, Maulasar (100 Bigha Mega Plotted)
                  </option>
                  <option value="Mojika Royal Meadows, Jaipur">
                    Mojika Royal Meadows, Jaipur (Luxury Gated Enclave)
                  </option>
                  <option value="Mojika Serene Greens, Sikar Road">
                    Mojika Serene Greens, Sikar Road (Villa Plots)
                  </option>
                  <option value="Mojika Imperial Heights, Mansarovar">
                    Mojika Imperial Heights, Mansarovar (Premium Living)
                  </option>
                </select>
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rathore"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 94610 51515"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label>Preferred Visit Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Preferred Time Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={styles.input}
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM)</option>
                    <option>Evening Golden Hour (4:00 PM - 6:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Complimentary Cab Pick Up Toggle */}
              <div className={styles.cabCard}>
                <div className={styles.cabLeft}>
                  <Car className={styles.cabIcon} size={22} />
                  <div>
                    <span className={styles.cabTitle}>Complimentary Chauffeur Pickup</span>
                    <p className={styles.cabDesc}>Free pick & drop from Jaipur city center directly to the site.</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.cabPickup}
                  onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                  className={styles.checkbox}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "12px" }}>
                <span>Confirm VIP Site Visit</span>
              </button>

              <div className={styles.directHelpline}>
                <Phone size={14} />
                <span>Instant confirmation call available: <strong>+91 94610 51515</strong></span>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <CheckCircle size={56} color="#0f4c3a" />
            </div>
            <h3>Site Visit Booked Successfully!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our senior relationship manager will call you at{" "}
              <strong>{formData.phone}</strong> within 15 minutes to confirm your site tour pass and itinerary for{" "}
              <strong>{formData.project}</strong>.
            </p>
            {formData.cabPickup && (
              <div className={styles.successPill}>
                <Car size={16} /> Chauffeur pickup details will be shared on WhatsApp
              </div>
            )}
            <div className={styles.helplineBox}>
              <p>For instant assistance, dial our direct lines:</p>
              <div className={styles.numberRow}>
                <a href="tel:9461051515">9461051515</a>
                <a href="tel:9413926030">9413926030</a>
                <a href="tel:9511535722">9511535722</a>
              </div>
            </div>
            <button className="btn-secondary" onClick={onClose} style={{ marginTop: "20px" }}>
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
