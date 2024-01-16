
import Navbar from './components/ui/navbar'
import NavbarMain from './components/ui/navbarMain'
import NavbarOptions from './components/ui/navbarOptions'
import './globals.css'

import "react-alice-carousel/lib/alice-carousel.css";
import Footer from './components/ui/footer';




export const metadata = {
  title: 'Mutageno - Serigrafista',
  description: 'Ropa personalizada y piezas de coleccion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

  
      <body className='flex flex-col min-h-screen'>


        <Navbar></Navbar>
        <NavbarMain></NavbarMain>
        <NavbarOptions></NavbarOptions>
<div className='p-4'>
{children}
</div>


    
<div className='p-4'>
<Footer></Footer>
</div>   

        </body>


    </html>
  )
}
