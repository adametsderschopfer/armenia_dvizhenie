import {FC} from "react";
import {ArrowTightIcon} from "@/assets/icons";

interface IMessageCardProps {
    title: string;
    description: string;
    href: string;
}

export const MessageCard: FC<IMessageCardProps> = ({title, description, href}) => {
    return (
        <a href={href} className="p-6 mb-6 bg-secondary relative active:scale-[1.02] transition-[100ms]">
            <div className="font-bold text-lg mb-3">{title}</div>
            <p className="text-black/40 text-base mb-12 lg:mb-24">{description}</p>
            <div className="gap-2 text-accent uppercase font-bold flex items-center">
                Подробнее
                <ArrowTightIcon/>
            </div>

            <span
                className="absolute -bottom-6 right-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-b-transparent border-r-secondary"></span>
        </a>
    )
}