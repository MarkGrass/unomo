import type { FC, PropsWithChildren, ReactNode, JSX } from 'react';

import cn from 'clsx';

import styles from './card.module.css';

export type CardColor = 'primary' | 'secondary' | 'white' | 'transparent';
type CardVariant = 'default' | 'flat';
type CardSize = 'sm' | 'md';

type CardProps = {
    as?: string;
    className?: string;
    color?: CardColor;
    variant?: CardVariant;
    size?: CardSize;
    icon?: ReactNode;
    bordered?: boolean;
    [key: string]: unknown;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({
    as = 'div',
    variant = 'default',
    color = 'white',
    size = 'md',
    className = '',
    bordered = false,
    children,
    ...rest
}) => {
    const classes = cn({
        [styles[variant]]: true,
        [styles[color]]: true,
        [styles[size]]: true,
        [styles.bordered]: bordered,
        [className]: Boolean(className),
    });
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};
