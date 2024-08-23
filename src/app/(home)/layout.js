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
  title: "Glow Scout",
  description:
    "Glow Scout is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Glow Scout.",
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
