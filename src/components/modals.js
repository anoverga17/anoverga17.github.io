import s from "./content.module.css";

// TODO: repo links for the three projects (not found in the repo).
const REPOS = { psim: "", router: "", cc: "" };

const COURSES = [
  ["systems", [["Operating Systems", "CSC369"], ["Parallel Programming", "CSC367"], ["Computer Networking Systems", "CSC458"], ["Compilers", "CSC488"], ["Computer Security", "ECE568"]]],
  ["foundations & software", [["Data Structures", "CSC263"], ["Algorithm Design & Analysis", "CSC373"], ["Programming Languages", "CSC324"], ["Software Engineering", "CSC301"], ["Web Programming", "CSC309"], ["Databases", "CSC343"], ["Artificial Intelligence", "CSC384"], ["UX Design", "CSC318"]]],
];

function Readme({ id, title, log, deps, children }) {
  return (
    <>
      <h2 id="modal-title" className={s.bigTitle}><span className="c"># </span>{title}</h2>
      <ul className={`log ${s.modalLog}`}>{log.map((l) => <li key={l}>{l}</li>)}</ul>
      {children}
      <div className={s.modalFoot}>
        <p className={s.small14}><span className="c">deps: </span><span className="cy">{deps}</span></p>
        <a href={REPOS[id] || "#"} className={s.underLink}><span className="f">git clone</span> <span className="s">{REPOS[id] || "[REPO LINK]"}</span></a>
      </div>
    </>
  );
}

const Education = (
  <>
    <div className={s.eduHead}>
      <div className={s.eduHeadMain}>
        <h2 id="modal-title" className={s.bigTitle}>University of Toronto</h2>
        <p className={s.degree}><span className="f">Honours Bachelor of Science</span><span className="c"> · </span>Specialist in Computer Science</p>
        <p className={`n ${s.small15}`}>with Distinction</p>
      </div>
      <div className={s.eduWhen}><span>Sep 2018 – Jun 2024</span><span className="c">Toronto, Canada</span></div>
    </div>
    <div className={s.exchange}>
      <div className={s.exchangeMain}>
        <span className={`c ${s.tree}`}>└── exchange</span>
        <h3 className={s.h3}>Keio University <span lang="ja" className="c jp">慶應義塾大学</span></h3>
        <p className={s.muted}>Visiting exchange student</p>
      </div>
      <div className={s.eduWhen}><span>Apr 2023 – Sep 2023</span><span className="c">Tokyo, Japan</span></div>
    </div>
    <div className={s.courses}>
      <h3 className={s.coursesTitle}><span className="c">## </span>coursework</h3>
      <div className={s.courseGrid}>
        {COURSES.map(([group, list]) => (
          <div key={group} className={s.courseCol}>
            <span className={`c ${s.small13}`}># {group}</span>
            <ul>{list.map(([name, code]) => <li key={code}><span>{name}</span><span className="c">{code}</span></li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  </>
);

// Pop-up contents, keyed by the name passed to open(). Each body is a free-form
// content area, so a project can later embed an interactive demo here.
export const MODALS = {
  edu: { file: "education.txt", body: Education },
  psim: {
    file: "~/projects/psim/README.md",
    body: (
      <Readme id="psim" title="Parallel Particle Simulation" deps="c c++ openmp mpi linux-perf python matplotlib" log={[
        "Optimised a computationally intensive particle simulation in C/C++, applying multithreading and parallel-programming concepts: synchronisation, shared-memory execution and distributed computation.",
        "Parallelised workloads with OpenMP and MPI, using cache locality and memory-access patterns to restructure algorithms and cut synchronisation, communication and memory overhead.",
        "Profiled execution with Linux perf, and built Python/Matplotlib tooling to extract, visualise and compare benchmark timings across implementations and configurations.",
      ]}>
        {/* TODO: speedup plot image */}
        <div className={`s ${s.plot}`}>[speedup plot — from your perf / matplotlib benchmarks]</div>
      </Readme>
    ),
  },
  router: {
    file: "~/projects/router/README.md",
    body: (
      <Readme id="router" title="Software Router" deps="c wireshark" log={[
        "Implemented a software router in C that receives, inspects and forwards network packets.",
        "Applied low-level networking concepts — IP routing, Ethernet, ARP and packet-level protocol handling.",
        "Used Wireshark to analyse and debug network traffic.",
      ]} />
    ),
  },
  cc: {
    file: "~/projects/cc/README.md",
    body: (
      <Readme id="cc" title="Compiler Frontend" deps="c++ llvm antlr4" log={[
        "Designed and implemented a compiler frontend for a C-like programming language using C++, LLVM and ANTLR4.",
        "Covers lexical analysis, parsing, semantic analysis and LLVM IR generation.",
      ]} />
    ),
  },
};
