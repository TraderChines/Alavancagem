import { highlightTestimonials } from '@/ai/flows/testimonial-highlighter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const rawTestimonials = [
  {
    name: "Mariana L.",
    location: "Belo Horizonte, MG",
    avatar: "https://placehold.co/100x100.png",
    text: "Eu era a rainha do \"quase\". Sempre analisava certo, mas entrava na hora errada. A Estratégia Chinesa mudou meu jogo! O sinal de seta é a confiança que eu precisava. Já recuperei o investimento no primeiro dia!"
  },
  {
    name: "Ricardo P.",
    location: "Salvador, BA",
    avatar: "https://placehold.co/100x100.png",
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
          <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Veja o que Nossos Primeiros Alunos Estão Dizendo...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col p-6 shadow-lg">
              <CardContent className="p-0 flex-grow flex flex-col">
                <blockquote className="flex-grow">
                  <p className="text-muted-foreground text-lg">"{testimonial.highlightedText}"</p>
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
