'use client'

import {SectionHead} from "@/components/widgets/section-head";
import {BlurCard} from "@/components/widgets/blur-card";
import {useState} from "react";
import {useMediaQuery} from "@/utils/media";

const goals = [
    {
        title: "#2.1",
        description: "Текущая власть строит государство страха и подчинения, а не свободы.",
        imageSrc: '/bgs/goals-and-mission.png',
    },
    {
        title: "#2.2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imageSrc: '/bgs/contact-section.jpg',
    },
    null,
    {
        title: "#2.2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imageSrc: '/example/example_1.webp',
    },
    {
        title: "#2.2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imageSrc: '/example/example_2.webp',
    },
    null,
    {
        title: "#2.2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imageSrc: '/example/example_3.jpg',
    },
]

export const GoalsAndMissionSection = () => {
    const isTablet = useMediaQuery("(max-width: 1440px)");
    const [activeGoalIndex, setActiveGoalIndex] = useState<number>(0)

    const handleCardClick = (index: number) => {
        setActiveGoalIndex(index)
    }

    return (
        <section
            className="bg-top bg-cover"
            style={{
                backgroundImage: !isTablet ? `url(${goals[activeGoalIndex]?.imageSrc})` : undefined,
            }}
        >
            <div className="lg:bg-black/20">
                <div className="container py-10 lg:py-8">
                    <SectionHead
                        id={'goals'}
                        number={3}
                        title={"ЦЕЛИ И МИССИЯ"}
                        variant={isTablet ? 'dark' : 'white'}
                    />

                    <h2 className="mb-6 sm:mb-8 max-w-[733px]  text-black lg:text-white">
                        Наша главная цель — вернуть Армению на верный путь
                    </h2>

                    <div className="flex overflow-y-scroll no-scrollbar lg:grid lg:grid-cols-4 gap-2 md:gap-4">
                        {goals.map((goal, index) => {
                            if (!goal) {
                                return <div className={"hidden lg:block"} key={index}/>
                            }

                            return (
                                <BlurCard
                                    key={index}
                                    active={isTablet || activeGoalIndex === index}
                                    onClick={() => handleCardClick(index)}
                                    {...goal}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}