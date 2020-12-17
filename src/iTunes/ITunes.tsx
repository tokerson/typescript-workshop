import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPodcasts, selectPodcasts } from './itunesSlice';
interface Props {}

const ITunes = (props: Props) => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const podcasts = useSelector(selectPodcasts);

  const [width, height] = [200, 200];
  const margin = 10;
  return (
    <Box>
      <Input
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <Button
        colorScheme="blue"
        onClick={() => dispatch(searchPodcasts({ searchTerm }))}
      >
        Search
      </Button>
      {podcasts.length > 0 ? (
        <Slider
          defaultValue={offset}
          onChange={(newOffset) => {
            setOffset((newOffset * (width + 2 * margin)) / podcasts.length);
          }}
        >
          <SliderTrack bg="red.100">
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      ) : null}
      <Box position="relative">
        <Stack
          direction="row"
          position="absolute"
          left={`-${offset}px`}
          alignItems="center"
        >
          {podcasts.map((podcast) => (
            <Box
              key={podcast.trackId}
              borderRadius="lg"
              borderWidth="1px"
              padding="10px"
              autoColumns="auto"
              autoRows="auto"
              margin={`0 ${margin}px`}
              width={`${width}px`}
              height={`${height}px`}
              backgroundImage={`url(${podcast.artworkUrl100})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundColor="rgba(0,0,0,.5)"
            >
              <Box backgroundColor="rgba(0,0,0,.7)" borderRadius="8px">
                <Text fontSize="md">{podcast.trackName}</Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ITunes;
