import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hackathon | Next App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header></header>

        <main>

          <section>
            {children}
          </section>

        </main>
      </body>
    </html>
  );
}
