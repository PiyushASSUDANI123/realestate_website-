"use client";

import Link from "next/link";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    title: "100-Bigha Master Plotted Layout",
    category: "Master Planning",
    image: "/images/plots.jpg",
    desc: "Aerial perspective of organized plotted sectors with 60ft avenues, landscaped roundabouts, and dedicated park lungs.",
  },
  {
    title: "60-Ft Grand Imperial Gateway",
    category: "Infrastructure",
    image: "/images/gate.jpg",
    desc: "Contemporary stone architectural entrance portal with multi-lane boom barriers, palm-lined avenues, and security cabin.",
  },
  {
    title: "The Regal Clubhouse & Infinity Pool",
    category: "Resort Lifestyle",
    image: "/images/clubhouse.jpg",
    desc: "Luxury multi-level recreational clubhouse featuring glass lounge, heated infinity swimming pool, and twilight deck.",
  },
  {
    title: "Palm Boulevard & Villa Enclave",
    category: "Living Ambience",
    image: "/images/hero.jpg",
    desc: "Lush residential avenues with underground cabling, stone-paved sidewalks, and contemporary villa designs.",
  },
  {
    title: "State Highway Connectivity",
    category: "Connectivity",
    image: "/images/highway.jpg",
    desc: "Scenic smooth multi-lane arterial highway connecting Maulasar directly to Jaipur, Didwana, and Sikar.",
  },
  {
    title: "Executive Villa Living Space",
    category: "Architecture",
    image: "/images/interior.jpg",
    desc: "Double-height living pavilion with floor-to-ceiling glass facades overlooking private lawns and tranquil greenery.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <span className="section-tag-center">ARCHITECTURAL PORTFOLIO</span>
          <h1>Township Visual Gallery</h1>
          <p>
            Immerse yourself in Rajasthan&apos;s finest 100-Bigha master planned development.
            Discover world-class infrastructure, resort-style amenities, and lush nature.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {galleryItems.map((item, idx) => (
              <div key={idx} className={styles.galleryCard}>
                <div className={styles.mediaFrame}>
                  <img src={item.image} alt={item.title} className={styles.galleryImg} />
                </div>
                <div className={styles.galleryBody}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/contact" className="btn-mockup-primary">
              <Calendar size={18} />
              <span>Schedule a Guided Site Visit (Free AC Cab)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
