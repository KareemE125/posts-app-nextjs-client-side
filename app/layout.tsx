import '../styles/globals.css'
import NavBar from '../components/navbar'
import { AppContextProvider } from '../context/appContext'
import { Metadata } from 'next';
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noon Posts | Home',
  description: 'Share your awesome posts with others',
  authors: [{name: "Kareem Ezzat"}],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <AppContextProvider>
      <html lang="en">
        <body className={roboto.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </AppContextProvider>
  )
}
