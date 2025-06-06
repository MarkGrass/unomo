'use client';
import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'clsx';
import styles from './slider.module.css';
import { LeftIcon, RightIcon } from '@icons';
import {
    AdvisorImage,
    AssistantImage,
    GeneralCounselImage,
    HeadImage,
    LeadAdvisorImage,
} from '@assets';
import { useResize } from '@hooks';

type SliderProps = {
    title?: string;
    className?: string;
};

export const Slider: FC<SliderProps> = ({ title = '', className = '' }) => {
    const { isMobile } = useResize();
    const slides = [
        {
            key: 'head',
            name: `Орлов
            Андрей Олегович`,
            position: isMobile
                ? 'Руководитель юр. подразделения'
                : 'Руководитель юридического подразделения',
            exp: '12 лет',
            price: '5400+',
            image: HeadImage,
        },
        {
            key: 'counsel',
            name: `Савин
            Игорь Сергеевич`,
            position: 'Главный юрисконсульт',
            exp: '14 лет',
            price: '4860+',
            image: GeneralCounselImage,
        },
        {
            key: 'lead',
            name: `Власова
            Анна Сергеевна`,
            position: 'Ведущий юрисконсульт',
            exp: '5 лет',
            price: '3840+',
            image: LeadAdvisorImage,
        },
        {
            key: 'advisor',
            name: `Елагин
            Александр Борисович`,
            position: 'Юрисконсульт',
            exp: '5 лет',
            price: '1900+',
            image: AdvisorImage,
        },
        {
            key: 'assistant',
            name: `Чернышева
            Мария Игоревна`,
            position: 'Помощник юриста',
            exp: '2 лет',
            price: '1150+',
            image: AssistantImage,
        },
    ];
    const initialState = Array(slides.length).fill(null);
    const slidesRef = useRef<(HTMLElement | null)[]>(initialState);
    const [isInteraction, setIsInteraction] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrev = () => {
        setIsInteraction(true);
        setActiveSlide((prev) => {
            if (prev === 0) {
                return prev;
            }
            return prev - 1;
        });
    };

    const handleNext = () => {
        setIsInteraction(true);
        setActiveSlide((prev) => {
            if (prev === slides.length - 1) {
                return prev;
            }
            return prev + 1;
        });
    };

    const handleClick = (index: number) => {
        setIsInteraction(true);
        setActiveSlide(index);
    };

    useEffect(() => {
        if (isInteraction) {
            setIsInteraction(false);
            slidesRef.current[activeSlide]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            });
        }
    }, [activeSlide, isInteraction]);

    return (
        <article
            className={cn({
                [styles.slider]: true,
                [className]: Boolean(className),
            })}
        >
            <header className={styles.header}>
                {title && <h3 className={styles.title}>{title}</h3>}

                <div className={styles.controls}>
                    <div
                        role="button"
                        color="secondary"
                        className={styles.prev}
                        onClick={handlePrev}
                    >
                        <LeftIcon />
                    </div>
                    <div
                        role="button"
                        color="secondary"
                        className={styles.next}
                        onClick={handleNext}
                    >
                        <RightIcon />
                    </div>
                </div>
            </header>

            <div className={styles.wrapper}>
                {slides.map((slide, index) => (
                    <figure
                        ref={(c) => {
                            if (c) {
                                slidesRef.current[index] = c;
                            }
                        }}
                        className={styles.slide}
                        key={slide.key}
                    >
                        <Image
                            src={slide.image}
                            alt={`${slide.name}, ${slide.position}`}
                            width={435}
                            height={500}
                        />
                        <figcaption className={styles.info}>
                            <p className={styles.name}>{slide.name}</p>
                            <p className={styles.position}>{slide.position}</p>
                            <p className={styles.exp}>Стаж: {slide.exp}</p>
                            <p className={styles.price}>Консультация: {slide.price}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <footer className={styles.pointer}>
                {slides.map(({ key, position }, index) => (
                    <div
                        key={key}
                        role="button"
                        aria-label={position}
                        className={cn({
                            [styles.point]: true,
                            [styles.active]: activeSlide === index,
                        })}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </footer>
        </article>
    );
};
