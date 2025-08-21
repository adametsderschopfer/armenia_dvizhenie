"use client"
import {FC} from "react";
import {ArrowCircleIcon, ArrowTightIcon} from "@/assets/icons";
import {useMediaQuery} from "@/utils/media";
import Image from "next/image";

interface IMessageCardProps {
    active: boolean;
    title: string;
    imageSrc: string;
    description: string;

    onClick: () => void;
}

export const BlurCard: FC<IMessageCardProps> = ({active, imageSrc, title, description, onClick}) => {
    const isTablet = useMediaQuery("(max-width: 1440px)");

    return (
        <article
            className={[
                "backdrop-blur-[7.5px] mb-6 cursor-pointer min-w-50 sm:min-w-88 lg:min-w-auto lg:min-h-auto lg:h-[360px] pb-4 sm:pb-6 lg:px-6 pt-0 lg:pt-6 flex flex-col items-start relative duration-200",
                active && "bg-white"
            ].join(' ')}
            style={{
                backgroundColor: active ? undefined : "rgba(227, 226, 226, 0.5)"
            }}
            onClick={onClick}
        >
            <span
                className={[
                    "card-triangle duration-200",
                    active ? "text-white" : "text-[#e3e2e2d1] opacity-60"
                ].join(' ')}
            ></span>
            <Image
                src={imageSrc}
                alt={title}
                width={440}
                height={200}
                className={"mb-4 sm:mb-6 lg:hidden object-cover h-[200px]"}
            />

            <div className={[
                "font-bold text-xls sm:text-xl mb-2 sm:mb-3 lg:text-2xl duration-200 px-4 sm:px-6 lg:px-0",
                active ? "text-black" : "text-white"
            ].join(" ")}>{title}</div>

            <div className="lg:max-w-43 flex flex-col items-end px-4 sm:px-6 lg:px-0 mb-6 lg:mb-0">
                <div className={[
                    "flex-1 duration-200 pr-2 text-black/40 text-base",
                    active ? "opacity-100" : "opacity-0"
                ].join(" ")}>{description}</div>
            </div>

            <div className="flex justify-between w-full mt-auto">
                <div className={[
                    active ? "flex" : "hidden",
                    "lg:mt-0 mt-auto uppercase items-center gap-2 lg:pl-0 px-4 sm:px-6 font-bold"
                ].join(' ')}>
                    Подробнее <ArrowTightIcon/>
                </div>

                {!isTablet && (
                    <ArrowCircleIcon
                        className={[
                            "ml-auto",
                            active ? "text-black rotate-180" : "text-white"
                        ].join(" ")}
                    />
                )}
            </div>
        </article>
    )
}