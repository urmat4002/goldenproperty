import { SearchIcon } from 'lucide-react';
import { FC } from 'react';
import styles from './Search.module.scss';
import { Button } from '@/shared/ui'

export const Search: FC = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        className={styles.search__input}
      />
      <Button type='icon' onClick={() => {}}>
        <SearchIcon color="#B9BCBE" />
      </Button>
    </div>
  );
};
