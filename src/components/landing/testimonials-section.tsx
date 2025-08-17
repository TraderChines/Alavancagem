import { highlightTestimonials } from '@/ai/flows/testimonial-highlighter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const rawTestimonials = [
  {
    name: "Mariana L.",
    location: "Balneário Camboriú, SC",
    avatar: "https://firebasestorage.googleapis.com/v0/b/project-1751519876458.appspot.com/o/studio%2F-Nyz9A9B9_57L2pBH_Fz%2F-O0Qz4h9X73CqN8YpT-M-1723145452281-foto_da_Mariana_L.png?alt=media&token=48f76e73-b3c1-40be-a006-a979140ca1d6",
    text: "Eu era a rainha do \"quase\". Sempre analisava certo, mas entrava na hora errada. A Estratégia Chinesa mudou meu jogo! O sinal de seta é a confiança que eu precisava. Já recuperei o investimento no primeiro dia!"
  },
  {
    name: "Ricardo P.",
    location: "São Paulo, SP",
    avatar: "https://firebasestorage.googleapis.com/v0/b/project-1751519876458.appspot.com/o/studio%2F-Nyz9A9B9_57L2pBH_Fz%2F-O0R-z4oG8x_4V6J8zCj-1723145942485-Ricardo_P.png?alt=media&token=42d131f4-a63e-4d51-a90e-b7d8b5c98d6b",
    text: "O melhor é que funciona mesmo em OTC. Final de semana agora é minha fonte de renda extra. E o principal: SEM MARTINGALE! Minha banca agradece. Recomendo demais."
  }
];

export async function TestimonialsSection() {
  const { highlightedTestimonials } = await highlightTestimonials({
    testimonials: rawTestimonials.map(t => t.text)
  }).catch(() => ({ highlightedTestimonials: rawTestimonials.map(t => t.text) }));

  const testimonials = rawTestimonials.map((testimonial, index) => ({
    ...testimonial,
    highlightedText: highlightedTestimonials[index] || testimonial.text,
  }));

  return (
    <section id="testimonials" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline mb-4">Veja o que os Traders Estão Dizendo...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col p-6 shadow-lg">
              <CardContent className="p-0 flex-grow flex flex-col">
                <blockquote className="flex-grow">
                  <p className="text-muted-foreground italic text-base sm:text-lg">"{testimonial.highlightedText}"</p>
                </blockquote>
                <footer className="mt-6">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold font-headline">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
