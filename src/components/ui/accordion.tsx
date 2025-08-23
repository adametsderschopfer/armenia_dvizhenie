import {PlusIcon} from "@/assets/icons";
import {FC, HTMLAttributes} from "react";

interface IAccordionProps extends HTMLAttributes<HTMLDetailsElement> {
    title: string;
    open?: boolean;
}

export const Accordion: FC<IAccordionProps> = ({title, children, ...props}) => (
    <details
        {...props}
        className={[
            "group bg-white cursor-pointer duration-200 relative open:bg-accent hover:bg-accent open:text-white hover:text-white",
            props.className
        ].join(" ")}
    >
        <summary
            className="list-none text-lg font-bold pr-6 py-6 sm:py-4 px-4 sm:px-6 select-none"
        >
            {title}
            <PlusIcon
                className="absolute right-[29px] sm:right-[19px] top-[29px] sm:top-[19px] duration-200 text-white group-open:rotate-45 group-open:text-accent group-hover:text-accent z-[1]"/>
            <span
                className="absolute right-[20px] sm:right-[10px] top-[20px] sm:top-[10px] w-[46px] h-[46px] bg-accent duration-200 group-open:bg-white group-hover:bg-white"
            />
        </summary>
        <p className="mb-4 sm:mb-6 leading-[120%] text-white/40 px-4 sm:px-6">
            {children}
        </p>
    </details>
);