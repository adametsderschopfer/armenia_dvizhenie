'use client'

import {FC, useEffect, useState} from "react";
import {SectionHead} from "@/components/widgets/section-head";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {ArrowTightIcon} from "@/assets/icons";

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
            className={`container flex flex-col justify-end h-screen duration-300 mb-20 lg:mb-30 bg-cover`}
            style={{
                backgroundImage: `url(${currentBackgroundUrl})`,
            }}
        >
            <SectionHead
                className="max-w-272"
                variant={'white'}
                number={1}
                title={'НОВОСТИ'}
            />

            <div className="flex items-start lg:items-center mb-22 justify-between w-full flex-col lg:flex-row">
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
                            <div className="cursor-default text-[34px] leading-[100%] sm:text-xxl font-bold text-white max-w-167">
                                {slide.title}
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <a
                    href="/"
                    className="flex items-center justify-center hover:bg-accent hover:text-white cursor-pointer duration-200 bg-white uppercase text-accent text-sm font-bold gap-2 py-4 sm:py-[33px] px-7 w-full sm:w-[initial]"
                >
                    Все новости <ArrowTightIcon/>
                </a>
            </div>

            <div className="news-slider__pagination"></div>
        </section>
    )
}