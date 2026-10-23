"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  Scale,
  Award,
  CheckCircle2,
  Download,
  Phone,
  ArrowRight,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import styles from "./ReraLegal.module.css";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";

const legalCertificates = [
  {
    title: "Rajasthan RERA Registration",
    regNo: "RAJ/P/2026/8941",
    authority: "Real Estate Regulatory Authority, Rajasthan",
    status: "Active & Verified",
    desc: "Official RERA approval safeguarding every rupee of your investment with strict compliance to escrow account regulations and timely project milestones.",
  },
  {
    title: "100% Freehold Title & Clear Mutation",
    regNo: "DEED/MLSR/2025/1104",
    authority: "Sub-Registrar Office, Rajasthan",
    status: "Clear & Marketable",
    desc: "Single-owner freehold property with clear mutation (Dakhil Kharij) in government revenue records. 100% free from mortgages or legal encumbrances.",
  },
  {
    title: "Town Planning & Demarcation Sanction",
    regNo: "TPD/JPR/100BG/092",
    authority: "Town Planning Department, Rajasthan",
    status: "Approved Master Layout",
    desc: "Statutory demarcation approval for 60-ft arterial avenues, public parks, open green reserves, utility buffers, and community amenities.",
  },
  {
    title: "State Pollution & Ground Water NOC",
    regNo: "RSPCB/NOC/2025/4412",
    authority: "State Environmental Clearance Authority",
    status: "Environmentally Compliant",
    desc: "Complete clearances for eco-STP wastewater treatment, high-pressure ground water boring, and rainwater recharging shaft installations.",
  },
];

const legalChecklist = [
  "Registered Sale Deed & Individual Plot Registry upon full payment",
  "Possession Letter & Demarcated Site Boundary with stone pillars",
  "Official Approved Master Layout signed by Town Planning Authority",
  "Bank No-Objection Certificate (NOC) and Title Search Report",
  "All-weather 60ft & 40ft road maintenance commitment deed",
];

const faqs = [
  {
    q: "Can I verify the RERA registration online before purchasing?",
    a: "Yes, absolutely! You can visit the official Rajasthan RERA portal (rera.rajasthan.gov.in) and enter registration number RAJ/P/2026/8941 to view all sanction plans, quarterly progress reports, and bank escrow details.",
  },
  {
    q: "Is bank loan available on these plots?",
    a: "Yes. Leading banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, and Bank of Baroda have completed independent legal title verification and offer up to 80% plot purchase and construction loans.",
  },
  {
    q: "What kind of ownership is provided?",
    a: "100% Freehold Ownership. You will receive an individual registered Sale Deed in your name with direct mutation in the land revenue records, granting you unconditional lifetime ownership rights.",
  },
  {
    q: "Are there any hidden maintenance or transfer charges?",
    a: "No. Mojika Group operates with complete transparency. All registry fees, stamp duties, and nominal society maintenance terms are clearly documented upfront in the agreement.",
  },
];

export default function ReraLegalPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <span className="section-tag">100% LEGAL TRANSPARENCY</span>
          <h1 className={styles.heroTitle}>
            RERA Approvals, Title Deed & Legal Documentation
          </h1>
          <p className={styles.heroSubtitle}>
            मोजीका ग्रुप की 20 वर्षों की विरासत का आधार है भरोसा और पारदर्शिता। 100% फ्रीहोल्ड
            रजिस्ट्री, रेरा (RERA) अप्रूव्ड प्रोजेक्ट और प्रमुख बैंकों द्वारा सत्यापित लीगल टाइटल्स।
          </p>
        </div>
      </section>

      {/* RERA Highlight Banner */}
      <section className={styles.bannerSection}>
        <div className="container">
          <div className={styles.reraBanner}>
            <div className={styles.reraBannerLeft}>
              <Award size={48} className={styles.reraIcon} />
              <div>
                <span className={styles.reraBadge}>OFFICIAL RERA CERTIFIED PROJECT</span>
                <h2>Registration No: RAJ/P/2026/8941</h2>
                <p>100 Bigha Plotted Township, Maulasar-Jaipur Highway Corridor</p>
              </div>
            </div>
            <a
              href="https://rera.rajasthan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.verifyBtn}
            >
              <span>Verify on RERA Rajasthan</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className={styles.certificatesSection}>
        <div className="container">
          <div className={styles.certGrid}>
            {legalCertificates.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <div className={styles.certHeader}>
                  <FileCheck size={28} className={styles.fileIcon} />
                  <span className={styles.statusBadge}>{cert.status}</span>
                </div>
                <h3>{cert.title}</h3>
                <div className={styles.certMeta}>
                  <strong>Certificate No:</strong> {cert.regNo}
                </div>
                <div className={styles.certMeta}>
                  <strong>Authority:</strong> {cert.authority}
                </div>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Verification Checklist */}
      <section className={styles.checklistSection}>
        <div className="container">
          <div className={styles.checklistCard}>
            <div className={styles.checkLeft}>
              <span className="section-tag">BUYER PROTECTION</span>
              <h2>5-Point Legal Assurance Checklist</h2>
              <p>
                Every buyer at Mojika Maulasar receives a comprehensive legal dossier ensuring 100%
                peace of mind and generational security.
              </p>
              <ul className={styles.checkList}>
                {legalChecklist.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className={styles.greenCheck} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.checkRight}>
              <div className={styles.dossierBox}>
                <Scale size={42} className={styles.scaleIcon} />
                <h3>Request Free Legal Title Dossier</h3>
                <p>
                  Get our advocate-certified Title Search Report, approved master layout map, and sample
                  sale deed delivered to your WhatsApp or Email.
                </p>
                <button
                  className="btn-mockup-primary"
                  onClick={() => setVisitModalOpen(true)}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Phone size={16} />
                  <span>Request Legal Documents</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal FAQs Accordion */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Buyer Legal Questions & Answers</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.faqItemOpen : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className={styles.faqQuestion}>
                  <strong>{faq.q}</strong>
                  <span className={styles.faqToggle}>{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && <p className={styles.faqAnswer}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />
    </div>
  );
}
