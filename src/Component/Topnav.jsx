import {
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSearch } from "react-icons/md";

const Topnav = ({ onOpen }) => {
  return (
    <HStack h={"5%"} bg={"#F3F3F7"}>
      <Icon
        as={GiHamburgerMenu}
        onClick={onOpen}
        display={{
          base: "block",
          lg: "none",
        }}
      />
      <Heading w={"80%"} fontSize={"1rem"}>
        Hello Shahrukh,
      </Heading>
      <InputGroup w={"20%"}>
        <InputLeftElement pointerEvents="none">
          <MdSearch color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search" />
      </InputGroup>
    </HStack>
  );
};

export default Topnav;
