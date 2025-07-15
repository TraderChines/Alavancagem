import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IdForm } from '@/components/id-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="container mx-auto max-w-5xl space-y-12 text-center">
        <header className="space-y-4">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            ALAVANCAGEM DE BANCA EM OPÇÕES BINÁRIAS SEM RISCO.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Eu opero por você. Lucro vai 50% pra você e 50% pra mim, e se perder, eu recarrego a conta!
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-start gap-4 text-2xl">
                <span className="text-4xl mt-1">1️⃣</span>
                <div>
                  <h3 className="font-bold">CRIE A CONTA</h3>
                  <p className="text-sm font-normal text-muted-foreground">Na corretora que utilizamos</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="w-full text-lg font-bold">
                <Link href="https://exnova.com/lp/start-trading/?aff=198544&aff_model=revenue&afftrack=" target="_blank" rel="noopener noreferrer">
                  👉 Criar Conta Agora
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-start gap-4 text-2xl">
                <span className="text-4xl mt-1">2️⃣</span>
                <div>
                    <h3 className="font-bold">CONFIRME SUA CONTA</h3>
                    <p className="text-sm font-normal text-muted-foreground">Envie seu ID de usuário</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Seu ID é exibido ao clicar no ícone de perfil, ao lado do saldo.</p>
                <IdForm />
            </CardContent>
          </Card>

          <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-start gap-4 text-2xl">
                <span className="text-4xl mt-1">3️⃣</span>
                <div>
                    <h3 className="font-bold">ACESSO LIBERADO</h3>
                    <p className="text-sm font-normal text-muted-foreground">Faça seu depósito</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Faça o depósito de no mínimo <span className="font-bold text-foreground">R$500</span>.</p>
              <p>Você decide o valor.</p>
              <p>Lembrando que quanto maior a banca, maior a alavancagem.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
