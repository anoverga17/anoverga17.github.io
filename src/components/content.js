"use client";

import { NAME, EMAIL, GITHUB, GITHUB_HANDLE, LINKEDIN, LINKEDIN_HANDLE, RESUME } from "@/lib/site";
import { Kenjutsu, Astronomy, Dnd } from "./hobbies";
import { useShell } from "./shell";
import s from "./content.module.css";

const GALAXY = `<span class="c">         .          </span><span class="${s.star}">*</span><span class="c">                .</span>
<span class="c">    </span><span class="${s.star}">*</span><span class="c">        .   </span>..::::::::::::...<span class="c">     .      .</span>
<span class="c">        .  </span>..::::::::::''''::::::::::..
<span class="c">   .    </span>.::::::'''   ..:<span class="${s.core}">@@@@</span>:..   '''::::::.<span class="c">    </span><span class="${s.star}">*</span>
      .:::::'   ..::<span class="${s.core}">@@@@@@@@@@@@</span>::..   ':::::.
<span class="c">   </span><span class="${s.star}">*</span>   ':::::.   ''::<span class="${s.core}">@@@@@@@@@@@@</span>::''   .:::::'
         '::::::...   '':<span class="${s.core}">@@@@</span>:''   ...::::::'<span class="c">    .</span>
<span class="c">    .        </span>''::::::::::....::::::::::''
<span class="c">       .          </span>'''::::::::::'''<span class="c">       </span><span class="${s.star}">*</span><span class="c">    .</span>`;

const ME_C = [
  <span key="1" className="c">{"// me.c — the short version"}</span>,
  <span key="2"><span className="k">struct</span> <span className="t">engineer</span> me <span className="k">=</span> {"{"}</span>,
  <span key="3">{"    .name     "}<span className="k">=</span> <span className="s">&quot;{NAME}&quot;</span>,</span>,
  <span key="4">{"    .role     "}<span className="k">=</span> <span className="s">&quot;system engineer&quot;</span>,</span>,
  <span key="5">{"    .at       "}<span className="k">=</span> <span className="s">&quot;kort valuta&quot;</span>,</span>,
  <span key="6">{"    .base     "}<span className="k">=</span> <span className="s">&quot;tokyo, jp&quot;</span>,</span>,
  <span key="7">{"    .focus    "}<span className="k">=</span> <span className="n">SYSTEMS</span> <span className="k">|</span> <span className="n">PARALLEL</span> <span className="k">|</span> <span className="n">NETWORKS</span> <span className="k">|</span> <span className="n">COMPILERS</span>,</span>,
  <span key="8">{"    .langs    "}<span className="k">=</span> {"{ "}<span className="s">&quot;c&quot;</span>, <span className="s">&quot;c++&quot;</span>, <span className="s">&quot;go&quot;</span>, <span className="s">&quot;python&quot;</span>, <span className="s">&quot;ruby&quot;</span>, <span className="s">&quot;sql&quot;</span>{" },"}</span>,
  <span key="9">{"    .speaks   "}<span className="k">=</span> {"{ "}<span className="n">EN_NATIVE</span>, <span className="n">JA_CONVERSATIONAL</span>{" },"}</span>,
  <span key="10">{"    .cs_since "}<span className="k">=</span> <span className="n">2018</span>,</span>,
  <span key="11">{"};"}</span>,
];

const SWATCHES = ["#272822", "#F92672", "#A6E22E", "#E6DB74", "#FD971F", "#AE81FF", "#66D9EF", "#F8F8F2"];

const JOBS = [
  {
    when: "Oct 2025 – Present", where: "Tokyo, Japan", role: "System Engineer", org: "Kort Valuta",
    log: [
      "Develop and maintain production features for a Ruby on Rails fintech application supporting employee payroll and payment services.",
      "Investigate production failures and defects across backend services, automated workflows and internal systems; identify root causes and validate fixes.",
      "Built Go batch-processing services with Clean Architecture, automating the processing of VSS reports stored in Amazon S3 and generating downstream notifications.",
      "Built Playwright and Maestro automation for test-data creation and onboarding, cutting the time to register 1,000 test accounts from an estimated 12 days to about 4 hours.",
      "Designed and implemented a fully automated Playwright UI regression suite for an administrative platform.",
      "Authored Japanese-language test specifications for an under-documented admin application, coordinating testing and releases with engineering, QA and business stakeholders.",
    ],
  },
  {
    when: "Sep 2021 – Sep 2022", where: "Toronto, Canada", role: "Software Engineering Intern", org: "University of Toronto",
    log: [
      "Supported development and maintenance of MarkUs, an open-source Ruby on Rails application used by 4,000+ students and instructors across 20+ courses.",
      "Developed REST API endpoints and administrative features to improve instructor workflows and maintainability.",
    ],
  },
];

const SKILLS = [
  ["languages", [["C", "software router · particle sim"], ["C++", "compiler · particle sim"], ["Go", "kort valuta"], ["Ruby", "kort valuta · markus"], ["Python", "particle sim tooling"], ["JavaScript"], ["SQL"]]],
  ["systems & performance", [["OpenMP · MPI", "particle sim"], ["Linux · perf", "particle sim"], ["LLVM · ANTLR4", "compiler"], ["Wireshark", "software router"], ["CUDA"], ["GDB"]]],
  ["web, cloud & testing", [["Ruby on Rails", "kort valuta · markus"], ["REST APIs", "markus"], ["Amazon S3", "kort valuta"], ["Playwright · Maestro", "kort valuta"], ["Git"]]],
];

const PROJECTS = [
  { id: "psim", title: "Parallel Particle Simulation", desc: "A compute-heavy simulation, parallelised with OpenMP and MPI and tuned for cache locality.", deps: "c c++ openmp mpi perf" },
  { id: "router", title: "Software Router", desc: "Receives, inspects and forwards real packets — Ethernet, ARP and IP routing, written in C.", deps: "c wireshark" },
  { id: "cc", title: "Compiler Frontend", desc: "A frontend for a C-like language, from an ANTLR4 grammar to LLVM IR.", deps: "c++ llvm antlr4" },
];

const FOLDERS = [
  { id: "kenjutsu", kanji: "剣術", color: "#F92672", name: "Kenjutsu", desc: "the classical Japanese art of the sword" },
  { id: "astronomy", kanji: "天文", color: "#66D9EF", name: "Astronomy", desc: "reading the night sky" },
  { id: "dnd", kanji: "冒険", color: "#AE81FF", name: "Dungeons & Dragons", desc: "collaborative storytelling, with dice" },
];

const CONTACT = [
  ["-e, --email", `mailto:${EMAIL}`, <span key="v" className={`s ${s.optVal}`}>{EMAIL}</span>],
  ["-g, --github", GITHUB, <span key="v" className={`s ${s.optVal}`}>{GITHUB_HANDLE}</span>],
  ["-l, --linkedin", LINKEDIN, <span key="v" className={`s ${s.optVal}`}>{LINKEDIN_HANDLE}</span>],
  ["-r, --resume", RESUME, <span key="v" className={`cy ${s.optVal}`}>resume.pdf</span>],
];

function Heading({ cmd, arg, note }) {
  return (
    <div className={s.head}>
      <h1 className={s.h1}><span className="k">$</span> <span className="f">{cmd}</span> <span className="cy">{arg}</span></h1>
      <p className={`c ${s.sub}`}>{note}</p>
    </div>
  );
}

function Home() {
  return (
    <section className={s.home}>
      <div className={s.homeTop}>
        <div className={s.intro}>
          <p className={s.promptLine}><span className="f">guest@tokyo</span><span className="c">:</span><span className="cy">~</span><span className="k"> $ </span>whoami</p>
          <h1 className={s.headline}>software, all the way down.<span className="cursor" aria-hidden="true" /></h1>
          <p className={s.lead}>I&apos;m <span className="s">{NAME}</span>, a system engineer at Kort Valuta in Tokyo. I&apos;m drawn to the lower layers — parallel runtimes, packet forwarding, compiler frontends — and to the production failures that only make sense once you know what&apos;s underneath.</p>
        </div>
        <figure className={s.photo}>
          <div className={s.bar}><span>me.jpg</span><span className="c">4:5</span></div>
          <img className={s.photoImg} src="/gabriel-1.jpg" alt={NAME} />
        </figure>
      </div>

      <div id="skyart" className={s.panel}>
        <div className={s.galaxy}>
          <div className={s.bar}><span className="cy">galaxy.txt</span><span className="c">ro</span></div>
          <pre aria-label="ASCII art of a spiral galaxy" className={s.ascii} dangerouslySetInnerHTML={{ __html: GALAXY }} />
          <p className={`c ${s.asciiNote}`}># andromeda-ish — 2.5 million light-years away, not to scale</p>
        </div>
        <div className={s.code}>
          <div className={s.bar}><span>me.c</span><span className="c">utf-8 · c</span></div>
          <div className={s.codeBody}>
            {ME_C.map((line, i) => (
              <div key={i} className={s.line}><span className={`c ${s.ln}`}>{i + 1}</span>{line}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={s.scheme}>
        <div aria-hidden="true" className={s.swatches}>
          {SWATCHES.map((c) => <span key={c} style={{ background: c }} />)}
        </div>
        <span className="c">:colorscheme monokai</span>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className={s.section}>
      <div className={s.titleRow}>
        <Heading cmd="cd" arg="journal" note="# work experience and education" />
        <a href={RESUME} className={s.underLink}><span className="f">cat</span> <span className="cy">resume.pdf</span> <span aria-hidden="true" className="c">↗</span></a>
      </div>

      <h2 className={`${s.h2} ${s.h2Tight}`}><span className="c">## </span>experience</h2>
      <div className={s.jobs}>
        {JOBS.map((j) => (
          <article key={j.org} className={s.job}>
            <div className={s.when}><span>{j.when}</span><span className="c">{j.where}</span></div>
            <div className={s.jobBody}>
              <div className={s.role}>
                <h2 className={s.roleTitle}>{j.role}</h2>
                <p className={`f ${s.company}`}>{j.org}</p>
              </div>
              <ul className={`log ${s.logList}`}>{j.log.map((l) => <li key={l}>{l}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const { open } = useShell();
  return (
    <section id="education" className={s.edu}>
      <h2 className={s.h2}><span className="c">## </span>education</h2>
      <button type="button" className={`dir ${s.eduCard}`} aria-haspopup="dialog" onClick={() => open("edu")}>
        <span className={s.eduMain}>
          <span className={s.bigTitle}>University of Toronto</span>
          <span className={s.degree}><span className="f">Honours Bachelor of Science</span><span className="c"> · </span>Specialist in Computer Science</span>
          <span className={`n ${s.small15}`}>with Distinction</span>
        </span>
        <span className={s.eduWhen}><span>Sep 2018 – Jun 2024</span><span className="c">Toronto, Canada</span></span>
        <span className={`c ${s.eduHint}`}>open for exchange &amp; coursework →</span>
      </button>
    </section>
  );
}

function SkillRow({ name, where, plain }) {
  return (
    <div className={s.row}>
      <dt>{name}</dt>
      <dd className={where ? (plain ? s.plain : s.where) : undefined}>{where}</dd>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className={s.section}>
      <Heading cmd="cat" arg="skills" note="# what I work with, and where I've used it. focus: systems." />
      <div className={s.grid360}>
        {SKILLS.map(([title, rows]) => (
          <div key={title} className={s.box}>
            <h2 className={s.boxTitle}><span className="c"># </span>{title}</h2>
            <dl className={s.dl}>{rows.map(([name, where]) => <SkillRow key={name} name={name} where={where} />)}</dl>
          </div>
        ))}
        <div className={s.box}>
          <h2 className={s.boxTitle}><span className="c"># </span>spoken</h2>
          <dl className={s.dl}>
            <SkillRow name="English" where="native" plain />
            <SkillRow name={<>Japanese <span lang="ja" className="c jp">日本語</span></>} where={<>conversational · <span className="cy">wrote test specs at kort valuta</span></>} plain />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { open } = useShell();
  return (
    <section className={s.section}>
      <Heading cmd="cd" arg="projects" note="# close to the metal." />
      <div className={s.grid340}>
        {PROJECTS.map((p) => (
          <button key={p.id} type="button" className={`dir ${s.card}`} aria-haspopup="dialog" onClick={() => open(p.id)}>
            <span className={s.cardBar}><span className="cy">{p.id}/</span><span className="c">README.md</span></span>
            <span className={s.cardBody}>
              <span className={s.cardTitle}><span className="c"># </span>{p.title}</span>
              <span className={s.cardDesc}>{p.desc}</span>
              <span className={s.deps}><span className="c">deps: </span><span className="cy">{p.deps}</span></span>
              <span className={s.small14}><span className="f">open README</span> <span className="c">→</span></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Hobbies() {
  const { type, typing } = useShell();
  return (
    <section className={s.section}>
      <Heading cmd="cd" arg="beyond-jobs" note="# the processes that keep running after work." />
      <div className={s.ls}>
        <p className={s.lsCmd}><span className="k">$</span> <span className="f">ls</span> <span className="o">-l</span></p>
        <p className={`c ${s.small14}`}>total 3 — click a folder, or type cd and its name</p>
        <div className={s.grid320}>
          {FOLDERS.map((f) => (
            <button key={f.id} type="button" className={`dir ${s.folder}`} onClick={() => type(`cd ${f.id}`)} disabled={typing}>
              <span className={`c ${s.small13}`}>drwxr-xr-x  <span className="cy">{f.id}/</span></span>
              <span lang="ja" className={s.kanji} style={{ color: f.color }}>{f.kanji}</span>
              <span className={s.folderName}>{f.name}</span>
              <span className={s.cardDesc}>{f.desc}</span>
              <span className={s.folderGo}><span className="f">cd {f.id}</span> <span className="c">→</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className={s.section}>
      <h1 className={s.h1}><span className="k">$</span> <span className="f">cat</span> <span className="cy">contact</span></h1>
      <p className={s.big}>let&apos;s talk about systems.<span className="cursor" aria-hidden="true" /></p>
      <div className={s.opts}>
        <p className={`c ${s.usage}`}>usage: contact [option]</p>
        {CONTACT.map(([flag, href, value]) => (
          <a key={flag} href={href} className={s.opt}><span className={`f ${s.optFlag}`}>{flag}</span>{value}<span aria-hidden="true" className="c">↵</span></a>
        ))}
      </div>
    </section>
  );
}

function AllFooter() {
  const { type, typing } = useShell();
  return (
    <div className={s.allFoot}>
      <span className={`c ${s.small14}`}>make: all targets built.</span>
      <button type="button" className={`chip ${s.back}`} onClick={() => type("whoami")} disabled={typing}>back to the start: <span className="f">whoami</span></button>
    </div>
  );
}

export default function Content({ page }) {
  const all = page === "all";
  const show = (p) => all || page === p;
  return (
    <>
      {all && (
        <div className={s.allHead}>
          <p className={s.allCmd}><span className="k">$</span> <span className="f">make</span> <span className="cy">all</span></p>
          <p className={`c ${s.small14}`}># building every target in order: whoami → journal → skills → projects → beyond-jobs → contact</p>
        </div>
      )}
      {show("home") && <Home />}
      {show("journal") && <><Journal /><Education /></>}
      {show("skills") && <Skills />}
      {show("projects") && <Projects />}
      {show("hobbies") && <Hobbies />}
      {page === "kenjutsu" && <Kenjutsu />}
      {page === "astronomy" && <Astronomy />}
      {page === "dnd" && <Dnd />}
      {show("contact") && <Contact />}
      {all && <AllFooter />}
    </>
  );
}
