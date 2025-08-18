import {SectionHead} from "@/components/section-head";
import {MailDogIcon, PhoneIcon, PositionPointIcon, TgIcon} from "@/assets/icons";
import {FeedbackForm} from "@/components/forms/feedback";

export const ContactSection = () => {
    return (
        <section
            className="bg-top bg-cover bg-[image:url('@/assets/bgs/contact-section.jpg')]"
        >
            <div className="bg-black/20">
                <div className="container py-8">
                    <SectionHead
                        number={8}
                        title={"Контакты"}
                        dark={false}
                    />

                    <h2 className="mb-8 max-w-[442px]">
                        Вы спрашиваете — мы отвечаем честно
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="blurred-card">
                                <PhoneIcon/>
                                <p className="blurred-card__text">+374 XX XXX XXX</p>
                            </div>
                            <div className="blurred-card">
                                <TgIcon/>
                                <p className="blurred-card__text">@yourmovement</p>
                            </div>
                            <div className="blurred-card">
                                <MailDogIcon/>
                                <p className="blurred-card__text">hello@вашдомен.am</p>
                            </div>
                            <div className="blurred-card">
                                <PositionPointIcon/>
                                <p className="blurred-card__text">Ереван, Абовяна, 12, офис 3</p>
                            </div>
                        </div>

                        <FeedbackForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}