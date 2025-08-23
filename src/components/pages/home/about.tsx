import {SectionHead} from "@/components/widgets/section-head";
import {FC} from "react";
import Image from "next/image";
import {QuoteIcon} from "@/assets/icons";

export const AboutSection = () => {
    return (
        <section className="container mb-20 lg:mb-30">
            <SectionHead
                number={2}
                title={"О движении"}
            />

            <h2 className="text-black max-w-[733px] mb-6 sm:mb-8">
                Наше движение родилось из веры в то, что перемены возможны
            </h2>

            <div className="relative flex flex-col max-w-[1015px] lg:max-w-[1375px] ml-auto gap-2 sm:gap-4 lg:gap-8">
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 1"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 2"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 3"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 4"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 5"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
                <AboutCard
                    imageSrc={'/example/person.png'}
                    fullName={"Артак Геворгян 6"}
                    about={"Артак — агроэкономист, фермер, активист. Основал кооператив из 15 фермеров, чтобы защитить права крестьян. Выступал против незаконного захвата земли, организовывал местные митинги."}
                    blockquote={"          Село — не прошлое Армении. Это её сердце. Пока оно бьётся — страна жива. Я здесь, чтобы это сердце не остановилось"}
                />
            </div>
        </section>
    )
}

interface IAboutCardProps {
    imageSrc: string
    fullName: string
    about: string
    blockquote: string
}

const AboutCard: FC<IAboutCardProps> = ({
                                            imageSrc,
                                            fullName,
                                            about,
                                            blockquote
                                        }) => (
    <div className="md:sticky top-16 flex gap-2 lg:gap-4 flex-col md:flex-row items-center md:items-stretch">
        <Image
            src={imageSrc}
            alt={fullName}
            width={355}
            height={462}

            className="w-full md:max-w-71 object-contain md:object-cover"
        />
        <div className="w-full bg-white p-4 md:p-6">
            <div className="flex flex-col justify-between h-full max-w-[880px]">
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="font-bold text-xlg sm:max-w-49 pr-4">{fullName}</div>
                    <p className="sm:max-w-59 text-black/40 text-base mt-3 mb-10 lg:mt-0 lg:mb-0">{about}</p>
                </div>

                {blockquote && (
                    <div className="flex flex-col sm:gap-2">
                        <QuoteIcon/>
                        <p className="max-w-[640px] text-base text-[18px] leading-[105%] md:text-lg font-bold indent-10 md:indent-15">
                            {blockquote}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
)