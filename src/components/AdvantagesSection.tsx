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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Что вы получите
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный пакет инструментов и поддержки для успешного арбитража
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Все необходимое для старта
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Готовые связки и креативы</h4>
                  <p className="text-muted-foreground">
                    Проверенные офферы с высокой конверсией и готовые рекламные материалы
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Персональный менеджер</h4>
                  <p className="text-muted-foreground">
                    Индивидуальное сопровождение от опытного специалиста по арбитражу
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Эксклюзивные офферы</h4>
                  <p className="text-muted-foreground">
                    Доступ к закрытым предложениям с повышенными ставками
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Обучающие материалы</h4>
                  <p className="text-muted-foreground">
                    Видеокурсы, гайды и кейсы от топовых арбитражников
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <Wallet className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Высокие ставки</h4>
              <p className="text-sm text-muted-foreground">До $200 за лид</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Растущий рынок</h4>
              <p className="text-sm text-muted-foreground">+50% ежемесячно</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Автоматизация</h4>
              <p className="text-sm text-muted-foreground">Smart-оптимизация</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center">
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Поддержка</h4>
              <p className="text-sm text-muted-foreground">Ответ за 5 минут</p>
            </Card>
          </div>
        </div>

        {/* How it works */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Как это работает</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Регистрация в боте</h4>
              <p className="text-muted-foreground">
                Переходите в телеграм бот и получаете доступ к партнерке
              </p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Выбор оффера</h4>
              <p className="text-muted-foreground">
                Выбираете подходящий оффер и получаете рекламные материалы
              </p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Получение прибыли</h4>
              <p className="text-muted-foreground">
                Льете трафик и получаете ежедневные выплаты
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