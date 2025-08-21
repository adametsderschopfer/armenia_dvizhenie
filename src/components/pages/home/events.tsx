"use client"

import {SectionHead} from "@/components/widgets/section-head";
import {BigCardSlider, IBigCardSlide} from "@/components/widgets/big-card-slider";
import {FC, useRef} from "react";
import {SwiperClass} from "swiper/react";
import {ArrowTightIcon} from "@/assets/icons";

interface IEventsSectionProps {
    slides: IBigCardSlide[]
}

export const EventsSection: FC<IEventsSectionProps> = ({slides}) => {
    const bigCardSliderRef = useRef<SwiperClass>(null);

    const handleNextSlide = () => {
        if (bigCardSliderRef.current) {
            bigCardSliderRef.current.slideNext()
        }
    }

    const handlePrevSlide = () => {
        if (bigCardSliderRef.current) {
            bigCardSliderRef.current.slidePrev()
        }
    }

    return (
        <section className="bg-accent pt-10 lg:pt-8 mb-10 lg:mb-15 lg:h-180">
            <div className="container">
                <SectionHead
                    id={'events'}
                    number={4}
                    title={"СОБЫТИЯ"}
                    variant={'white'}
                />

                <div className="flex justify-between items-start sm:items-center flex-row mb-5 sm:mb-6 md:mb-8">
                    <h2 className="max-w-[465px]">Живое движение — живые шаги</h2>

                    <div className="text-white flex items-center content-center gap-2 pt-15 sm:pt-0">
                        <div onClick={handlePrevSlide}
                             className="duration-200 hover:bg-white hover:text-accent cursor-pointer flex items-center justify-center w-10 h-10 border-1 border-white/40">
                            <ArrowTightIcon className={"rotate-180"}/></div>
                        <div
                            onClick={handleNextSlide}
                            className="duration-200 hover:bg-white hover:text-accent cursor-pointer flex items-center justify-center w-10 h-10 border-1 border-white/40">
                            <ArrowTightIcon/></div>
                    </div>
                </div>

                <BigCardSlider ref={bigCardSliderRef} slides={slides}/>
            </div>
        </section>
    )
}