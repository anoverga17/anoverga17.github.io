export const NAME = "Gabriel Anover";
export const EMAIL = "anover.gabriel@gmail.com";
export const GITHUB = "https://github.com/anoverga17";
export const GITHUB_HANDLE = "@anoverga17";
// TODO: LinkedIn profile URL and handle (not found in the repo).
export const LINKEDIN = "#";
export const LINKEDIN_HANDLE = "[/in/handle]";
// TODO: résumé PDF (e.g. drop it in public/ and point this at "/resume.pdf").
export const RESUME = "#";

export const PAGES = {
  home: { path: "/", cwd: "~", title: "Home", description: "Gabriel Anover, a system engineer in Tokyo drawn to the lower layers: parallel runtimes, packet forwarding and compiler frontends." },
  journal: { path: "/journal", cwd: "~/journal", title: "Journal", description: "Work experience and education." },
  skills: { path: "/skills", cwd: "~", title: "Skills", description: "What I work with, and where I've used it." },
  projects: { path: "/projects", cwd: "~/projects", title: "Projects", description: "A parallel particle simulation, a software router and a compiler frontend." },
  hobbies: { path: "/beyond-jobs", cwd: "~/beyond-jobs", title: "Beyond jobs", description: "Kenjutsu, astronomy and Dungeons & Dragons." },
  kenjutsu: { path: "/beyond-jobs/kenjutsu", cwd: "~/beyond-jobs/kenjutsu", title: "Kenjutsu", description: "The classical art of the Japanese sword." },
  astronomy: { path: "/beyond-jobs/astronomy", cwd: "~/beyond-jobs/astronomy", title: "Astronomy", description: "Reading the night sky." },
  dnd: { path: "/beyond-jobs/dnd", cwd: "~/beyond-jobs/dnd", title: "Dungeons & Dragons", description: "Collaborative storytelling, with dice." },
  contact: { path: "/contact", cwd: "~", title: "Contact", description: "Let's talk about systems." },
  all: { path: "/all", cwd: "~", title: "make all", description: "The whole site on one page." },
};

export const pageFromPath = (path = "/") =>
  Object.keys(PAGES).find((k) => PAGES[k].path === (path.replace(/\/$/, "") || "/"));
