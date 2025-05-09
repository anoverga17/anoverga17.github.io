import MenuBar from "../components/menu-bar";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Gabriel Anover",
  description: "This is the personal website of Gabriel Anover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Hachi+Maru+Pop&family=IBM+Plex+Sans+JP&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <MenuBar/>
        {children}
      </body>
    </html>
  );
}
