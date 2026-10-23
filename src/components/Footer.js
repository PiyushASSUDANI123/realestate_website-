"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* Left Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <img
                src="/images/mojika-logo.png"
                alt="Mojika Group"
                className={styles.logoImg}
              />
            </div>
            <p className={styles.brandTagline}>A better tomorrow in Jaipur.</p>
          </div>

          {/* Center Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/projects">Project</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Right Contact Col */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactList}>
              <a href="tel:9461051515" className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <span>9461051515</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Moulasar, Jaipur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bottomBar}>
          <p>© 2026 Mojika Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
