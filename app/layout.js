import './styles/globals.scss'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Nav from './components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vélo usager',
  description: 'Vélo usager pour le plaisir !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
