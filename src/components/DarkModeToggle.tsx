import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {colorMode === "light" ? (
        <FaMoon onClick={toggleColorMode} cursor="pointer" />
      ) : (
        <FaSun onClick={toggleColorMode} cursor="pointer" />
      )}
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};
export default DarkModeToggle;
