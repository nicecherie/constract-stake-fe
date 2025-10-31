import { createPublicClient, http, PublicClient } from 'viem'
import { sepolia } from 'viem/chains'

const client = createPublicClient({
  chain: sepolia,
  transport: http(process.env.INFURA_RPC_URL)
})

export const viemClients = (chainId: number): PublicClient => {
  const clients: {
    [key: number]: PublicClient
  } = {
    [sepolia.id]: client
  }
  return clients[chainId]
}
