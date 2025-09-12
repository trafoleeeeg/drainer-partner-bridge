import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  ArrowRight,
  Quote,
  Calendar,
  DollarSign
} from "lucide-react";

const ProofSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Отзывы партнеров
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Что говорят те, кто уже зарабатывает
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные отзывы арбитражников, которые перешли на DRAINER и увеличили доход в разы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <Card className="p-8 bg-gradient-card border-primary/20 relative">
            <Quote className="w-8 h-8 text-primary/50 mb-4" />
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "За первый месяц заработал $12K, хотя в прошлой сети еле набирал $3K. 
              Выплаты реально каждый день, поддержка отвечает мгновенно."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">МА</span>
              </div>
              <div>
                <div className="font-semibold">Максим А.</div>
                <div className="text-sm text-muted-foreground">Арбитражник, 3 года опыта</div>
              </div>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-8 bg-gradient-card border-primary/20 relative">
            <Quote className="w-8 h-8 text-primary/50 mb-4" />
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "Офферы действительно эксклюзивные. Запустил одну связку и она дает стабильно 
              $400-500 в день. В других сетях такого не видел."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">ДС</span>
              </div>
              <div>
                <div className="font-semibold">Дмитрий С.</div>
                <div className="text-sm text-muted-foreground">Team Lead, крипто вертикаль</div>
              </div>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-8 bg-gradient-card border-primary/20 relative md:col-span-2 lg:col-span-1">
            <Quote className="w-8 h-8 text-primary/50 mb-4" />
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "Конверсии на 40% выше чем у конкурентов. Аналитика топ, 
              видно каждый клик в режиме реального времени."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">АК</span>
              </div>
              <div>
                <div className="font-semibold">Анна К.</div>
                <div className="text-sm text-muted-foreground">Media buyer, нутра + беттинг</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent payouts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Последние выплаты (live)</h3>
          <div className="grid gap-4">
            {[
              { user: "Алексей М.", amount: "$2,847", time: "2 минуты назад", offer: "Crypto Lead" },
              { user: "Мария В.", amount: "$1,234", time: "8 минут назад", offer: "Forex" },
              { user: "Сергей К.", amount: "$892", time: "15 минут назад", offer: "Health & Beauty" },
              { user: "Павел Р.", amount: "$3,156", time: "23 минуты назад", offer: "Crypto Lead" },
              { user: "Елена Д.", amount: "$567", time: "31 минута назад", offer: "Dating" },
            ].map((payout, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{payout.user}</div>
                    <div className="text-sm text-muted-foreground">{payout.offer}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">{payout.amount}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {payout.time}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Хотите увидеть свое имя в этом списке?
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
          >
            Присоединиться к успешным
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;