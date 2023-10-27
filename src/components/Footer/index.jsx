import classes from "./Footer.module.css";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import locationIcon from "../../assets/icons/location.svg";
import copyrightIcon from "../../assets/icons/copyright.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import githubIcon from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <Flex direction="column" justify="center" align="center" bg="#2a2a2a">
      <Box w={1024}>
        <Box pt={32} pb={50}>
          <SimpleGrid cols={4}>
            <Stack gap={12}>
              <Text fz={14} fw={500}>
                Site Map
              </Text>
              <Text fz={12} c="#dcdcdc">
                Home
              </Text>
              <Text fz={12} c="#dcdcdc">
                About Me
              </Text>
              <Text fz={12} c="#dcdcdc">
                Project
              </Text>
              <Text fz={12} c="#dcdcdc">
                Service
              </Text>
            </Stack>
            <Stack gap={12}>
              <Text fz={14} fw={500}>
                Free Resource
              </Text>
              <Text fz={12} c="#dcdcdc">
                Website UI template
              </Text>
              <Text fz={12} c="#dcdcdc">
                Mobile App UI Template
              </Text>
            </Stack>
            <Stack gap={12}>
              <Text fz={14} fw={500}>
                Contact information:
              </Text>
              <Text fz={12} c="#dcdcdc">
                +6281221447884
              </Text>
              <Text fz={12} c="#dcdcdc">
                wahdanalfhat@gmail.com
              </Text>
            </Stack>
            <Stack gap={12}>
              <Text fz={20} fw={500}>
                ARIEF WAHDAN ALFHAT
              </Text>
              <Flex gap={14} align="center">
                <Image src={locationIcon} />
                <Text c="#dcdcdc">Bandung, Indonesia.</Text>
              </Flex>
            </Stack>
          </SimpleGrid>
          <Flex justify="center">
            <Stack gap={8}>
              <Text c="#dcdcdc">Social Media:</Text>
              <Flex gap={12}>
                <Image src={linkedinIcon} h={18} />
                <Image src={instagramIcon} h={18} />
                <Image src={figmaIcon} h={18} />
                <Image src={githubIcon} h={18} />
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Box>
      <Box className={classes.border} w="100%"></Box>
      <Box w={1024} py={12}>
        <Flex gap={8} align="center">
          <Image src={copyrightIcon} w={14} h={14} />
          <Text fz={12} fw={500}>
            2023, Arief Wahdan Alfhat
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
