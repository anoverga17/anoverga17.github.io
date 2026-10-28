"use client";

import { NAME } from "@/lib/site";
import { useShell } from "./shell";
import s from "./hobbies.module.css";

// Bracketed text on these pages is placeholder copy (TODO: write it).

function Rows({ rows, className }) {
  return rows.map(([k, v], i) => <div key={i} className={className}><dt>{k}</dt><dd>{v}</dd></div>);
}

export function Kenjutsu() {
  return (
    <section aria-label="Kenjutsu" className={s.ken}>
      <svg aria-hidden="true" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMax slice" className={s.scene}>
        <circle cx="1130" cy="230" r="118" fill="#C8372D" opacity="0.82" />
        <path className="ink-bird" d="M830 300 q10 -9 20 0 q10 -9 20 0" />
        <path className="ink-bird" d="M880 330 q8 -7 16 0 q8 -7 16 0" />
        <path className="ink-bird" d="M800 350 q7 -6 14 0 q7 -6 14 0" />
        <path fill="#E6E1D5" d="M0 610 C 160 520 260 480 380 550 C 470 500 560 430 680 510 C 790 450 900 380 1040 480 C 1150 430 1260 450 1440 520 L1440 1000 L0 1000 Z" />
        <rect x="1008" y="420" width="4" height="40" fill="#5E594F" />
        <polygon points="985,478 1010,460 1035,478" fill="#5E594F" />
        <rect x="995" y="478" width="30" height="22" fill="#5E594F" />
        <polygon points="976,508 1010,490 1044,508" fill="#5E594F" />
        <rect x="991" y="508" width="38" height="22" fill="#5E594F" />
        <polygon points="968,538 1010,520 1052,538" fill="#5E594F" />
        <rect x="987" y="538" width="46" height="22" fill="#5E594F" />
        <polygon points="960,568 1010,550 1060,568" fill="#5E594F" />
        <rect x="983" y="568" width="54" height="40" fill="#5E594F" />
        <path fill="#CFC8BA" opacity="0.9" d="M0 710 C 140 660 230 600 330 670 C 420 620 520 580 640 660 C 760 620 860 580 980 650 C 1100 600 1230 620 1440 680 L1440 1000 L0 1000 Z" />
        <ellipse cx="760" cy="700" rx="900" ry="34" fill="#FAF8F2" opacity="0.6" />
        <path fill="#A39B8B" opacity="0.85" d="M0 820 C 180 780 300 740 460 800 C 600 760 720 750 860 810 C 1000 770 1180 760 1440 810 L1440 1000 L0 1000 Z" />
        <path className="ink-branch" d="M-20 110 C 110 130 210 100 320 140 C 370 158 420 152 470 132" />
        <path className="ink-twig" d="M210 114 C 232 84 262 72 296 64" />
        <ellipse cx="120" cy="104" rx="58" ry="18" fill="#2F3A2E" opacity="0.88" />
        <ellipse cx="300" cy="58" rx="50" ry="16" fill="#2F3A2E" opacity="0.88" />
        <ellipse cx="352" cy="134" rx="52" ry="16" fill="#2F3A2E" opacity="0.88" />
        <ellipse cx="462" cy="126" rx="36" ry="12" fill="#2F3A2E" opacity="0.82" />
      </svg>

      <div className={s.kenInner}>
        <div className={s.kenHead}>
          <div className={s.kenTitle}>
            <div className={s.kenKicker}>
              <span aria-hidden="true" lang="ja" className={s.seal}>剣</span>
              <span className={s.kicker}>Beyond jobs · 壱</span>
            </div>
            <h1 className={s.kenH1}>Kenjutsu</h1>
            <p className={s.kenSub}><span lang="ja">剣術</span> — the classical art of the Japanese sword</p>
          </div>
          <span lang="ja" aria-hidden="true" className={s.vertical}>剣道</span>
        </div>

        <div className={s.kenRow}>
          <article className={s.kenArticle}>
            <h2 className={s.kenH2}>How I train</h2>
            <p className={s.kenTodo}>[Which arts you practise — your ryūha, and any related arts — and how long you&apos;ve been training.]</p>
            <p className={s.kenTodo}>[What a typical class looks like, who you train with, and what keeps you coming back.]</p>
          </article>
          <aside aria-label="Training details" className={s.kenAside}>
            <dl className={s.dl}>
              <Rows className={s.kenRowDl} rows={[
                [<>ART <span lang="ja">武道</span></>, "[arts practised]"],
                [<>SCHOOL <span lang="ja">流派</span></>, "[ryūha]"],
                [<>DOJO <span lang="ja">道場</span></>, "[dojo, city]"],
                [<>SINCE <span lang="ja">入門</span></>, "[year]"],
                [<>RANK <span lang="ja">段位</span></>, "[if any]"],
              ]} />
            </dl>
          </aside>
        </div>

        <div className={s.kenPhotos}>
          <figure className={s.kenFig}>
            <div className={s.kenFrame}>[photo — training]</div>
            <figcaption>[caption]</figcaption>
          </figure>
          <figure className={`${s.kenFig} ${s.kenFigOffset}`}>
            <div className={s.kenFrame}>[photo — dojo / kata]</div>
            <figcaption>[caption]</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Astronomy() {
  return (
    <section aria-label="Astronomy" className={s.astro}>
      <svg aria-hidden="true" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" className={s.scene}>
        <ellipse className="sky-grid" cx="720" cy="1320" rx="1300" ry="900" />
        <ellipse className="sky-grid" cx="720" cy="1320" rx="1100" ry="760" />
        <ellipse className="sky-grid" cx="720" cy="1320" rx="900" ry="620" />
        <path className="sky-grid" d="M720 420 L720 1000" />
        <path className="sky-grid" d="M720 420 Q 420 660 160 1000" />
        <path className="sky-grid" d="M720 420 Q 1020 660 1280 1000" />
        <polyline className="sky-line" points="1040,300 1120,250 1190,290 1262,236 1300,330" />
        <circle cx="1040" cy="300" r="2" fill="#FFFFFF" />
        <circle cx="1120" cy="250" r="2.6" fill="#FFFFFF" />
        <circle cx="1190" cy="290" r="1.8" fill="#FFFFFF" />
        <circle cx="1262" cy="236" r="2.4" fill="#FFFFFF" />
        <circle cx="1300" cy="330" r="2" fill="#FFFFFF" />
        <g transform="translate(1180 140)"><circle r="2.4" fill="#FFFFFF" /><path className="glint" d="M-12 0H12M0 -12V12" /></g>
        <g transform="translate(250 230)"><circle r="2" fill="#FFFFFF" /><path className="glint" d="M-9 0H9M0 -9V9" /></g>
        <g transform="translate(980 560)"><circle r="1.8" fill="#FFFFFF" /><path className="glint" d="M-8 0H8M0 -8V8" /></g>
      </svg>

      <div className={s.astroInner}>
        <div className={s.astroHead}>
          <span className={s.astroKicker}>Observing log · <span lang="ja">天文</span></span>
          <h1 className={s.astroH1}>Astronomy</h1>
          <p className={s.coords}>RA <span className={s.gold}>[—]</span> · DEC <span className={s.gold}>[—]</span> · <span className={s.gold}>[your observing site]</span></p>
        </div>

        <article className={s.astroArticle}>
          <h2 className={s.astroH2}>How I started looking up</h2>
          <p className={s.astroTodo}>[What got you interested — a first look through a telescope, a dark-sky trip, a book or a person.]</p>
          <p className={s.astroTodo}>[What you like to observe or photograph now, and what&apos;s next on your list.]</p>
        </article>

        <div className={s.astroRow}>
          <figure className={s.scopeFig}>
            <span className={s.figLabel}>01 · The scope</span>
            <div className={`${s.astroFrame} ${s.tall}`}>[photo of your telescope]</div>
            <dl className={s.specs}>
              <Rows className={s.spec} rows={[["TELESCOPE", "[model, aperture]"], ["MOUNT", "[mount]"], ["CAMERA", "[camera]"]]} />
            </dl>
          </figure>
          <figure className={s.shotFig}>
            <span className={s.figLabel}>02 · Shot by me</span>
            <div className={`${s.astroFrame} ${s.wide}`}>[your astrophoto]</div>
            <dl className={s.specsGrid}>
              <Rows className={s.spec} rows={[["TARGET", "[object]"], ["DATE", "[date]"], ["EXPOSURE", "[total integration]"], ["LOCATION", "[site]"]]} />
            </dl>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Dnd() {
  const { type, typing } = useShell();
  return (
    <section aria-label="Dungeons and Dragons" className={s.dnd}>
      <div className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroMain}>
            <span className={s.dndKicker}>Campaign · in progress</span>
            <h1 className={s.dndH1}>[Campaign name]</h1>
            <p className={s.tagline}>[A one-line tagline for the campaign.]</p>
            <div className={s.tags}>
              {[["DM", NAME], ["SYSTEM", "[5e / other]"], ["SESSIONS", "[#]"], ["PLAYERS", "[#]"]].map(([k, v]) => (
                <span key={k} className={s.tag}><span className={s.tagKey}>{k}</span> {v}</span>
              ))}
            </div>
          </div>
          <div className={s.join}>
            {/* TODO: Foundry VTT URL and live status */}
            <a href="#" className={s.joinBtn}>Join the table <span aria-hidden="true">↗</span></a>
            <span className={s.status}>on Foundry Virtual Tabletop · <span className={s.goldText}>status: [online / offline]</span></span>
            <span className={s.note}>The server may be down between sessions.</span>
            <button type="button" className={`chip ${s.rollBtn}`} onClick={() => type("./roll")} disabled={typing}>Roll a d20</button>
          </div>
        </div>
      </div>

      <div className={s.dndBody}>
        <article className={s.parchment}>
          <h2 className={s.synH2}>Campaign Synopsis</h2>
          <svg aria-hidden="true" viewBox="0 0 400 6" preserveAspectRatio="none" className={s.rule}><polygon points="0,3 400,0 400,6" fill="#7A200D" /></svg>
          <h3 className={s.synH3}>The Setting</h3>
          <p className={s.synP}>[Where and when the campaign takes place — the world, the region, the mood.]</p>
          <h3 className={s.synH3}>The Story So Far</h3>
          <p className={s.synP}>[The hook that brought the party together, and what they&apos;ve done since.]</p>
          <h3 className={s.synH3}>What&apos;s at Stake</h3>
          <p className={s.synP}>[The threat or question driving the next arc — no spoilers for your players.]</p>
        </article>

        <aside aria-label="Behind the screen" className={s.screen}>
          <h2 className={s.screenH2}>Behind the Screen</h2>
          <p className={s.screenP}>[Your experience as a DM — how you started, what you love to run, and your style at the table.]</p>
          <dl className={s.dl}>
            <Rows className={s.dmRow} rows={[["DMING SINCE", "[year]"], ["CAMPAIGNS RUN", "[#]"], ["LONGEST RUN", "[# sessions]"], ["FAVOURITE TO RUN", "[e.g. intrigue, dungeons]"]]} />
          </dl>
        </aside>
      </div>
    </section>
  );
}
