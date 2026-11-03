import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, Building2, CalendarClock, ClipboardList, FileCheck2, HeartHandshake, Hospital,
  Inbox, Layers, MapPinned, Menu, Stethoscope, UserCheck, Users, X,
} from "lucide-react";
import logo from "@/assets/homenurse-logo.png";
import homeVisit from "@/assets/home-visit.jpg";
import { DashboardMockup } from "@/components/home/DashboardMockup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HomeNurse — Extending Healthcare Beyond Hospital Walls" },
      { name: "description", content: "HomeNurse is a Jordanian healthcare technology startup building a platform for providers to launch and manage branded home nursing services." },
      { property: "og:title", content: "HomeNurse — Extending Healthcare Beyond Hospital Walls" },
      { property: "og:description", content: "A B2B platform enabling hospitals, clinics and care homes to run home nursing under their own brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "home"], ["The Challenge", "challenge"], ["Our Solution", "solution"],
  ["How It Works", "how"], ["About", "about"], ["Contact", "contact"],
] as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
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
      <h2 className={`mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {children && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{children}</p>}
    </div>
  );
}

const Serif = ({ children }: { children: ReactNode }) => <span className="font-display font-normal italic">{children}</span>;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" aria-label="HomeNurse home"><img src={logo} alt="HomeNurse" className="h-10 w-auto sm:h-11" width={1155} height={395} /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-foreground/70 transition-colors hover:text-primary">{l}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-secondary lg:inline-flex">Partner With Us</a>
        <button className="rounded-full p-2 text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 lg:hidden" aria-label="Mobile">
          {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg font-bold text-primary">{l}</a>)}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="grain-mint relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Healthcare technology · Amman, Jordan
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Extending Healthcare <Serif>Beyond</Serif> Hospital Walls.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            HomeNurse empowers healthcare providers to launch and manage home nursing services under their own brand, using their existing nursing teams.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#solution" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:bg-secondary">
              Discover Our Solution <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-primary/25 px-7 py-4 font-bold text-primary transition hover:bg-card">Partner With Us</a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            {[["Model", "B2B2C"], ["Customers", "Providers"], ["Stage", "In development"]].map(([k, v]) => (
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
  const parts = [
    [Inbox, "Requests", "Arrive by phone, message and walk-in — scattered across channels."],
    [CalendarClock, "Appointments", "Need coordinating around patients, locations and availability."],
    [Users, "Nursing staff", "Must be matched to the right visit by qualification and schedule."],
    [FileCheck2, "Documentation", "Has to be captured reliably, outside the facility's systems."],
  ] as const;
  return (
    <section id="challenge" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHead eyebrow="01 — The Opportunity" title={<>Care is moving <Serif>home.</Serif></>}>
            Patients increasingly expect quality care where they live. Healthcare institutions already have the nurses and the trust — what's missing is the infrastructure to run home services well.
          </SectionHead>
          <p className="reveal font-display text-3xl italic leading-snug text-secondary sm:text-4xl">
            "Delivering one home visit means coordinating four moving parts — every single time."
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {parts.map(([Icon, t, d], i) => (
            <div key={t} className="reveal bg-background p-8" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon className="h-6 w-6 text-secondary" />
              <h3 className="mt-6 text-xl font-extrabold text-primary">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const feats = [
    [Inbox, "Centralized patient requests"], [CalendarClock, "Appointment coordination"],
    [UserCheck, "Qualified nurse assignment"], [MapPinned, "Home visit tracking"],
    [ClipboardList, "Visit documentation"], [Layers, "Organized service management"],
  ] as const;
  return (
    <section id="solution" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead light eyebrow="02 — The Solution" title={<>One platform. <Serif>Your brand.</Serif> Your nurses.</>}>
          HomeNurse is the digital platform that lets healthcare institutions launch and manage home nursing services under their own name — without building a system from scratch.
        </SectionHead>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal"><DashboardMockup /></div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {feats.map(([Icon, t], i) => (
              <li key={t} className="reveal flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-primary"><Icon className="h-5 w-5" /></span>
                <span className="font-bold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="reveal mt-10 text-sm text-primary-foreground/60">Interface shown is a design concept of the platform currently in development.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Patient Request", "A patient requests a home nursing service."],
    ["02", "Service Coordination", "The institution organizes the request and schedules the appointment."],
    ["03", "Qualified Nurse Assignment", "An appropriate qualified nurse is assigned to the visit."],
    ["04", "Home Visit & Documentation", "The nurse delivers care; the visit is tracked and documented."],
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="03 — How It Works" title={<>From request to <Serif>doorstep.</Serif></>} />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="absolute top-7 left-7 right-7 hidden h-px bg-secondary/30 lg:block" aria-hidden />
          {steps.map(([n, t, d], i) => (
            <li key={n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground ring-8 ring-background">{n}</span>
              <h3 className="mt-6 text-xl font-extrabold text-primary">{t}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const items = [
    [Hospital, "Hospitals", "Continue care after discharge with structured home follow-up from your own team."],
    [Stethoscope, "Private Clinics", "Offer home visits to your patients as a natural extension of your practice."],
    [Building2, "Healthcare Centers", "Reach patients across your community without expanding physical space."],
    [HeartHandshake, "Care Homes", "Coordinate visiting nursing care with clear schedules and records."],
  ] as const;
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="04 — Who We Serve" title={<>Built for <Serif>institutions</Serif> that care.</>}>
          HomeNurse works behind your brand. Patients see your institution — you get the platform to run the service.
        </SectionHead>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, t, d], i) => (
            <article key={t} className="reveal group rounded-3xl bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon className="h-8 w-8 text-secondary transition group-hover:text-primary" />
              <h3 className="mt-10 text-2xl font-extrabold text-primary">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Value() {
  const vals = [
    ["Beyond the facility", "Extend services past physical walls into patients' homes."],
    ["Existing teams", "Put your current nursing staff to work in a new channel."],
    ["Centralized workflows", "Requests, schedules, nurses and records in one place."],
    ["Simpler management", "Run home nursing without manual coordination overhead."],
    ["Reliable home care", "Support organized, consistent, documented visits."],
    ["No build from scratch", "Skip developing your own digital infrastructure."],
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="reveal relative">
          <img src={homeVisit} alt="A nurse checking an elderly patient's blood pressure at home" loading="lazy" width={1280} height={960} className="h-full min-h-80 w-full rounded-3xl object-cover shadow-soft" />
          <div className="absolute right-5 bottom-5 left-5 rounded-2xl bg-card/90 p-5 backdrop-blur sm:right-auto sm:max-w-xs">
            <p className="font-display text-2xl italic leading-tight text-primary">Your institution's care, delivered at home.</p>
          </div>
        </div>
        <div>
          <SectionHead eyebrow="05 — Our Value" title={<>Strategic value, <Serif>simply</Serif> delivered.</>} />
          <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {vals.map(([t, d], i) => (
              <div key={t} className="reveal border-t border-border py-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="text-xs font-bold text-secondary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-extrabold text-primary">{t}</h3>
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
  return (
    <section id="about" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="eyebrow reveal">06 — About HomeNurse</p>
        <p className="reveal mt-8 text-3xl font-bold leading-snug tracking-tight text-primary sm:text-5xl sm:leading-[1.15]">
          A Jordanian healthcare technology startup building the digital backbone for <Serif>home nursing.</Serif>
        </p>
        <div className="mt-14 grid gap-6 text-left sm:grid-cols-2">
          <div className="reveal rounded-3xl bg-background p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-3 text-lg leading-relaxed">Help healthcare providers extend trusted care into patients' homes — organized, documented and under their own brand.</p>
          </div>
          <div className="reveal rounded-3xl bg-muted p-8">
            <p className="eyebrow">Where we are</p>
            <p className="mt-3 text-lg leading-relaxed">Our platform is currently in development. We're seeking investors and healthcare partners to shape and launch it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSent(true);
    e.currentTarget.reset();
  };
  const field = "w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/45 outline-none transition focus:border-muted focus:bg-primary-foreground/10";
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <SectionHead light eyebrow="07 — Partnerships" title={<>Let's Extend Healthcare <Serif>Together.</Serif></>}>
          Interested in exploring how HomeNurse can support your healthcare organization or create new opportunities for collaboration?
        </SectionHead>
        <form onSubmit={onSubmit} noValidate className="reveal space-y-4 rounded-3xl border border-primary-foreground/15 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block"><span className="sr-only">Full Name</span><input required name="name" placeholder="Full Name" className={field} autoComplete="name" /></label>
            <label className="block"><span className="sr-only">Organization</span><input required name="org" placeholder="Organization" className={field} autoComplete="organization" /></label>
          </div>
          <label className="block"><span className="sr-only">Email</span><input required type="email" name="email" placeholder="Email" className={field} autoComplete="email" /></label>
          <label className="block"><span className="sr-only">Message</span><textarea required name="message" rows={5} placeholder="Message" className={field} /></label>
          <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-4 font-bold text-primary transition hover:bg-muted">
            Get in Touch <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          {sent && (
            <p role="status" className="rounded-xl bg-primary-foreground/10 p-4 text-sm">
              Thank you for your interest. Online submissions are being finalized — official contact details will be published here shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <img src={logo} alt="HomeNurse" className="h-9 w-auto" width={1155} height={395} loading="lazy" />
        <p>© {new Date().getFullYear()} HomeNurse · Amman, Jordan</p>
        <p>contact@[official-email-pending]</p>
      </div>
    </footer>
  );
}
