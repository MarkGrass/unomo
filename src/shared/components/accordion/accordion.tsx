'use client';
import type { FC, MouseEvent } from 'react';
import { useState } from 'react';

import cn from 'clsx';

import { MinusIcon, PlusIcon } from '@icons';

import styles from './accordion.module.css';

export type AccordionItemProps = {
    key: string;
    title: string;
    description: string;
};

type AccordionProps = {
    items: AccordionItemProps[];
    className?: string;
};

export const Accordion: FC<AccordionProps> = ({ items = [], className = '' }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const handleClick = (event: MouseEvent, index: number) => {
        event.preventDefault();
        setActiveItemIndex(index);
    };

    return (
        <div
            className={cn({
                [styles.accordion]: true,
                [className]: Boolean(className),
            })}
        >
            {items.map((item, index) => (
                <details
                    className={styles.item}
                    key={item.key}
                    open={activeItemIndex === index}
                >
                    <summary onClick={(event) => handleClick(event, index)}>
                        {item.title}
                        <span className={styles.pointer}>
                            {activeItemIndex === index ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </summary>
                    <p>{item.description}</p>
                </details>
            ))}
        </div>
    );
};
