import logoAjm from "@/assets/logo-ajm-technika.png";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Kept for call-site compatibility; logo is an image wordmark. */
  wordmarkClassName?: string;
};

export function BrandMark({ className, wordmarkClassName }: BrandMarkProps) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={logoAjm}
        alt={SITE_NAME}
        width={800}
        height={114}
        className={cn("h-8 w-auto sm:h-9", wordmarkClassName)}
        decoding="async"
        style={{
          filter: "brightness(1.22) contrast(1.04) drop-shadow(0 1px 1px rgb(0 0 0 / 0.18))",
        }}
      />
    </span>
  );
}
