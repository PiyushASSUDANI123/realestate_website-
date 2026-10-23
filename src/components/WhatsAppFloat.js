"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  const [openPopup, setOpenPopup] = useState(false);

  const phoneNumbers = [
    { num: "9461051515", label: "Lead Sales Advisor" },
    { num: "9413926030", label: "Township Specialist" },
    { num: "9511535722", label: "Customer Desk" },
  ];

  return (
    <div className={styles.container}>
      {openPopup && (
        <div className={styles.popup}>
          <div className={styles.popupHeader}>
            <div className={styles.headerInfo}>
              <span className={styles.onlineDot} />
              <div>
                <strong>Mojika Group Sales Desk</strong>
                <p>Direct Assistance • Available Now</p>
              </div>
            </div>
            <button className={styles.popupClose} onClick={() => setOpenPopup(false)}>
              <X size={16} />
            </button>
          </div>
          <div className={styles.popupBody}>
            <p className={styles.helpText}>
              Inquire directly about the 100-Bigha Maulasar Township & Jaipur Projects:
            </p>
            <div className={styles.buttonList}>
              <a
                href="https://wa.me/919461051515?text=Hello%20Mojika%20Group,%20I%20am%20interested%20in%20the%20100%20Bigha%20Maulasar%20Township%20and%20Jaipur%20projects.%20Please%20share%20details."
                target="_blank"
                rel="noreferrer"
                className={styles.waBtn}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <div className={styles.callOptions}>
                <span className={styles.callLabel}>Or Call Directly:</span>
                {phoneNumbers.map((item) => (
                  <a key={item.num} href={`tel:${item.num}`} className={styles.callLink}>
                    <Phone size={14} />
                    <span>+91 {item.num}</span>
                    <small>{item.label}</small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.triggers}>
        <a
          href="https://wa.me/919461051515?text=Hello%20Mojika%20Group,%20I%20am%20interested%20in%20the%20100%20Bigha%20Maulasar%20Township.%20Please%20send%20brochure."
          target="_blank"
          rel="noreferrer"
          className={styles.floatBtnWa}
          aria-label="WhatsApp Contact"
        >
          <MessageCircle size={26} />
          <span className={styles.badgeLabel}>Chat with us</span>
        </a>

        <button
          onClick={() => setOpenPopup(!openPopup)}
          className={styles.floatBtnPhone}
          aria-label="Direct Phone Numbers"
        >
          <Phone size={22} />
        </button>
      </div>
    </div>
  );
}
