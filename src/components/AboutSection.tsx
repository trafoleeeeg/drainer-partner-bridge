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
            Знакомы с этими проблемами? Долгие выплаты, низкие ставки, отказы без объяснений? 
            Мы решили все боли арбитражников и создали идеальную экосистему для заработка.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Target className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Команда из арбитража</h3>
            <p className="text-muted-foreground leading-relaxed">
              Нас создали практикующие арбитражники с оборотом $500K+ в месяц. 
              Мы знаем все подводные камни и создали продукт для себя.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <DollarSign className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Реальная статистика</h3>
            <p className="text-muted-foreground leading-relaxed">
              Показываем live-статистику по всем партнерам. Никакой подтасовки цифр — 
              только честные данные по кликам, конверсиям и выплатам.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <BarChart3 className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Эксклюзивные источники</h3>
            <p className="text-muted-foreground leading-relaxed">
              Прямые договоры с рекламодателями без посредников. Получаете максимальную маржу 
              и первоочередной доступ к горячим офферам.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Users className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Закрытое комьюнити</h3>
            <p className="text-muted-foreground leading-relaxed">
              Доступ к приватному чату с топовыми арбитражниками. Обмен кейсами, 
              связками и инсайдерской информацией о новых вертикалях.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Globe className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Тестируем первыми</h3>
            <p className="text-muted-foreground leading-relaxed">
              Получайте новые офферы на 2-3 недели раньше других сетей. 
              Время = деньги в арбитраже. Успевайте заработать до насыщения.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <Clock className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-4">Автовыплаты</h3>
            <p className="text-muted-foreground leading-relaxed">
              Настройте автоматические выплаты на карту или криптокошелек. 
              Деньги приходят без заявок и подтверждений каждый день в 18:00 МСК.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">$847K</div>
            <div className="text-muted-foreground">Выплачено за месяц</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">18.3%</div>
            <div className="text-muted-foreground">Средний CR по сети</div>
          </div>
          <div>
          <div className="text-4xl font-bold text-primary mb-2">1,247</div>
            <div className="text-muted-foreground">Активных вебов</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">$84</div>
            <div className="text-muted-foreground">Средний чек с лида</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;