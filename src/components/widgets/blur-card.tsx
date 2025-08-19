"use client"
import {FC} from "react";
import {ArrowCircleIcon} from "@/assets/icons";
import {useMediaQuery} from "@/utils/media";

interface IMessageCardProps {
    active: boolean;
    title: string;
    description: string;

    onClick: () => void;
}

export const BlurCard: FC<IMessageCardProps> = ({active, title, description, onClick}) => {
    const isTablet = useMediaQuery("(max-width: 1440px)");

    return (
        <article
            className={[
                "min-w-50 sm:min-w-88 lg:min-w-auto min-h-50 sm:min-h-86 lg:min-h-auto h-50 sm:h-[360px] p-6 flex flex-col items-start relative duration-200 backdrop-blur-sm",
                active && "bg-white"
            ].join(' ')}
            onClick={onClick}
        >
            <div className={[
                "font-bold text-[26px] leading-[105%] sm:text-xxl duration-200",
                active ? "text-black" : "text-white"
            ].join(" ")}>{title}</div>

            <div className="mt-auto flex items-end">
                <div className={[
                    "flex-1 duration-200 pr-2 text-black/40 text-base",
                    active ? "opacity-100" : "opacity-0"
                ].join(" ")}>{description}</div>

                {!isTablet && (
                    <ArrowCircleIcon
                        className={[
                            "ml-auto shrink ",
                            active ? "text-black rotate-180" : "text-white"
                        ].join(" ")}
                    />
                )}
            </div>
        </article>
    )
}