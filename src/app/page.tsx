import {ContactSection} from "@/components/pages/home/contact";
import {FaqSection} from "@/components/pages/home/faq";
import {PreventEventsSection} from "@/components/pages/home/prevent-events";
import {ParticipationSection} from "@/components/pages/home/participation";
import {EventsSection} from "@/components/pages/home/events";
import {GoalsAndMissionSection} from "@/components/pages/home/goals";
import {AboutSection} from "@/components/pages/home/about";
import {HeadNewsSection} from "@/components/pages/home/head-news";


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

const newsSlides = [
    {
        title: "В Ереване прошёл марш за смену власти — более 3 000 участников",
        imageSrc: '/example/card-1.png',
    },
    {
        title: "Еще больше новостей на этом сайте",
        imageSrc: '/bgs/contact-section.jpg',
    },
]

export default function Home() {
    return (
        <>
            <HeadNewsSection slides={newsSlides}/>
            <AboutSection/>
            <GoalsAndMissionSection/>
            <EventsSection slides={eventSlides}/>
            <ParticipationSection/>
            <PreventEventsSection/>
            <FaqSection/>
            <ContactSection/>
        </>
    );
}
