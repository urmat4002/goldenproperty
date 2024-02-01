import { FC } from 'react';
import styles from './LangSelect.module.scss';
import { ChevronDown, Globe } from 'lucide-react';
import { Typography } from '@/shared/ui';

export const LangSelect: FC = () => {
  return (
    <div className={styles.langSelect}>
      <Globe color="white" width={20} />
      <Typography variant="Caption1" weight="medium" color="white">
        EN
      </Typography>
      <ChevronDown color="white" width={20} />
    </div>
  );
};
