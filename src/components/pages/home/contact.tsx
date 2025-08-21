import {SectionHead} from "@/components/widgets/section-head";
import {MailDogIcon, PhoneIcon, PositionPointIcon, TgIcon} from "@/assets/icons";
import {FeedbackForm} from "@/components/forms/feedback";

export const ContactSection = () => {
    return (
        <section
            className="contacts"
        >
            <div className="bg-black/20">
                <div className="container py-10 lg:py-8">
                    <SectionHead
                        id={'contacts'}
                        number={8}
                        title={"Контакты"}
                        variant={'white'}
                    />

                    <h2 className="mb-6 sm:mb-8">
                        Вы спрашиваете — <br/> мы отвечаем честно
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <FeedbackForm/>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 lg:gap-4 -order-1 lg:order-1">
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
                    </div>
                </div>
            </div>
        </section>
    )
}