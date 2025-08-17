"use client"

import {SectionHead} from "@/components/section-head";
import {BigCardSlider, IBigCardSlide} from "@/components/big-card-slider";
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
            // bigCardSliderRef.current.slideNext()
            // todo
        }
    }

    const handlePrevSlide = () => {
        if (bigCardSliderRef.current) {
            bigCardSliderRef.current.slidePrev()
        }
    }

    return (
        <section className="bg-accent pt-8 pb-15 mb-15">
            <div className="container">
                <SectionHead
                    number={4}
                    title={"СОБЫТИЯ"}
                    dark={false}
                />

                <div className="flex justify-between items-center mb-7">
                    <h2 className="text-xl font-bold text-white max-w-[465px]">Живое движение — живые шаги</h2>

                    <div className="text-white flex items-center content-center gap-2">
                        <div onClick={handlePrevSlide}
                             className="transition-[200ms] hover:bg-white hover:text-accent cursor-pointer flex items-center justify-center w-10 h-10 border-1 border-white/40">
                            <ArrowTightIcon className={"rotate-180"}/></div>
                        <div
                            onClick={handleNextSlide}
                            className="transition-[200ms] hover:bg-white hover:text-accent cursor-pointer flex items-center justify-center w-10 h-10 border-1 border-white/40">
                            <ArrowTightIcon/></div>
                    </div>
                </div>

                <BigCardSlider ref={bigCardSliderRef} slides={slides}/>
            </div>
        </section>
    )
}