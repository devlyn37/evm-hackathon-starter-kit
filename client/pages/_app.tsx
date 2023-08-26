import { ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import {
  ConnectButton,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { createPublicClient, http } from "viem";
import {
  mainnet,
  sepolia,
  configureChains,
  createConfig,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const PROJECT_NAME = "YOUR HACKATHON PROJECT";
const APP_NAME = "YOUR HACKATHON APP";

const { chains, publicClient } = configureChains(
  [...(process.env.NEXT_PUBLIC_TESTNET === "true" ? [sepolia] : [mainnet])],
  [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: APP_NAME,
  projectId: PROJECT_NAME,
  chains,
});

const demoAppInfo = {
  appName: APP_NAME,
};

const connectors = connectorsForWallets(wallets);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
});

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{}>) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        theme={darkTheme({
          borderRadius: "small",
        })}
      >
        <ChakraProvider>
          <Flex
            minH="100vh"
            margin={10}
            flexDirection="column"
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>Hackathon</Heading>
              <ConnectButton />
            </Flex>
            <Flex flexGrow={1}>
              <Component {...pageProps} />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>Hackathon</Heading>
              <Text>Hi</Text>
              <Text>Hi</Text>
            </Flex>
          </Flex>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
