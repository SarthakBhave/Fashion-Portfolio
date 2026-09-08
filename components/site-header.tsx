"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { nav, site } from "@/lib/portfolio-content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const ids = ["top", "about", "proof-map", "work", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Drashti Patel home">
        {site.name}
        <span>.</span>
      </a>
      <nav aria-label="Portfolio navigation">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.id ? "is-active" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-end">
        <a className="location" href="#contact">
          {site.location}
        </a>
        <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-trigger rounded-none text-ink hover:bg-transparent hover:text-burgundy"
              aria-label="Open navigation"
            />
          }
        >
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[280px] border-l border-line bg-ivory p-8 text-ink"
        >
          <SheetHeader className="p-0">
            <SheetTitle className="font-serif text-left text-xl font-normal tracking-tight">
              {site.name}.
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-10 flex flex-col gap-5" aria-label="Mobile navigation">
            {nav.map((item) => (
              <SheetClose
                key={item.href}
                render={
                  <a
                    href={item.href}
                    className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                  />
                }
              >
                {item.label}
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}
