import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Item } from "../hooks/useItems";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  item: Item;
}

const ItemCard = ({ item }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(item.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={item.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={item.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{item.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
