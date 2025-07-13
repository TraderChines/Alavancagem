import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Goal, Waves } from "lucide-react";

const features = [
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: "Marcações Automáticas de Suporte e Resistência",
    description: "Chega de traçar linhas erradas. O indicador faz todo o trabalho pesado, identificando as zonas de maior probabilidade de reversão com precisão cirúrgica."
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: "Sinal de Alerta (Pré-Sinal)",
    description: "Nunca mais perca uma oportunidade. Um alerta sonoro e visual te avisa ANTES da entrada se formar, para que você tenha tempo de se preparar sem pressa."
  },
  {
    icon: <Goal className="h-8 w-8 text-primary" />,
    title: "Sinal de Entrada Exato (Seta)",
    description: "O fim da hesitação! Uma seta clara e inequívoca (Verde para CALL, Vermelha para PUT) mostra o MOMENTO EXATO para você abrir a negociação. É só ver o sinal e clicar!"
  }
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Apresentamos o Indicador ESTRATEGIA CHINESA</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Uma ferramenta inteligente que combina a análise clássica de Suporte e Resistência com um algoritmo exclusivo de confirmação. Ele foi projetado para ser seu maior aliado no gráfico de M1, funcionando com precisão tanto no mercado aberto quanto no OTC.
          </p>
        </div>

        <div className="max-w-3xl mx-auto my-12">
          <Card className="overflow-hidden shadow-lg">
            <div className="aspect-video bg-foreground relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/M6cTyPbDShw"
                title="Apresentação Indicador Estratégia Chinesa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>
        
        <div className="text-center mb-12">
           <h3 className="text-2xl lg:text-3xl font-bold font-headline">Veja como a Estratégia Chinesa Simplifica seu Trading:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
