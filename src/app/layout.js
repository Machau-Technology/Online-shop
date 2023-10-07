import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { FormDataProvider } from '@/context/shoppingContext/ShoppingContext'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'MasterTag',
  description: `India's first smart tracking solutions`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FormDataProvider>
        <body className={poppins.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </FormDataProvider>
    </html>
  )
}
