import {SectionHead} from "@/components/section-head";
import {RegisterForm} from "@/components/forms/register";
import {ArrowFallIcon, CompassIcon, TentIcon} from "@/assets/icons";

export const ParticipationSection = () => {
    return (
        <section className="container mb-15 lg:mb-30">
            <SectionHead
                number={5}
                title={"Участие"}
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col justify-between bg-white p-6 h-[667px]">
                    <h2 className="text-black max-w-[410px]">
                        Хочешь быть частью перемен?
                    </h2>

                    <div className="flex items-center justify-center flex-wrap gap-1">
                        <div className="icon-tag icon-tag-text">Без страха</div>
                        <div className="icon-tag icon-tag-icon"><TentIcon/></div>
                        <div className="icon-tag icon-tag-text">
                            Без подчинения
                        </div>
                        <div className="w-full"/>
                        <div className="icon-tag icon-tag-text">Без обнищания</div>
                        <div className="icon-tag icon-tag-icon"><ArrowFallIcon/></div>
                        <div className="icon-tag icon-tag-text">Без развала институтов</div>
                        <div className="icon-tag icon-tag-icon"><CompassIcon/></div>
                    </div>

                    <p className="max-w-[265px] text-base text-black/40">
                        Приглашаем всех желающих вступить в наше движение, которое изменит Армению
                    </p>
                </div>

                <RegisterForm/>
            </div>
        </section>
    )
}