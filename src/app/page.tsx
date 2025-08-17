import {ContactSection} from "@/components/sections/contact";
import {FaqSection} from "@/components/sections/faq";
import {PreventEventsSection} from "@/components/sections/prevent-events";
import {ParticipationSection} from "@/components/sections/participation";
import {EventsSection} from "@/components/sections/events";


const eventSlides = [
    {
        date: '25.09 • 18:00',
        href: '/',
        imageSrc: '/example/card-1.png',
        city: 'г. Ереван',
        title: 'Встреча с жителями региона Ширак',
        description: 'Текущая власть подавляет голос народа — и на улицах, и в парламенте.',
    },
    {
        date: '26.09 • 19:30',
        href: '/',
        imageSrc: '/example/card-1.png',
        city: 'г. Гюмри',
        title: 'Обсуждение экономических реформ',
        description: 'Открытый диалог о будущем Обсуждение экономических реформ экономики и занятости.',
    },
    {
        date: '27.09 • 20:00',
        href: '/',
        imageSrc: '/example/card-1.png',
        city: 'г. Ванадзор',
        title: 'Молодёжный форум',
        description: 'Молодёжь требует перемен и реального участия в политике.',
    },
    {
        date: '28.09 • 17:00',
        href: '/',
        imageSrc: '/example/card-1.png',
        city: 'г. Капан',
        title: 'Экологическая инициатива',
        description: 'Сохраним природу родного края вместе.',
    },
];

export default function Home() {
    return (
        <>
            <EventsSection slides={eventSlides} />
            <ParticipationSection />
            <PreventEventsSection />
            <FaqSection />
            <ContactSection/>
        </>
    );
}
