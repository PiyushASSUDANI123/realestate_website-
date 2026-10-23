"use client";

import Link from "next/link";
import { Phone, MapPin, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";
import MojikaLogo from "./MojikaLogo";

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
      <div className="container">
        <div className={styles.footerInner}>
          {/* Col 1: Brand & Bio */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <MojikaLogo lightText={true} />
            </div>
            <p className={styles.brandTagline}>A better tomorrow in Jaipur.</p>
            <p className={styles.brandAboutText}>
              Mojika Group is Rajasthan&apos;s premier real estate pioneer, delivering landmark 100-Bigha
              townships, luxury plotted communities, and world-class residential enclaves built on trust
              and transparent legal titles.
            </p>
            <div className={styles.reraBadge}>
              <ShieldCheck size={16} color="#4ade80" />
              <span>100% RERA Approved & Clear Demarcations</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Mojika Group</Link></li>
              <li><Link href="/projects">Flagship Projects</Link></li>
              <li><Link href="/#gallery">Township Gallery</Link></li>
              <li><Link href="/contact">Book Site Visit</Link></li>
              <li><Link href="/contact#faq">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Developments */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Developments</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/projects#maulasar">
                  <strong>Mojika Grand Township</strong>
                  <span>100-Bigha Mega Plotted • Maulasar</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <strong>Mojika Royal Meadows</strong>
                  <span>35 Bigha Gated Enclave • Tonk Rd</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <strong>Mojika Serene Greens</strong>
                  <span>Villa Estates • Sikar Road</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <strong>Mojika Imperial Mansions</strong>
                  <span>Luxury Turnkey • Mansarovar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotlines */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Direct Sales Hotlines</h4>
            <div className={styles.phoneGrid}>
              {hotlines.map((num) => (
                <a key={num} href={`tel:${num}`} className={styles.phonePill}>
                  <Phone size={12} />
                  <span>+91 {num}</span>
                </a>
              ))}
            </div>

            <div className={styles.officeBlock}>
              <div className={styles.officeItem}>
                <MapPin size={16} className={styles.officeIcon} />
                <div>
                  <strong>Maulasar Site Office:</strong>
                  <span>Mojika Grand Township, State Highway, Maulasar</span>
                </div>
              </div>
              <div className={styles.officeItem}>
                <MapPin size={16} className={styles.officeIcon} />
                <div>
                  <strong>Jaipur Corporate Office:</strong>
                  <span>Tonk Road & Vaishali Nagar, Jaipur</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© 2026 Mojika Group. All Rights Reserved. Building The Trust.</p>
          <div className={styles.legalLinks}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Development</span>
            <span>•</span>
            <span>RERA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
