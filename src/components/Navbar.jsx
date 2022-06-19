import {
    Box,
    Flex,
    IconButton,
    Image,
    Input,
    Menu,
    MenuButton,
    MenuList,
    Select,
    MenuItem,
    Text,
    Stack,
    Button,
  } from "@chakra-ui/react";
//   import "./css/navbarBottomSelect.css";
  import React from "react";
 import logo from "../images/logo.png"
  import flag from "../images/flag.jpg";
  import { FiSearch ,} from "react-icons/fi";
  import { FaRegUser } from "react-icons/fa";
  import { FiShoppingCart } from "react-icons/fi";
  import { FiMenu } from "react-icons/fi";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import "./Navbar.css"
  
   const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    function over(e) {
      setIsVisible(true);
    }
    function out(e) {
      setIsVisible(false);
    }
  
    return (
      <Box
        bgGradient="linear-gradient(to bottom, #318FFB, #06f)"
      >
        <Box
          maxWidth={"90%"}
          m={"auto"}
          maxHeight="10rem"
          minH={"5rem"}
          pt="0.5rem"
        >
          {/* Top navbar */}
          <Flex
            flexDirection="row"
            alignItems="center"
            justify="space-around"
          
          >
            <Image
              src={logo}
              cursor="pointer"
              maxWidth="10rem"
              maxHeight="4rem"
              alt="Logo"
              bgColor="#1376FD"
              
            ></Image>
  
            <Flex bgColor={"white"} borderRadius="0.2rem">
              <Select placeholder="All Categories" maxWidth="10rem" border="none">
                <option value="option1">All Categories</option>
                <option value="option2">Smart Home & Garden</option>
                <option value="option3">Phones & Accessories</option>
                <option value="option3">Wearable Devices</option>
              </Select>
              <Input
                placeholder="Search By Keyword"
                width={"30rem"}
                border="none"
              />
              <IconButton
                colorScheme="white"
                aria-label="Search database"
                color={"blue"}
                fontSize="1.5rem"
                icon={<FiSearch />}
              />
            </Flex>
            <Flex cursor="pointer" direction="row" color="white" align="center">
              <Image src={flag} h="20px" w="25px" mr="5px" /> / INR
            </Flex>
  
            {/* Sign IN */}
            <Flex cursor="pointer" direction="row" color="white" align="center">
              <FaRegUser />
              
              {/* <select>Login/Register
              <option>Register</option>
              <option>SignIN</option>
              </select> */}
               <Link to="/login">Sign in</Link>
            </Flex>
  
            {/* Cart */}
            <Flex
              cursor="pointer"
              direction="row"
              color="white"
              align="center"
              fontSize="1.2rem"
            >
              <FiShoppingCart />
            </Flex>
          </Flex>
  
          {/* Bottom Navbar */}
  
          <Stack spacing={4} direction="row" align="center" mt="1rem">
            <Menu>
              <MenuButton colorScheme="#318FFB">
                <Button
                  direction="row"
                  align="center"
                  fontSize="md"
                  colorScheme="#318FFB"               
                >
                  <FiMenu />
                  <Text ml="2px">Actions</Text>
                </Button>
              </MenuButton>
              <MenuList onMouseOver={over} onMouseOut={out}>
                <MenuItem><Link to={'/mobile'}>Local Warehouses</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Sports  Outdoors</Link></MenuItem>
                <MenuItem > <Link to={'/mobile'}>Smart Home  Garden</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Consumer Electronics</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>TV Boxes  mini PCs</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Computer, Tablet  Accessories</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Toys Hobbies</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Phones  Accessories</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Automobiles  Motorcycles</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Wearable Device</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Security Systems</Link></MenuItem>
                <MenuItem><Link to={'/mobile'}>Fashion</Link></MenuItem>
              </MenuList>
            </Menu>
            <Button colorScheme="#318FFB" size="md">
              New
            </Button>
            <Button colorScheme="#318FFB" size="md">
              Bestselling
            </Button>
            <Button colorScheme="#318FFB" size="md">
              Brand
            </Button>
            <Button colorScheme="#318FFB" size="md">
              Clearance
            </Button>
            <Button colorScheme="#318FFB" size="md">
              Deal
            </Button>
            <Button colorScheme="#318FFB" size="md">
              Coupon
            </Button>
            <Button colorScheme="#318FFB" size="md">
              App Only
            </Button>
          </Stack>
        </Box>
      
      </Box>
    );
  };
  export default Navbar
  