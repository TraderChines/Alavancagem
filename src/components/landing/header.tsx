import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <Button asChild className="hidden sm:inline-flex font-headline">
          <a href="https://pay.kiwify.com.br/N2HRXHr">
            <Flame className="mr-2 h-4 w-4" />
            Pegar Acesso
          </a>
        </Button>
      </div>
    </header>
  );
}
