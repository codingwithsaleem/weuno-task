import Header from "@/components/reusableComponents/Hearder";
import "../globals.css";
import { Inter ,Playfair_Display} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: "swap",
})

export const metadata = {
  title: "Groves",
  description:
    "The New err of Luxery.",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`font-sans ${inter.className} ${playfair_display.className} `}
    >
      <body>
          <Header/>
          {children}
      </body>
    </html>
  );
}
