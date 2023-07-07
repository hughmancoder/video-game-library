import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  Heading,
  Icon,
  Tooltip,
} from "@chakra-ui/react";

import { NavBar } from "./components/NavBar";
import ItemGrid from "./components/ItemGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { RiInformationFill as InfoIcon } from "react-icons/ri";
import { Platform } from "./hooks/useItems";
import { Genre } from "./hooks/useGenres";
onabort;

const ABOUT =
  "A video game library mock web-application inspired by rawg.io built with react 18 using the latest react 2023 best-practices inspired from <https://rawg.io/>";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  const currentYear = new Date().getFullYear();

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flex="1">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "250px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar
              onSearch={(search) => {
                setGameQuery({ ...gameQuery, searchText: search });
              }}
            />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading gameQuery={gameQuery} />
              <Flex marginBottom={5}>
                <Box marginRight={5}>
                  <PlatformSelector
                    selectedPlatform={gameQuery.platform}
                    onSelectPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platform })
                    }
                  />
                </Box>
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Flex>
            </Box>
            <ItemGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </Box>
      <Box className="Footer" as="footer">
        <Tooltip label={ABOUT ?? "no info available"} hasArrow>
          <Heading
            fontSize="xl"
            marginBottom={3}
            display="flex"
            alignItems="center"
          >
            Hugh Signoriello {currentYear}
            <Icon as={InfoIcon} boxSize={6} marginLeft={2} marginTop="3px" />
          </Heading>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default App;
