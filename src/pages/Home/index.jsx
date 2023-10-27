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
import makuIcon from "../../assets/icons/maku.svg";

const Home = () => {
  return (
    <Flex pt={24} pb={51} direction="column" justify="center" align="center">
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
                I craft user-friendly digital experiences by blending UI design
                principles with UX insights. I constantly stay updated on design
                and tech trends to remain industry relevant.
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
      <Stack gap={24} mt={48}>
        <Box w={1392} h={680} bg="dark.4" p={96}>
          <Flex direction="column" justify="space-between" h="100%">
            <Flex gap={12} align="center">
              <Image src={makuIcon} w={28} h={28} />
              <Text fz={24} fw={600} c="white">
                MAKU
              </Text>
            </Flex>
            <Box>
              <Stack gap={16}>
                <Text fw={500}>UI/UX RESEARCHER & DESIGNER</Text>
                <Box>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    EMPOWERING YOUR
                  </Text>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    FINANCIAL FUTURE
                  </Text>
                </Box>
                <Box>
                  <Text>Our team has developed a banking application that</Text>
                  <Text>prioritizes financial planning for users' future.</Text>
                </Box>
              </Stack>
              <Button
                mt={32}
                w={172}
                h={56}
                variant="outline"
                color="white"
                classNames={{
                  label: classes.buttonLabel,
                  root: classes.buttonBorder,
                }}
              >
                VIEW CASE STUDY
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w={1392} h={680} bg="dark.4" p={96}>
          <Flex direction="column" justify="space-between" h="100%">
            <Flex gap={12} align="center">
              <Image src={makuIcon} w={28} h={28} />
              <Text fz={24} fw={600} c="white">
                MAKU
              </Text>
            </Flex>
            <Box>
              <Stack gap={16}>
                <Text fw={500}>UI/UX RESEARCHER & DESIGNER</Text>
                <Box>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    EMPOWERING YOUR
                  </Text>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    FINANCIAL FUTURE
                  </Text>
                </Box>
                <Box>
                  <Text>Our team has developed a banking application that</Text>
                  <Text>prioritizes financial planning for users' future.</Text>
                </Box>
              </Stack>
              <Button
                mt={32}
                w={172}
                h={56}
                variant="outline"
                color="white"
                classNames={{
                  label: classes.buttonLabel,
                  root: classes.buttonBorder,
                }}
              >
                VIEW CASE STUDY
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w={1392} h={680} bg="dark.4" p={96}>
          <Flex direction="column" justify="space-between" h="100%">
            <Flex gap={12} align="center">
              <Image src={makuIcon} w={28} h={28} />
              <Text fz={24} fw={600} c="white">
                MAKU
              </Text>
            </Flex>
            <Box>
              <Stack gap={16}>
                <Text fw={500}>UI/UX RESEARCHER & DESIGNER</Text>
                <Box>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    EMPOWERING YOUR
                  </Text>
                  <Text
                    fz={48}
                    fw={800}
                    c="white"
                    className={classes.lineHeight}
                  >
                    FINANCIAL FUTURE
                  </Text>
                </Box>
                <Box>
                  <Text>Our team has developed a banking application that</Text>
                  <Text>prioritizes financial planning for users' future.</Text>
                </Box>
              </Stack>
              <Button
                mt={32}
                w={172}
                h={56}
                variant="outline"
                color="white"
                classNames={{
                  label: classes.buttonLabel,
                  root: classes.buttonBorder,
                }}
              >
                VIEW CASE STUDY
              </Button>
            </Box>
          </Flex>
        </Box>
      </Stack>
      <Box w={1024}>
        <Flex justify="center">
          <Text mt={168} fz={96} className={classes.titleFont}>
            LET’S COLLABORATE
          </Text>
        </Flex>
        <Stack gap={48} mt={125}>
          <Text fz={32} className={classes.bebasFont}>
            CREDITS
          </Text>
          <Flex gap={32}>
            <Stack gap={16}>
              <Text fz={20} className={classes.bebasFont}>
                DESIGN
              </Text>
              <Text fz={14} fw={500}>
                Arief Wahdan Alfhat
              </Text>
            </Stack>
            <Stack gap={16}>
              <Text fz={20} className={classes.bebasFont}>
                DEVELOPER
              </Text>
              <Text fz={14} fw={500}>
                Cartenza Alief Rasyad
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;
