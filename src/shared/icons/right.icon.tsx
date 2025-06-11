import type { FC, SVGProps } from 'react';

export const RightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        fill="none"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 5L16 12L9 19"
            stroke="#3F7AFA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
