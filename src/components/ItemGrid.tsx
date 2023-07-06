import { SimpleGrid, Text } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import ItemCard from "./ItemCard";
import ItemCardSkeleton from "./ItemCardSkeleton";
import ItemCardContainer from "./ItemCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}
const ItemGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useItems(selectedGenre);
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
            <ItemCardContainer key={skeleton}>
              <ItemCardSkeleton />
            </ItemCardContainer>
          ))}
        {data?.map((item) => (
          <ItemCardContainer key={item.id}>
            <ItemCard item={item} />
          </ItemCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemGrid;
