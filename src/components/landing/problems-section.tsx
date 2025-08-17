import { AlertTriangle } from 'lucide-react';

const problems = [
  "Você passa horas analisando o gráfico, mas na hora de clicar, sente medo e insegurança?",
  "Já perdeu dinheiro seguindo sinais confusos ou estratégias que só funcionam na teoria?",
  "Cansou de usar Martingale e ver seu lucro (e sua banca) desaparecerem em uma única operação ruim?",
  "Sente que falta uma confirmação final para saber se sua análise de Suporte e Resistência está correta?",
  "Você simplesmente não tem tempo para estudar o mercado o dia todo, mas ainda quer ter resultados?",
];

export function ProblemsSection() {
  return (
    <section id="problems" className="py-12 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-headline mb-10">Você se identifica com algum destes problemas?</h2>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start p-4 bg-background rounded-lg shadow-sm">
                <AlertTriangle className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-lg text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg sm:text-xl mt-10">
            Se você disse <span className="font-bold text-primary">"sim"</span> para qualquer uma dessas perguntas, você não está sozinho. E a boa notícia é que existe uma solução desenhada para você.
          </p>
        </div>
      </div>
    </section>
  );
}
