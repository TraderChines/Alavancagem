import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UrgencyTimer } from "@/components/landing/urgency-timer";
import { Check } from "lucide-react";

const includedFeatures = [
  "Indicador Estratégia Chinesa (Acesso Vitalício)",
  "Videoaulas de Instalação e Configuração (Passo a Passo)",
  "Módulo de Estratégia e Gerenciamento de Risco",
  "Acesso a futuras atualizações sem custo adicional",
  "Suporte Exclusivo para tirar dúvidas",
];

export function OfferSection() {
  return (
    <section id="offer" className="py-12 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">O que Você Vai Receber com o Acesso Imediato:</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-5xl mx-auto items-center">
          <Card className="border-primary border-2">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Pacote Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center p-8 bg-background rounded-lg shadow-lg">
            <p className="text-muted-foreground">Tudo isso poderia facilmente ser vendido por R$ 497. Mas nosso objetivo é ajudar o maior número de traders a alcançar a consistência.</p>
            <p className="mt-4 text-lg">Por isso, hoje, você terá acesso a tudo isso por um preço especial de lançamento:</p>
            
            <p className="my-4 text-muted-foreground line-through text-2xl">De R$ 497,00</p>
            <p className="text-lg">por apenas:</p>
            <p className="text-5xl font-bold font-headline text-primary my-2">12x de R$ 19,78</p>
            <p className="text-xl">ou R$ 197,00 à vista</p>
            <p className="text-sm text-muted-foreground mt-4 mb-6">(Menos de R$ 0,66 por dia para ter uma estratégia lucrativa nas suas mãos!)</p>

            <Button asChild size="lg" className="w-full font-headline text-xl animate-pulse shadow-lg">
              <a href="#">
                🔥 QUERO GARANTIR MEU ACESSO COM DESCONTO! 🔥
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Pagamento seguro. Acesso liberado imediatamente no seu e-mail.</p>
            <div className="mt-6">
              <p className="text-sm text-primary font-bold">A OFERTA TERMINA EM:</p>
              <UrgencyTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
