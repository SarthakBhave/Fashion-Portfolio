import { about } from "@/lib/portfolio-content";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-lead">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2>{about.heading}</h2>
        <div className="about-signature" aria-hidden="true">
          <span>{about.signature[0]}</span>
          <i>×</i>
          <span>{about.signature[1]}</span>
          <i>×</i>
          <span>{about.signature[2]}</span>
        </div>
      </div>
      <div className="about-copy">
        <p className="about-main">{about.lead}</p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div className="about-facts">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <p>
                {fact.lines[0]}
                <br />
                {fact.lines[1]}
              </p>
            </div>
          ))}
        </div>
        <div className="journey-block">
          <div className="journey-heading">
            <span>{about.journeyHeading}</span>
            <p>{about.journeyCopy}</p>
          </div>
          <div className="journey-grid">
            {about.journey.map((step) => (
              <article key={step.label}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="profile-grid">
          {about.profiles.map((profile) => (
            <Card
              key={profile.label}
              className="profile-card rounded-none py-0 ring-0 gap-0 overflow-hidden text-inherit"
            >
              <span className="profile-label">{profile.label}</span>
              <h3>{profile.title}</h3>
              <ul>
                {profile.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
      <Separator className="sr-only" />
    </section>
  );
}
