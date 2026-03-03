import "./testimonials.css";
type Testimonial = {
  name: string;
  role: string;
  company: string;
  city: string;
  rating: number; // 1-5
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aditya Malhotra",
    role: "Director",
    company: "Malhotra Tech Solutions Pvt. Ltd.",
    city: "Delhi",
    rating: 5,
    text:
      "Viraaj Consultancy has been handling our ROC compliance and annual filings for the past year. Their structured approach and proactive reminders ensure we never miss deadlines. Highly professional and dependable team.",
  },
  {
    name: "Ritika Jain",
    role: "Founder",
    company: "RJ Lifestyle Store",
    city: "Jaipur",
    rating: 5,
    text:
      "GST compliance used to to be stressful for our e-commerce business. Since partnering with Viraaj Consultancy, filings are always on time and properly structured. Their tax planning advice has also helped improve our profitability.",
  },
  {
    name: "Vikram Singh",
    role: "Managing Partner",
    company: "VS Industries",
    city: "Faridabad",
    rating: 5,
    text:
      "The team brings clarity and discipline to our financial systems. Their audit insights helped us streamline internal processes and improve reporting accuracy. We value their transparency and commitment.",
  },
  {
    name: "Sahil Arora",
    role: "Co-Founder",
    company: "NexGen Digital Labs",
    city: "Gurugram",
    rating: 5,
    text:
      "From company incorporation to ongoing compliance, Viraaj Consultancy supported us at every step. Their responsiveness and clear explanations made the entire process smooth for first-time founders like us.",
  },
  {
    name: "Anjali Khanna",
    role: "IT Consultant",
    company: "Individual Client",
    city: "Noida",
    rating: 5,
    text:
      "Their personalized tax advisory services are highly reliable. Every query is handled patiently, and returns are filed with complete accuracy. I appreciate their professionalism and integrity.",
  },
  {
    name: "Manish Bansal",
    role: "Director",
    company: "Bansal Engineering Works",
    city: "Ghaziabad",
    rating: 5,
    text:
      "Viraaj Consultancy manages our payroll and bookkeeping efficiently. Their timely updates and compliance management give us peace of mind to focus on business growth.",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.floor(rating)));
  return (
    <div className="vc-stars" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "vc-star vc-star--on" : "vc-star"}>
          ★
        </span>
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "V";
  const b = parts[1]?.[0] ?? "C";
  return (a + b).toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="vc-testimonials">
      <div className="container vc-testimonials__inner">
        <div className="vc-testimonials__head">
          <p className="vc-testimonials__eyebrow">TESTIMONIALS</p>
          <h2 className="vc-testimonials__title">
            Trusted by startups, SMEs & growing enterprises
          </h2>
          <p className="vc-testimonials__sub">
            Real client experiences across GST, ROC compliance, accounting, audit, and tax
            advisory.
          </p>
        </div>

        <div className="vc-testimonials__grid">
          {TESTIMONIALS.map((t, idx) => (
            <article className="vc-tcard" key={idx}>
              <div className="vc-tcard__top">
                <div className="vc-avatar" aria-hidden="true">
                  {initials(t.name)}
                </div>

                <div className="vc-meta">
                  <div className="vc-meta__name">{t.name}</div>
                  <div className="vc-meta__line">
                    <span className="vc-meta__role">{t.role}</span>
                    <span className="vc-dot">•</span>
                    <span className="vc-meta__company">{t.company}</span>
                  </div>
                  <div className="vc-meta__city">{t.city}</div>
                </div>

                <div className="vc-rating">
                  <Stars rating={t.rating} />
                  <span className="vc-rating__text">{t.rating.toFixed(1)}</span>
                </div>
              </div>

              <p className="vc-tcard__text">“{t.text}”</p>

              <div className="vc-tcard__bottom">
                <span className="vc-badge">Verified Client</span>
                <span className="vc-badge vc-badge--soft">On-time Compliance</span>
              </div>
            </article>
          ))}
        </div>

        <div className="vc-testimonials__cta">
          <div className="vc-testimonials__ctaBox">
            <div>
              <h3 className="vc-testimonials__ctaTitle">Need help with compliance or payroll?</h3>
              <p className="vc-testimonials__ctaSub">
                Drop us a line — we’ll respond quickly with a clear next step.
              </p>
            </div>

            <a className="vc-btn vc-btn--primary" href="/contact">
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
