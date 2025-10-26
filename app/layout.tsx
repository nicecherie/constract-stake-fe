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

export const metadata: Metadata = {
  title: 'MetaNodeStack',
  description: 'Welcome to invest in this project'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeRegistry>
            <RainbowKitProviders>
              <TechBackground>
                {/* <Header /> */}

                <WalletConnectButton />
                {children}
                <footer className="relative glass-morphism">
                  <div className="footer max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                    <div className="footer-content max-w-7xl flex justify-between items-center px-4 py-2">
                      <div className="declaration">
                        © {new Date().getFullYear()} MetaNode Stake. All rights
                        reserved.🔥✨
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
      </body>
    </html>
  )
}
