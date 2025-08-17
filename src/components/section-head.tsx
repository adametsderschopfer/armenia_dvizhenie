import {FC} from "react";

interface ISectionHeadProps {
    number: number;
    title: string;
}

export const SectionHead: FC<ISectionHeadProps> = (
    {
        number,
        title
    }
) => {
    return <div
        className="text-white pb-4 mb-8 border-b-1 border-b-white/40"
    >#{number} / {title}</div>
}