import styles from './App.module.css';
import { Button } from '@chakra-ui/react';
import Counter from './counter/Counter';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <Counter />
        <Button colorScheme="blue">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
