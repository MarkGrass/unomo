'use client';
import type { FC } from 'react';
import { useState } from 'react';

import cn, { clsx } from 'clsx';

import { ROUTES } from '@const/routes';
import { CrossIcon, LogoIcon, MenuIcon } from '@icons';

import { Button } from '../button';
import { Navigation } from '../navigation';

import styles from './header.module.css';

type HeaderProps = {
    inverse?: boolean;
    color?: 'default' | 'white';
};

export const Header: FC<HeaderProps> = ({ inverse = false }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <header
            className={clsx({
                [styles.header]: true,
                [styles.inverse]: inverse,
            })}
        >
            <Button className={styles.logo} href={ROUTES.ROOT} variant="ghost">
                <LogoIcon />
            </Button>

            <Button
                className={cn({ [styles.toggle]: true, [styles.expanded]: expanded })}
                iconRight={
                    expanded ? (
                        <CrossIcon className={styles.toggleIcon} />
                    ) : (
                        <MenuIcon className={styles.toggleIcon} />
                    )
                }
                variant="ghost"
                onClick={toggleMenu}
            />

            <Navigation inverse={inverse} visible={expanded} />
        </header>
    );
};
