import type { FC, SVGProps } from 'react';

export const LeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        fill="none"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 19L8 12L15 5"
            stroke="var(--icon-color, currentcolor)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
