import './globals.css'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '@fontsource-variable/material-symbols-sharp'

const font = Outfit({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Solidum Assets | Create Assets from Anything',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    other: [
      {
        url: '/mask-icon.svg',
        rel: 'mask-icon',
        // @ts-ignore
        color: '#000000',
      },
    ],
  },
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
