import { Eip1193Bridge } from '@ethersproject/experimental';
import { supportedChains } from '@lifinance/sdk';
import { initializeConnector } from '@web3-react/core';
import { EIP1193 } from '@web3-react/eip1193';
import { providers } from 'ethers';

class Eip1193BridgeWithoutAccounts extends Eip1193Bridge {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request(request: { method: string; params?: any[] }): Promise<any> {
    if (
      request.method === 'eth_requestAccounts' ||
      request.method === 'eth_accounts'
    ) {
      return Promise.resolve([]);
    }
    return super.request(request);
  }
}
const { ethereum } = window as any;
const currentProvider = new providers.Web3Provider(ethereum);

// const chainId = (await currentProvider.getNetwork()).chainId;
// const currentChain;

const eip1193Provider = new Eip1193BridgeWithoutAccounts(
  currentProvider.getSigner(),
  currentProvider,
);

export const [eip1193, hooks] = initializeConnector<EIP1193>(
  (actions) => new EIP1193(actions, eip1193Provider, false),
  supportedChains.map((chain) => chain.id),
);