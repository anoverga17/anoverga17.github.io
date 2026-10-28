import Content from "@/components/content";
import { NAME, PAGES, pageFromPath } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(PAGES).map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}

const pageOf = async (params) => {
  const { slug = [] } = await params;
  return pageFromPath("/" + slug.join("/"));
};

export async function generateMetadata({ params }) {
  const p = PAGES[await pageOf(params)];
  const title = p.path === "/" ? NAME : `${p.title} — ${NAME}`;
  return {
    title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: { title, description: p.description, url: p.path, type: "website", images: ["/gabriel-1.jpg"] },
  };
}

export default async function Page({ params }) {
  return <Content page={await pageOf(params)} />;
}
