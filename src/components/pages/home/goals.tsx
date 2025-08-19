import {SectionHead} from "@/components/widgets/section-head";
import {BlurCard} from "@/components/widgets/blur-card";

export const GoalsAndMissionSection = () => {
    return (
        <section
            className="bg-top bg-cover bg-[image:url('/bgs/goals-and-mission.png')]"
        >
            <div className="bg-black/20">
                <div className="container py-10 lg:py-8">
                    <SectionHead
                        number={3}
                        title={"ЦЕЛИ И МИССИЯ"}
                        variant={'white'}
                    />

                    <h2 className="mb-8 max-w-[733px]">
                        Наша главная цель — вернуть Армению на верный путь
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <BlurCard
                            title={"#2.1"}
                            description={"Текущая власть строит государство страха и подчинения, а не свободы."}
                        />
                        <BlurCard
                            title={"#2.2"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        />
                        <div />
                        <BlurCard
                            title={"#2.2"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        />
                        <BlurCard
                            title={"#2.2"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        />
                        <div />
                        <BlurCard
                            title={"#2.2"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}