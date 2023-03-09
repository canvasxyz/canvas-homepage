import Head from "next/head"
import NextLink from "next/link"

import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Input,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

import { useState, useRef, useEffect } from "react"

import "@fontsource/space-mono"
import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/manrope"

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export default function Home() {
  const [sending, setSending] = useState()
  const [submitted, setSubmitted] = useState(false)
  const [hasRendered, setHasRendered] = useState(false)
  const toast = useToast()

  const emailRef = useRef()

  useEffect(() => {
    setHasRendered(true)
  }, [])

  const send = async (e) => {
    e.preventDefault()
    setSending(true)
    const email = emailRef.current.value?.trim()

    if (email === "") {
      toast({
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#EA4A4A"
            fontSize="lg"
            textAlign="center"
            fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
          >
            Please enter an email address
          </Box>
        ),
      })
    } else if (!validateEmail(email)) {
      toast({
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#EA4A4A"
            fontSize="lg"
            textAlign="center"
            fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
          >
            Please enter a valid email address
          </Box>
        ),
      })
    } else {
      let response = await fetch(
        "https://expressjs-postgres-production-62ae.up.railway.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email }),
        }
      ).catch(() => {
        setSending(false)
      })

      try {
        await response.json()
        setSubmitted(true)
      } catch (err) {
        toast({
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#EA4A4A"
              fontSize="lg"
              textAlign="center"
              fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
            >
              Invalid email
            </Box>
          ),
        })
      }
    }

    setSending(false)
  }

  return (
    <div>
      <Head>
        <title>Canvas</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Canvas" />
        <meta
          property="og:description"
          content="A peer-to-peer architecture and developer platform for building decentralized applications."
        />

        <meta
          property="og:image"
          content="https://www.canvas.xyz/meta_cover.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://www.canvas.xyz" />
      </Head>
      <Box
        background="#FBF5E9"
        width="100vw"
        height={["auto", "auto", "100%", "100%"]}
        fontFamily="Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
      >
        {/* Lines - Top */}
        <Box
          position="absolute"
          height="64px"
          width="100%"
          top="0"
          borderBottom="2px solid #EA4A4A"
          zIndex="420"
        >
          <a href="#">
            <Box
              as={motion.div}
              width="42px"
              height="42px"
              mt="10px"
              ml="10px"
              whileHover={{
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{
                scale: 0.969,
                rotate: 70,
              }}
              flexShrink="1"
            >
              <Image
                src="/logo.svg"
                alt="Canvas Logo"
                width="42px"
                height="42px"
              />
            </Box>
          </a>
        </Box>

        {/* Lines - Left/Right */}
        <Box
          position="absolute"
          width="64px"
          height="100%"
          left="0"
          borderRight="2px solid #3242CD"
          display={["none", "none", "block", "block"]}
        ></Box>
        {/* <Box
          position="absolute"
          width="64px"
          height="100%"
          right="0"
          borderLeft="2px solid #262626"
          display={["none", "none", "block", "block"]}
          ></Box>*/}

        {/* Body */}
        <Flex
          padding="120px"
          pb="120px"
          paddingLeft={["30px", "30px", "64px", "64px"]}
          paddingRight={["30px", "30px", "64px", "64px"]}
          flexDirection="row"
          justifyContent="center"
          height="100%"
        >
          <Box width="100%">
            <Box
              maxWidth="960px"
              margin="0 auto"
              paddingLeft={["16px", "16px", "50px", "60px"]}
              paddingRight={["16px", "16px", "50px", "60px"]}
            >
              <Image
                display={["none", "none", "none", "block"]}
                position="absolute"
                marginTop="0px"
                right="20px"
                src="/graphic1.png"
                alt="Networked jellyfish"
                height="calc(20vw + 75px)"
                maxHeight="400px"
              />
              <Heading
                color="#262626"
                fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                letterSpacing="-0.2px"
                fontSize={["2rem", "2rem", "2.25rem", "2.25rem"]}
                maxWidth="700px"
                mt={["1.2rem", "1.2rem", "4rem", "4rem"]}
                mb="24px"
              >
                Fully peer-to-peer decentralized applications
                {hasRendered && (
                  <motion.div
                    style={{
                      height: "31px",
                      width: "19px",
                      position: "absolute",
                      backgroundColor: "red",
                      opacity: 0,
                      display: "inline-block",
                      borderRadius: "2px",
                      marginLeft: "7px",
                      marginTop: "5px",
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                      scale: [0.9, 1, 1, 0.9, 1, 1, 0.9, 1, 1, 0.9],
                      backgroundColor: [
                        "#FBF5E9",
                        "#EA4A4A",
                        "#EA4A4A",
                        "#FBF5E9",
                        "#9FD330",
                        "#9FD330",
                        "#FBF5E9",
                        "#3242CD",
                        "#3242CD",
                        "#FBF5E9",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      type: "keyframes",
                      duration: 4,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                )}
              </Heading>
              <Text color="#262626" mb="30px" fontSize="lg" maxWidth="540px">
                Canvas is a developer framework that radically expands the range
                of applications that can be built on decentralized networks.
              </Text>
              <form className="email-form" onSubmit={send}>
                {submitted ? (
                  <Box
                    color="white"
                    display="inline-block"
                    px="5"
                    py="3"
                    bg="#3247CD"
                    fontSize="lg"
                    fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                  >
                    Email submitted! In the meantime, why not follow us on{" "}
                    <Link href="https://twitter.com/canvas_xyz" target="_blank">
                      <b>Twitter</b>
                    </Link>
                  </Box>
                ) : (
                  <Flex flexDirection={["column", "column", "row", "row"]}>
                    <Input
                      size="lg"
                      maxWidth={["none", "none", "350px", "350px"]}
                      borderRadius="0"
                      border="2px solid #262626"
                      borderColor="#262626"
                      background="#fff"
                      focusBorderColor="#3242CD"
                      _hover={{
                        borderColor: "#262626",
                      }}
                      outline="2px"
                      ref={emailRef}
                      placeholder="Your Email Address"
                    />

                    <Button
                      as={motion.button}
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      ml={["0px", "0px", "12px", "12px"]}
                      mt={["12px", "12px", "0px", "0px"]}
                      borderRadius="0"
                      backgroundColor="#3242CD"
                      isLoading={sending}
                      _hover={{
                        backgroundColor: "#222E9B",
                      }}
                      _active={{
                        backgroundColor: "#222E9B",
                      }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {sending ? "Submitting" : "Submit"}
                    </Button>
                  </Flex>
                )}
              </form>
              <Box>
                <Flex mt="34px" flexWrap="wrap" width="calc(100% + 80px)">
                  <Text
                    fontSize="lg"
                    mt="3px"
                    mr="29px"
                    display={["none", "none", "block", "block"]}
                  >
                    Supported partly by:
                  </Text>
                  <Image
                    src="/logo_c.png"
                    alt="Common"
                    mt={["2px", "2px", 0, 0]}
                    height={["28px", "28px", "34px", "34px"]}
                    mr={["29px", "29px", "34px", "34px"]}
                  />
                  <Image
                    src="/logo_z.png"
                    alt="Zeitgeist"
                    height={["25px", "25px", "27px", "27px"]}
                    mr={["24px", "24px", "32px", "32px"]}
                    mt={["5px", "5px", "5px", "5px"]}
                  />
                  <Image
                    src="/logo_p.png"
                    alt="Protocol Labs"
                    height={["44px", "42px", "44px", "44px"]}
                    mt={["22px", "-5px", "-5px", "-5px"]}
                  />
                </Flex>
              </Box>
              <Box>
                <Heading
                  color="#262626"
                  fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                  letterSpacing="-0.2px"
                  maxWidth="450px"
                  mt="10rem"
                  mb="24px"
                >
                  A new architecture for decentralized apps
                </Heading>
                <Text color="#262626" mb="12px" fontSize="lg" maxWidth="560px">
                  On Canvas applications, every user action is signed and
                  relayed over a peer-to-peer network, and executed in a P2P VM
                  with CRDTs. This means interactions happen instantly, without
                  token fees.
                </Text>
                <Text color="#262626" mb="12px" fontSize="lg" maxWidth="560px">
                  You can use this to build chat, governance, social graphs,
                  decentralized data applications, and more. Try it now:
                </Text>
                <Text
                  color="#fff"
                  bg="#181818"
                  p="18px 20px"
                  mt="30px"
                  borderRadius="10px"
                  maxWidth="500px"
                  lineHeight="1.35"
                  as="pre"
                  fontFamily="Space Mono, monospace"
                >
                  {`npm install -g @canvas-js/cli
canvas init app.js
canvas run app.js`}
                </Text>
              </Box>
              <Box>
                <Image
                  display={["none", "none", "none", "block"]}
                  position="absolute"
                  right="50px"
                  marginTop="60px"
                  src="/graphic2.png"
                  alt="Networked jellyfish"
                  height="calc(20vw + 75px)"
                  maxHeight="400px"
                />
                <Heading
                  color="#262626"
                  fontFamily="Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                  letterSpacing="-0.2px"
                  maxWidth="450px"
                  mt="10rem"
                  mb="24px"
                >
                  Public good technology, built for interoperability
                </Heading>
                <Text color="#262626" mb="12px" fontSize="lg" maxWidth="560px">
                  Canvas is pure peer-to-peer infrastructure, not a new L1 or
                  database chain.
                </Text>
                <Text color="#262626" mb="12px" fontSize="lg" maxWidth="560px">
                  You can continue using your current schemas and stack,
                  interoperating with Canvas using your API, using standards
                  like EIP-712 and SIWE/SIWx.
                </Text>
                <Text color="#262626" mb="12px" fontSize="lg" maxWidth="560px">
                  For users building new applications, we provide a hosted
                  service and React hooks.
                </Text>
              </Box>
              <Box>
                <NextLink href="https://hub.canvas.xyz" passHref>
                  <a target="_blank" noreferrer noopener>
                    <Button
                      as={motion.button}
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      mt="30px"
                      mr="16px"
                      borderRadius="0"
                      backgroundColor="#3242CD"
                      _hover={{ backgroundColor: "#222E9B" }}
                      _active={{ backgroundColor: "#222E9B" }}
                      whileTap={{ scale: 0.96 }}
                      disabled
                    >
                      See live applications (soon)
                    </Button>
                  </a>
                </NextLink>
                <NextLink href="https://docs.canvas.xyz" passHref>
                  <a target=" _blank" noreferrer noopener>
                    <Button
                      as={motion.button}
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      mt={["12px", "30px", "30px", "30px"]}
                      borderRadius="0"
                      backgroundColor="#3242CD"
                      _hover={{ backgroundColor: "#222E9B" }}
                      _active={{ backgroundColor: "#222E9B" }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Read the docs
                    </Button>
                  </a>
                </NextLink>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box
          position={("relative", "relative", "relative", "relative")}
          height="84px"
          width="100%"
          bottom="0"
          borderTop="2px solid #9FD330"
          paddingLeft={["48px", "48px", "96px", "96px"]}
          lineHeight="1.3"
          display="flex"
          alignItems="center"
          maxWidth="100vw"
        >
          &#9400; 2022-2023 Canvas Technology Corporation
        </Box>
      </Box>
    </div>
  )
}
