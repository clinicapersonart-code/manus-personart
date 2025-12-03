import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CLINIC_INFO, SERVICES, CONVENIOS } from "@/const";
import { ArrowRight, Heart, Target, Eye, Users, Baby, User } from "lucide-react";

export default function Home() {
  const iconMap: Record<string, any> = {
    user: User,
    baby: Baby,
    users: Users,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {CLINIC_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {CLINIC_INFO.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/agendar">
                  <Button size="lg" className="w-full sm:w-auto">
                    Agende sua Consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Conheça-nos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border-4 border-primary/30 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-20 w-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós - Missão, Visão, Valores */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa missão, visão e valores que guiam nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CLINIC_INFO.mission}</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CLINIC_INFO.vision}</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CLINIC_INFO.values}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos atendimento personalizado e humanizado para todas as idades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || User;
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicos">
              <Button size="lg" variant="outline">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Convênios Atendidos
            </h2>
            <p className="text-lg text-muted-foreground">
              Trabalhamos com diversos convênios e também atendemos particular
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {CONVENIOS.map((convenio) => (
              <div
                key={convenio.name}
                className="w-full h-24 flex items-center justify-center p-4 border rounded-lg hover:border-primary/50 transition-colors bg-card"
              >
                <span className="text-sm font-medium text-center text-muted-foreground">
                  {convenio.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Cuidar da Sua Saúde Mental?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende sua consulta hoje mesmo e dê o primeiro passo em direção ao bem-estar emocional
          </p>
          <Link href="/agendar">
            <Button size="lg" variant="secondary" className="text-primary">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
