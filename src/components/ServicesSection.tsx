import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Target",
      title: "Персональное питание",
      description:
        "Индивидуальный план питания с учётом ваших особенностей и целей",
      price: "от 3,500₽",
    },
    {
      icon: "Activity",
      title: "Функциональные тренировки",
      description:
        "Эффективные групповые занятия для жиросжигания и укрепления мышц",
      price: "от 2,800₽",
    },
    {
      icon: "Users",
      title: "Клуб поддержки",
      description: "Сообщество единомышленников для мотивации и обмена опытом",
      price: "Бесплатно",
    },
    {
      icon: "Brain",
      title: "Психологическая поддержка",
      description:
        "Работа с установками и привычками для долгосрочного результата",
      price: "от 4,000₽",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Наши услуги 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к снижению веса с поддержкой на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-purple-600 font-montserrat">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
