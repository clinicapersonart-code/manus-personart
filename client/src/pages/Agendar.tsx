import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/const";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { trackAppointmentConversion } from "@/components/GoogleAdsTracking";
import { Calendar } from "lucide-react";

export default function Agendar() {
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    serviceType: "",
    appointmentDate: "",
    notes: ""
  });

  const createAppointmentMutation = trpc.appointments.create.useMutation({
    onSuccess: () => {
      trackAppointmentConversion(); // Rastreia conversão do Google Ads
      toast.success("Solicitação de agendamento enviada com sucesso! Entraremos em contato em breve para confirmar.");
      setFormData({
        patientName: "",
        patientEmail: "",
        patientPhone: "",
        serviceType: "",
        appointmentDate: "",
        notes: ""
      });
    },
    onError: (error: unknown) => {
      toast.error("Erro ao enviar solicitação. Por favor, tente novamente.");
      console.error(error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.appointmentDate) {
      toast.error("Por favor, selecione uma data e horário.");
      return;
    }

    createAppointmentMutation.mutate({
      ...formData,
      appointmentDate: new Date(formData.appointmentDate).toISOString()
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Agende sua Consulta
            </h1>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Formulário de Agendamento
                </CardTitle>
                <CardDescription>
                  Preencha todos os campos obrigatórios (*) para solicitar seu agendamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="patientName">Nome Completo *</Label>
                    <Input
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patientEmail">E-mail *</Label>
                      <Input
                        id="patientEmail"
                        name="patientEmail"
                        type="email"
                        value={formData.patientEmail}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="patientPhone">Telefone *</Label>
                      <Input
                        id="patientPhone"
                        name="patientPhone"
                        type="tel"
                        value={formData.patientPhone}
                        onChange={handleChange}
                        required
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Tipo de Serviço *</Label>
                    <Select value={formData.serviceType} onValueChange={handleServiceChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="appointmentDate">Data e Horário Preferencial *</Label>
                    <Input
                      id="appointmentDate"
                      name="appointmentDate"
                      type="datetime-local"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().slice(0, 16)}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Selecione sua data e horário preferencial. Entraremos em contato para confirmar a disponibilidade.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="notes">Observações</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Alguma informação adicional que gostaria de compartilhar?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={createAppointmentMutation.isPending}
                  >
                    {createAppointmentMutation.isPending ? "Enviando..." : "Solicitar Agendamento"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Após o envio, nossa equipe entrará em contato em até 24 horas para confirmar seu agendamento.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
