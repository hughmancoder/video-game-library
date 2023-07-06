import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ItemCardContainer = ({ children }: Props) => {
  // box applied styles in sub-components
  return (
    <Box borderRadius={10} overflow="hidden" width="100%">
      {children}
    </Box>
  );
};

export default ItemCardContainer;
