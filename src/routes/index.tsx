import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Building2, CalendarClock, ClipboardList, FileCheck2, HeartHandshake, Hospital,
  Inbox, Layers, MapPinned, Menu, Stethoscope, UserCheck, Users, X,
} from "lucide-react";
import logo from "@/assets/homenurse-logo.png";
import homeVisit from "@/assets/home-visit.jpg";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { Button } from "@/components/ui/button";
import { LangProvider, useLang } from "@/lib/i18n";

const desc = "HomeNurse is a Jordanian healthcare technology startup building a proposed B2B SaaS platform that lets healthcare institutions launch and manage home nursing services under their own brand.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HomeNurse — Extending Healthcare Beyond Hospital Walls" },
      { name: "description", content: desc },
      { property: "og:title", content: "HomeNurse — Extending Healthcare Beyond Hospital Walls" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_JO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LangProvider>
      <Index />
    </LangProvider>
  ),
});

function useReveal(dep: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Index() {
  const { lang } = useLang();
  useReveal(lang);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">{lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
      <Header />
      <main id="main">
        <Hero />
        <Opportunity />
        <Solution />
        <HowItWorks />
        <WhoWeServe />
        <Difference />
        <Value />
        <BusinessModel />
        <Pilot />
        <CurrentStage />
        <About />
        <Team />
        <TheAsk />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

function SectionHead({ eyebrow, title, children, light }: { eyebrow: string; title: ReactNode; children?: ReactNode; light?: boolean }) {
  return (
    <div className="reveal max-w-2xl">
      <p className={light ? "eyebrow !text-muted" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {children && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{children}</p>}
    </div>
  );
}

function number(n: number) { return String(n).padStart(2, "0"); }

const Serif = ({ children }: { children: ReactNode }) => <span className="font-display font-normal italic">{children}</span>;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-border bg-card/70 p-1 text-xs font-bold" role="group" aria-label="Language">
      {(["en", "ar"] as const).map((l) => (
        <Button variant="ghost" size="sm" key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition ${lang === l ? "bg-primary text-primary-foreground" : "text-primary hover:bg-muted"}`}>
          {l === "en" ? "EN" : "AR"}
        </Button>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const nav = [["home", t.nav.home], ["challenge", t.nav.challenge], ["solution", t.nav.solution], ["how", t.nav.how], ["model", t.nav.model], ["team", t.nav.team], ["ask", t.nav.ask]];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" aria-label="HomeNurse"><img src={logo} alt="HomeNurse" className="h-10 w-auto sm:h-11" width={1155} height={395} /></a>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a href="#pilot" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-secondary xl:inline-flex">{t.nav.partner}</a>
          <Button variant="ghost" size="icon" className="rounded-full text-primary xl:hidden" onClick={() => setOpen(!open)} aria-label={t.nav.menu} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-6 xl:hidden" aria-label="Mobile">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg font-bold text-primary">{l}</a>)}
          <a href="#pilot" onClick={() => setOpen(false)} className="mt-5 flex justify-center rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground">{t.nav.partner}</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section id="home" className="grain-mint relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" /> {h.eyebrow}
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            {h.h1a} <Serif>{h.h1b}</Serif> {h.h1c}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.desc}</p>
          <p className="mt-3 text-sm font-bold text-primary">{h.clarification}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#solution" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:bg-secondary">
              {h.cta1} <ArrowRight className="flip-rtl h-4 w-4" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-full border border-primary/25 px-7 py-4 font-bold text-primary transition hover:bg-card">{h.cta2}</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-[.8fr_1fr_1.2fr] gap-3 border-t border-border pt-6 text-sm">
            {h.facts.map(([k, v]) => (
              <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="mt-1 font-bold text-primary">{v}</dd></div>
            ))}
          </dl>
        </div>
        <div className="animate-rise [animation-delay:200ms]"><DashboardMockup /></div>
      </div>
    </section>
  );
}

function Opportunity() {
  const { t } = useLang();
  const c = t.challenge;
  const icons = [Inbox, CalendarClock, Users, FileCheck2];
  return (
    <section id="challenge" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHead eyebrow={c.eyebrow} title={<>{c.t1} <Serif>{c.t2}</Serif></>}>{c.desc}</SectionHead>
          <p className="reveal font-display text-3xl italic leading-snug text-secondary sm:text-4xl">“{c.quote}”</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {c.cards.map(([title, d], i) => {
            const Icon = icons[i] ?? Inbox;
            return (
              <div key={title} className="reveal bg-background p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="h-6 w-6 text-secondary" />
                <h3 className="mt-6 text-xl font-extrabold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            );
          })}
        </div>
        <p className="reveal mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{c.closing}</p>
      </div>
    </section>
  );
}

function Solution() {
  const { t } = useLang();
  const s = t.solution;
  const icons = [Inbox, CalendarClock, UserCheck, MapPinned, ClipboardList, Layers, HeartHandshake, FileCheck2];
  return (
    <section id="solution" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead light eyebrow={s.eyebrow} title={<>{s.t1} <Serif>{s.t2}</Serif> {s.t3}</>}>{s.desc}</SectionHead>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal"><DashboardMockup /></div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {s.feats.map((f, i) => {
              const Icon = icons[i] ?? Layers;
              return (
                <li key={f} className="reveal flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="font-bold">{f}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="reveal mt-10 text-sm text-primary-foreground/70">{s.note}</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useLang();
  const h = t.how;
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={h.eyebrow} title={<>{h.t1} <Serif>{h.t2}</Serif></>} />
        <ol className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-5">
          <div className="absolute top-7 start-7 end-7 hidden h-px bg-secondary/30 lg:block" aria-hidden />
          {h.steps.map(([title, d], i) => (
            <li key={title} className="reveal workflow-step relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground ring-8 ring-background">{number(i + 1)}</span>
              <h3 className="mt-6 text-xl font-extrabold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const { t } = useLang();
  const s = t.serve;
  const icons = [Hospital, Stethoscope, Building2, HeartHandshake];
  return (
    <section className="bg-muted py-24 sm:py-32" aria-labelledby="serve-h">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={s.eyebrow} title={<span id="serve-h">{s.t1} <Serif>{s.t2}</Serif> {s.t3}</span>}>{s.desc}</SectionHead>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map(([title, d], i) => {
            const Icon = icons[i] ?? Hospital;
            return (
              <article key={title} className="reveal group rounded-3xl bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="h-8 w-8 text-secondary transition group-hover:text-primary" />
                <h3 className="mt-10 text-2xl font-extrabold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Value() {
  const { t } = useLang();
  const v = t.value;
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="reveal relative">
          <img src={homeVisit} alt={v.imgAlt} loading="lazy" decoding="async" width={1280} height={960} className="h-full min-h-80 w-full rounded-3xl object-cover shadow-soft" />
          <div className="absolute end-5 bottom-5 start-5 rounded-2xl bg-card/90 p-5 backdrop-blur sm:end-auto sm:max-w-xs">
            <p className="font-display text-2xl italic leading-tight text-primary">{v.caption}</p>
          </div>
        </div>
        <div>
          <SectionHead eyebrow={v.eyebrow} title={<>{v.t1} <Serif>{v.t2}</Serif> {v.t3}</>} />
          <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {v.items.map(([title, d], i) => (
              <div key={title} className="reveal border-t border-border py-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="text-xs font-bold text-secondary">{number(i + 1)}</p>
                <h3 className="mt-2 text-lg font-extrabold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="about" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="eyebrow reveal">{a.eyebrow}</p>
        <h2 className="reveal mt-8 text-3xl font-bold leading-snug tracking-tight text-primary sm:text-5xl sm:leading-[1.2]">
          {a.t1} <Serif>{a.t2}</Serif>
        </h2>
        <div className="mt-14 grid gap-6 text-start sm:grid-cols-2">
          <div className="reveal rounded-3xl bg-background p-8">
            <h3 className="eyebrow">{a.mT}</h3>
            <p className="mt-3 text-lg leading-relaxed">{a.m}</p>
          </div>
          <div className="reveal rounded-3xl bg-muted p-8">
            <h3 className="eyebrow">{a.wT}</h3>
            <p className="mt-3 text-lg leading-relaxed">{a.w}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberCards({ items, light = false, four = false }: { items: string[][]; light?: boolean; four?: boolean }) {
  return <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${four ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
    {items.map(([title, text], i) => <article key={title} className={`reveal rounded-3xl p-7 ${light ? "border border-primary-foreground/20 bg-primary-foreground/5" : "bg-card border border-border"}`}>
      <span className={`text-sm font-bold ${light ? "text-muted" : "text-secondary"}`}>{number(i + 1)}</span>
      <h3 className={`mt-4 text-xl font-extrabold ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h3>
      <p className={`mt-3 text-base leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{text}</p>
    </article>)}
  </div>;
}

function Difference() {
  const { t } = useLang(); const d = t.difference;
  return <section id="difference" className="bg-card py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead eyebrow={d.eyebrow} title={d.title}>{d.desc}</SectionHead>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {d.columns.map((col, i) => <div key={col.title} className={`reveal border-t-2 pt-6 ${i ? "border-secondary" : "border-border"}`}>
        <h3 className="text-2xl font-extrabold text-primary">{col.title}</h3>
        <ul className="mt-5 space-y-3">{col.items.map(item => <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />{item}</li>)}</ul>
      </div>)}
    </div>
  </div></section>;
}

function BusinessModel() {
  const { t } = useLang(); const m = t.model;
  return <section id="model" className="bg-muted py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead eyebrow={m.eyebrow} title={m.title} />
    <div className="reveal mt-6 max-w-4xl space-y-4 text-lg leading-relaxed text-muted-foreground">{m.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
    <NumberCards items={m.cards} />
  </div></section>;
}

function Pilot() {
  const { t } = useLang(); const p = t.pilot;
  return <section id="pilot" className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead eyebrow={p.eyebrow} title={p.title}>{p.desc}</SectionHead>
    <NumberCards four items={p.cards} />
  </div></section>;
}

function CurrentStage() {
  const { t } = useLang(); const s = t.stage;
  return <section id="stage" className="bg-primary py-20 text-primary-foreground sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead light eyebrow={s.eyebrow} title={s.title} />
    <div className="mt-10 grid gap-8 md:grid-cols-3">{s.columns.map((col, i) => <div key={col.title} className="reveal border-t border-primary-foreground/25 pt-6">
      <span className="text-sm font-bold text-muted">{number(i + 1)}</span><h3 className="mt-3 text-2xl font-bold">{col.title}</h3>
      <ul className="mt-4 space-y-2 text-base text-primary-foreground/80">{col.items.map(item => <li key={item} className="flex gap-3"><span aria-hidden>·</span>{item}</li>)}</ul>
    </div>)}</div>
  </div></section>;
}

function Team() {
  const { t } = useLang(); const team = t.team;
  return <section id="team" className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead eyebrow={team.eyebrow} title={team.title}>{team.desc}</SectionHead>
    <div className="mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">{team.members.map(([initial,name,role,job]) => <article key={name} className="reveal flex items-start gap-5 rounded-3xl border border-border bg-card p-7">
      <span aria-hidden className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-muted font-display text-4xl text-primary">{initial}</span>
      <div><h3 className="text-2xl font-extrabold text-primary">{name}</h3><p className="mt-2 font-semibold text-primary">{role}</p><p className="mt-1 text-muted-foreground">{job}</p></div>
    </article>)}</div>
  </div></section>;
}

function TheAsk() {
  const { t } = useLang(); const a = t.ask;
  return <section id="ask" className="bg-primary py-20 text-primary-foreground sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHead light eyebrow={a.eyebrow} title={a.title} />
    <NumberCards light items={a.cards} />
    <p className="reveal mt-12 max-w-3xl font-display text-3xl italic leading-relaxed text-muted">{a.closing}</p>
  </div></section>;
}

function Closing() {
  const { t } = useLang(); const c = t.closing;
  return <section id="closing" className="bg-muted py-24 sm:py-32"><div className="reveal mx-auto max-w-4xl px-5 text-center sm:px-8">
    <img src={logo} alt="HomeNurse" width={1155} height={395} loading="lazy" className="mx-auto h-auto w-56 sm:w-72" />
    <h2 className="mt-10 text-4xl font-extrabold leading-tight text-primary sm:text-5xl">{c.title}</h2>
    <p className="mt-5 text-xl text-muted-foreground">{c.desc}</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Button asChild className="h-auto whitespace-normal rounded-full px-6 py-4"><a href="#home">{c.home}</a></Button>
      <Button asChild variant="outline" className="h-auto whitespace-normal rounded-full px-6 py-4"><a href="#how">{c.workflow}<ArrowRight className="flip-rtl" /></a></Button>
    </div>
  </div></section>;
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <img src={logo} alt="HomeNurse" className="h-9 w-auto" width={1155} height={395} loading="lazy" />
        <div className="text-center sm:text-end"><p>{t.footer.line}</p><p className="mt-2">© {new Date().getFullYear()} HomeNurse · {t.footer.city} · {t.footer.rights}</p></div>
      </div>
    </footer>
  );
}
