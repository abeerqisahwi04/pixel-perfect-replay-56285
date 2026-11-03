import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, Building2, CalendarClock, ClipboardList, FileCheck2, HeartHandshake, Hospital,
  Inbox, Layers, MapPinned, Menu, Stethoscope, UserCheck, Users, X,
} from "lucide-react";
import logo from "@/assets/homenurse-logo.png";
import homeVisit from "@/assets/home-visit.jpg";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { LangProvider, useLang } from "@/lib/i18n";

const desc = "HomeNurse is a Jordanian healthcare technology startup building a B2B2C platform that lets healthcare institutions launch and manage home nursing services under their own brand.";

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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Opportunity />
        <Solution />
        <HowItWorks />
        <WhoWeServe />
        <Value />
        <About />
        <Contact />
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

const Serif = ({ children }: { children: ReactNode }) => <span className="font-display font-normal italic">{children}</span>;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-border bg-card/70 p-1 text-xs font-bold" role="group" aria-label="Language">
      {(["en", "ar"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition ${lang === l ? "bg-primary text-primary-foreground" : "text-primary hover:bg-muted"}`}>
          {l === "en" ? "EN" : "AR"}
        </button>
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
  const nav = [["home", t.nav.home], ["challenge", t.nav.challenge], ["solution", t.nav.solution], ["how", t.nav.how], ["about", t.nav.about], ["contact", t.nav.contact]];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" aria-label="HomeNurse"><img src={logo} alt="HomeNurse" className="h-10 w-auto sm:h-11" width={1155} height={395} /></a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-secondary xl:inline-flex">{t.nav.partner}</a>
          <button className="rounded-full p-2 text-primary xl:hidden" onClick={() => setOpen(!open)} aria-label={t.nav.menu} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-6 xl:hidden" aria-label="Mobile">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg font-bold text-primary">{l}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-5 flex justify-center rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground">{t.nav.partner}</a>
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
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#solution" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:bg-secondary">
              {h.cta1} <ArrowRight className="flip-rtl h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-primary/25 px-7 py-4 font-bold text-primary transition hover:bg-card">{h.cta2}</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
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
            const Icon = icons[i];
            return (
              <div key={title} className="reveal bg-background p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="h-6 w-6 text-secondary" />
                <h3 className="mt-6 text-xl font-extrabold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const { t } = useLang();
  const s = t.solution;
  const icons = [Inbox, CalendarClock, UserCheck, MapPinned, ClipboardList, Layers];
  return (
    <section id="solution" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead light eyebrow={s.eyebrow} title={<>{s.t1} <Serif>{s.t2}</Serif> {s.t3}</>}>{s.desc}</SectionHead>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal"><DashboardMockup /></div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {s.feats.map((f, i) => {
              const Icon = icons[i];
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
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="absolute top-7 start-7 end-7 hidden h-px bg-secondary/30 lg:block" aria-hidden />
          {h.steps.map(([title, d], i) => (
            <li key={title} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground ring-8 ring-background">{String(i + 1).padStart(2, "0")}</span>
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
            const Icon = icons[i];
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
                <p className="text-xs font-bold text-secondary">{String(i + 1).padStart(2, "0")}</p>
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

type Field = "name" | "org" | "email" | "type" | "message";

function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [done, setDone] = useState(false);
  useEffect(() => { setErrors({}); setDone(false); }, [lang]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: Field) => String(fd.get(k) ?? "").trim();
    const next: Partial<Record<Field, string>> = {};
    if (v("name").length < 2) next.name = c.errors.name;
    if (v("org").length < 2) next.org = c.errors.org;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = c.errors.email;
    if (!v("type")) next.type = c.errors.type;
    if (v("message").length < 10) next.message = c.errors.message;
    setErrors(next);
    setDone(false);
    if (Object.keys(next).length) {
      (e.currentTarget.elements.namedItem(Object.keys(next)[0]) as HTMLElement | null)?.focus();
      return;
    }
    setDone(true);
  };

  const field = (bad?: string) =>
    `w-full rounded-xl border bg-primary-foreground/5 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 outline-none transition focus:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-muted ${bad ? "border-destructive" : "border-primary-foreground/25 focus:border-muted"}`;
  const Err = ({ k }: { k: Field }) => errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm font-semibold text-muted">{errors[k]}</p> : null;
  const aria = (k: Field) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });
  const Label = ({ k, text }: { k: Field; text: string }) => <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-semibold text-primary-foreground/85">{text}</label>;

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <SectionHead light eyebrow={c.eyebrow} title={<>{c.t1} <Serif>{c.t2}</Serif></>}>{c.desc}</SectionHead>
        <form onSubmit={onSubmit} noValidate className="reveal space-y-4 rounded-3xl border border-primary-foreground/15 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label k="name" text={c.name} /><input id="f-name" name="name" className={field(errors.name)} autoComplete="name" {...aria("name")} /><Err k="name" /></div>
            <div><Label k="org" text={c.org} /><input id="f-org" name="org" className={field(errors.org)} autoComplete="organization" {...aria("org")} /><Err k="org" /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label k="email" text={c.email} /><input id="f-email" type="email" name="email" dir="ltr" className={`${field(errors.email)} text-start`} autoComplete="email" {...aria("email")} /><Err k="email" /></div>
            <div>
              <Label k="type" text={c.type} />
              <select id="f-type" name="type" defaultValue="" className={field(errors.type)} {...aria("type")}>
                <option value="" disabled className="text-foreground">{c.choose}</option>
                {c.types.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
              </select>
              <Err k="type" />
            </div>
          </div>
          <div><Label k="message" text={c.message} /><textarea id="f-message" name="message" rows={5} className={field(errors.message)} {...aria("message")} /><Err k="message" /></div>
          <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-4 font-bold text-primary transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-muted focus-visible:outline-none">
            {c.submit} <ArrowRight className="flip-rtl h-4 w-4" />
          </button>
          <div aria-live="polite">
            {done && <p role="status" className="rounded-xl bg-primary-foreground/10 p-4 text-sm leading-relaxed">{c.pending}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <img src={logo} alt="HomeNurse" className="h-9 w-auto" width={1155} height={395} loading="lazy" />
        <p>© {new Date().getFullYear()} HomeNurse · {t.footer.city} · {t.footer.rights}</p>
      </div>
    </footer>
  );
}
