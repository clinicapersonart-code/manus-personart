import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Calendar, ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8" />
            <div className="h-12 bg-muted rounded w-3/4 mb-4" />
            <div className="h-6 bg-muted rounded w-1/3 mb-8" />
            <div className="w-full h-96 bg-muted rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Post não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <article className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Botão Voltar */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>

            {/* Cabeçalho do Post */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.createdAt.toISOString()}>
                  {formatDate(post.createdAt)}
                </time>
              </div>
            </header>

            {/* Imagem de Capa */}
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto rounded-lg mb-8 shadow-md"
              />
            )}

            {/* Conteúdo do Post */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
