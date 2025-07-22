import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function NewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Adicione seus novos componentes aqui */}
      </main>
      <Footer />
    </div>
  );
}
