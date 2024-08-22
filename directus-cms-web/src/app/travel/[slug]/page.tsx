import { Metadata } from "next";
import "./TravelPage.scss";
import Button from "@mui/material/Button";

import directusClient from "@/lib/directus";
import { readItem } from "@directus/sdk";
import { notFound } from "next/navigation";
import { ITravel } from "@/lib/types";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luxury Austria & Czech Tour",
  description:
    "Experience the beauty of Austria and the Czech Republic with visits to historic castles, charming villages, and breathtaking lake districts. Enjoy luxurious accommodations, including five-star hotels and scenic lodges. Perfect for those seeking an unforgettable European adventure with guided tours and special local experiences.",
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

async function getArticle(id: string) {
  console.log(id);
  try {
    const article = await directusClient.request(readItem("articles", id));
    return article;
  } catch (error) {
    console.error("error:", error);
    notFound();
  }
}
export default async function Page({ params }: { params: { slug: string } }) {
  let travel: ITravel = {
    featured_image: "string",
    title: "string",
    content: "content",
  };
  try {
    travel = (await getArticle(params.slug)) as ITravel;
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="tour-page">
      <header className="tour-header">
        <h1>{metadata.title as string}</h1>
        <p>10 Days | 7 Nights | Starting from Taoyuan</p>
        <p>
          第二人 省$3,000 限16名（剩 16 名）線上旅展優惠 第二人 省$3,000
          （優惠日期：2024/08/12起至2024/08/23前）
        </p>
        <div className="hero-buttons">
          <Button variant="contained">訂購</Button>
        </div>
      </header>
      <section className="tour-details">
        <div className="image-banner">
          <img
            src="https://via.placeholder.com/800x400.png?text=Luxury+Tour+Image"
            alt="Tour Banner"
          />
        </div>
        <div className="tour-description">
          <h2>Tour Highlights</h2>
          <p>{metadata.description as string}</p>
        </div>
        <ul className="tour-features">
          <li>Stay in five-star hotels</li>
          <li>Visit iconic castles and historic towns</li>
          <li>Special honeymoon packages available</li>
        </ul>

        <div>
          <img
            src={`${process.env.API_HOST}/assets/${travel?.featured_image}?width=600`}
            alt=""
          />
          <h1 className="mb-3 text-2xl font-semibold">{travel?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: travel?.content }} />
        </div>
      </section>
      <footer className="tour-footer">
        <p>
          For more information, contact us at 123-456-7890 or visit our website.
        </p>
      </footer>
    </div>
  );
}
