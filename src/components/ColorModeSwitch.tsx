import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {colorMode === "light" ? (
        <FaMoon onClick={toggleColorMode} cursor="pointer" />
      ) : (
        <FaSun onClick={toggleColorMode} cursor="pointer" />
      )}
    </HStack>
  );
};
export default ColorModeSwitch;

// const ColorModeSwitch = () => {
//   const { toggleColorMode, colorMode } = useColorMode();
//   return (
//     <DarkModeToggle
//     // <HStack>
//     //   <Switch
//     //     colorScheme="gray"
//     //     isChecked={colorMode === "dark"}
//     //     onChange={toggleColorMode}
//     //   />
//     //   <Text whiteSpace="nowrap">Dark Mode</Text>
//     // </HStack>
//   );
// };

// export default ColorModeSwitch;
