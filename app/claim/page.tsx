'use client'
import { motion } from 'framer-motion'
import { useStakeContract } from '../hooks/useContract'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Pid } from '../utils'
import { useAccount, useWalletClient } from 'wagmi'
import { formatUnits, parseUnits } from 'viem'
import { CustomConnectButton } from '../components/ui/CustomConnectButton'
import { waitForTransactionReceipt } from 'viem/actions'
import { toast } from 'react-toastify'
import { FiArrowUp, FiClock, FiInfo } from 'react-icons/fi'
import { cn } from '../utils/cn'
import { retryWithDelay } from '../utils/retry'
import TechElements from '../components/TechElements'

export default function Withdrawal() {
  return (
    <div className="w-full h-screen max-w-4xl mx-auto relative">
      <TechElements className="z-0" />
    </div>
  )
}
