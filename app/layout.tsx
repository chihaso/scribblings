import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '書き散らし',
  description: '思ったことや読書の感想などの書き散らしブログ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header>
          <h1>
            <Link href="/">書き散らし</Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  )
}
