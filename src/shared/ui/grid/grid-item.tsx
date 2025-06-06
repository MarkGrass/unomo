import { FC, JSX, PropsWithChildren } from 'react';
import cn from 'clsx';
import styles from './grid.module.css';

export type GridItemFlow = 'block' | 'flex' | 'grid';
export type GridItemProps = {
    className?: string;
    as?: string;
    flow?: GridItemFlow;
    cols?: number;
    rows?: number;
    colStart?: number;
    rowStart?: number;
    [key: string]: unknown;
};

export const GridItem: FC<PropsWithChildren<GridItemProps>> = ({
    className = '',
    as = 'div',
    cols = 0,
    rows = 0,
    colStart = 0,
    rowStart = 0,
    children,
    ...rest
}) => {
    const classes = cn({
        [styles['grid-item']]: true,
        [styles[`grid-item-cols-${cols}`]]: Boolean(cols),
        [styles[`grid-item-rows-${rows}`]]: rows > 1,
        [styles[`grid-item-col-start-${colStart}`]]: colStart > 1 && colStart < 12,
        [styles[`grid-item-row-start-${rowStart}`]]: Boolean(rowStart),
        [className]: Boolean(className),
    });
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};
