import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat leading-tight">
            Тюнинг Тела
            <span className="block text-yellow-300">в Мытищах</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Клуб единомышленников для эффективного снижения веса. Трансформируй
            своё тело с поддержкой команды профессионалов! 💪
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-800 text-lg px-8 py-4 font-semibold"
            >
              <Icon name="Zap" className="mr-2" />
              Начать трансформацию
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4"
            >
              <Icon name="Phone" className="mr-2" />
              Бесплатная консультация
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>500+ довольных клиентов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} />
              <span>95% достигают результата</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
