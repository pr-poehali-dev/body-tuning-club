import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Результат за 30 дней",
      description: "Первые заметные изменения уже через месяц занятий",
    },
    {
      icon: "Heart",
      title: "Без вреда для здоровья",
      description: "Только научно обоснованные методы без экстремальных диет",
    },
    {
      icon: "Users",
      title: "Поддержка сообщества",
      description: "Мотивация и поддержка от единомышленников 24/7",
    },
    {
      icon: "Star",
      title: "Опытные специалисты",
      description: "Команда сертифицированных тренеров и нутрициологов",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Почему выбирают нас? ⭐
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Мы создали уникальную систему, которая действительно работает
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">
                {benefit.title}
              </h3>
              <p className="opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
