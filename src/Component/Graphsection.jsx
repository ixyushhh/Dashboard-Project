import { Box, Icon, Image, Text } from "@chakra-ui/react";
import Imge from "./6911.jpg";
import Imge2 from "./2410556.jpg";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const GraphSection = () => {
  return (
    <Box
      justifyContent={"space-between"}
      alignItems={"center"}
      display={"flex"}
      gap="1rem"
      marginY={"1rem"}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
    >
      <Box bg={"white"} p=".4rem" marginRight={".3rem"} borderRadius={"8px"}>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} marginX={'20px'} marginY={'10px'}>
          <Box>
            <Text fontSize={"18px"} fontWeight={"bold"}>
              Overview
            </Text>
            <Text color={"gray.500"} fontSize={"10px"}>
              Monthly Earning
            </Text>
          </Box>

          <Box display={'flex'} gap={2}>
            <Text color={"gray.500"} fontSize={"10px"}>
              Quaterly
            </Text>
            <Icon as={MdOutlineKeyboardArrowDown} />
          </Box>
        </Box>

        <Image src={Imge} width={"100%"} height={"50%"} />
      </Box>

      <Box bg={"white"} p=".4rem" marginLeft={".3rem"} borderRadius={"8px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          marginX={'20px'} marginY={'10px'}
        >
          <Text fontSize={"18px"} fontWeight={"bold"}>
            Customers
          </Text>
          <Text color={"gray.500"} fontSize={"10px"}>
            Customers that buy products
          </Text>
        </Box>

        <Image src={Imge2} width={"100%"} height={"50%"} />
      </Box>
    </Box>
  );
};

export default GraphSection;
