import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {ArrowTightIcon} from "@/assets/icons";
import {Textarea} from "@/components/ui/textarea";

export const FeedbackForm = () => {
    return <div className="bg-danger p-6 flex flex-col">
        <h2 className="md:max-w-[221px] mb-6 md:mb-11 lg:mb-36">
            Остались вопросы?
        </h2>

        <Input placeholder={"Телефон *"}/>
        <Input placeholder={"E-mail"}/>
        <Textarea placeholder={"Ваш вопрос"}/>

        <Checkbox className="mb-6">
            Я согласен с условиями <a href="/" target="_blank" className="underline">политики конфиденциальности</a>
        </Checkbox>

        <button className="form-button">
            Задать вопрос
            <ArrowTightIcon/>
        </button>
    </div>
}