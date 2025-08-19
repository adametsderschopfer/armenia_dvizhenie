'use client'

import {Swiper, SwiperClass, SwiperRef, SwiperSlide} from "swiper/react";
import {ArrowTightIcon} from "@/assets/icons";
import Image from "next/image";
import {forwardRef} from "react";

export interface IBigCardSlide {
    date: string;
    href: string;
    imageSrc: string;
    city: string;
    title: string;
    description: string;
}

interface IBigCardSliderProps {
    slides: IBigCardSlide[]
}

// eslint-disable-next-line react/display-name
export const BigCardSlider = forwardRef<SwiperClass, IBigCardSliderProps>(({slides}, ref) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            onSwiper={(s) => {
                // @ts-ignore
                ref.current = s;
            }}
            loop={true}
            slideActiveClass={'big-card-slide-active'}
            wrapperClass={'pb-10 lg:pb-15'}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="min-h-[404px] sm:max-w-[325px] duration-200">
                    <a className="text-white block" href={slide.href}>
                        <div className="mb-4 relative">
                            <div
                                className="absolute top-4 left-4 py-2 px-5 text-white font-bold text-sm backdrop-blur-sm bg-black/20">
                                {slide.date}
                            </div>

                            <Image
                                src={slide.imageSrc}
                                alt={slide.title}
                                width={325}
                                height={183}
                                className="w-full object-cover h-[404px] sm:h-[183px]"
                            />
                        </div>

                        <div className="mb-3 text-white/40 font-bold text-base">{slide.city}</div>

                        <h3 className="mb-3 text-lg font-bold">{slide.title}</h3>

                        <p className="text-base text-white/70">{slide.description}</p>

                        <div
                            className="mt-8 uppercase text-base font-bold gap-2 flex items-center text-blue-300 hover:text-white transition-colors">
                            Подробнее
                            <ArrowTightIcon/>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
})