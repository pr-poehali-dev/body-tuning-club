import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white-grape to-lime-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Начни свою трансформацию сегодня! 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Запишись на бесплатную консультацию и получи персональный план
            развития
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-crocus to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-montserrat">
                  Наш адрес
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  г. Мытищи, ул. Колонцова, 2<br />
                  ТЦ "Красный Кит", 2 этаж
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-crocus to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-montserrat">
                  Режим работы
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Пн-Пт: 7:00 - 22:00
                  <br />
                  Сб-Вс: 9:00 - 20:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
              >
                <Icon name="Phone" className="mr-2" />
                +7 (495) 123-45-67
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-4"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>

            <p className="text-gray-500 text-sm">
              Бесплатная консультация • Без навязывания • Конфиденциально
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
