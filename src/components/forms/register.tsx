import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {ArrowTightIcon} from "@/assets/icons";

export const RegisterForm = () => {
    return <div className="bg-danger p-6 flex flex-col">
        <h2 className="max-w-[446px] mb-6 md:mb-48 lg:mb-85">
            Зарегистрироваться для участия
        </h2>

        <Input placeholder={"Телефон *"}/>

        <Checkbox className="mb-6">
            Я согласен с условиями политики конфиденциальности
        </Checkbox>

        <button className="form-button">
            Зарегистрироваться
            <ArrowTightIcon/>
        </button>
    </div>
}