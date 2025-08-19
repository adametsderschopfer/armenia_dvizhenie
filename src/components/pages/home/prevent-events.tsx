import {SectionHead} from "@/components/widgets/section-head";
import {MessageCard} from "@/components/widgets/message-card";
import {ArrowTightIcon} from "@/assets/icons";

export const PreventEventsSection = () => {
    return (<section>
        <div className="container mb-20 lg:mb-30 overflow-hidden">
            <SectionHead
                number={6}
                title={"Прошедшие события"}
            />

            <div className="mb-6 sm:mb-8 flex justify-between items-end">
                <h2 className="text-black">
                    История наших шагов
                </h2>

                <button
                    className="hidden sm:flex cursor-pointer items-center justify-center gap-2 uppercase font-bold">
                    Все события <ArrowTightIcon/>
                </button>
            </div>

            <div className="flex overflow-y-scroll no-scrollbar lg:grid lg:grid-cols-4 gap-2 md:gap-4">
                <MessageCard
                    title={"Встреча с жителями региона Ширак"}
                    description={"Текущая власть подавляет голос народа — и на улицах, и в парламенте."}
                    href={"/"}
                />
                <MessageCard
                    title={"Встреча с жителями региона Ширак"}
                    description={"Текущая власть подавляет голос народа — и на улицах, и в парламенте."}
                    href={"/"}
                />

                <button
                    className="hidden lg:flex my-15 lg:my-30 cursor-pointer items-center justify-center gap-2 uppercase font-bold">
                    Все события <ArrowTightIcon/>
                </button>

                <MessageCard
                    title={"Встреча с жителями региона Ширак"}
                    description={"Текущая власть подавляет голос народа — и на улицах, и в парламенте."}
                    href={"/"}
                />
            </div>

            <button
                className="ml-auto mt-6 flex sm:hidden cursor-pointer items-center justify-center gap-2 uppercase font-bold">
                Все события <ArrowTightIcon/>
            </button>
        </div>
    </section>)
}