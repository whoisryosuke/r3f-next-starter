/** @format */

import { useRef, useState, useEffect } from "react"
import {
	Heading,
	Center,
	Flex,
	Text,
	ChakraProvider,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react"
import { useProgress } from "@react-three/drei"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

const Loader = () => {
	const { progress, active } = useProgress()
	const [shouldExit, setShouldExit] = useState(false)

	console.log(progress, active, shouldExit)

	const lineHeight = useBreakpointValue({
		base: "9vw",
		md: "5vw",
		lg: "2.5vw",
	})

	useEffect(() => {
		if (active == true) {
			return
		}
		const timeout = setTimeout(
			() => setShouldExit(true),
			1500
		)
		return () => {
			clearTimeout(timeout)
		}
	}, [active])

	return (
		<ChakraProvider>
			<AnimatePresence>
				{!shouldExit && (
					<Flex
						key="loader"
						as={motion.div}
						minW={"100vw"}
						minH={"100vh"}
						px="4vw"
						py="5vh"
						bg={"#06121D"}
						flexDir={"column"}
						justify={"center"}
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						// @ts-ignore
						transition={{
							delay: 0.1,
							duration: 0.3,
							type: "tween",
							ease: [0.45, 0, 0.55, 1],
						}}
						exit={{
							opacity: 0,
							transition: {
								delay: 0.9,
								duration: 0.6,
								type: "tween",
								ease: [0.45, 0, 0.55, 1],
							},
						}}
						align={"start"}
						gap={{ base: "5vh", lg: "10vh" }}
					>
						<Box
							position="relative"
							as={motion.div}
							exit={{
								opacity: 0,
								y: 100,
								transition: {
									delay: 0.3,
									duration: 0.3,
									type: "tween",
									ease: [0.45, 0, 0.55, 1],
								},
							}}
						>
							<Heading
								position="absolute"
								top="0"
								fontSize={"27vw"}
								lineHeight={"20vw"}
								fontFamily={"Novara"}
								textTransform={"uppercase"}
							>
								yousuf
							</Heading>
							<Box
								as={motion.div}
								pt="5px"
								overflow="clip"
								animate={{
									clipPath: `inset(-20px ${
										100 - progress
									}% -10px -10px)`,
								}}
							>
								<Heading
									zIndex={10}
									fontSize={"27vw"}
									lineHeight={"20vw"}
									fontFamily={"Novara"}
									textTransform={"uppercase"}
									color="white"
								>
									yousuf
								</Heading>
							</Box>
						</Box>
						<Flex
							as={motion.div}
							justify={"start"}
							flexDir={{ base: "column", lg: "row" }}
							gap={{ base: "5vh", lg: 0 }}
							position="relative"
							initial={{
								opacity: 0,
								y: -100,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							// @ts-ignore
							transition={{
								delay: 0.5,
								duration: 0.3,
								type: "tween",
								ease: [0.45, 0, 0.55, 1],
							}}
							exit={{
								opacity: 0,
								y: 100,
								transition: {
									delay: 0.2,
									duration: 0.3,
									type: "tween",
									ease: [0.45, 0, 0.55, 1],
								},
							}}
						>
							<Heading
								position="absolute"
								bottom="0"
								fontSize={"27vw"}
								lineHeight={"20vw"}
								fontFamily={"Novara"}
								textTransform={"uppercase"}
							>
								abeer
							</Heading>
							<Box
								as={motion.div}
								pt="5px"
								overflow="clip"
								animate={{
									clipPath: `inset(-20px ${
										100 - progress
									}% -10px -10px)`,
								}}
							>
								<Heading
									zIndex={10}
									fontSize={"27vw"}
									lineHeight={"20vw"}
									fontFamily={"Novara"}
									textTransform={"uppercase"}
									color="white"
								>
									abeer
								</Heading>
							</Box>
							<Flex
								as={motion.div}
								flexDir={"column"}
								justify={"space-between"}
								alignItems={"flex-start"}
								ml={{ base: 0, lg: "20px" }}
								gap={{ base: "5vh", lg: 0 }}
								initial={{
									opacity: 0,
									y: -100,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								// @ts-ignore
								transition={{
									delay: 0.3,
									duration: 0.3,
									type: "tween",
									ease: [0.45, 0, 0.55, 1],
								}}
								exit={{
									opacity: 0,
									y: 100,
									transition: {
										delay: 0,
										duration: 0.3,
										type: "tween",
										ease: [0.45, 0, 0.55, 1],
									},
								}}
							>
								<Text
									as={motion.div}
									initial={{
										opacity: 0,
										lineHeight: "3.5vw",
									}}
									animate={{
										opacity: 1,
										lineHeight,
									}}
									fontSize={"22px"}
									fontFamily={"Gilroy"}
									color={"white"}
									maxW={"20ch"}
									letterSpacing={2}
									// lineHeight={"2.5vw"}
									textTransform={"uppercase"}
								>
									crafting new heights of luxury for the
									deserving
								</Text>
								<Text
									fontSize={"200px"}
									lineHeight={"140px"}
									fontFamily={"Gilroy"}
									color={"white"}
								>
									{progress}
								</Text>
							</Flex>
						</Flex>
					</Flex>
				)}
			</AnimatePresence>
		</ChakraProvider>
	)
}

export default Loader
