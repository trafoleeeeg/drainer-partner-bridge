import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import drainerLogo from "@/assets/drainer-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={drainerLogo} 
              alt="DRAINER" 
              className="w-24 h-24 animate-float"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            DRAINER
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Партнерская программа нового поколения
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Уникальные трафик стратегии и высокие конверсии для арбитражников. 
            Получите доступ к инновационным инструментам для максимизации прибыли.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://t.me/trxzetbot', '_blank')}
            >
              Начать работу в боте
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="cyber" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => window.open('https://t.me/+1yQKmI5BI-BiZGVi', '_blank')}
            >
              Новости в Telegram
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Высокие конверсии</h3>
              <p className="text-muted-foreground">Проверенные схемы с конверсией до 15%</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Быстрые выплаты</h3>
              <p className="text-muted-foreground">Ежедневные выплаты без задержек</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Персональный менеджер для каждого партнера</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;