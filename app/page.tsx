'use client'
import { motion } from 'framer-motion'
import TechElements from './components/TechElements'
import { RiFireLine } from 'react-icons/ri'
import SideBar from '@/app/components/SideBar'
import { useAccount, useDisconnect, useBalance } from 'wagmi'
import { useState } from 'react'

export default function Home() {
  const { address, isConnected, chain } = useAccount()
  const { data: balance } = useBalance({ address })

  const [amount, setAmount] = useState('')

  return (
    <>
      <SideBar
        isConnected={isConnected}
        address={address}
        balance={balance?.formatted}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-20 sm:pt-24 md:pt-28"
      >
        <div className="min-h-screen relative overflow-hidden">
          {/* 背景 */}
          <TechElements className="z-0" />
          {/* 主要内容区域 */}
          <div className="relative z-10">
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl max-auto">
                {/* Logo 和标题 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-8 sm:mb-12"
                >
                  {/* Logo */}
                  <div className="inline-block mb-6 sm:mb-8">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear'
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        },
                        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36
                     rounded-full border-4 border-red-300/30 dark:border-red-500/50
                     flex items-center justify-center shadow-2xl bg-gradient-to-br
                     from-red-100 to-orange-100 dark:from-red-900/50 dark:to-orange-900/50
                     glow-effect rounded-full"
                      style={{
                        boxShadow: '0 0 120px 0 rgba(239,68,68,0.4)',
                        filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.6))'
                      }}
                    >
                      <RiFireLine className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-500 animate-pulse-slow" />
                    </motion.div>
                  </div>
                  {/* 标题 */}
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r
                 from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4 sm:mb-6"
                  >
                    YY Stake
                  </h1>
                  <p
                    className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300
                 font-medium max-w-3xl mx-auto leading-relaxed px-4"
                  >
                    🔥✨ Stake ETH to earn tokens ✨🔥
                  </p>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  )
}
