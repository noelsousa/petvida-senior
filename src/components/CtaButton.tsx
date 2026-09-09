import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "petrol";
  size?: "md" | "lg";
  ariaLabel?: string;
  targetId?: string;
};

export function CtaButton({
  children,
  className,
  variant = "gold",
  size = "lg",
  ariaLabel,
  targetId = "oferta",
}: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={targetId ? `#${targetId}` : "#"}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-xl px-5 text-center font-extrabold uppercase transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
        size === "lg"
          ? "min-h-[60px] py-4 text-[1.0625rem] leading-tight"
          : "min-h-[52px] py-3 text-[0.9375rem] leading-tight",
        variant === "gold"
          ? "bg-gold text-primary-dark shadow-[var(--shadow-gold)]"
          : "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {children}
    </a>
  );
}
