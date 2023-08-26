import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex justifyContent="center" alignItems="stretch" flexDir="column">
      <Head>
        <title>EVM Hackathon Starter</title>
        <meta
          name="description"
          content="Build something cool, drink lots of water!"
        />
        <link rel="icon" href="/Ethereum.png" />
      </Head>
      <Heading>Home Page Content</Heading>
    </Flex>
  );
}
