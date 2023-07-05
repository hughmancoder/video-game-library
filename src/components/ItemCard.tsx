import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Item } from "../hooks/useItems";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";

interface Props {
  item: Item;
}

const ItemCard = ({ item }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={item.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{item.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={item.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={item.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
