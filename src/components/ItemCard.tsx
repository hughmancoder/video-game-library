import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Item } from "../hooks/useItems";
import PlatformIconList from "./PlatformIconList";

interface Props {
  item: Item;
}

const ItemCard = ({ item }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={item.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{item.name}</Heading>
        <PlatformIconList
          platforms={item.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default ItemCard;
