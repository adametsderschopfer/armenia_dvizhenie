import {FC} from "react";

interface ISectionHeadProps {
    number: number;
    title: string;
    dark?: boolean;
}

export const SectionHead: FC<ISectionHeadProps> = (
    {
        number,
        title,
        dark = true
    }
) => {
    return <div
        className={[
            dark ? "text-lack border-b-secondary" : "text-white border-b-white/40",
            "pb-4 mb-8 border-b-1 font-bold"
        ].join(" ")}
    >#{number} / {title}</div>
}