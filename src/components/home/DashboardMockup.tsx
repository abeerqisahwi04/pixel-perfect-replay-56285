import { Calendar, ClipboardCheck, Home, MapPin, UserRound } from "lucide-react";

const visits = [
  { time: "09:30", patient: "Patient A.", service: "Wound care", nurse: "Nurse R.", status: "En route" },
  { time: "11:00", patient: "Patient M.", service: "IV therapy", nurse: "Nurse L.", status: "Scheduled" },
  { time: "13:15", patient: "Patient S.", service: "Post-op check", nurse: "Nurse H.", status: "Assigning" },
  { time: "15:40", patient: "Patient K.", service: "Vitals review", nurse: "Nurse D.", status: "Scheduled" },
];

/** Illustrative concept of the provider dashboard (sample data, not live). */
export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="ml-3 text-[11px] font-semibold text-muted-foreground">Your Hospital · Home Nursing</span>
          <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-primary">Concept preview</span>
        </div>
        <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[9rem_1fr]">
          <aside className="space-y-1 border-r border-border bg-background/60 p-2 sm:p-3">
            {[
              [Home, "Overview", true],
              [ClipboardCheck, "Requests", false],
              [Calendar, "Schedule", false],
              [UserRound, "Nurses", false],
              [MapPin, "Visits", false],
            ].map(([Icon, label, active]) => {
              const I = Icon as typeof Home;
              return (
                <div
                  key={label as string}
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                >
                  <I className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden sm:inline">{label as string}</span>
                </div>
              );
            })}
          </aside>
          <div className="p-3 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                ["New requests", "12"],
                ["Visits today", "8"],
                ["Nurses on duty", "5"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-background p-2.5 sm:p-3">
                  <p className="text-[10px] font-semibold text-muted-foreground">{k}</p>
                  <p className="mt-1 text-lg font-extrabold text-primary sm:text-2xl">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 mb-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Today's home visits</p>
            <div className="divide-y divide-border rounded-xl border border-border">
              {visits.map((v) => (
                <div key={v.time} className="flex items-center gap-3 px-3 py-2.5 text-xs">
                  <span className="w-10 font-bold text-primary">{v.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{v.service}</p>
                    <p className="truncate text-[10px] text-muted-foreground">{v.patient} · {v.nurse}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${v.status === "En route" ? "bg-secondary text-secondary-foreground" : "bg-muted text-primary"}`}
                  >
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="animate-floaty absolute -bottom-6 -left-4 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-float sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-primary"><MapPin className="h-4 w-4" /></span>
          <div>
            <p className="text-xs font-bold">Visit in progress</p>
            <p className="text-[10px] text-muted-foreground">Arrived at patient home</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-secondary" /></div>
      </div>
    </div>
  );
}
