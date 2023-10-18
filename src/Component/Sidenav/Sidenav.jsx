import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TbSquareKey } from "react-icons/tb";
import { PiCubeFocusBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { PiChartLineUpBold } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidenav = () => {
  const navlinks = [
    {
      icon: TbSquareKey,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: PiCubeFocusBold,
      text: "Product",
      link: "/",
    },
    {
      icon: IoIosContact,
      text: "Customers",
      link: "/",
    },
    {
      icon: PiChartLineUpBold,
      text: "Income",
      link: "/",
    },
    {
      icon: BiSolidOffer,
      text: "Promote",
      link: "/",
    },
    {
      icon: MdLiveHelp,
      text: "Help",
      link: "/",
    },
  ];

  const support = [
    {
      icon: MdKeyboardArrowDown,
    },
  ];

  return (
    <Stack
      justify={"space-between"}
      width={{
        base: "full",
        lg: "16rem",
      }}
      background="#10002b"
      color={"white"}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={26}
          display={"flex"}
          gap={"2"}
          margin={4}
          marginLeft={6}
          marginTop={6}
          marginBottom={5}
        >
          <img src="./Images/Logo.png" alt="" />
          Dashboard
        </Heading>
        <Box mx="7">
          {navlinks.map((nav) => (
            <HStack
              key={nav.text}
              fontSize={15}
              py={2}
              px={2}
              borderRadius={"6px"}
              _hover={{
                color: "white",
                bg: "#3c096c",
              }}
              color="#9999a1"
            >
              <Icon as={nav.icon} />
              <Text>{nav.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box ml="4" my={"6"} pr={4}>
        {support.map((nav) => (
          <HStack
            fontSize={14}
            py={2}
            px={2}
            borderRadius={"6px"}
            _hover={{
              color: "white",
              bg: "#3c096c",
            }}
            color="#9999a1"
          >
            <Text>
              <img src="./Images/youngman.png" alt="" />
            </Text>
            <Text mr={4} alignItems={"center"}>
              {" "}
              Evano <br />
              Project Manager
            </Text>
            <Icon color={"#9999a1"} as={nav.icon} />
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
