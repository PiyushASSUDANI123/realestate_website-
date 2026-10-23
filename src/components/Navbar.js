"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, ChevronRight, Award, Compass } from "lucide-react";
import styles from "./Navbar.module.css";
import ScheduleVisitModal from "./ScheduleVisitModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Maulasar 100 Bigha", href: "/#flagship" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        {/* Top Gold Bar with Direct Lines */}
        <div className={styles.topBar}>
          <div className="container">
            <div className={styles.topBarInner}>
              <div className={styles.topBarLeft}>
                <span className={styles.topPill}>
                  <Award size={13} className={styles.topIcon} /> RERA Approved Townships
                </span>
                <span className={styles.topDivider}>|</span>
                <span className={styles.topTagline}>Jaipur & Maulasar Mega Developments</span>
              </div>
              <div className={styles.topBarRight}>
                <span className={styles.callLabel}>Hotline:</span>
                <a href="tel:9461051515" className={styles.topPhone}>+91 94610 51515</a>
                <span className={styles.topDivider}>•</span>
                <a href="tel:9413926030" className={styles.topPhone}>+91 94139 26030</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={styles.nav}>
          <div className="container">
            <div className={styles.navInner}>
              {/* Brand Logo */}
              <Link href="/" className={styles.logo}>
                <div className={styles.logoEmblem}>
                  <Compass size={22} className={styles.emblemIcon} />
                </div>
                <div className={styles.logoText}>
                  <span className={styles.brandTitle}>MOJIKA GROUP</span>
                  <span className={styles.brandSubtitle}>BUILDING THE TRUST</span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className={styles.desktopLinks}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Action */}
              <div className={styles.navActions}>
                <a href="tel:9461051515" className={styles.phoneBtn} title="Call Sales Team">
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => setVisitModalOpen(true)}
                  className="btn-primary"
                  style={{ padding: "10px 20px", fontSize: "0.85rem" }}
                >
                  <Calendar size={16} />
                  <span>Book Site Visit</span>
                </button>

                {/* Mobile Hamburger */}
                <button
                  className={styles.menuToggle}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} />
                </Link>
              ))}
            </div>
            <div className={styles.mobileDrawerActions}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setVisitModalOpen(true);
                }}
                className="btn-primary"
                style={{ width: "100%" }}
              >
                <Calendar size={18} />
                <span>Schedule Site Tour</span>
              </button>
              <div className={styles.mobileContacts}>
                <p>Call Direct Advisors:</p>
                <a href="tel:9461051515">+91 94610 51515</a>
                <a href="tel:9461372954">+91 94613 72954</a>
                <a href="tel:9511535722">+91 95115 35722</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Schedule Modal */}
      {visitModalOpen && (
        <ScheduleVisitModal isOpen={visitModalOpen} onClose={() => setVisitModalOpen(false)} />
      )}
    </>
  );
}
