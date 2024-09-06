import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Heading, Image, Text, HStack } from "@chakra-ui/react";

interface PlayerProps {
  currentTrack: string | null;
  trackName: string | null;
  albumImage: string | null;
}

const Player: React.FC<PlayerProps> = ({
  currentTrack,
  trackName,
  albumImage,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play/Pause control
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Skip forward by 10 seconds
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  // Skip backward by 10 seconds
  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      if (audioRef.current.currentTime < 0) {
        audioRef.current.currentTime = 0;
      }
    }
  };

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" width="full">
      {currentTrack ? (
        <>
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Image
              src={albumImage ?? ""}
              alt={trackName ?? "Track Album Art"}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
              mb={2}
            />
            <Heading size="md" mb={2}>
              {trackName}
            </Heading>
            <Text mb={4}>Now Playing</Text>
          </Box>

          {/* Audio element */}
          <audio ref={audioRef}>
            <source src={currentTrack} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Playback controls */}
          <HStack spacing={4} justify="center" mt={4}>
            <Button onClick={skipBackward} colorScheme="yellow">
              ⏪ Back 10s
            </Button>
            <Button
              onClick={togglePlayPause}
              colorScheme={isPlaying ? "red" : "green"}
            >
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button onClick={skipForward} colorScheme="yellow">
              ⏩ Forward 10s
            </Button>
          </HStack>
        </>
      ) : (
        <Text>No track selected</Text>
      )}
    </Box>
  );
};

export default Player;
