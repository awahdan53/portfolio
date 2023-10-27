import { Flex, Image, Text } from "@mantine/core";
import navLogo from "../../assets/logos/nav-logo.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Flex justify="center" py={16} className={classes.border}>
      <Flex justify="space-between" align="center" w={1024}>
        <Flex gap={12} justify="center" align="center">
          <Image src={navLogo} w={32} h={32} />
          <Text>WAHDAN</Text>
        </Flex>
        <Flex gap={24}>
          <Text>Home</Text>
          <Text>About Me</Text>
          <Text>Project</Text>
          <Text>Service</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
