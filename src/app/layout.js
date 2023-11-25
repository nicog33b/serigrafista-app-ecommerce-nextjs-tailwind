
import Navbar from './components/ui/navbar'
import NavbarMain from './components/ui/navbarMain'
import NavbarOptions from './components/ui/navbarOptions'
import './globals.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/ui/footer';




export const metadata = {
  title: 'Mutageno - Serigrafista',
  description: 'Ropa personalizada y piezas de coleccion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

  
      <body>
        <Navbar></Navbar>
        <NavbarMain></NavbarMain>
        <NavbarOptions></NavbarOptions>

{children}

     
        <Footer></Footer>
        </body>

    </html>
  )
}
