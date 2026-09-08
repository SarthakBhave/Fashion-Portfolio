import { research } from "@/lib/portfolio-content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Research() {
  return (
    <section className="research-section" id="research">
      <div className="research-intro">
        <p className="eyebrow">{research.eyebrow}</p>
        <h2>{research.heading}</h2>
        <p>{research.copy}</p>
      </div>
      <div className="research-grid">
        {research.items.map((item) => (
          <Card
            key={item.title}
            className={`research-card ${item.theme} rounded-none py-0 ring-0 gap-0 overflow-hidden text-inherit`}
          >
            <Badge
              variant="outline"
              className="status h-auto rounded-none border-current bg-transparent px-[0.75rem] py-[0.55rem] text-[0.58rem] font-bold tracking-[0.12em] uppercase"
            >
              In development
            </Badge>
            {item.mark === "fusion" ? (
              <div className="research-mark fusion-mark" aria-hidden="true">
                <span>CRAFT</span>
                <i>↔</i>
                <span>LUXURY</span>
              </div>
            ) : (
              <div className="research-mark berlin-mark" aria-hidden="true">
                <b>BER</b>
                <span>STREET SIGNALS</span>
                <b>27</b>
              </div>
            )}
            <p className="research-number">{item.number}</p>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <div className="research-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
