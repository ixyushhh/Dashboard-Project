import "./App.css";

// chakra ui
import { Box, Flex, useDisclosure } from "@chakra-ui/react";

// components
import Sidenav from "./Component/Sidenav/Sidenav";
import Topnav from "./Component/Topnav";
import SideDrawer from "./Component/SideDrawer";
import GraphSection from "./Component/GraphSection";
import MainSection from "./Component/MainSection";
import BottomSection from "./Component/BottomSection";

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>

        <SideDrawer isOpen={isOpen} onClose={onClose} />

        <Box w={{ base: "95%", md: "75%" }} marginX={"auto"}>
          <Topnav onOpen={onOpen} />

          <MainSection />

          <GraphSection />

          <BottomSection />
        </Box>
      </Flex>
    </>
  );
}

export default App;
