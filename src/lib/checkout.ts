export const CHECKOUT_URL = "https://pay.kiwify.com.br/qu6aO4q";
export const PRICE = 29.9;

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

/** Monta a URL do checkout preservando UTMs e fbclid da landing page. */
export function buildCheckoutUrl(): string {
  if (typeof window === "undefined") return CHECKOUT_URL;

  const target = new URL(CHECKOUT_URL);
  const current = new URLSearchParams(window.location.search);

  for (const key of TRACKED_PARAMS) {
    const value = current.get(key);
    if (value && !target.searchParams.has(key)) {
      target.searchParams.set(key, value);
    }
  }

  return target.toString();
}

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

export function trackViewContent(): void {
  getFbq()?.("track", "ViewContent", {
    content_name: "PetVida Senior - Guia Completo",
    content_ids: ["petvida-senior"],
    content_type: "product",
    value: PRICE,
    currency: "BRL",
  });
}

let redirecting = false;

/** Redireciona rapidamente para o Premium preservando os parâmetros de campanha. */
export function goToCheckout(event?: { preventDefault: () => void }): void {
  event?.preventDefault();
  if (redirecting) return;
  redirecting = true;

  const url = buildCheckoutUrl();

  // A Kiwify dispara InitiateCheckout ao visitar o checkout e Purchase quando a compra é aprovada.
  // Mantemos esses eventos sob responsabilidade da Kiwify para evitar duplicidade de IC.
  window.location.replace(url);
}
