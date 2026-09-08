import { studies } from "@/lib/portfolio-content";
import { Card } from "@/components/ui/card";
import {
  AuditVisual,
  ConsumerVisual,
  EditorialVisual,
} from "@/components/sections/visuals";

function StudyVisual({ type }: { type: "consumer" | "audit" | "editorial" }) {
  if (type === "consumer") return <ConsumerVisual />;
  if (type === "audit") return <AuditVisual />;
  return <EditorialVisual />;
}

export function Studies() {
  return (
    <section className="section-shell studies-section">
      <div className="section-heading compact">
        <p className="eyebrow">{studies.eyebrow}</p>
        <h2>{studies.heading}</h2>
      </div>
      <div className="study-grid">
        {studies.items.map((study) => (
          <Card
            key={study.id}
            id={study.id}
            className="study-card rounded-none py-0 ring-0 gap-0 overflow-hidden text-inherit"
          >
            <div className="study-visual-wrap">
              <StudyVisual type={study.visual} />
              <span className="study-number">{study.number}</span>
            </div>
            <p className="study-label">{study.label}</p>
            <h3>{study.title}</h3>
            <p className="study-copy">{study.copy}</p>
            <a
              className="study-file"
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {study.file}
              <span>↗</span>
            </a>
            <p className="skills">{study.skills}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
