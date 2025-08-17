import {SectionHead} from "@/components/section-head";
import {MessageCard} from "@/components/message-card";
import {ArrowTightIcon} from "@/assets/icons";

export const PreventEventsSection = () => {
    return (<section>
        <div className="container mb-15 lg:mb-30">
            <SectionHead
                number={6}
                title={"Прошедшие события"}
            />

            <h2 className="text-black text-xl mb-8 font-bold">
                История наших шагов
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    className="my-15 lg:my-30 cursor-pointer flex items-center justify-center gap-2 uppercase text-accent font-bold">
                    Все события <ArrowTightIcon/>
                </button>

                <MessageCard
                    title={"Встреча с жителями региона Ширак"}
                    description={"Текущая власть подавляет голос народа — и на улицах, и в парламенте."}
                    href={"/"}
                />
            </div>
        </div>
    </section>)
}