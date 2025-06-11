import type { FC } from 'react';

import cn from 'clsx';

import { StarIcon } from '@icons';

import styles from './stars.module.css';

type StarsProps = {
    count: number;
};
export const Stars: FC<StarsProps> = ({ count }) => {
    const keys = Array.from({ length: 5 }, (_, i) => i.toString());

    return (
        <div className={styles.stars}>
            {keys.map((v, i) => (
                <StarIcon className={cn({ [styles.active]: i + 1 <= count })} key={v} />
            ))}
        </div>
    );
};
