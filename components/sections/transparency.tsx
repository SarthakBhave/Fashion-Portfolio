import { transparency } from "@/lib/portfolio-content";

export function Transparency() {
  return (
    <section className="transparency-section">
      <p className="eyebrow">{transparency.eyebrow}</p>
      <div>
        <h2>{transparency.heading}</h2>
        <p>{transparency.copy}</p>
      </div>
    </section>
  );
}
