"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, IndianRupee, PieChart, ShieldCheck } from "lucide-react";
import styles from "./EmiCalculator.module.css";

export default function EmiCalculator({ onOpenVisitModal }) {
  const [loanAmount, setLoanAmount] = useState(2500000); // 25 Lakhs default
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5);

  const { monthlyEmi, totalPayment, totalInterest, projectedAppreciation } = useMemo(() => {
    const principal = Number(loanAmount);
    const monthlyRate = Number(interestRate) / (12 * 100);
    const totalMonths = Number(tenureYears) * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const safeEmi = isNaN(emi) || !isFinite(emi) ? 0 : Math.round(emi);
    const total = Math.round(safeEmi * totalMonths);
    const interest = total - principal;

    // Projected 5-year capital appreciation at conservative 18% CAGR for highway township
    const appreciation = Math.round(principal * Math.pow(1 + 0.18, 5));

    return {
      monthlyEmi: safeEmi,
      totalPayment: total,
      totalInterest: interest > 0 ? interest : 0,
      projectedAppreciation: appreciation,
    };
  }, [loanAmount, tenureYears, interestRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.header}>
        <div className="badge-gold">
          <Calculator size={14} /> Smart Investment Planner
        </div>
        <h3>Plot Loan EMI & Growth Calculator</h3>
        <p>Plan your investment in Mojika Group Townships with bank-approved flexible repayment structures.</p>
      </div>

      <div className={styles.calcGrid}>
        {/* Sliders Left */}
        <div className={styles.slidersCol}>
          {/* Slider 1: Loan Amount */}
          <div className={styles.sliderGroup}>
            <div className={styles.sliderTop}>
              <label>Estimated Loan Amount</label>
              <span className={styles.sliderValue}>{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="500000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.sliderLimits}>
              <span>₹5 Lakhs</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Slider 2: Tenure */}
          <div className={styles.sliderGroup}>
            <div className={styles.sliderTop}>
              <label>Loan Duration (Tenure)</label>
              <span className={styles.sliderValue}>{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.sliderLimits}>
              <span>3 Years</span>
              <span>15 Years</span>
              <span>25 Years</span>
            </div>
          </div>

          {/* Slider 3: Interest Rate */}
          <div className={styles.sliderGroup}>
            <div className={styles.sliderTop}>
              <label>Expected Interest Rate (%)</label>
              <span className={styles.sliderValue}>{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="7.0"
              max="13.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.sliderLimits}>
              <span>7.0%</span>
              <span>8.5% (Avg Bank Rate)</span>
              <span>13.0%</span>
            </div>
          </div>

          <div className={styles.bankTieups}>
            <ShieldCheck size={16} color="#0f4c3a" />
            <span>Pre-approved by SBI, HDFC, ICICI, Bank of Baroda & PNB Housing</span>
          </div>
        </div>

        {/* Results Right */}
        <div className={styles.resultCol}>
          <div className={styles.resultCard}>
            <span className={styles.resultSub}>Estimated Monthly EMI</span>
            <div className={styles.emiHighlight}>{formatCurrency(monthlyEmi)}</div>
            <span className={styles.emiPerMonth}>per month</span>

            <div className={styles.breakdownList}>
              <div className={styles.breakdownItem}>
                <span className={styles.bdLabel}>Principal Loan:</span>
                <strong className={styles.bdValue}>{formatCurrency(loanAmount)}</strong>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.bdLabel}>Total Interest:</span>
                <strong className={styles.bdValue}>{formatCurrency(totalInterest)}</strong>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.bdLabel}>Total Repayment:</span>
                <strong className={styles.bdValue}>{formatCurrency(totalPayment)}</strong>
              </div>
            </div>

            <div className={styles.appreciationBox}>
              <div className={styles.appreciationHeader}>
                <TrendingUp size={18} color="#0f4c3a" />
                <span>Projected 5-Year Capital Valuation:</span>
              </div>
              <div className={styles.appreciationVal}>
                {formatCurrency(projectedAppreciation)}
              </div>
              <p className={styles.appreciationNote}>
                *Based on historical 18% CAGR growth along Jaipur-Maulasar growth corridor.
              </p>
            </div>

            <button onClick={onOpenVisitModal} className="btn-primary" style={{ width: "100%", marginTop: "16px" }}>
              Request Bank Loan Assistance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
