import {FC} from "react";
import {CrossIcon, LogoAccentIcon} from "@/assets/icons";
import {LanguageSwitch} from "@/components/widgets/lang-switch";
import {SocietyBlock} from "@/components/widgets/society";
import Link from "next/link";

interface IMobileMenuProps {
    shown: boolean;

    onClose(): void
}

export const MobileMenu: FC<IMobileMenuProps> = ({shown, onClose}) => {
    return (
        <>
            {shown && (
                <div
                    className="fixed inset-0 bg-black/70 z-20 transition-opacity duration-300 ease-in-out"
                    onClick={onClose}
                />
            )}

            <div
                className={`fixed inset-y-0 right-0 z-30 w-full max-w-[355px] transform transition-transform duration-300 ease-in-out ${
                    shown ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="h-full flex flex-col bg-white p-6 relative">
                    <button
                        className="absolute top-6 right-6 cursor-pointer z-10"
                        onClick={onClose}
                    >
                        <CrossIcon />
                    </button>

                    <LogoAccentIcon className="mb-6" />

                    <div className="flex flex-col gap-4 text-base font-bold uppercase mt-6">
                        <a href="#" className="hover:underline">Новости</a>
                        <a href="#" className="hover:underline">Цели и миссия</a>
                        <a href="#" className="hover:underline">События</a>
                        <a href="#" className="hover:underline">Контакты</a>
                    </div>

                    <div className="flex flex-col mt-auto gap-6">
                        <LanguageSwitch className="gap-2" />
                        <SocietyBlock className="justify-start!" />
                        <Link
                            href="/"
                            className="duration-200 cursor-pointer gap-2 flex items-center justify-center p-5 h-full text-sm uppercase font-bold text-white bg-accent"
                        >
                            Войти/Зарегистрироваться
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
