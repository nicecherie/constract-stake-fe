import type { Metadata } from 'next'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import Header from './components/Header'
import ThemeRegistry from './ThemeRegistry'
import { FiGithub } from 'react-icons/fi'
import { ThemeProvider } from './contexts/ThemeContext'
import TechBackground from './components/TechBackground'
import RainbowKitProviders from './components/RainbowKitProvider'
import WalletConnectButton from './components/WalletConnectButton'
import ErrorBoundary from '@/app/components/ErrorBoundary'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'YY Stake',
  description: 'Welcome to invest in this project',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <ThemeProvider>
            <ThemeRegistry>
              <RainbowKitProviders>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  toastClassName="custom-toast"
                  className="custom-toast-body"
                />
                <TechBackground>
                  {/* <Header /> */}
                  <WalletConnectButton />
                  <div className="relative flex flex-col flex-grow ">
                    {children}
                  </div>

                  <footer className="relative glass-morphism border-t-2 border-red-200/50 dark:border-gray-700/50 mt-auto">
                    <div className="footer max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                      <div className="footer-content max-w-7xl flex justify-between items-center px-4 py-2">
                        <div className="declaration">
                          © {new Date().getFullYear()} MetaNode Stake. All
                          rights reserved.🔥✨
                        </div>
                        <div className="social hover:text-pink-500">
                          <a href="https://github.com/nicecherie/constract-stake-fe">
                            <FiGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </footer>
                </TechBackground>
              </RainbowKitProviders>
            </ThemeRegistry>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
