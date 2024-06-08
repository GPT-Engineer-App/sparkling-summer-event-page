import { Box, Container, Text, VStack, Image, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Box
        height="100vh"
        backgroundImage="url('/images/sommarminglet-hero-unsplash.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Heading fontSize="6xl" mb={4}>Sommarminglet</Heading>
        <Text fontSize="2xl">Uniting Minds for a Better Future</Text>
      </Box>
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">Event Details</Heading>
          <Text fontSize="lg">
            Join us for Sommarminglet, a delightful summer event where you can enjoy sparkling wine and great company. The event will take place in a beautiful outdoor setting, perfect for soaking up the summer sun and creating unforgettable memories.
          </Text>
          <Text fontSize="lg">
            <strong>Date:</strong> July 15, 2023
          </Text>
          <Text fontSize="lg">
            <strong>Time:</strong> 3:00 PM - 9:00 PM
          </Text>
          <Text fontSize="lg">
            <strong>Location:</strong> Summer Park, Main City
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;