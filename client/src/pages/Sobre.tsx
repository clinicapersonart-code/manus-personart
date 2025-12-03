import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CLINIC_INFO } from "@/const";
import { Heart, Target, Eye, Users } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a {CLINIC_INFO.name}
            </h1>
            <p className="text-xl text-muted-foreground">
              {CLINIC_INFO.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CLINIC_INFO.values}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nossa História */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nossa História
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Clínica Personart nasceu do desejo de oferecer um atendimento psicológico 
                diferenciado, que coloca o indivíduo no centro do cuidado. Nosso nome reflete 
                essa filosofia: "Person" (pessoa) + "Art" (arte), representando a arte de cuidar 
                de cada pessoa de forma única e personalizada.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Desde o início, nossa missão tem sido promover a saúde mental e o bem-estar 
                emocional através de uma abordagem humanizada e baseada em evidências científicas. 
                Acreditamos que cada pessoa tem uma jornada única, e nosso papel é acompanhá-la 
                nesse processo de autoconhecimento e transformação.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Nossa equipe é formada por profissionais qualificados e comprometidos com a 
                excelência no atendimento. Trabalhamos com a Terapia Cognitivo-Comportamental 
                (TCC) e outras abordagens contemporâneas, sempre respeitando a individualidade 
                de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no cuidado com a sua saúde mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Atendimento Humanizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cada pessoa é única e merece um cuidado personalizado e acolhedor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Baseado em Evidências</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos técnicas e abordagens comprovadas cientificamente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Equipe Qualificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Profissionais especializados e em constante atualização.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Flexibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Atendimento presencial e online para sua comodidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
