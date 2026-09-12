export const CHECKOUT_URL = "https://pay.kiwify.com.br/qu6aO4q";
export const BASIC_CHECKOUT_URL = "https://pay.kiwify.com.br/cbbtkJu";
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
export function buildCheckoutUrl(checkoutUrl: string = CHECKOUT_URL): string {
  if (typeof window === "undefined") return checkoutUrl;

  const target = new URL(checkoutUrl);
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

type CheckoutClickEvent = {
  preventDefault: () => void;
};

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

function redirectToCheckout(checkoutUrl: string, event?: CheckoutClickEvent): void {
  event?.preventDefault();
  if (redirecting) return;
  redirecting = true;

  const url = buildCheckoutUrl(checkoutUrl);
  window.location.replace(url);
}

/** Redireciona rapidamente para o Premium preservando os parâmetros de campanha. */
export function goToCheckout(event?: CheckoutClickEvent): void {
  redirectToCheckout(CHECKOUT_URL, event);
}

/** Redireciona para o Básico preservando os mesmos parâmetros de campanha do Premium. */
export function goToBasicCheckout(event?: CheckoutClickEvent): void {
  redirectToCheckout(BASIC_CHECKOUT_URL, event);
}
