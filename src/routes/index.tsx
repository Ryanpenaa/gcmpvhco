import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  BookOpen,
  Brain,
  PencilLine,
  Target,
  Landmark,
  FileText,
  ScrollText,
  Clock,
  CheckCircle2,
  XCircle,
  Gift,
  CalendarDays,
  Smartphone,
  Award,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import guardEmblem from "@/assets/guarda-emblem.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const parts = [
  {
    n: "I",
    title: "Língua Portuguesa",
    desc: "Interpretação, gramática e os principais assuntos cobrados em provas.",
  },
  {
    n: "II",
    title: "Raciocínio Lógico",
    desc: "Questões e conteúdos fundamentais para desenvolver seu desempenho.",
  },
  {
    n: "III",
    title: "Conhecimentos Gerais",
    desc: "Conteúdos importantes para ampliar sua preparação.",
  },
  {
    n: "IV",
    title: "História de Porto Velho",
    desc: "Principais acontecimentos, personagens e fatos históricos do município.",
  },
  {
    n: "V",
    title: "Geografia de Porto Velho",
    desc: "Aspectos geográficos, localização e informações importantes sobre Porto Velho.",
  },
  {
    n: "VI",
    title: "Legislação",
    desc: "Conteúdos legais relevantes para a preparação do candidato.",
  },
  {
    n: "VII",
    title: "Conhecimentos Específicos",
    desc: "Conteúdos direcionados à preparação para a Guarda Municipal.",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Apostila Digital",
    desc: "Conteúdo organizado para você estudar de forma prática e objetiva.",
  },
  {
    icon: Brain,
    title: "Mapas Mentais",
    desc: "Resumos visuais para facilitar a revisão dos assuntos mais importantes.",
  },
  {
    icon: PencilLine,
    title: "Questões de Fixação",
    desc: "Treine o conteúdo estudado e identifique rapidamente onde precisa melhorar.",
  },
  {
    icon: Target,
    title: "Questões no Estilo da Banca",
    desc: "Pratique questões semelhantes ao formato que você encontrará na preparação.",
  },
  {
    icon: Landmark,
    title: "Conhecimentos de Porto Velho",
    desc: "Material direcionado para os conhecimentos locais da GCM.",
  },
  {
    icon: FileText,
    title: "Legislação",
    desc: "Conteúdo organizado para facilitar o estudo da legislação relacionada.",
  },
];

const bonuses = [
  {
    icon: MapPin,
    tag: "BÔNUS 1",
    title: "100 Questões de História e Geografia de Porto Velho",
    desc: "Uma seleção especial para treinar uma das áreas mais específicas da preparação.",
    flow: "Estude → Resolva → Revise → Treine novamente.",
  },
  {
    icon: Brain,
    tag: "BÔNUS 2",
    title: "Mapas Mentais de Revisão",
    desc: "Material visual para revisar os principais pontos do conteúdo de maneira muito mais rápida.",
    flow: "Ideal para os dias em que você não tem tempo de reler toda a apostila.",
  },
  {
    icon: Target,
    tag: "BÔNUS 3",
    title: "Simulados",
    desc: "Coloque seus conhecimentos à prova, acompanhe seu desempenho e descubra quais assuntos precisam de atenção.",
    flow: "Resolva simulados e corrija seus pontos fracos.",
  },
  {
    icon: CalendarDays,
    tag: "BÔNUS 4",
    title: "Cronograma de Estudos",
    desc: "Não sabe por onde começar? Utilize um cronograma estruturado para organizar sua rotina.",
    flow: "Distribua melhor as matérias durante a preparação.",
  },
];

const received = [
  "Apostila Digital",
  "Mapas Mentais",
  "Questões de Fixação",
  "Questões Comentadas",
  "Simulados",
  "Conhecimentos de Porto Velho",
  "Legislação",
  "Cronograma de Estudos",
  "Acesso pelo celular, tablet e computador",
];

const faqs = [
  {
    q: "O material serve para quem está começando do zero?",
    a: "Sim. O conteúdo foi organizado para ajudar tanto quem está iniciando quanto quem já está estudando e precisa de material para revisão e treinamento.",
  },
  {
    q: "O que está incluído no material?",
    a: "Você recebe os materiais previstos no plano escolhido, incluindo apostila, questões, mapas mentais, simulados, conhecimentos locais e recursos de organização dos estudos.",
  },
  {
    q: "O material é específico para a Guarda Municipal de Porto Velho?",
    a: "Sim. A proposta do material é direcionar sua preparação para o concurso da GCM Porto Velho, com atenção especial aos conhecimentos locais.",
  },
  {
    q: "O material possui História e Geografia de Porto Velho?",
    a: "Sim. O conteúdo de conhecimentos locais é um dos principais diferenciais da preparação.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. O material foi pensado para ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "Recebo o material imediatamente após a compra?",
    a: "O acesso é liberado após a confirmação do pagamento, conforme a plataforma utilizada na compra.",
  },
  {
    q: "Tenho acesso por quanto tempo?",
    a: "O período de acesso será informado no momento da compra, de acordo com o plano adquirido.",
  },
  {
    q: "Sou iniciante. Consigo utilizar o cronograma?",
    a: "Sim. O cronograma foi pensado para ajudar você a organizar uma rotina de estudos e evitar que fique perdido sobre qual conteúdo estudar.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você possui 7 dias para avaliar o material. Caso não queira continuar, poderá solicitar o reembolso dentro das condições da garantia.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-gold-gradient" : "text-accent-foreground/70"
          }`}
        >
          <Sparkles className="size-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${light ? "text-background" : "text-foreground"}`}
      >
        {title}
      </h2>
      <div className="divider-gold mx-auto mt-5" />
      {desc && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-background/75" : "text-muted-foreground"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Parts />
      <Platform />
      <Receive />
      <Bonuses />
      <WhyDirected />
      <StartNow />
      <Pricing />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-2.5">
          <Shield className="size-7 text-accent-foreground" />
          <span className="font-display text-base font-bold leading-tight text-foreground sm:text-lg">
            GCM Porto Velho
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Preparatório 2026
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#material" className="transition-colors hover:text-foreground">
            Material
          </a>
          <a href="#bonus" className="transition-colors hover:text-foreground">
            Bônus
          </a>
          <a href="#planos" className="transition-colors hover:text-foreground">
            Planos
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            Dúvidas
          </a>
        </div>
        <Button asChild variant="gold" size="sm" className="shadow">
          <a href="#planos">Quero me preparar</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="surface-hero relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(135deg,oklch(0.985_0.012_80)_0,oklch(0.985_0.012_80)_1px,transparent_1px,transparent_22px)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-gold-gradient">
            <Shield className="size-3.5" />
            Concurso GCM Porto Velho 2026
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-background sm:text-5xl lg:text-6xl">
            Preparação Estratégica para a{" "}
            <span className="text-gold-gradient">Guarda Municipal de Porto Velho</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
            Estude exatamente o que pode fazer diferença na sua prova. Apostila
            digital + questões + mapas mentais + simulados + legislação +
            conhecimentos específicos de Porto Velho.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl" className="shadow-lg">
              <a href="#planos">
                Quero conhecer o material
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <a href="#material">Ver o material por dentro</a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-background/85">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-accent" /> Acesso imediato
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-accent" /> Material digital
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-accent" /> Celular, tablet ou
              computador
            </li>
          </ul>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl sm:h-80 sm:w-80" />
          <img
            src={guardEmblem}
            alt="Brasão do curso preparatório — escudo amarelo e azul com a faixa Guarda Mirim"
            width={340}
            height={323}
            className="relative w-[280px] drop-shadow-[0_20px_45px_oklch(0.26_0.05_258/0.55)] sm:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-destructive">
            <XCircle className="size-4" />
            O erro comum
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Estudar muito não é o mesmo que estudar certo
          </h2>
          <div className="divider-gold mt-5" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Quem está começando a preparação pode facilmente cair em um problema:
            estudar horas e horas sem saber exatamente o que priorizar. Material
            genérico, excesso de conteúdo, questões que não têm relação com a
            banca e dificuldade para revisar fazem você perder um tempo precioso.
          </p>
          <p className="mt-4 font-medium text-foreground">
            Enquanto isso, outros candidatos estão treinando justamente os
            assuntos que podem aparecer na prova.
          </p>
        </div>
        <Card className="border-destructive/20 bg-card p-6 sm:p-8">
          <ul className="space-y-4 text-sm">
            {[
              "Material genérico e sem direção",
              "Excesso de conteúdo sem saber o que priorizar",
              "Questões sem relação com a banca",
              "Dificuldade para revisar os pontos importantes",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <XCircle className="size-4" />
                </span>
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="surface-navy relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="A solução"
          title={
            <>
              Uma preparação mais direcionada para a{" "}
              <span className="text-gold-gradient">GCM Porto Velho</span>
            </>
          }
          desc="Reunimos os principais materiais para você organizar sua preparação em um único lugar. Conteúdo estruturado + questões + revisões + simulados + conhecimentos locais."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { icon: BookOpen, t: "Conteúdo estruturado", d: "Organizado por matéria para você saber o que estudar." },
            { icon: Target, t: "Questões + revisões", d: "Pratique e revise sem procurar material espalhado." },
            { icon: MapPin, t: "Conhecimentos locais", d: "Atenção especial a Porto Velho e à GCM." },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-background/10"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-background">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-background/80">
          Você estuda, pratica e revisa sem precisar ficar procurando material
          espalhado pela internet.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="material" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Veja o material por dentro"
        title="Um material organizado para facilitar sua preparação"
        desc="Um material pensado para facilitar sua preparação e suas revisões."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card-feature p-7">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Parts() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conteúdo organizado"
          title="Você não precisa pular entre dezenas de materiais"
          desc="Reunimos os conteúdos em uma estrutura simples e organizada para você saber o que estudar, praticar e revisar."
        />
        <div className="mt-14 space-y-3">
          {parts.map((p) => (
            <div
              key={p.n}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50 sm:flex-row sm:items-center sm:p-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {p.n}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:ml-auto sm:max-w-md sm:text-right">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">
            <Smartphone className="size-4" />
            Estude todos os dias
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Uma plataforma de estudos para você treinar onde estiver
          </h2>
          <div className="divider-gold mt-5" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Acesse o conteúdo durante o intervalo, em casa, no trabalho ou naquele
            momento reservado exclusivamente para sua preparação. Notebooks,
            tablets e celulares — você decide onde e quando estudar.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["Notebook", "Tablet", "Celular"].map((d) => (
              <Badge key={d} variant="secondary" className="rounded-full px-3.5 py-1.5 text-sm font-medium">
                {d}
              </Badge>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="surface-navy p-6 text-background">
            <div className="flex items-center gap-2 text-sm font-semibold text-background/80">
              <Shield className="size-4 text-accent" /> Acesso imediato
            </div>
            <div className="mt-4 space-y-3">
              {["Apostila Digital", "Simulados", "Mapas Mentais", "Cronograma"].map((t, i) => (
                <div key={t} className="flex items-center justify-between rounded-lg bg-background/8 px-4 py-3 text-sm">
                  <span className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-accent" /> {t}
                  </span>
                  <span className="text-xs text-background/55">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Receive() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="O que você recebe"
          title="Tudo o que você precisa em um único lugar"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {received.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
            >
              <CheckCircle2 className="size-5 shrink-0 text-accent-foreground" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section id="bonus" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Bônus para turbinar"
        title="Recursos extras para facilitar seus estudos"
        desc="Além do material principal, você recebe recursos para facilitar seus estudos e suas revisões."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {bonuses.map((b) => (
          <div key={b.tag} className="card-feature relative overflow-hidden p-7">
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="size-6" />
                </span>
                <Badge className="rounded-full bg-accent/15 text-accent-foreground hover:bg-accent/15">
                  {b.tag}
                </Badge>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-foreground">
                <Gift className="size-4" /> {b.flow}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyDirected() {
  return (
    <section className="surface-navy relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading
          light
          eyebrow="Por que direcionado?"
          title={
            <>
              Concurso não é só sobre estudar muito.{" "}
              <span className="text-gold-gradient">É sobre estudar com estratégia.</span>
            </>
          }
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { icon: BookOpen, t: "Conhecer o conteúdo" },
            { icon: PencilLine, t: "Resolver questões" },
            { icon: Brain, t: "Revisar os pontos importantes" },
            { icon: TrendingUp, t: "Identificar suas dificuldades" },
          ].map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 p-5 text-left"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-5" />
              </span>
              <span className="font-medium text-background">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-background/80">
          Quanto mais direcionada for sua preparação, menos tempo você desperdiça
          procurando o que estudar.
        </p>
      </div>
    </section>
  );
}

function StartNow() {
  const steps = [
    { icon: BookOpen, t: "Aprender o conteúdo" },
    { icon: PencilLine, t: "Resolver questões" },
    { icon: Brain, t: "Revisar" },
    { icon: Target, t: "Fazer simulados" },
    { icon: TrendingUp, t: "Corrigir seus pontos fracos" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Não deixe para depois"
        title="A preparação começa muito antes do dia da prova"
        desc="Quanto antes você começar, mais tempo terá para conquistar cada etapa."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.t} className="relative rounded-2xl border border-border bg-card p-6 text-center">
            <span className="absolute right-4 top-4 font-display text-sm font-bold text-accent/40">
              {i + 1}
            </span>
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <s.icon className="size-6" />
            </span>
            <p className="mt-4 text-sm font-semibold text-foreground">{s.t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Escolha seu material"
          title="Comece hoje sua preparação para a GCM Porto Velho 2026"
        />
        <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
          {/* Plano Básico */}
          <Card className="flex flex-col p-7 sm:p-9">
            <div className="flex items-center gap-2 text-accent-foreground">
              <BookOpen className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Plano Básico</span>
            </div>
            <div className="mt-4">
              <span className="font-display text-4xl font-extrabold text-foreground">R$ 9,90</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              100 Questões de História e Geografia de Porto Velho. Ideal para quem
              quer começar pelos conhecimentos locais e testar seus conhecimentos.
            </p>
            <Separator className="my-6" />
            <ul className="space-y-3 text-sm">
              {["100 Questões", "História de Porto Velho", "Geografia de Porto Velho", "Material Digital", "Acesso Imediato"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-accent-foreground" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ),
              )}
            </ul>
            <Button asChild variant="outline" size="xl" className="mt-7 w-full">
              <a href="#topo">Quero as 100 questões</a>
            </Button>
          </Card>

          {/* Plano Completo */}
          <Card className="price-featured relative flex flex-col overflow-hidden p-7 sm:p-9">
            <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-2xl bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Award className="size-3.5" /> Mais escolhido
            </div>
            <div className="flex items-center gap-2 text-accent-foreground">
              <Shield className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Plano Completo</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">
              Preparação Completa GCM Porto Velho 2026
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Apostila + Questões + Mapas Mentais + Simulados + Conhecimentos
              Locais + Cronograma.
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2.5 text-sm">
              {[
                "Apostila Digital Completa",
                "Questões de Fixação",
                "Questões Comentadas",
                "100 Questões de História e Geografia de Porto Velho",
                "Mapas Mentais",
                "Simulados",
                "Legislação",
                "Conhecimentos Locais",
                "Cronograma de Estudos",
                "Acesso Imediato",
                "Acesso pelo celular, tablet e computador",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="xl" className="mt-7 w-full shadow-lg">
              <a href="#topo">
                Quero me preparar para a GCM Porto Velho
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Card className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
          <RefreshCw className="size-8" />
        </span>
        <div>
          <div className="flex items-center gap-2 text-accent-foreground">
            <Shield className="size-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">7 dias de garantia</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-foreground">
            Conheça o material e avalie se atende às suas expectativas
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Se dentro de 7 dias você entender que o material não é para você,
            poderá solicitar o reembolso conforme as condições da compra. Sem
            ficar preso a um material que não atenda às suas necessidades.
          </p>
        </div>
      </Card>
    </section>
  );
}

function Faq() {
  const [value, setValue] = useState<string>("");
  return (
    <section id="faq" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas antes de começar"
        />
        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={setValue}
            className="space-y-3"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="gap-3 py-5 text-left text-[15px] font-semibold text-foreground hover:no-underline">
                  <HelpCircle className="size-4 shrink-0 text-accent-foreground" />
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-7 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="surface-hero relative overflow-hidden py-20 text-center sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Shield className="mx-auto size-12 text-accent" />
        <h2 className="mt-6 font-display text-3xl font-extrabold text-background sm:text-5xl">
          Estude. Pratique. Revise.{" "}
          <span className="text-gold-gradient">Evolua.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-background/80">
          Sua preparação para a Guarda Municipal de Porto Velho começa agora.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-9 shadow-lg">
          <a href="#planos">
            Quero começar minha preparação
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="surface-navy border-t border-background/10">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2.5">
            <Shield className="size-7 text-accent" />
            <span className="font-display text-lg font-bold text-background">
              Preparatório GCM Porto Velho 2026
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-background/70">
            Material preparatório independente, desenvolvido para auxiliar
            candidatos na preparação para concursos públicos. Não possui vínculo
            institucional com a Prefeitura de Porto Velho ou com a Guarda
            Municipal. A aprovação depende da preparação, dedicação e desempenho
            individual de cada candidato.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-background/80">
            <a href="#" className="transition-colors hover:text-accent">
              Política de Privacidade
            </a>
            <span className="text-background/30">|</span>
            <a href="#" className="transition-colors hover:text-accent">
              Termos de Uso
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-1.5 text-xs text-background/55">
          <ChevronDown className="size-3 rotate-180" />
          <span>© 2026 — Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
