import type {
  CoinbaseWalletParameters,
  MetaMaskParameters,
  SafeParameters,
  WalletConnectParameters,
} from 'wagmi/connectors'

export interface WalletConfig {
  walletConnect?: WalletConnectParameters
  coinbase?: CoinbaseWalletParameters
  metaMask?: MetaMaskParameters
  safe?: SafeParameters
}
