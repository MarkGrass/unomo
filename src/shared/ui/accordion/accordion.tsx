import { FC } from 'react';
import cn from 'clsx';
import styles from './accordion.module.css';

type AccordionProps = {
    className?: string;
};

export const Accordion: FC<AccordionProps> = ({ className = '' }) => {
    return (
        <div
            className={cn({
                [styles.accordion]: true,
                [className]: Boolean(className),
            })}
        >
            Accordion
        </div>
    );
};
