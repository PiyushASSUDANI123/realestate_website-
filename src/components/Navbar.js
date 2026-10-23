"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import ScheduleVisitModal from "./ScheduleVisitModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/#about" },
    { name: "PROJECT", href: "/projects" },
    { name: "GALLERY", href: "/#gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo from Mockup */}
            <Link href="/" className={styles.logoLink}>
              <img
                src="/images/mojika-logo.png"
                alt="Mojika Group - Building The Trust"
                className={styles.logoImg}
              />
            </Link>

            {/* Nav Links */}
            <nav className={styles.navMenu}>
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
            </nav>

            {/* Right Button from Mockup */}
            <div className={styles.navRight}>
              <a href="tel:9461051515" className={styles.callPill}>
                <Phone size={14} className={styles.phoneIcon} />
                <span>9461051515</span>
              </a>

              {/* Mobile Menu Toggle */}
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

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={styles.mobileDropdown}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9461051515"
              className="btn-mockup-primary"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <Phone size={16} />
              <span>9461051515</span>
            </a>
          </div>
        )}
      </header>

      {visitModalOpen && (
        <ScheduleVisitModal isOpen={visitModalOpen} onClose={() => setVisitModalOpen(false)} />
      )}
    </>
  );
}
