import type {Metadata} from "next";

import localFont from "next/font/local";
import {FC, PropsWithChildren} from "react";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const freeSansFont = localFont({
    src: [
        {
            path: '../../public/fonts/freesans.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/freesansbold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-freesans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Движение",
};

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en">
        <body className={`${freeSansFont.variable}`}>
        <main>{children}</main>
        </body>
        </html>
    );
}

export default RootLayout