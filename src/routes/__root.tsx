import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço que você abriu não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Tente atualizar ou volte para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}

const META_PIXEL_ID = "1544344897732018";
const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

// Meta Pixel: carrega cedo e de forma assíncrona. PageView e ViewContent entram na fila
// sem depender de interação. Purchase permanece sob responsabilidade da Kiwify.
// InitiateCheckout também permanece sob responsabilidade da Kiwify para evitar duplicidade.
const metaPixelBaseCode = `
!function(f,b){if(f.fbq)return;var n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
f.fbq=n;
var t=b.createElement('script');t.async=!0;t.src='https://connect.facebook.net/en_US/fbevents.js';
var s=b.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s);
}(window,document);
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');

(function(){
  var keys=${JSON.stringify(TRACKED_PARAMS)};
  var source=new URLSearchParams(window.location.search);
  try{
    keys.forEach(function(key){var value=source.get(key);if(value)sessionStorage.setItem('petvida_'+key,value);});
  }catch(e){}

  function trackedUrl(rawUrl){
    var target=new URL(rawUrl,window.location.href);
    if(target.hostname!=='pay.kiwify.com.br')return target.toString();
    keys.forEach(function(key){
      if(target.searchParams.has(key))return;
      var value=source.get(key);
      try{if(!value)value=sessionStorage.getItem('petvida_'+key);}catch(e){}
      if(value)target.searchParams.set(key,value);
    });
    return target.toString();
  }

  // Intercepta somente links para a Kiwify para preservar UTMs/fbclid em qualquer CTA.
  // O checkout da Kiwify registra InitiateCheckout ao ser visitado e Purchase quando aprovado.
  document.addEventListener('click',function(event){
    var target=event.target;
    if(!(target instanceof Element))return;
    var link=target.closest('a[href]');
    if(!link)return;
    var raw=link.getAttribute('href');
    if(!raw)return;
    var destination=new URL(raw,window.location.href);
    if(destination.hostname!=='pay.kiwify.com.br')return;

    event.preventDefault();
    event.stopPropagation();

    var finalUrl=trackedUrl(destination.toString());
    window.location.assign(finalUrl);
  },true);
})();
`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PetVida Sênior — Cuidados para Cães e Gatos Idosos" },
      {
        name: "description",
        content:
          "Guia digital com orientações práticas para cuidar de cães e gatos na fase sênior: rotina, higiene, alimentação, medicamentos e sinais de alerta.",
      },
      { property: "og:site_name", content: "PetVida Sênior" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#073833" },
    ],
    links: [
      { rel: "preconnect", href: "https://connect.facebook.net" },
      { rel: "preconnect", href: "https://www.facebook.com" },
      { rel: "preconnect", href: "https://pay.kiwify.com.br" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/nunito-sans-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/fraunces-latin.woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [{ children: metaPixelBaseCode }],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
