import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Item } from "../hooks/useItems";

interface Props {
  item: Item;
}

const ItemCard = ({ item }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={item.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{item.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
