import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CLINIC_INFO } from "@/const";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { trackContactConversion } from "@/components/GoogleAdsTracking";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const sendMessageMutation = trpc.contact.sendMessage.useMutation({
    onSuccess: () => {
      trackContactConversion(); // Rastreia conversão do Google Ads
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: unknown) => {
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
      console.error(error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessageMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar. Entre em contato conosco através do formulário ou pelos nossos canais de atendimento
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sobre o que você gostaria de falar?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={sendMessageMutation.isPending}
                    >
                      {sendMessageMutation.isPending ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        {CLINIC_INFO.address.street}<br />
                        {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state}<br />
                        CEP: {CLINIC_INFO.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <a
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horário de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Segunda a Sexta:</strong> 8h às 20h</p>
                    <p><strong>Sábado:</strong> 8h às 14h</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
