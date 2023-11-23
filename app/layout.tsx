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
        <header className="fixed top-0 left-0 right-0 text-center py-3">
          <h1 className="text-3xl font-bold tracking-wide">
            <Link href="/">書き散らし</Link>
          </h1>
        </header>
        <main className="mt-24">{children}</main>
      </body>
    </html>
  )
}
