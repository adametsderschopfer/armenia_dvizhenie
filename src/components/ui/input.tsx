import {FC, InputHTMLAttributes} from "react";

type IInputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<IInputProps> = (props) => {
    return <input
        type={"text"}
        {...props}
        placeholder={props.placeholder?.toUpperCase()}
        className={[
            "px-[32px] py-[28px] mb-[16px] border-1 border-white/50",
            "",
            "placeholder:text-white/50 text-white font-bold",
            props.className
        ].join(" ")}
    />
}