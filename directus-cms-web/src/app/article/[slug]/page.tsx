import directusClient from "@/lib/directus";
import { IArticle } from "@/lib/types";
import { readItem } from "@directus/sdk";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
async function getArticle(id: string) {
  try {
    const article = await directusClient.request(readItem("articles", id));
    return article;
  } catch (error) {
    console.error("error:", error);
    notFound();
  }
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  let article: IArticle = {
    featured_image: "string",
    title: "string",
    content: "content",
  };
  try {
    article = (await getArticle(params.slug)) as IArticle;
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
      <img
        src={`${process.env.API_HOST}/assets/${article?.featured_image}?width=600`}
        alt=""
      />
      <h1 className="mb-3 text-2xl font-semibold">{article?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article?.content ?? "" }} />
    </div>
  );
}
