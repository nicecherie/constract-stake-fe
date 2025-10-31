import {
  Abi,
  Address,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  getContract as viemGetContract
} from 'viem'
import { defaultChainId } from './wagmi'
import { viemClients } from './viem'

// viem: getContract({ address, abi, client: publicClient })

export const getContract = <
  TAbi extends Abi | readonly unknown[],
  TwalletClient extends WalletClient
>({
  abi,
  address,
  chainId = defaultChainId,
  signer
}: {
  abi: TAbi | readonly unknown[]
  address: Address
  chainId?: number
  signer?: TwalletClient
}) => {
  const c = viemGetContract({
    abi,
    address,
    client: {
      public: viemClients(chainId),
      wallet: signer
    }
  }) as unknown as GetContractReturnType<TAbi, TwalletClient, Address>

  return {
    ...c,
    account: signer?.account,
    chain: signer?.chain
  }
}
