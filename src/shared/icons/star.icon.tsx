import type { FC, SVGProps } from 'react';

export const StarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        fill="none"
        height={16}
        viewBox="0 0 16 15"
        width={16}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.3579 4.7959L15.2505 5.84766L11.9146 9.55469L12.4194 14.5L7.83838 12.4951L3.25732 14.5L3.76221 9.55469L0.42627 5.84766L5.31885 4.7959L7.83838 0.5L10.3579 4.7959Z"
            fill="var(--icon-color, #FFCB45)"
        />
    </svg>
);
