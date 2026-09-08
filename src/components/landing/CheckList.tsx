import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function CheckList({
  items,
  className,
  spread = false,
}: {
  items: string[];
  className?: string;
  spread?: boolean;
}) {
  return (
    <ul
      className={cn(
        "hidden lg:flex lg:flex-col",
        spread ? "mt-8 min-h-0 flex-1 justify-between" : "mt-8 space-y-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item} delay={0.08 + i * 0.06} y={10}>
          <li className="flex items-center gap-3 text-sm text-foreground/80">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 transition-transform duration-300 ease-out">
              <Check className="size-3.5 text-accent" />
            </span>
            {item}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
