import { CHECKOUT_URL, goToCheckout } from "@/lib/checkout";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "petrol";
  size?: "md" | "lg";
  ariaLabel?: string;
  onCheckout?: () => void;
};

export function CtaButton({
  children,
  className,
  variant = "gold",
  size = "lg",
  ariaLabel,
  onCheckout,
}: Props) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={(event) => {
        onCheckout?.();
        goToCheckout(event);
      }}
      aria-label={ariaLabel}
      rel="noopener"
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
