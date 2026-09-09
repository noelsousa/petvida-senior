import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="surface-petrol py-4">
        <div className="wrap">
          <Link to="/" aria-label="Voltar para a página inicial do PetVida Sênior">
            <img
              src={logo}
              alt="PetVida Sênior"
              width={1152}
              height={576}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
        </div>
      </header>

      <main className="wrap max-w-2xl py-10">
        <h1 className="text-3xl text-primary">{title}</h1>
        <div className="mt-6 space-y-4 text-base text-foreground/85 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-primary">
          {children}
        </div>
        <Link
          to="/"
          className="mt-10 inline-flex min-h-[52px] items-center rounded-full bg-primary px-6 font-bold text-primary-foreground"
        >
          Voltar para a página
        </Link>
      </main>

      <footer className="bg-primary-dark py-8 text-sm text-cream/75">
        <div className="wrap">
          <p>PetVida Sênior — Todos os direitos reservados.</p>
          <p className="mt-2 max-w-2xl">
            Produto digital de caráter educativo. O conteúdo não substitui consulta, diagnóstico,
            prescrição ou tratamento realizado por médico-veterinário.
          </p>
        </div>
      </footer>
    </div>
  );
}
