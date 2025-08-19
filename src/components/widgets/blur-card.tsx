"use client"
import {FC} from "react";
import {ArrowCircleIcon} from "@/assets/icons";

interface IMessageCardProps {
    title: string;
    description: string;
}

export const BlurCard: FC<IMessageCardProps> = ({title, description}) => {
    return (
        <article
            className="group h-[360px] p-6 flex flex-col items-start relative active:bg-white duration-200 backdrop-blur-sm"
        >
            <div className="group-active:text-black text-white font-bold text-xxl duration-200">{title}</div>

            <div className="mt-auto flex items-end">
                <div className="flex-1 opacity-0 group-active:opacity-100 duration-200 pr-2">{description}</div>
                <ArrowCircleIcon
                    className="ml-auto shrink text-white group-active:text-black group-active:rotate-180"/>
            </div>
        </article>
    )
}