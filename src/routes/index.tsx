import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { CtaButton } from "@/components/CtaButton";
import { CHECKOUT_URL, goToCheckout, trackViewContent } from "@/lib/checkout";
import logo from "@/assets/logo-288.webp";
import heroPets from "@/assets/hero-pets.webp";
import mockupMain from "@/assets/mockup-main.webp";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";

const SITE_URL = "https://petvida-senior.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const BASIC_CHECKOUT_URL = "https://pay.kiwify.com.br/cbbtkJu";
const TITLE = "PetVida Sênior — Guia para Cães e Gatos Idosos";
const DESCRIPTION = "Escolha entre o e-book principal ou o pacote completo PetVida Sênior com 3 bônus.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroPets, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PetVida Sênior",
          description: DESCRIPTION,
          image: OG_IMAGE,
          brand: { "@type": "Brand", name: "PetVida Sênior" },
          offers: {
            "@type": "Offer",
            price: "29.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: CHECKOUT_URL,
          },
        }),
      },
    ],
  }),
});

const heroBenefits = [
  "Cuidados diários para pets idosos",
  "Alimentação, higiene e rotina",
  "Consultas, medicamentos e sinais de alerta",
  "Acesso imediato ao material digital",
];

const painPoints = [
  "Ele dorme mais do que antes?",
  "Está comendo menos ou diferente?",
  "Tem dificuldade para levantar, andar ou subir?",
  "Você fica na dúvida se é idade ou sinal de alerta?",
];

const faq = [
  { q: "O guia serve para cães e gatos?", a: "Sim. O conteúdo foi criado para tutores de cães e gatos idosos." },
  { q: "É uma consulta veterinária?", a: "Não. É um material educativo. Em caso de sintomas ou sinais preocupantes, procure um médico-veterinário." },
  { q: "Como recebo o acesso?", a: "Após a compra, o acesso é enviado automaticamente pela Kiwify para o e-mail cadastrado." },
  { q: "É pagamento único?", a: "Sim. Você paga uma vez e recebe o acesso ao produto escolhido." },
  { q: "Tem garantia?", a: "O checkout informa as condições de garantia aplicáveis a cada oferta." },
];

const productComments = [
  {
    title: "Direto ao ponto",
    text: "O material foi organizado para quem quer saber o que observar na rotina do pet idoso sem precisar atravessar uma página cheia de informações desnecessárias.",
  },
  {
    title: "Para usar no dia a dia",
    text: "A proposta é transformar cuidados importantes — alimentação, higiene, rotina, consultas e sinais de atenção — em algo mais fácil de acompanhar.",
  },
  {
    title: "Mais clareza",
    text: "Em vez de tentar lembrar tudo de cabeça, o tutor pode usar o conteúdo como uma referência prática para organizar os cuidados.",
  },
  {
    title: "Escolha simples",
    text: "Quem quer somente o e-book pode escolher o Básico. Quem quer o pacote completo pode levar também os três bônus.",
  },
];

function LandingPage() {
  const [commentIndex, setCommentIndex] = useState(0);

  useEffect(() => {
    trackViewContent();
  }, []);

  const nextComment = () => setCommentIndex((current) => (current + 1) % productComments.length);
  const previousComment = () => setCommentIndex((current) => (current - 1 + productComments.length) % productComments.length);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="bg-primary-dark px-3 py-2 text-center text-xs font-extrabold uppercase text-cream">
        PetVida Sênior <span className="text-gold">•</span> Acesso imediato
      </div>

      <main>
        <section className="relative overflow-hidden bg-background pb-12 pt-5 sm:pb-16 lg:pb-20 lg:pt-8">
          <div className="wrap">
            <img src={logo} alt="PetVida Sênior" width={576} height={288} className="mx-auto h-12 w-auto lg:mx-0 lg:h-14" />

            <div className="mt-5 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="min-w-0 lg:order-1">
                <p className="eyebrow text-center text-primary lg:text-left">Para cães e gatos idosos</p>
                <h1 className="mt-2 text-center text-[2.15rem] leading-[1.08] text-primary sm:text-[2.7rem] lg:text-left lg:text-[3.4rem]">
                  Seu pet envelheceu. <span className="text-gold">O cuidado também precisa evoluir.</span>
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-foreground lg:mx-0 lg:text-left lg:text-lg">
                  Um guia simples para ajudar você a cuidar melhor da alimentação, higiene, rotina e sinais de atenção do seu pet idoso.
                </p>

                <div className="relative mt-6 lg:hidden">
                  <img src={heroPets} alt="Cão idoso e gato idoso descansando juntos" width={960} height={720} fetchPriority="high" decoding="async" className="aspect-[16/11] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-soft)]" />
                  <img src={mockupMain} alt="Guia digital PetVida Sênior" width={900} height={720} decoding="async" className="absolute -bottom-5 -right-5 w-[43%] max-w-44 drop-shadow-xl" />
                </div>

                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:mt-6">
                  {heroBenefits.map((item) => (
                    <li key={item} className="flex min-w-0 items-start gap-2.5 text-base font-semibold text-foreground">
                      <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 max-w-xl">
                  <p className="text-center text-sm font-semibold text-muted-foreground lg:text-left">Escolha o formato que faz mais sentido para você:</p>
                  <CtaButton className="mt-3">Ver os planos</CtaButton>
                  <TrustLine />
                </div>
              </div>

              <div className="relative hidden lg:order-2 lg:block">
                <img src={heroPets} alt="Cão idoso e gato idoso descansando juntos" width={960} height={720} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
                <img src={mockupMain} alt="Guia digital PetVida Sênior" width={900} height={720} decoding="async" className="absolute -bottom-12 -left-14 w-[47%] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Observe com mais atenção" title="Com a idade, pequenos sinais podem dizer muito." text="Algumas mudanças parecem apenas coisa da idade. Ter uma referência ajuda você a observar a rotina com mais atenção." />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-base font-semibold text-foreground">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-soft text-primary"><EyeIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CtaButton variant="petrol" className="mx-auto mt-6 max-w-md">Escolher meu plano</CtaButton>
          </div>
        </section>

        <section id="oferta" className="section-pad scroll-mt-5 bg-background">
          <div className="wrap max-w-5xl">
            <SectionHeading eyebrow="Escolha seu acesso" title="Duas formas simples de começar" text="O Básico entrega o e-book principal. O Premium reúne o guia completo e os três bônus." />

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <PlanCard
                title="Plano Básico"
                label="Essencial"
                description="Para quem quer somente o e-book principal PetVida Sênior."
                features={["E-book principal PetVida Sênior", "Acesso digital", "Acesso imediato", "Pagamento único"]}
                buttonLabel="Quero o Básico"
                href={BASIC_CHECKOUT_URL}
              />

              <PlanCard
                title="Plano Premium"
                label="Mais completo"
                description="Para quem quer o guia principal junto dos três materiais extras."
                features={["E-book principal PetVida Sênior", "Checklist Mensal do Pet Idoso", "Guia de Alimentação Sênior", "Rotina de Cuidados e Conforto", "Acesso imediato", "Garantia conforme checkout"]}
                buttonLabel="Quero o Premium"
                href={CHECKOUT_URL}
                featured
              />
            </div>
          </div>
        </section>

        <section className="bg-card px-5 py-8 sm:py-10">
          <div className="wrap max-w-3xl text-center">
            <PawIcon className="mx-auto size-9 text-primary" />
            <p className="mt-3 font-display text-2xl leading-tight text-primary sm:text-3xl">
              “Para quem ama um pet, cuidar melhor não é um gasto: é um pequeno investimento no tempo de qualidade que ainda podemos viver juntos.”
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Um material simples pode ajudar a transformar dúvidas do dia a dia em cuidados mais organizados.</p>
          </div>
        </section>

        <section className="section-pad bg-background">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Sobre o produto" title="O que você pode esperar do material" text="Uma visão prática e objetiva, sem transformar a decisão de compra em uma página interminável." />
            <div className="relative mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <p className="eyebrow text-primary">{productComments[commentIndex].title}</p>
              <p className="mt-3 text-lg leading-relaxed text-foreground">“{productComments[commentIndex].text}”</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <button type="button" onClick={previousComment} aria-label="Comentário anterior" className="grid size-10 place-items-center rounded-full border border-border text-primary transition hover:bg-secondary">‹</button>
                <div className="flex gap-1.5" aria-label={`Comentário ${commentIndex + 1} de ${productComments.length}`}>
                  {productComments.map((comment, index) => (
                    <button key={comment.title} type="button" onClick={() => setCommentIndex(index)} aria-label={`Ver comentário ${index + 1}`} className={`size-2.5 rounded-full ${index === commentIndex ? "bg-primary" : "bg-border"}`} />
                  ))}
                </div>
                <button type="button" onClick={nextComment} aria-label="Próximo comentário" className="grid size-10 place-items-center rounded-full border border-border text-primary transition hover:bg-secondary">›</button>
              </div>
            </div>
            <CtaButton className="mx-auto mt-7 max-w-md">Ver os planos</CtaButton>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap max-w-3xl">
            <SectionHeading title="O que acompanha o acesso Premium" />
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <MiniProduct image={mockupMain} title="E-book principal" />
              <MiniProduct image={bonus1} title="Checklist mensal" />
              <MiniProduct image={bonus2} title="Guia de alimentação" />
            </div>
            <div className="mx-auto mt-3 max-w-sm">
              <MiniProduct image={bonus3} title="Rotina de cuidados e conforto" />
            </div>
          </div>
        </section>

        <section className="section-pad bg-background">
          <div className="wrap max-w-3xl">
            <SectionHeading title="Perguntas frequentes" />
            <div className="mt-7 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-xl border border-border bg-card px-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-base font-bold text-primary [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </summary>
                  <div className="pb-4 text-base leading-relaxed text-foreground">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-primary-dark text-center">
          <div className="wrap max-w-2xl">
            <ShieldIcon className="mx-auto size-10 text-gold" />
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Seu pet merece uma rotina de cuidados mais organizada.</h2>
            <p className="mt-4 text-base leading-relaxed text-cream">Escolha o acesso que cabe no que você precisa hoje.</p>
            <CtaButton className="mx-auto mt-6 max-w-md">Escolher meu plano</CtaButton>
            <TrustLine dark />
          </div>
        </section>
      </main>

      <footer className="bg-primary-dark pb-8 pt-8 text-cream">
        <div className="wrap border-t border-cream/20 pt-7">
          <img src={logo} alt="PetVida Sênior" width={576} height={288} loading="lazy" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-2xl text-sm">Produto digital de caráter educativo. Não substitui consulta, diagnóstico, prescrição ou tratamento veterinário.</p>
          <nav aria-label="Links legais" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
            <Link to="/politica-de-privacidade" className="underline underline-offset-4">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="underline underline-offset-4">Termos de Uso</Link>
            <Link to="/contato" className="underline underline-offset-4">Contato</Link>
          </nav>
          <p className="mt-5 text-xs">PetVida Sênior — Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function PlanCard({ title, label, description, features, buttonLabel, href, featured = false }: { title: string; label: string; description: string; features: string[]; buttonLabel: string; href: string; featured?: boolean }) {
  const handlePremiumClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === CHECKOUT_URL) goToCheckout(event);
  };

  return (
    <article className={`relative flex flex-col rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)] sm:p-7 ${featured ? "border-gold ring-2 ring-gold/20" : "border-border"}`}>
      {featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-extrabold uppercase text-primary-dark">Recomendado</div>}
      <p className="eyebrow text-primary">{label}</p>
      <h2 className="mt-2 text-2xl text-primary sm:text-3xl">{title}</h2>
      <p className="mt-3 min-h-12 text-base leading-relaxed text-foreground">{description}</p>
      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm font-semibold text-foreground"><CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" /><span>{feature}</span></li>)}
      </ul>
      <div className="mt-auto pt-6">
        <a href={href} onClick={handlePremiumClick} rel="noopener" className={`inline-flex min-h-[58px] w-full items-center justify-center rounded-xl px-5 py-4 text-center text-base font-extrabold uppercase transition hover:-translate-y-0.5 hover:brightness-105 ${featured ? "bg-gold text-primary-dark shadow-[var(--shadow-gold)]" : "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"}`}>
          {buttonLabel}
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">Você será levado diretamente ao checkout deste plano.</p>
      </div>
    </article>
  );
}

function MiniProduct({ image, title }: { image: string; title: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3 text-center">
      <div className="flex h-36 items-center justify-center overflow-hidden rounded-lg bg-muted p-2">
        <img src={image} alt={title} width={420} height={560} loading="lazy" decoding="async" className="max-h-full w-auto max-w-full object-contain" />
      </div>
      <p className="mt-3 text-sm font-bold text-primary">{title}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}<h2 className={`${eyebrow ? "mt-2" : ""} text-3xl text-primary sm:text-4xl`}>{title}</h2>{text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground">{text}</p>}</div>;
}

function TrustLine({ dark = false }: { dark?: boolean }) {
  return <p className={`mt-3 text-center text-sm font-semibold ${dark ? "text-cream" : "text-muted-foreground"}`}>Acesso imediato <span className="text-gold">•</span> Pagamento seguro <span className="text-gold">•</span> Conteúdo digital</p>;
}

function SvgIcon({ children, className = "size-5" }: { children: ReactNode; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{children}</svg>;
}
function CheckCircleIcon({ className = "size-5" }: { className?: string }) { return <SvgIcon className={className}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.6 2.6L16.5 9" /></SvgIcon>; }
function PawIcon({ className = "size-5" }: { className?: string }) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><ellipse cx="6" cy="9" rx="2.1" ry="2.9"/><ellipse cx="10.6" cy="6" rx="2.1" ry="2.9"/><ellipse cx="15.5" cy="6.4" rx="2.1" ry="2.9"/><ellipse cx="19.4" cy="10" rx="2" ry="2.7"/><path d="M12.6 11.4c3.2 0 5.9 2.4 5.9 5.1 0 2.1-1.7 3.5-4 3.5-1 0-1.6-.2-2.2-.4-.5-.2-.9-.2-1.4 0-.6.2-1.2.4-2.2.4-2.3 0-4-1.4-4-3.5 0-2.7 2.7-5.1 5.9-5.1z"/></svg>; }
function EyeIcon() { return <SvgIcon><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/></SvgIcon>; }
function ShieldIcon({ className = "size-5" }: { className?: string }) { return <SvgIcon className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></SvgIcon>; }
