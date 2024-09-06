import { Box, Button, Text } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
    >
      <Text fontSize="xl" fontWeight="bold">
        Chakra UI Card
      </Text>
      <Text mt={4}>
        This is an example of a responsive card using Chakra UI.
      </Text>
      <Button
        colorScheme="teal"
        size="lg"
        variant="solid"
        borderRadius="md"
        boxShadow="xl"
        _hover={{ bg: "teal.300", color: "white" }}
      >
        Custom Button
      </Button>
    </Box>
  );
};

export default Card;
