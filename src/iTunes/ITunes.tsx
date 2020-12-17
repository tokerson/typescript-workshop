import React, { useState } from 'react';
import {
  Table,
  Box,
  Button,
  Input,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPodcasts, selectPodcasts } from './itunesSlice';
interface Props {}

const ITunes = (props: Props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const podcasts = useSelector(selectPodcasts);
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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Author</Th>
            <Th>Title</Th>
            <Th>Image</Th>
            {/* <Th>Link</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {podcasts.map((podcast) => (
            <Tr key={podcast.trackId}>
              <Td>{podcast.artistName}</Td>
              <Td>{podcast.trackName}</Td>
              <Td>
                <img
                  alt={`${podcast.trackName} artwork`}
                  src={podcast.artworkUrl60}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ITunes;
