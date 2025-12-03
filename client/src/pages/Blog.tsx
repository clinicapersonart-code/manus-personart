import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.listPublished.useQuery();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Artigos, dicas e reflexões sobre saúde mental e bem-estar emocional
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded mb-4" />
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
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
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                    )}
                    <CardTitle className="text-xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.createdAt)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {post.excerpt && (
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Ler mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo publicado ainda. Volte em breve!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
