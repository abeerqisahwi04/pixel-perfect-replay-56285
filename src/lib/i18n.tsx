import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

export const en = {
  nav: { home: "Home", challenge: "The Opportunity", solution: "Our Solution", how: "How It Works", model: "Business Model", team: "Our Team", ask: "The Ask", partner: "View Our Next Step", menu: "Toggle menu" },
  hero: {
    eyebrow: "Healthcare technology · Amman, Jordan",
    h1a: "Extending Healthcare", h1b: "Beyond", h1c: "Hospital Walls.",
    desc: "HomeNurse enables healthcare institutions to launch and manage home nursing services under their own brand, using their existing qualified nursing teams—through one coordinated digital workflow.",
    clarification: "Built for healthcare institutions—not as an open nurse marketplace.",
    cta1: "Explore the Model", cta2: "See How It Works",
    facts: [["Business Model", "B2B SaaS"], ["Customers", "Healthcare Institutions"], ["Stage", "Validation & Pilot Preparation"]],
  },
  dash: {
    org: "Your Institution · Home Nursing", concept: "Product Concept Preview · Demo Data",
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
    closing: "When these activities are managed separately, institutions face greater administrative workload and limited visibility across the service journey.",
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
    feats: ["Centralized patient requests", "Appointment coordination", "Qualified nurse assignment", "Home visit tracking", "Visit documentation", "Organized service management", "Follow-up and escalation visibility", "Operational reporting"],
    note: "The interface shown is an illustrative product concept currently under development. All displayed information is fictional demo data.",
  },
  how: {
    eyebrow: "03 — How It Works", t1: "From Patient Request to", t2: "Home Visit.",
    steps: [
      ["Service Request", "A patient requests a home nursing service through the healthcare institution."],
      ["Review and Coordination", "The institution reviews the request, confirms eligibility, and coordinates the service."],
      ["Assignment and Scheduling", "A suitable qualified nurse from the institution’s existing team is assigned and the visit is scheduled."],
      ["Home Visit and Documentation", "The nurse delivers the service while the visit and required information are documented through the platform."],
      ["Follow-up and Closure", "The institution follows up, manages any required escalation, and closes the service record."],
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
    eyebrow: "06 — Our Value", t1: "Strategic Value,", t2: "Simply", t3: "Delivered.",
    imgAlt: "A nurse checking an elderly patient's blood pressure at home",
    caption: "Your institution's care, delivered at home.",
    items: [
      ["Beyond the Facility", "Extend nursing services beyond physical facilities into patients' homes."],
      ["Existing Teams", "Enable healthcare institutions to use their current qualified nursing staff."],
      ["Centralized Workflows", "Manage requests, schedules, nurses, and records in one place."],
      ["Simpler Management", "Organize home nursing operations through a centralized digital platform."],
      ["Structured Home Care", "Support organized and documented home nursing visits through institutional teams."],
      ["No Build From Scratch", "Provide digital infrastructure without requiring institutions to develop their own system from scratch."],
    ],
  },
  about: {
    eyebrow: "10 — About HomeNurse",
    t1: "A Jordanian healthcare technology startup building the digital infrastructure for", t2: "home nursing.",
    mT: "Mission", m: "Help healthcare institutions extend trusted nursing care into patients' homes through organized, accessible, and digitally supported services.",
    wT: "Where We Are", w: "HomeNurse is currently refining its product concept, preparing to validate its operational model with healthcare institutions in Jordan, and defining the scope of a focused pilot.",
  },
  difference: {
  "eyebrow": "05 — Our Difference",
  "title": "Institution-led, not marketplace-led.",
  "desc": "HomeNurse is designed around the healthcare institution’s existing brand, workforce, responsibilities, and service workflow.",
  "columns": [
    {
      "title": "Open Marketplace Model",
      "items": [
        "Connects patients with individual service providers.",
        "May operate separately from the institution’s workflow.",
        "The service may be delivered outside the institution’s brand.",
        "Staffing and service delivery depend on external providers."
      ]
    },
    {
      "title": "HomeNurse Model",
      "items": [
        "Works directly with healthcare institutions.",
        "Uses the institution’s existing qualified nursing staff.",
        "Operates under the institution’s brand.",
        "Supports the institution’s operational workflow.",
        "Keeps clinical responsibility with the healthcare institution.",
        "Provides coordination, documentation, follow-up, and visibility."
      ]
    }
  ]
},
  model: {
  "eyebrow": "07 — Business Model",
  "title": "A Scalable B2B SaaS Model",
  "paragraphs": [
    "HomeNurse follows a proposed B2B SaaS model for healthcare institutions. The revenue model combines an initial onboarding fee, a recurring institutional subscription, and optional paid services for customization, integrations, reporting, and support.",
    "Patients pay the healthcare institution directly for care services, while the institution pays for using the HomeNurse platform. Packages and pricing will be refined and validated with healthcare institutions during the pilot stage."
  ],
  "cards": [
    [
      "Initial Onboarding",
      "Workflow configuration, account setup, permissions, and implementation support."
    ],
    [
      "Institutional Subscription",
      "A recurring subscription for continued access to the HomeNurse platform."
    ],
    [
      "Optional Services",
      "Customization, integrations, reporting, additional support, and future platform services."
    ]
  ]
},
  pilot: {
  "eyebrow": "08 — Focused Pilot",
  "title": "Start Focused. Learn Quickly. Scale Responsibly.",
  "desc": "HomeNurse plans to begin with one healthcare institution, one defined nursing service, and one controlled operational workflow.",
  "cards": [
    [
      "Discovery",
      "Understand the institution’s workflow, responsibilities, and operational readiness."
    ],
    [
      "Configuration",
      "Define the service, users, roles, scheduling process, documentation, and escalation rules."
    ],
    [
      "Controlled Pilot",
      "Run one agreed workflow with a limited operational scope."
    ],
    [
      "Evaluation",
      "Review adoption, workflow performance, documentation completion, support requirements, and readiness for the next phase."
    ]
  ]
},
  stage: {
  "eyebrow": "09 — Current Stage",
  "title": "Current Stage: Solution Validation and Pilot Preparation",
  "columns": [
    {
      "title": "Defined",
      "items": [
        "Core operational problem",
        "B2B direction",
        "Main user roles",
        "Service workflow",
        "MVP scope",
        "Focused pilot approach"
      ]
    },
    {
      "title": "Current Focus",
      "items": [
        "Refining the product concept",
        "Preparing stakeholder validation",
        "Defining the first pilot scope",
        "Developing the product experience"
      ]
    },
    {
      "title": "Next",
      "items": [
        "Confirm a healthcare pilot partner",
        "Configure a focused MVP",
        "Run a controlled pilot",
        "Measure, learn, and improve"
      ]
    }
  ]
},
  team: {
  "eyebrow": "11 — Our Team",
  "title": "The Founding Team",
  "desc": "Built by a founding team combining product development and software engineering.",
  "members": [
    [
      "A",
      "Abeer",
      "Co-founder & Product Lead",
      "Software Engineer"
    ],
    [
      "Z",
      "Zaid",
      "Co-founder",
      "Software Engineer"
    ]
  ]
},
  ask: {
  "eyebrow": "12 — The Ask",
  "title": "We are looking for the right partners to validate and build the next stage.",
  "cards": [
    [
      "Healthcare Pilot Partner",
      "A healthcare institution ready to help validate one focused home nursing workflow."
    ],
    [
      "Strategic Guidance",
      "Healthcare and business expertise to strengthen the product, pilot, and go-to-market approach."
    ],
    [
      "Early-Stage Support",
      "Connections and conversations with investors and ecosystem partners who understand HealthTech and care delivery."
    ]
  ],
  "closing": "HomeNurse is starting with a focused operational problem and a clear path to validation."
},
  closing: {
  "title": "Organized care, extending beyond the facility.",
  "desc": "One institution. One service. One focused pilot.",
  "home": "Return to the Beginning",
  "workflow": "View the Workflow"
},
  footer: { city: "Amman, Jordan", rights: "All rights reserved.", line: "B2B HealthTech for organized home nursing operations." },
};

type Dict = typeof en;

export const ar: Dict = {
  nav: { home: "الرئيسية", challenge: "الفرصة", solution: "الحل", how: "آلية العمل", model: "نموذج العمل", team: "فريقنا", ask: "ما نبحث عنه", partner: "اكتشف خطوتنا القادمة", menu: "فتح القائمة" },
  hero: {
    eyebrow: "تكنولوجيا الرعاية الصحية · عمّان، الأردن",
    h1a: "نمتدّ بالرعاية الصحية", h1b: "إلى ما بعد", h1c: "جدران المستشفى.",
    desc: "تمكّن HomeNurse المؤسسات الصحية من إطلاق خدمات التمريض المنزلي وإدارتها تحت علامتها التجارية، وباستخدام كوادرها التمريضية المؤهلة، من خلال مسار عمل رقمي موحّد.",
    clarification: "مصممة للمؤسسات الصحية، وليست سوقًا مفتوحًا للممرضين.",
    cta1: "استكشف النموذج", cta2: "شاهد آلية العمل",
    facts: [["نموذج العمل", "اشتراك مؤسسي"], ["العملاء", "المؤسسات الصحية"], ["المرحلة", "التحقق والاستعداد للتجربة الأولية"]],
  },
  dash: {
    org: "مؤسستك · التمريض المنزلي", concept: "تصوّر مبدئي للمنتج · بيانات تجريبية",
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
    closing: "عندما تُدار هذه الأنشطة بشكل منفصل، يزداد العبء الإداري وتصبح متابعة رحلة الخدمة أكثر صعوبة.",
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
    feats: ["مركزية طلبات المرضى", "تنسيق المواعيد", "تعيين الممرض المؤهل", "تتبّع الزيارات المنزلية", "توثيق الزيارات", "إدارة منظّمة للخدمة", "متابعة الحالات والتصعيد", "التقارير التشغيلية"],
    note: "الواجهة المعروضة تصوّر توضيحي لمنتج ما زال قيد التطوير، وجميع المعلومات الظاهرة بيانات تجريبية غير حقيقية.",
  },
  how: {
    eyebrow: "٠٣ — آلية العمل", t1: "من طلب المريض إلى", t2: "الزيارة المنزلية.",
    steps: [
      ["طلب الخدمة", "يطلب المريض خدمة تمريض منزلي من خلال المؤسسة الصحية."],
      ["المراجعة والتنسيق", "تراجع المؤسسة الطلب، وتتأكد من ملاءمته، وتنسّق الخدمة."],
      ["التعيين والجدولة", "يُعيّن ممرض مؤهل ومناسب من كادر المؤسسة، ويُحدّد موعد الزيارة."],
      ["الزيارة والتوثيق", "يقدّم الممرض الخدمة، وتُوثّق الزيارة والمعلومات المطلوبة عبر المنصة."],
      ["المتابعة والإغلاق", "تتابع المؤسسة الحالة، وتتعامل مع أي تصعيد مطلوب، ثم تغلق سجل الخدمة."],
    ],
  },
  serve: {
    eyebrow: "٠٤ — من نخدم", t1: "صُمّمت", t2: "للمؤسسات", t3: "التي تهتم بالرعاية.",
    desc: "تعمل HomeNurse خلف علامتك التجارية؛ يتعامل المرضى مع مؤسستك، بينما تدير المؤسسة الخدمة عبر المنصة.",
    cards: [
      ["المستشفيات", "امتداد للخدمات التمريضية بعد الخروج من المستشفى، مع متابعة منزلية منظّمة عبر الكوادر الحالية."],
      ["العيادات الخاصة", "تقديم زيارات تمريض منزلية كامتداد للخدمات السريرية."],
      ["المراكز الصحية", "تنظيم خدمات التمريض المنزلي في المجتمع المحلي عبر إجراءات عمل مركزية."],
      ["دور الرعاية", "تنسيق الزيارات التمريضية والحفاظ على جداول وسجلات منظّمة."],
    ],
  },
  value: {
    eyebrow: "٠٦ — قيمتنا", t1: "قيمة استراتيجية،", t2: "بأسلوب", t3: "بسيط.",
    imgAlt: "ممرضة تقيس ضغط الدم لمريض مسنّ في منزله",
    caption: "رعاية مؤسستك، تصل إلى المنزل.",
    items: [
      ["ما بعد المرفق", "توسيع الخدمات التمريضية من المرافق إلى منازل المرضى."],
      ["الكوادر الحالية", "تمكين المؤسسات الصحية من الاستفادة من كوادرها التمريضية المؤهلة."],
      ["إجراءات مركزية", "إدارة الطلبات والجداول والممرضين والسجلات من مكان واحد."],
      ["إدارة أبسط", "تنظيم عمليات التمريض المنزلي عبر منصة رقمية مركزية."],
      ["رعاية منزلية منظّمة", "دعم زيارات تمريض منزلية منظّمة وموثّقة من خلال كوادر المؤسسة."],
      ["دون البناء من الصفر", "بنية رقمية جاهزة دون الحاجة إلى تطوير نظام خاص من البداية."],
    ],
  },
  about: {
    eyebrow: "١٠ — عن HomeNurse",
    t1: "شركة أردنية ناشئة في تكنولوجيا الرعاية الصحية، تبني البنية الرقمية", t2: "للتمريض المنزلي.",
    mT: "رسالتنا", m: "مساعدة المؤسسات الصحية على إيصال رعاية تمريضية موثوقة إلى منازل المرضى، من خلال خدمات منظّمة وميسّرة ومدعومة رقمياً.",
    wT: "أين نحن الآن", w: "تعمل HomeNurse حاليًا على تطوير تصور المنتج، والاستعداد للتحقق من النموذج التشغيلي مع مؤسسات صحية في الأردن، وتحديد نطاق تجربة أولية مركزة.",
  },
  difference: {
  "eyebrow": "٠٥ — ما يميزنا",
  "title": "تقودها المؤسسة، وليست سوقًا مفتوحًا.",
  "desc": "صُممت HomeNurse حول العلامة التجارية للمؤسسة الصحية، وكوادرها، ومسؤولياتها، وآلية تقديم خدماتها.",
  "columns": [
    {
      "title": "نموذج السوق المفتوح",
      "items": [
        "يربط المرضى بمقدمي خدمة أفراد.",
        "قد يعمل خارج آلية عمل المؤسسة الصحية.",
        "قد تُقدّم الخدمة خارج العلامة التجارية للمؤسسة.",
        "يعتمد تنفيذ الخدمة على مقدمي خدمات خارجيين."
      ]
    },
    {
      "title": "نموذج HomeNurse",
      "items": [
        "يعمل مباشرة مع المؤسسات الصحية.",
        "يعتمد على الكادر التمريضي المؤهل الموجود لدى المؤسسة.",
        "يعمل تحت العلامة التجارية للمؤسسة.",
        "يدعم آلية العمل التشغيلية الخاصة بالمؤسسة.",
        "تبقى المسؤولية السريرية لدى المؤسسة الصحية.",
        "يوفّر التنسيق والتوثيق والمتابعة والرؤية التشغيلية."
      ]
    }
  ]
},
  model: {
  "eyebrow": "٠٧ — نموذج العمل",
  "title": "نموذج عمل مؤسسي قابل للتوسع",
  "paragraphs": [
    "تعتمد HomeNurse نموذج اشتراك برمجي موجّهًا للمؤسسات الصحية، ويتكون نموذج الإيرادات المقترح من رسوم إعداد أولية، واشتراك مؤسسي متكرر، وخدمات إضافية اختيارية للتخصيص والتكاملات والتقارير والدعم.",
    "يدفع المرضى مقابل خدمات الرعاية للمؤسسة الصحية مباشرة، بينما تدفع المؤسسة مقابل استخدام منصة HomeNurse. وسيتم تطوير الباقات والأسعار والتحقق منها بالتعاون مع المؤسسات الصحية خلال مرحلة التجربة الأولية."
  ],
  "cards": [
    [
      "الإعداد الأولي",
      "تهيئة مسار العمل، وإعداد الحسابات والصلاحيات، ودعم بدء الاستخدام."
    ],
    [
      "الاشتراك المؤسسي",
      "اشتراك متكرر مقابل استمرار استخدام المؤسسة لمنصة HomeNurse."
    ],
    [
      "الخدمات الاختيارية",
      "التخصيص والتكاملات والتقارير والدعم الإضافي والخدمات المستقبلية."
    ]
  ]
},
  pilot: {
  "eyebrow": "٠٨ — التجربة المركزة",
  "title": "نبدأ بتركيز. نتعلّم بسرعة. ونتوسع بمسؤولية.",
  "desc": "تخطط HomeNurse للبدء مع مؤسسة صحية واحدة، وخدمة تمريضية محددة، ومسار عمل تشغيلي مضبوط.",
  "cards": [
    [
      "الاستكشاف",
      "فهم آلية عمل المؤسسة، والمسؤوليات، والاستعداد التشغيلي."
    ],
    [
      "الإعداد",
      "تحديد الخدمة والمستخدمين والصلاحيات والجدولة والتوثيق وقواعد التصعيد."
    ],
    [
      "التجربة المحدودة",
      "تشغيل مسار عمل واحد متفق عليه ضمن نطاق تشغيلي محدود."
    ],
    [
      "التقييم",
      "مراجعة الاستخدام وأداء المسار واكتمال التوثيق ومتطلبات الدعم والاستعداد للمرحلة التالية."
    ]
  ]
},
  stage: {
  "eyebrow": "٠٩ — المرحلة الحالية",
  "title": "المرحلة الحالية: التحقق من الحل والاستعداد للتجربة الأولية",
  "columns": [
    {
      "title": "تم تحديده",
      "items": [
        "المشكلة التشغيلية الأساسية",
        "التوجه المؤسسي",
        "أدوار المستخدمين الرئيسية",
        "رحلة الخدمة",
        "نطاق النسخة الأولية",
        "منهجية التجربة المحدودة"
      ]
    },
    {
      "title": "التركيز الحالي",
      "items": [
        "تطوير تصور المنتج",
        "الاستعداد للتحقق مع الجهات المعنية",
        "تحديد نطاق التجربة الأولى",
        "تطوير تجربة المنصة"
      ]
    },
    {
      "title": "الخطوة التالية",
      "items": [
        "تأكيد شريك صحي للتجربة",
        "إعداد نسخة أولية مركزة",
        "تنفيذ تجربة محدودة",
        "القياس والتعلّم والتحسين"
      ]
    }
  ]
},
  team: {
  "eyebrow": "١١ — فريقنا",
  "title": "الفريق المؤسس",
  "desc": "يقود المشروع فريق مؤسس يجمع بين تطوير المنتجات وهندسة البرمجيات.",
  "members": [
    [
      "ع",
      "عبير",
      "شريكة مؤسسة ومسؤولة تطوير المنتج",
      "مهندسة برمجيات"
    ],
    [
      "ز",
      "زيد",
      "شريك مؤسس",
      "مهندس برمجيات"
    ]
  ]
},
  ask: {
  "eyebrow": "١٢ — ما الذي نبحث عنه",
  "title": "نبحث عن الشركاء المناسبين للتحقق من المرحلة القادمة وبنائها.",
  "cards": [
    [
      "شريك صحي للتجربة",
      "مؤسسة صحية مستعدة للمساعدة في التحقق من مسار واحد ومحدد لخدمة التمريض المنزلي."
    ],
    [
      "توجيه استراتيجي",
      "خبرات صحية وتجارية تساعد في تطوير المنتج والتجربة وخطة دخول السوق."
    ],
    [
      "دعم المرحلة المبكرة",
      "بناء علاقات وبدء محادثات مع مستثمرين وشركاء يفهمون قطاع التكنولوجيا الصحية وتقديم الرعاية."
    ]
  ],
  "closing": "تبدأ HomeNurse من مشكلة تشغيلية محددة، وبمسار واضح للتحقق والتطوير."
},
  closing: {
  "title": "رعاية منظّمة، تمتد إلى خارج المؤسسة الصحية.",
  "desc": "مؤسسة واحدة. خدمة واحدة. تجربة أولية مركزة.",
  "home": "العودة إلى البداية",
  "workflow": "مشاهدة آلية العمل"
},
  footer: { city: "عمّان، الأردن", rights: "جميع الحقوق محفوظة.", line: "تقنية صحية لإدارة عمليات التمريض المنزلي بشكل منظّم." },
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
