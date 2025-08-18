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
            "group bg-white py-4 px-6 cursor-pointer duration-200 relative open:bg-accent open:text-white",
            props.className
        ].join(" ")}
    >
        <summary
            className="list-none text-lg font-bold pr-6"
        >
            {title}
            <PlusIcon
                className="absolute right-[19px] top-[19px] duration-200 text-white group-open:rotate-45 group-open:text-accent z-[1]"/>
            <span
                className="absolute right-[10px] top-[10px] w-[46px] h-[46px] bg-accent duration-200 group-open:bg-white"
            />
        </summary>
        <p className="mt-3 max-w-[300px] leading-[120%] text-white/40">
            {children}
        </p>
    </details>
);