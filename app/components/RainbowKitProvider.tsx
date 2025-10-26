'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/app/utils/wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

const client = new QueryClient()

export default function RainbowKitProviders({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider locale="en-US">{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
