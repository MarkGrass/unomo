import type { FC, JSX, PropsWithChildren } from 'react';
import cn from 'clsx';
import styles from './typo.module.css';

export type FontWeight = 'medium' | 'semi' | 'bold';
export type FontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TypoProps = {
    as?: string;
    italic?: boolean;
    size?: FontSize;
    weight?: FontWeight;
    className?: string;
    [key: string]: unknown;
};

export const Typo: FC<PropsWithChildren<TypoProps>> = ({
    as = 'span',
    size = 'md',
    weight = 'medium',
    className = '',
    children,
    ...rest
}) => {
    const getSize = (): string => {
        if (['h1', 'h2', 'h3', 'h4'].includes(as)) {
            return as;
        }

        return size;
    };
    const classes = cn({
        [styles.typo]: true,
        [styles[weight]]: true,
        [styles[getSize()]]: true,
        [className]: Boolean(className),
    });
    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    return <Tag className={classes} {...rest}>{children}</Tag>;
};
