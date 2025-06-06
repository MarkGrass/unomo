import type { FC, JSX, PropsWithChildren } from 'react';
import cn from 'clsx';
import styles from './grid.module.css';

export type GridGap = '0' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type GridProps = {
    as?: string;
    className?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    centered?: boolean;
    cols?: number;
    gap?: GridGap;
    [key: string]: unknown;
};

export const Grid: FC<PropsWithChildren<GridProps>> = ({
    as = 'div',
    className = '',
    centered = false,
    fullWidth = false,
    fullHeight = false,
    cols = 12,
    gap = 'md',
    children,
    ...rest
}) => {
    const classes = cn({
        [styles.grid]: true,
        [styles.centered]: centered,
        [styles['fill-width']]: fullWidth,
        [styles['fill-height']]: fullHeight,
        [styles[`cols-${cols}`]]: true,
        [styles[`gap-${gap}`]]: true,
        [className]: Boolean(className),
    });
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};
