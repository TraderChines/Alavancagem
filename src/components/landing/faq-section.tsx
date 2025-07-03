import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O indicador funciona em qual plataforma?",
    answer: "O indicador foi desenvolvido para qualquer plataforma de opções binarias. Ensinamos como instalar e conectar com sua corretora."
  },
  {
    question: "Preciso ter experiência para usar?",
    answer: "Não! A Estratégia Chinesa foi criada para ser simples. Com nossas aulas, mesmo um completo iniciante consegue instalar e começar a operar."
  },
  {
    question: "O acesso é mensal ou pago uma única vez?",
    answer: "O pagamento é único e o acesso é vitalício. Você paga uma vez e usa para sempre, incluindo atualizações."
  },
  {
    question: "Como vou receber o material?",
    answer: "Assim que seu pagamento for confirmado, você receberá um e-mail com os links para download do indicador e acesso à área de membros com todas as aulas."
  },
  {
    question: "Funciona para qualquer corretora de Opções Binárias?",
    answer: "Sim! Você também poderá usar o indicador no TRADING VIEW para analisar e dar as entradas na sua corretora de preferência (IQ Option, Quotex, Binomo, etc.)."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Ainda tem alguma dúvida?</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
