'use client'

import Link from 'next/link'
import { ethers } from 'ethers'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800"
    >
      <div className="absolute inset-0 tech-grid pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center h-auto min-h-[56px] sm:min-h-[64px] py-2 gap-2 md:gap-0"></div>
      </div>
    </motion.header>
  )
}
export default Header
