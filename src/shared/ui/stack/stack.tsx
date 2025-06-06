import type { FC, JSX, PropsWithChildren } from 'react';
import cn from 'clsx';
import styles from './stack.module.css';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type StackGap = '0' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StackProps = {
    as?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    inline?: boolean;
    wrap?: boolean;
    direction?: StackDirection;
    align?: StackAlign;
    justify?: StackJustify;
    gap?: StackGap;
    className?: string;
    [key: string]: unknown;
};

export const Stack: FC<PropsWithChildren<StackProps>> = ({
    as = 'div',
    fullWidth = false,
    fullHeight = false,
    inline = false,
    wrap = false,
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap = '0',
    className = '',
    children,
    ...rest
}) => {
    const classes = cn({
        [styles.stack]: true,
        [styles[direction]]: true,
        [styles.inline]: inline,
        [styles.wrap]: wrap,
        [styles['full-width']]: fullWidth,
        [styles['full-height']]: fullHeight,
        [styles[`justify-${justify}`]]: true,
        [styles[`align-${align}`]]: true,
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
