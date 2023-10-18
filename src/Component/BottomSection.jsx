import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { CustomCard } from "../assets/chakra/CustomCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const BottomSection = () => {
  return (
    <Box margin="0" bg={"white"} marginBottom={"1rem"} borderRadius={"20px"}>
      <Box width={"100%"} gap={"0px"}>
        <CustomCard
          display={"flex"}
          px={6}
          py={2}
          justifyContent={"space-between"}
          w={"100%"}
          alignItems={"center"}
        >
          <Box>
            <Heading as="h3" fontSize={"14px"}>
              Product Sell
            </Heading>
          </Box>
          <Box display={"flex"} gap={3}>
            <Text fontSize={"12x"} display={{ base: "none", sm: "flex" }}>
              <input type="text" placeholder="Search" />
            </Text>
            <Text mt={1} color={"gray.500"} fontSize={"10px"}>
              Last 30 days
            </Text>
            <Icon mt={1} as={MdOutlineKeyboardArrowDown} />
          </Box>
        </CustomCard>

        <TableContainer display={"flex"}>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th fontSize={"10px"} color={"gray.500"} fontWeight={"normal"}>
                  Product Name
                </Th>
                <Th fontSize={"10px"} color={"gray.500"} fontWeight={"normal"}>
                  Stock
                </Th>
                <Th fontSize={"10px"} color={"gray.500"} fontWeight={"normal"}>
                  Price
                </Th>
                <Th fontSize={"10px"} color={"gray.500"} fontWeight={"normal"}>
                  Total Sales
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td display={"flex"} gap={2}>
                  <Text display={{ sm: "flex", base: "none" }}>
                    <img src="./Images/abstract.png" alt="" />
                  </Text>
                  <Text>
                    Abstract 3D{" "}
                    <Text fontSize={"8px"}>lorem dollar sit amett</Text>
                  </Text>
                </Td>
                <Td>32 in stock</Td>
                <Td>$ 45.99</Td>
                <Td>20</Td>
              </Tr>
              <Tr>
                <Td display={"flex"} gap={2}>
                  <Text display={{ sm: "flex", base: "none" }}>
                    <img src="./Images/abstract.png" alt="" />
                  </Text>{" "}
                  <Text>
                    Sarphens Illustration{" "}
                    <Text fontSize={"8px"}>lorem dollar sit amett</Text>
                  </Text>
                </Td>
                <Td>32 in stock</Td>
                <Td>$ 45.99</Td>
                <Td>20</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BottomSection;
