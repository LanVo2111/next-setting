import { Prata } from 'next/font/google'
import './globals.css'
import '@/styles/styles.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ReduxProvider from '@/provider'
import { Metadata } from 'next'
import ErrorBoundary from '@/components/error-boundary'


const openSans = Prata({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: {
    absolute: '', //dùng ở page, sẽ đề lên template
    default: 'Create Next App',
    template: "%s | Create Next App" // Page con có không, nếu có thì dùng của page con, không thì dùng title "Create Next App"
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const storeRef = useRef<AppStore>()
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = store
  // }
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <ReduxProvider>
          <Header />
          {/* <ErrorBoundary> */}
            {children}
          {/* </ErrorBoundary> */}
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  )
}
