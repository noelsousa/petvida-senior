import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/CtaButton";
import { trackViewContent } from "@/lib/checkout";
import logo from "@/assets/logo.webp";
import heroPets from "@/assets/hero-pets.webp";
import mockupMain from "@/assets/mockup-main.webp";
import tutorPet from "@/assets/tutor-pet.webp";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";

const TITLE = "PetVida Sênior — Guia para Cães e Gatos Idosos";
const DESCRIPTION =
  "Guia completo + 3 bônus para cuidar melhor do seu cão ou gato idoso. Oferta de lançamento por R$ 29,90, com acesso imediato e garantia de 7 dias.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PetVida Sênior — Guia Completo + 3 Bônus",
          description: DESCRIPTION,
          brand: { "@type": "Brand", name: "PetVida Sênior" },
          offers: {
            "@type": "Offer",
            price: "29.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "https://pay.kiwify.com.br/qu6aO4q",
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
  "Guia completo + 3 bônus",
];

const painPoints = [
  "Ele dorme mais do que antes?",
  "Está comendo menos ou diferente?",
  "Tem dificuldade para levantar, andar ou subir?",
  "O pelo, a pele ou o hálito mudaram?",
  "Você fica na dúvida se é idade ou sinal de alerta?",
];

const transformations = [
  { title: "Higiene adaptada", icon: BathIcon },
  { title: "Alimentação e apetite", icon: BowlIcon },
  { title: "Consultas organizadas", icon: CalendarIcon },
  { title: "Controle de medicamentos", icon: MedicineIcon },
  { title: "Checklist mensal", icon: ChecklistIcon },
  { title: "Sinais de atenção", icon: EyeIcon },
];

const products = [
  {
    label: "Guia principal",
    title: "PetVida Sênior",
    text: "Cuidados com higiene, alimentação, rotina, consultas, medicamentos e sinais de alerta.",
    image: mockupMain,
    alt: "Mockup do guia principal PetVida Sênior",
    featured: true,
  },
  {
    label: "Bônus 1",
    title: "Checklist Mensal do Pet Idoso",
    text: "Acompanhe alimentação, comportamento, mobilidade, higiene e mudanças importantes.",
    image: bonus1,
    alt: "Capa do bônus Checklist Mensal do Pet Idoso",
  },
  {
    label: "Bônus 2",
    title: "Guia de Alimentação Sênior",
    text: "Entenda os cuidados alimentares e converse com o veterinário com mais segurança.",
    image: bonus2,
    alt: "Capa do bônus Guia de Alimentação Sênior",
  },
  {
    label: "Bônus 3",
    title: "Rotina de Cuidados e Conforto",
    text: "Um plano prático para deixar o dia a dia mais confortável, seguro e organizado.",
    image: bonus3,
    alt: "Capa do bônus Rotina de Cuidados e Conforto",
  },
];

const offerItems = [
  "Pagamento único",
  "Acesso imediato",
  "Acesso pelo celular",
  "Guia principal + 3 bônus",
  "Garantia de 7 dias",
];

const safetyItems = [
  { title: "Conteúdo educativo", icon: BookIcon },
  { title: "Linguagem simples", icon: MessageIcon },
  { title: "Foco em pets idosos", icon: PawIcon },
  { title: "Compra segura", icon: LockIcon },
  { title: "Garantia de 7 dias", icon: ShieldIcon },
];

const audience = [
  "Você tem medo de não perceber mudanças importantes no seu pet",
  "Fica em dúvida sobre alimentação, higiene ou rotina",
  "Seu pet já não tem a mesma energia de antes",
  "Quer organizar consultas e medicamentos",
  "Quer cuidar melhor sem se sentir perdido",
];

const faq = [
  {
    q: "O guia serve para cães e gatos?",
    a: "Sim. O conteúdo foi criado para tutores de cães e gatos idosos.",
  },
  {
    q: "É uma consulta veterinária?",
    a: "Não. É um guia educativo. Em caso de sintomas, dor, mudança brusca de comportamento ou qualquer sinal preocupante, procure um médico-veterinário.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a compra, o acesso é enviado automaticamente pela Kiwify para o e-mail cadastrado.",
  },
  {
    q: "É pagamento único?",
    a: "Sim. Você paga uma vez e recebe o acesso ao conteúdo digital.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia, conforme as condições apresentadas no checkout.",
  },
];

function LandingPage() {
  const offerRef = useRef<HTMLElement | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    trackViewContent();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const rect = offerRef.current?.getBoundingClientRect();
      const offerVisible = !!rect && rect.top < window.innerHeight && rect.bottom > 0;
      setShowStickyBar(window.scrollY > 560 && !offerVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="bg-primary-dark px-3 py-2 text-center text-xs font-extrabold uppercase text-cream">
        Guia completo + 3 bônus <span className="text-gold">•</span> Acesso imediato
      </div>

      <main>
        <section className="relative overflow-hidden bg-background pb-12 pt-5 sm:pb-16 lg:pb-20 lg:pt-8">
          <div className="wrap">
            <img
              src={logo}
              alt="PetVida Sênior"
              width={576}
              height={288}
              className="mx-auto h-12 w-auto lg:mx-0 lg:h-14"
            />

            <div className="mt-5 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="min-w-0 lg:order-1">
                <p className="eyebrow text-center text-primary lg:text-left">Para cães e gatos idosos</p>
                <h1 className="mt-2 text-center text-[2.15rem] leading-[1.08] text-primary sm:text-[2.7rem] lg:text-left lg:text-[3.4rem]">
                  Seu pet envelheceu. <span className="text-gold">O cuidado também precisa evoluir.</span>
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-foreground lg:mx-0 lg:text-left lg:text-lg">
                  Um guia simples e completo para cuidar melhor da alimentação, higiene, consultas,
                  medicamentos, rotina e sinais de alerta.
                </p>

                <div className="relative mt-6 lg:hidden">
                  <img
                    src={heroPets}
                    alt="Cão idoso e gato idoso descansando juntos"
                    width={960}
                    height={720}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[16/11] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-soft)]"
                  />
                  <img
                    src={mockupMain}
                    alt="Guia digital PetVida Sênior"
                    width={900}
                    height={720}
                    decoding="async"
                    className="absolute -bottom-5 -right-5 w-[43%] max-w-44 drop-shadow-xl"
                  />
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
                  <div className="flex items-end justify-center gap-2 lg:justify-start">
                    <span className="pb-1 text-sm text-muted-foreground line-through">R$ 69,90</span>
                    <span className="font-display text-3xl font-bold text-primary">R$ 29,90</span>
                    <span className="pb-1 text-sm font-bold text-primary">pagamento único</span>
                  </div>
                  <CtaButton className="mt-3">Quero cuidar melhor do meu pet</CtaButton>
                  <TrustLine />
                </div>
              </div>

              <div className="relative hidden lg:order-2 lg:block">
                <img
                  src={heroPets}
                  alt="Cão idoso e gato idoso descansando juntos"
                  width={960}
                  height={720}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                />
                <img
                  src={mockupMain}
                  alt="Guia digital PetVida Sênior"
                  width={900}
                  height={720}
                  decoding="async"
                  className="absolute -bottom-12 -left-14 w-[47%] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap max-w-4xl">
            <SectionHeading
              eyebrow="Observe com mais atenção"
              title="Com a idade, pequenos sinais podem dizer muito."
              text="Muitas mudanças parecem apenas “coisa da idade”, mas algumas merecem atenção e acompanhamento."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-base font-semibold text-foreground ${index === painPoints.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-soft text-primary">
                    <EyeIcon />
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base font-semibold text-primary">
              O PetVida Sênior ajuda você a organizar os cuidados e observar melhor a rotina do seu pet.
            </p>
            <CtaButton variant="petrol" className="mx-auto mt-5 max-w-md">Acessar o guia agora</CtaButton>
          </div>
        </section>

        <section className="section-pad bg-background">
          <div className="wrap">
            <SectionHeading
              eyebrow="Clareza para cuidar"
              title="Você não precisa cuidar no escuro."
              text="Orientações práticas para uma rotina mais segura, organizada e confortável."
            />
            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
              {transformations.map(({ title, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary"><Icon /></span>
                  <h3 className="mt-3 text-base font-bold text-primary sm:text-lg">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap">
            <SectionHeading
              eyebrow="Pacote completo"
              title="O que você recebe ao acessar o PetVida Sênior"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article key={product.title} className={`flex flex-col rounded-2xl border bg-background p-4 shadow-[var(--shadow-card)] ${product.featured ? "border-gold md:col-span-2 lg:col-span-1" : "border-border"}`}>
                  <div className="grid h-48 place-items-center rounded-xl bg-muted p-2">
                    <img
                      src={product.image}
                      alt={product.alt}
                      width={product.featured ? 900 : 420}
                      height={product.featured ? 720 : 560}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="eyebrow mt-4 text-primary">{product.label}</p>
                  <h3 className="mt-1 text-xl text-primary">{product.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground">{product.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary-dark text-cream">
          <div className="grid min-h-[520px] lg:grid-cols-2">
            <img
              src={tutorPet}
              alt="Tutora abraçando seu cão idoso com um gato idoso ao lado"
              width={960}
              height={720}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover sm:h-96 lg:h-full"
            />
            <div className="flex items-center px-5 py-10 sm:px-10 lg:px-16">
              <div className="max-w-xl">
                <PawIcon className="size-8 text-gold" />
                <h2 className="mt-4 text-3xl text-cream sm:text-4xl">
                  Ele cuidou de você com amor por anos. <span className="text-gold">Agora é a sua vez.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream">
                  Na fase sênior, seu pet precisa de mais atenção, paciência e uma rotina adaptada.
                  Pequenos cuidados podem trazer mais conforto, segurança e qualidade de vida.
                </p>
                <CtaButton className="mt-6 max-w-md">Quero o PetVida Sênior</CtaButton>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" ref={offerRef} className="section-pad bg-background">
          <div className="wrap max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-gold bg-primary-dark shadow-[var(--shadow-soft)]">
              <div className="bg-gold px-4 py-2 text-center text-sm font-extrabold uppercase text-primary-dark">
                Oferta de lançamento
              </div>
              <div className="grid items-center gap-6 p-5 sm:p-8 md:grid-cols-[0.9fr_1.1fr]">
                <img
                  src={mockupMain}
                  alt="Pacote PetVida Sênior com guia completo e três bônus"
                  width={900}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-full max-w-sm"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl text-cream">PetVida Sênior</h2>
                  <p className="mt-2 text-base text-cream">Guia completo + 3 bônus para cuidar melhor do seu cão ou gato idoso.</p>
                  <div className="mt-5">
                    <p className="text-base text-cream line-through">De R$ 69,90</p>
                    <p className="font-display text-4xl font-bold text-gold sm:text-5xl">R$ 29,90</p>
                    <p className="text-sm font-bold text-cream">pagamento único</p>
                  </div>
                  <ul className="mx-auto mt-5 grid max-w-md gap-2 text-left sm:grid-cols-2 md:mx-0 md:grid-cols-1">
                    {offerItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base text-cream">
                        <CheckCircleIcon className="size-5 shrink-0 text-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                  <CtaButton className="mt-6">Comprar agora por R$ 29,90</CtaButton>
                  <p className="mt-3 text-center text-sm text-cream">
                    Preço promocional de lançamento. O valor pode voltar para R$ 69,90 a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap max-w-5xl">
            <SectionHeading
              eyebrow="Informação responsável"
              title="Criado para tutores que querem cuidar com mais segurança"
              text="O PetVida Sênior não substitui uma consulta veterinária. É um guia educativo para organizar a rotina, observar sinais importantes e conversar com o veterinário mais preparado."
            />
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {safetyItems.map(({ title, icon: Icon }, index) => (
                <div key={title} className={`${index === safetyItems.length - 1 ? "col-span-2 sm:col-span-1" : ""} rounded-xl border border-border bg-background p-4 text-center`}>
                  <span className="mx-auto grid size-10 place-items-center rounded-full bg-secondary text-primary"><Icon /></span>
                  <p className="mt-2 text-sm font-bold text-primary">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-background">
          <div className="wrap max-w-4xl">
            <SectionHeading title="Esse guia é para você se…" />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {audience.map((item, index) => (
                <li key={item} className={`${index === audience.length - 1 ? "sm:col-span-2" : ""} flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-base font-semibold text-foreground`}>
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad bg-card">
          <div className="wrap max-w-3xl">
            <SectionHeading title="Perguntas frequentes" />
            <Accordion type="single" collapsible className="mt-7 space-y-3">
              {faq.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`} className="rounded-xl border border-border bg-background px-4">
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-pad bg-primary-dark text-center">
          <div className="wrap max-w-2xl">
            <ShieldIcon className="mx-auto size-10 text-gold" />
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Seu pet não precisa envelhecer sem cuidado e atenção.</h2>
            <p className="mt-4 text-base leading-relaxed text-cream">
              Comece hoje a organizar a rotina, alimentação, higiene, consultas e sinais importantes do seu pet idoso.
            </p>
            <CtaButton className="mx-auto mt-6 max-w-md">Comprar agora por R$ 29,90</CtaButton>
            <TrustLine dark />
          </div>
        </section>
      </main>

      <footer className="bg-primary-dark pb-28 pt-8 text-cream md:pb-8">
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

      <div
        aria-hidden={!showStickyBar}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-primary-dark/95 px-3 py-3 backdrop-blur transition-[opacity,transform] duration-300 md:hidden ${showStickyBar ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}
      >
        <CtaButton size="md" ariaLabel="Comprar o PetVida Sênior por R$ 29,90">Comprar por R$ 29,90</CtaButton>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
      <h2 className={`${eyebrow ? "mt-2" : ""} text-3xl text-primary sm:text-4xl`}>{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground">{text}</p>}
    </div>
  );
}

function TrustLine({ dark = false }: { dark?: boolean }) {
  return (
    <p className={`mt-3 text-center text-sm font-semibold ${dark ? "text-cream" : "text-muted-foreground"}`}>
      Acesso imediato <span className="text-gold">•</span> Pagamento seguro <span className="text-gold">•</span> Garantia de 7 dias
    </p>
  );
}

function SvgIcon({ children, className = "size-5" }: { children: ReactNode; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{children}</svg>;
}
function CheckCircleIcon({ className }: { className?: string }) { return <SvgIcon className={className}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.6 2.6L16.5 9" /></SvgIcon>; }
function PawIcon({ className = "size-5" }: { className?: string }) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><ellipse cx="6" cy="9" rx="2.1" ry="2.9"/><ellipse cx="10.6" cy="6" rx="2.1" ry="2.9"/><ellipse cx="15.5" cy="6.4" rx="2.1" ry="2.9"/><ellipse cx="19.4" cy="10" rx="2" ry="2.7"/><path d="M12.6 11.4c3.2 0 5.9 2.4 5.9 5.1 0 2.1-1.7 3.5-4 3.5-1 0-1.6-.2-2.2-.4-.5-.2-.9-.2-1.4 0-.6.2-1.2.4-2.2.4-2.3 0-4-1.4-4-3.5 0-2.7 2.7-5.1 5.9-5.1z"/></svg>; }
function BowlIcon() { return <SvgIcon><path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M8 7c0-1.7 1.8-3 4-3s4 1.3 4 3"/></SvgIcon>; }
function CalendarIcon() { return <SvgIcon><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></SvgIcon>; }
function EyeIcon() { return <SvgIcon><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/></SvgIcon>; }
function BathIcon() { return <SvgIcon><path d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"/><path d="M7 13V6a3 3 0 0 1 6 0"/></SvgIcon>; }
function MedicineIcon() { return <SvgIcon><path d="m8 8 8 8"/><rect x="4" y="7" width="16" height="10" rx="5" transform="rotate(-45 12 12)"/></SvgIcon>; }
function ChecklistIcon() { return <SvgIcon><rect x="5" y="3" width="14" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8M8 15h8"/></SvgIcon>; }
function BookIcon() { return <SvgIcon><path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2V5Z"/><path d="M20 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z"/></SvgIcon>; }
function MessageIcon() { return <SvgIcon><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/></SvgIcon>; }
function LockIcon() { return <SvgIcon><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></SvgIcon>; }
function ShieldIcon({ className }: { className?: string }) { return <SvgIcon className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></SvgIcon>; }
