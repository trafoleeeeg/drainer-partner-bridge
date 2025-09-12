import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and brand */}
          <div>
            <h3 className="text-xl font-bold text-primary">DRAINER</h3>
            <p className="text-sm text-muted-foreground">Партнерская программа</p>
          </div>

          {/* Quick links */}
          <nav className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                О проекте
              </a>
              <a 
                href="#advantages" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Преимущества
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </a>
              <div className="text-muted-foreground">
                Поддержка 24/7
              </div>
            </div>
          </nav>

          {/* Contact buttons */}
          <div className="flex gap-3 justify-end">
            <Button 
              variant="telegram" 
              size="sm"
              onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
            >
              <Send className="w-4 h-4" />
              Бот
            </Button>
            <Button 
              variant="cyber" 
              size="sm"
              onClick={() => window.open('https://t.me/+1yQKmI5BI-BiZGVi', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              Канал
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DRAINER. Все права защищены. | Партнерская программа для профессиональных арбитражников
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;