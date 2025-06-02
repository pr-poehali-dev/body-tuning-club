import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      result: "-15 кг за 3 месяца",
      text: "Невероятно! Я наконец-то нашла то, что работает. Поддержка команды и единомышленников помогла пройти весь путь до конца.",
      avatar: "АП",
    },
    {
      name: "Михаил Сидоров",
      result: "-22 кг за 5 месяцев",
      text: "Думал, что в 45 лет уже поздно что-то менять. Ребята из Тюнинг Тела доказали обратное! Чувствую себя на 20 лет моложе.",
      avatar: "МС",
    },
    {
      name: "Елена Иванова",
      result: "-18 кг за 4 месяца",
      text: "Самое главное — это не только снижение веса, но и изменение образа жизни. Теперь я знаю, как поддерживать результат!",
      avatar: "ЕИ",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Истории успеха 🎉
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты наших участников говорят сами за себя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-montserrat">
                      {testimonial.name}
                    </h4>
                    <p className="text-green-600 font-medium">
                      {testimonial.result}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
