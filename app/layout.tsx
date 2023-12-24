import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/assets/style/main.scss'
import SideBar from '@/components/layout/sideBar'
import ContextProvider from '@/context/ContextProvider'
import Main from '@/components/main'
import Header from '@/components/layout/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BakuElectronics – elektronika, məişət texnika, ev üçün əşyalar',
  description: 'Telefonlar, smarfonlar, qadjetlər, noutbuklar, kompüterlər, televizorlar, ev kinoteatrları, kiçik və böyük məişət texnikası, iqlim texnikası, oyun konsolları, velosiped və siqveylər, eləcə də tekstil, qab-qacaq, mebel, ev dekorları kimi 15.000-dən çox məhsul çeşidi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ContextProvider>
          <div className="wrapper">
            <SideBar />
            <Main>
              <Header />
              <main>
                {children}
              </main>
            </Main>
          </div>
        </ContextProvider>
      </body>
    </html>
  )
}