import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-12 lg:py-24 bg-card">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6">Você tem duas opções agora:</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="p-6 border rounded-lg">
            <h3 className="font-headline font-bold text-xl mb-2">1. Continuar como está</h3>
            <p className="text-muted-foreground">Continuar fazendo o mesmo de sempre: ficar frustrado com análises confusas, estratégias que não funcionam e arriscar sua banca com Martingale.</p>
          </div>
          <div className="p-6 border rounded-lg bg-primary/5">
            <h3 className="font-headline font-bold text-xl mb-2 text-primary">2. Tomar a decisão inteligente</h3>
            <p className="text-muted-foreground">Juntar-se ao time que opera com uma ferramenta precisa, que aponta o momento exato da entrada e protege seu capital.</p>
          </div>
        </div>
        <p className="text-xl font-headline mb-8">A escolha é sua.</p>
        <Button asChild size="lg" className="font-headline text-xl animate-pulse">
          <a href="#offer">SIM, EU QUERO A ESTRATÉGIA CHINESA AGORA!</a>
        </Button>
      </div>
    </section>
  );
}
