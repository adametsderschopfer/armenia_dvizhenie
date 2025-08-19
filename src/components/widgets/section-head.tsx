import {FC} from "react";

interface ISectionHeadProps {
    className?: string;
    number?: number;
    title: string;
    variant?: 'dark' | 'gray' | 'white';
}

export const SectionHead: FC<ISectionHeadProps> = (
    {
        number,
        title,
        variant = 'dark',
        className
    }
) => {
    const variants = {
        white: "text-white border-b-white/40",
        dark: "text-black border-b-secondary",
        gray: "text-black/40 border-b-black/40"
    }

    return <div
        className={[
            variants[variant],
            "uppercase pb-3 sm:pb-4 mb-6 sm:mb-8 border-b-1 font-bold",
            className,
        ].join(" ")}
    >{number && `#${number} / `}{title}</div>
}