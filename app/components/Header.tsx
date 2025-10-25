'use client'

import Link from 'next/link'
import { ethers } from 'ethers'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '../utils/cn'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const Links = [
    { name: 'Stake', href: '/' },
    { name: 'Withdrawal', href: '/withdrawal' },
    { name: 'Claim', href: '/claim' }
  ]

  const pathname = usePathname()
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-morphism border-b-2 border-red-200/50 dark:border-gray-700/50"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" />
      <div className="flex items-center justify-between h-16 sm:h-20">
        {/* Logo 和标题 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          <Link href="/" className="flex items-center">
            <span>YY Stake</span>
          </Link>
        </motion.div>
        {/* 导航栏链接 */}
        <nav className="items-center space-x-8">
          {Links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-base font-medium transition-all duration-300 group',
                  isActive
                    ? 'text-red-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-red-500'
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center space-x-2">
          <div className=" items-center space-x-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
export default Header
