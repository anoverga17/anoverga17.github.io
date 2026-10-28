import Shell from "@/components/shell";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://anoverga17.github.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700;800&family=Sora:wght@200;400;600&family=Cinzel:wght@600;700&family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;0,800;1,400&family=M+PLUS+1+Code:wght@400;700&display=swap" />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
