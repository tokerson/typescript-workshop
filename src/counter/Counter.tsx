import { Button, Stack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { decCount, incCount, selectCount } from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <div>{count}</div>
      <Button colorScheme="green" onClick={() => dispatch(incCount(7))}>
        +
      </Button>
      <Button colorScheme="red" onClick={() => dispatch(decCount(-1))}>
        -
      </Button>
    </Stack>
  );
}
