import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  BookOpen,
  Brain,
  Target,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Gift,
  CalendarDays,
  Award,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  Scale,
  Gavel,
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
import gcmMockup from "@/assets/gcm-mockup.png";
import kitCompletoAsset from "@/assets/kit-completo.png.asset.json";

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
        title: "GCM Porto Velho 2026 — Questões + Revisão Estratégica",
      },
      {
        name: "description",
        content:
          "Material digital com questões organizadas em blocos de 80, gabarito comentado, 10 mapas mentais e cronograma de 27 dias até a prova da GCM Porto Velho 2026.",
      },
      {
        property: "og:title",
        content: "GCM Porto Velho 2026 — Questões + Revisão Estratégica",
      },
      {
        property: "og:description",
        content:
          "Treine com blocos de 80 questões, gabarito comentado, 10 mapas mentais e cronograma de 27 dias até 20/09/2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});



const mapasMentais = [
  "História de Porto Velho",
  "Geografia de Porto Velho",
  "Guarda Municipal",
  "Direito Administrativo",
  "Direito Constitucional",
  "Direito Penal e Processo Penal",
  "Direitos Humanos",
  "Legislação de Trânsito",
  "Revisão Final GCM Porto Velho",
];

const cronogramaPontos = [
  "O que estudar",
  "Quando resolver questões",
  "Quando revisar",
  "Quando fazer simulados",
  "Quando revisar seus erros",
  "Como organizar os últimos dias",
  "O que fazer na véspera da prova",
];

const publicoAlvo = [
  "Está se preparando para a GCM Porto Velho 2026",
  "Quer resolver mais questões durante a preparação",
  "Quer testar seus conhecimentos",
  "Quer identificar seus pontos fracos",
  "Quer revisar de maneira mais rápida",
  "Quer organizar sua reta final",
];

const materialPrincipal = [
  "Blocos de questões",
  "80 questões por bloco",
  "Questões de múltipla escolha",
  "Gabarito comentado",
  "Material digital",
  "Acesso imediato",
];

const faqs = [
  {
    q: "O material é específico para a GCM Porto Velho?",
    a: "Sim. O material foi desenvolvido com foco na preparação para o concurso da Guarda Municipal de Porto Velho 2026.",
  },
  {
    q: "Quantas questões possui cada bloco?",
    a: "Cada bloco possui 80 questões de múltipla escolha, acompanhadas de gabarito comentado.",
  },
  {
    q: "As questões possuem comentários?",
    a: "Sim. O gabarito é apresentado ao final do material com comentários para ajudar na revisão.",
  },
  {
    q: "O que são os mapas mentais?",
    a: "São materiais visuais desenvolvidos para facilitar a revisão dos principais pontos estudados.",
  },
  {
    q: "Quantos mapas mentais recebo?",
    a: "Você recebe 10 mapas mentais de revisão.",
  },
  {
    q: "O que é o cronograma?",
    a: "É um planejamento de 27 dias, criado para organizar a preparação entre 25 de agosto e 20 de setembro de 2026.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. O material é digital e pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "Recebo o material imediatamente?",
    a: "O acesso é disponibilizado após a confirmação da compra.",
  },
  {
    q: "É uma plataforma de aulas?",
    a: "Não. O produto é um material digital de questões e revisão, acompanhado dos bônus.",
  },
  {
    q: "O material garante aprovação?",
    a: "Não. O material é uma ferramenta de preparação. O resultado depende da dedicação, preparação e desempenho individual de cada candidato.",
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
      <ProblemSolution />
      <QuestionsOrganized />
      <Bonuses />
      <ForWhom />
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
              Questões + Revisão Estratégica
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
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-gradient">
          <Shield className="size-3.5" />
          GCM Porto Velho 2026
        </div>
        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] text-background sm:text-5xl lg:text-[3.4rem]">
          <span className="text-gold-gradient">Questões estratégicas</span> para
          a Guarda Municipal de Porto Velho
        </h1>

        {/* Mockup transparente logo após a headline */}
        <div className="relative mt-8 flex justify-center">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-56 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          <img
            src={gcmMockup}
            alt="Mockup do material GCM Porto Velho 2026 — apostila, notebook, tablet e celular com questões, gabarito comentado e mapas mentais"
            width={1240}
            height={804}
            className="relative w-full max-w-3xl drop-shadow-[0_25px_55px_oklch(0.18_0.04_258/0.55)]"
          />
        </div>

        {/* Subheadline após o mockup */}
        <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-background/90">
          Apostila com 800 questões comentadas, simulados e cronograma
          estratégico focado no conteúdo exigido para o concurso da GCM.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-background/85">
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-4 text-accent" /> Questões organizadas
          </span>
          <span className="flex items-center gap-1.5">
            <ClipboardCheck className="size-4 text-accent" /> Gabarito comentado
          </span>
          <span className="flex items-center gap-1.5">
            <Brain className="size-4 text-accent" /> Mapas mentais
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4 text-accent" /> Cronograma de 27
            dias
          </span>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-background/85">
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
    </section>
  );
}

function ProblemSolution() {
  const problemaLista = [
    "Questões espalhadas pela internet",
    "Dificuldade para saber o que revisar",
    "Falta de organização na reta final",
    "Não saber onde estão seus principais erros",
  ];
  const solucaoLista = [
    "Blocos de questões organizados",
    "Gabarito comentado",
    "Mapas mentais para revisão",
    "Cronograma de 27 dias até a prova",
    "Conhecimentos específicos de Porto Velho",
  ];
  const fluxo = ["Estude", "Resolva", "Corrija", "Revise"];

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Topo da seção */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            PROBLEMA <span className="text-muted-foreground">×</span> SOLUÇÃO
          </h2>
          <div className="divider-gold mx-auto mt-5" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A diferença entre estudar de forma desorganizada e treinar com uma
            preparação direcionada para a GCM Porto Velho.
          </p>
        </div>

        {/* Dois cards lado a lado no desktop */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* CARD 1 — PROBLEMA */}
          <div className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-[0_8px_30px_-12px_oklch(0.18_0.04_258/0.10)] sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-foreground/60">
              <XCircle className="size-4 text-foreground/40" />
              ESTUDO DESORGANIZADO
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Materiais espalhados, questões sem organização e excesso de
              informação podem fazer você perder tempo estudando sem saber
              exatamente onde precisa melhorar.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {problemaLista.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-foreground/40">✕</span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2 — SOLUÇÃO (destaque) */}
          <div className="surface-navy relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-[0_18px_45px_-15px_oklch(0.22_0.06_258/0.55)] ring-1 ring-accent/30 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-gold-gradient">
                <CheckCircle2 className="size-4 text-accent" />
                PREPARAÇÃO DIRECIONADA
              </div>
              <p className="leading-relaxed text-background/85">
                Um material organizado para você treinar, corrigir seus erros e
                revisar os principais conteúdos da preparação para a GCM Porto
                Velho 2026.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {solucaoLista.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-background/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Destaque visual inferior */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground sm:text-sm">
          {fluxo.map((s, i, arr) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-gold-gradient">
                {s}
              </span>
              {i < arr.length - 1 && (
                <ArrowRight className="size-4 text-accent/70" />
              )}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-muted-foreground">
          Mais organização para aproveitar melhor cada dia até a prova.
        </p>
      </div>
    </section>
  );
}

function QuestionsOrganized() {
  return (
    <section id="material" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Material por dentro"
        title="Questões organizadas para sua preparação"
        desc="Não fique procurando questões em vários lugares. Você recebe os conteúdos organizados em blocos, com questões de múltipla escolha e gabarito comentado ao final."
      />
      <div className="relative mt-12 flex justify-center">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <img
          src={kitCompletoAsset.url}
          alt="Kit completo GCM Porto Velho 2026 — blocos de questões, gabarito comentado, 10 mapas mentais, cronograma de 27 dias e conhecimentos de Porto Velho"
          width={1379}
          height={502}
          className="relative w-full max-w-4xl drop-shadow-[0_20px_45px_oklch(0.18_0.04_258/0.18)]"
        />
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
                Revise em poucos minutos aquilo que você demorou horas para
                estudar. Uma coleção de mapas mentais para facilitar a revisão dos
                principais conteúdos da preparação.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Entre os mapas:
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {mapasMentais.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Material visual para consultar rapidamente durante sua
                preparação.
              </p>
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
                Cronograma de 27 Dias até a Prova
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Não sabe como organizar os últimos dias? A prova está marcada
                para {DATA_PROVA}. Por isso, você recebe um cronograma para
                organizar sua preparação na reta final.
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
                    25/08 → 20/09
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Um caminho definido até a prova
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Você deixa de estudar de forma aleatória e passa a ter um caminho
                definido até a prova.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Para quem é esse material"
          title="É para você que quer treinar de verdade"
        />
        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {publicoAlvo.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
              <span className="text-sm font-medium text-foreground">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          E também para quem está começando agora. Você pode avançar bloco por
          bloco e utilizar os mapas mentais e o cronograma para organizar seus
          estudos.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Escolha como começar"
          title="Banco de questões + revisão estratégica GCM Porto Velho 2026"
        />
        <div className="mt-14 grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
          {/* Plano Básico */}
          <Card className="flex flex-col p-7 sm:p-8">
            <div className="flex items-center gap-2 text-accent-foreground">
              <MapPin className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Plano básico
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold uppercase text-foreground">
              100 Questões de História e Geografia de Porto Velho
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para quem quer começar pelos conhecimentos locais.
            </p>
            <div className="mt-3">
              <span className="font-display text-4xl font-extrabold text-foreground">
                {PRECO_BASICO}
              </span>
            </div>
            <Separator className="my-6" />
            <ul className="space-y-3 text-sm">
              {[
                "100 questões",
                "História de Porto Velho",
                "Geografia de Porto Velho",
                "Gabarito",
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
                Plano completo
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-foreground">
              GCM Porto Velho 2026
            </h3>
            <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-accent-foreground">
              Questões + Revisão Estratégica
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
              Para quem quer uma preparação mais completa e deseja treinar
              diferentes conteúdos da prova em um único material.
            </p>
            <Separator className="my-6" />
            <ul className="grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                "Blocos de questões",
                "80 questões por bloco",
                "Gabarito comentado",
                "Conhecimentos de Porto Velho",
                "Legislação e conteúdos específicos",
                "10 Mapas Mentais de Revisão",
                "Cronograma de 27 Dias",
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
            Conheça o material antes de decidir. Você terá 7 dias para acessar o
            material e avaliar se ele atende às suas expectativas.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Se entender que o material não é para você, poderá solicitar o
            reembolso conforme as condições da compra.
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
          <span className="text-gold-gradient">20 de setembro de 2026.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-background/80">
          Você pode continuar procurando questões, resumos e materiais
          espalhados... Ou pode começar a organizar sua preparação agora.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium text-background/85">
          Estude. Resolva. Corrija. Revise. E chegue mais preparado para a prova
          da GCM Porto Velho.
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
              GCM Porto Velho 2026
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
