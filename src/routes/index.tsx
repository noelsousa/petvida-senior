import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { CtaButton } from "@/components/CtaButton";
import { BASIC_CHECKOUT_URL, CHECKOUT_URL, goToBasicCheckout, goToCheckout, trackViewContent } from "@/lib/checkout";
import logo from "@/assets/logo-288.webp";
import heroPets from "@/assets/hero-pets.webp";
import mockupMain from "@/assets/mockup-main.webp";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";
import joyceConversation from "@/assets/testimonials/joyce.webp.asset.json";
import marcelyConversation from "@/assets/testimonials/marcely.webp.asset.json";
import rafaelConversation from "@/assets/testimonials/rafael.webp.asset.json";
import sandraConversation from "@/assets/testimonials/sandra.webp.asset.json";
import thiagoConversation from "@/assets/testimonials/thiago.webp.asset.json";

const SITE_URL = "https://petvida-senior.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TITLE = "PetVida Sênior — Cuidados para Cães e Gatos Idosos";
const DESCRIPTION = "Um guia prático para ajudar tutores a entender melhor e organizar os cuidados de cães e gatos idosos.";

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
  "Entenda melhor as necessidades do pet idoso",
  "Organize alimentação, higiene e rotina",
  "Tenha uma referência para observar mudanças",
  "Acesso digital imediato",
];

const painPoints = [
  "Está dormindo muito mais do que antes?",
  "Começou a comer menos ou de forma diferente?",
  "Está com dificuldade para levantar, andar ou subir?",
  "Você percebe mudanças, mas não sabe como interpretar?",
  "A rotina dele mudou e você não sabe por onde começar?",
  "Você fica pensando se é apenas idade ou se merece atenção?",
];

const testimonials = [
  { name: "Joyce Santos", image: joyceConversation.url },
  { name: "Sandra", image: sandraConversation.url },
  { name: "Thiago", image: thiagoConversation.url },
  { name: "Rafael Andreoli", image: rafaelConversation.url },
  { name: "Marcely", image: marcelyConversation.url },
];

const faq = [
  { q: "O PetVida Sênior serve para cães e gatos?", a: "Sim. O material foi criado para tutores de cães e gatos idosos e aborda cuidados da rotina dessa fase." },
  { q: "O que eu recebo no Premium?", a: "Você recebe o e-book principal PetVida Sênior, o Checklist Mensal do Pet Idoso, o Guia de Alimentação Sênior e a Rotina de Cuidados e Conforto." },
  { q: "Como recebo o acesso?", a: "Após a compra, o acesso é enviado automaticamente pela Kiwify para o e-mail cadastrado." },
  { q: "É pagamento único?", a: "Sim. Não é uma assinatura. Você paga uma vez pelo acesso ao produto escolhido." },
  { q: "O material substitui uma consulta veterinária?", a: "Não. É um material educativo e de apoio à rotina. Diante de sintomas, alterações importantes ou preocupação com a saúde do pet, procure um médico-veterinário." },
  { q: "Existe garantia?", a: "As condições de garantia aplicáveis à oferta são informadas no checkout da Kiwify antes da finalização da compra." },
];

function LandingPage() {
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="bg-primary-dark px-3 py-2 text-center text-xs font-extrabold uppercase tracking-wide text-cream">
        PetVida Sênior <span className="text-gold">•</span> Acesso imediato
      </div>

      <main>
        <section className="relative overflow-hidden bg-background pb-12 pt-5 sm:pb-16 lg:pb-20 lg:pt-8">
          <div className="wrap">
            <img src={logo} alt="PetVida Sênior" width={576} height={288} className="mx-auto h-12 w-auto lg:mx-0 lg:h-14" />
            <div className="mt-5 grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="min-w-0 lg:order-1">
                <p className="eyebrow text-center text-primary lg:text-left">Para cães e gatos idosos</p>
                <h1 className="mt-2 text-center text-[2.15rem] leading-[1.05] text-primary sm:text-[2.75rem] lg:text-left lg:text-[3.55rem]">Seu pet está envelhecendo. <span className="text-gold">Você sabe o que pode estar deixando passar?</span></h1>
                <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-foreground lg:mx-0 lg:text-left lg:text-lg">Mudanças na alimentação, rotina, higiene, mobilidade e comportamento podem aparecer com a idade. O PetVida Sênior ajuda você a entender melhor essa fase e organizar os cuidados do dia a dia.</p>
                <div className="relative mt-6 lg:hidden">
                  <img src={heroPets} alt="Cão idoso e gato idoso descansando juntos" width={960} height={720} fetchPriority="high" decoding="async" className="aspect-[16/11] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-soft)]" />
                  <img src={mockupMain} alt="Guia digital PetVida Sênior" width={900} height={720} decoding="async" className="absolute -bottom-5 -right-4 w-[36%] max-w-36 drop-shadow-xl sm:-right-5 sm:w-[38%] sm:max-w-44" />
                </div>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:mt-6">
                  {heroBenefits.map((item) => <li key={item} className="flex min-w-0 items-start gap-2.5 text-base font-semibold text-foreground"><CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" /><span>{item}</span></li>)}
                </ul>
                <div className="mt-6 max-w-xl">
                  <CtaButton className="mt-1">Quero cuidar melhor do meu pet</CtaButton>
                  <p className="mt-3 text-center text-sm font-semibold text-muted-foreground lg:text-left">Acesso digital imediato <span className="text-gold">•</span> Pagamento único <span className="text-gold">•</span> Conteúdo educativo</p>
                </div>
              </div>
              <div className="relative hidden lg:order-2 lg:block">
                <img src={heroPets} alt="Cão idoso e gato idoso descansando juntos" width={960} height={720} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
                <img src={mockupMain} alt="Guia digital PetVida Sênior" width={900} height={720} decoding="async" className="absolute -bottom-12 -left-14 w-[44%] max-w-xs drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <TestimonialCarousel />

        <section className="section-pad bg-card">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Talvez você já tenha percebido" title="Seu pet mudou. A pergunta é: você sabe o que observar agora?" text="O envelhecimento acontece aos poucos. E justamente por isso é fácil se acostumar com mudanças que merecem mais atenção na rotina." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-base font-semibold leading-snug text-foreground shadow-sm"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-soft text-primary"><EyeIcon /></span><span>{item}</span></li>)}
            </ul>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gold/30 bg-gold-soft/50 p-5 text-center sm:p-6"><p className="text-lg font-extrabold leading-snug text-primary sm:text-xl">O problema não é amar pouco o seu pet.</p><p className="mt-2 text-base leading-relaxed text-foreground">É não ter uma referência clara para entender melhor as necessidades dessa nova fase.</p></div>
            <CtaButton variant="petrol" className="mx-auto mt-7 max-w-md">Quero entender melhor essa fase</CtaButton>
          </div>
        </section>

        <section className="section-pad bg-background">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Não espere ter todas as respostas" title="Seu pet não está ficando mais jovem. E você pode começar a se preparar agora." text="Você não precisa diagnosticar nada sozinho. Precisa apenas ter informação organizada para observar melhor, cuidar melhor e saber quando uma situação merece a avaliação de um veterinário." />
            <div className="mt-8 grid gap-4 md:grid-cols-3"><InfoCard icon={<PawIcon />} title="Mais clareza" text="Entenda melhor as mudanças comuns da fase sênior e organize suas dúvidas." /><InfoCard icon={<CheckCircleIcon />} title="Mais organização" text="Tenha referências para alimentação, higiene, rotina, conforto e acompanhamento." /><InfoCard icon={<ShieldIcon />} title="Mais segurança" text="Saiba o que observar e quando é importante buscar orientação profissional." /></div>
          </div>
        </section>

        <section id="oferta" className="section-pad scroll-mt-5 bg-primary-dark text-cream">
          <div className="wrap max-w-5xl">
            <SectionHeading eyebrow="A solução" title="Um material simples para ajudar você a cuidar melhor dessa fase" text="Em vez de procurar informações espalhadas, tenha um conteúdo organizado para consultar quando precisar." light />
            <div className="mt-8 rounded-3xl border border-gold/40 bg-card p-5 text-foreground shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]"><div className="mx-auto w-full max-w-xs rounded-2xl bg-background p-4 shadow-[var(--shadow-card)] sm:max-w-sm"><img src={mockupMain} alt="E-book PetVida Sênior" width={900} height={720} loading="lazy" decoding="async" className="mx-auto max-h-80 w-auto max-w-full object-contain sm:max-h-96" /></div><div><p className="eyebrow text-primary">PetVida Sênior Completo</p><h2 className="mt-2 text-3xl leading-tight text-primary sm:text-4xl">Tudo o que você precisa para começar a organizar os cuidados do seu pet idoso.</h2><p className="mt-4 text-base leading-relaxed text-foreground">O Premium reúne o guia principal e três materiais complementares para transformar informação em uma rotina mais prática.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><OfferItem title="E-book PetVida Sênior" text="O guia principal para entender melhor essa fase." /><OfferItem title="Checklist Mensal" text="Uma referência para acompanhar os cuidados." /><OfferItem title="Guia de Alimentação Sênior" text="Orientações para organizar melhor a rotina alimentar." /><OfferItem title="Rotina de Cuidados e Conforto" text="Um apoio prático para o dia a dia do pet idoso." /></div></div></div>
              <div className="mt-8 rounded-2xl bg-primary-dark p-5 text-center text-cream sm:p-7"><p className="text-sm font-extrabold uppercase tracking-widest text-gold">Acesso completo</p><p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">R$ 29,90</p><p className="mt-2 text-sm text-cream/85">Pagamento único • Acesso digital imediato</p><a href={CHECKOUT_URL} onClick={goToCheckout} className="mt-5 inline-flex min-h-[60px] w-full max-w-lg items-center justify-center rounded-xl bg-gold px-6 py-4 text-center text-base font-extrabold uppercase leading-tight text-primary-dark shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:brightness-105">Quero o PetVida Sênior Completo</a><p className="mt-3 text-xs text-cream/75">Você será levado diretamente ao checkout seguro.</p></div>
            </div>
            <div className="mx-auto mt-6 max-w-2xl text-center text-sm text-cream/85"><p>Prefere começar somente pelo guia principal?</p><a href={BASIC_CHECKOUT_URL} onClick={goToBasicCheckout} className="mt-1 inline-block font-extrabold text-gold underline underline-offset-4">PetVida Sênior Essencial — R$ 10,00</a></div>
          </div>
        </section>

        <section className="section-pad bg-card"><div className="wrap max-w-4xl"><SectionHeading eyebrow="Veja o que você recebe" title="Não é só uma capa bonita. São materiais para usar na rotina." text="O acesso Premium reúne quatro materiais digitais diferentes, cada um com uma função prática." /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><MiniProduct image={mockupMain} title="E-book principal" /><MiniProduct image={bonus1} title="Checklist mensal" /><MiniProduct image={bonus2} title="Guia de alimentação" /><MiniProduct image={bonus3} title="Rotina de cuidados" /></div><CtaButton className="mx-auto mt-8 max-w-md">Quero receber o pacote completo</CtaButton></div></section>

        <section className="section-pad bg-card"><div className="wrap max-w-4xl"><SectionHeading eyebrow="Para quem é" title="Se você reconheceu seu pet aqui, o material foi feito para essa fase." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Seu cachorro ou gato já está entrando na fase sênior.","Você percebeu mudanças na rotina e quer entender melhor essa fase.","Você quer organizar melhor alimentação, higiene, conforto e rotina.","Você quer ter um material simples para consultar quando surgir uma dúvida."].map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"><CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" /><p className="text-base font-semibold leading-snug text-foreground">{item}</p></div>)}</div><div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-border bg-background p-5 text-center sm:p-6"><p className="font-extrabold text-primary">Importante:</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">O PetVida Sênior é um material educativo e não substitui consulta, diagnóstico, prescrição ou tratamento veterinário.</p></div></div></section>

        <section className="section-pad bg-background"><div className="wrap max-w-3xl"><SectionHeading eyebrow="Ainda está em dúvida?" title="As respostas mais importantes estão aqui." /><div className="mt-7 space-y-3">{faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-card px-4 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-base font-bold text-primary [&::-webkit-details-marker]:hidden">{item.q}<svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary><div className="pb-4 text-base leading-relaxed text-foreground">{item.a}</div></details>)}</div></div></section>

        <section className="section-pad bg-primary-dark text-center"><div className="wrap max-w-3xl"><ShieldIcon className="mx-auto size-10 text-gold" /><p className="eyebrow mt-4 text-gold">Comece agora</p><h2 className="mt-2 text-3xl leading-tight text-cream sm:text-4xl">Seu pet não está ficando mais jovem. Mas você pode estar mais preparado para cuidar dessa fase.</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/90">Não espere ter todas as respostas para começar a observar melhor. Tenha uma referência organizada para o dia a dia.</p><CtaButton className="mx-auto mt-7 max-w-lg">Quero cuidar melhor do meu pet</CtaButton><p className="mt-3 text-sm font-semibold text-cream/80">Acesso digital imediato <span className="text-gold">•</span> Pagamento único <span className="text-gold">•</span> Checkout seguro</p></div></section>
      </main>

      <footer className="bg-primary-dark pb-8 pt-8 text-cream"><div className="wrap border-t border-cream/20 pt-7"><img src={logo} alt="PetVida Sênior" width={576} height={288} loading="lazy" className="h-9 w-auto brightness-0 invert" /><p className="mt-4 max-w-2xl text-sm">Produto digital de caráter educativo. Não substitui consulta, diagnóstico, prescrição ou tratamento veterinário.</p><nav aria-label="Links legais" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold"><Link to="/politica-de-privacidade" className="underline underline-offset-4">Política de Privacidade</Link><Link to="/termos-de-uso" className="underline underline-offset-4">Termos de Uso</Link><Link to="/contato" className="underline underline-offset-4">Contato</Link></nav><p className="mt-5 text-xs">PetVida Sênior — Todos os direitos reservados.</p></div></footer>
    </div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const previous = () => setCurrent((index) => (index - 1 + total) % total);
  const next = () => setCurrent((index) => (index + 1) % total);

  return (
    <section className="section-pad bg-background" aria-label="Depoimentos reais de tutores">
      <div className="wrap max-w-5xl">
        <SectionHeading eyebrow="Feedback real" title="Quem já conheceu o PetVida Sênior está gostando" text="Depoimentos reais de tutores que tiveram contato com o material." />
        <div className="relative mt-8">
          <div className="mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]">
            <article className="overflow-hidden rounded-2xl border-2 border-primary bg-card p-3 shadow-[var(--shadow-card)] sm:p-4">
              <div className="flex h-[430px] items-center justify-center overflow-hidden rounded-xl bg-muted p-2 sm:h-[500px] lg:h-[560px]">
                <img src={testimonials[current].image} alt={`Depoimento real de ${testimonials[current].name} sobre o PetVida Sênior`} width={720} height={1280} loading="lazy" decoding="async" className="max-h-full w-auto max-w-full object-contain" />
              </div>
              <p className="mt-3 text-center text-sm font-extrabold text-primary">{testimonials[current].name}</p>
              <p className="pb-1 text-center text-xs text-muted-foreground">Feedback real</p>
            </article>
          </div>
          <button type="button" onClick={previous} aria-label="Depoimento anterior" className="absolute left-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-primary bg-card text-primary shadow-md transition hover:bg-primary hover:text-cream sm:left-4">‹</button>
          <button type="button" onClick={next} aria-label="Próximo depoimento" className="absolute right-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-primary bg-card text-primary shadow-md transition hover:bg-primary hover:text-cream sm:right-4">›</button>
        </div>
        <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar depoimento">
          {testimonials.map((testimonial, index) => <button key={testimonial.name} type="button" onClick={() => setCurrent(index)} aria-label={`Ver depoimento de ${testimonial.name}`} aria-current={index === current ? "true" : undefined} className={`size-2.5 rounded-full border border-primary transition ${index === current ? "bg-primary" : "bg-transparent"}`} />)}
        </div>
        <CtaButton variant="petrol" className="mx-auto mt-8 max-w-md">Quero o PetVida Sênior Completo</CtaButton>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <article className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"><div className="grid size-11 place-items-center rounded-full bg-gold-soft text-primary">{icon}</div><h3 className="mt-4 text-xl text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground">{text}</p></article>; }
function OfferItem({ title, text }: { title: string; text: string }) { return <div className="rounded-xl border border-border bg-background p-4"><div className="flex items-start gap-2.5"><CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" /><div><h3 className="text-sm font-extrabold text-primary">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div></div>; }
function MiniProduct({ image, title }: { image: string; title: string }) { return <article className="rounded-xl border border-border bg-background p-3 text-center shadow-sm"><div className="flex h-40 items-center justify-center overflow-hidden rounded-lg bg-muted p-2 sm:h-44"><img src={image} alt={title} width={420} height={560} loading="lazy" decoding="async" className="max-h-full w-auto max-w-full object-contain" /></div><p className="mt-3 text-sm font-bold text-primary">{title}</p></article>; }
function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) { return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`eyebrow ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p>}<h2 className={`${eyebrow ? "mt-2" : ""} text-3xl leading-tight ${light ? "text-cream" : "text-primary"} sm:text-4xl`}>{title}</h2>{text && <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${light ? "text-cream/90" : "text-foreground"}`}>{text}</p>}</div>; }
function SvgIcon({ children, className = "size-5" }: { children: ReactNode; className?: string }) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{children}</svg>; }
function CheckCircleIcon({ className = "size-5" }: { className?: string }) { return <SvgIcon className={className}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.6 2.6L16.5 9" /></SvgIcon>; }
function PawIcon({ className = "size-5" }: { className?: string }) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><ellipse cx="6" cy="9" rx="2.1" ry="2.9"/><ellipse cx="10.6" cy="6" rx="2.1" ry="2.9"/><ellipse cx="15.5" cy="6.4" rx="2.1" ry="2.9"/><ellipse cx="19.4" cy="10" rx="2" ry="2.7"/><path d="M12.6 11.4c3.2 0 5.9 2.4 5.9 5.1 0 2.1-1.7 3.5-4 3.5-1 0-1.6-.2-2.2-.4-.5-.2-.9-.2-1.4 0-.6.2-1.2.4-2.2.4-2.3 0-4-1.4-4-3.5 0-2.7 2.7-5.1 5.9-5.1z"/></svg>; }
function EyeIcon() { return <SvgIcon><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/></SvgIcon>; }
function ShieldIcon({ className = "size-5" }: { className?: string }) { return <SvgIcon className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></SvgIcon>; }
