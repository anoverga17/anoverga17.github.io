"use client";

import { Component, createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAME, GITHUB, LINKEDIN, PAGES, pageFromPath } from "@/lib/site";
import { MODALS } from "./modals";
import s from "./shell.module.css";

const ShellContext = createContext({ type: () => {}, open: () => {}, typing: false });
export const useShell = () => useContext(ShellContext);

const HOBBIES = ["kenjutsu", "astronomy", "dnd"];

const CHIPS = [
  ["home", "whoami"], ["journal", "cd journal"], ["skills", "cat skills"], ["projects", "cd projects"],
  ["hobbies", "cd beyond-jobs"], ["contact", "cat contact"], ["all", "make all"], ["", "help"],
];

const NAV = [
  ["home", "Home", "whoami"], ["journal", "Journal", "cd journal"], ["skills", "Skills", "cat skills"],
  ["projects", "Projects", "cd projects"], ["hobbies", "Hobbies", "cd beyond-jobs"], ["contact", "Contact", "cat contact"],
];

const CMD_ROWS = [
  ["whoami", "home — who I am"],
  ["cd projects", "things I've built"],
  ["cd journal", "work experience and education"],
  ["cd beyond-jobs", "hobbies: kenjutsu, astronomy, d&d"],
  ["cat contact", "get in touch"],
  ["cat skills", "languages and tools"],
  ["make all", "the whole site on one page"],
  ["cd ..", "up one folder"],
  ["./roll", "roll a d20"],
  ["clear", "hide the menu and this list"],
];

const TARGETS = {};
const add = (words, dest) => words.forEach((w) => { TARGETS[w] = dest; });
add(["~", "home", "top", "start", "whoami", "about", "about me", "me", "cat me.c", "who"], ["home"]);
add(["skills", "stack", "tech", "tools", "languages", "env", "tree", "systems"], ["skills"]);
add(["education", "school", "university", "uoft", "degree", "courses", "coursework", "keio"], ["journal", "education"]);
add(["projects", "project", "ls projects", "ls ~/projects", "portfolio", "psim", "router", "cc", "compiler"], ["projects"]);
add(["journal", "make journal", "starlog", ".starlog", "tail starlog", "tail ~/.starlog", "log", "experience", "jobs", "job", "work", "resume", "cv", "history"], ["journal"]);
add(["hobbies", "interests", "beyond-jobs", "beyond jobs", "ls beyond-jobs", "ls ~/beyond-jobs", "fun"], ["hobbies"]);
add(["kenjutsu", "beyond-jobs/kenjutsu"], ["kenjutsu"]);
add(["astronomy", "beyond-jobs/astronomy"], ["astronomy"]);
add(["dnd", "d&d", "dungeons and dragons", "dungeons & dragons", "beyond-jobs/dnd"], ["dnd"]);
add(["contact", "email", "mail", "hire", "hire me", "github", "linkedin", "contact --help"], ["contact"]);
add(["sky", "stars", "look up", "galaxy", "galaxy.txt", "cat galaxy.txt", "sky.txt", "cat sky.txt"], ["home", "skyart"]);
add(["all", "everything", "full page", "one page"], ["all"]);

function roll() {
  const n = 1 + Math.floor(Math.random() * 20);
  return { msg: { kind: "roll", value: String(n), note: n === 20 ? "natural 20." : n === 1 ? "critical fail." : "" } };
}

function resolve(raw, page) {
  const s = String(raw || "").trim().toLowerCase().replace(/^\$\s*/, "").replace(/\s+/g, " ").replace(/^\.\//, "");
  if (!s) return { none: true };
  if (/^sudo\b/.test(s)) return { msg: { kind: "info", text: "guest is not in the sudoers file. this incident will be reported. (it won't.)" } };
  if (s === "make" || s.indexOf("make ") === 0) {
    const tgt = s.slice(4).trim();
    if (!tgt || tgt === "help") return { menu: true };
    if (tgt === "all") return { go: ["all"] };
    if (tgt === "clean") return { clean: true };
    if (tgt === "roll" || tgt === "d20" || tgt === "roll d20") return roll();
    if (TARGETS[tgt]) return { go: TARGETS[tgt] };
    return { msg: { kind: "makeerr", text: tgt } };
  }
  if (/^(roll|roll d20|roll 1d20|d20)$/.test(s)) return roll();
  if (["help", "?", "h", "commands", "menu", "man", "ls", "nav", "navbar", "sections"].includes(s)) return { menu: true };
  if (["exit", "q", ":q", "close", "hide"].includes(s)) return { menu: false };
  if (s === "clear" || s === "cls" || s === "reset") return { clean: true };
  if (s === "cd") return { go: ["home"] };
  if (s === "cd ..") return { go: [HOBBIES.includes(page) ? "hobbies" : "home"] };
  if (TARGETS[s]) return { go: TARGETS[s] };
  const m = s.match(/^(cd|open|goto|go to|jump to|jump|ls|cat|tail|tree)\s+(.+)$/);
  if (m) {
    const key = m[2] === "~" ? "~" : m[2].replace(/^~\//, "").replace(/^\.\//, "").replace(/\/$/, "");
    if (TARGETS[key]) return { go: TARGETS[key] };
  }
  return { msg: { kind: "err", text: s } };
}

function complete(v) {
  const s = String(v || "").toLowerCase().replace(/^\s+/, "");
  if (!s) return null;
  const mc = s.match(/^cat\s+(.*)$/);
  if (mc) {
    const o = ["contact", "skills", "education"].find((x) => x.indexOf(mc[1]) === 0 && x !== mc[1]);
    return o ? "cat " + o : null;
  }
  const m = s.match(/^(cd|open)\s+(.*)$/);
  if (m) {
    const hit = ["~", "projects", "journal", "beyond-jobs", "kenjutsu", "astronomy", "dnd"].find((o) => o.indexOf(m[2]) === 0 && o !== m[2]);
    return hit ? m[1] + " " + hit : null;
  }
  return ["whoami", "help", "cd ", "cat ", "make all", "./roll", "clear"].find((o) => o.indexOf(s) === 0 && o !== s) || null;
}

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Message({ kind, text, value, note }) {
  if (kind === "nav") return <><span className="c">→ opened </span><span className="cy">{text}</span></>;
  if (kind === "err") return <><span className="k">command not found:</span> {text} <span className="c">— no worries, try help or click a command below.</span></>;
  if (kind === "makeerr") return <><span className="k">make: *** No rule to make target &apos;{text}&apos;. Stop.</span> <span className="c">— the only target here is make all. try help for everything else.</span></>;
  if (kind === "roll") return <><span className="c">rolling 1d20 … </span><span className="n" style={{ fontWeight: 800 }}>{value}</span> <span className="s">{note}</span></>;
  return <span className="c">{text}</span>;
}

const Close = () => <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path className="ico" d="M6 6l12 12M18 6L6 18" /></svg>;

class Shell extends Component {
  state = {
    input: "",
    typing: false,
    past: [],
    pIdx: -1,
    menuOpen: false,
    showHelp: false,
    modal: null,
    msg: { kind: "info", text: "welcome — this site is a terminal. type help for a menu and every command, or click one." },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.scrollTo(this.anchor);
      this.anchor = null;
    }
    if (prevState.modal !== this.state.modal && this.state.modal) this.modalEl?.focus();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.after);
    clearTimeout(this.scrollT);
  }

  scrollTo(anchor) {
    const el = anchor ? document.getElementById(anchor) : null;
    if (el) el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
    else window.scrollTo(0, 0);
  }

  run(raw) {
    const text = String(raw || "").trim();
    const past = text ? this.state.past.concat([text]) : this.state.past;
    const r = resolve(text, this.props.page);
    if (r.none) return this.setState({ input: "", pIdx: -1 });
    if (r.go) return this.goTo(r.go[0], r.go[1], past);
    const base = { input: "", past, pIdx: -1 };
    if (r.clean) return this.setState({ ...base, menuOpen: false, showHelp: false, msg: { kind: "info", text: "cleared — type help to bring the menu back." } });
    if (r.menu === true) return this.setState({ ...base, menuOpen: true, showHelp: true, msg: { kind: "info", text: "sections are in the menu up top ↑, every command is listed above — click one, or keep typing. clear hides them." } });
    if (r.menu === false) return this.setState({ ...base, menuOpen: false, showHelp: false, msg: { kind: "info", text: "menu hidden — type help to bring it back." } });
    this.setState({ ...base, msg: r.msg || null, showHelp: false });
  }

  goTo(page, anchor, past) {
    this.setState({ input: "", past, pIdx: -1, showHelp: false, modal: null, msg: { kind: "nav", text: PAGES[page].cwd } });
    clearTimeout(this.scrollT);
    if (page === this.props.page) {
      this.scrollT = setTimeout(() => this.scrollTo(anchor), 40);
    } else {
      // Scroll once the new route has rendered (see componentDidUpdate).
      this.anchor = anchor;
      this.props.router.push(PAGES[page].path, { scroll: false });
    }
  }

  navNow = (cmd) => {
    clearInterval(this.timer);
    clearTimeout(this.after);
    if (this.state.typing) this.setState({ typing: false });
    this.run(cmd);
  };

  type = (cmd) => {
    if (this.state.typing || !cmd) return;
    if (reduced()) return this.run(cmd);
    clearInterval(this.timer);
    let i = 0;
    this.setState({ typing: true, input: "" });
    this.timer = setInterval(() => {
      i += 1;
      this.setState({ input: cmd.slice(0, i) });
      if (i >= cmd.length) {
        clearInterval(this.timer);
        this.after = setTimeout(() => {
          this.setState({ typing: false });
          this.run(cmd);
        }, 140);
      }
    }, 34);
  };

  handleKey = (e) => {
    const k = e.key;
    if (k === "Enter") {
      e.preventDefault();
      if (!this.state.typing) this.run(this.state.input);
      return;
    }
    if (k === "Tab") {
      const c = complete(this.state.input);
      if (c) { e.preventDefault(); this.setState({ input: c }); }
      return;
    }
    if (k === "ArrowUp" || k === "ArrowDown") {
      const past = this.state.past;
      if (!past.length) return;
      e.preventDefault();
      let i = this.state.pIdx;
      if (k === "ArrowUp") {
        i = i < 0 ? past.length - 1 : Math.max(0, i - 1);
      } else {
        if (i < 0) return;
        i += 1;
        if (i >= past.length) return this.setState({ pIdx: -1, input: "" });
      }
      this.setState({ pIdx: i, input: past[i] });
      return;
    }
    if ((k === "l" || k === "L") && e.ctrlKey) {
      e.preventDefault();
      this.setState({ msg: null });
    }
  };

  open = (modal) => this.setState({ modal });
  closeModal = () => this.setState({ modal: null });

  render() {
    const { page } = this.props;
    const { typing, msg, modal } = this.state;
    const inHobby = HOBBIES.includes(page);
    const chips = (inHobby ? [["", "cd .."]] : []).concat(CHIPS);
    const dialog = MODALS[modal];

    return (
      <ShellContext.Provider value={{ type: this.type, open: this.open, typing }}>
        <div className={s.root}>
          <header className={s.top}>
            <div className={s.topInner}>
              <button type="button" className={`navbtn ${s.brand}`} onClick={() => this.navNow("cd ~")} aria-label={`${NAME} — home`}>
                <span aria-hidden="true" className="f">~</span><span>{NAME}</span>
              </button>

              {this.state.menuOpen && (
                <nav aria-label="Sections" className={s.nav}>
                  {NAV.map(([key, label, cmd]) => {
                    const active = key === page || (key === "hobbies" && inHobby);
                    return <button key={key} type="button" className={`navbtn ${s.navItem}`} aria-current={active ? "page" : undefined} onClick={() => this.navNow(cmd)}>{label}</button>;
                  })}
                  <button type="button" className={`navbtn ${s.iconBtn}`} aria-label="Hide sections" onClick={() => this.setState({ menuOpen: false, msg: { kind: "info", text: "menu hidden — type help to bring it back." } })}><Close /></button>
                </nav>
              )}

              <div className={s.social}>
                <a className={`navlink ${s.socialLink}`} href={GITHUB} aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 98 96" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
                  <span>github</span>
                </a>
                <a className={`navlink ${s.socialLink}`} href={LINKEDIN} aria-label="LinkedIn">
                  <img src="/logos/LI-In-Bug.png" alt="" width="18" height="18" />
                  <span>linkedin</span>
                </a>
              </div>
            </div>
          </header>

          <main className={s.main}>{this.props.children}</main>

          {dialog && (
            <div className={s.overlay}>
              <button type="button" aria-label="Close" className={s.backdrop} onClick={this.closeModal} />
              <div role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} ref={(el) => { this.modalEl = el; }} className={s.dialog}
                onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); this.closeModal(); } }}>
                <div className={s.dialogBar}>
                  <span className="cy">{dialog.file}</span>
                  <button type="button" className={`navbtn ${s.dialogClose}`} aria-label="Close" onClick={this.closeModal}><span className="c">esc</span><Close /></button>
                </div>
                <div className={s.dialogBody}>{dialog.body}</div>
              </div>
            </div>
          )}

          <div className={`cmdline ${s.term}`}>
            <div className={s.termInner}>
              {this.state.showHelp && (
                <div className={s.help}>
                  <div className={s.helpHead}>
                    <span><span className="k">$</span> <span className="f">help</span> <span className="c"># cd moves you · cat reads a file · ./ runs a program · make all builds everything</span></span>
                    <button type="button" className={`navbtn ${s.iconBtn}`} aria-label="Hide command list" onClick={() => this.setState({ showHelp: false })}><Close /></button>
                  </div>
                  <div className={s.helpGrid}>
                    {CMD_ROWS.map(([cmd, desc]) => (
                      <div key={cmd} className={s.helpRow}>
                        <button type="button" className={`chip ${s.helpCmd}`} onClick={() => this.type(cmd)} disabled={typing}>{cmd}</button>
                        <span className={s.helpDesc}>{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div aria-live="polite" className={s.msg}>{msg && <Message {...msg} />}</div>
              <label htmlFor="term-input" className={`c ${s.label}`}>▼ type a command below and press enter — or click one of the commands under it</label>
              <div className={`promptbox ${s.prompt}`}>
                <span aria-hidden="true" className={s.ps1}><span className="f pfx">guest@tokyo</span><span className="c pfx">:</span><span className="cy">{(PAGES[page] || PAGES.home).cwd}</span><span className="k"> $</span></span>
                <input id="term-input" type="text" placeholder="try: help" autoComplete="off" autoCapitalize="off" spellCheck={false} className={s.input}
                  value={this.state.input} onChange={(e) => this.setState({ input: e.target.value, pIdx: -1 })} onKeyDown={this.handleKey} />
                <span aria-hidden="true" className={`c ${s.enter}`}>↵ enter</span>
              </div>
              <div className={s.chips}>
                <span className={`c ${s.try}`}>try →</span>
                {chips.map(([key, cmd]) => (
                  <button key={cmd} type="button" className={`chip ${s.chip}`} aria-current={key && key === page ? "page" : undefined} onClick={() => this.type(cmd)} disabled={typing}>{cmd}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShellContext.Provider>
    );
  }
}

export default function ShellRoot({ children }) {
  return <Shell page={pageFromPath(usePathname())} router={useRouter()}>{children}</Shell>;
}
