import './App.css';
import MainPage from './pages/main';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, useNetwork, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { defineChain } from 'viem';

const newMainnet = defineChain({
  id: 97,
  network: 'homestead',
  name: 'Binance',
  nativeCurrency: { name: 'TBNB', symbol: 'TBNB', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://data-seed-prebsc-2-s1.binance.org:8545'],
    },
    public: {
      http: ['https://data-seed-prebsc-2-s1.binance.org:8545'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'BSCscan',
      url: 'https://bscscan.com',
    },
    default: {
      name: 'BSCscan',
      url: 'https://bscscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0x768Ca416BdF1864Ca7735c98158312c65D4278cb',
      blockCreated: 35999901,
    },
  },
});

const { chains, publicClient } = configureChains(
  [newMainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Sturdy coin',
  projectId: '12223',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <div className="app-container">
            <MainPage />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
