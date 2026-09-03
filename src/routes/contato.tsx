import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Contato — PetVida Sênior";
const DESCRIPTION =
  "Canais de suporte para dúvidas sobre acesso, pagamento e garantia do guia digital PetVida Sênior.";

export const Route = createFileRoute("/contato")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contato" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Contato">
      <p>
        Dúvidas sobre acesso ao material, pagamento, garantia ou reembolso podem ser enviadas para o
        nosso e-mail de suporte.
      </p>
      <h2>E-mail de suporte</h2>
      <p>
        <a href="mailto:suporte@petvidasenior.com.br" className="underline underline-offset-4">
          suporte@petvidasenior.com.br
        </a>
        <br />
        <span className="text-sm">
          Substitua este endereço pelo e-mail oficial de atendimento antes de publicar.
        </span>
      </p>
      <h2>Prazo de resposta</h2>
      <p>Respondemos em até 2 dias úteis, na ordem de chegada das mensagens.</p>
      <h2>Importante</h2>
      <p>
        Não realizamos atendimento clínico, orientação de diagnóstico, indicação de medicamentos ou
        prescrição de dietas. Para essas situações, procure um médico-veterinário.
      </p>
    </LegalPage>
  );
}
