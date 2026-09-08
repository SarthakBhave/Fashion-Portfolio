import { contact } from "@/lib/portfolio-content";

export function Contact() {
  return (
    <footer id="contact">
      <p className="eyebrow">{contact.eyebrow}</p>
      <h2>{contact.heading}</h2>
      <div className="contact-grid">
        {contact.facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
      <div className="footer-line">
        <span>{contact.footer[0]}</span>
        <span>{contact.footer[1]}</span>
      </div>
    </footer>
  );
}
