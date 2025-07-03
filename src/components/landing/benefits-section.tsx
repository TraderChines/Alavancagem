import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    feature: "Alta Assertividade sem Martingale",
    benefit: "Opere com a mente tranquila, protegendo seu capital e seu emocional. Nosso foco é na qualidade, não na recuperação arriscada.",
  },
  {
    feature: "Operações em M1 (1 Minuto)",
    benefit: "Perfeito para quem busca agilidade e mais oportunidades ao longo do dia. Lucros rápidos e dinâmicos.",
  },
  {
    feature: "Funciona em Mercado Aberto e OTC",
    benefit: "Tenha liberdade para operar quando quiser. Faça dinheiro até mesmo nos finais de semana.",
  },
  {
    feature: "Fácil de Instalar e Usar",
    benefit: "Instalação em poucos cliques. Interface limpa e intuitiva. Você começa a operar em menos de 10 minutos, mesmo que seja um iniciante.",
  },
  {
    feature: "Aulas e Suporte Completo",
    benefit: "Você não recebe apenas o indicador. Você ganha acesso a uma área de membros com todo o passo a passo em vídeo para instalar e usar a estratégia da forma correta.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Por que a Estratégia Chinesa é Diferente de Tudo o que Você Já Viu?</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="grid grid-cols-2 font-bold font-headline p-4 text-left">
                <p>Característica</p>
                <p>Seu Benefício Direto</p>
              </div>
            </CardHeader>
            <CardContent className="divide-y">
              {benefits.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-start">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="font-bold">{item.feature}</p>
                  </div>
                  <p className="text-muted-foreground">{item.benefit}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="font-headline text-lg">
            <a href="https://pay.kiwify.com.br/N2HRXHr">SIM, QUERO OPERAR COM MAIS CONFIANÇA!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
