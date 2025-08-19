import {LogoAccentIcon, TelegramIcon, ViberIcon, WhatsAppIcon} from "@/assets/icons";
import {SectionHead} from "@/components/widgets/section-head";

import './index.css'
import {LanguageSwitch} from "@/components/widgets/lang-switch";
import {SocietyBlock} from "@/components/widgets/society";

export const Footer = () => {
    return (
        <footer className="container p-8 grid gap-6 sm:gap-4 footer">
            <div
                className="flex footer__block-1 max-w-full sm:max-w-[475px] lg:max-w-[550px] flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center md:h-[60px] justify-between sm:justify-start md:justify-between gap-9 md:gap-0">
                <LogoAccentIcon/>
                <LanguageSwitch/>
            </div>


            <div className="font-bold uppercase text-black/40 footer__block-2 flex items-end">
                © {new Date().getFullYear()}. Все права защищены
            </div>

            <SocietyBlock className="footer__block-society"/>

            <div className="footer__block-4 sm:mb-8">
                <SectionHead
                    title={"НАВИГАЦИЯ"}
                    variant={'gray'}
                    className="mb-6!"
                />
                <div className="gap-3 flex flex-col font-bold uppercase">
                    <a href="#news" className="hover:underline">НОВОСТИ</a>
                    <a href="#goals" className="hover:underline">ЦЕЛИ И МИССИЯ</a>
                    <a href="#events" className="hover:underline">СОБЫТИЯ</a>
                    <a href="#contacts" className="hover:underline">КОНТАКТЫ</a>
                </div>
            </div>

            <div className="footer__block-5 md:mb-8">
                <SectionHead
                    title={"КОНТАКТЫ"}
                    variant={'gray'}
                    className="mb-6"
                />
                <div className="gap-3 flex flex-col font-bold uppercase">
                    <a href="" className="hover:underline">+374 XX XXX XXX</a>
                    <a href="" className="hover:underline">hello@вашдомен.am</a>
                    <a href="" className="hover:underline">Ереван, Абовяна, 12, офис 3</a>
                </div>
            </div>

            <div className="footer__block-3 md:mb-0 mb-9 sm:mb-8">
                <SectionHead
                    title={"ДОКУМЕНТЫ"}
                    variant={'gray'}
                    className="mb-6"
                />
                <div className="gap-3 flex flex-col font-bold uppercase">
                    <a href="" className="hover:underline">Политика обработки персональных данных</a>
                    <a href="" className="hover:underline">Согласие на обработку персональных данных</a>
                    <a href="" className="hover:underline">Политика обработки файлов cookie</a>
                </div>
            </div>
        </footer>
    )
}