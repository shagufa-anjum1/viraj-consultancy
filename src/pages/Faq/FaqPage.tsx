import "./faq.css";
import React from "react";
import faqImg from "@/assets/images/faq.jpg";

const FAQS = [
  { q: "What services does Viraaj Consultancy provide?",
    a: "We provide payroll processing, GST/ROC compliance, bookkeeping, audits, tax planning, and advisory for startups and SMEs." },
  { q: "Can your solutions be customized?",
    a: "Yes. We tailor workflows, reporting, and engagement models to your business stage and industry requirements." },
  { q: "Do you support ROC and company compliance?",
    a: "Yes. From incorporations and annual filings to event-based MCA forms, we manage end-to-end ROC compliance." },
  { q: "How do you ensure data security and confidentiality?",
    a: "We use restricted access, encrypted channels and strict internal controls to protect sensitive financial data." },
  { q: "Do you provide dedicated support?",
    a: "A dedicated coordinator tracks timelines, shares reminders, and ensures on-time filings with audit-ready documentation." },
];

export default function FaqPage() {
  const [open, setOpen] = React.useState<number>(0);
  return (
    <section className="vc-faq">
      <div className="container vc-faq__inner">
        <h2 className="vc-faq__title">Frequently Asked Questions</h2>

        <div className="vc-faq__grid">
          <div className="vc-faq__media">
            <div className="vc-faq__badge">Expert Team</div>
            <img className="vc-faq__image" src={faqImg} alt="FAQ illustration" />
          </div>

          <div className="vc-faq__list">
            {FAQS.map((item, idx) => {
              const isOpen = idx === open;
              return (
                <div key={idx} className={`vc-accordion ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="vc-accordion__btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="vc-accordion__icon">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="vc-accordion__panel" hidden={!isOpen}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
