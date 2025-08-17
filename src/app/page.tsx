import {ContactSection} from "@/components/sections/contact";
import {FaqSection} from "@/components/sections/faq";
import {PreventEventsSection} from "@/components/sections/prevent-events";
import {ParticipationSection} from "@/components/sections/participation";

export default function Home() {
    return (
        <>
            <ParticipationSection />
            <PreventEventsSection />
            <FaqSection />
            <ContactSection/>
        </>
    );
}
