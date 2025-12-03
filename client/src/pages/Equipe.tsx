import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Equipe() {
  const { data: teamMembers, isLoading } = trpc.team.list.useQuery();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossa Equipe
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça os profissionais dedicados que compõem a Clínica Personart
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
                    <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : teamMembers && teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member: any) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-secondary/30"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 border-4 border-secondary/30">
                        <span className="text-4xl font-bold text-primary">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    {member.bio && (
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                    {member.instagramUrl && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm">
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Informações da equipe em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
