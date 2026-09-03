import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/CtaButton";
import { trackViewContent } from "@/lib/checkout";
import logo from "@/assets/logo.png";
import heroPets from "@/assets/hero-pets.jpg";
import mockupMain from "@/assets/mockup-main.png";
import tutorPet from "@/assets/tutor-pet.jpg";
import bonus1 from "@/assets/bonus-1.png";
import bonus2 from "@/assets/bonus-2.png";
import bonus3 from "@/assets/bonus-3.png";

const TITLE = "PetVida Sênior — Guia de Cuidados para Cães e Gatos Idosos";
const DESCRIPTION =
  "Guia completo + 3 bônus para entender as mudanças da idade, organizar a rotina e oferecer mais conforto ao seu cão ou gato idoso. Pagamento único de R$ 29,90.";

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
          name: "PetVida Sênior — Guia Completo de Cuidados para Cães e Gatos Idosos",
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

/* ---------- dados ---------- */

const heroBenefits = [
  { icon: BowlIcon, text: "Alimentação e higiene na fase sênior" },
  { icon: CalendarIcon, text: "Consultas, medicamentos e rotina organizada" },
  { icon: EyeIcon, text: "Sinais de alerta explicados de maneira simples" },
];

const sinais = [
  "Dificuldade para levantar ou caminhar",
  "Mudança no apetite",
  "Alteração no consumo de água",
  "Mau hálito ou dificuldade para mastigar",
  "Falhas na higiene",
  "Confusão ou mudança de comportamento",
  "Maior sensibilidade ao frio",
  "Isolamento ou irritabilidade",
];

const modulos = [
  {
    title: "Higiene e conforto",
    text: "Banho, escovação, unhas, ouvidos, dentes, caixa de areia e adaptações para animais com mobilidade reduzida.",
  },
  {
    title: "Alimentação sênior",
    text: "Como observar apetite, mastigação, hidratação, peso e mudanças que precisam ser comunicadas ao veterinário.",
  },
  {
    title: "Medicamentos",
    text: "Cuidados com horários, armazenamento, anotações e prevenção de erros, sempre respeitando a prescrição veterinária.",
  },
  {
    title: "Consultas e exames",
    text: "Como se preparar, quais informações registrar e o que levar para aproveitar melhor cada consulta.",
  },
  {
    title: "Sinais de alerta",
    text: "Orientações para reconhecer situações que merecem consulta, acompanhamento ou atendimento mais rápido.",
  },
  {
    title: "Rotina e qualidade de vida",
    text: "Organização do ambiente, sono, atividades leves, estímulos mentais, segurança e acompanhamento diário.",
  },
];

const caes = [
  "Passeios adaptados",
  "Cuidados com articulações",
  "Pisos e escadas",
  "Banho e secagem",
  "Dentes, unhas e ouvidos",
  "Mudanças na disposição",
];

const gatos = [
  "Caixa de areia acessível",
  "Hidratação",
  "Higiene da pelagem",
  "Dificuldade para saltar",
  "Mudanças silenciosas de comportamento",
  "Organização dos recursos da casa",
];

const aprendizados = [
  "Como adaptar a casa para reduzir escorregões e quedas",
  "Como manter cama, comedouro e bebedouro acessíveis",
  "Como acompanhar peso, alimentação e hidratação",
  "Como organizar horários de medicamentos",
  "Como preparar informações para a consulta veterinária",
  "Como cuidar da higiene sem provocar desconforto",
  "Como identificar mudanças na mobilidade e no comportamento",
  "Como registrar sintomas e evolução",
  "Como diferenciar acompanhamento de rotina de situações urgentes",
  "Como proporcionar estímulos seguros e momentos de bem-estar",
];

const bonus = [
  {
    n: "Bônus 1",
    title: "Plano de Cuidados em 7 Dias",
    text: "Um passo a passo para observar o pet, revisar o ambiente, organizar a alimentação, conferir a higiene e preparar uma rotina mais segura.",
    img: bonus1,
    alt: "Capa do bônus Plano de Cuidados em 7 Dias",
  },
  {
    n: "Bônus 2",
    title: "Casa Segura para Pets Idosos",
    text: "Checklist de adaptações para pisos, escadas, camas, comedouros, caixas de areia e espaços de descanso.",
    img: bonus2,
    alt: "Capa do bônus Casa Segura para Pets Idosos",
  },
  {
    n: "Bônus 3",
    title: "Semáforo dos Sinais de Alerta",
    text: "Um material de consulta rápida para entender quais sinais podem ser acompanhados e quais exigem contato mais rápido com o veterinário.",
    img: bonus3,
    alt: "Capa do bônus Semáforo dos Sinais de Alerta",
  },
];

const antes = [
  "Dúvidas sobre o que é normal na velhice",
  "Informações desencontradas",
  "Rotina de medicamentos desorganizada",
  "Dificuldade para perceber mudanças",
  "Insegurança antes das consultas",
];

const depois = [
  "Rotina mais clara",
  "Observações registradas",
  "Ambiente mais seguro",
  "Consultas mais bem preparadas",
  "Decisões orientadas com mais responsabilidade",
];

const oferta = [
  "E-book PetVida Sênior",
  "Plano de Cuidados em 7 Dias",
  "Casa Segura para Pets Idosos",
  "Semáforo dos Sinais de Alerta",
  "Acesso digital imediato",
  "Leitura no celular, tablet ou computador",
];

const pilares = [
  {
    title: "Conteúdo responsável",
    text: "Orientações educativas sem promessas de diagnóstico ou cura.",
  },
  {
    title: "Consulta rápida",
    text: "Material organizado para facilitar a rotina do tutor.",
  },
  {
    title: "Cuidado consciente",
    text: "O guia reforça quando procurar atendimento veterinário.",
  },
];

const faq = [
  {
    q: "Para quais animais o guia é indicado?",
    a: "Para tutores de cães e gatos adultos que estejam entrando na fase sênior ou que já necessitem de cuidados relacionados ao envelhecimento.",
  },
  {
    q: "O material substitui uma consulta veterinária?",
    a: "Não. O PetVida Sênior é um material educativo para auxiliar na observação e na organização da rotina. Diagnósticos, tratamentos, medicamentos e dietas terapêuticas devem ser definidos por um médico-veterinário.",
  },
  {
    q: "O guia indica medicamentos?",
    a: "Não prescreve medicamentos nem doses. Ele orienta como organizar horários, armazenar corretamente e registrar o tratamento prescrito pelo veterinário.",
  },
  {
    q: "Receberei o material fisicamente?",
    a: "Não. O produto é 100% digital e poderá ser acessado após a confirmação do pagamento.",
  },
  {
    q: "Consigo ler pelo celular?",
    a: "Sim. Os materiais podem ser acessados pelo celular, tablet ou computador.",
  },
  {
    q: "Serve tanto para cães quanto para gatos?",
    a: "Sim. O conteúdo aborda cuidados gerais da fase sênior e também apresenta orientações específicas para cães e gatos.",
  },
  {
    q: "Como receberei o acesso?",
    a: "Após a confirmação do pagamento, as informações de acesso serão enviadas pela plataforma Kiwify para o e-mail cadastrado na compra.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. A compra possui garantia de 7 dias, conforme as condições informadas no checkout.",
  },
];

/* ---------- página ---------- */

function LandingPage() {
  const offerRef = useRef<HTMLElement | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    trackViewContent();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const offerRect = offerRef.current?.getBoundingClientRect();
      const offerVisible =
        !!offerRect && offerRect.top < window.innerHeight && offerRect.bottom > 0;
      setShowStickyBar(window.scrollY > 520 && !offerVisible);
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
      {/* barra superior fixa */}
      <div className="surface-petrol fixed inset-x-0 top-0 z-40 py-2 text-center">
        <p className="eyebrow px-3 text-[0.6875rem] text-cream sm:text-xs">
          Guia completo + 3 bônus • Acesso imediato
        </p>
      </div>

      <main className="pt-9">
        {/* HERO */}
        <section className="section-pad relative bg-background pt-8">
          <div className="wrap">
            <img
              src={logo}
              alt="PetVida Sênior"
              width={1152}
              height={576}
              className="mx-auto mb-7 h-11 w-auto sm:h-14"
            />
            <div className="grid items-center gap-9 md:grid-cols-2 md:gap-12">
              <div className="rise order-2 md:order-1">
                <p className="eyebrow text-primary/70">
                  Cuidados para cães e gatos na melhor idade
                </p>
                <h1 className="mt-3 text-[2rem] leading-[1.14] text-primary sm:text-4xl md:text-[2.75rem]">
                  Seu pet envelheceu.{" "}
                  <span className="text-gold">O jeito de cuidar dele também precisa evoluir.</span>
                </h1>
                <p className="mt-4 text-[1.0625rem] text-foreground/80">
                  Entenda as mudanças da idade, organize a rotina e descubra como oferecer mais
                  conforto, segurança e qualidade de vida ao seu cão ou gato idoso.
                </p>

                <ul className="mt-6 space-y-3">
                  {heroBenefits.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Icon />
                      </span>
                      <span className="min-w-0 text-base text-foreground/85">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-soft mt-7 p-5">
                  <p className="eyebrow text-primary/70">Guia completo + 3 bônus</p>
                  <p className="mt-1 font-display text-2xl text-primary">
                    Pagamento único de <span className="whitespace-nowrap">R$ 29,90</span>
                  </p>
                  <CtaButton className="mt-4">Quero cuidar melhor do meu pet</CtaButton>
                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    Acesso imediato • Pagamento seguro • Garantia de 7 dias
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src={heroPets}
                  alt="Cão idoso de pelagem clara e gato idoso descansando juntos sobre uma manta creme"
                  width={1280}
                  height={960}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* IDENTIFICAÇÃO EMOCIONAL */}
        <section className="section-pad bg-white">
          <div className="wrap">
            <SectionTitle>
              Ele pode não conseguir dizer o que está sentindo. Mas o comportamento dele pode
              mostrar.
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-foreground/80">
              Dormir mais, evitar escadas, recusar determinados alimentos, beber mais água ou
              demonstrar dificuldade para se levantar nem sempre são apenas mudanças comuns da
              idade. Observar a rotina ajuda o tutor a perceber quando algo merece mais atenção.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sinais.map((s) => (
                <li
                  key={s}
                  className="card-soft flex items-start gap-3 bg-cream p-4 text-base text-foreground/85"
                >
                  <PawIcon className="mt-1 size-4 shrink-0 text-gold" />
                  <span className="min-w-0">{s}</span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-7 max-w-2xl rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              Um sinal isolado não confirma uma doença. Mudanças persistentes, intensas ou
              repentinas devem ser avaliadas por um médico-veterinário.
            </p>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="section-pad">
          <div className="wrap">
            <SectionTitle>
              Um guia para você parar de depender de informações soltas na internet
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-foreground/80">
              O PetVida Sênior reúne orientações práticas para ajudar você a entender as
              necessidades do animal idoso e criar uma rotina de cuidados mais segura, organizada e
              confortável.
            </p>

            <img
              src={mockupMain}
              alt="Mockup do e-book PetVida Sênior exibido em tablet e capa impressa"
              width={1280}
              height={1024}
              loading="lazy"
              decoding="async"
              className="mx-auto mt-8 w-full max-w-md"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modulos.map((m) => (
                <article key={m.title} className="card-soft p-5">
                  <span className="grid size-10 place-items-center rounded-full bg-primary text-cream">
                    <PawIcon className="size-5" />
                  </span>
                  <h3 className="mt-3 text-lg text-primary uppercase">{m.title}</h3>
                  <p className="mt-2 text-base text-foreground/80">{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CÃES x GATOS */}
        <section className="section-pad bg-white">
          <div className="wrap">
            <SectionTitle>Cães e gatos idosos precisam de cuidados diferentes</SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-foreground/80">
              O guia separa orientações importantes para cada espécie. Cães podem apresentar
              limitações durante passeios, dificuldade com pisos escorregadios e mudanças na
              mobilidade. Gatos podem esconder desconfortos, reduzir a própria higiene e ter
              dificuldade para alcançar caixas de areia, água ou locais elevados.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <SpeciesCard title="Cães idosos" items={caes} />
              <SpeciesCard title="Gatos idosos" items={gatos} />
            </div>
          </div>
        </section>

        {/* APRENDIZADOS */}
        <section className="section-pad">
          <div className="wrap">
            <SectionTitle>
              Você saberá o que observar e como organizar os próximos cuidados
            </SectionTitle>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {aprendizados.map((a) => (
                <li key={a} className="card-soft flex items-start gap-3 p-4">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="min-w-0 text-base text-foreground/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="section-pad bg-white">
          <div className="wrap">
            <SectionTitle>Além do guia principal, você recebe 3 bônus práticos</SectionTitle>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-foreground/80">
              Materiais criados para transformar informação em uma rotina de cuidados mais
              organizada.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {bonus.map((b) => (
                <article key={b.title} className="card-soft flex flex-col p-5">
                  <img
                    src={b.img}
                    alt={b.alt}
                    width={768}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-56 w-auto"
                  />
                  <span className="mt-4 self-start rounded-full bg-gold px-3 py-1 text-[0.6875rem] font-extrabold tracking-widest text-primary-dark uppercase">
                    Incluído gratuitamente
                  </span>
                  <p className="eyebrow mt-3 text-primary/60">{b.n}</p>
                  <h3 className="mt-1 text-xl text-primary">{b.title}</h3>
                  <p className="mt-2 text-base text-foreground/80">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="section-pad">
          <div className="wrap">
            <SectionTitle>
              Mais tranquilidade para você. Mais atenção para quem esteve ao seu lado por tantos
              anos.
            </SectionTitle>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card-soft bg-muted p-5">
                <p className="eyebrow text-destructive">Antes</p>
                <ul className="mt-3 space-y-2.5">
                  {antes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/75">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-destructive" />
                      <span className="min-w-0">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-petrol rounded-2xl p-5 shadow-[var(--shadow-soft)]">
                <p className="eyebrow text-gold">Depois</p>
                <ul className="mt-3 space-y-2.5">
                  {depois.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-cream/90">
                      <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                      <span className="min-w-0">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO EMOCIONAL */}
        <section className="section-pad bg-white">
          <div className="wrap grid items-center gap-8 md:grid-cols-2">
            <img
              src={tutorPet}
              alt="Tutora abraçando com carinho seu cão idoso de focinho grisalho no sofá, com um gato idoso ao lado"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
            <div>
              <h2 className="text-2xl text-primary sm:text-3xl">
                O cuidado que ele precisa agora é uma forma de agradecer por todos os anos de
                companhia.
              </h2>
              <p className="mt-4 text-base text-foreground/80">
                Envelhecer não significa deixar de aproveitar a vida. Com atenção, adaptações e
                acompanhamento profissional, essa fase pode continuar sendo marcada por conforto,
                carinho e bons momentos.
              </p>
              <CtaButton className="mt-6 sm:max-w-sm">Quero acessar o guia</CtaButton>
            </div>
          </div>
        </section>

        {/* OFERTA PRINCIPAL */}
        <section id="oferta" ref={offerRef} className="section-pad surface-petrol">
          <div className="wrap">
            <div className="rounded-3xl border border-gold/40 bg-primary-dark/40 p-5 sm:p-8">
              <h2 className="text-center text-2xl text-cream sm:text-3xl">
                Comece hoje a organizar os cuidados do seu pet idoso
              </h2>

              <div className="mt-7 grid items-center gap-7 md:grid-cols-2">
                <img
                  src={mockupMain}
                  alt="Pacote completo PetVida Sênior com o guia principal e os três bônus"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-full max-w-sm"
                />
                <ul className="space-y-2.5">
                  {oferta.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-cream/90">
                      <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                      <span className="min-w-0">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-cream p-5 text-center">
                <p className="eyebrow text-primary/70">Tudo por apenas</p>
                <p className="font-display text-[2.75rem] leading-tight text-primary">R$ 29,90</p>
                <p className="text-base text-foreground/75">Pagamento único</p>
                <CtaButton className="mt-5">Quero receber o PetVida Sênior</CtaButton>
                <p className="mt-3 text-sm text-muted-foreground">
                  Você será direcionado ao ambiente seguro de pagamento da Kiwify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="section-pad">
          <div className="wrap">
            <div className="card-soft mx-auto max-w-2xl p-6 text-center">
              <span className="mx-auto grid size-20 place-items-center rounded-full border-2 border-gold bg-cream">
                <span className="font-display text-lg leading-none text-primary">
                  7<br />
                  <span className="text-[0.625rem] tracking-widest uppercase">dias</span>
                </span>
              </span>
              <h2 className="mt-4 text-2xl text-primary">Você tem 7 dias para conhecer o material</h2>
              <p className="mt-3 text-base text-foreground/80">
                Após a compra, você poderá acessar o conteúdo e avaliar se ele atende às suas
                expectativas. Se decidir que o material não é para você, poderá solicitar o
                reembolso dentro do prazo de 7 dias, conforme as condições da plataforma.
              </p>
            </div>
          </div>
        </section>

        {/* CREDIBILIDADE */}
        <section className="section-pad bg-white">
          <div className="wrap">
            <SectionTitle>Um material feito com responsabilidade</SectionTitle>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pilares.map((p) => (
                <article key={p.title} className="card-soft bg-cream p-5 text-center">
                  <span className="mx-auto grid size-11 place-items-center rounded-full bg-primary text-cream">
                    <PawIcon className="size-5" />
                  </span>
                  <h3 className="mt-3 text-lg text-primary uppercase">{p.title}</h3>
                  <p className="mt-2 text-base text-foreground/80">{p.text}</p>
                </article>
              ))}
            </div>
            {/* Espaço reservado para depoimentos reais de tutores (nenhum publicado até o momento). */}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad">
          <div className="wrap max-w-3xl">
            <SectionTitle>Perguntas frequentes</SectionTitle>
            <Accordion type="single" collapsible className="mt-6 space-y-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="card-soft border-b px-4"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-pad surface-petrol">
          <div className="wrap max-w-2xl text-center">
            <h2 className="text-2xl text-cream sm:text-3xl">
              Seu pet cuidou de você de muitas formas. Agora é a sua vez de cuidar ainda melhor
              dele.
            </h2>
            <p className="mt-4 text-base text-cream/85">
              Tenha um caminho mais claro para acompanhar a alimentação, a higiene, os medicamentos,
              as consultas e as mudanças da idade.
            </p>
            <p className="mt-6 font-display text-xl text-gold">
              Guia completo + 3 bônus por R$ 29,90
            </p>
            <CtaButton className="mt-5 sm:mx-auto sm:max-w-md">
              Quero cuidar melhor do meu pet
            </CtaButton>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-primary-dark pt-10 pb-28 text-cream/80 md:pb-10">
        <div className="wrap">
          <img
            src={logo}
            alt="PetVida Sênior"
            width={1152}
            height={576}
            loading="lazy"
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm">PetVida Sênior — Todos os direitos reservados.</p>
          <p className="mt-2 max-w-2xl text-sm">
            Produto digital de caráter educativo. O conteúdo não substitui consulta, diagnóstico,
            prescrição ou tratamento realizado por médico-veterinário.
          </p>
          <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/politica-de-privacidade" className="underline underline-offset-4">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="underline underline-offset-4">
              Termos de Uso
            </Link>
            <Link to="/contato" className="underline underline-offset-4">
              Contato
            </Link>
          </nav>
        </div>
      </footer>

      {/* BOTÃO FIXO — SOMENTE MOBILE */}
      <div
        aria-hidden={!showStickyBar}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-primary-dark/95 px-4 py-3 backdrop-blur transition-opacity duration-300 md:hidden ${
          showStickyBar ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <CtaButton size="md" ariaLabel="Acessar o PetVida Sênior por R$ 29,90">
          Acessar por R$ 29,90
        </CtaButton>
      </div>
    </div>
  );
}

/* ---------- auxiliares ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto max-w-3xl text-center text-2xl text-primary sm:text-3xl md:text-[2.125rem]">
      {children}
    </h2>
  );
}

function SpeciesCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-soft bg-cream p-5">
      <h3 className="text-xl text-primary uppercase">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-base text-foreground/85">
            <PawIcon className="mt-1 size-4 shrink-0 text-gold" />
            <span className="min-w-0">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PawIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <ellipse cx="6" cy="9" rx="2.1" ry="2.9" />
      <ellipse cx="10.6" cy="6" rx="2.1" ry="2.9" />
      <ellipse cx="15.5" cy="6.4" rx="2.1" ry="2.9" />
      <ellipse cx="19.4" cy="10" rx="2" ry="2.7" />
      <path d="M12.6 11.4c3.2 0 5.9 2.4 5.9 5.1 0 2.1-1.7 3.5-4 3.5-1 0-1.6-.2-2.2-.4-.5-.2-.9-.2-1.4 0-.6.2-1.2.4-2.2.4-2.3 0-4-1.4-4-3.5 0-2.7 2.7-5.1 5.9-5.1z" />
    </svg>
  );
}

function CheckIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M3 11h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9Z" />
      <path d="M8 7c0-1.7 1.8-3 4-3s4 1.3 4 3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18M8 14h3" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}
