import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {ArrowTightIcon} from "@/assets/icons";
import {Textarea} from "@/components/ui/textarea";

export const RegisterForm = () => {
    return <div className="bg-danger p-6 flex flex-col">
        <h2 className="text-white text-xl break-all max-w-[446px] mb-12 xl:mb-auto font-bold">
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