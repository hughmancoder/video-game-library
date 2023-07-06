import { SimpleGrid, Text } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import ItemCard from "./ItemCard";
import ItemCardSkeleton from "./ItemCardSkeleton";
import ItemCardContainer from "./ItemCardContainer";

const ItemGrid = () => {
  const { data, error, isLoading } = useItems();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ItemCardContainer>
              <ItemCardSkeleton key={skeleton} />
            </ItemCardContainer>
          ))}
        {data?.map((item) => (
          <ItemCardContainer>
            <ItemCard key={item.id} item={item} />
          </ItemCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemGrid;
