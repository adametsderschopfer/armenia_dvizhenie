import { Input } from "@/components/ui/input";
import { FC, InputHTMLAttributes } from "react";
import { useMaskito } from "@maskito/react";
import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import metadata from "libphonenumber-js/min/metadata";

const armenianPhoneMask = maskitoPhoneOptionsGenerator({countryIsoCode: 'AM', metadata});

export const MaskedPhoneInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const maskedInputRef = useMaskito({
        options: armenianPhoneMask,
    });

    return (
        <Input
            {...props}
            type="tel"
            // @ts-ignore
            ref={maskedInputRef}
            placeholder="+374 __ ___ ___"
        />
    );
};