import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 text-center text-white bg-foreground">
      <div className="absolute inset-0">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/project-1751519876458.appspot.com/o/studio%2F-Nyz9A9B9_57L2pBH_Fz%2F-O0S1vM-G5X_y66z_V0L-1723147814890-hero-background.png?alt=media&token=c1387693-02f8-4721-a58f-2f9540b6e088"
          alt="Gráfico de trading"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="trading graph"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline mb-4 leading-tight">
          ALCANCE A CONSISTÊNCIA QUE VOCÊ SEMPRE BUSCOU NO TRADING
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-6">
          Descubra a Estratégia Chinesa: O indicador que revela o momento exato para entrar e vencer em Opções Binárias no M1, sem usar Martingale.
        </p>
        <p className="max-w-3xl mx-auto mb-8 text-primary-foreground/70">
          O segredo dos traders consistentes não é a sorte. É ter uma ferramenta precisa que elimina a dúvida e aponta a direção do lucro. A Estratégia Chinesa faz exatamente isso por você.
        </p>
        <Button asChild size="lg" className="font-headline text-base sm:text-lg animate-pulse w-full sm:w-auto">
          <a href="https://pay.kiwify.com.br/N2HRXHr">
            👉 QUERO ACESSO IMEDIATO À ESTRATEGIA CHINESA
          </a>
        </Button>
        <p className="mt-4 text-sm text-primary-foreground/60">
          Acesso vitalício. Vagas limitadas.
        </p>
      </div>
    </section>
  );
}
