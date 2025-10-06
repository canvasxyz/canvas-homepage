import Head from "next/head"

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
import "@fontsource/space-mono/700.css"

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
          >
            Please enter an Email Address
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
            fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
          >
            Please enter a valid Email Address
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
        },
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
              fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
            >
              Invalid Email
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
          content="A research and engineering company building the foundations for next-generation software"
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
        height={["auto", "auto", "100vh", "100vh"]}
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

        <Box
          position="absolute"
          width="64px"
          height="100%"
          left="0"
          borderRight="2px solid #3242CD"
          display={["none", "none", "block", "block"]}
        ></Box>
        <Box
          position="absolute"
          width="64px"
          height="100%"
          right="0"
          borderLeft="2px solid #262626"
          display={["none", "none", "block", "block"]}
        ></Box>

        <Flex
          padding="64px"
          paddingLeft={["0px", "0px", "64px", "64px"]}
          paddingRight={["0px", "0px", "64px", "64px"]}
          flexDirection="row"
          justifyContent="center"
          height="100%"
        >
          <Flex
            backgroundImage="/headerbg.svg"
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom"
            backgroundSize="100%"
            flexGrow="1"
            justifyContent="center"
            paddingBottom={["128px", "128px", "0", "0"]}
            style={{
              letterSpacing: "-0.2px",
            }}
          >
            <Box maxWidth="690px" padding="24px">
              <Heading
                color="#262626"
                fontFamily="Space Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                mt="36px"
                mb="24px"
              >
                Private&ensp;verifiable&ensp;web&ensp;applications
                {hasRendered && (
                  <motion.div
                    style={{
                      marginTop: "9px",
                      height: "28px",
                      width: "18px",
                      position: "absolute",
                      backgroundColor: "red",
                      opacity: 0,
                      display: "inline-block",
                      borderRadius: "2px",
                      marginLeft: "12px",
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
                      duration: 6,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                )}
              </Heading>

              <Box>
              <Text color="#262626" mb="12px" fontSize="lg">
                <strong>Canvas</strong> is a research and engineering company, building 
                the foundations for next-generation software applications.
              </Text>
              <Text color="#262626" mb="12px" fontSize="lg">
                We are building a set of libraries for running applications inside secure enclaves and <strong>Trusted Execution Environments</strong>.
              </Text>
              <Box as="ul" mb="12px" ml="36px">
                <Text as="li" color="#262626" fontSize="lg" mb="8px">
                  <Link
                    href="https://github.com/canvasxyz/teekit"
                    target="_blank"
                    color="#3242CD"
                  >
                    TEEKit
                  </Link>
                </Text>
              </Box>
              <Text color="#262626" mb="12px" fontSize="lg">
                Previously, our focus was on peer-to-peer technology:
              </Text>
              <Box as="ul" mb="24px" ml="36px">
                <Text as="li" color="#262626" fontSize="lg" mb="8px">
                  <Link
                    href="https://joelgustafson.com/posts/2023-05-04/merklizing-the-key-value-store-for-fun-and-profit"
                    target="_blank"
                    color="#3242CD"
                  >
                    Merklizing the key/value store for fun and profit
                  </Link>{" "}
                  (2023)
                </Text>
                <Text as="li" color="#262626" fontSize="lg" mb="8px">
                  <Link
                    href="https://joelgustafson.com/posts/2024-09-30/introduction-to-causal-logs"
                    target="_blank"
                    color="#3242CD"
                  >
                    Introduction to Causal Logs
                  </Link>{" "}
                  (2024)
                </Text>
                <Text as="li" color="#262626" fontSize="lg" mb="8px">
                  <Link
                    href="https://joelgustafson.com/posts/2024-09-30/gossiplog-reliable-causal-broadcast-for-libp2p"
                    target="_blank"
                    color="#3242CD"
                  >
                    GossipLog - reliable causal broadcast for libp2p
                  </Link>{" "}
                  (2024)
                </Text>
                <Text as="li" color="#262626" fontSize="lg" mb="8px">
                  <Link
                    href="https://joelgustafson.com/posts/2025-07-21/serializable-transactions-for-peer-to-peer-databases"
                    target="_blank"
                    color="#3242CD"
                  >
                    Serializable transactions for p2p databases
                  </Link>{" "}
                  (2025)
                </Text>
              </Box>

              <form className="email-form" onSubmit={send}>
                {submitted ? (
                  <Box
                    color="white"
                    p={3}
                    bg="#3247CD"
                    fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
                  >
                    Email submitted! You can also{" "}
                    <Link href="https://X.com/canvas_xyz" target="_blank">
                      <b>follow us on X</b>
                    </Link>
                    .
                  </Box>
                ) : (
                  <Flex flexDirection={["column", "column", "row", "row"]}>
                    <Input
                      size="lg"
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
                      whileTap={{ scale: 0.9 }}
                    >
                      {sending ? "Submitting" : "Submit"}
                    </Button>
                  </Flex>
                )}
              </form>
            </Box>
            </Box>
          </Flex>
        </Flex>
        <Box
          position={("relative", "relative", "absolute", "absolute")}
          height="64px"
          width="100%"
          bottom="0"
          borderTop="2px solid #9FD330"
          paddingLeft={["48px", "48px", "76px", "76px"]}
          display="flex"
          alignItems="center"
        >
          &#9400; {new Date().getFullYear()} Canvas Technologies, Inc.
        </Box>
      </Box>
    </div>
  )
}
