import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Player from "./Player"; // Import the Player component
import { Track } from "../features/songs/stateAndTypes";
import { fetchSongStart } from "../features/songs/songSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

const Playlist: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [currentTrackName, setCurrentTrackName] = useState<string | null>(null);
  const [currentAlbumImage, setCurrentAlbumImage] = useState<string | null>(
    null
  );
  const dispatch = useDispatch();
  const { tracks, loading, error } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(fetchSongStart());
  }, [dispatch]);

  const handlePlay = (track: Track) => {
    if (track.preview_url) {
      setCurrentTrack(track.preview_url);
      setCurrentTrackName(track.name);
      setCurrentAlbumImage(track.album.images[0]?.url || null);
    } else {
      console.warn("No preview URL available for this track.");
    }
  };

  return (
    <Box p={4} position="relative">
      {/* Sticky Playlist Heading */}
      <Box
        position="sticky"
        top="0"
        zIndex="1"
        bg="white"
        borderBottom="1px solid #e2e8f0"
        pb={2}
        mb={4}
      >
        <Heading>My Playlist</Heading>
      </Box>

      {/* Horizontal Scrollable Grid for Playlist */}
      <SimpleGrid
        columns={[1, 2, 3, 4]} // Responsive columns
        spacing={4}
        overflowX="auto" // Allow horizontal scrolling
      >
        {tracks.map((track) => (
          <GridItem key={track.id} width="100%" minW="300px">
            <Flex
              borderWidth={1}
              borderRadius="md"
              p={4}
              cursor="pointer"
              onClick={() => handlePlay(track)}
              _hover={{ boxShadow: "lg" }}
              alignItems="center"
              boxShadow="md"
              minW="100%"
            >
              {/* Album Image */}
              <Image
                src={
                  track.album.images[0]?.url ||
                  "https://via.placeholder.com/100"
                }
                alt={track.name}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
                mr={4}
              />

              {/* Track Details */}
              <Box flex="1">
                <Heading size="md">{track.name}</Heading>
                <Text>
                  Artist:{" "}
                  {track.artists.map((artist) => artist.name).join(", ")}
                </Text>
                {track.preview_url ? (
                  <Text color="teal.500" mt={2}>
                    Click to Play
                  </Text>
                ) : (
                  <Text color="red.500">No Preview Available</Text>
                )}
              </Box>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>

      {/* Player Component at Bottom */}
      {currentTrack && (
        <Box
          mt={8}
          p={4}
          position="sticky"
          bottom="0"
          bg="white"
          zIndex={2}
          borderWidth={1}
          borderRadius="md"
          boxShadow="lg"
        >
          <Player
            currentTrack={currentTrack}
            trackName={currentTrackName}
            albumImage={currentAlbumImage}
          />
        </Box>
      )}
    </Box>
  );
};

export default Playlist;
