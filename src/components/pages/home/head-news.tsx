'use client'

import {FC, useEffect, useState} from "react";
import {SectionHead} from "@/components/widgets/section-head";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {ArrowTightIcon} from "@/assets/icons";
import Link from "next/link";

interface INewsSlide {
    title: string;
    imageSrc: string;
}

interface IHeadNewsSectionProps {
    slides: INewsSlide[]
}

export const HeadNewsSection: FC<IHeadNewsSectionProps> = (
    {
        slides
    }
) => {
    const [currentBackgroundUrl, setCurrentBackgroundUrl] = useState<string>('')

    const handleSlideChange = (swiper: SwiperClass) => {
        const currentSlide = slides[swiper.realIndex];
        if (currentSlide) {
            setCurrentBackgroundUrl(currentSlide.imageSrc);
        }
    }

    useEffect(() => {
        if (slides.length !== 0) {
            const firstSlide = slides[0]
            setCurrentBackgroundUrl(firstSlide.imageSrc);
        }
    }, [slides]);

    return (
        <section
            className={`relative container flex flex-col justify-end h-screen duration-300 mb-20 lg:mb-30 bg-cover`}
            style={{
                backgroundImage: `url(${currentBackgroundUrl})`,
            }}
        >
            <div className="z-1 absolute top-18 sm:top-20 md:top-16 lg:top-24 right-2 sm:right-4 md:right-0 md:left-0 lg:left-[initial] lg:right-8 md:backdrop-blur-sm lg:backdrop-blur-none p-4 sm:p-6 bg-quaternary/60 md:bg-quaternary/50 lg:bg-quaternary/60 max-w-38 sm:max-w-42 text-white">
                <div className="mb-1 sm:mb-2 font-bold text-[28px] leading-[100%] sm:text-xl">1 236</div>
                <div className="">
                    единомышленников с нами
                </div>
                <span className="opacity-100 md:opacity-0 lg:opacity-100 card-triangle text-quaternary/60 md:text-quaternary/50 lg:text-quaternary/60" />
            </div>

            <SectionHead
                id={'news'}
                className="max-w-272 z-1"
                variant={'white'}
                number={1}
                title={'НОВОСТИ'}
            />

            <div className="z-1 flex items-start lg:items-center mb-12 sm:mb-22 justify-between w-full flex-col lg:flex-row">
                <Swiper
                    modules={[Autoplay, Pagination]}

                    onSlideChange={handleSlideChange}

                    slidesPerView={1}
                    loop={true}
                    autoHeight={true}
                    autoplay={{
                        delay: 4000
                    }}
                    pagination={{
                        enabled: true,
                        el: ".news-slider__pagination",
                        bulletActiveClass: "news-slider__pagination-bullet-active",
                        bulletClass: "news-slider__pagination-bullet",
                    }}

                    className={'md:min-h-40 mb-8 lg:mb-0 flex flex-1 w-full'}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cursor-default text-[28px] leading-[100%] sm:text-2xl font-bold text-white max-w-167">
                                {slide.title}
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <Link
                    href="/"
                    className="flex items-center justify-center hover:bg-accent hover:text-white cursor-pointer duration-200 bg-white uppercase text-accent text-sm font-bold gap-2 py-4 sm:py-[33px] px-7 w-full sm:w-[initial]"
                >
                    Все новости <ArrowTightIcon/>
                </Link>
            </div>

            <div className="news-slider__pagination z-1"></div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-300 ease-in-out"/>
        </section>
    )
}