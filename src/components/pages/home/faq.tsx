import {SectionHead} from "@/components/section-head";
import {Accordion} from "@/components/ui/accordion";

export const FaqSection = () => {
    return (
        <section className="container mb-15 lg:mb-30">
            <SectionHead
                number={7}
                title={"FAQ"}
            />

            <h2 className="text-black mb-8 max-w-[530px]">
                Вы задаёте вопросы — мы честно отвечаем
            </h2>

            <div className="flex flex-col gap-4 pl-0 lg:pl-78">
                <Accordion title={"Кто вас финансирует?"} open>
                    Текущая власть подавляет голос народа — и на улицах, и в парламенте.
                </Accordion>

                <Accordion title={"Чем мы отличаемся от других общественных инициатив?"}>
                    Текущая власть подавляет голос народа — и на улицах, и в парламенте.
                </Accordion>

                <Accordion title={"Как движение финансирует свои проекты?"}>
                    Текущая власть подавляет голос народа — и на улицах, и в парламенте.
                </Accordion>

                <Accordion title={"Это партия?"}>
                    Текущая власть подавляет голос народа — и на улицах, и в парламенте.
                </Accordion>
            </div>
        </section>
    )
}