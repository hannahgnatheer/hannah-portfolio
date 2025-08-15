'use client';

import React, { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, MapPin, Download, ExternalLink,
  GraduationCap, Briefcase, LayoutGrid, Cpu, CloudSun, BookOpen, Blocks, FlaskConical
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ---------------- Types ---------------- */
type Tokens = { accent: string; glass: string };

interface Metric { label: string; value: string; }

interface Links { code?: string; paper?: string; demo?: string; }

interface Project {
  title: string;
  tags: string[];
  year: string;
  description: string;
  links?: Links;
  metrics?: Metric[];
  icon: ReactNode;
}

interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

interface Education {
  title: string;
  org: string;
  period: string;
}

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

interface ProjectCardProps {
  p: Project;
}

const tokens = {
  accent: "from-blue-700 via-sky-500 to-teal-400",
  glass: "backdrop-blur-md bg-blue-900/20 border border-teal-400/20",
  textPrimary: "text-blue-100",
  textSecondary: "text-teal-200"
};


const skills: string[] = [
  "Python","Pandas","scikit-learn","XGBoost","LightGBM","TensorFlow","PyTorch",
  "SQL","GeoPandas","Matplotlib","Plotly","Power BI","Tableau",
  "Optuna/GridSearchCV","SHAP/LIME","Git/GitHub","Azure/AWS","RAG","LLMs"
];

const projects: Project[] = [
  {
    title: "Machine Learning-Based Weather Forecasting in South Wales",
    tags: ["ML","Multi‑label Classification","XGBoost","EDA","Explainability"],
    year: "2025",
    description:
      "Regional weather forecasting using multi‑label models (LogReg, RF, GB, XGBoost, LGBM, SVM). XGBoost achieved F1=0.8085, Precision=0.9965, Accuracy=98.65%. Pipeline includes feature engineering, IQR outlier handling, correlation‑driven selection, SHAP/LIME/Anchors explainability.",
    links: {
      code: "https://1drv.ms/u/c/a99e4c2abfccd44b/EQAqhPDcalFFtQB-8wdwP-IBX950d5aVMXSUMDqQ4ZGKOg?e=9wW7h8",
      paper: "https://1drv.ms/b/c/a99e4c2abfccd44b/Eevp4BdY9qBKtOtrev5xp7YBsJnrVBQ71on3pg6K2cQOWQ?e=SaumOj",
      demo: "#",
    },
    metrics: [
      { label: "F1 (macro)", value: "0.8085" },
      { label: "Precision", value: "0.9965" },
      { label: "Accuracy", value: "98.65%" },
    ],
    icon: <CloudSun className="w-5 h-5" />,
  },
  {
    title: "Knowledge Distillation for Low‑Parameter LLMs (NLP)",
    tags: ["LLM","Distillation","Summarization","Mistral 7B","LLaMA 3.1 8B"],
    year: "2025",
    description:
      "Experimental framework distilling summarization/understanding abilities from larger teachers into compact students with unified evaluation (BLEU, ROUGE, METEOR, BERTScore).",
    links: { code: "https://github.com/your-username/llm-distill", demo: "#" },
    metrics: [{ label: "Params", value: "≤8B" }, { label: "Benchmarks", value: "Multi‑task" }],
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Smart‑Home Weather Monitoring & Multi‑Label Prediction",
    tags: ["IoT","ESP32/RPi","Sensors","Multi‑Label","SHAP"],
    year: "2025",
    description:
      "End‑to‑end pipeline for low‑cost sensors (temp, humidity, pressure, UV, wind) with multi‑label classifiers and feature importance to minimize sensor set while preserving accuracy.",
    links: { code: "https://github.com/your-username/smart-weather", demo: "#" },
    metrics: [{ label: "Latency", value: "Edge" }, { label: "Modalities", value: "10+" }],
    icon: <Blocks className="w-5 h-5" />,
  },
];

const experience: Experience[] = [
  {
    role: "Operations Assistant",
    org: "WJEC",
    period: "2025 — Present",
    bullets: [
      "Administrative & data operations across assessments.",
      "Process optimization and quality tracking.",
    ],
  },
  {
    role: "Global/International Student Ambassador & Student Coach",
    org: "Cardiff Metropolitan University",
    period: "2024 — 2025",
    bullets: [
      "Advised students; organized events and onboarding.",
      "Data‑informed outreach and support initiatives.",
    ],
  },
];

const education: Education[] = [
  { title: "MSc Data Science", org: "Cardiff Metropolitan University", period: "2024 — 2025 (expected Jul)" },
  { title: "BSc(Hons) Software Engineering", org: "Cardiff Metropolitan University", period: "2023" },
  { title: "Pearson BTEC HND in Computing", org: "Esoft Metro Campus", period: "2022" },
];

const badges: string[] = [
  "MSc Data Science Student of the Year (Cardiff Met)",
  "Geo analytics • ML interpretability • RAG systems",
  "Interested in roles at Samsung & KIA",
];

/* ---------------- UI Sections ---------------- */
const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="max-w-6xl mx-auto px-5 md:px-10">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-xl ${tokens.glass}`}>{icon}</div>
        <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight ${tokens.textPrimary}`}>
        {title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Hero: React.FC = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-30 from-indigo-600 via-sky-500 to-emerald-400" />
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-bold leading-tight">
        Hannah Genneath Natheer
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-lg md:text-xl text-white/80 max-w-3xl">
        Software Engineer & MSc Data Science student focused on <span className="font-semibold">machine learning</span>,
        <span className="font-semibold"> weather forecasting</span>, and <span className="font-semibold">LLM distillation</span>. I build practical, explainable AI systems.
      </motion.p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#projects"><Button className="rounded-2xl">View Projects</Button></a>
        <a href="#contact"><Button variant="outline" className="rounded-2xl">Contact</Button></a>
        <a href="/Hannah_Natheer_CV.pdf" target="_blank" rel="noreferrer"><Button variant="ghost" className="rounded-2xl"><Download className="w-4 h-4 mr-2"/>CV</Button></a>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {badges.map((b: string, i: number) => (
          <span key={i} className={`text-sm px-3 py-1 rounded-full ${tokens.glass}`}>{b}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => (
  <Card className={`rounded-2xl ${tokens.glass}`}>
    <CardContent className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${tokens.glass}`}>{p.icon}</div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold leading-snug">{p.title}</h3>
            <p className="text-xs text-white/60">{p.year}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {p.links?.code && (
            <a href={p.links.code} target="_blank" rel="noreferrer">
              <Button size="icon" variant="outline" className="rounded-xl"><Github className="w-4 h-4"/></Button>
            </a>
          )}
          {p.links?.paper && (
            <a href={p.links.paper} target="_blank" rel="noreferrer">
              <Button size="icon" variant="outline" className="rounded-xl"><BookOpen className="w-4 h-4"/></Button>
            </a>
          )}
          {p.links?.demo && p.links.demo !== "#" && (
            <a href={p.links.demo} target="_blank" rel="noreferrer">
              <Button size="icon" variant="outline" className="rounded-xl"><ExternalLink className="w-4 h-4"/></Button>
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base text-white/80">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t: string) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10">{t}</span>
        ))}
      </div>
      {p.metrics?.length ? (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          {p.metrics.map((m: Metric, idx: number) => (
            <div key={idx} className={`rounded-xl p-3 ${tokens.glass}`}>
              <p className="text-xs text-white/60">{m.label}</p>
              <p className="text-lg font-semibold">{m.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </CardContent>
  </Card>
);

const Footer: React.FC = () => (
  <footer className="py-10">
    <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
      <p>© {new Date().getFullYear()} Hannah Genneath Natheer. All rights reserved.</p>
      <div className="flex items-center gap-3">
        <a href="mailto:hannahnatheer9@gmail.com" className="hover:text-white"><Mail className="w-4 h-4 inline mr-1"/>Email</a>
        <a href="https://github.com/hannahgnatheer" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-4 h-4 inline mr-1"/>GitHub</a>
        <a href="https://www.linkedin.com/in/hanagnat/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin className="w-4 h-4 inline mr-1"/>LinkedIn</a>
      </div>
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
export default function Portfolio(): React.ReactElement {
    const groupedSkills: string[][] = useMemo(() => {
    const chunk = 9;
    const groups: string[][] = [];
    for (let i = 0; i < skills.length; i += chunk) groups.push(skills.slice(i, i + chunk));
    return groups;
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#0b1020] selection:bg-white/20">
      {/* Top Nav */}
      <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="max-w-6xl mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">HN</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#skills" className="hover:text-white/90">Skills</a>
            <a href="#projects" className="hover:text-white/90">Projects</a>
            <a href="#experience" className="hover:text-white/90">Experience</a>
            <a href="#education" className="hover:text-white/90">Education</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div id="top" />
      <Hero />

      {/* About */}
      <Section id="about" title="About" icon={<MapPin className="w-5 h-5" />}>
        <div className={`rounded-2xl p-6 ${tokens.glass}`}>
          <p className="text-white/85 leading-relaxed">
            I'm an MSc Data Science student at <span className="font-semibold">Cardiff Metropolitan University</span> (graduating July 2025),
            with a BSc in Software Engineering. I enjoy building data products that blend
            rigorous analysis with human‑friendly design. My recent work spans regional
            weather forecasting, LLM knowledge distillation, and smart‑home sensing.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<FlaskConical className="w-5 h-5" />}>
        <div className="grid md:grid-cols-3 gap-4">
          {groupedSkills.map((group: string[], idx: number) => (
            <div key={idx} className={`rounded-2xl p-4 ${tokens.glass}`}>
              <div className="grid grid-cols-3 gap-2">
                {group.map((s: string) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-lg border border-white/10 text-center">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={<LayoutGrid className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p: Project) => (<ProjectCard key={p.title} p={p} />))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Briefcase className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 gap-5">
          {experience.map((e: Experience) => (
            <Card key={e.role} className={`rounded-2xl ${tokens.glass}`}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="text-white/70">{e.org}</p>
                  </div>
                  <p className="text-xs text-white/60">{e.period}</p>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-white/85">
                  {e.bullets.map((b: string, i: number) => (<li key={i}>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5" />}>
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((ed: Education) => (
            <Card key={ed.title} className={`rounded-2xl ${tokens.glass}`}>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{ed.title}</h3>
                <p className="text-white/75">{ed.org}</p>
                <p className="text-xs text-white/60 mt-1">{ed.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="w-5 h-5" />}>
        <div className={`rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 ${tokens.glass}`}>
          <div>
            <h3 className="text-xl font-semibold">Let's collaborate</h3>
            <p className="text-white/80">Open to Data Science, ML, and AI roles in the UK. Available for research collaborations.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hannahnatheer9@gmail.com"><Button className="rounded-2xl"><Mail className="w-4 h-4 mr-2"/>Email</Button></a>
            <a href="https://github.com/hannahgnatheer" target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Github className="w-4 h-4 mr-2"/>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/hanagnat/" target="_blank" rel="noreferrer"><Button variant="ghost" className="rounded-2xl"><Linkedin className="w-4 h-4 mr-2"/>LinkedIn</Button></a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
