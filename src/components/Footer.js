"use client";

import Link from "next/link";
import { Compass, Phone, Mail, MapPin, ShieldCheck, ArrowRight, Download, Award } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const hotlines = [
    "9461051515",
    "9461372954",
    "9511535722",
    "9413926030",
    "8503818482",
    "8764224724",
    "9772371996",
  ];

  return (
    <footer className={styles.footer}>
      {/* Upper Pre-footer Banner */}
      <div className={styles.preFooter}>
        <div className="container">
          <div className={styles.preFooterCard}>
            <div className={styles.preFooterLeft}>
              <span className="badge-gold">Investment Opportunity</span>
              <h3>Own a Piece of Maulasar’s 100-Bigha Mega Lifestyle Township</h3>
              <p>Special early-bird investor pricing and flexible EMI plans available for early bookers.</p>
            </div>
            <div className={styles.preFooterRight}>
              <a href="tel:9461051515" className="btn-primary">
                <Phone size={18} />
                <span>Call +91 94610 51515</span>
              </a>
              <Link href="/contact" className="btn-secondary">
                <span>Book Free Site Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Column 1: Brand & Philosophy */}
            <div className={styles.brandCol}>
              <div className={styles.footerLogo}>
                <div className={styles.emblem}>
                  <Compass size={22} color="#dfba5c" />
                </div>
                <div>
                  <span className={styles.brandName}>MOJIKA GROUP</span>
                  <span className={styles.brandSlogan}>BUILDING THE TRUST</span>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Mojika Group is Rajasthan’s trusted real estate pioneer, delivering landmark residential
                townships, luxury plotted developments, and architectural marvels with 100% legal clarity,
                RERA compliance, and top-tier infrastructure.
              </p>
              <div className={styles.reraBadge}>
                <ShieldCheck size={18} color="#0f4c3a" />
                <span>100% RERA Approved & Clear Titles</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Quick Navigation</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Flagship Projects</Link></li>
                <li><Link href="/#flagship">Maulasar 100 Bigha</Link></li>
                <li><Link href="/#amenities">Township Amenities</Link></li>
                <li><Link href="/#calculator">EMI & ROI Calculator</Link></li>
                <li><Link href="/about">About Mojika Group</Link></li>
                <li><Link href="/contact">Contact & Site Tours</Link></li>
              </ul>
            </div>

            {/* Column 3: Featured Projects */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Flagship Developments</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/projects#maulasar">
                    <strong>Mojika Grand Maulasar</strong>
                    <span>100 Bigha Mega Plotted Township</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <strong>Mojika Royal Meadows</strong>
                    <span>Luxury Gated Plots, Jaipur</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <strong>Mojika Serene Greens</strong>
                    <span>Villa Estates, Sikar Road</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <strong>Mojika Imperial Heights</strong>
                    <span>Mansarovar, Jaipur</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Hotline & Addresses */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Direct Sales Hotlines</h4>
              <p className={styles.contactIntro}>
                Reach our senior acquisition team directly without wait:
              </p>
              <div className={styles.phoneList}>
                {hotlines.map((num) => (
                  <a key={num} href={`tel:${num}`} className={styles.phoneLink}>
                    <Phone size={13} /> +91 {num}
                  </a>
                ))}
              </div>

              <div className={styles.addressBlock}>
                <div className={styles.addressItem}>
                  <MapPin size={16} className={styles.addrIcon} />
                  <div>
                    <strong>Flagship Township Site:</strong>
                    <p>Mojika Mega Township, State Highway, Maulasar, Rajasthan</p>
                  </div>
                </div>
                <div className={styles.addressItem}>
                  <MapPin size={16} className={styles.addrIcon} />
                  <div>
                    <strong>Corporate Headquarters:</strong>
                    <p>Mojika Tower, Tonk Road & Vaishali Nagar, Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className={styles.bottomBar}>
            <div className={styles.bottomLeft}>
              <p>© 2026 Mojika Group. All Rights Reserved. Building The Trust.</p>
            </div>
            <div className={styles.bottomRight}>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Development</span>
              <span>•</span>
              <span>RERA Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
