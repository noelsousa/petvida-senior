import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Política de Privacidade — PetVida Sênior";
const DESCRIPTION =
  "Como o PetVida Sênior coleta, utiliza e protege os dados dos visitantes e compradores do guia digital.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        Esta página descreve como tratamos as informações dos visitantes desta landing page e dos
        compradores do produto digital PetVida Sênior.
      </p>
      <h2>Dados coletados</h2>
      <p>
        Nesta página não solicitamos cadastro. Utilizamos ferramentas de medição de audiência, como
        o Meta Pixel, que registram dados de navegação (páginas visitadas, dispositivo, origem do
        acesso e parâmetros de campanha) para mensurar e otimizar anúncios.
      </p>
      <h2>Compra</h2>
      <p>
        A compra é processada pela plataforma Kiwify, responsável por coletar nome, e-mail e dados
        de pagamento, conforme a política de privacidade da própria plataforma. Não armazenamos
        dados de cartão de crédito.
      </p>
      <h2>Uso das informações</h2>
      <p>
        As informações são utilizadas para entregar o produto adquirido, prestar suporte e medir o
        desempenho das campanhas publicitárias. Não vendemos dados pessoais a terceiros.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode solicitar acesso, correção ou exclusão dos seus dados, além de esclarecimentos
        sobre o tratamento realizado, pelo canal indicado na página de contato.
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies e tecnologias semelhantes são usados para medição de anúncios. Você pode
        desativá-los nas configurações do seu navegador; a página continuará funcionando.
      </p>
    </LegalPage>
  );
}
