import { featured } from "@/lib/portfolio-content";
import { Card } from "@/components/ui/card";
import {
  ScrollingVisual,
  SoleneVisual,
  VantaVisual,
} from "@/components/sections/visuals";

function CaseVisual({ type }: { type: "solene" | "vanta" | "scrolling" }) {
  if (type === "solene") return <SoleneVisual />;
  if (type === "vanta") return <VantaVisual />;
  return <ScrollingVisual />;
}

export function FeaturedWork() {
  return (
    <section className="section-shell work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">{featured.eyebrow}</p>
        <h2>{featured.heading}</h2>
        <div className="section-side-copy">
          <p>{featured.copy}</p>
          <span>{featured.note}</span>
        </div>
      </div>
      <div className="featured-list">
        {featured.cases.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            className={`featured-project ${project.theme} rounded-none py-0 ring-0 gap-0 overflow-hidden text-inherit`}
          >
            <div className="project-topline">
              <span>{project.number}</span>
              <span>{project.tags}</span>
            </div>
            <div className="project-title-row">
              <div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
              <p className="project-statement">{project.statement}</p>
            </div>
            <CaseVisual type={project.visual} />
            <div className="project-notes">
              <div>
                <span className="note-label">Strategic insight</span>
                <p>{project.insight}</p>
              </div>
              <div>
                <span className="note-label">Execution</span>
                <p>{project.execution}</p>
                <p className="measure">{project.measure}</p>
              </div>
              <div className="project-meta">
                {project.meta.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
            {project.files.map((file) => (
              <a
                key={file.label}
                className={"detail" in file && file.detail ? "case-file detail-file" : "case-file"}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{file.label}</span>
                <small>{file.meta}</small>
              </a>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}
