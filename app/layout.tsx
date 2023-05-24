import './globals.css'
import { Outfit } from 'next/font/google'

const font = Outfit({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Solidum DApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
