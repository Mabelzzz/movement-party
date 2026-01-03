import React from "react";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  badgeText: string;
  title: string;
  description?: string;
  className?: string;
  sectionClassName?: string;
  variant?: "about" | "policy" | "default";
};

export function PageIntro({
  badgeText,
  title,
  description,
  className,
  sectionClassName,
}: PageIntroProps) {

  return (
    <section
      className={cn(
        "relative py-24 overflow-hidden bg-dark-gradient",
        sectionClassName
      )}
    >

      <div className="absolute inset-0 opacity-10 " style={{ backgroundImage: "url(/logo.svg)" }}/>

      <div className={cn("container relative z-10 text-center", className)}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-bold">{badgeText}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>

        {description ? (
          <p className="text-xl max-w-2xl mx-auto">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
