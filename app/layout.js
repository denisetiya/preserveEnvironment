import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Preserve Enviroment',
  description: 'Create by deni setiya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mb-32'>
          {children}
        </div>
      </body>
    </html>
  )
}
