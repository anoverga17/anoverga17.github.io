import MenuBar from "../components/menu-bar";
import Letter from "../components/letter"
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Gabriel Anover",
  description: "This is the personal website of Gabriel Anover",
};

const name = "GABRIEL";

export default function RootLayout({ children }) {
    const letter_animate = [];
    for (let i = 0; i < 15; i++) {
        letter_animate.push({
            key: i,
            x: `${Math.floor(Math.random() * 100)}vw`,
            time: `${Math.floor(Math.random() * 10) + 5}s`,
            letter: name[Math.floor(Math.random() * 7)],
            colour: "#" + Math.floor(Math.random()*16777215).toString(16)
        });
    }
    
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
                {letter_animate.map(l => <Letter key={l.key} time={l.time} x={l.x} letter={l.letter} colour={l.colour}/>)}
            </body>
        </html>
    );
}
