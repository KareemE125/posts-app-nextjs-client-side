import Link from 'next/link'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar'
import { AppContextProvider } from '../context/appContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noon Posts',
  description: 'Share your awesome posts with others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AppContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </AppContextProvider>
  )
}
