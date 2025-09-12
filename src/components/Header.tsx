import { Button } from "@/components/ui/button";
import drainerLogo from "@/assets/drainer-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={drainerLogo} alt="DRAINER" className="w-10 h-10 animate-float" />
          <h1 className="text-2xl font-bold gradient-text">DRAINER</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            О проекте
          </a>
          <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
            Преимущества
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>

        <Button 
          variant="telegram" 
          size="sm"
          onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
        >
          Начать работу
        </Button>
      </div>
    </header>
  );
};

export default Header;