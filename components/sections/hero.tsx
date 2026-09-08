import Image from "next/image";
import { hero, quickProfile } from "@/lib/portfolio-content";

export function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-index" aria-hidden="true">
          <span>Portfolio</span>
          <span>2026</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.headlineBefore}
            <em>{hero.headlineEm}</em>
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            {hero.actions.map((action) => (
              <a
                key={action.href}
                className={action.quiet ? "text-link quiet" : "text-link"}
                href={action.href}
              >
                {action.label} <span>{action.arrow}</span>
              </a>
            ))}
          </div>
        </div>
        <aside className="hero-signature">
          <figure>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={960}
              height={1200}
              preload
              sizes="(max-width: 980px) 340px, 28vw"
            />
            <figcaption>
              <span>{hero.image.captionLeft}</span>
              <span>{hero.image.captionRight}</span>
            </figcaption>
          </figure>
          <div className="identity-axis" aria-label="Professional foundation">
            <span>{hero.axis[0]}</span>
            <i>→</i>
            <span>{hero.axis[1]}</span>
            <i>→</i>
            <span>{hero.axis[2]}</span>
          </div>
        </aside>
      </section>
      <section className="manifesto-strip" aria-label="Professional positioning">
        <div className="manifesto-track">
          <span>{hero.manifesto}</span>
          <span aria-hidden="true">{hero.manifesto}</span>
        </div>
      </section>
      <section className="quick-profile" aria-label="Portfolio overview">
        {quickProfile.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>
    </>
  );
}
