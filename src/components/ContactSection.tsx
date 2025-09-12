import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  MessageCircle, 
  Users,
  Clock,
  Star
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Контакты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ⏰ Внимание! Мы набираем только 50 новых партнеров в месяц для качественного сопровождения. 
            Осталось всего 12 мест в январе. Не упустите свой шанс!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Telegram Bot Card */}
          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Send className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Telegram Бот</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Начните работу с партнерской программой через наш умный бот. 
              Получите доступ к офферам, статистике и выплатам.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm">Мгновенная регистрация</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm">Доступ 24/7</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
            >
              Открыть бота
              <Send className="w-4 h-4" />
            </Button>
          </Card>

          {/* Telegram Channel Card */}
          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Telegram Канал</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Следите за новостями, обновлениями и эксклюзивными предложениями 
              в нашем официальном канале.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">Эксклюзивные новости</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm">Секретные офферы</span>
              </div>
            </div>

            <Button 
              variant="telegram" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://t.me/+1yQKmI5BI-BiZGVi', '_blank')}
            >
              Подписаться
              <MessageCircle className="w-4 h-4" />
            </Button>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-card border border-primary/20 rounded-2xl p-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            🔥 Ограниченное предложение
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            <strong className="text-foreground">Первые 10 человек сегодня</strong> получают стартовый бонус $100 
            на рекламный бюджет + доступ к VIP-офферам с повышенными ставками.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Предложение действует только до 23:59 сегодня. Завтра условия будут стандартными.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
            >
              Начать прямо сейчас
            </Button>
            <Button 
              variant="cyber" 
              size="xl"
              onClick={() => window.open('https://t.me/+1yQKmI5BI-BiZGVi', '_blank')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;