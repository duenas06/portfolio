import { Box, Container, Heading, Divider, SlideFade } from "@chakra-ui/react";
import Paragraph from "components/Paragraph";
import Head from "next/head";
import BookCard from "components/BookCard";
import Message from "components/Message";
import Image from "next/image";
import {
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  Tag,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const Books = ({ books }) => {
  return (
    <div>
      <Head>
        <title>Books | Meer Bahadin</title>
        <meta
          name="description"
          content="A list of my favorite development books"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meera.dev/" />
        <meta
          property="og:title"
          content="A list of my favorite development books."
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <Container maxW="container.lg" mt={10}>
        <SlideFade in={true} offsetY={80}>
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={4}
            >
              Books
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              A list of my favorite development books.
            </Paragraph>
          </Box>
          <Divider my={10} />
        </SlideFade>
        
        <SlideFade in={true} offsetY={80} delay={0.2}>
        
            <Box
              w="100%"
              mt={10}
              mx="auto"
              sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}
            >
          <LinkBox as="article">
             <Box
             {...styleProps.boxWrapper}
          _hover={{
            borderColor: "green.300",
          }}
        >
          <Box
            {...styleProps.boxtwo}
          >
            <Box position="relative" width="100%" height="400px" mb={4}>
              <Image
                src="/js.jpg"
                layout="fill"
                rounded="md"
                objectFit="cover"
                quality={100}
                alt={"js"}
              />
            </Box>
            <LinkOverlay href={"https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854"} isExternal>
              <Heading as="h6" size="md">
              Javascript: The Definitive Guide, 6th edition
              </Heading>
              <Paragraph mt={1} fontSize="sm">
              Another beginner-friendly JavaScript book is JavaScript: The Definitive Guide. 
              </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase" bg="transparent">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4.5 ? "teal.500" : "gray.300"}
                  />
                ))}
              <Text ml={2} color="gray.500">
                {4.5}
                  </Text>
                </Tag>
              </Box>
            </Box>

            <Box
             {...styleProps.boxWrapper}
          _hover={{
            borderColor: "green.300",
          }}
        >
          <Box
            {...styleProps.boxtwo}
          >
            <Box position="relative" width="100%" height="400px" mb={4}>
              <Image
                src="/refact.jpg"
                layout="fill"
                rounded="md"
                objectFit="cover"
                quality={100}
                alt={"js"}
              />
            </Box>
            <LinkOverlay href={"https://www.goodreads.com/en/book/show/43190966-refactoring-ui"} isExternal>
              <Heading as="h6" size="md">
              Refactoring UI
              </Heading>
              <Paragraph mt={1} fontSize="sm">
              Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view.
              </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase" bg="transparent">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4.5 ? "teal.500" : "gray.300"}
                  />
                ))}
              <Text ml={2} color="gray.500">
                {4.8}
                  </Text>
                </Tag>
              </Box>
            </Box>


             <Box
             {...styleProps.boxWrapper}
          _hover={{
            borderColor: "green.300",
          }}
        >
          <Box
            {...styleProps.boxtwo}
          >
            <Box position="relative" width="100%" height="400px" mb={4}>
              <Image
                src="/roadtoreact.jpg"
                layout="fill"
                rounded="md"
                objectFit="cover"
                quality={100}
                alt={"js"}
              />
            </Box>
            <LinkOverlay href={"https://www.amazon.com/Road-learn-React-pragmatic-React-js-ebook/dp/B077HJFCQX?tag=javamysqlanta-20"} isExternal>
              <Heading as="h6" size="md">
              The Road to React
              </Heading>
              <Paragraph mt={1} fontSize="sm">
              This is a great book to begin expanding your knowledge of building and using React components. 
              </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase" bg="transparent">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4.5 ? "teal.500" : "gray.300"}
                  />
                ))}
              <Text ml={2} color="gray.500">
                {4.7}
                  </Text>
                </Tag>
              </Box>
            </Box>

            <Box
             {...styleProps.boxWrapper}
          _hover={{
            borderColor: "green.300",
          }}
        >
          <Box
            {...styleProps.boxtwo}
          >
            <Box position="relative" width="100%" height="400px" mb={4}>
              <Image
                src="/cleancode.jpg"
                layout="fill"
                rounded="md"
                objectFit="cover"
                quality={100}
                alt={"js"}
              />
            </Box>
            <LinkOverlay href={"https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"} isExternal>
              <Heading as="h6" size="md">
              Clean Code
              </Heading>
              <Paragraph mt={1} fontSize="sm">
              Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. 
              </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase" bg="transparent">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4.5 ? "teal.500" : "gray.300"}
                  />
                ))}
              <Text ml={2} color="gray.500">
                {4.7}
                  </Text>
                </Tag>
              </Box>
            </Box>
            </LinkBox>
            </Box>
            
       
        </SlideFade>
        <Message
          message="This just a small list of the book I like, but there's plenty of good books out there!"
          type="info"
        />
      </Container>
    </div>
  );
};

const styleProps = {
  boxWrapper: {
    w:"100%",
    p:4,
    mb:5,
    d:"inline-block",
    borderColor:("gray.200", "gray.700"),
    borderRadius:5,
    borderWidth:"1px",
    transition:".5s",
    cursor:"pointer",
    role:"group",
  },
  boxtwo:{
    d:"flex",
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"space-between",
  },
};

export default Books;
