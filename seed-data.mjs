import { drizzle } from "drizzle-orm/mysql2";
import { teamMembers, blogPosts } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

async function seedData() {
  console.log("🌱 Iniciando população do banco de dados...");

  // Dados da equipe extraídos do Wix
  const team = [
    {
      name: "Bruno Alexandre",
      role: "Psicólogo",
      bio: "Psicólogo com abordagem em Terapia Cognitiva Comportamental e Pós-Graduando em PBE na Prática Clínica.",
      photo: null,
      instagramUrl: null,
      displayOrder: 1,
      active: 1
    },
    {
      name: "Janaína Mendes",
      role: "Psicóloga",
      bio: "Psicóloga com abordagem em Terapia Cognitiva Comportamental, com foco em autoestima e terapia com idosos.",
      photo: null,
      instagramUrl: null,
      displayOrder: 2,
      active: 1
    },
    {
      name: "Stephanie Magon",
      role: "Psicóloga",
      bio: "Psicóloga especialista em Terapia Cognitiva Comportamental e Pós-Graduanda em ABA.",
      photo: null,
      instagramUrl: null,
      displayOrder: 3,
      active: 1
    }
  ];

  // Dados do blog extraídos do Wix
  const posts = [
    {
      title: "O poder do exercício contra a depressão",
      slug: "o-poder-do-exercicio-contra-a-depressao",
      excerpt: "Exercício combate a depressão! Dança, corrida e ioga aliviam sintomas e melhoram o bem-estar mental.",
      content: `<p>A prática regular de exercícios físicos tem se mostrado uma ferramenta poderosa no combate à depressão. Estudos científicos demonstram que atividades como dança, corrida e ioga não apenas aliviam os sintomas depressivos, mas também promovem o bem-estar mental de forma significativa.</p>

<p>O exercício físico estimula a produção de endorfinas, neurotransmissores responsáveis pela sensação de prazer e bem-estar. Além disso, a atividade física regular melhora a qualidade do sono, aumenta a autoestima e proporciona uma sensação de realização.</p>

<p>É importante ressaltar que o exercício não substitui o tratamento psicológico ou medicamentoso quando necessário, mas funciona como um excelente complemento terapêutico. Consulte sempre um profissional de saúde antes de iniciar qualquer programa de exercícios.</p>`,
      coverImage: null,
      authorId: 1,
      published: 1,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      title: "O Impacto da Cafeína no Sono: O Que Você Precisa Saber",
      slug: "o-impacto-da-cafeina-no-sono",
      excerpt: "Café à tarde pode roubar seu sono. Estudo revela que a cafeína reduz a qualidade do sono mesmo horas após o consumo.",
      content: `<p>A cafeína é uma das substâncias psicoativas mais consumidas no mundo, presente no café, chá, refrigerantes e chocolates. Embora seja conhecida por seus efeitos estimulantes, muitas pessoas desconhecem o impacto significativo que ela pode ter na qualidade do sono.</p>

<p>Pesquisas recentes demonstram que o consumo de cafeína, mesmo 6 horas antes de dormir, pode reduzir significativamente a qualidade e a duração do sono. Isso ocorre porque a cafeína bloqueia os receptores de adenosina, um neurotransmissor que promove o sono.</p>

<p>Para garantir uma boa noite de sono, especialistas recomendam evitar o consumo de cafeína após as 14h. Se você tem dificuldades para dormir, considere reduzir ou eliminar a cafeína da sua rotina e observe as mudanças na qualidade do seu sono.</p>`,
      coverImage: null,
      authorId: 1,
      published: 1,
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    },
    {
      title: "Para comprar felicidade, gaste dinheiro economizando tempo",
      slug: "para-comprar-felicidade-gaste-dinheiro-economizando-tempo",
      excerpt: "Dinheiro traz felicidade curta. Investir em serviços que economizam tempo aumenta o bem-estar de forma duradoura.",
      content: `<p>Um estudo fascinante sobre a relação entre dinheiro e felicidade revelou que a forma como gastamos nosso dinheiro é mais importante do que quanto ganhamos. A pesquisa mostra que investir em serviços que economizam tempo - como limpeza doméstica, delivery de refeições ou transporte - pode aumentar significativamente nosso bem-estar.</p>

<p>O motivo é simples: tempo é nosso recurso mais valioso e limitado. Quando compramos tempo livre, podemos dedicá-lo a atividades que realmente nos trazem satisfação, como passar tempo com família e amigos, praticar hobbies ou simplesmente descansar.</p>

<p>Ao contrário da felicidade momentânea proporcionada pela compra de bens materiais, a sensação de bem-estar obtida ao ter mais tempo livre tende a ser mais duradoura e significativa. Portanto, da próxima vez que pensar em como gastar seu dinheiro, considere investir em sua liberdade temporal.</p>`,
      coverImage: null,
      authorId: 1,
      published: 1,
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-03-05')
    }
  ];

  try {
    // Inserir membros da equipe
    console.log("📋 Inserindo membros da equipe...");
    for (const member of team) {
      await db.insert(teamMembers).values(member);
    }
    console.log(`✅ ${team.length} membros da equipe inseridos com sucesso!`);

    // Inserir posts do blog
    console.log("📝 Inserindo posts do blog...");
    for (const post of posts) {
      await db.insert(blogPosts).values(post);
    }
    console.log(`✅ ${posts.length} posts do blog inseridos com sucesso!`);

    console.log("🎉 População do banco de dados concluída!");
  } catch (error) {
    console.error("❌ Erro ao popular banco de dados:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedData();
