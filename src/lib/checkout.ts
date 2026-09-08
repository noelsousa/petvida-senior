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
    // não duplica parâmetros já presentes no checkout
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

/** Único handler para todos os CTAs: InitiateCheckout -> redireciona. */
export function goToCheckout(event?: { preventDefault: () => void }): void {
  event?.preventDefault();
  if (redirecting) return;
  redirecting = true;

  // garante que o pixel esteja carregado antes de sair da página
  (window as unknown as { __fbLoad?: () => void }).__fbLoad?.();

  const url = buildCheckoutUrl();


  try {
    getFbq()?.("track", "InitiateCheckout", {
      content_name: "PetVida Senior - Guia Completo",
      content_ids: ["petvida-senior"],
      content_type: "product",
      num_items: 1,
      value: PRICE,
      currency: "BRL",
    });
  } catch {
    // pixel bloqueado: o botão continua funcionando
  }

  window.setTimeout(() => {
    window.location.href = url;
    // libera caso o navegador mantenha a página (ex.: volta do histórico)
    window.setTimeout(() => {
      redirecting = false;
    }, 4000);
  }, 250);
}
