import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Globe, 
  DollarSign,
  BarChart3,
  Clock
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            О проекте
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Почему DRAINER?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создали экосистему, которая позволяет арбитражникам получать максимальную прибыль 
            с минимальными рисками и затратами времени.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Target className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Таргетированный трафик</h3>
            <p className="text-muted-foreground leading-relaxed">
              Работаем только с качественным трафиком из социальных сетей и поисковых систем. 
              Высокая вовлеченность аудитории гарантирована.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <DollarSign className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Прозрачные выплаты</h3>
            <p className="text-muted-foreground leading-relaxed">
              Детальная аналитика по каждому переходу. Выплаты каждый день без минимального порога. 
              Полная прозрачность расчетов.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <BarChart3 className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Умная аналитика</h3>
            <p className="text-muted-foreground leading-relaxed">
              Продвинутая система отслеживания конверсий, A/B тестирование креативов и 
              автоматическая оптимизация кампаний.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Users className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Команда профи</h3>
            <p className="text-muted-foreground leading-relaxed">
              Наша команда состоит из экспертов по арбитражу с опытом работы более 5 лет. 
              Мы знаем, как делать деньги.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Globe className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Глобальный охват</h3>
            <p className="text-muted-foreground leading-relaxed">
              Работаем со всеми основными гео: РФ, СНГ, Европа, США. 
              Множественные источники трафика и вертикали.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Clock className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Быстрый старт</h3>
            <p className="text-muted-foreground leading-relaxed">
              Получите доступ к рабочим связкам уже сегодня. 
              Подробные гайды и готовые креативы в подарок.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15%</div>
            <div className="text-muted-foreground">Средняя конверсия</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24ч</div>
            <div className="text-muted-foreground">Время выплат</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Активных партнеров</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Обработано кликов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;