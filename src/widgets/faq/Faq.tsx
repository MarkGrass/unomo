import { FC } from 'react';
import styles from './Faq.module.css';
import { Accordion, Typo } from '@ui';

export const Faq: FC = () => {
    return (
        <section className={styles.faq}>
            <Typo>Частые вопросы</Typo>
            <Accordion></Accordion>
        </section>
    );
};
