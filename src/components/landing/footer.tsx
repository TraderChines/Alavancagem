export function Footer() {
  return (
    <footer className="bg-foreground text-background/70 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-4">
          <strong>Aviso Legal:</strong> Todas as estratégias e investimentos envolvem risco de perda. Nenhuma informação contida neste produto deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa. O trading de opções binárias envolve um risco significativo e pode não ser adequado para todos os investidores.
        </p>
        <p>&copy; {new Date().getFullYear()} Estrategia Chinesa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
