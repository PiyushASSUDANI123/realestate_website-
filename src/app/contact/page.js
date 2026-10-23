"use client";

import { useState } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Car,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  ShieldCheck,
} from "lucide-react";
import styles from "./Contact.module.css";

const faqs = [
  {
    q: "Are plots in Mojika 100-Bigha Maulasar township legally approved?",
    a: "Yes, 100%. All plots in our Maulasar mega development are RERA-approved with town-planning compliance, zero legal encumbrances, and immediate individual registry with mutation guarantee.",
  },
  {
    q: "How does the complimentary chauffeur pickup service work?",
    a: "We arrange a luxury AC cab to pick you and your family up from your doorstep in Jaipur or nearby areas, chauffeur you to the Maulasar site for a guided tour with refreshments, and drop you back — completely free of charge with zero obligation.",
  },
  {
    q: "Which banks have pre-approved plot loans for Mojika projects?",
    a: "Our developments have received formal pre-approvals from SBI (State Bank of India), HDFC Bank, ICICI Bank, Bank of Baroda, and PNB Housing Finance with loan tenure up to 20 years at competitive interest rates.",
  },
  {
    q: "What infrastructure amenities will be handed over?",
    a: "The township includes 60-ft wide blacktop main boulevards, 40-ft sector roads, fully underground electrical cabling, piped water to each plot boundary, clubhouse with swimming pool, 10-acre theme parks, and 24/7 RFID gated security.",
  },
  {
    q: "What are the plot sizes available in Maulasar?",
    a: "Plot configurations range from 120 Sq. Yds (compact villa plots), 200 Sq. Yds (luxury 3/4 BHK villas), 350 Sq. Yds (premium park-facing), up to 500+ Sq. Yds (estate plots).",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Mojika Grand Township, Maulasar (100 Bigha)",
    date: "",
    cabPickup: true,
    message: "",
  });

  const hotlines = [
    { num: "9461051515", label: "Head Sales Advisor" },
    { num: "9461372954", label: "Maulasar Site Desk" },
    { num: "9511535722", label: "Jaipur Relationship Desk" },
    { num: "9413926030", label: "Township Planner" },
    { num: "8503818482", label: "Investor Desk" },
    { num: "8764224724", label: "Customer Care" },
    { num: "9772371996", label: "Site Tour Helpline" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <span className="badge-gold">
            <Sparkles size={14} /> Direct Assistance
          </span>
          <h1>Connect With Mojika Group</h1>
          <p>
            Whether you wish to schedule a guided site inspection, inquire about plot sizes, or
            discuss investment opportunities, our relationship desk is at your service.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Form */}
            <div className={styles.formCard}>
              {!submitted ? (
                <>
                  <span className="badge-emerald">Free Site Tour</span>
                  <h2>Book Your VIP Site Inspection</h2>
                  <p>Experience the 100-Bigha mega development in Maulasar with our senior architects.</p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label>Select Preferred Development</label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className={styles.input}
                      >
                        <option value="Mojika Grand Township, Maulasar (100 Bigha)">
                          Mojika Grand Township, Maulasar (100 Bigha Flagship)
                        </option>
                        <option value="Mojika Royal Meadows, Jaipur">
                          Mojika Royal Meadows, Jaipur (Plotted Enclave)
                        </option>
                        <option value="Mojika Serene Greens, Sikar Road">
                          Mojika Serene Greens, Sikar Road
                        </option>
                        <option value="Mojika Imperial Mansions, Mansarovar">
                          Mojika Imperial Mansions, Mansarovar
                        </option>
                      </select>
                    </div>

                    <div className={styles.grid2}>
                      <div className={styles.formGroup}>
                        <label>Your Name *</label>
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
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Preferred Visit Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.cabCard}>
                      <div className={styles.cabLeft}>
                        <Car size={22} className={styles.cabIcon} />
                        <div>
                          <span className={styles.cabTitle}>Complimentary Chauffeur Cab</span>
                          <p className={styles.cabDesc}>Free pick-up and drop from Jaipur city center directly to Maulasar.</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.cabPickup}
                        onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                        className={styles.checkbox}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Additional Inquiries / Plot Preferences</label>
                      <textarea
                        rows={3}
                        placeholder="Mention plot size (e.g. 200 sq. yds) or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "8px" }}>
                      <span>Confirm Site Tour Booking</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={40} color="#0f4c3a" />
                  </div>
                  <h3>Site Tour Requested Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our senior relationship manager has received
                    your booking for <strong>{formData.project}</strong>. We will call you at{" "}
                    <strong>{formData.phone}</strong> shortly to confirm your chauffeur schedule and pass.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ marginTop: "24px" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right: Hotline Cards & Office Locations */}
            <div className={styles.infoSidebar}>
              {/* Hotlines */}
              <div className={styles.hotlineBox}>
                <span className="badge-gold">All Direct Lines</span>
                <h3>Direct Sales & Advisor Hotlines</h3>
                <p>Call our senior acquisition advisors directly without switchboards:</p>

                <div className={styles.phoneGrid}>
                  {hotlines.map((item) => (
                    <a key={item.num} href={`tel:${item.num}`} className={styles.phoneBtn}>
                      <Phone size={14} color="#dfba5c" />
                      <span>{item.num}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className={styles.officesBox}>
                <div className={styles.officeItem}>
                  <MapPin size={22} className={styles.officeIcon} />
                  <div>
                    <strong>Flagship Mega Township Site Office</strong>
                    <p>Mojika Grand 100-Bigha Township, Main State Highway, Maulasar, Rajasthan.</p>
                  </div>
                </div>

                <div className={styles.officeItem}>
                  <MapPin size={22} className={styles.officeIcon} />
                  <div>
                    <strong>Corporate Headquarters</strong>
                    <p>Mojika Tower, Main Tonk Road & Vaishali Nagar, Jaipur, Rajasthan.</p>
                  </div>
                </div>

                <div className={styles.officeItem}>
                  <Clock size={22} className={styles.officeIcon} />
                  <div>
                    <strong>Operating Hours</strong>
                    <p>Monday - Sunday: 9:00 AM to 7:30 PM (Site tours run 7 days a week).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">Frequently Asked Questions</span>
            <h2>Transparency At Every Step</h2>
            <p>Everything you need to know about investing in Mojika Group Townships.</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
