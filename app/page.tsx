import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { ProofMap } from "@/components/sections/proof-map";
import { Research } from "@/components/sections/research";
import { Studies } from "@/components/sections/studies";
import { Transparency } from "@/components/sections/transparency";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <ProofMap />
      <FeaturedWork />
      <Studies />
      <Research />
      <Transparency />
      <Contact />
    </main>
  );
}
