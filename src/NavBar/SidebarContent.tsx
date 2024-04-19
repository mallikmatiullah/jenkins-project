// import { Box, CloseButton, Flex,Image,useColorModeValue, } from "@chakra-ui/react"
// import { SidebarProps } from "../Types/inSideBar"
// import { LinkItems } from "./LinkItems"
// import NavItem from "./NavItem"
// import viacyberLogo from "../../../assets/logo.svg"
// import { Link } from "react-router-dom"

// function SidebarContent({ onClose, ...rest }: SidebarProps) {
//     return (
//       <>
//         <Box transition="3s ease" bg={useColorModeValue('white', 'gray.900')} borderRight="0px" borderRightColor={useColorModeValue('gray.200', 'gray.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
//           <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//           <Link to={"/"}> <Image  src={viacyberLogo} width={'10rem'} alt="ViaCyber-Logo"/> </Link>
//             <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//           </Flex>
//           {LinkItems.map((link) => ( <NavItem key={link.name} to={link.to}  link={link.name} </NavItem> ))}
//         </Box>
//       </>
//       )
// }

// export default SidebarContent
