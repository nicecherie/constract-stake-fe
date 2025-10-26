import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'viem'
import { sepolia } from 'wagmi/chains'

const ProjectId = '9530dc8c532259e3b392b4d86d9044ab'

export const config = getDefaultConfig({
  appName: 'Stake-fe',
  projectId: ProjectId,
  chains: [sepolia],
  transports: { [sepolia.id]: http(process.env.INFURA_RPC_URL) },
  ssr: true // If your dApp uses server side rendering (SSR)
})

export const defaultChainId: number = sepolia.id
