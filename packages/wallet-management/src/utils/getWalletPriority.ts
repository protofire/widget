const walletPriority: Record<string, number> = {
  safe: 1,
  walletConnect: 2,
  metaMaskSDK: 3,
  'io.metamask': 3,
  'io.metamask.mobile': 3,
  coinbaseWalletSDK: 4,
  'com.coinbase.wallet': 4,

}

export const getWalletPriority = (id: string) => {
  return walletPriority[id] || 1000
}
