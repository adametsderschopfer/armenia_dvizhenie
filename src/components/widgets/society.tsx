import {TelegramIcon, ViberIcon, WhatsAppIcon} from "@/assets/icons";
import {FC, HTMLAttributes} from "react";

export const SocietyBlock: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
    <div
        {...props}
        className={[
            "gap-x-1 flex justify-start md:items-end md:justify-end md:max-w-[475px] lg:max-w-[550px]",
            props.className
        ].join(' ')}
    >
        <a href="">
            <ViberIcon/>
        </a>
        <a href="">
            <TelegramIcon/>
        </a>
        <a href="">
            <WhatsAppIcon/>
        </a>
    </div>
)