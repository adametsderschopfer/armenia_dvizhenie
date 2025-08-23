'use client'

import {SectionHead} from "@/components/widgets/section-head";
import {Accordion} from "@/components/ui/accordion";
import {useState} from "react";

const faqList = [
    {
        title: "Кто вас финансирует?",
        content: "Текущая власть подавляет голос народа — и на улицах, и в парламенте."
    },
    {
        title: "Чем мы отличаемся от других общественных инициатив?",
        content: "Текущая власть подавляет голос народа — и на улицах, и в парламенте."
    },
    {
        title: "Как движение финансирует свои проекты?",
        content: "Текущая власть подавляет голос народа — и на улицах, и в парламенте."
    },
    {
        title: "Это партия?",
        content: "Текущая власть подавляет голос народа — и на улицах, и в парламенте."
    },
]

export const FaqSection = () => {
    const [openedIndex, setOpenedIndex] = useState<number>(0);

    const handleOpen = (idx: number) => {
        setOpenedIndex(idx);
    }

    return (
        <section className="container mb-10 lg:mb-30">
            <SectionHead
                number={7}
                title={"FAQ"}
            />

            <h2 className="text-black mb-6 sm:mb-8 max-w-[530px]">
                Вы задаёте вопросы — <br/> мы честно отвечаем
            </h2>

            <div className="flex flex-col gap-2 sm:gap-4 pl-0 lg:pl-78">
                {faqList.map((faq, index) => (
                    <Accordion
                        key={`faq_item_${index}`}
                        title={faq.title}
                        open={openedIndex === index}
                        onClick={(e) => {
                            e.preventDefault()
                            handleOpen(index)
                        }}
                    >
                        {faq.content}
                    </Accordion>
                ))}
            </div>
        </section>
    )
}