import { Platform } from "../hooks/useItems";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

// ICONS
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

export interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform, i) => (
        <Icon
          key={`${platform.slug}-${i}`}
          as={iconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
