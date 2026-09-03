import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Termos de Uso — PetVida Sênior";
const DESCRIPTION =
  "Condições de uso do guia digital PetVida Sênior, incluindo natureza educativa do conteúdo, entrega e garantia de 7 dias.";

export const Route = createFileRoute("/termos-de-uso")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Termos de Uso">
      <h2>Natureza do produto</h2>
      <p>
        O PetVida Sênior é um produto digital de caráter educativo, composto por um guia principal e
        três materiais bônus. O conteúdo não substitui consulta, diagnóstico, prescrição ou
        tratamento realizado por médico-veterinário.
      </p>
      <h2>Entrega e acesso</h2>
      <p>
        Após a confirmação do pagamento, as informações de acesso são enviadas pela plataforma
        Kiwify para o e-mail cadastrado na compra. Não há envio de material físico. Os arquivos
        podem ser acessados em celular, tablet ou computador.
      </p>
      <h2>Preço e pagamento</h2>
      <p>
        O valor é de R$ 29,90 em pagamento único, processado no ambiente seguro da Kiwify.
      </p>
      <h2>Garantia</h2>
      <p>
        A compra possui garantia de 7 dias. Dentro desse prazo, é possível solicitar reembolso
        conforme as condições informadas no checkout da plataforma.
      </p>
      <h2>Uso do conteúdo</h2>
      <p>
        O material é licenciado para uso pessoal do comprador. É proibida a revenda, distribuição,
        cópia ou reprodução total ou parcial sem autorização.
      </p>
      <h2>Responsabilidade</h2>
      <p>
        As decisões sobre saúde, alimentação, medicamentos e tratamentos do animal devem ser tomadas
        com acompanhamento de um médico-veterinário. O material auxilia na observação e na
        organização da rotina de cuidados.
      </p>
    </LegalPage>
  );
}
