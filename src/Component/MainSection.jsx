import { Box, Container, Text } from "@chakra-ui/react";

const MainSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      gap="1rem"
      marginY={"1rem"}
    >
      <DashboardCard
        bgColor="pink.100"
        iconSrc="./Images/Orders.png"
        title="Earning"
        value="$198K"
        trend="⬆ 38%"
        trendColor="green.500"
      />
      <DashboardCard
        bgColor="purple.100"
        iconSrc="./Images/Orders.png"
        title="Orders"
        value="$2.4k"
        trend="⬇ 2%"
        trendColor="red.500"
      />
      <DashboardCard
        bgColor="pink.100"
        iconSrc="./Images/Sales.png"
        title="Balance"
        value="$2.4k"
        trend="⬇ 2%"
        trendColor="red.500"
      />
      <DashboardCard
        bgColor="blue.100"
        iconSrc="./Images/Sales.png"
        title="Total Sales"
        value="$89k"
        trend="⬆ 11%"
        trendColor="green.500"
      />
    </Box>
  );
};

export default MainSection;

const DashboardCard = ({
  bgColor,
  iconSrc,
  title,
  value,
  trend,
  trendColor,
}) => (
  <Container
    bg="white"
    width={{ base: "40%", sm: "20%" }}
    display="flex"
    justifyContent={"space-evenly"}
    alignItems={"center"}
    borderRadius={8}
    p="10px"
    margin="0"
    gap={3}
  >
    <Box bg={bgColor} borderRadius="50px" p="20px">
      <img src={iconSrc} alt={title} />
    </Box>
    <Box w={"40%"}>
      <Text color="gray.500" fontSize=".5rem">
        {title}
      </Text>
      <Text fontSize={{ base: "14px", md: "20px" }} fontWeight="bold">
        {value}
      </Text>
      <Text color="gray.600" fontSize="10px">
        <Text color={trendColor} fontWeight="bold" display={"inline"}>
          {trend}{" "}
        </Text>
        this month
      </Text>
    </Box>
  </Container>
);
