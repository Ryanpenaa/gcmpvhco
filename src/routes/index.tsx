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
  ClipboardCheck,
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
  Scale,
  Gavel,
  Globe2,
  ListChecks,
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

/**
 * ============================================================
 * CONFIGURAÇÃO DE PREÇOS
 * Altere aqui os valores exibidos na seção de planos.
 * Deixe PRECO_COMPLETO como "" para exibir "Em breve".
 * ============================================================
 */
const PRECO_BASICO = "R$ 9,90";
const PRECO_COMPLETO = ""; // ex.: "R$ 47,90"

const DATA_PROVA = "20 de setembro de 2026";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "GCM Porto Velho 2026 — 800 Questões para a Reta Final",
      },
      {
        name: "description",
        content:
          "Material digital com 800 questões organizadas por disciplina, gabarito comentado, 10 mapas mentais e cronograma de 27 dias até a prova da GCM Porto Velho 2026.",
      },
      {
        property: "og:title",
        content: "GCM Porto Velho 2026 — 800 Questões para a Reta Final",
      },
      {
        property: "og:description",
        content:
          "Questões + gabarito comentado + 10 mapas mentais + cronograma de 27 dias até 20/09/2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const parts = [
  {
    n: "I",
    title: "Língua Portuguesa",
    desc: "Interpretação, gramática e principais conteúdos da disciplina.",
  },
  {
    n: "II",
    title: "Raciocínio Lógico",
    desc: "Questões para desenvolver e testar seu raciocínio.",
  },
  {
    n: "III",
    title: "Informática",
    desc: "Conhecimentos de informática relevantes para a preparação.",
  },
  {
    n: "IV",
    title: "Conhecimentos Gerais",
    desc: "Conteúdos gerais previstos para a preparação.",
  },
  {
    n: "V",
    title: "História de Porto Velho",
    desc: "Questões direcionadas aos principais fatos e acontecimentos históricos do município.",
  },
  {
    n: "VI",
    title: "Geografia de Porto Velho",
    desc: "Aspectos geográficos, territoriais e características importantes de Porto Velho.",
  },
  {
    n: "VII",
    title: "Direito Administrativo",
    desc: "Principais conceitos de Direito Administrativo previstos no conteúdo.",
  },
  {
    n: "VIII",
    title: "Direito Constitucional + Direitos Humanos",
    desc: "Direitos fundamentais, Administração Pública, segurança pública e direitos humanos.",
  },
  {
    n: "IX",
    title: "Direito Penal + Processo Penal",
    desc: "Questões sobre os principais conceitos jurídicos da área.",
  },
  {
    n: "X",
    title: "Legislação, Trânsito e Guarda Municipal",
    desc: "Conteúdos relacionados à legislação, trânsito e conhecimentos específicos da Guarda.",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Apostila Digital de Questões",
    desc: "Questões organizadas por disciplina para facilitar o treinamento.",
  },
  {
    icon: ClipboardCheck,
    title: "Gabarito Comentado",
    desc: "Comentários para entender seus erros e revisar os conceitos.",
  },
  {
    icon: Brain,
    title: "Mapas Mentais",
    desc: "Revisões visuais para memorizar os principais pontos com mais rapidez.",
  },
  {
    icon: CalendarDays,
    title: "Cronograma de 27 Dias",
    desc: "Um plano de estudos criado para organizar sua reta final até 20 de setembro.",
  },
  {
    icon: Landmark,
    title: "Conhecimentos de Porto Velho",
    desc: "Conteúdo direcionado para História e Geografia do município.",
  },
  {
    icon: FileText,
    title: "Legislação",
    desc: "Questões e materiais relacionados à legislação relevante para a preparação.",
  },
];

const mapasMentais = [
  "História de Porto Velho",
  "Geografia de Porto Velho",
  "Guarda Municipal",
  "Direito Administrativo",
  "Direito Constitucional",
  "Direito Penal + Processo Penal",
  "Direitos Humanos",
  "Legislação de Trânsito",
  "Revisão Final GCM Porto Velho",
];

const cronogramaPontos = [
  "O que estudar",
  "Quando resolver questões",
  "Quando revisar",
  "Quando fazer simulados",
  "Como trabalhar seus pontos fracos",
  "Como organizar a reta final",
];

const received = [
  "800 questões organizadas",
  "Gabarito comentado",
  "10 mapas mentais de revisão",
  "Cronograma de 27 dias",
  "História de Porto Velho",
  "Geografia de Porto Velho",
  "Direito Administrativo",
  "Direito Constitucional",
  "Direitos Humanos",
  "Direito Penal e Processo Penal",
  "Legislação e Trânsito",
  "Conhecimentos relacionados à Guarda Municipal",
  "Material digital",
  "Acesso imediato",
];

const faqs = [
  {
    q: "O material é específico para a GCM Porto Velho?",
    a: "Sim. O material foi desenvolvido especificamente para auxiliar candidatos na preparação para o concurso da Guarda Municipal de Porto Velho 2026.",
  },
  {
    q: "Quantas questões existem no material completo?",
    a: "O plano completo possui 800 questões organizadas por disciplinas.",
  },
  {
    q: "As questões possuem gabarito?",
    a: "Sim. O material possui gabarito comentado.",
  },
  {
    q: "O que são os mapas mentais?",
    a: "São materiais visuais de revisão rápida com os principais pontos dos conteúdos trabalhados.",
  },
  {
    q: "O que é o cronograma?",
    a: "É um cronograma de 27 dias para organizar a preparação entre 25 de agosto e 20 de setembro de 2026.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. O material é digital e pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "Recebo imediatamente?",
    a: "O material é disponibilizado após a confirmação da compra.",
  },
  {
    q: "É uma plataforma de aulas?",
    a: "Não. É um material digital de questões e revisão, acompanhado dos bônus.",
  },
  {
    q: "O material garante aprovação?",
    a: "Não. O material é uma ferramenta de preparação. A aprovação depende da dedicação, desempenho e preparação individual de cada candidato.",
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
      <HowItWorks />
      <Bonuses />
      <WhyQuestions />
      <FinalStretch />
      <Receive />
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
            GCM Porto Velho 2026
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              800 Questões · Reta Final
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
          <a href="#planos">Quero treinar</a>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-gradient">
            <Shield className="size-3.5" />
            GCM Porto Velho 2026
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] text-background sm:text-5xl lg:text-[3.4rem]">
            <span className="text-gold-gradient">800 questões</span> para a reta
            final da GCM Porto Velho
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/85">
            Treine os principais conteúdos da preparação, descubra onde está
            errando e revise de forma estratégica até a prova.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">
            Questões organizadas por disciplina + gabarito comentado + 10 mapas
            mentais + cronograma de 27 dias.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl" className="shadow-lg">
              <a href="#planos">
                Quero começar a treinar
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
            alt="Brasão do material preparatório — escudo amarelo e azul com a faixa Guarda Mirim"
            width={340}
            height={323}
            className="relative w-[280px] drop-shadow-[0_20px_45px_oklch(0.26_0.05_258/0.55)] sm:w-[360px]"
          />
        </div>
      </div>
      <div className="relative border-t border-background/10 bg-background/5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-6 text-center sm:px-6 lg:grid-cols-5">
          {[
            { k: "800", v: "Questões" },
            { k: "100%", v: "Gabarito comentado" },
            { k: "10", v: "Mapas mentais" },
            { k: "27", v: "Dias de cronograma" },
            { k: "20/09/2026", v: "Data da prova" },
          ].map((s) => (
            <div key={s.v} className="px-2 py-2">
              <div className="font-display text-xl font-extrabold text-gold-gradient sm:text-2xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-background/70">
                {s.v}
              </div>
            </div>
          ))}
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
            Estudar muito não é o mesmo que estar preparado
          </h2>
          <div className="divider-gold mt-5" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Você pode passar horas lendo PDFs, fazendo resumos e estudando
            teoria. Mas existe uma diferença entre:
          </p>
          <div className="mt-5 space-y-3">
            <p className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground/90">
              “Eu li esse assunto.”
            </p>
            <p className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-semibold text-foreground">
              “Eu consigo resolver uma questão sobre esse assunto.”
            </p>
          </div>
          <p className="mt-5 font-medium text-foreground">
            Na reta final, resolver questões é fundamental para descobrir o que
            você realmente domina e quais assuntos ainda precisam de revisão.
          </p>
        </div>
        <Card className="border-destructive/20 bg-card p-6 sm:p-8">
          <ul className="space-y-4 text-sm">
            {[
              "Estudar sem testar seu conhecimento",
              "Resolver questões aleatórias e sem direção",
              "Não identificar os assuntos em que mais erra",
              "Chegar perto da prova sem treinar em quantidade",
              "Não ter um plano de revisão para a reta final",
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
              Uma preparação focada em{" "}
              <span className="text-gold-gradient">questões e revisão</span>
            </>
          }
          desc="Criamos um material digital específico para quem está se preparando para a GCM Porto Velho 2026 e quer transformar estudo em prática."
        />
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-background/80 sm:text-sm">
          {["Estude", "Resolva", "Corrija", "Revise", "Repita"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-gold-gradient">
                {s}
              </span>
              {i < arr.length - 1 && <ArrowRight className="size-3.5 text-accent/70" />}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: ListChecks,
              t: "Questões organizadas",
              d: "Questões separadas por disciplina para você treinar cada conteúdo de forma direcionada.",
            },
            {
              icon: ClipboardCheck,
              t: "Gabarito comentado",
              d: "Entenda seus erros e descubra exatamente o que precisa revisar.",
            },
            {
              icon: Brain,
              t: "Revisão estratégica",
              d: "Use os mapas mentais e o cronograma para organizar sua reta final.",
            },
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
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="material" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Material por dentro"
        title="Um material feito para você resolver e revisar"
        desc="Em vez de deixar você procurando questões, resumos e materiais de revisão em vários lugares, reunimos os principais recursos em uma estrutura simples."
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
          eyebrow="Conteúdos"
          title="800 questões organizadas por disciplina"
          desc="Treine os principais conteúdos da preparação para a GCM Porto Velho 2026 em blocos organizados."
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
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Questões elaboradas para treinamento e revisão da preparação.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: BookOpen, n: "01", t: "Estude", d: "Revise o conteúdo necessário." },
    { icon: PencilLine, n: "02", t: "Resolva", d: "Faça as questões do bloco." },
    { icon: ClipboardCheck, n: "03", t: "Corrija", d: "Confira o gabarito comentado." },
    { icon: Brain, n: "04", t: "Revise", d: "Use os mapas mentais e seu caderno de erros." },
    { icon: RefreshCw, n: "05", t: "Repita", d: "Volte aos assuntos em que teve dificuldade." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Como funciona"
        title="Resolva. Corrija. Revise. Repita."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 text-center">
            <span className="absolute right-4 top-4 font-display text-sm font-bold text-accent/50">
              {s.n}
            </span>
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <s.icon className="size-6" />
            </span>
            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-foreground">{s.t}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section id="bonus" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Bônus"
          title="E para turbinar sua revisão..."
          desc="Além das questões, você recebe dois bônus para organizar sua reta final."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Bônus 01 */}
          <div className="card-feature relative overflow-hidden p-7 sm:p-8">
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Brain className="size-6" />
                </span>
                <Badge className="rounded-full bg-accent/15 text-accent-foreground hover:bg-accent/15">
                  BÔNUS 01
                </Badge>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-foreground">
                10 Mapas Mentais de Revisão
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Uma coleção de mapas mentais visuais para revisar rapidamente os
                principais assuntos da preparação.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {mapasMentais.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bônus 02 */}
          <div className="card-feature relative overflow-hidden p-7 sm:p-8">
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <CalendarDays className="size-6" />
                </span>
                <Badge className="rounded-full bg-accent/15 text-accent-foreground hover:bg-accent/15">
                  BÔNUS 02
                </Badge>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-foreground">
                Cronograma de 27 Dias
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Um cronograma criado para organizar sua preparação de 25 de
                agosto até a prova de {DATA_PROVA}.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {cronogramaPontos.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3">
                <Gift className="size-5 shrink-0 text-accent-foreground" />
                <div>
                  <p className="font-display text-lg font-extrabold leading-tight text-foreground">
                    20 DE SETEMBRO DE 2026
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    A data da prova
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyQuestions() {
  return (
    <section className="surface-navy relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading
          light
          eyebrow="Por que questões?"
          title={
            <>
              Você não precisa apenas estudar.{" "}
              <span className="text-gold-gradient">Precisa conseguir resolver.</span>
            </>
          }
          desc="Existe uma grande diferença entre reconhecer um assunto quando você lê e conseguir responder uma questão sobre ele."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { icon: Target, t: "Testar seu conhecimento" },
            { icon: MapPin, t: "Encontrar seus pontos fracos" },
            { icon: XCircle, t: "Identificar erros recorrentes" },
            { icon: Brain, t: "Revisar assuntos importantes" },
            { icon: TrendingUp, t: "Acompanhar sua evolução" },
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
      </div>
    </section>
  );
}

function FinalStretch() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">
            <CalendarDays className="size-4" />
            Reta final
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            A prova tem data. Sua preparação também.
          </h2>
          <div className="divider-gold mt-5" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Quanto mais perto da prova, mais importante se torna organizar seu
            tempo. Por isso, o material foi pensado para ajudar você a
            transformar os últimos dias em:
          </p>
          <p className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-foreground">
            Questões + Revisão + Repetição
          </p>
          <Button asChild variant="gold" size="xl" className="mt-7 shadow-lg">
            <a href="#planos">
              Quero começar minha reta final
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <Card className="surface-hero flex flex-col items-center justify-center border-0 p-10 text-center">
          <Shield className="size-10 text-accent" />
          <p className="mt-5 font-display text-4xl font-extrabold leading-none text-gold-gradient sm:text-5xl">
            20/09/2026
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/75">
            Data da prova
          </p>
          <p className="mt-6 text-sm text-background/70">
            27 dias de cronograma até lá.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Receive() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="O que você recebe" title="Tudo o que você recebe" />
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
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {[
            { icon: Smartphone, t: "Celular" },
            { icon: Globe2, t: "Tablet" },
            { icon: FileText, t: "Computador" },
          ].map(({ icon: Icon, t }) => (
            <Badge
              key={t}
              variant="secondary"
              className="rounded-full px-3.5 py-1.5 text-sm font-medium"
            >
              <Icon className="mr-1.5 size-3.5" />
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Escolha seu material"
          title="Banco de questões + revisão estratégica GCM Porto Velho 2026"
        />
        <div className="mt-14 grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
          {/* Plano Básico */}
          <Card className="flex flex-col p-7 sm:p-8">
            <div className="flex items-center gap-2 text-accent-foreground">
              <MapPin className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Oferta de entrada
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold uppercase text-foreground">
              100 Questões de Porto Velho
            </h3>
            <div className="mt-3">
              <span className="font-display text-4xl font-extrabold text-foreground">
                {PRECO_BASICO}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para quem quer começar pelos conhecimentos locais e treinar
              História e Geografia de Porto Velho.
            </p>
            <Separator className="my-6" />
            <ul className="space-y-3 text-sm">
              {[
                "100 questões",
                "História de Porto Velho",
                "Geografia de Porto Velho",
                "Gabarito comentado",
                "Material digital",
                "Acesso imediato",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-accent-foreground" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="xl" className="mt-7 w-full">
              <a href="#topo">Quero as 100 questões</a>
            </Button>
          </Card>

          {/* Plano Completo */}
          <Card className="price-featured relative flex flex-col overflow-hidden p-7 sm:p-9">
            <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-2xl bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Award className="size-3.5" /> Mais completo
            </div>
            <div className="flex items-center gap-2 text-accent-foreground">
              <Shield className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Material completo
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-foreground">
              GCM Porto Velho 2026
            </h3>
            <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-accent-foreground">
              800 questões + bônus de revisão
            </p>
            <div className="mt-4">
              {PRECO_COMPLETO ? (
                <span className="font-display text-4xl font-extrabold text-foreground">
                  {PRECO_COMPLETO}
                </span>
              ) : (
                <span className="font-display text-2xl font-bold text-muted-foreground">
                  Valor em breve
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O material completo para quem quer treinar os principais conteúdos
              e organizar sua preparação até a prova.
            </p>
            <Separator className="my-6" />
            <ul className="grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                "800 questões organizadas",
                "Gabarito comentado",
                "10 mapas mentais",
                "Cronograma de 27 dias",
                "História de Porto Velho",
                "Geografia de Porto Velho",
                "Direito Administrativo",
                "Direito Constitucional",
                "Direitos Humanos",
                "Direito Penal + Processo Penal",
                "Legislação e Trânsito",
                "Conhecimentos relacionados à Guarda Municipal",
                "Material digital",
                "Acesso imediato",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="xl" className="mt-7 w-full shadow-lg">
              <a href="#topo">
                Quero o material completo
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
    <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
      <Card className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
          <Scale className="size-8" />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            7 dias de garantia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Conheça o material, veja sua estrutura e avalie se ele atende às suas
            expectativas.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Se dentro de 7 dias você entender que o material não é para você,
            poderá solicitar o reembolso conforme as condições da compra.
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
        <Gavel className="mx-auto size-12 text-accent" />
        <h2 className="mt-6 font-display text-3xl font-extrabold uppercase text-background sm:text-5xl">
          A prova está marcada.{" "}
          <span className="text-gold-gradient">20 de setembro.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-background/80">
          Comece agora a resolver questões, descobrir seus pontos fracos e
          organizar sua reta final.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-9 shadow-lg">
          <a href="#planos">
            Quero começar agora
            <ArrowRight className="size-4" />
          </a>
        </Button>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-background/70">
          GCM Porto Velho 2026 • Questões + Revisão Estratégica
        </p>
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
              GCM Porto Velho 2026 — 800 Questões
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
