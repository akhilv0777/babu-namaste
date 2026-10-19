import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday, Saumya!",
  description: "A little birthday film, made with love for Saumya.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Caveat:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Dancing+Script:wght@400;700&family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/theme/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/theme/style.css" rel="stylesheet" />
        <link href="/theme/sections/1_hero/hero.css" rel="stylesheet" />
        <link href="/theme/sections/2_blinds/blinds.css" rel="stylesheet" />
        <link href="/theme/sections/3_book/book.css" rel="stylesheet" />
        <link href="/theme/sections/5_spin/spin.css" rel="stylesheet" />
        <link
          href="/theme/sections/6_magical_gallery/magical_gallery.css"
          rel="stylesheet"
        />
        <link href="/theme/sections/7_cake/cake.css" rel="stylesheet" />
        <link href="/theme/sections/8_new/new.css" rel="stylesheet" />
        <link href="/theme/sections/footer_shell/shell.css" rel="stylesheet" />
        <link href="/theme/sections/footer_shell/nav.css" rel="stylesheet" />
      </head>
      <body className="home not-loaded moonlight-theme">{children}</body>
    </html>
  );
}
