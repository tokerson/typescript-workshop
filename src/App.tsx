import styles from './App.module.css';
import { Button } from '@chakra-ui/react';
import Counter from './counter/Counter';
import ITunes from './iTunes/ITunes';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <ITunes />
      </header>
    </div>
  );
}

export default App;
