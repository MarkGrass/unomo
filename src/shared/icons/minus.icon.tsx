import type { FC, SVGProps } from 'react';

export const MinusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 12.998H5V10.998H19V12.998Z" fill="var(--icon-color, black)" />
    </svg>
);
