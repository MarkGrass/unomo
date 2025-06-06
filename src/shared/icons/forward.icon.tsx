import type { FC, SVGProps } from 'react';

export const ForwardIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5 11L16.5859 11L11.293 5.70703C10.9024 5.31651 10.9024 4.68349 11.293 4.29297C11.6835 3.90245 12.3165 3.90245 12.707 4.29297L19.707 11.293L19.7754 11.3691C20.0957 11.7619 20.0731 12.3409 19.707 12.707L12.707 19.707L12.6309 19.7754C12.2381 20.0957 11.6591 20.0731 11.293 19.707C10.9268 19.3409 10.9043 18.7619 11.2246 18.3691L11.293 18.293L16.5859 13H5C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11Z"
            fill="var(--icon-color, currentcolor)"
        />
    </svg>
);
