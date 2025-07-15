
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IdForm } from '@/components/id-form';

export default function Home() {
  const [step, setStep] = useState(1);

  const handleIdSubmitted = () => {
    setStep(3);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="container mx-auto max-w-5xl space-y-12 text-center">
        <header className="space-y-4">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            SESSÃO CHINESA AO VIVO <br /> A ESTRATÉGIA QUE MOVIMENTA O MERCADO
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Participe de uma sessão privada onde traders operam juntos usando uma estratégia tão precisa que chega a manipular o gráfico a nosso favor.<br />Não opere sozinho. Lucre comigo em tempo real.
          </p>
        </header>

        <section className="flex justify-center">
          {step === 1 && (
            <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-start gap-4 text-2xl">
                  <span className="text-4xl mt-1">1️⃣</span>
                  <div>
                    <h3 className="font-bold">CRIE A CONTA</h3>
                    <p className="text-sm font-normal text-muted-foreground">Na corretora que utilizamos</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full text-lg font-bold">
                  <Link href="https://exnova.com/lp/start-trading/?aff=198544&aff_model=revenue&afftrack=" target="_blank" rel="noopener noreferrer">
                    👉 Criar Conta Agora
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg font-bold" onClick={() => setStep(2)}>
                    Já criei, próximo passo
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 w-full max-w-md">
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
                  <IdForm onIdSubmitted={handleIdSubmitted} />
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-start gap-4 text-2xl">
                  <span className="text-4xl mt-1">3️⃣</span>
                  <div>
                      <h3 className="font-bold">ACESSO LIBERADO</h3>
                      <p className="text-sm font-normal text-muted-foreground">Faça seu depósito</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Faça o depósito de no mínimo <span className="font-bold text-foreground">R$500</span>.</p>
                  <p>Você decide o valor.</p>
                  <p>Lembrando que quanto maior a banca, maior a alavancagem.</p>
                </div>
                 <Button asChild size="lg" className="w-full text-lg font-bold">
                  <Link href="https://t.me/TraderChinesVIP" target="_blank" rel="noopener noreferrer">
                    TELEGRAM
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </main>
  );
}
