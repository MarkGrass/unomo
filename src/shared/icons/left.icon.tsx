import type { FC, SVGProps } from 'react';

export const LeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 19L8 12L15 5"
            stroke="var(--icon-color, currentcolor)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
