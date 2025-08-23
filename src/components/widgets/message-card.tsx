import {FC} from "react";
import {ArrowTightIcon} from "@/assets/icons";

interface IMessageCardProps {
    title: string;
    description: string;
    href: string;
}

export const MessageCard: FC<IMessageCardProps> = ({title, description, href}) => {
    return (
        <a href={href} className="min-w-50 sm:min-w-88 lg:min-w-auto min-h-56 sm:min-h-86 lg:min-h-auto flex flex-col p-4 sm:p-6 mb-6 bg-secondary relative active:scale-[1.02] duration-100">
            <div className="font-bold text-lg mb-3">{title}</div>
            <p className="text-black/40 text-base mb-12 lg:mb-24">{description}</p>
            <a className="hover:text-accent duration-200 gap-2 uppercase font-bold flex items-center mt-auto">
                Подробнее
                <ArrowTightIcon/>
            </a>

            <span className="card-triangle text-secondary" />
        </a>
    )
}