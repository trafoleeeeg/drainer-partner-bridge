import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ArrowRight,
  Wallet,
  Settings,
  HeadphonesIcon,
  TrendingUp
} from "lucide-react";

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Преимущества
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Что вы получите
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Сравните наши условия с другими сетями. Почему тысячи арбитражников 
            переходят именно к нам и больше никуда не уходят?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">
              DRAINER vs Другие сети
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Выплаты: Каждый день в 18:00 МСК</h4>
                  <p className="text-muted-foreground">
                    Пока другие задерживают на неделями, мы платим автоматически каждый день. 
                    Без заявок, подтверждений и "технических работ".
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Ставки: На 30-50% выше рынка</h4>
                  <p className="text-muted-foreground">
                    Прямые договоры с рекламодателями = максимальные ставки для вас. 
                    Сравните сами — наши $120 за лид против $80 у конкурентов.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Офферы: Только проверенные временем</h4>
                  <p className="text-muted-foreground">
                    Никаких "мертвых" офферов. Каждое предложение тестируется нашей командой. 
                    Конверсия гарантирована или меняем оффер.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Поддержка: Личный менеджер 24/7</h4>
                  <p className="text-muted-foreground">
                    Забудьте о тикетах и ожидании ответов. Ваш персональный менеджер 
                    всегда на связи в телеграме. Ответ в течение 5 минут.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <Wallet className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Ставки от $50</h4>
              <p className="text-sm text-muted-foreground">Без скрытых %</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">ROI 300%+</h4>
              <p className="text-sm text-muted-foreground">В среднем у партнеров</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">API интеграция</h4>
              <p className="text-sm text-muted-foreground">Для ваших скриптов</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">VIP поддержка</h4>
              <p className="text-sm text-muted-foreground">Приоритет №1</p>
            </Card>
          </div>
        </div>

        {/* How it works */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">3 простых шага к первым $1000</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Регистрация (2 минуты)</h4>
              <p className="text-muted-foreground">
                Переходите в бот, заполняете простую анкету и получаете персональную ссылку
              </p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Получение материалов</h4>
              <p className="text-muted-foreground">
                Менеджер подберет топ-оффер под ваш траф и отправит готовые креативы
              </p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Первые деньги за 24 часа</h4>
              <p className="text-muted-foreground">
                Льете трафик и получаете первую выплату уже завтра в 18:00 МСК
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
          >
            Начать зарабатывать
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;