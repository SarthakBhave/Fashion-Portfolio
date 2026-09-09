import { proofMap } from "@/lib/portfolio-content";

export function ProofMap() {
  return (
    <section className="proof-map" id="proof-map">
      <div className="proof-map-heading">
        <div>
          <p className="eyebrow">{proofMap.eyebrow}</p>
          <h2>{proofMap.heading}</h2>
        </div>
        <p>{proofMap.copy}</p>
      </div>
      <div className="proof-grid">
        {proofMap.routes.map((route) => (
          <a
            key={route.href}
            className={`proof-route ${route.className}`}
            href={route.href}
          >
            <span className="proof-number">{route.number}</span>
            <p>{route.need}</p>
            <h3>{route.title}</h3>
            <div>
              <span>{route.open}</span>
              <b>↘</b>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
