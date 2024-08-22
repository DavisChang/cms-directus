import directusClient from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Metadata } from "next";
import "./page.scss";
import Link from "next/link";

import { IArticle } from "@/lib/types";
export const metadata: Metadata = {
  title: "Travel World!",
  description:
    "【熱氣球升空．璀璨土耳其１１日】米其林推薦、遊船晚餐、５星凱悅飯店、洞穴飯店２晚",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

async function getArticles() {
  return directusClient.request(readItems("articles"));
}

export default async function Home() {
  let articles: IArticle[] = [
    {
      id: "123",
      featured_image: "featured_image",
      title: "title",
      content: "content",
    },
  ];
  try {
    articles = (await getArticles()) as IArticle[];
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <section className="tour-hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{metadata.title as string}</h1>
            <p className="hero-description">{metadata.description}</p>
          </div>
        </div>
      </section>

      <section className="tour-features-section">
        <div className="features-container">
          <div className="features-grid">
            {articles?.map((article) => (
              <Link key={article?.id} href={`/travel/${article?.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`${process.env.API_HOST}/assets/${article.featured_image}?width=600`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {article?.title}
                      </Typography>
                      {article?.subTitle && (
                        <Typography variant="body2" color="text.secondary">
                          {article?.subTitle}
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
