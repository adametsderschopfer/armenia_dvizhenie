import {ContactSection} from "@/components/sections/contact";
import {FaqSection} from "@/components/sections/faq";
import {PreventEventsSection} from "@/components/sections/prevent-events";

export default function Home() {
    return (
        <>
            <PreventEventsSection />
            <FaqSection />
            <ContactSection/>
        </>
    );
}
