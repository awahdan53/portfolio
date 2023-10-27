import classes from "./Home.module.css";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import locationIcon from "../../assets/icons/location.svg";
import downloadIcon from "../../assets/icons/download.svg";
import buttonIcon from "../../assets/icons/button.svg";

const Home = () => {
  return (
    <Box py={24}>
      <Flex justify="center">
        <Box w={1024}>
          <Flex gap={12} justify="flex-end" align="center">
            <Image src={locationIcon} />
            <Text fz={14}>Bandung, Indonesia.</Text>
          </Flex>
          <Stack gap={32}>
            <Box>
              <Text mt={43}>Hello, my name is Arief Wahdan Alfhat</Text>
              <Text fz={96} className={classes.titleFont}>
                I’M A CREATIVE UI/UX
              </Text>
              <Text fz={96} className={classes.titleFont}>
                PRODUCT DESIGNER
              </Text>
            </Box>
            <Flex
              align="center"
              gap={8}
              w="max-content"
              pb={8}
              className={classes.border}
            >
              <Text fz={14}>Download Resume</Text>
              <Image src={downloadIcon} w={12.8} h={16} />
            </Flex>
            <Stack gap={12}>
              <Text fz={20} fw={500}>
                WHAT I DO
              </Text>
              <Flex justify="space-between">
                <Text w={417} c="#dcdcdc">
                  I craft user-friendly digital experiences by blending UI
                  design principles with UX insights. I constantly stay updated
                  on design and tech trends to remain industry relevant.
                </Text>
                <SimpleGrid cols={2} spacing={16}>
                  <Button
                    w={260}
                    h={56}
                    color="#2a2a2a"
                    leftSection={<Image w={24} />}
                    rightSection={<Image src={buttonIcon} />}
                    justify="space-between"
                  >
                    UX RESEARCH
                  </Button>
                  <Button
                    w={260}
                    h={56}
                    color="#2a2a2a"
                    leftSection={<Image w={24} />}
                    rightSection={<Image src={buttonIcon} />}
                    justify="space-between"
                  >
                    WEBSITES DESIGN
                  </Button>
                  <Button
                    w={260}
                    h={56}
                    color="#2a2a2a"
                    leftSection={<Image w={24} />}
                    rightSection={<Image src={buttonIcon} />}
                    justify="space-between"
                  >
                    USABILITY TESTING
                  </Button>
                  <Button
                    w={260}
                    h={56}
                    color="#2a2a2a"
                    leftSection={<Image w={24} />}
                    rightSection={<Image src={buttonIcon} />}
                    justify="space-between"
                  >
                    MOBILE APP DESIGN
                  </Button>
                </SimpleGrid>
              </Flex>
            </Stack>
          </Stack>
          <Flex justify="center" mt={87}>
            <Divider orientation="vertical" h={140} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
