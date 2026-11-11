import { Calendar, ClipboardCheck, FileText, Home, MapPin, UserRound } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [Home, ClipboardCheck, Calendar, UserRound, MapPin, FileText];

/** Illustrative concept of the provider dashboard (sample data, not live). */
export function DashboardMockup() {
  const { t } = useLang();
  const d = t.dash;
  return (
    <div className="relative pb-8 sm:pb-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-soft">
        <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="ms-3 truncate text-[11px] font-semibold text-muted-foreground">{d.org}</span>
          <span className="w-full rounded-full bg-muted px-2 py-1 text-center text-xs font-bold text-primary">{d.concept}</span>
        </div>
        <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[9.5rem_1fr]">
          <aside className="space-y-1 border-e border-border bg-background/60 p-2 sm:p-3">
            {d.menu.map((label, i) => {
              const I = icons[i] ?? Home;
              return (
                <div key={label} className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                  <I className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden truncate sm:inline">{label}</span>
                </div>
              );
            })}
          </aside>
          <div className="min-w-0 p-3 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {d.stats.map(([k, v]) => (
                <div key={k} className="rounded-xl bg-background p-2.5 sm:p-3">
                  <p className="truncate text-[10px] font-semibold text-muted-foreground">{k}</p>
                  <p className="mt-1 text-lg font-extrabold text-primary sm:text-2xl">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 mb-2 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">{d.today}</p>
            <div className="divide-y divide-border rounded-xl border border-border">
              {d.visits.map(([time, service, who, status, req], i) => (
                <div key={time} className="flex items-center gap-3 px-3 py-2.5 text-xs">
                  <span className="w-10 shrink-0 font-bold text-primary" dir="ltr">{time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{service}</p>
                    <p className="truncate text-[10px] text-muted-foreground">{who} · {req}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${i === 0 ? "bg-secondary text-secondary-foreground" : i === 3 ? "bg-navy text-primary-foreground" : "bg-muted text-primary"}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="animate-floaty absolute bottom-0 start-[-1rem] hidden w-60 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-float sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-primary"><MapPin className="h-4 w-4" /></span>
          <div>
            <p className="text-xs font-bold">{d.live}</p>
            <p className="text-[10px] text-muted-foreground">{d.liveSub}</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-secondary" /></div>
      </div>
    </div>
  );
}
