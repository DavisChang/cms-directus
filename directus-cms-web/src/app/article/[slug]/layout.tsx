import Link from "next/link";
import { ReactNode } from "react";

type RootLayout = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">
            <p className="mb-3 text-2xl font-semibold">
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {"<-"}
              </span>
              HOME
            </p>
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
