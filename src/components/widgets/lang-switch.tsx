import {FC, HTMLAttributes} from "react";

export const LanguageSwitch: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div  {...props} className={[
            "uppercase font-bold text-black/40 gap-1",
            props.className
        ].join(' ')}>
            <a href="" className="hover:underline">HY</a> / <a href="" className="hover:underline text-black">RU</a> / <a href="" className="hover:underline">EN</a>
        </div>
    )
}