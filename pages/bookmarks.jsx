import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Divider,
  SlideFade,
  Button,
  Stack,
  LinkOverlay,
  LinkBox,
  Tag
} from "@chakra-ui/react";
import { FaGithubAlt, FaGlobe, FaChrome } from "react-icons/fa";
import Paragraph from "components/Paragraph";
import { useState, useEffect } from "react";
import BookmarkCard from "components/BookmarkCard";
import Message from "components/Message";

const Bookmarks = ({ bookmarksData }) => {
  const [category, setCategory] = useState([
    {
      name: "website",
      icon: <FaGlobe />,
    },
    {
      name: "repository",
      icon: <FaGithubAlt />,
    },
  ]);


  return (
    <div>
      <Head>
        <title>Bookmarks | Meer Bahadin</title>
        <meta
          name="description"
          content="A list of my favorite articles & websites, updated weekly."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="A list of my favorite articles & websites, updated weekly."
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={4}
              >
                Bookmarks
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                A list of my favorite articles & websites and tools, updated
                weekly.
              </Paragraph>
            </Box>
            <Divider my={10} />
    
         
            <Stack direction={["column", "row"]} spacing={3} align="left">
    
                <Button
                  textTransform="capitalize"
                  _active={{
                    bg: "green.500",
                  }}
                  leftIcon={<FaChrome/>}
                > 
                Website
                </Button>
            </Stack>
              <Box
                w="100%"
                mt={10}
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}>
      <SlideFade in={true} offsetY={80} delay={0.2}>
               
        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://nextjs.org/"} isExternal>
                <Heading as="h6" size="md">
                  {"Next.js"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                  Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                Development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://www.framer.com/motion/"} isExternal>
                <Heading as="h6" size="md">
                  {"Framer Motion"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                Framer Motion is a production-ready React animation and gesture library.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                design & Development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://colorhunt.co/"} isExternal>
                <Heading as="h6" size="md">
                  {"Color Hunt"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                design
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://github.com/"} isExternal>
                <Heading as="h6" size="md">
                  {"Github"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                GitHub is where over 65 million developers shape the future of software, together​. Contribute to the open source community, manage your Git repositories.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://www.prisma.io"} isExternal>
                <Heading as="h6" size="md">
                  {"Prisma"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                The ORM that plays well with any framework. Easy to integrate into your framework of choice.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://vercel.com/"} isExternal>
                <Heading as="h6" size="md">
                  {"Vercel"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                Vercel combines the best developer experience with an obsessive focus on end-​user performance.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://dev.to/"} isExternal>
                <Heading as="h6" size="md">
                  {"Dev Community"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                A constructive and inclusive social network for software developers. With you every step of your journey.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://expressjs.com/"} isExternal>
                <Heading as="h6" size="md">
                  {"Express.js"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                Express.js, or simply Express, is a back end web application framework for Node.js, 
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>

        <LinkBox as="article">
        <Box
         {...styleProps.boxWrapper}
         schema={"green.300"}
         _hover={{
           borderColor: "green.300",
         }}
        >
          <Box
          {...styleProps.boxtwo}
          >
              <LinkOverlay href={"https://nestjs.com/"} isExternal>
                <Heading as="h6" size="md">
                  {"NestJS"}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                A framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements.
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                development
              </Tag>
            </Box>
          </Box>
        </LinkBox>
        </SlideFade>
        </Box>
        </Container>
      </main>
    </div>
  );
};


export default Bookmarks;

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