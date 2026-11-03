import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const en = {
  nav: { home: "Home", challenge: "The Challenge", solution: "Our Solution", how: "How It Works", about: "About", contact: "Contact", partner: "Partner With Us", menu: "Toggle menu" },
  hero: {
    eyebrow: "Healthcare technology · Amman, Jordan",
    h1a: "Extending Healthcare", h1b: "Beyond", h1c: "Hospital Walls.",
    desc: "HomeNurse empowers healthcare institutions to launch and manage home nursing services under their own brand, using their existing qualified nursing teams — without building their own digital infrastructure from scratch.",
    cta1: "Discover Our Solution", cta2: "Partner With Us",
    facts: [["Business Model", "B2B2C"], ["Customers", "Healthcare Institutions"], ["Stage", "In Development"]],
  },
  dash: {
    org: "Your Institution · Home Nursing", concept: "Concept preview",
    menu: ["Overview", "Requests", "Appointments", "Nurses", "Visits", "Records"],
    stats: [["New requests", "12"], ["Visits today", "8"], ["Nurses on duty", "5"]],
    today: "Today's home visits",
    visits: [
      ["09:30", "Wound care", "Patient A. · Nurse R.", "En route", "Assigned"],
      ["11:00", "IV therapy", "Patient M. · Nurse L.", "Scheduled", "Assigned"],
      ["13:15", "Post-op check", "Patient S. · —", "Assigning", "New request"],
      ["15:40", "Vitals review", "Patient K. · Nurse D.", "Documented", "Completed"],
    ],
    live: "Visit in progress", liveSub: "Nurse arrived at patient's home",
  },
  challenge: {
    eyebrow: "01 — The Opportunity", t1: "Care Is Moving", t2: "Home.",
    desc: "Healthcare institutions already have qualified nursing teams and established patient relationships. However, delivering nursing care at home requires additional coordination, operational workflows, and reliable documentation.",
    quote: "Every home visit depends on four moving parts working together.",
    cards: [
      ["Patient Requests", "Requests may arrive through phone calls, messages, and different communication channels."],
      ["Appointments", "Scheduling requires coordination between patient availability, locations, and nursing schedules."],
      ["Nursing Staff", "Each visit requires assigning an appropriate qualified nurse based on qualifications and availability."],
      ["Documentation", "Home visits require organized follow-up and documentation beyond the institution's physical facility."],
    ],
  },
  solution: {
    eyebrow: "02 — The Solution", t1: "One Platform.", t2: "Your Brand.", t3: "Your Nurses.",
    desc: "HomeNurse provides healthcare institutions with a digital platform to launch and manage home nursing services under their own brand, using their existing qualified nursing teams.",
    feats: ["Centralized patient requests", "Appointment coordination", "Qualified nurse assignment", "Home visit tracking", "Visit documentation", "Organized service management"],
    note: "Interface shown is a design concept of the platform currently in development.",
  },
  how: {
    eyebrow: "03 — How It Works", t1: "From Patient Request to", t2: "Home Visit.",
    steps: [
      ["Patient Request", "A patient requests a home nursing service through the healthcare institution."],
      ["Service Coordination", "The institution organizes the request and schedules the appointment."],
      ["Qualified Nurse Assignment", "An appropriate qualified nurse from the institution's existing team is assigned to the visit."],
      ["Home Visit & Documentation", "The nurse delivers care, while the institution tracks and documents the visit through the platform."],
    ],
  },
  serve: {
    eyebrow: "04 — Who We Serve", t1: "Built for", t2: "Institutions", t3: "That Care.",
    desc: "HomeNurse works behind your brand: patients engage with your institution, while you run the service on our platform.",
    cards: [
      ["Hospitals", "Extend nursing services beyond discharge and provide structured home follow-up through existing nursing teams."],
      ["Private Clinics", "Offer home nursing visits as an extension of clinical services."],
      ["Healthcare Centers", "Organize community-based home nursing services through centralized workflows."],
      ["Care Homes", "Coordinate nursing visits and maintain organized schedules and documentation."],
    ],
  },
  value: {
    eyebrow: "05 — Our Value", t1: "Strategic Value,", t2: "Simply", t3: "Delivered.",
    imgAlt: "A nurse checking an elderly patient's blood pressure at home",
    caption: "Your institution's care, delivered at home.",
    items: [
      ["Beyond the Facility", "Extend nursing services beyond physical facilities into patients' homes."],
      ["Existing Teams", "Enable healthcare institutions to use their current qualified nursing staff."],
      ["Centralized Workflows", "Manage requests, schedules, nurses, and records in one place."],
      ["Simpler Management", "Organize home nursing operations through a centralized digital platform."],
      ["Trusted Home Care", "Support organized and documented home nursing visits through institutional teams."],
      ["No Build From Scratch", "Provide digital infrastructure without requiring institutions to develop their own system from scratch."],
    ],
  },
  about: {
    eyebrow: "06 — About HomeNurse",
    t1: "A Jordanian healthcare technology startup building the digital infrastructure for", t2: "home nursing.",
    mT: "Mission", m: "Help healthcare institutions extend trusted nursing care into patients' homes through organized, accessible, and digitally supported services.",
    wT: "Where We Are", w: "HomeNurse is currently in development. We are refining our platform and validating our business model with healthcare institutions in Jordan.",
  },
  contact: {
    eyebrow: "07 — Partnerships", t1: "Let's Extend Healthcare", t2: "Together.",
    desc: "HomeNurse is developing the digital infrastructure for institution-led home nursing services. We are seeking investment opportunities and strategic partnerships with healthcare institutions and stakeholders who share our vision for extending organized nursing care into patients' homes.",
    name: "Full Name", org: "Organization", email: "Email", type: "Inquiry Type", message: "Message",
    types: ["Investment", "Healthcare Partnership", "Strategic Collaboration", "General Inquiry"],
    choose: "Select an inquiry type", submit: "Get in Touch",
    errors: { name: "Please enter your full name.", org: "Please enter your organization.", email: "Please enter a valid email address.", type: "Please select an inquiry type.", message: "Please write a short message (at least 10 characters)." },
    pending: "Thank you — your details look good. Online submissions are not active yet; official contact channels will be published here shortly.",
  },
  footer: { city: "Amman, Jordan", rights: "All rights reserved." },
};

type Dict = typeof en;

const ar: Dict = {
  nav: { home: "الرئيسية", challenge: "التحدي", solution: "الحل", how: "آلية العمل", about: "من نحن", contact: "تواصل معنا", partner: "كن شريكاً", menu: "فتح القائمة" },
  hero: {
    eyebrow: "تكنولوجيا الرعاية الصحية · عمّان، الأردن",
    h1a: "نمتدّ بالرعاية الصحية", h1b: "إلى ما بعد", h1c: "جدران المستشفى.",
    desc: "تمكّن HomeNurse المؤسسات الصحية من إطلاق خدمات التمريض المنزلي وإدارتها تحت علامتها التجارية الخاصة، بالاعتماد على كوادرها التمريضية المؤهلة، ودون الحاجة إلى بناء بنية رقمية خاصة بها من الصفر.",
    cta1: "اكتشف حلّنا", cta2: "كن شريكاً",
    facts: [["نموذج العمل", "B2B2C"], ["العملاء", "المؤسسات الصحية"], ["المرحلة", "قيد التطوير"]],
  },
  dash: {
    org: "مؤسستك · التمريض المنزلي", concept: "تصوّر مبدئي",
    menu: ["نظرة عامة", "الطلبات", "المواعيد", "الممرضون", "الزيارات", "السجلات"],
    stats: [["طلبات جديدة", "12"], ["زيارات اليوم", "8"], ["ممرضون مناوبون", "5"]],
    today: "الزيارات المنزلية اليوم",
    visits: [
      ["09:30", "العناية بالجروح", "المريض أ. · الممرضة ر.", "في الطريق", "تم التعيين"],
      ["11:00", "علاج وريدي", "المريض م. · الممرضة ل.", "مجدولة", "تم التعيين"],
      ["13:15", "متابعة بعد العملية", "المريض س. · —", "قيد التعيين", "طلب جديد"],
      ["15:40", "قياس المؤشرات الحيوية", "المريض ك. · الممرض د.", "موثّقة", "مكتملة"],
    ],
    live: "زيارة جارية", liveSub: "وصل الممرض إلى منزل المريض",
  },
  challenge: {
    eyebrow: "٠١ — الفرصة", t1: "الرعاية تنتقل إلى", t2: "المنزل.",
    desc: "تمتلك المؤسسات الصحية كوادر تمريضية مؤهلة وعلاقات راسخة مع مرضاها، غير أنّ تقديم الرعاية التمريضية في المنزل يتطلب تنسيقاً إضافياً وإجراءات تشغيلية وتوثيقاً موثوقاً.",
    quote: "كل زيارة منزلية تعتمد على أربعة عناصر يجب أن تعمل معاً.",
    cards: [
      ["طلبات المرضى", "قد تصل الطلبات عبر المكالمات الهاتفية والرسائل وقنوات تواصل متعددة."],
      ["المواعيد", "تتطلب الجدولة تنسيقاً بين توفر المريض وموقعه وجداول الكادر التمريضي."],
      ["الكادر التمريضي", "تحتاج كل زيارة إلى تعيين ممرض مؤهل ومناسب وفق مؤهلاته ومدى توفره."],
      ["التوثيق", "تتطلب الزيارات المنزلية متابعة وتوثيقاً منظّمين خارج مرافق المؤسسة."],
    ],
  },
  solution: {
    eyebrow: "٠٢ — الحل", t1: "منصة واحدة.", t2: "علامتك التجارية.", t3: "كادرك التمريضي.",
    desc: "توفّر HomeNurse للمؤسسات الصحية منصة رقمية لإطلاق خدمات التمريض المنزلي وإدارتها تحت علامتها التجارية، بالاعتماد على كوادرها التمريضية المؤهلة.",
    feats: ["مركزية طلبات المرضى", "تنسيق المواعيد", "تعيين الممرض المؤهل", "تتبّع الزيارات المنزلية", "توثيق الزيارات", "إدارة منظّمة للخدمة"],
    note: "الواجهة المعروضة تصوّر تصميمي للمنصة التي ما زالت قيد التطوير.",
  },
  how: {
    eyebrow: "٠٣ — آلية العمل", t1: "من طلب المريض إلى", t2: "الزيارة المنزلية.",
    steps: [
      ["طلب المريض", "يطلب المريض خدمة تمريض منزلي من خلال المؤسسة الصحية."],
      ["تنسيق الخدمة", "تنظّم المؤسسة الطلب وتحدد موعد الزيارة."],
      ["تعيين ممرض مؤهل", "يُعيَّن ممرض مؤهل ومناسب من الكادر الحالي للمؤسسة لتنفيذ الزيارة."],
      ["الزيارة والتوثيق", "يقدّم الممرض الرعاية، بينما تتابع المؤسسة الزيارة وتوثّقها عبر المنصة."],
    ],
  },
  serve: {
    eyebrow: "٠٤ — من نخدم", t1: "صُمّمت", t2: "للمؤسسات", t3: "التي تهتم بالرعاية.",
    desc: "تعمل HomeNurse خلف علامتك التجارية: يتعامل المرضى مع مؤسستك، وتدير أنت الخدمة عبر منصتنا.",
    cards: [
      ["المستشفيات", "امتداد للخدمات التمريضية بعد الخروج من المستشفى، مع متابعة منزلية منظّمة عبر الكوادر الحالية."],
      ["العيادات الخاصة", "تقديم زيارات تمريض منزلية كامتداد للخدمات السريرية."],
      ["المراكز الصحية", "تنظيم خدمات التمريض المنزلي في المجتمع المحلي عبر إجراءات عمل مركزية."],
      ["دور الرعاية", "تنسيق الزيارات التمريضية والحفاظ على جداول وسجلات منظّمة."],
    ],
  },
  value: {
    eyebrow: "٠٥ — قيمتنا", t1: "قيمة استراتيجية،", t2: "بأسلوب", t3: "بسيط.",
    imgAlt: "ممرضة تقيس ضغط الدم لمريض مسنّ في منزله",
    caption: "رعاية مؤسستك، تصل إلى المنزل.",
    items: [
      ["ما بعد المرفق", "توسيع الخدمات التمريضية من المرافق إلى منازل المرضى."],
      ["الكوادر الحالية", "تمكين المؤسسات الصحية من الاستفادة من كوادرها التمريضية المؤهلة."],
      ["إجراءات مركزية", "إدارة الطلبات والجداول والممرضين والسجلات من مكان واحد."],
      ["إدارة أبسط", "تنظيم عمليات التمريض المنزلي عبر منصة رقمية مركزية."],
      ["رعاية منزلية موثوقة", "دعم زيارات تمريض منزلية منظّمة وموثّقة من خلال كوادر المؤسسة."],
      ["دون البناء من الصفر", "بنية رقمية جاهزة دون الحاجة إلى تطوير نظام خاص من البداية."],
    ],
  },
  about: {
    eyebrow: "٠٦ — عن HomeNurse",
    t1: "شركة أردنية ناشئة في تكنولوجيا الرعاية الصحية، تبني البنية الرقمية", t2: "للتمريض المنزلي.",
    mT: "رسالتنا", m: "مساعدة المؤسسات الصحية على إيصال رعاية تمريضية موثوقة إلى منازل المرضى، من خلال خدمات منظّمة وميسّرة ومدعومة رقمياً.",
    wT: "أين نحن الآن", w: "HomeNurse قيد التطوير حالياً. نعمل على تطوير منصتنا والتحقق من نموذج أعمالنا مع مؤسسات صحية في الأردن.",
  },
  contact: {
    eyebrow: "٠٧ — الشراكات", t1: "لنمتدّ بالرعاية الصحية", t2: "معاً.",
    desc: "تطوّر HomeNurse البنية الرقمية لخدمات التمريض المنزلي التي تقودها المؤسسات الصحية. ونتطلع إلى فرص استثمارية وشراكات استراتيجية مع المؤسسات الصحية والجهات المعنية التي تشاركنا رؤيتنا في إيصال رعاية تمريضية منظّمة إلى منازل المرضى.",
    name: "الاسم الكامل", org: "المؤسسة", email: "البريد الإلكتروني", type: "نوع الاستفسار", message: "الرسالة",
    types: ["استثمار", "شراكة صحية", "تعاون استراتيجي", "استفسار عام"],
    choose: "اختر نوع الاستفسار", submit: "تواصل معنا",
    errors: { name: "يرجى إدخال الاسم الكامل.", org: "يرجى إدخال اسم المؤسسة.", email: "يرجى إدخال بريد إلكتروني صحيح.", type: "يرجى اختيار نوع الاستفسار.", message: "يرجى كتابة رسالة قصيرة (١٠ أحرف على الأقل)." },
    pending: "شكراً لك — بياناتك مكتملة. لم يتم تفعيل الإرسال الإلكتروني بعد، وسيتم نشر قنوات التواصل الرسمية هنا قريباً.",
  },
  footer: { city: "عمّان، الأردن", rights: "جميع الحقوق محفوظة." },
};

const dicts = { en, ar };
const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({ lang: "en", t: en, setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("hn-lang");
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("hn-lang", l);
  };
  return <Ctx.Provider value={{ lang, t: dicts[lang], setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
