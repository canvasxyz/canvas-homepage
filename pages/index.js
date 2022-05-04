import Head from "next/head";

import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import "@fontsource/space-mono";
import "@fontsource/space-mono/700.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canvas</title>
        <meta name="description" content="Something Computers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        background="#FBF5E9"
        width="100vw"
        height="100vh"
        fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
      >
        {/* Lines */}
        <Box
          position="absolute"
          height="64px"
          width="100%"
          top="0"
          borderBottom="2px solid #EA4A4A"
        >
          Canvas
        </Box>
        <Box
          position="absolute"
          width="64px"
          height="100%"
          left="0"
          borderRight="2px solid #3242CD"
        ></Box>
        <Box
          position="absolute"
          width="64px"
          height="100%"
          right="0"
          borderLeft="2px solid #262626"
        ></Box>
        <Box
          position="absolute"
          height="64px"
          width="100%"
          bottom="0"
          borderTop="2px solid #9FD330"
          paddingLeft="76px"
        >
          © 2022 Canvas Technology Corporation
        </Box>
        <Flex padding="64px" flexDirection="row" justifyContent="center">
          <Box maxWidth="720px">
            <Heading
              color="#262626"
              fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
              mt="36px"
              mb="24px"
            >
              The general computing platform for the decentralized web
            </Heading>
            <Text color="#262626" mb="12px">
              We&apos;re building a new peer-to-peer architecture and developer
              platform for building decentralized applications
            </Text>
            <Text color="#262626">Public demo coming soonTM</Text>
            <Flex>form goes here</Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
