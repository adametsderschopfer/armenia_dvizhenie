'use client'

import {ArrowTightIcon, BurgerIcon, LogoIcon} from "@/assets/icons";
import {LanguageSwitch} from "@/components/widgets/lang-switch";
import Link from "next/link";
import {useState} from "react";
import {MobileMenu} from "@/components/widgets/header/mobile-menu";

export const Header = () => {
    const [mobileMenuShown, setMobileMenuShown] = useState(false)

    const handleMobileMenuOpen = () => {
        setMobileMenuShown(true)
    }

    const handleMobileMenuClose = () => {
        setMobileMenuShown(false)
    }

    return (
        <>
            <header className="fixed z-3 top-0 flex w-full bg-white/40 backdrop-blur-md pl-6 sm:pl-8">
                <div className="py-4 flex items-center gap-16">
                    <LogoIcon/>

                    <div className="uppercase text-white text-sm gap-4 lg:flex font-bold hidden">
                        <a href="#news" className="hover:underline">НОВОСТИ</a>
                        <a href="#goals" className="hover:underline">ЦЕЛИ И МИССИЯ</a>
                        <a href="#events" className="hover:underline">СОБЫТИЯ</a>
                        <a href="#contacts" className="hover:underline">КОНТАКТЫ</a>
                    </div>
                </div>

                <button className="ml-auto mr-6 sm:mr-auto cursor-pointer block lg:hidden" onClick={handleMobileMenuOpen}>
                    <BurgerIcon/>
                </button>

                <div className="lg:ml-auto flex items-center gap-7 text-sm">
                    <LanguageSwitch className={'hidden lg:flex'}/>

                    <Link href="/"
                          className="hidden sm:flex duration-200 hover:text-white hover:bg-accent cursor-pointer gap-2 items-center px-7 h-full uppercase text-accent font-bold bg-white">
                        Войти/Зарегистрироваться <ArrowTightIcon/>
                    </Link>
                </div>
            </header>
            <MobileMenu shown={mobileMenuShown} onClose={handleMobileMenuClose}/>
        </>
    )
}