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


export {inter,playfair_display};