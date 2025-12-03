import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/const";
import { User, Baby, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Servicos() {
  const iconMap: Record<string, any> = {
    user: User,
    baby: Baby,
    users: Users,
  };

  const serviceDetails = [
    {
      ...SERVICES[0],
      benefits: [
        "Atendimento personalizado e individual",
        "Modalidade presencial ou online",
        "Flexibilidade de horários",
        "Sigilo e confidencialidade garantidos",
        "Abordagem baseada em evidências científicas"
      ]
    },
    {
      ...SERVICES[1],
      benefits: [
        "Técnicas lúdicas adaptadas à idade",
        "Ambiente acolhedor e seguro",
        "Acompanhamento do desenvolvimento emocional",
        "Orientação aos pais e responsáveis",
        "Intervenções baseadas em ABA e TCC"
      ]
    },
    {
      ...SERVICES[2],
      benefits: [
        "Compartilhamento de experiências",
        "Apoio mútuo entre participantes",
        "Desenvolvimento de habilidades sociais",
        "Estratégias práticas para o dia a dia",
        "Ambiente seguro e sem julgamentos"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground">
              Oferecemos atendimento psicológico especializado e humanizado para todas as idades
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {serviceDetails.map((service, index) => {
              const Icon = iconMap[service.icon] || User;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "md:order-1" : "md:order-2"}>
                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? "md:order-2" : "md:order-1"}>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle>Como Funciona?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">1. Primeira Consulta</h4>
                          <p className="text-sm text-muted-foreground">
                            Avaliação inicial para compreender suas necessidades e objetivos.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">2. Plano de Tratamento</h4>
                          <p className="text-sm text-muted-foreground">
                            Desenvolvimento de estratégias personalizadas para seu caso.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">3. Acompanhamento</h4>
                          <p className="text-sm text-muted-foreground">
                            Sessões regulares com avaliação contínua do progresso.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende sua primeira consulta e dê o primeiro passo em direção ao bem-estar emocional
          </p>
          <Link href="/agendar">
            <Button size="lg">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
