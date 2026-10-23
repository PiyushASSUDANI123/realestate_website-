"use client";

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Compass,
  Building,
  Target,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
  const milestones = [
    {
      year: "2011",
      title: "The Inception of Trust",
      desc: "Founded with an unwavering pledge to eliminate ambiguity from land purchase in Rajasthan by delivering 100% legally vetted plots.",
    },
    {
      year: "2016",
      title: "Scale & Expansion",
      desc: "Completed our first 35-Bigha gated plotted community with Jaipur's first underground electrical network for independent plots.",
    },
    {
      year: "2021",
      title: "1,500+ Homes Milestone",
      desc: "Celebrated handover of title deeds to over 1,500 happy families across premium residential corridors.",
    },
    {
      year: "2024+",
      title: "The 100-Bigha Maulasar Master Township",
      desc: "Unveiling Rajasthan's signature mega-development, bringing Jaipur's metropolitan lifestyle and resort amenities to Maulasar.",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <span className="badge-gold">
            <Sparkles size={14} /> Our Heritage & Vision
          </span>
          <h1>Building The Trust Across Generations</h1>
          <p>
            Mojika Group has set the benchmark for transparent, progressive, and master-planned
            real estate developments across Rajasthan.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className="badge-emerald">The Mojika Legacy</span>
              <h2>Pioneering Planned Urbanization & Plotted Luxury</h2>
              <p className={styles.storyLead}>
                "A home is not just bricks or land — it is a sanctuary of security, pride, and
                generational prosperity for every Indian family."
              </p>
              <p className={styles.storyText}>
                For over a decade, Mojika Group has been synonymous with integrity, legal precision,
                and architectural excellence in Rajasthan's real estate ecosystem. Founded on the
                bedrock of "Building The Trust", we have led the transformation from unorganized
                plotted layouts to master-planned gated communities that rival India's top metropolitan
                townships.
              </p>
              <p className={styles.storyText}>
                With our flagship 100-Bigha development in Maulasar, we are fulfilling our promise:
                bringing Jaipur's finest lifestyle, international infrastructure, and resort amenities
                to emerging economic hubs.
              </p>

              <div style={{ display: "flex", gap: "14px", marginTop: "24px" }}>
                <Link href="/projects" className="btn-primary">
                  <span>Explore Our Projects</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span>Contact Directors</span>
                </Link>
              </div>
            </div>

            <div className={styles.storyVisual}>
              <img
                src="/images/hero.webp"
                alt="Mojika Group Landmark Township"
                className={styles.storyImg}
              />
              <div className={styles.storyFloatingBadge}>
                <strong>15+ Years</strong>
                <span>Of Uncompromising Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Core Philosophy</span>
            <h2>The Four Pillars of Mojika Group</h2>
            <p>Every development we undertake is guided by principles that protect your investment.</p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valIcon}>
                <ShieldCheck size={26} />
              </div>
              <h3>100% Legal Certainty</h3>
              <p>
                Zero disputed titles. Complete government town planning permissions, RERA registration,
                and immediate registry with mutation guarantee.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valIcon}>
                <Building size={26} />
              </div>
              <h3>Superior Engineering</h3>
              <p>
                From 60-ft wide bitumen avenues to subterranean electric cabling, we invest heavily in
                enduring infrastructure that stands the test of decades.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valIcon}>
                <Target size={26} />
              </div>
              <h3>On-Time Handover</h3>
              <p>
                Transparent development timelines with live milestone updates. We deliver what we
                promise, on or ahead of scheduled commitments.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valIcon}>
                <Users size={26} />
              </div>
              <h3>Lifetime Relationship</h3>
              <p>
                From initial site inspection in our complimentary luxury cabs to post-handover township
                maintenance, our team is by your side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Our Milestones</span>
            <h2>The Journey of Building The Trust</h2>
            <p>A legacy sculpted through consistency, innovation, and homeowner satisfaction.</p>
          </div>

          <div className={styles.timeline}>
            {milestones.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelinePoint}>
                  <div className={styles.timelineDot} />
                  {idx !== milestones.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
