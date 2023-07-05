import { SimpleGrid, Text } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import ItemCard from "./ItemCard";

const ItemGrid = () => {
  const { items, error } = useItems();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemGrid;
