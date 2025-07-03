import { GuaranteeSealIcon } from "@/components/icons/guarantee-seal";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-12 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <GuaranteeSealIcon className="w-48 h-48" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Seu Risco é ZERO!</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Temos total confiança na eficácia da Estratégia Chinesa. Por isso, oferecemos uma <strong>Garantia Incondicional de 30 Dias.</strong>
            </p>
            <p className="text-muted-foreground">
              Use o indicador, assista às aulas e opere. Se por qualquer motivo você não ficar 100% satisfeito, basta nos enviar um único e-mail e devolveremos todo o seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
